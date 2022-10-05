import React, { useState}  from 'react';

import Link from 'next/link';

import Hamburger from 'hamburger-react';

import styles from "../../../public/styles/reservePage.module.css";

export function ReserveNav() {


    const [show, setShow ] = useState(false);

    function toggleShow(){
        setShow(!show);
    }

    return (
        <nav className={styles['reserveNav']}>
            <div className={styles['reserveNav-mobile']} >
                <div onClick={toggleShow} className='d-inline-block'>
                    <Hamburger />
                </div>

                <ul className={ show ? styles['reserveNav-mobile-links'] +" "+styles['show-mobile-nav'] : styles['reserveNav-mobile-links'] }>
                    <li className={styles['reserveNav-mobile-link']}>
                        <Link href="/">
                            <a>صفحه اصلی</a>
                        </Link>
                    </li>

                    <li className={styles['reserveNav-mobile-link']}>
                        <Link href="/dashboard">
                            <a>پنل کاربری</a>
                        </Link>
                    </li>

                    
                    <li className={styles['reserveNav-mobile-link']}>
                        <Link href="/services/hair">
                            <a>خدمات</a>
                        </Link>
                    </li>

                    <li className={styles['reserveNav-mobile-link']}>
                        <Link href="/about-us">
                            <a>درباره ما</a>
                        </Link>
                    </li>

                    {/* <li className={styles['reserveNav-mobile-link']}>
                        <Link href="/">
                            <a>ارتباط با ما</a>
                        </Link>
                    </li> */}

                </ul>
            
            </div>

            <div className={styles['reserveNav-linkContainer']}>
                <ul className={styles['reserveNav-linkList']}>
                    <li className={styles['reserveNav-Link'] }>
                        <Link href="/">
                            <a>صفحه اصلی</a>
                        </Link>
                    </li>

                    <li  className={styles['reserveNav-Link'] }>
                        <Link href="/dashboard">
                            <a>پنل کاربری</a>
                        </Link>
                    </li>

                </ul>
                

                <ul className={styles["reserveNav-linkList"]}>
                
                    <li className={styles['reserveNav-Link'] }>
                        <Link href="/service/hair">
                            <a>خدمات</a>
                        </Link>
                    </li>
                
                    <li className={styles['reserveNav-Link'] }>
                        <Link href="/about-us">
                            <a>درباره ما</a>
                        </Link>
                    </li>

                    {/* <li className={styles['reserveNav-Link'] }>
                        <Link href="/">
                            <a>ارتباط با ما</a>
                        </Link>
                    </li> */}

                </ul>
            </div>

        </nav>
    );
}