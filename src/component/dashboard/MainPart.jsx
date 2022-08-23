import React from "react";

import styles from "../../../public/styles/dashboard.module.css";

export function MainPart(){

    return(
        <ul className={styles["UserInfoContainer"]}>   
            <li className={styles["UserInfo-input-container"]}>
                <span className={styles["UserInfo-input-title"]}>نام کاربری</span>
                <span>نام کاربر</span>
            </li>
            <li className={styles["UserInfo-input-container"]}>
                <span className={styles["UserInfo-input-title"]}>شماره تلفن</span>
                <span>00000000000</span>
            </li>
            <li className={styles["UserInfo-input-container"]}>
                <span className={styles["UserInfo-input-title"]}>ایمیل</span>
                <span>aa@gmail.com</span>
            </li>
            {/* <li className={styles["UserInfo-input-container"]}>
                <span></span>
                <span></span>
            </li> */}
        </ul>
    )
}