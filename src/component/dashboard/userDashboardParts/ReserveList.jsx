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

    useEffect(() => { 

        provideReserveList(currentReserve ? 0 : 1).then( response => {
            console.log(response);
            setState({
                ...state,
                loading:false,
                reserveList:response.data.result
            })
        }).catch( err => console.log(err));

    }, [currentReserve]);


    function toggleReserve(value){
        if(value != state.currentReserve){
            setState({
                ...state,
                currentReserve : value,
                loading : true
            });
        }
    }

    function deleteReserve(reserveId){
        const filteredReserves = state.reserveList.filter( item => item.id != reserveId );
        setState({
            ...state,
            reserveList : filteredReserves
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
                
                state.reserveList.length > 0 ?
                <table className={"table "+styles['table-font']}>
                    <thead>
                        <tr>
                            <th scope="col">ردیف</th>
                            <th scope="col">خدمت</th>
                            <th scope="col">کارمند</th>
                            <th scope="col">تاریخ انتخابی شما</th>
                            <th scope="col">تاریخ نهایی</th>
                            <th scope="col">وضعیت</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                    {
                        reserveList.map((item, index) => <ReserveItem deleteReserve={deleteReserve} history={false} key={index} item = {item} row= {++index } /> )
                    }
                    </tbody>

                </table>:
                <div className='text-yellow w-100 d-flex justify-content-center align-items-center h-100 fs-3'>آیتمی پیدا نشد <span className='notFoundItem'>:)</span></div>

                :
                state.reserveList.length > 0 ? 
                <table className={"table "+styles['table-font']}>
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
                        reserveList.map((item, index) => <ReserveItem  deleteReserve={deleteReserve} history={true} key={index} item = {item} row = {++index} /> )
                    }
                    </tbody>

                </table>:
                <div className='text-yellow w-100 d-flex justify-content-center align-items-center h-100 fs-3'>آیتمی پیدا نشد <span className='notFoundItem'>:)</span></div>
            }
            </div>

        </div>
    )
}