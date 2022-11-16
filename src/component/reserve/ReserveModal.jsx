import React, { useContext, useState } from "react";

import reserveContext from "./reserveContext";

import  Toast  from "../elements/Toast";

import Modal from "react-modal";
import { confirmReserve } from "../../dataService/reserveProvider";
import styles from "../../../public/styles/reservePage.module.css";

function ReserveModal(props){

    const { toggleModal, isOpen } = props;

    const {dispatch, userChoiceState : { service: { value, id }, category, date : {day, month, year}, employee : {fName, lName, employeeId, personId} } } = useContext(reserveContext);

    const [ state, setState ] = useState({ 
        showToast : false,
        msg: null,
        error : false
    }); 

    Modal.setAppElement("#__next");

    const customStyles = {
        overlay:{
            backgroundColor:"rgba(0,0,0, .5)",
            zIndex:"50"
        },
        content:{
            width: "70%",
            display:"flex",
            margin:"auto",
            padding:"1em 1em 2em 1.5em",
            borderRadius: "8px",
            // zIndex  : "50",
            position: "relative"
        }
    };

    function hideToast(reset){

        setTimeout(()=>{
            
            setState({
                showToast : false
            });

            if(reset)
                dispatch({
                    type : "RESET_DATA",
                });

        }, 1500);
    }

    function submitReserve(){

        const reserveData = {
            reserveDate : `${year}/${month}/${day}`,
            employeeId : employeeId,
            employeePersonId : personId, 
            serviceId : id 
        } 

        confirmReserve( reserveData ).then( response => {
            setState({
                showToast : true,
                msg :  "رزرو با موفقیت ثبت شد",
                error : false
            });
 
            hideToast(true);
        }).catch( err => {
            let errorMsg;
            if(err.response.status == 401)
                errorMsg = "برای ثبت رزرو باید ابتدا به حساب خود وارد شوید"
            else 
                errorMsg = "در ثبت رزرو خطایی رخ داده است"
            setState({
                showToast : true,
                msg :  errorMsg,
                error : true
            });
            hideToast(false);
        });
    }


    return(
        <Modal            
            isOpen={isOpen}
            style={customStyles}>

            <div className="w-100">
                <div> 
                    <i role="button" onClick={()=>toggleModal(false)} className="fa text-danger fs-3 fa-times" aria-hidden="true"></i>
                </div>

                <div className="w-100 mt-5 pe-5">

                    <div className="mb-4">
                        <span className={styles["reserve-result-modal-title"]}>خدمت</span>
                        <div className={styles["reserve-result-modal-data"]}>
                            {category.value}
                        </div>
                    </div>
 
                    <div className="mb-4"> 
                        <span className={styles["reserve-result-modal-title"]}>سرویس</span>
                        <div className={styles["reserve-result-modal-data"]}>
                            {value}
                        </div>
                    </div>

                    <div className="mb-4">
                        <span className={styles["reserve-result-modal-title"]}>کارمند</span>
                        <div className={styles["reserve-result-modal-data"]}>
                        {
                            fName+" "+lName
                        }
                        </div>
                    </div>

                    <div className="mb-4">
                        <span className={styles["reserve-result-modal-title"]}>تاریخ</span>
                        <div className={styles["reserve-result-modal-data"]}>
                        {
                            year+"/"+month+"/"+day
                        }
                        </div>
                    </div>

                    <div className="d-flex justify-content-end w-100 mt-5">
                        <button onClick={submitReserve} className={styles["confirm-reserve-btn"]}>تایید رزرو</button>
                    </div>

                </div>

            </div>
            {
            state.showToast ? <div style={{position:"relative", zIndex : "500"}}><Toast toatData={ { message: state.msg, error:state.error } }/></div> 
            : <></>
            }
        </Modal>
    )
}

export default ReserveModal;