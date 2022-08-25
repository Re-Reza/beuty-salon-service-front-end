import React, { useState } from 'react';

import EmployeeItem from "./EmployeeItem";

import  styles from "../../../../public/styles/dashboard.module.css";

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
    
    return (
        <div className={styles["employeeLiat-container"] }>
            
            <div className="table-responsive">
                <table className="table">
                    <thead className="bg-dark text-white" >
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
  )
}
