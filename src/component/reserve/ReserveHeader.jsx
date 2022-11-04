import React, { useContext } from 'react';

import ReserveNav from './ReserveNav';

import Link from 'next/link';

import contextStore from "../../context/contextStore";
import styles from "../../../public/styles/reservePage.module.css"


export function ReserveHeader(){
    
    const { contextState : {fName}, dispatch } = useContext( contextStore );

    return (
        <header className={styles["reserve-header"]} >

            <ReserveNav dispatch={ dispatch } logedIn = { fName ? true : false} />
            
            <div className={styles["header-bottom"]}>

                <div className={styles["header-bottom-nav"]}>
                    fsdfdsf
                </div>
            
            </div>


        </header>
    )
}

