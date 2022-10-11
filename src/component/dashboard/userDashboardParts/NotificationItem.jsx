import React from 'react';

import { convertEnToPe } from "persian-number";

import { readMessage } from "../../../dataService/userDashboardProvider";

import styles from "../../../../public/styles/dashboard.module.css";

const NotificationItem = (props) => {

    const { item : {reserveId, reserveDate, status, reserveTime, customerName, employeeName,  serviceTitle,
        title, text, createdTime,id }, role } = props;
    let mTitle = reserveId ? "گزارش سیسستم" : title;
    let mText;
    if(text)
        mText = text+".";
    else if(role==1)
        mText = "رزرو برای خدمت "+ serviceTitle+ " "+ "توسط مشتری "+ customerName + " برای تاریخ " + reserveDate + " و کارمند " + employeeName + convertStatus() +" شد.";
    else if( role == 2)
        mText = "رزو برای خدمت "+serviceTitle+" توسط "+customerName+" برای تاریخ "+reserveDate+" "+convertStatus()+" شد.";
    else if(role == 3)
        mText = "رزرو شما برای خدمت "+serviceTitle+" برای تاریخ "+reserveDate+" و کارمند "+convertStatus()+ " شد.";

    function convertStatus(){
        switch(status){
            case "waiting":
                return " ثبت ";
            case "cancelled":
                return " لغو ";
            case "finalized":
                return " نهایی ";
            case "done":
                return " با موفقیت انجام ";
        }   
    }

    function callReadMessageApi(){
        const data = {
            isReserve : reserveId ? 1 : 0,
            messageId : reserveId ? reserveId : id
        };
        console.log(data)
        readMessage(data).then( response => {
            props.deleteNotification(data.messageId);
        }).catch( err => {
            // console.log(err);
        });
    }   

    let mDate = createdTime ? createdTime : ""; 

    return (
        <li className={styles["notification-item"]} >
        
            <div className='d-flex flex-row justify-content-between'>
                <div>
                    <img src="/imgs/notification-message.png" className={styles["notification-icon"]} alt={title} />
                </div>
                
                <div className={styles["notifiation-info"]} >
                    <span>{mTitle}</span>
                    <span style={{wordBreak : "break-word"}}>{mText}</span>
                </div>
            </div>

            <div  className={id? "d-flex flex-column align-items-end justify-content-between" : "d-flex flex-column align-items-end justify-content-end"} style={{height:"100%"}}>
                <span onClick={callReadMessageApi} title='خوانده شده' style={ {cursor:"pointer"} }>
                    <img style={{ width:"28px"}}src="/imgs/icons/read-msg.png" alt="read" />
                </span>
                <span style={{borderBottom:"1px solid #3d3d3d"}}>
                {
                    // `${convertEnToPe(year)}/${convertEnToPe(month)}/${convertEnToPe(day)}`
                    mDate
                }
                </span>
            </div>
        
        </li>
    )
}

export default NotificationItem;