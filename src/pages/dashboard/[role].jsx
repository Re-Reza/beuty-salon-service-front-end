import React from "react";

import { useRouter } from "next/router";
import UserDashboard from "../../component/dashboard/dashboardPages/UserDashboard";
import EmployeeDashboard from "../../component/dashboard/dashboardPages/EmployeeDashboard";
import AdminDashboard from "../../component/dashboard/dashboardPages/AdminDashboard";

//in this page first must understand role of user from server then 
//render related component to his/her route

function Dashboard( props ){

    const { role } = props;

    let RoleDashboard;

    if( role === "user")
        RoleDashboard =  UserDashboard;
    else if( role === "employee" )
        RoleDashboard = EmployeeDashboard;
    else if( role === "admin" )
        RoleDashboard = AdminDashboard;

        return ( 
            <RoleDashboard/>
        )
}

export function getServerSideProps(context){

    const { query:{role} } = context;

    return { 
        props: {
            role:role 
        }
    }

}

export default Dashboard;