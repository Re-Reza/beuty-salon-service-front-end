import React, { useState} from 'react';

import NotificationItem from './NotificationItem';

import styles from "../../../../public/styles/dashboard.module.css";

export const Notifications = () => {
  
  const [ notificationState, setNotificationState ] = useState({

    notifications : [
      {title: "ثبت مشتری جدید", message: "مشتری جدید به لیست رزرو شما اضافه گردید", date:{year: 1401, month: 5, day: 1} },
      {title: "مدیریت سایت", message: "تغییر زمان کاری", date:{year: 1401, month: 5, day: 10} },
      {title: "مدیریت سایت", message: "جلسه جدید در سالن برگزار می گردد", date:{year: 1401, month: 6, day: 5} },
      {title: "ثبت مشتری جدید", message: "مشتری جدید به لیست رزرو شما اضافه گردید", date:{year: 1401, month: 6, day: 12} },
      {title: "مدیریت سایت", message: "جلسه جدید در سالن برگزار می گردد", date:{year: 1401, month: 7, day: 18} },
      {title: "ثبت مشتری جدید", message: "مشتری جدید به لیست رزرو شما اضافه گردید", date:{year: 1401, month: 8, day: 14} }
    ]

  });

  return (
    <div className={ styles["nofication-container"] }>
      
      <ul className={ styles["nofications-list"] }>
      {
        notificationState.notifications.map( (item, index ) => <NotificationItem key={index} item={item}/>)
      }
      </ul>

    </div>
  )
}

