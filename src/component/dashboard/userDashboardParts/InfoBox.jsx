import React, { useState } from 'react';

import styles from "../../../../public/styles/dashboard.module.css";

function InfoBox(props){

    const [ state ] = useState({
        fName : "نام",
        lName : "نام خانوادگی",
        phone : "شماره موبایل",
        nationalId : "کدملی",
        roleId : "نوع کارمند",
        services : props.isAdmin== true ? null : "خدمات کارمند" 
    }); 

    // console.log(props.item)
    const [key, value] = props.item;

    let data;
    if(key == "roleId")
    {
        if( value == 1)
            data = "آرایشگر"
        else if( value == 2 )
            data = "مدیریت"
    }   
    else if( key == "services")
    {
        if(value.length == 0)
            data = "کارمند خدمتی را ارائه نمی دهد"
        else{
            data ="";
            console.log(value);
            value.forEach( (item, index) => {
                data = data.concat( item.serviceTitle + (index==value.length-1? "" : "، ") )
            })
        }
    }

    return (
            state[key] ?         
                <li className={styles["UserInfo-input-container"]}>
                    <span className={styles["UserInfo-input-title"]}>{state[key]}</span>
                    <span>{ key=="roleId" || key=="services" ? data :value}</span>
                </li> :
            <></>
    )
}

export default InfoBox; 