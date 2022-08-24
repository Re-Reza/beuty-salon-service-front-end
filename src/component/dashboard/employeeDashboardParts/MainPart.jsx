import React from "react";

import styles from "../../../../public/styles/dashboard.module.css";

import PN from "persian-number";

export function MainPart( props ){

    //SEND REQUEST TO GET EMPLOYEE DATA FROM API

    const { services } = props.employeeInfo;

    return(
        <div className="d-flex flex-column ">
            
            <div className="mb-5">
                <div className={ styles["profile-image-upload"]}>
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
                    <span>00000000000</span>
                </li>
                
                <li className={styles["UserInfo-input-container"]}>
                    <span className={styles["UserInfo-input-title"]}>ایمیل</span>
                    <span>aa@gmail.com</span>
                </li>

                <li className={styles["UserInfo-input-container"]}>
                    <span className={styles["UserInfo-input-title"]}>خدمات</span>
                    <div className="d-flex">
                    {
                        services.map( ( item, index) => <span key={index}>{item}، </span>)
                    }
                    </div>
                </li>

                <li className={styles["UserInfo-input-container"]}>
                    <span className={styles["UserInfo-input-title"]}>مشتریان ماه قبل</span>
                    <span>{PN.convertEnToPe(10)} نفر</span>
                </li>
            
            </ul>

        </div>
    )
}