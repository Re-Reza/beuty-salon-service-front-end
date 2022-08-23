import React from 'react';  

import PN from "persian-number";

export function ReserveItem(props) {

    const { serviceTitle, employee, date:{year, month, day}, row} = props.item;

    const deleteReservation = () =>{
        alert("sfds")
    }

    return (
        <tr>
            <th scope="row">{PN.convertEnToPe(row)}</th>
            <td>{serviceTitle}</td>
            <td>{employee}</td>
            <td>{` ${PN.convertEnToPe(year)}/${PN.convertEnToPe(month)}/${PN.convertEnToPe(day)} `}</td>
            <td title='حذف رزرو' className="fs-5 text-danger" role="button" onClick={deleteReservation}>
                <i class="fa fa-trash-o" aria-hidden="true"></i>
            </td>
        </tr>
    )
}

export default ReserveItem;