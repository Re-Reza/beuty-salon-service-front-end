import React, { useState, useContext } from "react";

import { SelectByEmployee, SelectByDate } from "../reserve";
import reserveContext from "./reserveContext";
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
        resetData();
    }

    const { dispatch } = useContext(reserveContext);

    function resetData(){
        dispatch({
            type : "RESET_DATA"
        });
    }

    return (
        <div className={styles.reserveReserveType}>
            <div className={styles.reserveReserveTypeBtnContainer}>
                <button className = { state.selectByEm ? styles.chooseTypeBtn : styles.chooseTypeBtn +" " + styles.selectBtn  } onClick={()=>{toggleSelectType(false)}}>رزرو برحسب تاریخ</button>
                <button className =  { !state.selectByEm ? styles.chooseTypeBtn : styles.chooseTypeBtn +" " + styles.selectBtn  } onClick={()=>{toggleSelectType(true)} } > رزرو برحسب آرایشگر</button>
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