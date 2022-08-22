import React from "react";

import Link from "next/link";

import styles from  "../../../public/styles/header.module.css";

export function HeadTop(){

    return (

        <div className={styles["header-topPart"]}>

            <div className={styles["header-logo"] }>
                <h1>
                    سالن زیبایی
                </h1>
            </div>

            <div>   
                اطلاعات1
            </div>
            
            <div className={styles["nav-link-hover"]}>
                <Link href="/login">
                    <a>
                        ورود به حساب     
                        <i className="fa fa-sign-in" aria-hidden="true"></i> 
                    </a>
                </Link>
            </div>

        </div>
    )

}

