import React, { useState, useEffect } from 'react'

import EmployeeResItem from './EmployeeResItem';
import { provideCustomerReserves } from "../../../dataService/employeeProvider";
import ReserveSearch from ".././adminDashboardParts/RserveListParts/ReserveSearch";
import Loading from "../../elements/Loading";
import styles from "../../../../public/styles/dashboard.module.css";

export const EmployeeCustomerReserve = () => {
  
    const [ customersList, setcustomersList] = useState( {
        list : [],
        loading : true,
        start : null,
        request : false
    });

    const [ currentReserve, setCurrentReserve ] = useState (true);

    useEffect( () => {

        provideCustomerReserves().then( response =>{
            setcustomersList({
                ...customersList,
                list : response.data.result,
                loading : false,
                start : response.data.start,
            });
        }).catch( err => {
            console.log(err);
        })
    }, [ customersList.request, currentReserve ]);
    


    function setRequest (){
        setcustomersList({
            ...customersList,
            request : !customersList.request
        });
    }

    function toggleReserve(value){
        setCurrentReserve(value);
    }

    function setNewList(newList){
        setcustomersList({
            ...customersList,
            list : newList
        });
    }

    let filteredList;
    if(currentReserve)
        filteredList = customersList.list.filter( item => item.status == 'waiting' || item.status == 'finalized');   
    else 
        filteredList = customersList.list.filter( item => item.status == 'done' || item.status == 'cancelled');
    
    return (
        customersList.loading? 
         <div className="w-100 pt-5 d-flex justify-content-center">
            <Loading />
            </div> :

            <div>

                <ReserveSearch setNewList={setNewList} currentReserve={currentReserve} start={customersList.start} end={customersList.end}/>
                
                <div className={ styles["dashboard-reserveList"] }>
                
                    <div className={styles["dashboard-reserveBtnContainer"]}>
                        <button onClick={ ()=>{toggleReserve(false)} } className={ !currentReserve ? styles["reserve-btn-category"]+" "+styles['selected-reserve']: styles["reserve-btn-category"]} >??????????????</button>
                        <button onClick={ ()=>{toggleReserve(true)} } className={ currentReserve ? styles["reserve-btn-category"]+" "+styles['selected-reserve']: styles["reserve-btn-category"]}>?????????????? ???????? ????????</button>
                    </div>
                
                    <div className="table-responsive-xl">   
                        
                    {
                        currentReserve ? 
        
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">????????</th>
                                    <th scope="col">????????</th>
                                    <th scope="col">?????? ??????????</th>
                                    <th scope="col">?????????? ?????????????? ??????????</th>
                                    <th scope="col">?????????? ??????????</th>
                                    <th>?????? ??????????????</th>
                                    <th scope='col' style={{minWidth:"100px"}}>?????????? ?????????? ????????</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
        
                            <tbody>
                            {
                                filteredList.map((item, index) => <EmployeeResItem setRequest={setRequest} start={customersList.start} end={customersList.end} history={false} key={index} item = {{...item ,  row: ++index }} /> )
                            }
                            </tbody>
        
                        </table>
        
                        :
                        
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">????????</th>
                                    <th scope="col">????????</th>
                                    <th scope="col">??????????</th>
                                    <th scope="col">??????????</th>
                                    <th>??????????</th>
                                </tr>
                            </thead>
        
                            <tbody>
                            {
                                filteredList.map((item, index) => <EmployeeResItem history={true} key={index} item = {{...item ,  row: ++index }} /> )
                            }
                            </tbody>
        
                        </table>
        
                    }
        
                    </div>
    
                </div>
            </div>
    )
}
