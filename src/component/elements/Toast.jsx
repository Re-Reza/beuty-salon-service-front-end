import React from 'react';

function Toast(props) {

    const { message, error} = props.toatData;


    return <div className={error? "toastContainer errorToast" : "toastContainer successToast"}>
        <i className='fa fa-check-circle'></i> <span>{message}</span>  
    </div>
}

export default Toast;