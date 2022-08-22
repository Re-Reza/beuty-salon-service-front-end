import React, { useState} from "react";

import { SelectByEmployee, SelectByDate } from "../reserve";

import styles from "../../../public/styles/reservePage.module.css";

export function ChooesReserveType() {

    const [ state, setState ] = useState({
        selectByEm : true
    });

    const toggleSelectType = ( value) => {
        setState({
            ...state,
            selectByEm : value
        });
    }

    return (
        <div className={styles.reserveReserveType}>
            <div className={styles.reserveReserveTypeBtnContainer}>
                <button className = { state.selectByEm ? styles.chooseTypeBtn : styles.chooseTypeBtn +" " + styles.selectBtn  } onClick={()=>{toggleSelectType(false)}}>رزرو برحسب تاریخ</button>
                <button className =  { !state.selectByEm ? styles.chooseTypeBtn : styles.chooseTypeBtn +" " + styles.selectBtn  } onClick={()=>{toggleSelectType(true)} } > رزرو برحسب کارمند</button>
            </div>
            
            <div>
            {
                state.selectByEm? 
                <SelectByEmployee /> :
                <SelectByDate />
            }
            </div>
        </div>
    );
}