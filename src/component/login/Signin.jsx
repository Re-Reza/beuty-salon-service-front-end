import React, { useState } from 'react';

import { useRouter } from "next/router";
import { object, string } from "yup";
import { useFormik } from "formik";

import styles from "../../../public/styles/login.module.css";

const Signin = () => {

    const [ state, setState ] = useState({
        showPassword:false,
        // forgetPassword:false
    });
    

    const validPhone = /^(?:0|98|\+98|\+980|0098|098|00980)?(9\d{9})$/;
    
    const router = useRouter(); 

    const schema = object().shape({
        phoneNumber: string().required(" شماره موبایل الزامی است").matches(validPhone, "شماره موبایل وارد شده معتبر نیست"),
        password : string().required("رمز عبور الزامی است")
                    .min(8, "رمز عبور باید حداقل شامل هشت کاراکتر باشد")
                    .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                    " رمز عبور باید حداقل شامل 8 کاراکتر باشد و شما یک حرف بزرگ،حرف کوچک و کاراکتر خاص باشد"),
    }); 

    const formik = useFormik({
        initialValues: {
            phoneNumber: "",
            password: "",
        },
        validationSchema: schema,
        onSubmit : () => {
            console.log("submited in signin");
        }
    });

    // console.log(formik.errors);

    function toggleShowPass(){
        setState({
            ...state,
            showPassword: ! state.showPassword
        })
    }

    const {  handleSubmit, handleChange, errors } = formik;

    function navigateSignup(){
        // navigate("/signup");
        router.push("/signup");
    }

    function forgetPassword(){
        router.push("/forgetPassword");
    }

    const { phoneNumber, password } = errors;

    return (
        <form noValidate onSubmit={handleSubmit} action="#" id={styles['login-form']}> 
            <>
                <h2 className={"text-center mb-4"+" "+styles.title}>ورود</h2>

                <div className="d-flex justify-content-center">
                    <img className={styles["login-img"]} src="/imgs/Mobile login-pana.svg" alt="forget-password" />
                </div>

                <div>
                    <input onChange={handleChange}  name="phoneNumber" type="tel" 
                    className={styles["login-input" ] } id="phone-input" placeholder="شماره تلفن همراه" />
                    <small className= { 'text-danger '+styles["inputError"] }>{phoneNumber}</small>
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
