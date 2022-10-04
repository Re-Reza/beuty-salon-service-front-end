import React from 'react';  

import { convertEnToPe } from "persian-number";

export function ReserveItem(props) {

    const { id, reserveDate, status, employeefName, employeelName, employeeId, service, reserveTime } = props.item;

    const deleteReservation = () =>{
       //delete reservation
    }

    const dateParts = reserveDate.split('/');
    return (
        <tr>
            <th scope="row">{convertEnToPe(props.row)}</th>
            <td>{service}</td>
            <td>{employeefName + " "+ employeelName }</td>
            <td>{convertEnToPe(parseInt(dateParts[0]))+"/"+convertEnToPe(parseInt(dateParts[1]))+"/"+convertEnToPe(parseInt(dateParts[2]))}</td>
            {
                props.history?
                <td>اتمام یافته</td>
                :
                <td title='حذف رزرو' className="fs-5" role="button" onClick={deleteReservation}>
                    <span style={ {
                        background: "#3d3d3d",
                        padding: ".1em .2em",
                        color:"#fff",
                        borderRadius: "5px",
                    } }>
                        <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </span>
                </td>
            }
        </tr>
    )
}

export default ReserveItem;