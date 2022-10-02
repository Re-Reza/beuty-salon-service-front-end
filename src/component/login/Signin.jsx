import React, { useState } from 'react';

import { useRouter } from "next/router";
import { object, string } from "yup";
import { useFormik } from "formik";
import axiosInstance from "../../dataService/axiosInstance";
import qs from "qs";
import Cookies from "js-cookie";

import styles from "../../../public/styles/login.module.css";

const Signin = () => {

    const [ state, setState ] = useState({
        showPassword:false,
        serverError: null
    });
    

    const validPhone = /^(?:0|98|\+98|\+980|0098|098|00980)?(9\d{9})$/;
    
    const router = useRouter(); 
    // password : string().required("رمز عبور الزامی است")
    // .min(8, "رمز عبور باید حداقل شامل هشت کاراکتر باشد")
    // .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    // " رمز عبور باید حداقل شامل 8 کاراکتر باشد و شما یک حرف بزرگ،حرف کوچک و کاراکتر خاص باشد"),
    const schema = object().shape({
        //matches(validPhone, "شماره موبایل وارد شده معتبر نیست")
        phone : string().required(" شماره موبایل الزامی است"),
        password : string().required("رمز عبور الزامی است").min(4 ," رمز عبور باید حداقل شامل چهار کاراکتر باشد")
    }); 

    const formik = useFormik({
        initialValues: {
            phone: "",
            password: "",
        },
        validationSchema: schema,
        onSubmit : (values) => {
            axiosInstance({
                method :"POST",
                url : "login",
                headers : { "content-type": "application/x-www-form-urlencoded" },
                data : qs.stringify(values)
            }).then( response => {
                Cookies.set("authToken", response.data.authToken, {path:"/"});
                router.push("/");
            
            }).catch( err => {
                setState({
                    ...state,
                    serverError : err.response.data.error
                })
            })
        }, 
    });

    function toggleShowPass(){
        setState({
            ...state,
            showPassword: ! state.showPassword
        })
    }

    const { handleSubmit, handleChange, errors } = formik;


    function navigateSignup(){
        router.push("/signup");
    }

    function forgetPassword(){
        router.push("/forgetPassword");
    }

    const { phone, password } = errors;

    return (
        <form noValidate onSubmit={handleSubmit} action="#" id={styles['login-form']}> 
            <>
                <h2 className={"text-center mb-4"+" "+styles.title}>ورود</h2>

                <div className="d-flex justify-content-center">
                    <img className={styles["login-img"]} src="/imgs/Mobile login-pana.svg" alt="forget-password" />
                </div>

                {
                    state.serverError?
                    <div className={'text-danger'} style={ { fontWeight: "400"}} >
                        <p><i className="fa fa-exclamation-triangle" aria-hidden="true"></i> {state.serverError}</p>
                    </div>
                    :<></>
                }

                <div>
                    <input onChange={handleChange}  name="phone" type="tel" 
                    className={styles["login-input" ] } id="phone-input" placeholder="شماره تلفن همراه" />
                    <small className= { 'text-danger '+styles["inputError"] }>{phone}</small>
                </div>

                <div>
                    <input onChange={handleChange}  name="password" type={state.showPassword? "text" : "password"} 
                        className={styles["login-input" ] } id="password-input" placeholder="رمز عبور" />
                    <span onClick={ toggleShowPass }>
                    {
                        state.showPassword ? <i title="مخفی کردن رمز عبور" className={"fa fa-eye-slash"+" "+styles['passwordHider']} aria-hidden="true"></i>
                        :<i title="نمایش رمز عبور" className={"fa fa-eye"+" "+styles['passwordHider']} aria-hidden="true"></i>
                    }
                    </span>
                    <span className={'text-danger '+styles['inputError']}>{password}</span>
                </div>

                <div><span onClick={forgetPassword} className={styles["hover-option"]}>رمز عبور را فراموش کرده ام</span></div>  

                <div className="d-flex mt-1 justify-content-end">
                    <button type="submit" className="btn btn-success" >ورود</button>
                </div>

                <div className="text-center">
                    <span onClick={ navigateSignup } className={styles["hover-option"]}>ایجاد حساب جدید</span>
                </div>  

            </>
        </form>
    );
}

export default Signin;
