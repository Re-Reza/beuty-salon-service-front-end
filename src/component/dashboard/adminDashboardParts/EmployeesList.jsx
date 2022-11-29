import React, { useState, useEffect, useRef, useReducer } from 'react';

import EmployeeItem from "./EmployeeItem";
import AddEmployeeModal from './AddEmployeeModal';
import contextStore from './EmployeeListContext';
import { provideEmployeeList, searchEmployee, provideEmployeeListForPdf } from "../../../dataService/aminProvider";
import Loading from "../../elements/Loading";
import styles from "../../../../public/styles/dashboard.module.css";

import EmployeeListPdf from './EmployeeListPdf';
import { PDFDownloadLink } from "@react-pdf/renderer"

export const EmployeesList = () => {
    
    const [ state, setState ] = useState({
        employeeList:[],
        loading: true,
        reRequset : false,
        employeeListPdf : [],
        requestPdfData : false
    });

    const searchInput = useRef(null);

    const [ ctxState, dispatch ] = useReducer( function (state, {type, payload}) {
        switch( type ){
            case "setReRequest" : 
                return {
                    ...state,
                    reRequset  : !state.reRequset,
                };

            default : 
                return state;
        }
    }, {
        reRequset : false
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

    }, [state.reRequset, ctxState.reRequset]);


    useEffect(() => {

        provideEmployeeListForPdf().then( response => {
            
            setState({
                ...state, 
                employeeListPdf : response.data.result
            });

        }).catch( err => console.log(err) );

    }, [state.requestPdfData]);

    const [ addEmModal, setAddEmModal ] = useState(false);

    function setReRequest () {
        setState({
            ...state,
            reRequset : !state.reRequset
        })
    }
    
    function submitSearch(){
        const data = searchInput.current.value;
        searchEmployee(data).then( response => {
            setState({
                ...state,
                employeeList : response.data.result
            })
        }).catch( err => {});
    }


    return (
        state.loading?
        <div className="w-100 pt-5 d-flex justify-content-center">
            <Loading />
        </div> :
        <contextStore.Provider value={ { state : ctxState, dispatch } }>
            <>
                <div className={'d-flex flex-column '+styles["employeeList-container"]}>
                    <div className='align-self-end d-flex mb-4 w-100 justify-content-between'>

                        <div className='position-relative'>
                            <input ref={searchInput} id={styles["EmployeeModalProfile-History-search-input"]} type="text" placeholder="نام یا شماره موبایل کارمند مورد نظر"/>
                            <span onClick={submitSearch} className={styles["EmployeeModalProfile-searchIcon"]}><i className="fa fa-search" aria-hidden="true"></i></span>
                        </div>

                        <div className='d-flex align-items-center'> 

                            <button onClick={ ()=> { setAddEmModal(true)} } className={'d-flex justify-content-center btn btn-success '+styles["font-responsive"]}>افزودن کارمند جدید<i className="align-self-center me-2 fa fa-plus" aria-hidden="true"></i></button>
                            
                            <div className='me-3 '>
                            {
                                state.employeeListPdf.length > 0 ? 
                                
                                <PDFDownloadLink  document={<EmployeeListPdf employeeList={state.employeeListPdf}/>} fileName="employeeList">
                                    {({loading}) => loading ? <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>  : <div className='btn text-white btn-warning'>دریافت فایل <i className="fa me-1 fa-file-pdf-o" aria-hidden="true"></i></div>}
                                </PDFDownloadLink>

                                : <button className='btn text-white btn-warning' type='button' onClick={()=> setState({...state, requestPdfData: true})}>دانلود لیست کارمندان<i className="fa me-1 fa-download" aria-hidden="true"></i></button>
                            }
                            </div>

                        </div>
                    
                    </div>

                    <div className={styles["employeeLiat-container"] }>
                        <div className="table-responsive">
                            <table className="table">
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
        </contextStore.Provider>
    )
}
