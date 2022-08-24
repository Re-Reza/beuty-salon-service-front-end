import React, { useState, useRef } from "react";

import { HeadPart, MainPart, ChangeAccountInfo, ReseveList } from "../../dashboard";
import Footer from  "../../footer/Footer";

import styles from "../../../../public/styles/dashboard.module.css";


function UserDashboard () {

    const [showState, setShowState] = useState({
        main: true,
        reservedList: false,
        changeInfo : false
    });

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

    const { main, changeInfo, reservedList} = showState;

    let ActivePartComponent;
    if(main)
        ActivePartComponent = MainPart;
    else if(changeInfo)
        ActivePartComponent = ChangeAccountInfo;
    else if(reservedList)
        ActivePartComponent = ReseveList;


    return (
        <>        
            <div className={styles["dashboard-mainContainer"]}>

                <div id={styles["dashboard-header"]}>
                    <HeadPart asideRef = {asideRef} />
                </div>

                <aside ref={asideRef} className={styles["dashboard-aside"]} >

                    <div className="d-flex justify-content-between">  
                        <h3 className={styles["aside-title"]}>پنل حساب کاربری</h3>
                        <span onClick={hideAside} className={styles["close-aside-btn"]}><i className="fa fs-2 text-danger fa-times" aria-hidden="true"></i></span>
                    </div>

                    <ul className={styles["dashboard-aside-itemsContainer"]}>
                        <li onClick={()=>{switchPart('main')}} className={main?styles["selected"]+ " "+ styles["dashboard-aside-partBtn"] : styles["dashboard-aside-partBtn"]}>
                            اطلاعات حساب
                            <i className="fa fa-user" aria-hidden="true"></i>
                        </li>
                        <li onClick={()=>{switchPart('reservedList')}} className={ reservedList ? styles["selected"]+ " "+ styles["dashboard-aside-partBtn"] : styles["dashboard-aside-partBtn"] }>
                            لیست رزرو ها
                            <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                        </li>
                        <li onClick={()=>{switchPart('changeInfo')}} className={changeInfo?styles["selected"]+ " "+ styles["dashboard-aside-partBtn"]: styles["dashboard-aside-partBtn"]}>
                            تغییر اطلاعات حساب
                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
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
                        :<ActivePartComponent />
                    }
                </section>

            </div>

            <Footer/>
        </>
    )
}

export default UserDashboard;