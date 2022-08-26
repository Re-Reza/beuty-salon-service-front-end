import React, { useState } from 'react';

import styles from "../../../../../public/styles/dashboard.module.css";

const EmInfo = (props) =>{

    const { name, service, phone} = props.info;

    //اطلاعات فرم دربافت و ولیدیت شود ؟ یا فقط بررسی شود که هنگام ارسالاطلاعات خالی نباشد
    const[  chageInfoState, setChangeInfoState ] = useState({
        changeMode: false,
    });

    const changeInfoMode = () => {
        setChangeInfoState({
            ...chageInfoState,
            changeMode : true
        });
    }

    const sendNewInfo = () =>{ 
        //send new info and change mode to false
    }

    return(
        <div className={styles['employeeModal-InfoPart']}>
            <div className='d-flex flex-column mb-4'>
                <label htmlFor="EmployeeName" className='mb-2'>نام کارمند</label>
                <input defaultValue={name} className={styles['Employee-info-input']} type="text" id="EmployeeName" readOnly={chageInfoState.changeMode ? false : true} />
            </div>

            <div className='d-flex flex-column mb-4'>
                <label htmlFor="EmployeeService" className='mb-2'>خدمت</label>
                <input defaultValue={service} className={styles['Employee-info-input']} type="text" id="EmployeeService" readOnly={chageInfoState.changeMode ? false : true} />
            </div>
 
            <div className='d-flex flex-column mb-4'>
                <label htmlFor="EmployeePhone" className='mb-2'>شماره موبایل</label>
                <input defaultValue={phone} className={styles['Employee-info-input']} type="tel" id="EmployeePhone" readOnly={chageInfoState.changeMode ? false : true} />
            </div>

            <div className="d-flex justify-content-end mt-3">
            {
                chageInfoState.changeMode ? <button onClick={sendNewInfo} className='btn btn-success'>اعمال تغییرات</button>
                :<button className='btn btn-warning text-white' onClick={changeInfoMode }>تغییر اطلاعات</button>
            }
            </div>

        </div>
    )
}

export default EmInfo;