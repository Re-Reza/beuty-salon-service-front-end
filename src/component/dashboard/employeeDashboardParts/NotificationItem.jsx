import React from 'react';

import { convertEnToPe } from "persian-number";

import styles from "../../../../public/styles/dashboard.module.css";


const NotificationItem = (props) => {
    
    const { title, message, date: { year, month, day} } = props.item;

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
                    <span>{title}</span>
                    <span>{message}</span>
                </div>
            </div>

            <div className="d-flex flex-column align-items-end">
                <span title='حذف اعلان' onClick={deleteNotification} className="mb-1 text-danger" role="button">
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                </span>
                <span style={{borderBottom:"1px solid #3d3d3d"}}>
                {
                    `${convertEnToPe(year)}/${convertEnToPe(month)}/${convertEnToPe(day)}`
                }
                </span>
            </div>
        
        </li>
    )
}

export default NotificationItem;