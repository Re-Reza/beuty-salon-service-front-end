import React, { useState } from 'react';

import HistoryItem from './HistoryItem';

import styles from "../../../../../public/styles/dashboard.module.css";

function HistoryList(){

    const [ historyList, setHistoryList ] = useState([
        {service:"ناخن", date: {year:1401, month:4, day: 8}, customerName: "زهرا احمدی", customerPhone: "090554854", status: true },
        {service:"ناخن", date: {year:1401, month:4, day: 5}, customerName: "زهرا احمدی", customerPhone: "090554854", status: true },
        {service:"ناخن", date: {year:1401, month:5, day: 12}, customerName: "زهرا احمدی", customerPhone: "090554854", status: false },
        {service:"ناخن", date: {year:1401, month:5, day: 18}, customerName: "زهرا احمدی", customerPhone: "090554854",status: true },
        {service:"ناخن", date: {year:1401, month:6, day: 23}, customerName: "زهرا احمدی", customerPhone: "090554854", status: false },
        {service:"ناخن", date: {year:1401, month:7, day: 26}, customerName: "زهرا احمدی", customerPhone: "090554854", status: true }
    ]);

    const [ addEmployeeModal, setAddEmployeeModal ] = useState( false );

    return (
        <div className={styles['EmployeeModalProfile-HistoryPart']}>   
            
            <div className='position-relative mb-5 w-100'>
                <input id={styles["EmployeeModalProfile-History-search-input"]} type="text" placeholder="جستجو"/>
                <span className={styles["EmployeeModalProfile-searchIcon"]}><i className="fa fa-search" aria-hidden="true"></i></span>
            </div>

            <ul className={styles['modalProfile-weeklycustomersPart']}>
            {
                historyList.map( (item, index) => <HistoryItem item={item} key={index} />)
            }
            </ul>


        </div>
    )
}  

export default HistoryList;