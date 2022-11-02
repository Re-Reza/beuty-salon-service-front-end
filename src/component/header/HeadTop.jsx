import React, { useContext, useEffect } from "react";

import Link from "next/link";

import contextStore from "../../context/contextStore";
import { removeCookie } from "../../dataService/cookieProvider";
import { headerRequest } from "../../dataService/homeProvider";
import styles from  "../../../public/styles/header.module.css";
import { motion } from "framer-motion";

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

    function provideVarient(delay){
        return {
            onscreen : {
                rotate : 150,
                transition : {
                    type: "spring",
                    duration : .5,
                    delay :.2
                }
            },
            offscreen : {
                // right : "-100px",
                rotate : 0
            }
        }
    }

    let tt = {
        onscreen : {
            rotate : 150,
            transition : {
                type: "spring",
                duration : .5,
                delay :.2
            }
        },
        offscreen : {
            // right : "-100px",
            rotate : 0
        }
    }

    // const varientLogoRigth = {
    //     onscreen: {
    //         right : 0,
    //         transition: {
    //           type: "spring",
    //           duration : 1.5, delay: 0.2
    //         }
    //     },
    //     offscreen: {
    //         right : "-100%",
    //     },
    // };

    return (

        <div className={props.homePage ? styles["header-topPart"] : styles["header-topPart"]+" "+ styles["service-header-topPart"]}>

            <div className={styles["header-logo"] }>
                <h1 className={styles["header-logo-h1"]}>
                    
                    <motion.span animate={{right: "0"}}  transition={ {duration :.8} } initial={{right : "-50%"}} style={{position:"relative"}}>سالن زیبایی ایتوک </motion.span>
                    <motion.span className={styles["icon-size"]} style={{margin : "0 6px", position:"relative"}}>
                        <img className={styles["icon-size"]}  style={{width:"30px"}} src="/imgs/logo.png" alt="logo" />
                    </motion.span>

                    <span className={styles["icon-size"]} >
                        <img  className={styles["icon-size"]} role="button" style={{ paddingRight:"6px", borderRight : "3px solid var(--pinkT2)" }}  src="/imgs/icons/searchIcon.png" alt="searchIcon" />
                    </span>

                </h1>   
            </div>
            
            <div className={styles["logoutFont"]} role="button">
            {
                contextState.fName? 
                <div onClick={logout}>
                    خروج از حساب
                    <i className="fa fa-sign-out me-2" style={{color:"var(--pinkT2)"}} aria-hidden="true"></i>
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

        </div>
    )

}

