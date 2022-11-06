import React from 'react'

import styles from "../../../public/styles/aboutUs.module.css";

function RateColumn(props) {
    
    const { month, rate} = props.item;

    const stl = {
        width: "100%", 
        height : `${rate}%`,
        backgroundColor : "var(--grey)",
        borderRadius: "5px",
    }
    return (
        <div className={styles["ratecolumnContainer"]}>
            <div className={styles["rate-column"]}>
                <div style={stl}></div>
            </div>
            <div style={{color:"var(--grey2)", fontSize : ".9em", marginTop:".7em"}}>{month}</div>
        </div>
    )
}

export default RateColumn;
