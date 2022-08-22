import React, { useEffect, useRef, useState  } from "react";

import Link from "next/link";
import styles from  "../../../public/styles/header.module.css";
 
export function NavBar(){

    const navRef = useRef( null );
    const [showState, setShowState ] = useState(false); 
    const [ showNavState, setshowNavState ] = useState(false);
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
            <div onClick={toggleMenuShowState} className={ styles["nav-menu-icon"] }>
                <span>منو</span>
                {
                    showNavState ? <i className="fa fa-times" aria-hidden="true"></i> :
                    <i className="fa fa-bars" aria-hidden="true"></i>
                }
            </div>

            <ul className={showNavState ? styles["nav-links-container"]+" "+ styles["showNavMenu"]: styles["nav-links-container"]}>
                <li className={styles["nav-link-hover"]}>     
                    <Link href="/">
                        <a>صفحه اصلی</a>
                    </Link>
                </li>
                <li  className={styles["nav-link-hover"]}>            
                    <Link href="/َ">
                        <a>درباره ما</a>
                    </Link> 
                </li>

                <li>
                    <span onClick={toggleServiceList} className={ styles["nav-link-hover"]}> خدمات  &nbsp;<i className={showState? "fa rotate fa-angle-down rotate" : "fa fa-angle-down"} aria-hidden="true"></i></span>
                                       
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
                    <Link href="/">
                        <a>درباره ما</a>
                    </Link>
                </li>
                <li  className={"d-flex align-items-center "+styles["nav-link-hover"]}>
                    <Link href="/">
                        <a className="ms-1">پنل کاربری </a>
                    </Link>
                    <i  className="fa fa-user-circle" aria-hidden="true"></i>
                </li>
            </ul>

        </nav>
    )
}