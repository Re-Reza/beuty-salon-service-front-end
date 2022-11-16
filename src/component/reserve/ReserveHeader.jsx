import React, { useContext } from 'react';

import ReserveNav from './ReserveNav';

import Link from 'next/link';

import contextStore from "../../context/contextStore";
import styles from "../../../public/styles/reservePage.module.css"


export function ReserveHeader(){
    
    const { contextState : {fName}, dispatch } = useContext( contextStore );
    console.log(fName)
    
    return (
        <header className={styles["reserve-header"]} >

            <ReserveNav dispatch={ dispatch } logedIn = { fName ? true : false} />
            
            <div className={styles["header-bottom"]}>

                <div className={styles["header-bottom-nav"]}>

                    <ul className={styles["header-bottom-nav-linkList"]}>
                        <il className={styles["header-bottom-nav-linkItem"]}>
                            <Link href="/">
                                <a>صفحه اصلی</a>
                            </Link>
                        </il>

                        <il className={styles["header-bottom-nav-linkItem"]}>
                            <span>خدمات</span>
                        </il>
                        
                        <il className={styles["header-bottom-nav-linkItem"]}>
                            <Link href="/about-us">
                                <a>درباره ما</a>
                            </Link>
                        </il>
                        
                        <il className={styles["header-bottom-nav-linkItem"]}>
                        {
                            fName ?                        
                            <Link href="/">
                                <a>
                                    <span>پنل کاربری</span>
                                    <img style={{width:"29px"}} src="/imgs/icons/userIcon.png" alt="usericon" />
                                </a>
                            </Link>
                            :
                            <Link href="/">
                                <a className='d-flex align-items-center'>
                                    <span>ورود به حساب</span>
                                    <i className="fa me-2 fs-5 fa-sign-in" aria-hidden="true"></i>
                                </a>
                                
                            </Link>
                        }
                        </il>
                        
                    </ul>
                </div>
            
            </div>


        </header>
    )
}

