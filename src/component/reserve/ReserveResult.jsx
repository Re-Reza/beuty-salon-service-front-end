import React, { useContext, useRef, useEffect, useState } from 'react';

import reserveContext from './reserveContext';
import { confirmReserve } from "../../dataService/reserveProvider";
import  Toast  from "../elements/Toast";

import PN from "persian-number";
import styles from "../../../public/styles/reservePage.module.css";

export const ReserveResult = () => {

    const { userChoiceState : {date, employee, service}, dispatch} = useContext ( reserveContext );
    const [ state, setState ] = useState({ 
        showToast : false,
        msg: null,
        error : false
    });

    const selectedDate =  `${PN.convertEnToPe(date.year)}/${PN.convertEnToPe(date.month)}/${PN.convertEnToPe(date.day)}`;

    const resultRef = useRef(null)

    // useEffect(() => {
    //     setTimeout ( () => {
    //         const container = resultRef.current;
    //         container.classList.add( styles['show-reserve-result'] );
    //     }, 500 );
    // }, []);

    function submitReserve(){
        const reserveData = {
            reserveDate : `${date.year}/${date.month}/${date.day}`,
            employeeId : employee.employeeId,
            employeePersonId : employee.personId, 
            serviceId : service.id 
        } 

        confirmReserve( reserveData ).then( response => {
            setState({
                showToast : true,
                msg :  "رزرو با موفقیت ثبت شد",
                error : false
            });
 
            hideToast();
        }).catch( err => {
            console.log(err.response.status);
            let errorMsg;
            if(err.response.status == 401)
                errorMsg = "برای ثبت رزرو باید ابتدا به حساب خود وارد شوید"
            else 
                errorMsg = "در ثبت رزرو خطایی رخ داده است"
            setState({
                showToast : true,
                msg :  errorMsg,
                error : true
            });
            hideToast();
        });
    }

    function hideToast(){
        setTimeout(()=>{
            
            setState({
                showToast : false
            });
            dispatch({
                type : "RESET_DATA",
            });

        }, 1500);
    }

    return (
        <>
            {
                state.showToast ? <Toast toatData={ { message: state.msg, error:state.error } }/> 
                : <></>
            }
            <div className={styles["confirm-reserve-container"]}>
                <button className={styles["submit-reserve-btn"]}>
                    ثبت نوبت
                </button>
            </div>
        </>
    )
}