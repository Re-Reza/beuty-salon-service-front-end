import React from 'react';

import Link from 'next/link';
import { removeCookie } from "../../dataService/cookieProvider";
// import Hamburger from 'hamburger-react';

import styles from "../../../public/styles/reservePage.module.css";

function ReserveNav(props) {

    function logout(){
        removeCookie();
        props.dispatch({
            type : "DELETE_DATA",
        });
    }
    
    // const { userChoiceState: { selectByEm } , dispatch } = useContext( reserveContext );

    // const changeReserveType = (value) => {
    //     if( value != selectByEm) {
    //         dispatch({
    //             type : "SET_RESERVE_TYPE" ,
    //             payload : value
    //         });
    //     }
    // }

    return (
        <nav className={styles['reserveNav']}>

            <div className={styles["reserveNav-right"]}>

                <div>

                    <span style={{fontSize : "1.3em"}}>
                        سالن زیبایی ایتوک
                    </span>

                    <span className={styles["border-left"]} >
                        <img className={styles["icon-size"]}  src="/imgs/icons/purpleLogo.png" alt="logo" />
                    </span>

                    <span className='me-2'>
                        <img className={styles["icon-size"]} style={{width:"32px"}}role="button" src="/imgs/icons/purpleSearch.png" alt="search" />
                    </span>

                </div>

                {/* <div className='d-flex align-items-center me-4'>

                    <div onClick={()=> {changeReserveType(false)}} role="button" style={{paddingBottom : ".3em"}} className={selectByEm ? "ms-3" : "ms-3 "+styles["selectedReserveType"]}>
                        رزرو بر حسب تاریخ
                    </div>

                    <div onClick={()=> {changeReserveType(true)}} role="button" style={{paddingBottom : ".3em"}} className={selectByEm ? styles["selectedReserveType"] : ""}>
                        رزرو برحسب کارمند
                    </div>

                </div> */}

            </div>


            <div className={styles["reserveNav-left"]}>
            {
                props.logedIn ? 

                <div role="button" onClick={logout}>
                    خروج از حساب
                    <i className="fa fa-sign-out me-2" style={{color:"var(--purple)"}} aria-hidden="true"></i>
                </div>
                :
                <Link href="/signin">
                    <a>
                        ورود به حساب     
                        <img className={styles["icon-size"]+" me-2"} style={{width:"30px"}} role="button"  src="/imgs/icons/loginIcon.png" alt="" />
                    </a>
                </Link>
                
            }
            </div>

        </nav>
    );
}

export default ReserveNav;