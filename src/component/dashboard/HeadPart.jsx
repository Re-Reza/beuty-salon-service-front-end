import React from 'react';
import Link from "next/link";
import styles from "../../../public/styles/dashboard.module.css";

export function HeadPart( props ) {

    function showAside(){
        props.asideRef.current.classList.add(styles["show-aside"])
    }
    
    console.log(props.asideRef.current)
    //تاریخ از بک اند باید بیاید

    return (
        <header className={styles["dashboard-head"]}>
            
            <div className={styles["dashboard-head-rightPart"]}>
                <div className={styles["side-barMenu-button"]}>
                    <button className={styles["side-barMenu-button-icon"]} onClick={showAside}><i className="fa fa-bars" aria-hidden="true"></i></button>
                </div>
                
                <div className={styles["dashboard-head-wellcomeMessage"]}>
                    <div>username گرامی خوش آمدید</div>
                    <div className={styles["dashboard-date"]}>{new Date().toLocaleDateString("fa-IR")}</div>
                </div>
                
            </div>
            
            <div className={styles["dashboard-head-leftPart"]}>
            {/* <i className="fa fa-home" aria-hidden="true"></i> صفحه اصلی */}
               
               <Link href="/">
                    <a>
                        <i className="fa fa-home" aria-hidden="true"></i>
                         صفحه اصلی
                    </a>
               </Link>
               {/* قرار دادن پروفایل کاربر در این بخش */}
               {/* <div className = "dashboard-head-profileContainer">
                    <img src="" alt="profile-img" /> 
               </div> */}
            
            </div>

        </header>
    )
}