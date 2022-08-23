import React, { useState, useRef, useEffect } from "react";

import { HeadPart, MainPart, UserInfo, ReseveList } from "../component/dashboard";
import Footer from  "../component/footer/Footer";

import styles from "../../public/styles/dashboard.module.css";


function Dashboard () {

    const [showState, setShowState] = useState({
        main: true,
        userInfo: false,
        reservedList: false,
        // changeAccountInfo: false,
        // loading: true,
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

    const { main, userInfo, reservedList} = showState;

    let ActivePartComponent;
    if(main)
        ActivePartComponent = MainPart;
    else if(userInfo)
        ActivePartComponent = UserInfo;
    else if(reservedList)
        ActivePartComponent = ReseveList;
    // else if(accountInfo)
    //     ActivePartComponent = AccountInfo;
    // else if( changeAccountInfo)
    //     ActivePartComponent = ChangeAccountInfo;

    return (
        <>        
            <div className={styles["dashboard-mainContainer"]}>

                <header id={styles["dashboard-header"]}>
                    <HeadPart asideRef = {asideRef} />
                </header>

                <aside ref={asideRef} className={styles["dashboard-aside"]} >

                    <div className="d-flex justify-content-between">  
                        <h3 className={styles["aside-title"]}>پنل حساب کاربری</h3>
                        <span onClick={hideAside} className={styles["close-aside-btn"]}><i className="fa fs-2 text-danger fa-times" aria-hidden="true"></i></span>
                    </div>

                    <ul className={styles["dashboard-aside-itemsContainer"]}>
                        <li onClick={()=>{switchPart('main')}} className={main?styles["selected"]+ " "+ styles["dashboard-aside-partBtn"] : styles["dashboard-aside-partBtn"]}>
                            اطلاعات حساب
                        </li>
                        <li onClick={()=>{switchPart('reservedList')}} className={ reservedList ? styles["selected"]+ " "+ styles["dashboard-aside-partBtn"] : styles["dashboard-aside-partBtn"] }>
                            لیست رزرو ها
                        </li>
                        {/* <li onClick={()=>{switchPart('accountInfo')}} className={accountInfo?"selected dashboard-aside-partBtn":"dashboard-aside-partBtn"}>
                            اطلاعات کاربری
                        </li> */}
                        <li onClick={()=>{switchPart('userInfo')}} className={userInfo?styles["selected"]+ " "+ styles["dashboard-aside-partBtn"]: styles["dashboard-aside-partBtn"]}>
                            تغییر اطلاعات حساب
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

export default Dashboard;