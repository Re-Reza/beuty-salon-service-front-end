import React, { useState } from 'react';

import styles from "../../../../public/styles/dashboard.module.css";

function InfoBox(props){

    const [ state ] = useState({
        fName : "نام",
        lName : "نام خانوادگی",
        phone : "شماره موبایل",
    }); 

    const [key, value] = props.item;

    return (
            state[key]?         
                <li className={styles["UserInfo-input-container"]}>
                    <span className={styles["UserInfo-input-title"]}>{state[key]}</span>
                    <span>{value}</span>
                </li> :
            <></>
    )
}

export default InfoBox; 