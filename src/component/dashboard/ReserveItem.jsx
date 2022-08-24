import React from 'react';  

import PN from "persian-number";

export function ReserveItem(props) {

    const { serviceTitle, employee, date:{year, month, day}, row, history} = props.item;

    const deleteReservation = () =>{
       //delete reservation
    }

    return (
        <tr>
            <th scope="row">{PN.convertEnToPe(row)}</th>
            <td>{serviceTitle}</td>
            <td>{employee}</td>
            <td>{` ${PN.convertEnToPe(year)}/${PN.convertEnToPe(month)}/${PN.convertEnToPe(day)} `}</td>
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