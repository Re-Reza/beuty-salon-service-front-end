import React, { useContext, useRef, useEffect } from 'react';

import reserveContext from './reserveContext';
import PN from "persian-number";
import styles from "../../../public/styles/reservePage.module.css";

export const ReserveResult = () => {

    const { date, employee, service} = useContext ( reserveContext ).userChoiceState;


    const selectedDate =  `${PN.convertEnToPe(date.year)}/${PN.convertEnToPe(date.month)}/${PN.convertEnToPe(date.day)}`;

    const resultRef = useRef(null)

    useEffect(() => {
        setTimeout ( () => {
            const container = resultRef.current;
            container.classList.add( styles['show-reserve-result'] );
        }, 500 );
    }, []);

    function submitReserve(){
        //send data of reservation to server
    }

    return (
        <div ref={resultRef} className={styles['reserve-result']}>
            <div className='d-flex flex-column'>
                <label className={'mb-3 '+styles['result-label']}>نوع خدمت :</label>
                <span className={styles['reserve-result-input']}>{service.value}</span>
            </div>
            
            <div className='d-flex flex-column'>
                <label className={'mb-3 '+styles['result-label']}>کارمند :</label>
                <span className={styles['reserve-result-input']}>{employee.fName+" "+employee.lName}</span>
            </div>
            
            <div className='d-flex flex-column'>
                <label className={'mb-3 '+styles['result-label']}>تاریخ :</label>
                <span className={styles['reserve-result-input']}>{selectedDate}</span>
            </div>
            {/* تا زمان که تکمیل نشد دکمه غیر فعال باشد */}
            {/* باز شدن مدال برای تایید */}
            <button onClick={submitReserve} className={styles['confirm-reserve']+" "+'btn btn-success mt-3'}>تایید رزرو</button>
        </div>
    )
}