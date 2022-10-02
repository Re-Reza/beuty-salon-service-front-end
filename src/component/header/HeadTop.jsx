import React, { useContext, useEffect } from "react";

import Link from "next/link";

import contextStore from "../../context/contextStore";
import { removeCookie } from "../../dataService/cookieProvider";
import { headerRequest } from "../../dataService/homeProvider";
import styles from  "../../../public/styles/header.module.css";


export function HeadTop(){

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

    console.log(contextState);
    function logout(){
        removeCookie();
        dispatch({
            type : "DELETE_DATA",
        });
    }
    return (

        <div className={styles["header-topPart"]}>

            <div className={styles["header-logo"] }>
                <h1>
                    سالن زیبایی
                </h1>
            </div>
            
            {/* exit from account */}
            <div className={styles["nav-link-hover"]}>
            {
                contextState.fName? 
                <div onClick={logout}>
                    خروج از حساب
                    <i className="fa fa-sign-out me-2 text-danger" aria-hidden="true"></i>
                </div>
                :
                <Link href="/signin">
                    <a>
                        ورود به حساب     
                        <i className="fa fa-sign-in me-2" aria-hidden="true"></i> 
                    </a>
                </Link>
            }
            </div>

        </div>
    )

}

