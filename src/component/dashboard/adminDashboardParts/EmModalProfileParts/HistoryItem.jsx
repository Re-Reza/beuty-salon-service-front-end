import React from 'react';

import { convertEnToPe } from "persian-number";
import pd from "persian-date";

import styles from "../../../../../public/styles/dashboard.module.css";

const HistoryItem = (props) => {
    const { service, date: {year, month, day}, customerName, customerPhone, status } = props.item;
    return(
        <li className={styles["weeklycustomerItem"]}>
            
            <div className={'d-flex flex-column justify-content-center align-items-center '+styles["weeklycustomerItem-date"]}>
                <span className='fs-5'>{convertEnToPe(day)}</span>
                <span className='fs-5'>{new pd([year,month,day]).toLocale('fa').format('MMMM')}</span>
            </div>
   
            <div className={styles["weeklycustomerItem-detail"]+" d-flex justify-content-center flex-column"}>
                <div className='mb-1'>{service}</div>
                <div className='d-flex justify-content-between'>
                    <span className='ms-3'>
                        تاریخ : {`${convertEnToPe(year)}/${convertEnToPe(month)}/${convertEnToPe(day)}`}
                    </span>
                    <span className='ms-3'>
                        نام مشتری : {customerName}
                    </span>
                    <span className='ms-3'>
                        شماره تماس مشتری :  {convertEnToPe(customerPhone)}
                    </span>
                    <span>وضعیت : {status? "انجام شده" : "کنسل شده"}</span>
                </div>
            </div>
        
        </li>
    )
}

export default HistoryItem;
