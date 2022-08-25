import React, { useState } from 'react';
import PN from "persian-number";

import EmployeeModalInfo from "./EmployeeModalInfo";

import  styles from "../../../../public/styles/dashboard.module.css";

const EmployeeItem = ( props ) => {
    
    const [openMoal, setOpenMoal ] = useState(false);

    const { name, row, phone, service } = props.item;
    
    return (
        <>
            <tr className='align-middle mb-2'>
                <th scope="row">{PN.convertEnToPe(row)}</th>
                <td >
                    <span className="ms-3">
                        <img className={styles['employee-item-profile']} src="/imgs/user.png" alt="" />
                    </span>
                    <span>
                        {name}
                    </span>
                </td>
                <td>{service}</td>
                <td>{phone}</td>
                <td>
                    <button onClick={ ()=> {setOpenMoal(true)} } className='btn btn-dark'>پروفایل کارمند</button>
                </td>
            </tr>
            {
                openMoal? 
                <EmployeeModalInfo openMoal={openMoal} setOpenMoal={setOpenMoal} employee={props.item}/> 
                :<></>
            }
        </>
    )
}

export default EmployeeItem;
