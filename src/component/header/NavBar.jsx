import React, { useEffect, useRef, useState, useContext  } from "react";

import { Spin as Hamburger } from 'hamburger-react';
import contextStore from "../../context/contextStore";
import Link from "next/link";
import styles from  "../../../public/styles/header.module.css";
 
export function NavBar(){

    const navRef = useRef( null );
    const [showState, setShowState ] = useState(false); 
    const [ showNavState, setshowNavState ] = useState(false);
    const { contextState, dispatch } = useContext(contextStore);

    useEffect( ()=> {
        
        const nav =  navRef.current;
        const navPosition = nav.offsetTop;
        window.addEventListener("scroll",  ()=> {
            if( window.pageYOffset >= navPosition)
            {
                nav.classList.add(styles["sticky"])
            }else {
                nav.classList.remove(styles["sticky"])
            }
        });

    }, []);

    const toggleServiceList = () => {
        setShowState( !showState );
    }

    function toggleMenuShowState(){
        setshowNavState( !showNavState)
    }

    return (
        <nav ref={navRef} id="nav" className={styles["navbarContainer"]}>
            
            <div className={styles["nav-menu-icon-container"]}>
                <div onClick={toggleMenuShowState} className={ showNavState ? styles["nav-menu-icon"] + " " +styles["show-modeicon"]: styles["nav-menu-icon"] }>
                    <Hamburger/>
                </div>
            </div>


            <ul className={showNavState ? styles["nav-links-container"]+" "+ styles["showNavMenu"]: styles["nav-links-container"]}>
                
                <li className={styles["nav-link-hover"]}>     
                    <Link href="/">
                        <a>صفحه اصلی</a>
                    </Link>
                </li>
                
                <li  className={styles["nav-link-hover"]}>            
                    <Link href="/about-us">
                        <a>درباره ما</a>
                    </Link> 
                </li>

                <li>
    
                    <span onClick={toggleServiceList} className={ styles["nav-link-hover"]}> خدمات  &nbsp;<i className={showState? "fa fa-angle-up" : "fa fa-angle-down"} aria-hidden="true"></i></span>
           
                    <ul className={showState ? styles["nav-services"]+" "+ styles["show-nav-serive"] : styles["nav-services"]}>
                        <li onClick={()=>{setShowState(false)}} className={styles["nav-link-hover"]+ " mb-2"}>
                            <Link href="/service/hair">
                                <a>مو</a>
                            </Link>
                        </li>

                        <li onClick={()=>{setShowState(false)}} className={styles["nav-link-hover"]+ " mb-2"}>
                            <Link  href="/service/nail">
                                <a>ناخن</a>
                            </Link>
                        </li>

                        <li onClick={()=>{setShowState(false)}} className={styles["nav-link-hover"]+ " mb-2"}>
                            <Link href="/service/skin">
                                <a>پوست</a>
                            </Link>
                        </li>

                        <li onClick={()=>{setShowState(false)}} className={styles["nav-link-hover"]+ " mb-2"}>
                            <Link href="/service/makeup">
                                <a>میکاپ</a>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li  className={styles["nav-link-hover"]}>       
                    <Link href="/reserve">
                        <a>رزرو نوبت</a>
                    </Link>
                </li>
                <li  className={"d-flex align-items-center "+styles["nav-link-hover"]}>
                {
                    contextState.fName ? 
                    <>
                        <Link href="/dashboard">
                            <a >پنل کاربری  <i  className="fa fa-user-circle" aria-hidden="true"></i> </a>
                        </Link>
                         
                    </>:
                    <>
                        <Link href="/signup">
                            <a className="ms-1">ثبت نامicon</a>
                        </Link>
                    </>
                }
                </li>
            </ul>

        </nav>
    )
}