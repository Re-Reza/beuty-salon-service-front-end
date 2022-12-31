import React, { useState } from "react";

import Toast from "../../elements/Toast";
import styles from "../../../../public/styles/dashboard.module.css";

import { editService } from "../../../dataService/aminProvider";

function ServiceItem(props){

    const { item, index } = props;

    const [ state, setState ] = useState({
        cost : item.cost,
        showToast : false,
        msg: null,
        error : false
    });

    function hideToast(){
        setTimeout(()=>{
            setState({
                showToast : false
            });
        }, 2000);
    }

    function setInputValue(event){
        setState({
            cost : event.target.value
        });
    }

    function editServieItem(){

        if( !isNaN(parseFloat(state.cost)) && item.cost != parseFloat(state.cost) )
        {
            editService(item.id, parseFloat(state.cost) ).then( response => {
                setState({
                    ...state,
                    showToast : true,
                    msg: "تغییرات با موفقیت اعمال شد",
                    error : false
                });
                hideToast();
            }).catch( err => {
                setState({
                    ...state,
                    showToast : true,
                    msg: "خطایی خ داده است",
                    error : true
                });
                hideToast();
            });
        }
    }

    return (
        <>
        {
            state.showToast ? <Toast toatData={ { message: state.msg, error:state.error } }/> 
            : <></>
        }
            <div className={styles['service-item']}>
                <span className={styles["service-item-title"] }>
                {
                    item.serviceTitle
                }
                    <i title='حذف' role="button" onClick={()=>{deleteService(item.id, 1)}} className="fa text-danger fa-trash-o" aria-hidden="true"></i>
                </span>
                <div>
                    <label className='mb-2' htmlFor={`costInput${index}`}> قیمت خدمت:</label>
                    <div className='d-flex'>                                
                        <input onChange={setInputValue} defaultValue={item.cost ? parseFloat(item.cost).toLocaleString() : "تعیین نشده"} id={`costInput${index}`} className={styles["service-item-costInput"]} type="text" />
                        <button onClick={editServieItem} title='تایید' type='button' className='d-flex align-items-center btn btn-success me-1'><i style={{fontSize : "14px"}}className="fa fa-check" aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default ServiceItem;
