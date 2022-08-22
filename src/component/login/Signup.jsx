import React, { useState} from 'react';

import { useRouter } from "next/router";
import { object, string, ref } from "yup";
import { useFormik } from "formik";

const Signup = () => {


    const [ showPass, setShowPass ] = useState({
      pass1:false,
      pass2: false
    });

    const router = useRouter();
    
    const validPhone = /^(?:0|98|\+98|\+980|0098|098|00980)?(9\d{9})$/;
    const validEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    const schema = object().shape({
      username : string().required("نام کاربری الزامی است").min(4, "نام کاربری باید حداقل شامل چهار کاراکتر باشد").max(100, "نام کاربری بیش از حد مجاز"),
      phoneNumber :  string().matches(validPhone, "شماره موبایل وارد شده معتبر نیست").required("شماره موبایل الزامی است"), 
      password : string().required("رمز عبور الزامی است")
      .min(8, "رمز عبور باید حداقل شامل هشت کاراکتر باشد")
      .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      " رمز عبور باید حداقل شامل 8 کاراکتر باشد و شما یک حرف بزرگ،حرف کوچک و کاراکتر خاص باشد"),
      email : string().matches(validEmail, "ایمیل وارد شده معتبر نیست").max(255, "تعداد کاراکتر ایمیل بیش از حد مجاز"),
      confirmPassword : string().oneOf([ ref('password'), null], "رمز عبور و تکرار آن مطابقت ندارد")
    });

    const formik = useFormik({
      initialValues : {
        username:"", 
        phoneNumber:"",
        email: "",
        password: "",
        confirmPassword:""
      },
      validationSchema:schema,
      onSubmit : () => {
        console.log("submited in signin");
        console.log(formik.values)
    }
    });

    function toggleShowPass( key ){
      setShowPass({
        [key] : !showPass[key]
      });
    }

    function navigateSignup(){
      // navigate("/signin");
      router.push("/signin");
    }

    console.log(formik.errors);
    const { pass1, pass2 } = showPass;
    const {  handleSubmit, handleChange } = formik;
    const { username, phoneNumber, email, password, confirmPassword }  = formik.errors

    return (  

      <form noValidate onSubmit={handleSubmit} id='login-form' action="#">

            <h2 className="text-center mb-4">ایجاد حساب کاربری</h2>

            <div>
                <input onChange={handleChange} className="login-input" name="username" 
                type="text" id="username-input" placeholder="نام کاربری" />
                <span className='text-danger inputError'>{username}</span>
            </div>

            <div>
                <input onChange={handleChange} name="phoneNumber" type="tel" 
                className="login-input" id="phone-input" placeholder="شماره تلفن همراه" />
                <span className='text-danger inputError'>{phoneNumber}</span>
            
            </div>
   
            <div>
                <input onChange={handleChange} name = "email" type="email" 
                className="login-input" id="email-input" placeholder="ایمیل" /> 
                <span className='text-danger inputError'>{email}</span>
            </div>

            <div>
                <input onChange={handleChange}  name="password" type={pass1? "text" : "password"} 
                    className="login-input" id="password-input" placeholder="رمز عبور" />
                    <span onClick={ toggleShowPass.bind(this, "pass1") }>
                    {
                        pass1 ? <i title="مخفی کردن رمز عبور" className="fa passwordHider fa-eye-slash" aria-hidden="true"></i>
                        :<i title="نمایش رمز عبور" className="fa fa-eye passwordHider" aria-hidden="true"></i>
                    }
                    </span>
                    <span className='text-danger inputError'>{password}</span>
            </div>

            <div>
              <input onChange={handleChange} name = "confirmPassword" type={pass2? "text" : "password"} 
              className="login-input" id="confirmPassword" placeholder="تکرار رمز عبور" />
              <span onClick={toggleShowPass.bind(this, "pass2")}>
              {
                  pass2 ? <i title="مخفی کردن رمز عبور" className="fa passwordHider fa-eye-slash" aria-hidden="true"></i>
                  :<i title="نمایش رمز عبور" className="fa fa-eye passwordHider" aria-hidden="true"></i>
              }
              </span>
              <span className='text-danger inputError'>{confirmPassword}</span>
            </div>

            <div className="d-flex mt-1 justify-content-end">
                <button type="submit" className= "btn btn-success" >ایجاد حساب</button>
            </div>

            <div className="text-center">
                  <span onClick={navigateSignup } className="text-muted hover-option">ورود به حساب</span>
            </div>

      </form>
      
    )
}

export default Signup;