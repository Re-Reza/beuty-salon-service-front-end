import React, { useState, useEffect } from 'react';

import { useFormik } from "formik";
import { provideServices } from "../../../../dataService/aminProvider";
import styles from "../../../../../public/styles/dashboard.module.css";
import { object, string, ref } from "yup";
import { changeEmployeeInfo } from "../../../../dataService/aminProvider";

const EmInfo = (props) =>{

    const { fName, lName,services, phone, nationalId, perosnId} = props.info;

    const[ chageInfoState, setChangeInfoState ] = useState({
        changeMode: false,
        allServices: [],
        selectedServices : services
    });

    useEffect(()=>{
        provideServices().then(response=>{
            console.log(response.data.result)
            setChangeInfoState({
                ...chageInfoState,
                allServices  : response.data.result
            })
        }).catch(err=> console.log(err) );
    }, []);

    // const schema = object().shape({
    //     fName : string().required("نام الزامی است"),
    //     lName : string().required("نام خانوادگی الزامی است"),
    //     phone :  string().required("شماره موبایل الزامی است"), 
    //     nationalId :  string().required("کد ملی الزامی است")
    // });

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
            }).catch( err => {
                console.log(err);
            })
        }
      });

    const changeInfoMode = () => {
        setChangeInfoState({
            ...chageInfoState,
            changeMode : true
        });
    }
    // console.log(formik.errors);
    
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
        console.log(chageInfoState);
        setChangeInfoState({
            ...chageInfoState
        });
    }

    return(
        <div className={styles['employeeModal-InfoPart']}>
            <form onSubmit={formik.handleSubmit}>
                <div className='d-flex flex-column mb-4'>
                    <label htmlFor="EmployeeName" className='mb-2'>نام</label>
                    <input defaultValue={fName} onChange={formik.handleChange} id="fName" name="fName" className={styles['Employee-info-input']} type="text" readOnly={chageInfoState.changeMode ? false : true} />
                </div>

                <div className='d-flex flex-column mb-4'>
                    <label htmlFor="EmployeeName" className='mb-2'> نام خانوادگی</label>
                    <input onChange={formik.handleChange} defaultValue={lName} name="lName" className={styles['Employee-info-input']} type="text" id="EmployeeName" readOnly={chageInfoState.changeMode ? false : true} />
                </div>
    
                <div className='d-flex flex-column mb-4'>
                    <label htmlFor="EmployeePhone" className='mb-2'>شماره موبایل</label>
                    <input onChange={formik.handleChange} name="phone" defaultValue={phone} className={styles['Employee-info-input']} type="tel" id="EmployeePhone" readOnly={chageInfoState.changeMode ? false : true} />
                </div>

                <div className='d-flex flex-column mb-4'>
                    <label htmlFor="EmployeePhone" className='mb-2'>کدملی</label>
                    <input onChange={formik.handleChange} name="nationalId" defaultValue={nationalId} className={styles['Employee-info-input']} type="tel" id="EmployeePhone" readOnly={chageInfoState.changeMode ? false : true} />
                </div>

                {
                    chageInfoState.changeMode ?
                    <div className='d-flex flex-column mb-4'>
                        <label className='mb-3'>خدمات</label>
                        <div>
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
                    chageInfoState.changeMode ? <button onClick={formik.handleSubmit} type='submit' className='btn btn-success'>اعمال تغییرات</button>
                    :<button className={'btn btn-warning text-white '+styles["font-responsive"]} onClick={changeInfoMode }>تغییر اطلاعات</button>
                }
                </div>
            </form>
        </div>
        
    )
}

export default EmInfo;