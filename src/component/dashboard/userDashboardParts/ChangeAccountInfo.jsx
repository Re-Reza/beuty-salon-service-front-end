import React, { useState } from  'react';

import { changeUserInfo } from "../../../dataService/userDashboardProvider";
import { useFormik } from "formik";
import { object, string, ref } from "yup"; 
import { getInfo } from '../../../dataService/userDashboardProvider';
import Toast from '../../elements/Toast';

import styles from "../../../../public/styles/dashboard.module.css"


export function ChangeAccountInfo(props){

    // const [infoState, setInfoState ] = useState({
    //     fName : "",
    //     lName : "",
    //     phone : "",
    // });

    const [ showPasswordState, setShowPasswordState ] = useState({
        confirmPassword: false,
        newPass: false,
        showToast : false,
        error : false,
        msg : null
    });

    // useEffect(()=> {
    //     getInfo().then( response => {
    //         setInfoState({
    //             ...response.data.result
    //         });
    //     }).catch(err => console.log(err))
    // }, []);

    const schema = object().shape({
        fName : string("").min(2, "نام باید حداقل شامل دو کاراکتر باشد").max(100, "نام بیش از حد مجاز").trim(),
        lName : string("").min(2, "نام خانوادگی باید حداقل شامل دو کاراکتر باشد").max(100, "نام خانوادگی بیش از حد مجاز").trim(), 
        password : string("").required("رمز عبور فعلی الزامی است").min(4, "رمز عبور باید حداقل شامل چهار کاراکتر باشد").trim(),
        newPassword : string("").min(4, "رمز عبور باید حداقل شامل چهار کاراکتر باشد").trim(),
        confirmNewPassword: string("").oneOf([ ref('newPassword'), null], "رمز عبور جدید و تکرار آن مطابقت ندارد").trim()
      });

    const formik = useFormik({
        initialValues : {
            fName:"",
            lName:"", 
            phone:"",
            newPassword: "",
            confirmNewPassword:"",
            password: ""
        },
        
        validationSchema:schema,

        onSubmit : values => {
            // console.log(values);
            const { confirmNewPassword, ...newData } = values;
            console.log(newData); 
            changeUserInfo(newData).then( response => {
                
                setShowPasswordState({
                    ...showPasswordState,
                    error : false,
                    showToast : true,
                    msg : "اطلاعات شما با موفقیت تغییر کرد"
                });
                props.setRequest();
                hideToast();
            
            }).catch( err => {
                let message;
                if(err.response.status == 422)
                    message = "رمز عبور وارد شده اشتباه است "                
                else 
                    message = "در تغییر اطلاعات خطایی رخ داده است"
                setShowPasswordState({
                    ...showPasswordState,
                    showToast : true,
                    error : true,
                    msg : message
                });
                hideToast();
            })
        }
    });

    function toggleShowPassword(key) {
        setShowPasswordState({
            ...showPasswordState,
            [key] : !showPasswordState[key]
        })
    }

    function hideToast(){
        setTimeout(()=>{
            
            setShowPasswordState({
                ...setShowPasswordState,
                showToast : false
            });

        }, 2000);
    }

    const { fName, lName, newPassword, password, confirmNewPassword }  = formik.errors;
    const {confirmPassword, newPass} = showPasswordState;

    return (
        <>
            {
                showPasswordState.showToast?
                <Toast toatData={ { error: showPasswordState.error, message : showPasswordState.msg } }/> : <></>
            }
            <form action="" onSubmit={formik.handleSubmit}>
                <div className="w-100 d-flex justify-content-center">
                    <div className={styles["change-user-info"]}>
                        
                        <div className={styles['change-info-inputContainer']} >
                            <label className='mb-3' htmlFor="change-fName"> نام جدید</label>
                            <input onChange={formik.handleChange} name='fName' className={styles["change-info-input"]} id="change-fName" type="text" />
                            <small className={'text-danger mt-1'}>{fName}</small>
                        </div>

                        <div className={styles['change-info-inputContainer']} >
                            <label className='mb-3' htmlFor="change-lName"> نام خانوادگی جدید</label>
                            <input onChange={formik.handleChange} name='lName' className={styles["change-info-input"]} id="change-lName" type="text" />
                            <small className={'text-danger mt-1'}>{lName}</small>
                        </div>
                                
                        <div className={styles['change-info-inputContainer']}>
                            <label className='mb-3' htmlFor="change-phone">شماره موبایل جدید</label>
                            <input onChange={formik.handleChange} name='phone' className={styles["change-info-input"]} id="change-phone" type="tel" />
                        </div>

                        
                        <div className={styles['change-info-inputContainer']}>

                            <label htmlFor='newPassword' className='mb-3'>رمز عبور جدید</label>
                            <div className={'w-100  position-relative'}>
                                <input onChange={formik.handleChange} id="newPassword" className={styles["change-info-input"]+" "+"w-100"} type={newPass? "text" : "password"} />
                                <span onClick={()=>{toggleShowPassword("newPass")}}>
                                {
                                    newPass ? <i title="مخفی کردن رمز عبور" className={"fa fa-eye-slash"+" "+styles['passwordHider']} aria-hidden="true"></i>
                                    :<i title="نمایش رمز عبور" className={"fa fa-eye"+" "+styles['passwordHider']} aria-hidden="true"></i>
                                }
                                </span>
                            </div>
                            <small className={'text-danger mt-1 mb-4'}>{newPassword}</small>

                            <label htmlFor='newPasswordConfirm' className='mb-3'>تکرار رمز عبور جدید</label>
                            <div className={'w-100 position-relative'}>
                                <input onChange={formik.handleChange} name="confirmNewPassword" type={confirmPassword? "text" : "password"} id="newPasswordConfirm" className={styles["change-info-input"]+" "+"w-100"} />
                                <span onClick={()=>{toggleShowPassword("confirmPassword")}}>
                                {
                                    confirmPassword ? <i title="مخفی کردن رمز عبور" className={"fa fa-eye-slash"+" "+styles['passwordHider']} aria-hidden="true"></i>
                                    :<i title="نمایش رمز عبور" className={"fa fa-eye"+" "+styles['passwordHider']} aria-hidden="true"></i>
                                }
                                </span>
                            </div>
                            <small className={'text-danger mt-1 mb-4'}>{confirmNewPassword}</small>
                        </div>

                        <div className={styles['change-info-inputContainer']}>
                            <label className='mb-3' htmlFor="currentPassword">رمز عبور فعلی</label>
                            <input onChange={formik.handleChange} name='password' className={styles["change-info-input"]} id="currentPassword" type="password" />
                            <small className={'text-danger mt-1'}>{password}</small>
                        </div>
                            

                        <div className='d-flex justify-content-end w-100 mt-4'>
                            <button type='submit' className='btn btn-success'>تایید اطلاعات</button>
                        </div>

                    </div>
                </div>
            </form>

        </>
    )
}
