import React, { useState, useEffect } from 'react';

import Modal from 'react-modal';
import { useMediaQuery } from "react-responsive";
import { provideServices, addNewEmployee } from "../../../dataService/aminProvider";
import { useFormik } from "formik";
import { object, string, ref } from "yup";
import styles from "../../../../public/styles/dashboard.module.css";
import Toast from "../../elements/Toast";

const AddEmployeeModal = ( props ) => {

    const [ state, setState ] = useState({
        allServices :[],
        selectedServices : [],
        showToast : false,
        error : false,
        msg : null
    });

    const { isOpen, closeModal } = props;

    const isTablet = useMediaQuery ({
        query : '(max-width: 750px) '
    });

    const customStyles = {
        overlay:{
            backgroundColor:"rgba(0,0,0, .5)"
        },
        content:{
            width: isTablet? "80%" : "70%",
            display:"flex",
            margin:"auto",
            padding:"0",
            borderRadius: "8px",
        }
    };

    const schema = object().shape({
    fName : string().required("نام الزامی است").min(2, "نام باید حداقل شامل دو کاراکتر باشد").max(100, "نام بیش از حد مجاز").trim(),
    lName : string().required("نام خانوادگی الزامی است").min(2, "نام خانوادگی باید حداقل شامل دو کاراکتر باشد").max(100, "نام خانوادگی بیش از حد مجاز").trim(), 
    phone :  string().required("شماره موبایل الزامی است"), 
        // nationalId :  string().required("کد ملی الزامی است")
    });

    function hideToast(){
        setTimeout(()=>{
            
            setState({
                ...state,
                showToast : false
            });

        }, 8000);
    }

    const formik = useFormik({
        initialValues : {
            fName: "",
            lName: "", 
            phone: "",
            nationalId: "",
        },
        validationSchema:schema,
        onSubmit : values => {
            
            addNewEmployee({...values, services:state.selectedServices }).then( response =>{
                setState({
                    ...state,
                    showToast : true,
                    error : false,
                    msg : "ثبت نام با موفقیت انجام شد رمز عبور موقت کارمند : "+response.data.result.password
                });
    
                props.setReRequest()
                hideToast();
            }).catch( err => {
        
                setState({
                    ...state,
                    showToast : true,
                    error : true,
                    msg :"با این شماره موبایل قبلا ثبت نام شده"
                });
                hideToast();
            })
        }
      });

    useEffect(()=>{
        provideServices().then(response=>{
            console.log(response.data.result)
            setState({
                ...state,
                allServices  : response.data.result
            })
        }).catch(err=> console.log(err) );
    }, []);

    function checkSerice(serviceId){
 
        const foundService = state.selectedServices.find( item => item.id == serviceId );

        if(foundService){
            state.selectedServices = state.selectedServices.filter( item => item.id != foundService.id)
        }
        else { 
            const newService = state.allServices.find( item => item.id == serviceId );
            state.selectedServices = [
                ...state.selectedServices,
                newService,
            ]; 
        }

        setState({
            ...state
        });
    }

    const { fName, lName, phone }  = formik.errors;

    Modal.setAppElement("#__next");

    return (
        <>
            {
                state.showToast ? 
                <Toast toatData={ { error: state.error, message : state.msg } }/>
                :<></>
            }
            <Modal            
                isOpen={isOpen}
                style={customStyles}>
                    <div className={styles["addEmModalForm-container"]}>
                        
                        <div onClick={closeModal} className="align-self-start me-3 mt-2 position-absolute top-0" role="button">
                            <i className="fa text-danger fs-3 fa-times" aria-hidden="true"></i>
                        </div>
                    
                        <div className={'w-100 '+ styles['addEmModalForm-formContainer']}>
                            <form onSubmit={formik.handleSubmit} className={styles["addEmModalForm"]} action="#">

                                <div className='d-flex flex-column mb-4'>
                                    <label htmlFor="Employeename" className='mb-2'>نام </label>
                                    <input name="fName" onChange={formik.handleChange} className={styles['Employee-info-input']+" "+styles['addEmployeeInput']} type="text" id="Employeename"/>
                                    <small className={'text-danger mt-1'}>{fName}</small>
                                </div>
                                
                                <div className='d-flex flex-column mb-4'>
                                    <label htmlFor="EmployeeLastName" className='mb-2'>نام خانوادگی</label>
                                    <input name="lName" onChange={formik.handleChange} className={styles['Employee-info-input']+" "+styles['addEmployeeInput']} type="text" id="EmployeeLastName"/>
                                    <small className={'text-danger mt-1'}>{lName}</small>
                                </div>
                                
                                <div className='d-flex flex-column mb-4'>
                                    <label htmlFor="EmployeePhone" className='mb-2'>شماره موبایل</label>
                                    <input name="phone" onChange={formik.handleChange} className={styles['Employee-info-input']+" "+styles['addEmployeeInput']} type="tel" id="EmployeePhone"/>
                                    <small className={'text-danger mt-1'}>{phone}</small>
                                </div>

                                <div className='d-flex flex-column mb-4'>
                                    <label htmlFor="EmployeePhone" className='mb-2'>کدملی</label>
                                    <input name="nationalId" onChange={formik.handleChange} className={styles['Employee-info-input']+" "+styles['addEmployeeInput']} type="text" id="EmployeeId"/>
                            
                                </div>

                                <div>
                                    <label className="mb-3">خدمات</label>
                                    <div className={styles['services-container']}>
                                        {
                                            state.allServices.map((service, index) => {
                                                return <span className='ms-5' key={index}>
                                                <label arial-role="button "className='ms-2' htmlFor={'service'+index}>{service.serviceTitle}</label>
                                                <input onChange={()=>checkSerice(service.id)} className='form-check-input' value={service.id} id={'service'+index} type="checkbox"/>
                                            </span>
                                            })
                                        }
                                    </div>
                                               
                                </div>

                                <div className='d-flex justify-content-end mt-4'>
                                    <button className={'btn btn-success '+styles['font-responsive']} type='submit'>تایید اطلاعات</button>
                                </div>

                            </form>

                        </div>
                    </div>
            </Modal>
        </>
    )
}

export default AddEmployeeModal;
