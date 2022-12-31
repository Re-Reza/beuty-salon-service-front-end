import React, { useState, useEffect, useRef } from 'react';

import Accordion from 'react-bootstrap/Accordion';
import CategoryItem from './CategoryItem';
import Loading from "../../elements/Loading";
import styles from "../../../../public/styles/dashboard.module.css";
import {  provideCategoriesServices, addNewCategory, removeService } from "../../../dataService/aminProvider";

export function Service(){

    const [ state, setState ] = useState({
        loading : true,
        categoryList : [],
        categoryErr : null,  
        serviceErr : null 
    });

    const categoryRef = useRef(null);
    const serviceRef = useRef(null);

    useEffect(() => {

        provideCategoriesServices().then( response => {
            console.log(response);
            setState({
                loading : false,
                categoryList : response.data.result
            });
        }).catch(err =>{});

    }, []);
    
    function addNewCategoryService(){
        let serviceErr=null;
        let categoryErr=null;
        const service = serviceRef.current.value;
        const category = categoryRef.current.value;

        if(category.trim()==""){
            categoryErr =  "نام دسته بندی جدید نمی تواند خالی باشد"
        }
        if( service.trim()==""){
            serviceErr = "نام سرویس جدید نمی تواند خالی باشد"
        }
        if(category.trim()!="" && service.trim()!=""){
            const data = { 
                serviceCategory : {
                    id :null,
                    categoryTitle : category
                },
                service : service
            }
            addNewCategory(data).then( response=>{
                
                const { createdCategory,createdService } = response.data.result;
                setState({
                    ...state,
                    categoryList : [
                        ...state.categoryList,
                        {
                            ...createdCategory,
                            services : [createdService]
                        }
                    ],
                    serviceErr : null,
                    categoryErr : null
                });
                serviceRef.current.value = "";
                categoryRef.current.value = "";

            }).catch( err => { });
        }
        setState({
            ...state,
            serviceErr : serviceErr,
            categoryErr : categoryErr
        });
    }

    function removeCategory(id){
        removeService(id, 0).then( response => {
            const filteredItems = state.categoryList.filter( item => item.id != id );
            setState({
                ...state,
                categoryList : filteredItems
            });
        }).catch( err => {});
    }

    return (
        state.loading ? 
        <div className="w-100 pt-5 d-flex justify-content-center">
        <Loading />
        </div>  :

        <div className={styles['dashboard-reserveList']} >
            
            <div className={styles['newCategory-container']+ " flex-column flex-md-row align-items-md-start"}>

                <div className='d-flex flex-column ms-md-4 mb-3 mb-md-0'>
                    <label className='mb-2' htmlFor="category">دسته بندی جدید</label>
                    <input ref={categoryRef} className={styles["change-info-input"]} id="category" type="text" />
                    {
                        state.categoryErr ? <small className='text-danger'>{state.categoryErr}</small>:<></>
                    }
                </div>

                <div className='d-flex flex-column'>
                    <label className='mb-2' htmlFor="service">خدمت جدید</label>
                    <input ref={serviceRef} className={styles["change-info-input"]} id="service" type="text" />
                    {
                        state.serviceErr ? <small className='text-danger'>{state.serviceErr}</small>:<></>
                    }
                </div>

                <div className='d-flex justify-content-end me-md-4' style={ {marginTop:"2em"} }>
                    <button onClick={addNewCategoryService} type='button' className='d-flex align-items-center btn btn-success'>افزودن <i className="fa me-1 fa-plus" aria-hidden="true"></i></button>
                </div>
                
            </div>

            <div>
                <Accordion alwaysOpen>
                <ul className={styles['services-listContainer']} >
                {
                    state.categoryList.map( (item, index) => <CategoryItem removeCategory={removeCategory} eKey={index} item={item} key={index} />)
                }
                </ul>
                </Accordion>
            </div>
            
        </div>
    )
}

