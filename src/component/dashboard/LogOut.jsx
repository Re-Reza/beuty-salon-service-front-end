import React, { useContext } from "react";

import contextStore from "../../context/contextStore";
import { useRouter } from "next/router";

import { removeCookie } from "../../dataService/cookieProvider";

function LogOut(){

    const router = useRouter();
    const { dispatch } = useContext(contextStore);

    function logout(){
        removeCookie();
        dispatch({
            type : "DELETE_DATA",
        });
        router.push("/");
    }

    return (
        <div className="mt-4 d-flex justify-content-start">
            <div onClick={logout} className="hover-red d-flex align-items-center" style={{color:"#424141"}}>
                <i className="fa fa-sign-out ms-2" aria-hidden="true"></i> <span> خروج از حساب</span> 
            </div>
        </div>
    )
}

export default LogOut;