import React, { useState} from 'react';

import { useRouter } from "next/router";
import { object, string, ref } from "yup";
import { useFormik } from "formik";
import axiosInstance from '../../dataService/axiosInstance';
import qs from "qs"

import Toast from '../elements/Toast';

import styles from "../../../public/styles/login.module.css";


const Signup = () => {


    const [ showPass, setShowPass ] = useState({
      pass1:false,
      pass2: false,
      serverError : null,
      toatData : null
    });

    const router = useRouter();
    
    const validPhone = /^(?:0|98|\+98|\+980|0098|098|00980)?(9\d{9})$/;
    const validEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    // .matches(validPhone, "شماره موبایل وارد شده معتبر نیست").
    const schema = object().shape({
      fName : string().required("نام الزامی است").min(2, "نام باید حداقل شامل دو کاراکتر باشد").max(100, "نام بیش از حد مجاز"),
      lName : string().required("نام خانوادگی الزامی است").min(2, "نام خانوادگی باید حداقل شامل دو کاراکتر باشد").max(100, "نام خانوادگی بیش از حد مجاز"),
      phone :  string().required("شماره موبایل الزامی است"), 
      password : string().required("رمز عبور الزامی است")
      .min(4, "رمز عبور باید حداقل شامل چهار کاراکتر باشد"),
      // email : string().matches(validEmail, "ایمیل وارد شده معتبر نیست").max(255, "تعداد کاراکتر ایمیل بیش از حد مجاز"),
      confirmPassword : string().oneOf([ ref('password'), null], "رمز عبور و تکرار آن مطابقت ندارد")
    });

    const formik = useFormik({
      initialValues : {
        fName:"",
        lName:"", 
        phone:"",
        password: "",
        confirmPassword:""
      },
      validationSchema:schema,
        onSubmit : values => {
 
          axiosInstance({
            method :"POST",
            url : "register",
            headers : { "content-type": "application/x-www-form-urlencoded" },
            data : qs.stringify(values)
          }).then( response => {
          console.log(response);
          setShowPass({
            ...showPass,
            serverError:null,
            toatData:{
              message : "حساب کاربری با موفقیت ایجاد شد",
              error : false
            }
          });
          setTimeout( () => {
            setShowPass({
              ...showPass,
              toatData : null,
              serverError:null
            });
        }, 2000)

        }).catch( err => {
          console.log(err.response.data.error);
          const errors = err.response.data.error.map( e =>{
            if(e.message )
              return e.message;
            return e
          });
        
          setShowPass({
                ...showPass,
                serverError : errors,
                toatData : null
            })
        })
      }
    });

    function toggleShowPass( key ){
      setShowPass({
        ...showPass,
        [key] : !showPass[key]
      });
    }

    function navigateSignup(){
      // navigate("/signin");
      router.push("/signin");
    }

    // console.log(formik.errors);
    const { pass1, pass2 } = showPass;
    const {  handleSubmit, handleChange } = formik;
    const { fName, phone, lName, password, confirmPassword }  = formik.errors

    return (  
      <>
          {
            showPass.toatData ? 
            <Toast toatData={showPass.toatData}/> : <></>
          }
          <form noValidate onSubmit={handleSubmit} id={styles['login-form']} action="#">

            <h2 className={"text-center mb-4 "+styles['title']}>ایجاد حساب کاربری</h2>

            <div className="d-flex justify-content-center">
                <img className={styles["forgetPassword-img"]} src="/imgs/Sign up-pana.svg" alt="forget-password" />
            </div>

            {
                showPass.serverError !=null ?
                <div className={'text-danger'} style={ { fontWeight: "400"}} >
                  {
                    showPass.serverError.map( (errorMsg, index) => <p key={index}> <i className="fa fa-exclamation-triangle" aria-hidden="true"></i> {errorMsg}</p>)
                  }
                </div>
                :<></>
            }

            <div>
                <input onChange={handleChange} className={styles["login-input"]} name="fName" 
                type="text" id="username-input" placeholder="نام" />
                <small className={'text-danger '+styles['inputError']}>{fName}</small>
            </div>

            <div>
                <input onChange={handleChange} className={styles["login-input"]} name="lName" 
                type="text" id="username-input" placeholder="نام خانوادگی" />
                <small className={'text-danger '+styles['inputError']}>{lName}</small>
            </div>

            <div>
                <input onChange={handleChange} name="phone" type="tel" 
                className={styles["login-input"]} id="phone-input" placeholder="شماره تلفن همراه" />
                <small className={'text-danger '+styles['inputError']}>{phone}</small>
            </div>

            {/* <div>
                <input onChange={handleChange} name = "email" type="email" 
                className={styles["login-input"]} id="email-input" placeholder="ایمیل" /> 
                <small className={'text-danger '+styles['inputError']}>{email}</small>
            </div> */}

            <div>
                <input onChange={handleChange}  name="password" type={pass1? "text" : "password"} 
                    className={styles["login-input"]} id="password-input" placeholder="رمز عبور" />
                    <span onClick={ toggleShowPass.bind(this, "pass1") }>
                    {
                        pass1 ? <i title="مخفی کردن رمز عبور" className={"fa fa-eye-slash"+" "+styles['passwordHider'] } aria-hidden="true"></i>
                        :<i title="نمایش رمز عبور" className={"fa fa-eye"+" "+styles['passwordHider']} aria-hidden="true"></i>
                    }
                    </span>
                    <small className={'text-danger '+styles['inputError']}>{password}</small>
            </div>

            <div>
              <input onChange={handleChange} name = "confirmPassword" type={pass2? "text" : "password"} 
              className={styles["login-input"]} id="confirmPassword" placeholder="تکرار رمز عبور" />
              <span onClick={toggleShowPass.bind(this, "pass2")}>
              {
                pass2 ? <i title="مخفی کردن رمز عبور" className={"fa fa-eye-slash"+" "+styles['passwordHider'] } aria-hidden="true"></i>
                :<i title="نمایش رمز عبور" className={"fa fa-eye"+" "+styles['passwordHider']} aria-hidden="true"></i>
              }
              </span>
              <small className={'text-danger '+styles['inputError']}>{confirmPassword}</small>
            </div>

            <div className="d-flex mt-1 justify-content-end">
                <button type="submit" className= "btn btn-success" >ایجاد حساب</button>
            </div>

            <div className="text-center">
                  <span onClick={ navigateSignup } className={styles['hover-option']}>ورود به حساب</span>
            </div>

            </form>
      
      </>
    );
}

export default Signup;