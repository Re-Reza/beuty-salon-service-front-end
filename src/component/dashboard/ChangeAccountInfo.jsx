import React, { useState } from  'react';

import styles from "../../../public/styles/dashboard.module.css"

import { object, string, ref } from "yup"; 

export function ChangeAccountInfo(){

    const [ showPasswordState, setShowPasswordState ] = useState({
        currentPass: false,
        newPass: false
    });

    function toggleShowPassword(key) {
        setShowPasswordState({
            ...showPasswordState,
            [key] : !showPasswordState[key]
        })
    }
    const {currentPass, newPass} = showPasswordState;

    return (
        <div className="w-100 d-flex justify-content-center">
            <div className={styles["change-user-info"]}>
                
                <div className={styles['change-info-inputContainer']} >
                    <label className='mb-3' htmlFor="change-uesrname">تغییر نام کاربری</label>
                    <input className={styles["change-info-input"]} id="change-uesrname" type="text" />
                </div>
                
                <div className={styles['change-info-inputContainer']}>
                    <label className='mb-3' htmlFor="change-phone">تغییر شماره موبایل</label>
                    <input className={styles["change-info-input"]} id="change-phone" type="tel" />
                </div>
                
                <div className={styles['change-info-inputContainer']}>
                    <label className='mb-3' htmlFor="change-email">تغییر ایمیل</label>
                    <input className={styles["change-info-input"]} id="change-email" type="email" />
                </div>
                
                <div className={styles['change-info-inputContainer']}>
                    <label className='mb-3'>تغییر رمز عبور </label>
                    <div className={'w-100 mb-4'}>
                        <input className={styles["change-info-input"]+" "+"w-100"} type={currentPass? "text" : "password"} placeholder='رمز عبور فعلی'/>
                        {/* <span onClick={()=>{toggleShowPassword("currentPass")}}>
                        {
                            currentPass ? <i title="مخفی کردن رمز عبور" className={"fa fa-eye-slash"+" "+styles['passwordHider']} aria-hidden="true"></i>
                            :<i title="نمایش رمز عبور" className={"fa fa-eye"+" "+styles['passwordHider']} aria-hidden="true"></i>
                        }
                        </span> */}
                    </div>

                    <div className={'w-100 mb-4'}>
                        <input type={newPass? "text" : "password"}  className={styles["change-info-input"]+" "+"w-100"}  placeholder='رمز عبور جدید'/>
                        {/* <span onClick={()=>{toggleShowPassword("newPass")}}>
                        {
                            newPass ? <i title="مخفی کردن رمز عبور" className={"fa fa-eye-slash"+" "+styles['passwordHider']} aria-hidden="true"></i>
                            :<i title="نمایش رمز عبور" className={"fa fa-eye"+" "+styles['passwordHider']} aria-hidden="true"></i>
                        }
                        </span> */}
                    </div>
                </div>
                    
                <div className='w-100 d-flex justify-content-end' >
                    <button className="btn btn-success">تغییر اطلاعات</button>
                </div>

            </div>
        </div>
    )
}
