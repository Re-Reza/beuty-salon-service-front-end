import React, { useState, useEffect } from 'react';

import EmployeeItem from "./EmployeeItem";
import AddEmployeeModal from './AddEmployeeModal';

import { provideEmployeeList } from "../../../dataService/aminProvider";

import styles from "../../../../public/styles/dashboard.module.css";

export const EmployeesList = () => {
    
    const [ state, setState ] = useState({
        employeeList:[],
        loading: true
    });

    useEffect(()=> {

        provideEmployeeList().then( response => {
            console.log(response);
            setState({
                ...state,
                loading : false,
                employeeList : response.data.result
            });

        }).catch(err => console.log(err));

    }, []);

    const [ addEmModal, setAddEmModal ] = useState(false);
    console.log(state);
    return (
        state.loading?
        <div>loading</div>:
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
                                state.employeeList.map( (employee, index) => <EmployeeItem key={index} item={{...employee, row: index+1}} /> )
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
