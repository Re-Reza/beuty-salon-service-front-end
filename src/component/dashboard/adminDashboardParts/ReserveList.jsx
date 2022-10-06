import React, { useState, useEffect } from 'react'

import EmployeeResItem from './ReseveItem';
import styles from "../../../../public/styles/dashboard.module.css";
import { provideReserveList } from "../../../dataService/aminProvider";

export const ReserveList = () => {
  
    const [ customersList, setcustomersList] = useState( {
        list : [],
        loading : true,
        start : null,
        end : null
    });
    
    const [ currentReserve, setCurrentReserve ] = useState (true);

    useEffect( () => {
        const statusCodition = currentReserve ?  ["waiting", "finalized" ] : ["cancelled", "done"]
        provideReserveList(statusCodition).then( response =>{
            console.log(response);
            setcustomersList({
                ...customersList,
                list : response.data.result,
                loading : false,
                start : response.data.start,
                end : response.data.end
            });
        }).catch( err => {
            console.log(err);
        })
    }, [currentReserve]);
    

    function toggleReserve(value){
        setCurrentReserve(value);
    }

    return (
        customersList.loading? 
            <div>loading</div>:

            <div className={ styles["dashboard-reserveList"] }>
                
            <div className={styles["dashboard-reserveBtnContainer"]}>
                <button onClick={ ()=>{toggleReserve(false)} } className={ !currentReserve ? styles["reserve-btn-category"]+" "+styles['selected-reserve']: styles["reserve-btn-category"]} >تاریخچه</button>
                <button onClick={ ()=>{toggleReserve(true)} } className={ currentReserve ? styles["reserve-btn-category"]+" "+styles['selected-reserve']: styles["reserve-btn-category"]}>مشتریان هفته جاری</button>
            </div>
            
            <div className="table-responsive-xl">   
                
            {
                currentReserve ? 

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ردیف</th>
                            <th scope="col">خدمت</th>
                            <th scope="col">مشتری</th>
                            <th scope="col">تاریخ انتخابی مشتری</th>
                            <th scope="col">کارمند</th>
                            <th scope="col">تغییر تاریخ</th>
                            <th scope="col">تاریخ نهایی</th>
                            <th scope='col' style={{minWidth:"100px"}}>تغییر وضعیت رزرو</th>
                            <th scope='col'></th>
                        </tr>
                    </thead>

                    <tbody>
                    {
                        customersList.list.map((item, index) => <EmployeeResItem start={customersList.start} end={customersList.end} history={false} key={index} item = {{...item ,  row: ++index }} /> )
                    }
                    </tbody>

                </table>

                :
                
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ردیف</th>
                            <th scope="col">خدمت</th>
                            <th scope="col">مشتری</th>
                            <th scope="col">تاریخ</th>
                            <th scope="col">کارمند</th>
                            <th scope='col'>وضعیت</th>
                            <th scope='col'></th>
                        </tr>
                    </thead>

                    <tbody>
                    {
                        customersList.list.map((item, index) => <EmployeeResItem history={true} key={index} item = {{...item ,  row: ++index }} /> )
                    }
                    </tbody>

                </table>

            }

            </div>

        </div>
    )
}
