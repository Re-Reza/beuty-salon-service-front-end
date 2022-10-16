import React, { useState } from 'react';  

import PlanItem from "./PlanItem";
import { setWeekPlan } from "../../../dataService/employeeProvider";
import Toast from "../../elements/Toast";
import styles from "../../../../public/styles/dashbord/plan.module.css";

function PlanWeek(props){

    const { isFirst, data } = props;

    const [ state, setState ] = useState({
        d0: data.numbers ? data.numbers[`d0`] : null,
        d1: data.numbers ? data.numbers[`d1`] : null,
        d2: data.numbers ? data.numbers[`d2`] : null,
        d3: data.numbers ? data.numbers[`d3`] : null,
        d4: data.numbers ? data.numbers[`d4`] : null,
        d5: data.numbers ? data.numbers[`d5`] : null,
    });

    const [toastState, setToastState ] = useState({
        showToast : false,
        msg : null,
        error : false
    });

    function changeInputState(key, value){
        setState({
            ...state,
            ["d"+key] : value
        });
    }

    function hideToast(){
        setTimeout(()=>{
            setToastState({
                ...state,
                showToast : false
            });
        }, 2000);
    }
  
    function submitData (){ 
        setWeekPlan(state, props.isFirst ? 1 : 0).then(response => {
            setToastState({
                error : false, 
                showToast : true,
                msg : "با موفقیت اعمال شد"
            });
            setNewQunatity(response.data.result)
            hideToast();

        }).catch( err => {
            setToastState({
                error : true, 
                showToast : true,
                msg : "خطایی رخ داده است"
            });
            hideToast();
        } );
    }

    function setNewQunatity(data){
        setState({
            ...data
        });
    }

    return(
        <>
        {
            toastState.showToast ? 
            <Toast toatData= { { message : toastState.msg, error : toastState.error} } /> : <></>
        }
        <div className={styles['plan-week']} >

            <div className={styles['plan-week-title']}>
                <p style={{marginBottom:"0"}}><i className="fa fs-3 ms-2 fa-calendar" aria-hidden="true"></i> { isFirst ? "تعداد مشتریان هفته جاری" : "تعداد مشتریان هفته بعد" }  </p>
            </div>

            <ul className={styles['plan-week-list']}>
            {
                data.list.map( (item, index) => <PlanItem setNewQunatity={setNewQunatity} quantities={state} changeInputState={changeInputState} key={index} item={item} /> )
            }
            </ul>
            
            <div className='w-100 d-flex justify-content-center' style={{background : "rgba(238, 238, 238, 0.324)"}}>
                <button onClick={submitData} title='تایید' className={styles['plan-week-submit']}>
                    <i className="fa fa-check" aria-hidden="true"></i>
                </button>
            </div>

        </div></>
    )
}

export default PlanWeek;