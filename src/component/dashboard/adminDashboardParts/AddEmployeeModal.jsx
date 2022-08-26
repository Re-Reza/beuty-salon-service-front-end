import React, { useState } from 'react';

import Modal from 'react-modal';

import styles from "../../../../public/styles/dashboard.module.css";

const AddEmployeeModal = ( props ) => {

    const { isOpen, closeModal } = props;

    const customStyles = {
        overlay:{
            backgroundColor:"rgba(0,0,0, .5)"
        },
        content:{
            width: "60%",
            display:"flex",
            margin:"auto",
            padding:"0",
            borderRadius: "8px",
        }
    };

    const submitNewEmployee = (e) => {
        //add new employee
        //must validate inputs first
        e.preventDefault();
    }

    Modal.setAppElement("#__next");

    return (
        <>
            <Modal            
                isOpen={isOpen}
                style={customStyles}>
                    <div className={styles["addEmModalForm-container"]}>
                        
                        <div onClick={closeModal} className="align-self-start me-3 mt-2 position-absolute top-0" role="button">
                            <i className="fa text-danger fs-3 fa-times" aria-hidden="true"></i>
                        </div>
                    
                        <div className='w-100 '>
                            <form onSubmit={submitNewEmployee} className={styles["addEmModalForm"]} action="#">

                                <div className='d-flex flex-column mb-4'>
                                    <label htmlFor="Employeename" className='mb-2'>نام </label>
                                    <input className={styles['Employee-info-input']+" "+styles['addEmployeeInput']} type="text" id="Employeename"/>
                                </div>
                                
                                <div className='d-flex flex-column mb-4'>
                                    <label htmlFor="EmployeeLastName" className='mb-2'>نام خانوادگی</label>
                                    <input className={styles['Employee-info-input']+" "+styles['addEmployeeInput']} type="text" id="EmployeeLastName"/>
                                </div>
                                
                                <div className='d-flex flex-column mb-4'>
                                    <label htmlFor="EmployeePhone" className='mb-2'>شماره موبایل</label>
                                    <input className={styles['Employee-info-input']+" "+styles['addEmployeeInput']} type="tel" id="EmployeePhone"/>
                                </div>

                                <div>
                                    <label className="mb-3">خدمات</label>
                                    <div className='d-flex'>

                                        <div className="form-check ms-4">
                                            <input type="checkbox" className="form-check-input" id="hairservice"/>
                                            <label className="form-check-label" htmlFor="hairservice">مو</label>
                                        </div>

                                        <div className="form-check ms-4">
                                            <input type="checkbox" className="form-check-input" id="skinservice"/>
                                            <label className="form-check-label" htmlFor="skinservice">پوست</label>
                                        </div>

                                        <div className="form-check ms-4">
                                            <input type="checkbox" className="form-check-input" id="nailservice"/>
                                            <label className="form-check-label" htmlFor="nailservice">ناخن</label>
                                        </div>

                                        <div className="form-check ms-4">
                                            <input type="checkbox" className="form-check-input" id="makeupservice"/>
                                            <label className="form-check-label" htmlFor="makeupservice">میکاپ</label>
                                        </div>
                                              
                                    </div>              
                                </div>

                                <div className='d-flex justify-content-end mt-4'>
                                    <button className='btn btn-success' type='submit'>تایید اطلاعات</button>
                                </div>

                            </form>

                        </div>
                    </div>
            </Modal>
        </>
    )
}

export default AddEmployeeModal;
