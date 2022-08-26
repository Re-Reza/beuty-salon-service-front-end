import React, { useState } from 'react';

import { convertEnToPe } from "persian-number";
import pd from "persian-date";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import transition from "react-element-popper/animations/transition";
import opacity from "react-element-popper/animations/opacity";

import styles from "../../../../../public/styles/dashboard.module.css";


function WeeklyCustimerItem( props ){

    const { service, date: {year, month, day}, customerName, customerPhone} = props.item;
 
    const [ calendarState, setCalenderState ] = useState({
        showCalendar: false
    });

    function delelteReserve(){

    }

    function editDate(){
        setCalenderState({
            ...calendarState,
            showCalendar: true
        });
    }

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
                    {
                        calendarState.showCalendar? 
                        <DatePicker animations = {[
                            opacity(),
                            transition({
                            from: 40,
                            transition: "all 400ms cubic-bezier(0.335, 0.010, 0.030, 1.360)",
                            }),
                        ]} 
                        // onChange={ setDate }  
                        // inputClass={styles["calendarInput"]}
                        minDate={ new Date().setDate( new Date().getDate() ) } maxDate = { new Date().setDate( new Date().getDate()+7 ) }
                        calenderPosition="bottom-right" calendar={persian} locale={persian_fa} 
                         />
                        : <span onClick={editDate} className={'ms-3 '+styles["weeklycustomerItem-calendar"]} role="button">ویرایش تاریخ <i className="fa fa-calendar-check-o" aria-hidden="true"></i></span>
                        
                    }
                    <span onClick={delelteReserve} className={'ms-3 '+styles["weeklycustomerItem-trash"]} role="button">حذف رزرو <i className="fa fa-trash-o" aria-hidden="true"></i></span>
                </div>
            </div>
        </li>
    )
}

export default WeeklyCustimerItem;