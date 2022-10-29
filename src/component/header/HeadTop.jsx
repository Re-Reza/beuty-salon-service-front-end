import React, { useContext, useEffect } from "react";

import Link from "next/link";

import contextStore from "../../context/contextStore";
import { removeCookie } from "../../dataService/cookieProvider";
import { headerRequest } from "../../dataService/homeProvider";
import styles from  "../../../public/styles/header.module.css";


export function HeadTop(props){

    const {contextState, dispatch} = useContext( contextStore );

    useEffect( () => {
        //to avoid sending unnecessary requests
        if( contextState.fName == null)
        {
            headerRequest().then( response => {
    
                console.log(response);
                const { data: {result} } = response;
                dispatch({
                    type : "SET_DATA",
                    payload : result
                });
        
            }).catch( err => console.log(err) );
        }
      }, []);

    function logout(){
        removeCookie();
        dispatch({
            type : "DELETE_DATA",
        });
    }
    return (

        <div className={props.homePage ? styles["header-topPart"] : styles["header-topPart"]+" "+ styles["service-header-topPart"]}>

            <div className={styles["header-logo"] }>
                <h1 className={styles["header-logo-h1"]}>
                    <span>سالن بیوتی ایتوک </span>
                    <span className={styles["icon-size"]} style={{margin : "0 6px"}}>
                        <img className={styles["icon-size"]}  style={{width:"30px"}} src="/imgs/logo.png" alt="logo" />
                    </span>

                    <span className={styles["icon-size"]} >
                        <img  className={styles["icon-size"]} role="button" style={{ paddingRight:"6px", borderRight : "2px solid var(--purple)" }}  src="/imgs/icons/searchIcon.png" alt="searchIcon" />
                    </span>

                </h1>   
            </div>
            
            <div className={styles["logoutFont"]} role="button">
            {
                contextState.fName? 
                <div onClick={logout}>
                    خروج از حساب
                    <i className="fa fa-sign-out me-2" style={{color:"var(--purple)"}} aria-hidden="true"></i>
                </div>
                :
                <Link href="/signin">
                    <a>
                        ورود به حساب     
                        <img className={styles["icon-size"]+" me-2"} role="button"  src="/imgs/icons/loginIcon.png" alt="" />
                    </a>
                </Link>
            }
            </div>

        </div>
    )

}

