import React, { useState, useRef } from 'react';

import Accordion from 'react-bootstrap/Accordion';
import ServiceItem from "./ServiceItem";
import styles from "../../../../public/styles/dashboard.module.css";
import { removeService } from "../../../dataService/aminProvider";
import {  provideCategoriesServices, addNewCategory  } from "../../../dataService/aminProvider";


function CategoryItem(props){

    const { id, categoryTitle, services } = props.item;

    const [ state, setState ] = useState({
        services : services
    });

    const inputRef = useRef( null );

    function deleteService(id, idServiceDelete){
        removeService(id, idServiceDelete).then(response => {
            const filteredItems = state.services.filter( item => item.id != id );
            setState({
                ...state,
                services: filteredItems
            });

        }).catch( err => console.log(err) );
    }

    const addNewService = () => {
        const inputValue = inputRef.current.value;
        if(inputValue.trim() != "" ){
            const data = { 
                serviceCategory : {
                    id : id,
                    categoryTitle
                },
                service : inputValue
            }
       
            addNewCategory(data).then( response => {
                setState({
                    ...state,
                    services : [
                        ...state.services,
                        response.data.result
                    ]
                });
                inputRef.current.value ="";
            }).catch( err => console.log(err) );
        }
    }

    return (
        <li>
        
            <Accordion.Item eventKey={props.eKey} >
                
                <Accordion.Header>
                    {categoryTitle}
                    <span>
                        {/* <i title="افزودن سرویس" onClick={()=>{alert("hi")}} className="fa fa-plus-circle text-success fs-5 ms-2" aria-hidden="true"></i> */}
                        <i className="fa fa-angle-down ms-2" aria-hidden="true"></i> 
                        <i title="حذف دسته بندی" onClick={()=> {props.removeCategory(id)} } className="fa text-danger fa-trash-o fs-5" aria-hidden="true"></i>
                    </span>
                </Accordion.Header>

                <Accordion.Body>

                <div className='mb-3'>
                    <input ref={inputRef} type="text" className={ styles['change-info-input']+" "+styles['addServiceInput'] } placeholder="خدمت"/>
                    <button onClick={addNewService}className='btn me-2 btn-success'><i className="fa fa-plus" aria-hidden="true"></i></button>
                </div>

                <div className={styles['services-item-container']}>
                {
                    state.services.map( (item, index) => <ServiceItem item={item} key={index} index={index}/> )
                }
                </div>

                </Accordion.Body>
            </Accordion.Item>

        </li>
    )
}

export default CategoryItem;
