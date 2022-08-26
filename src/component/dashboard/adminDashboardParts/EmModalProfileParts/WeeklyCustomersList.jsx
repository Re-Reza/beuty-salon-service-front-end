import React, { useState } from 'react';

import WeeklyCustomerItem from "./WeeklyCustomerItem";

import styles from "../../../../../public/styles/dashboard.module.css";


function WeeklyCustimersList () {

    const [ activityList, setActivity ] = useState([
        {service:"ناخن", date: {year:1401, month:4, day: 8}, customerName: "زهرا احمدی", customerPhone: "090554854" },
        {service:"ناخن", date: {year:1401, month:4, day: 5}, customerName: "زهرا احمدی", customerPhone: "090554854" },
        {service:"ناخن", date: {year:1401, month:5, day: 12}, customerName: "زهرا احمدی", customerPhone: "090554854" },
        {service:"ناخن", date: {year:1401, month:5, day: 18}, customerName: "زهرا احمدی", customerPhone: "090554854" },
        {service:"ناخن", date: {year:1401, month:6, day: 23}, customerName: "زهرا احمدی", customerPhone: "090554854" },
        {service:"ناخن", date: {year:1401, month:7, day: 26}, customerName: "زهرا احمدی", customerPhone: "090554854" }
    ]);

    return (
        <div className={styles['modalProfile-weeklycustomers-container']}>
            <ul className={styles['modalProfile-weeklycustomersPart']}>
            {
                activityList.map( (item, index) => <WeeklyCustomerItem item={item} key={index}/>)
            }
            </ul>
        </div>
    )
}

export default WeeklyCustimersList;