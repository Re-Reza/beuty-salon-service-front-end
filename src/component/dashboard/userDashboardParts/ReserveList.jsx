import React, { useState, useEffect } from "react";

import ReserveItem from "./ReserveItem";
import { provideReserveList } from "../../../dataService/userDashboardProvider";

import styles from "../../../../public/styles/dashboard.module.css";

export function ReseveList(){

    const [ state, setState ] = useState ({
        reserveList : [],
        loading : true,
        currentReserve : true
    });

    const { currentReserve, reserveList } = state;
    //if error happed show toast error message
    useEffect(() => { 

        provideReserveList(currentReserve ? 0 : 1).then( response => {
            console.log(response);
            setState({
                ...state,
                loading:false,
                reserveList:response.data.result
            })
        }).catch( err => console.log(err));

    }, []);


    function toggleReserve(value){
        setState({
            ...state,
            currentReserve : value
        });
    }


    return(
        state.loading?
        <div>loading...</div>
        :
        <div className={styles["dashboard-reserveList"]}>
            <div className={styles["dashboard-reserveBtnContainer"]}>
                <button onClick={ ()=>{toggleReserve(false)} } className={ !currentReserve ? styles["reserve-btn-category"]+" "+styles['selected-reserve']: styles["reserve-btn-category"]} >تاریخچه </button>
                <button onClick={()=>{toggleReserve(true)} } className={ currentReserve ? styles["reserve-btn-category"]+" "+styles['selected-reserve']: styles["reserve-btn-category"]}>رزرو های جاری</button>
            </div>
            
            <div className="table-responsive-xl">   
                
            {
                currentReserve ? 

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ردیف</th>
                            <th scope="col">خدمت</th>
                            <th scope="col">کارمند</th>
                            <th scope="col">تاریخ</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                    {
                        reserveList.map((item, index) => <ReserveItem  history={false} key={index} item = {item} row= {++index } /> )
                    }
                    </tbody>

                </table>

                :
                
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ردیف</th>
                            <th scope="col">خدمت</th>
                            <th scope="col">کارمند</th>
                            <th scope="col">تاریخ</th>
                            <th>وضعیت</th>
                        </tr>
                    </thead>

                    <tbody>
                    {
                        reserveList.map((item, index) => <ReserveItem history={true} key={index} item = {{...item ,  row: ++index }} /> )
                    }
                    </tbody>

                </table>

            }
            </div>

        </div>
    )
}