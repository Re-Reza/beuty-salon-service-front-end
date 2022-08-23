import React, { useState, useEffect } from "react";

import {useRouter} from "next/router";

import Singin from "../component/login/Signin";
import Signup from "../component/login/Signup";

import styles from "../../public/styles/login.module.css";


// //برای فراموشی رمز عبور کامپوننت جدید ساخته شود جهت بررسی کد ارسال به موبایل یا ایمیل
// // ایمیل نباید الزامی باشد

// function ParentForm() {

//     // const [ inputState, setInputState ] = useState({
//     //     username : "", 
//     //     phoneNumber : "", 
//     //     password : "", 
//     //     email : "", //optinal
//     //     confirmPassword : "", 
//     // });

//     // const [showPassword, setShowPassword ] = useState({
//     //     pass1:false,
//     //     pass2:false
//     // });

//     // const [ registerState, setRegisterState ] = useState({
//     //    loading: false, 
//     //    register : false
//     // });

//     // const setInput = ( key, event )=> { 

//     //     setInputState( prevState => ({
//     //         ...prevState, 
//     //         [key] : event.target.value
//     //     }) );
//     // }



//     //const [ ] = useState()

//     // const formRef = useRef(null);

//     // const chageRegisterStatus = () => {
//     //     formRef.current.classList.add("hide-form")
//     //     setTimeout( () => {
//     //         setRegisterState({
//     //             ...registerState,
//     //             register : !registerState.register
//     //         });
//     //         formRef.current.classList.remove("hide-form");
//     //     }, 1000);
//     // }

//     // const { register, loading } = registerState;
//     // const { pass1, pass2 } = showPassword;

//     //فراموشی رمز عبور

//     // function createSchema() {
        
//     //     const validPhone = '/^(?:0|98|\+98|\+980|0098|098|00980)?(9\d{9})$';

//     //     if( register )
//     //     {
//     //         return object().shape({
//     //             username : string().required("نام کاربری الزامی است").min(4, "نام کاربری باید حداقل شامل چهار کاراکتر باشد").max(100, "نام کاربری بیش از حد مجاز"),
//     //             phoneNumber :  string().matches(validPhone, "شماره موبایل وارد شده معتبر نیست").required("شماره موبایل الزامی است"), 
//     //             password : string().required("رمز عبور الزامی است")
//     //             .min(8, "رمز عبور باید حداقل شامل چهار کاراکتر باشد")
//     //             .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
//     //             " رمز عبور باید حداقل شامل 8 کاراکتر باشد و شما یک حرف بزرگ،حرف کوچک و کاراکتر خاص باشد"),
//     //             email : string().email("ایمیل وارد شده معتبر نیست"),
//     //             confirmPassword : string().oneOf([ ref('password'), null], "رمز عبور و تکرار آن مطابقت ندارد")
//     //         });
//     //     }
//     //     else{

//     //         return object().shape({
//     //             phoneNumber :  string().matches(validPhone, "شماره موبایل وارد شده معتبر نیست").required("شماره موبایل الزامی است"),
//     //             password : string("باید رشته باشد").required("رمز عبور الزامی است")
//     //             .min(8, "رمز عبور باید حداقل شامل چهار کاراکتر باشد")
//     //             .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
//     //             " رمز عبور باید حداقل شامل 8 کاراکتر باشد و شما یک حرف بزرگ،حرف کوچک و کاراکتر خاص باشد")
//     //         })
//     //     }
//     // }

//     // const togglePassword = (key) => {
//     //     setShowPassword({
//     //         ...showPassword,
//     //         [key] : !showPassword[key]
//     //     })
//     // }

//     // const submitData = (event) => {

//     //     event.preventDefault();
//     //     console.log(inputState);
//     //     let userSchema = createSchema();
//     //     console.log(userSchema)
//     //     userSchema.validate(inputState, {
//     //         abortEarly: false
//     //     }).then( result => {
//     //         console.log(result);
//     //         // send request to server and get server result about sent data 
//     //     }).catch( err => {
//     //         console.log("in error");
//     //         console.log(err.inner);
//     //         //avoid sending request to server
//     //     });
//     // }

    // return(

        // <div className="login-container">

//             {/* <form ref={formRef} id="login-form" noValidate onSubmit={submitData} action="#">
//                 <h2 className="text-center mb-4">{register? "ایجاد حساب" :"ورود"}</h2>

//                 {
//                     register ?
//                     <div>
//                         <input className="login-input" name="username" onChange={ setInput.bind(this, "username") } 
//                         type="text" id="username-input" placeholder="نام کاربری" />
//                     </div>
//                     : <></>
//                 }

//                 <div>
//                     <input onChange={ setInput.bind(this, "phoneNumber") } name="phoneNumber" type="tel" 
//                     className="login-input" id="phone-input" placeholder="شماره تلفن همراه" />
//                 </div>
    

//                 {
//                     register ? 
//                     <div>
//                         <input name = "email" onChange={ setInput.bind(this, "email") } type="email" 
//                         className="login-input" id="email-input" placeholder="ایمیل" /> 
//                     </div>
//                     : <></>
//                 }

//                 <div>
//                     <input name="password" onChange={ setInput.bind(this, "password") } type={pass1? "text" : "password"} 
//                         className="login-input" id="password-input" placeholder="رمز عبور" />
//                         <span onClick={ togglePassword.bind(this, "pass1") }>
//                         {
//                             pass1 ? <i title="مخفی کردن رمز عبور" className="fa passwordHider fa-eye-slash" aria-hidden="true"></i>
//                             :<i title="نمایش رمز عبور" className="fa fa-eye passwordHider" aria-hidden="true"></i>
//                         }
//                         </span>
//                 </div>

//                 {
//                     !register ? <div><span className="text-muted hover-option">رمز عبور را فراموش کرده ام</span></div>: <></>
//                 }

//                 {
//                     register ? 
//                     <div>
//                         <input name = "email" onChange={ setInput.bind(this, "confirmPassword") } type={pass2? "text" : "password"} 
//                         className="login-input" id="confirmPassword-input" placeholder="تکرار رمز عبور" />
//                         <span onClick={togglePassword.bind(this, "pass2")}>
//                         {
//                             pass2 ? <i title="مخفی کردن رمز عبور" className="fa passwordHider fa-eye-slash" aria-hidden="true"></i>
//                             :<i title="نمایش رمز عبور" className="fa fa-eye passwordHider" aria-hidden="true"></i>
//                         }
//                         </span>
                        
//                     </div>
//                     : <></>
//                 }   

//                 <div className="d-flex mt-1 justify-content-end">
//                     <button type="submit" className={register? "btn btn-success" : "btn btn-primary"}>{register ? "تایید اطلاعات" : "ورود"}</button>
//                 </div>

//                 <div className="text-center">
//                     <span onClick={ chageRegisterStatus } className="text-muted hover-option">{register ? "ورود به حساب کاربری": "ایجاد حساب جدید"}</span>
//                 </div>

            
//             </form> */}

        // </div>
    // )
// }

function ParentForm(){

    const [ registerForm, setRegisterForm ] = useState( false );

    const router = useRouter();
    console.log(router);
    
    // useEffect( ()=>{
    //     const value = pathname === "/signin" ? false : true
    //     setRegisterForm( value )
    // }, [pathname] );

    return (
        <div className={styles["login-container"]}>
        
            <Singin/>

        </div>
    )
}


export default ParentForm;