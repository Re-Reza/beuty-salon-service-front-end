import React, { memo } from "react";

//components
import { HeadTop, NavBar } from "../header"
import Slider from "./slider/Slider";
import styles from  "../../../public/styles/header.module.css";

function Header(props){

    const { homePage } = props;

    return (
        <header className={ homePage ? styles["header"] + " "+styles["home-header"] : styles["header"]}>

            <HeadTop />
            <NavBar />
            {
                homePage ?    
                <div className={styles["slider-container"]}>
                    <Slider/>
                </div>
                : <></> 
            }

        </header>
    )
}

export default memo(Header);