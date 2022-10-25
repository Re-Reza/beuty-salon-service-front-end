import React, { useState } from 'react';
import { convertEnToPe } from "persian-number";

import EmployeeModalProfile from "./EmModalProfileParts/EmployeeModalProfile";

import styles from "../../../../public/styles/dashboard.module.css";

const EmployeeItem = ( props ) => {
    
    const [openMoal, setOpenMoal ] = useState(false);

    console.log(props)
    const { row, phone, fName, lName, profileImg, services } = props.item;
    let data="";
    services.forEach( (item, index) => {
        data = data.concat( item.serviceTitle + (index==services.length-1? "" : "، ") )
    });

    //یک کانتکس اینجاتغریف کن و پراپس ها رو در ان بریز
    return (
        <>
            <tr className='align-middle mb-2'>
                <th scope="row">{convertEnToPe(row)}</th>
                <td style={{minWidth:"180px"}}>
                    <div className='d-flex align-items-center'>
                        <span className={"ms-3 "+styles['employee-item-imgContainer']}>
                            <img className={styles['employee-item-profile']} src={profileImg? "http://localhost:4000/"+profileImg : "/imgs/user.png"} alt="" />
                        </span>
                        <span>
                            {fName+" "+lName}
                        </span>
                    </div>
                </td>
                <td>{data}</td>
                <td>{convertEnToPe(phone)}</td>
                <td>
                    <button onClick={ () => {setOpenMoal(true)} } className={'btn btn-dark '+styles['font-responsive']}>پروفایل کارمند</button>
                </td>
            </tr>
            {
                openMoal? 
                <EmployeeModalProfile  openMoal={openMoal} setOpenMoal={setOpenMoal} employee={props.item}/> 
                :<></>
            }
        </>
    )
}

export default EmployeeItem;
