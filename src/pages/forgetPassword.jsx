import React from "react";

import Head from "next/head";

import ForgetPasswordComponent from "../component/login/ForgotPassword";

function ForgetPassword(){

    return(
        <>
            <Head>
                <title>
                    فراموشی رمز عبور
                </title>
            </Head>
            <ForgetPasswordComponent/>
        </>
    )
}

export default ForgetPassword;