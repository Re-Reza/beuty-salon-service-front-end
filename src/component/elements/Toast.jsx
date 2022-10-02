import React from 'react';

function Toast(props) {

    const { message, error} = props.toatData;


    return <div className={error? "toastContainer errorToast" : "toastContainer successToast"}>
        {message}
    </div>
}

export default Toast;