import React, { useState } from "react";

// import { useLocation } from 'react-router-dom';
// import { object, string, ref } from "yup";
import Head from "next/head";
import Signup from "../component/login/Signup";

import styles from "../../public/styles/login.module.css";


function SignupParentForm(){

    const [ registerForm, setRegisterForm ] = useState( false );

    return (
        <>
            <Head>
                <title>ایجاد حساب</title>
            </Head>
            <div className={styles["login-container"]}>
            {
                <Signup/>   
            }
            </div>
        </>
    )
}

export default SignupParentForm;