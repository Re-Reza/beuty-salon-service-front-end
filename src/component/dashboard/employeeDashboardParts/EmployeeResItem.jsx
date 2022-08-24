import React, { useState } from 'react'

import PN from "persian-number";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import transition from "react-element-popper/animations/transition";
import opacity from "react-element-popper/animations/opacity";

import styles from "../../../../public/styles/dashboard.module.css"

const EmployeeResItem = ( props ) => {
    console.log(props)
    const { customername, service, date: { year, month, day }, row, status } = props.item;

    const [newDateState , setNewDate ] = useState({
        year: null,
        month: null,
        day: null,
    });

    const setCustomerDate = (event) => { 
        const { year, month, day} = event;
        console.log(year, month.number, day);
        setNewDate({
            year,
            month: month.number,
            day
        });
    }

    const sendNewCustomerDate = () => {
        //if date state is full sen to api
    }

    return (
        <tr>
            <th scope="row">{PN.convertEnToPe(row)}</th>
            <td>{service}</td>
            <td>{customername}</td>
            <td>{` ${PN.convertEnToPe(year)}/${PN.convertEnToPe(month)}/${PN.convertEnToPe(day)} `}</td>
            {
                props.history ? 
                <td>{status?"اتمام یافته" : "کنسل شده"}</td>
                :
                <td className={styles['employee-date-modifier']}>
                    <DatePicker onChange={ setCustomerDate }  animations = {[
                            opacity(),
                            transition({
                            from: 40,
                            transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
                            }),
                        ]} 
                        // inputClass={styles["calendarInput"]}
                        minDate={ new Date().setDate( new Date().getDate() ) } maxDate = { new Date().setDate( new Date().getDate()+7 ) }
                        calenderPosition="bottom-right" calendar={persian} locale={persian_fa} 
                    />
                    <button onClick={ sendNewCustomerDate } className={styles["reserve-send-newDate-btn"]+" me-4"}>تغییر تاریخ</button>
                </td>
            }
        </tr>
    )
}

export default EmployeeResItem;

