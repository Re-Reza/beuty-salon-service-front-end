import React, { useState, useEffect } from "react";

import { getInfo } from "../../../dataService/userDashboardProvider";

import styles from "../../../../public/styles/dashboard.module.css";
import InfoBox from "./InfoBox";


export function MainPart(props){

    const [ state, setState ] = useState({
        loading : true,
        data : []
    });

    useEffect(() => {
        getInfo().then( response => {
            console.log(response);

            setState({
                loading: false,
                data : Object.entries(response.data.result)
            })
        }).catch( err => {
            console.log(err);
        });
        
    }, []);

    return(
        state.loading? 
        <div>loading</div>
        :
        <div className="d-flex flex-column ">
        
            <div className="mb-5">

                <div className={ styles["profile-img-container"]}>
                    <img src={"/imgs/user.png"} className={styles["profile-img"]} alt="" />
                    <input title="بارگزاری تصویر" type="file" className={styles["profile-upload-input"]}/>
                </div>

            </div>
            
            <ul className={styles["UserInfoContainer"]}>   
            {
                state.data.map( (item, index) => <InfoBox item={item} key={index}/> )
            }
            </ul>

        </div>
    )
}