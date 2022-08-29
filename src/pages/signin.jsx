import React, { useState } from "react";

import {useRouter} from "next/router";

import Head from "next/head";

import Singin from "../component/login/Signin";

import styles from "../../public/styles/login.module.css";


function ParentForm(){

    const router = useRouter();
    console.log(router);
    

    return (
        <>
            <Head>
                <title>
                    ورود
                </title>
            </Head>
            <div className={styles["login-container"]}>
            
            <Singin/>

            </div>
        </>
    )
}


export default ParentForm;