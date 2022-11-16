import React, { useContext, useRef, useEffect, useState } from 'react';

import reserveContext from './reserveContext';

import ReserveModal from './ReserveModal';

import  Toast  from "../elements/Toast";

import styles from "../../../public/styles/reservePage.module.css";

const ReserveResult = () => {

    const { userChoiceState : {date, employee, service}, dispatch} = useContext ( reserveContext );

    const [ state, setState ] = useState({ 
        showToast : false,
        msg: null,
        error : false
    });

    const [modalState, setModal ] = useState(false);

    function toggleModal(value){
        setModal(value);
    }

    function checkResrve(){

        if(date.day && employee.employeeId){
            toggleModal(true);
        }   
        else{
            setState({
                showToast : true,
                msg :  "اطلاعات رزرو را تکمیل کنید ",
                error : true
            });
            hideToast(false);
        }
    }

    function hideToast(reset){

        setTimeout(()=>{
            
            setState({
                showToast : false
            });

        }, 2000);
    }

    return (
        <>
          {
            state.showToast ? <Toast toatData={ { message: state.msg, error:state.error } }/> 
            : <></>
        }

            <div className={styles["confirm-reserve-container"]}>
                <button onClick={()=>checkResrve()} className={styles["submit-reserve-btn"]}>
                    ثبت نوبت
                </button>
            </div>
            {
                modalState ? <ReserveModal toggleModal={toggleModal} isOpen={modalState}/> : <></>
            }
        </>
    )
}

export default ReserveResult;