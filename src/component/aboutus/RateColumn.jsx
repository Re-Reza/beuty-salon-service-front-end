import React from 'react';

import { motion } from "framer-motion";

import styles from "../../../public/styles/aboutUs.module.css";

function RateColumn(props) {
    
    const columnVarient = { 
        offscreen : {
            opacity : 0,
            bottom : "-50%" 
        },
        onscreen : {
            opacity : 1,
            bottom : 0,
            transition : {
                type: "spring",
                duration : 1,
                ease: "easeOut"
            }
        }
    }

    const { month, rate, title} = props.item;

    const stl = {
        width: "100%", 
        height : `${rate}%`,
        backgroundColor : "var(--grey)",
        borderRadius: "5px",
        position : "relative",
    }

    return (
        <div className={styles["ratecolumnContainer"]} >
            <div className={styles["rate-column"]}>
                <motion.div variants={columnVarient} initial="offscreen" viewport={{once : true}} whileInView="onscreen" style={stl}></motion.div>
            </div>
            <div style={{color:"var(--grey2)", fontSize : ".9em", marginTop:".7em"}}>{month || title}</div>
        </div>
    )
}

export default RateColumn;
