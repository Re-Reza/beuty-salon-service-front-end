import React from 'react';

import { motion } from "framer-motion";

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

    const hStl = {
        height: "100%", 
        width : `${rate}%`,
        backgroundColor : "var(--grey)",
        borderRadius: "5px",
        position : "relative",
    }

    return (
        <div className={props.horizontal? "ratecolumnContainer-H" : "ratecolumnContainer-V" }  >
            <div className={props.horizontal  ? "rate-column rate-H" : "rate-column rate-V"}>
                <motion.div variants={columnVarient} initial="offscreen" viewport={{once : true}} whileInView="onscreen" style={props.horizontal ? hStl : stl}></motion.div>
            </div>
            <div style={{color:"var(--grey2)", fontSize : ".9em", margin:props.horizontal? "0 .5em 0 0 " : ".7em 0 0 0"}}>{month || title}</div>
        </div>
    )
}

export default RateColumn;
