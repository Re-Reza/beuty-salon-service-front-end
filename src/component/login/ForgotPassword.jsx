import React, { useState } from "react";

import styles from "../../../public/styles/login.module.css";

function ForgetPasswordComponent(){
    //validate phone number

    const [ state, setState ] = useState({
        confirmPhone : false
    }); 
    
    function sendPhoneNumber(event){

        event.preventDefault();

        setState({
            ...state,
            confirmPhone : true
        })
    }

    return(
        <div className={styles["login-container"]}>
        
            <form onSubmit={sendPhoneNumber} noValidate action="#" id={styles['login-form']}>
            {
                state.confirmPhone ?
                <>
                    <div>
                        <input name="cede" type="password" 
                        className={styles["login-input" ] } id="phone-input" placeholder="کد ارسالی را وارد کنید" />
                        <div className="d-flex justify-content-end mt-4"><button className="btn btn-success">تایید</button></div>
                    </div>
                </>
                :
                <>
                    <h2 className={"text-center mb-4"+" "+styles.title}>فراموشی رمز عبور</h2>
            
                    <div className="d-flex justify-content-center">
                        <img className={styles["forgetPassword-img"]} src="/imgs/My password-pana.svg" alt="forget-password" />
                    </div>

                    <div>
                        <input  name="phoneNumber" type="tel" 
                        className={styles["login-input" ] } id="phone-input" placeholder="شماره تلفن همراه" />
                    </div>

                    <div className="d-flex mt-1 justify-content-end">
                        <button type="submit" className="btn btn-primary">تایید شماره</button>
                    </div>
                </>
            }
            </form>
        
        </div>
    )
}

export default ForgetPasswordComponent;