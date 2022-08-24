import React from 'react';
import Link from "next/link";
import styles from "../../../public/styles/dashboard.module.css";

export function HeadPart( props ) {

    function showAside(){
        props.asideRef.current.classList.add(styles["show-aside"])
    }
    //تاریخ از بک اند باید بیاید

    return (
        <header className={styles["dashboard-head"]}>
            
            <div className={styles["dashboard-head-rightPart"]}>
                <div className={styles["side-barMenu-button"]}>
                    <button className={styles["side-barMenu-button-icon"]} onClick={showAside}><i className="fa fa-bars" aria-hidden="true"></i></button>
                </div>
                
                <div className={styles["dashboard-head-wellcomeMessage"]}>
                    <div className='d-flex flex-column flex-sm-row align-items-start'>
                        <span className='ms-1'>
                            رضا رضایی
                        </span>
                        <span>
                            گرامی خوش آمدید
                        </span>
                    </div>
                    <div className={styles["dashboard-date"]}>{new Date().toLocaleDateString("fa-IR")}</div>
                </div>
                
            </div>
            
            <div className={styles["dashboard-head-leftPart"]}>

               <Link href="/">
                    <a className={styles['head-home'] }>
                        <i className="fa fa-home ms-1" aria-hidden="true"></i>
                         صفحه اصلی
                    </a>
               </Link>
            
                <div className={styles['dashboard-head-left-imgContainer']+" "+"me-2"}>
                    <img src="/imgs/user.png" className={styles['head-imgAvatar']} alt="profile-alvatar" />
                </div>

            </div>

        </header>
    )
}
