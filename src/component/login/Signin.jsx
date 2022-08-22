import React, { useState } from 'react';

import { useRouter } from "next/router";
import { object, string } from "yup";
import { useFormik } from "formik";

const Signin = () => {

    const [ showPassword, setShowPassword ] = useState(false);

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

    console.log(formik.errors);

    function toggleShowPass(){
        setShowPassword(!showPassword);
    }

    const {  handleSubmit, handleChange, errors } = formik;

    function navigateSignup(){
        // navigate("/signup");
        router.push("/signup");
    }

    const { phoneNumber, password } = errors;

    return (
        <form noValidate onSubmit={handleSubmit} id='login-form' action="#"> 
 
                <h2 className="text-center mb-4">ورود</h2>

                <div>
                    <input onChange={handleChange}  name="phoneNumber" type="tel" 
                    className="login-input" id="phone-input" placeholder="شماره تلفن همراه" />
                    <span className='text-danger inputError'>{phoneNumber}</span>
                </div>

                <div>
                    <input onChange={handleChange}  name="password" type={showPassword? "text" : "password"} 
                            className="login-input" id="password-input" placeholder="رمز عبور" />
                    <span onClick={ toggleShowPass }>
                    {
                        showPassword ? <i title="مخفی کردن رمز عبور" className="fa passwordHider fa-eye-slash" aria-hidden="true"></i>
                        :<i title="نمایش رمز عبور" className="fa fa-eye passwordHider" aria-hidden="true"></i>
                    }
                    </span>
                    <span className='text-danger inputError'>{password}</span>
                </div>

                <div><span className="text-muted hover-option">رمز عبور را فراموش کرده ام</span></div>  
                
                <div className="d-flex mt-1 justify-content-end">
                    <button type="submit" className= "btn btn-success" >ورود</button>
                </div>

                <div className="text-center">
                    <span onClick={ navigateSignup } className="text-muted hover-option">ایجاد حساب جدید</span>
                </div>  
                                    
        </form>
    );
}

export default Signin;
