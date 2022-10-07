import React, { useState, useEffect, useRef } from 'react';

import EmployeeItem from "./EmployeeItem";
import AddEmployeeModal from './AddEmployeeModal';

import { provideEmployeeList, searchEmployee } from "../../../dataService/aminProvider";

import styles from "../../../../public/styles/dashboard.module.css";

export const EmployeesList = () => {
    
    const [ state, setState ] = useState({
        employeeList:[],
        loading: true,
        reRequset : false
    });

    const searchInput = useRef(null);

    useEffect(()=> {

        provideEmployeeList().then( response => {
            console.log(response);
            setState({
                ...state,
                loading : false,
                employeeList : response.data.result
            });
            
        }).catch(err => console.log(err));

    }, [state.reRequset]);

    const [ addEmModal, setAddEmModal ] = useState(false);
    
    function setReRequest(){
        setState({
            ...state,
            reRequset: !state.reRequset
        });
    }

    function submitSearch(){
        const data = searchInput.current.value;
        console.log(data);
        searchEmployee(data).then( response => {
            setState({
                ...state,
                employeeList : response.data.result
            })
        }).catch( err => console.log(err) );
    }

    return (
        state.loading?
        <div>loading</div>:
        <>
            <div className={'d-flex flex-column '+styles["employeeList-container"]}>
                <div className='align-self-end d-flex mb-4 w-100 justify-content-between'>

                    <div className='position-relative'>
                        <input ref={searchInput} id={styles["EmployeeModalProfile-History-search-input"]} type="text" placeholder="نام یا شماره موبایل کارمند مورد نظر"/>
                        <span onClick={submitSearch} className={styles["EmployeeModalProfile-searchIcon"]}><i className="fa fa-search" aria-hidden="true"></i></span>
                    </div>

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
                <AddEmployeeModal setReRequest={setReRequest} isOpen={addEmModal} closeModal={ ()=>{setAddEmModal(false)} }/> :
                <></>
            }
        
        </>
    )
}
