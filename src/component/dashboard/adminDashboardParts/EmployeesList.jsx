import React, { useState } from 'react';

import EmployeeItem from "./EmployeeItem";
import AddEmployeeModal from './AddEmployeeModal';

import styles from "../../../../public/styles/dashboard.module.css";

export const EmployeesList = () => {
    
    const [ employeeList, setEmployeeList ] = useState([
        {name: "e1", service:"پوست", phone: "09000" },
        {name: "e2", service:"مو", phone: "09000" },
        {name: "e3", service:"میکاپ", phone: "09000" },
        {name: "e4", service:"پوست", phone: "09000" },
        {name: "e5", service:"ناخن", phone: "09000" },
        {name: "e6", service:"مو", phone: "09000" },
        {name: "e7", service:"پوست", phone: "09000" },
        {name: "e8", service:"مو", phone: "09000" },
        {name: "e9", service:"میکاپ", phone: "09000" },
        {name: "e10", service:"پوست", phone: "09000" },
        {name: "e11", service:"میکاپ", phone: "09000" },
        {name: "e12", service:"پوست", phone: "09000" },
        {name: "e13", service:"مو", phone: "09000" }

    ]);

    const [ addEmModal, setAddEmModal ] = useState(false);
    
    return (
        <>
            <div className={'d-flex flex-column '+styles["employeeList-container"]}>
                <div className='align-self-end mb-4'>
                    <button onClick={ ()=> { setAddEmModal(true)} } className={'d-flex justify-content-center btn btn-success '+styles["font-responsive"]}>افزودن کارمند جدید<i className="align-self-center me-2 fa fa-plus" aria-hidden="true"></i></button>
                </div>

                <div className={styles["employeeLiat-container"] }>
                    <div className={"table-responsive"}>
                        <table className={"table"}>
                            <thead className={"bg-dark text-white "+styles['font-responsive']} >
                                <tr>
                                    <th>ردیف</th>
                                    <th>نام کارمند</th>
                                    <th>خدمت</th>
                                    <td>شماره موبایل</td>
                                    <th></th>
                                </tr>
                            </thead>
                            
                            <tbody>
                            {
                                employeeList.map( (employee, index) => <EmployeeItem key={index} item={{...employee, row: index+1}} /> )
                            }
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
            {
                addEmModal ?
                <AddEmployeeModal isOpen={addEmModal} closeModal={ ()=>{setAddEmModal(false)} }/> :
                <></>
            }
        
        </>
    )
}
