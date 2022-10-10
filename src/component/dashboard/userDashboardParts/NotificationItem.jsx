import React from 'react';

import { convertEnToPe } from "persian-number";

import styles from "../../../../public/styles/dashboard.module.css";


const NotificationItem = (props) => {
    
    const { item : {reserveId, reserveDate, status, reserveTime, customerName, employeeName,  serviceTitle,
        title, text, createdTime }, role } = props;
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

    let mDate = createdTime ? createdTime : ""; 

    const deleteNotification = () => {
        //delete Notification
        alert(title)
    }

    return (
        <li className={styles["notification-item"]} >
        
            <div className='d-flex flex-row justify-content-between'>
                <div>
                    <img src="/imgs/notification-message.png" className={styles["notification-icon"]} alt={title} />
                </div>
                
                <div className={styles["notifiation-info"]} >
                    <span>{mTitle}</span>
                    <span style={{wordBreak : "break-all"}}>{mText}</span>
                </div>
            </div>

            <div className="d-flex flex-column align-items-end">
                <span title='حذف اعلان' onClick={deleteNotification} className="mb-1 text-danger" role="button">
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
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