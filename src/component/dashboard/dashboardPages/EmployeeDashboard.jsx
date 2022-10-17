import React, { useState, useRef } from 'react';

import {  EmployeeCustomerReserve, Plan } from "../employeeDashboardParts";
import { MainPart, Notifications, ReseveList } from "../userDashboardParts"
import { HeadPart } from "../HeadPart";
import { ChangeAccountInfo } from "../userDashboardParts";
import LogOut from "../LogOut";
// import moment from 'jalali-moment'

import styles from "../../../../public/styles/dashboard.module.css";

//هر کامپوننت باید  اطلاعات مربوط به خودش را زمان اپلود شدنش از ای پی ای بگیرد
const EmployeeDashboard = () => {

    const [showState, setShowState] = useState({
        main: true,
        reserveCustomer: false,
        changeInfo : false,
        notification: false,
        myReserves : false,
        request : false,
        plan : false
    });

    function setRequest(){
        setShowState({
            ...showState,
            request : !showState.request
        })
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

    const { main, changeInfo, reserveCustomer, notification, myReserves, plan } = showState;

    let ActivePartComponent;
    if(main)
        ActivePartComponent = MainPart;
    else if(changeInfo)
        ActivePartComponent = ChangeAccountInfo;
    else if(reserveCustomer)
        ActivePartComponent = EmployeeCustomerReserve;
    else if(notification)
        ActivePartComponent = Notifications;
    else if(myReserves)
        ActivePartComponent = ReseveList;
    else if(plan) 
        ActivePartComponent = Plan;

    return (
        <>        
            <div className={styles["dashboard-mainContainer"]}>

                <div id={styles["dashboard-header"]}>
                    <HeadPart request={showState.request}  asideRef={asideRef} />
                </div>

                <aside ref={asideRef} className={styles["dashboard-aside"]} >

                    <div className="d-flex justify-content-between">  
                        <h3 className={styles["aside-title"]}>پنل کارمند</h3>
                        <span onClick={hideAside} className={styles["close-aside-btn"]}><i className="fa fs-2 text-danger fa-times" aria-hidden="true"></i></span>
                    </div>

                    <ul className={styles["dashboard-aside-itemsContainer"]}>
                        <li onClick={()=>{switchPart('main')}} className={main?styles["selected"]+ " "+ styles["dashboard-aside-partBtn"] : styles["dashboard-aside-partBtn"]}>
                            اطلاعات کارمند
                            <i className="fa fa-user" aria-hidden="true"></i>
                        </li>
                        <li onClick={()=>{switchPart('reserveCustomer')}} style={{paddingLeft:"0"}}className={ reserveCustomer ? styles["selected"]+ " "+ styles["dashboard-aside-partBtn"] : styles["dashboard-aside-partBtn"] }>
                            رزرو مشتریان  
                            <img src="/imgs/icons/reserve.png" alt="reserve-icon" />               
                        </li>
                        <li onClick={()=>{switchPart('myReserves')}} className={myReserves?styles["selected"]+ " "+ styles["dashboard-aside-partBtn"]: styles["dashboard-aside-partBtn"]}>
                            رزرو های من
                            <i className="fa fa-calendar-check-o" aria-hidden="true"></i> 
                        </li>
                        <li onClick={()=>{switchPart('plan')}} style={{paddingLeft:"0.3em"}} className={plan?styles["selected"]+ " "+ styles["dashboard-aside-partBtn"]: styles["dashboard-aside-partBtn"]}>
                            برنامه کاری من     
                            <img src="/imgs/icons/plan-iicon.png" alt="plan-icon" />
                        </li>
                        <li onClick={()=>{switchPart('changeInfo')}} className={changeInfo?styles["selected"]+ " "+ styles["dashboard-aside-partBtn"]: styles["dashboard-aside-partBtn"]}>
                            تغییر اطلاعات حساب
                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                        </li>
                        <li onClick={()=>{switchPart('notification')}} className={notification?styles["selected"]+ " "+ styles["dashboard-aside-partBtn"]: styles["dashboard-aside-partBtn"]}>
                            اعلانات
                            <div className={styles["notification-box"]} >
                                {/* <span className={styles["notification-count"]}>{}</span> */}
                                <div className={styles["notification-bell"]}>
                                    <span className={styles["bell-top"]}></span>
                                    <span className={styles["bell-middle"]}></span>
                                    <span className={styles["bell-bottom"]}></span>
                                    <span className={styles["bell-rad"]}></span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <LogOut/>
                    <div>{
                    //  moment.from('1367/04/11', 'fa', 'YYYY/MM/DD')
                    }</div>
                </aside>
                
                <section className={ styles["dashboard-content-section"]} >
                    {
                        showState.loading?
                        <div className="d-flex justify-content-center align-items-center">
                            {/* <Loading2/> */}
                            <></>
                        </div>
                        :<ActivePartComponent setRequest={setRequest} isEmployee={true} />
                    }
                </section>

            </div>
    </>
    );
}

export default EmployeeDashboard;
