import React, { useState } from 'react'

import EmployeeResItem from './EmployeeResItem';

import styles from "../../../../public/styles/dashboard.module.css";

export const EmployeeCustomerReserve = () => {
  
    const [ customers, setCustomers] = useState( 
        [
            {customername:"aa", service:"مو", date: {year:1401, month: 5, day: 27}, status: false},
            {customername:"aa", service:"مو", date: {year:1401, month: 12, day: 19}, status: true},
            {customername:"aa", service:"مو", date: {year:1401, month: 8, day: 18},  status: false},
            {customername:"aa", service:"مو", date: {year:1401, month: 7, day: 20}, status: true},
            {customername:"aa", service:"مو", date: {year:1401, month: 6, day: 15}, status: false},
            {customername:"aa", service:"مو", date: {year:1401, month: 4, day: 12},status: true}
        ]
    );

    
    const [ currentReserve, setCurrentReserve ] = useState (true);

    function toggleReserve(value){
        setCurrentReserve(value);
    }

    
    return (
        <div className={ styles["dashboard-reserveList"] }>
            
            <div className={styles["dashboard-reserveBtnContainer"]}>
                <button onClick={ ()=>{toggleReserve(false)} } className={ !currentReserve ? styles["reserve-btn-category"]+" "+styles['selected-reserve']: styles["reserve-btn-category"]} >تاریخچه</button>
                <button onClick={ ()=>{toggleReserve(true)} } className={ currentReserve ? styles["reserve-btn-category"]+" "+styles['selected-reserve']: styles["reserve-btn-category"]}>مشتریان هفته جاری</button>
            </div>
            
            <div className="table-responsive-xl">   
                
            {
                currentReserve ? 

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ردیف</th>
                            <th scope="col">خدمت</th>
                            <th scope="col">نام مشتری</th>
                            <th scope="col">تاریخ انتخابی مشتری</th>
                            <th scope="col">تغییر تاریخ</th>
                        </tr>
                    </thead>

                    <tbody>
                    {
                        customers.map((item, index) => <EmployeeResItem history={false} key={index} item = {{...item ,  row: ++index }} /> )
                    }
                    </tbody>

                </table>

                :
                
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ردیف</th>
                            <th scope="col">خدمت</th>
                            <th scope="col">کارمند</th>
                            <th scope="col">تاریخ</th>
                            <th>وضعیت</th>
                        </tr>
                    </thead>

                    <tbody>
                    {
                        customers.map((item, index) => <EmployeeResItem history={true} key={index} item = {{...item ,  row: ++index }} /> )
                    }
                    </tbody>

                </table>

            }

            </div>
    
        </div>
    )
}
