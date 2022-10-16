import React, { useState } from 'react';  

import { convertEnToPe } from "persian-number";

import { cancelReservation } from "../../../dataService/userDashboardProvider";

import Toast from '../../elements/Toast';
import styles from "../../../../public/styles/dashboard.module.css";

export function ReserveItem(props) {


    const [ state, setState ] = useState({
        done : "انجام شده",
        cancelled : "کنسل شده",
        waiting : "در انتظار تایید کارمند",
        finalized : "تایید شده توسط کارمند",
        showToast : false,
        error : false,
        msg : null
    });

    const { id, reserveDate, status, employeefName, employeelName, employeeId, service, reserveTime } = props.item;
    console.log(props.item);
    const deleteReservation = () =>{
        cancelReservation(id).then( response => {

            setState({
                ...state,
                error : false,
                showToast : true,
                msg : "رزرو با موفقیت کنسل شد"
            });
            hideToast(true);


        }).catch( err => {
            setState({
                ...state,
                error : true,
                showToast : true,
                msg :"خطایی رخ داده است"
            });
            hideToast();
        })
    }

    function hideToast(success){
        setTimeout(()=>{
            
            setState({
                ...state,
                showToast : false
            });
            if(success==true )
                props.deleteReserve(id);

        }, 2000);
    }

    const dateParts = reserveDate.split('/');
    return (
        <>
            {
                state.showToast ? <Toast toatData={ { error:state.error, message:state.msg} }/> : <></>
            }
            <tr>
                <th scope="row">{convertEnToPe(props.row)}</th>
                <td>{service}</td>
                <td style={{minWidth:"110px"}}>{employeefName + " "+ employeelName }</td>
                <td>{convertEnToPe(parseInt(dateParts[0]))+"/"+convertEnToPe(parseInt(dateParts[1]))+"/"+convertEnToPe(parseInt(dateParts[2]))}</td>
                <td>{reserveTime}</td>
                <td style={{minWidth:"110px"}}>{ state[status] }</td>
                {
                    props.history  || status == "finalized" ?
                    <></>
                    :
                    <td title='کنسل کردن رزرو' className="fs-5" role="button" onClick={deleteReservation}>
                        <span>
                            <img className={styles['reserve-icon'] } src="/imgs/icons/booking-cancel-icon.svg" alt="cancel reserve" />
                        </span>
                    </td>
                }
            </tr>
        
        </>
    )
}

export default ReserveItem;