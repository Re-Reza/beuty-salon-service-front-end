import React, { useState, useRef } from 'react';

import { EmployeesList, ReserveList, SendMessage, Service } from "../adminDashboardParts";
import { Notifications } from '../userDashboardParts';
import { HeadPart, MainPart, ChangeAccountInfo } from '../userDashboardParts';
import LogOut from "../LogOut";

// import { convertEnToPe } from "persian-number";

import styles from "../../../../public/styles/dashboard.module.css";

const AdminDashboard = () => {

    const [showState, setShowState] = useState({
      main: false,
      reserveCustomer: true,
      changeInfo : false,
      notification: false,
      employeeList: false,
      sendMessage : false,
      services : false,
      request : false
  });

  function setRequest(){
    setShowState({
        ...showState,
        request : !showState.request
    });
  }

  const asideRef = useRef(null);

  function switchPart(selected){
    Object.keys(showState).forEach(key => {
        showState[key] = false;
    });
    setShowState({
        ...showState,
        [selected] : true
    });
  }

  function hideAside(){
      asideRef.current.classList.remove( styles["show-aside"] );
  }

  const { main, changeInfo, services,reserveCustomer, notification, employeeList, sendMessage} = showState;

  let ActivePartComponent;
    if(main)
        ActivePartComponent = MainPart;
    if( employeeList )
        ActivePartComponent = EmployeesList;
    else if(changeInfo)
        ActivePartComponent = ChangeAccountInfo;
    else if(notification)
        ActivePartComponent = Notifications;
    else if(reserveCustomer) 
        ActivePartComponent = ReserveList;  
    else if(sendMessage) 
        ActivePartComponent = SendMessage;
    else if(services)
        ActivePartComponent = Service;
  
  return (
    <>
        <div className={styles["dashboard-mainContainer"]}>
  
            <div id={ styles["dashboard-header"] }>
                <HeadPart request={showState.request} asideRef={asideRef} />
            </div>

            <aside ref={asideRef} className={styles["dashboard-aside"]} >

                <div className="d-flex justify-content-between">  
                    <h3 className={styles["aside-title"]}>پنل مدیریت</h3>
                    <span onClick={hideAside} className={styles["close-aside-btn"]}><i className="fa fs-2 text-danger fa-times" aria-hidden="true"></i></span>
                </div>

                <ul className={styles["dashboard-aside-itemsContainer"]}>
                    
                    <li onClick={()=>{switchPart('main')}} className={main?styles["selected"]+ " "+ styles["dashboard-aside-partBtn"] : styles["dashboard-aside-partBtn"]}>
                        اطلاعات پروفایل
                        <i className="fa fa-user" aria-hidden="true"></i>
                    </li>

                    <li onClick={()=>{switchPart('reserveCustomer')}} className={ reserveCustomer ? styles["selected"]+ " "+ styles["dashboard-aside-partBtn"] : styles["dashboard-aside-partBtn"] }>
                        رزرو مشتریان  
                        <i className="fa fa-calendar-check-o" aria-hidden="true"></i>                          
                    </li>

                    <li onClick={()=>{switchPart('changeInfo')}} className={changeInfo?styles["selected"]+ " "+ styles["dashboard-aside-partBtn"]: styles["dashboard-aside-partBtn"]}>
                        تغییر اطلاعات حساب
                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                    </li>

                    <li onClick={()=>{switchPart('notification')}} className={notification?styles["selected"]+ " "+ styles["dashboard-aside-partBtn"]: styles["dashboard-aside-partBtn"]}>
                        اعلانات
                        <div className={styles["notification-box"]} >
                            {/* <span className={styles["notification-count"]}></span> */}
                            <div className={styles["notification-bell"]}>
                                <span className={styles["bell-top"]}></span>
                                <span className={styles["bell-middle"]}></span>
                                <span className={styles["bell-bottom"]}></span>
                                <span className={styles["bell-rad"]}></span>
                            </div>
                        </div>
                    </li>

                    <li onClick={()=>{switchPart('employeeList')}} style={ {paddingLeft: "0"} } className={employeeList?styles["selected"]+ " "+ styles["dashboard-aside-partBtn"]: styles["dashboard-aside-partBtn"]}>
                          لیست کارمندان
                        <img style={ {width:"45px"} } src="/imgs/icons/employee.png" alt="employeeList" />
                    </li>

                    <li onClick={()=>{switchPart('sendMessage')}} className={sendMessage?styles["selected"]+ " "+ styles["dashboard-aside-partBtn"]: styles["dashboard-aside-partBtn"]}>
                        ارسال پیام به کاربران
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    </li>            
                    
                    <li onClick={()=>{switchPart('services')}} className={services?styles["selected"]+ " "+ styles["dashboard-aside-partBtn"]: styles["dashboard-aside-partBtn"]}>
                        لیست خدمات
                        <img src="/imgs/icons/service.png" alt="service" />
                    </li>
                </ul>

                <LogOut/>

            </aside>

            <section className={ styles["dashboard-content-section"]} >
                {
                    showState.loading?
                    <div className="d-flex justify-content-center align-items-center">
                        {/* <Loading2/> */}
                        <></>
                    </div>
                    :<ActivePartComponent setRequest={setRequest} isAdmin={true}/>
                }
            </section>

          </div>

    </>
  )
}

export default AdminDashboard;
