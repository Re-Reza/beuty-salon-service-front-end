import React, { useState, useEffect, useContext } from "react";

import reserveContext from "./reserveContext";

import styles from "../../../public/styles/reservePage.module.css";

export function ChooseService() {

    const [ state, setState ] = useState({ 
        show:false
    });    

    const { userChoiceState, dispatch } = useContext( reserveContext );
    const { enValue, faValue } = userChoiceState.serviceType;
    console.log(enValue, faValue )
    
    function chooseService(event) { 
        const selectedItem = event.target;
        const enValue = selectedItem.value;
        const faValue = selectedItem.innerHTML;
        console.log(enValue, faValue);

        dispatch ( {
            type: "SET_SERVICE",
            payload : {
                enValue,
                faValue
            }
        });
    }


    return ( 

        <section className={styles["chooseService-section"]}>
            {/* <select defaultValue={null} onChange={chooseService} className="form-select form-select-lg mb-3">
                <option value={''}>انتخاب خدمت</option>
                <option value="hair">مو</option>
                <option value="skin">پوست</option>
                <option value="nail">ناخن</option>
                <option value="makeup">میکاپ</option>
            </select> */}

            <div className={styles['DropDown']}>
            
                <div onClick={()=> { setState({...state, show:!state.show}) } } className={styles["DropDown-select"]}>
                    {
                        enValue ? 
                        <span>{faValue}</span>
                        :
                        <span>انتخاب کنید</span>            
                    }
                    {
                        state.show?
                        <i className="fa fa-angle-up" aria-hidden="true"></i>
                        :
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                    }
                </div>

                <ul className={state.show?styles["show"] +" "+ styles["DropDown-options"] : styles["DropDown-options"]}>
                    
                    <option className={styles["DropDown-options-options"]} onClick={chooseService} value="nail">ناخن</option>
                    <option className={styles["DropDown-options-options"]} onClick={chooseService} value="hair">مو</option>
                    <option className={styles["DropDown-options-options"]} onClick={chooseService} value="skin">پوست</option>
                    <option className={styles["DropDown-options-options"]} onClick={chooseService} value="makeup">میکاپ</option>

                </ul>

            </div>

        </section>
    )

}

