import React, { useState, useRef } from 'react';

import { MainPart, EmployeeCustomerReserve, ChangeEmployeeInfo, Notifications } from "../employeeDashboardParts";
import { HeadPart } from "../HeadPart";
import Footer from "../../footer/Footer";

import styles from "../../../../public/styles/dashboard.module.css";

//هر کامپوننت باید  اطلاعات مربوط به خودش را زمان اپلود شدنش از ای پی ای بگیرد
const EmployeeDashboard = () => {

    const [showState, setShowState] = useState({
        main: true,
        reserveCustomer: false,
        changeInfo : false,
        notification: false
    });

    const [employeeInfo, setEmployeeInfo ] = useState( {
        username: "زهرا محمدی",   
        email:"ee@gmail.com",
        phone: '093000000',
        services: ["مو", "پوست", "ناخن"] 
    } );

    const asideRef = useRef(null);

    function switchPart(selected){
        const notSelectedItems = {};
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

    const { main, changeInfo, reserveCustomer, notification} = showState;

    let ActivePartComponent;
    if(main)
        ActivePartComponent = MainPart;
    else if(changeInfo)
        ActivePartComponent = ChangeEmployeeInfo;
    else if(reserveCustomer)
        ActivePartComponent = EmployeeCustomerReserve;
    else if(notification)
        ActivePartComponent = Notifications;

    return (
        <>        
            <div className={styles["dashboard-mainContainer"]}>

                <div id={styles["dashboard-header"]}>
                    <HeadPart asideRef={asideRef} />
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
                                <span className={styles["notification-count"]}>6</span>
                                <div className={styles["notification-bell"]}>
                                    <span className={styles["bell-top"]}></span>
                                    <span className={styles["bell-middle"]}></span>
                                    <span className={styles["bell-bottom"]}></span>
                                    <span className={styles["bell-rad"]}></span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </aside>
                
                <section className={ styles["dashboard-content-section"]} >
                    {
                        showState.loading?
                        <div className="d-flex justify-content-center align-items-center">
                            {/* <Loading2/> */}
                            <></>
                        </div>
                        :<ActivePartComponent employeeInfo={ employeeInfo} />
                    }
                </section>

            </div>

        <Footer/>
    </>
    );
}

export default EmployeeDashboard;
