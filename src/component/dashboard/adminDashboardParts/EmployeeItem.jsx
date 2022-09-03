import React, { useState } from 'react';
import { convertEnToPe } from "persian-number";

import EmployeeModalProfile from "./EmModalProfileParts/EmployeeModalProfile";

import  styles from "../../../../public/styles/dashboard.module.css";

const EmployeeItem = ( props ) => {
    
    const [openMoal, setOpenMoal ] = useState(false);

    const { name, row, phone, service } = props.item;
    
    return (
        <>
            <tr className='align-middle mb-2'>
                <th scope="row">{convertEnToPe(row)}</th>
                <td>
                    <div className='d-flex align-items-center'>
                        <span className="ms-3">
                            <img className={styles['employee-item-profile']} src="/imgs/user.png" alt="" />
                        </span>
                        <span>
                            {name}
                        </span>
                    </div>
                </td>
                <td>{service}</td>
                <td>{convertEnToPe(phone)}</td>
                <td>
                    <button onClick={ () => {setOpenMoal(true)} } className={'btn btn-dark '+styles['font-responsive']}>پروفایل کارمند</button>
                </td>
            </tr>
            {
                openMoal? 
                <EmployeeModalProfile openMoal={openMoal} setOpenMoal={setOpenMoal} employee={props.item}/> 
                :<></>
            }
        </>
    )
}

export default EmployeeItem;
