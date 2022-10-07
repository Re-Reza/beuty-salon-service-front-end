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

    const { id, customerLastname, customerName, customerPhone, 
        reserveTime, status, serviceTitle, reserveDate } = props.item;
 
    const [ calendarState, setCalenderState ] = useState({
        showCalendar: false
    });

    function splitDate(date){
        return date.split('/')
    }

    function splitTime(time){
        return time.split(':')
    }

    function convertToPersian(value){
        if(value!=null && value != undefined )
        {
            const parts = value.split('|');
            const splitedDate = splitDate(parts[1]);
            const splitedTime = splitTime(parts[0])
            console.log( convertEnToPe(parseInt(splitedDate[0]) ) +"/"+ convertEnToPe(parseInt(splitedDate[1])) +"/"+ convertEnToPe(parseInt(splitedDate[2]))+" "+convertEnToPe(parseInt(splitedTime[0]) )+":"+convertEnToPe(parseInt(splitedTime[1]) ));
            return convertEnToPe(parseInt(splitedTime[0]) )+":"+convertEnToPe(parseInt(splitedTime[1])+" "+convertEnToPe(parseInt(splitedDate[0]) ) +"/"+ convertEnToPe(parseInt(splitedDate[1])) +"/"+ convertEnToPe(parseInt(splitedDate[2])) );
        }
    }

    function generateDate(){
        if(reserveTime)
        {
            const parts = reserveTime.split('|');
            const splitedDate = splitDate(parts[1]);
            console.log(splitedDate);
            return {
                day: splitedDate[2],
                month: splitedDate[1],
                year : splitedDate[0]
            }
        }
        else {
            
            const splitedDate = splitDate(reserveDate);
            return {
                day: splitedDate[2],
                month: splitedDate[1],
                year : splitedDate[0]
            }
    
        }
    }
    console.log(generateDate());
    const { day, month, year } = generateDate();

    let reserveStatus;
    if(status == "done")
        reserveStatus = "انجام شده"
    else if(status == "cancelled")
        reserveStatus = "کنسل شده"
    else if(status == "waiting")
        reserveStatus = "در انتظار تایید"
    else if(status == "finalized")
        reserveStatus = "نهایی شده"
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
                <span className='fs-5'>{convertEnToPe(parseInt(day))}</span>
                <span className='fs-5'>{new pd([parseInt(year),parseInt(month),parseInt(day)]).toLocale('fa').format('MMMM')}</span>
            </div>

                
            <div className={styles["weeklycustomerItem-detail"]+" d-flex justify-content-center flex-column"}>
                <div className='mb-1'>{serviceTitle}</div>
                <div className={'d-flex justify-content-between align-items-center '+styles["weeklycustomerItem-detail-info"]}>
                    <span className='ms-3'>
                    تاریخ : {reserveDate}
                    </span>
                    <span className='ms-3'>
                        نام مشتری : {customerName + " "+ customerLastname}
                    </span>
                    <span className='ms-3'>
                        شماره تماس مشتری :  {convertEnToPe(customerPhone)}
                    </span>
                    <span className='ms-3'>
                        وضعیت:  {reserveStatus}
                    </span>
                    {/* {
                        calendarState.showCalendar? 
                        <div className='d-flex align-items-center pb-3 ms-3'>
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
                        </div>
                        : <span onClick={editDate} className={'ms-3 '+styles["weeklycustomerItem-calendar"]} role="button">ویرایش تاریخ <i className="fa fa-calendar-check-o" aria-hidden="true"></i></span>
                    } */}
                    {/* <span onClick={delelteReserve} className={'ms-3 '+styles["weeklycustomerItem-trash"]} role="button">حذف رزرو <i className="fa fa-trash-o" aria-hidden="true"></i></span> */}
                </div>
            </div>
        </li>
    )
}

export default WeeklyCustimerItem;