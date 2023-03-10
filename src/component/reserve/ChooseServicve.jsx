import React, { useState, useEffect, useContext } from "react";

import reserveContext from "./reserveContext";
import { provideCategories, provideServiceOfCategory } from "../../dataService/reserveProvider";

import DropDown from "../elements/dropDown";

import styles from "../../../public/styles/reservePage.module.css";

export function ChooseService() {

    const [ state, setState ] = useState({ 
        categoryList : [],
        serviceList : []
    });    

    const { userChoiceState, dispatch } = useContext( reserveContext );
    const { category, service } = userChoiceState;

    useEffect( ()=> {
        provideCategories().then( response => { 
            setState({
                ...state,
                categoryList : response.data.result
            });

        }).catch( err => {
            console.log(err);
        })
    }, []);

    useEffect( () => {
        
        if(userChoiceState.category.id){
            provideServiceOfCategory(userChoiceState.category.id).then(response => {
                console.log(response);
                setState( prevState => ({
                    ...prevState,
                    serviceList : response.data.result
                }) );
            }).catch( err => console.log(err) );
        }

    }, [userChoiceState.category.id]);

    
    function chooseItem(data, type) { 
    
        dispatch ( {
            type: `SET_${type}`,
            payload : {
                value : data.value,
                id : data.id 
            }
        });
    }
    // console.log(state.categoryList);                       
    return ( 

        <section className={styles["chooseService-section"]}>

            <div>
                {/* <h6 className="mb-3">دسته بندی خدمات</h6> */}
                <DropDown dropTitle={"خدمات"} chooseItem={chooseItem} type="CATEGORY" list={state.categoryList} selected={category.value}/>
            </div>

            <div>
                {/* <h6 className="mb-3">سرویس ها</h6> */}
                <DropDown dropTitle={"سرویس ها"} chooseItem={chooseItem} type="SERVICE" list={state.serviceList} selected={service.value}/>
            </div>

        </section>
    )

}

