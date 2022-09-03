import React from "react";

import styles from "../../../../public/styles/dashboard.module.css";


export function MainPart(props){


    return(
        
        <div className="d-flex flex-column ">
            
            <div className="mb-5">

                <div className={ styles["profile-img-container"]}>
                    <img src={"/imgs/user.png"} className={styles["profile-img"]} alt="" />
                    <input title="بارگزاری تصویر" type="file" className={styles["profile-upload-input"]}/>
                </div>

            </div>
            
            <ul className={styles["UserInfoContainer"]}>   

                  
            <li className={styles["UserInfo-input-container"]}>
                    <span className={styles["UserInfo-input-title"]}>نام کاربری</span>
                    <span>نام کاربر</span>
                </li>
                
                <li className={styles["UserInfo-input-container"]}>
                    <span className={styles["UserInfo-input-title"]}>شماره موبایل</span>
                    <span>090550484</span>
                </li>
                
                <li className={styles["UserInfo-input-container"]}>
                    <span className={styles["UserInfo-input-title"]}>ایمیل</span>
                    <span>aa@gmail.com</span>
                </li>

            </ul>

        </div>
    )
}