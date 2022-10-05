import React, { useState, useEffect } from "react";

import { getInfo } from "../../../dataService/userDashboardProvider";
import FormData from "form-data";
import styles from "../../../../public/styles/dashboard.module.css";
import InfoBox from "./InfoBox";
import Toast from "../../elements/Toast";
import axiosInstance from "../../../dataService/axiosInstance";
import { getCookie } from "../../../dataService/cookieProvider";
import { ProgressBar } from "react-bootstrap";
import { convertEnToPe } from "persian-number"

export function MainPart(){

    const [ state, setState ] = useState({
        loading : true,
        data : [],
        profileImg : null,
        newProfileImg : null,
        showToast : false,
        error : false,
        msg : null
    });

    const [progress, setProgress] = useState();

    function hideToast(img){
        setTimeout(()=>{
            setState({
                ...state,
                showToast : false,
                profileImg: img ? img : state.profileImg,
                newProfileImg : null
            });
            setProgress();
        }, 2000);
    }

    useEffect(() => {
        getInfo().then( response => {
            setState({
                ...state,
                loading: false,
                data : Object.entries(response.data.result),
                profileImg : Object.entries(response.data.result)[3][1],
            });
        }).catch( err => {
            console.log(err)
        });
        
    }, []);

    function setProfile(event)  {
        setState({
            ...state,
            newProfileImg : event.target.files[0]
        })
    }
    console.log("rerender")
    function sendProfile(event){
        event.preventDefault();
        const config = {
            onUploadProgress: progressEvent => {
                progress = (progressEvent.loaded / progressEvent.total) * 100;
                setProgress( progress );
            }
        }
      
        if(state.newProfileImg != null){
            let formData = new FormData();
            formData.append("profileImage", state.newProfileImg);
            // console.log(Object.fromEntries(formData))

            // "https://httpbin.org/post"
            axiosInstance.post(`userDashboard/uploadProfileImage?token=${getCookie()}`, formData, {
                headers: {
                  "Content-Type": "multipart/form-data",
                }, 
                onUploadProgress : (data) => {
                    console.log(data.loaded );
                    setProgress(Math.round((100 * data.loaded) / data.total));
                },
                // ...config
            
            }).then( response => {
                setState({
                    ...state,
                    error : false,
                    showToast : true,
                    msg : "تصویر با موفقیت بارگزاری شد",
                    profileImg: response.data.result,
                    newProfileImg : null,
                });
                
                hideToast(response.data.result);
            }).catch(err => {
                setState({
                    ...state,
                    error : true,
                    showToast : true,
                    msg : "در بارگزاری تصویر خطایی رخ داده است"
                });
                hideToast();
            });
        }
        else{
            setState({
                ...state,
                error : true,
                showToast : true,
                msg : "تصویر مورد نظر را انتخاب کنید"
            });
            hideToast();
        }
    }

    function deleteProfile(){

        axiosInstance.post(`userDashboard/uploadProfileImage?isDelete=1&token=${getCookie()}`).then( response => {
            setState({
                ...state,
                profileImg : null,
                newProfileImg :null
            });
        }).catch( err => {
            console.log(err)
        })
    }

    return(
        state.loading? 
        <div>loading</div>
        :
        <>
        {
            state.showToast? <Toast toatData={ { error: state.error, message : state.msg} }/> : <></>
        }
        <div className="d-flex flex-column ">

            <div className={styles['profile-imageCotainer']}>

                <form onSubmit={sendProfile}>
                    <div className={ styles["profile-img-container"]}>
                        <img src={state.profileImg ? "http://localhost:4000/"+ state.profileImg: "/imgs/user.png"} className={styles["profile-img"]} alt="" />
                        <input value={""} onChange={setProfile} accept=".png, .jpeg, .jpg" title="بارگزاری تصویر" type="file" className={styles["profile-upload-input"]}/>
                    </div>
                    <div className="w-100 d-flex justify-content-center mt-3">
                        <button className="btn btn-primary" type="submit">تایید <i className="fa fa-upload" aria-hidden="true"></i> </button>
                        {
                            state.profileImg ? <button type="button" onClick={deleteProfile} className="btn btn-danger me-3">حذف تصویر <i className="fa fa-trash-o" aria-hidden="true"></i></button>
                            :<></>
                        }    
                    </div>
                    {
                        progress? 
                        <div className="w-100 d-flex justify-content-center">
                            <ProgressBar className={ styles['progress-uploadData'] } now={progress} label={`${convertEnToPe(progress)}%`} />
                        </div>: <></>
                    }
                </form>

            </div>
            
            <ul className={styles["UserInfoContainer"]}>   
            {
                state.data.map( (item, index) => <InfoBox item={item} key={index}/> )
            }
            </ul>

        </div>
        </>
    )
}