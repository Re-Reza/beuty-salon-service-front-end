import React, { useState, useEffect, useContext } from 'react';

import { useFormik } from "formik";
import contextStore from '../EmployeeListContext';
import { provideServices } from "../../../../dataService/aminProvider";
import styles from "../../../../../public/styles/dashboard.module.css";
// import { object, string, ref } from "yup";
import { changeEmployeeInfo } from "../../../../dataService/aminProvider";
import Toast from "../../../elements/Toast";

const EmInfo = (props) =>{

    const { fName, lName,services, phone, nationalId, perosnId} = props.info;

    const[ chageInfoState, setChangeInfoState ] = useState({
        allServices: [],
        selectedServices : services,
        showToast : false,
        error : false,
        msg : null
    });

    const { dispatch } = useContext(contextStore);
    const [ mode, setMode ] = useState( false );

    useEffect(()=>{
        provideServices().then(response=>{
            setChangeInfoState({
                ...chageInfoState,
                allServices  : response.data.result
            })
        }).catch(err=> console.log(err) );
    }, []);


    const formik = useFormik({
        initialValues : {
            fName: fName,
            lName: lName, 
            phone: phone,
            nationalId: nationalId,
        },
        // validationSchema:schema,
        onSubmit : values => {
            changeEmployeeInfo({...values, newServices : chageInfoState.selectedServices}, perosnId).then( response => {
                console.log(response);
                setChangeInfoState({
                    ...chageInfoState,
                    error : false,
                    msg : "تغییرات با موفقیت اعمال شد",
                    showToast : true,
                });
                dispatch({
                    type : "setReRequest"
                });

                hideToast();

            }).catch( err => {
                setChangeInfoState({
                    ...chageInfoState,
                    error : true,
                    msg : "خطایی رخ داده است",
                    showToast : true,
                });
                hideToast();

            });
        }
      });

    function hideToast(){
        setTimeout(()=>{
            setChangeInfoState({
                ...chageInfoState,
                showToast : false
            });
        }, 2000);
    }

    const changeInfoMode = () => {
        setMode(true);
    }

    
    function isChecked(id){
        const foundItem = chageInfoState.selectedServices.find(item => item.id == id);
        return foundItem? true : false;
    }
    
    function checkSerice(serviceId){
 
        const foundService = chageInfoState.selectedServices.find( item => item.id == serviceId );

        if(foundService){
            chageInfoState.selectedServices = chageInfoState.selectedServices.filter( item => item.id != foundService.id)
        }
        else { 
            const newService = chageInfoState.allServices.find( item => item.id == serviceId );
            chageInfoState.selectedServices = [
                ...chageInfoState.selectedServices,
                newService,
            ]; 
        }

        setChangeInfoState({
            ...chageInfoState
        });
    }

    return(
        <>
        {
            chageInfoState.showToast ? 
            
                <Toast toatData={ { error : chageInfoState.error, message : chageInfoState.msg } }/> : <></> 
        }
            <div className={styles['employeeModal-InfoPart']}>
                <form action='#'>
                    <div className='d-flex flex-column mb-4'>
                        <label htmlFor="EmployeeName" className='mb-2'>نام</label>
                        <input defaultValue={fName} onChange={formik.handleChange} id="fName" name="fName" className={styles['Employee-info-input']} type="text" readOnly={mode ? false : true} />
                    </div>

                    <div className='d-flex flex-column mb-4'>
                        <label htmlFor="EmployeeName" className='mb-2'> نام خانوادگی</label>
                        <input onChange={formik.handleChange} defaultValue={lName} name="lName" className={styles['Employee-info-input']} type="text" id="EmployeeName" readOnly={mode ? false : true} />
                    </div>

                    <div className='d-flex flex-column mb-4'>
                        <label htmlFor="EmployeePhone" className='mb-2'>شماره موبایل</label>
                        <input onChange={formik.handleChange} name="phone" defaultValue={phone} className={styles['Employee-info-input']} type="tel" id="EmployeePhone" readOnly={mode ? false : true} />
                    </div>

                    <div className='d-flex flex-column mb-4'>
                        <label htmlFor="EmployeePhone" className='mb-2'>کدملی</label>
                        <input onChange={formik.handleChange} name="nationalId" defaultValue={nationalId} className={styles['Employee-info-input']} type="tel" id="EmployeePhone" readOnly={chageInfoState ? false : true} />
                    </div>

                    {
                        mode ?
                        <div className='d-flex flex-column mb-4'>
                            <label className='mb-3'>خدمات</label>
                            <div className={styles['services-container']}>
                                {
                                    chageInfoState.allServices.map((service, index) => {
                                        const check = isChecked(service.id);
                                        return <span className='ms-5' key={index}>
                                        <label arial-role="button "className='ms-2' htmlFor={'service'+index}>{service.serviceTitle}</label>
                                        <input onChange={()=>checkSerice(service.id)} checked={check} className='form-check-input' value={service.id} id={'service'+index} type="checkbox"/>
                                    </span>
                                    })
                                }
                            </div>
                        </div>:
                        <></>
                    }

                    <div className="d-flex justify-content-end mt-3">
                    {
                        mode ? <button  type='submit' onClick={formik.handleSubmit} className='btn btn-success'>اعمال تغییرات</button>
                        :<div role="button" onClick={changeInfoMode} className={'btn btn-warning text-white '+styles["font-responsive"]} >تغییر اطلاعات</div>
                    }
                    </div>
                </form>
            </div>
        </>
        
        
    )
}

export default EmInfo;