import React from "react";

import Head from "next/head";

// import { useRouter } from "next/router";
import UserDashboard from "../../component/dashboard/dashboardPages/UserDashboard";
import EmployeeDashboard from "../../component/dashboard/dashboardPages/EmployeeDashboard";
import AdminDashboard from "../../component/dashboard/dashboardPages/AdminDashboard";

//in this page first must understand role of user from server then 
//render related component to his/her route

function Dashboard( props ){

    const { role } = props;

    let RoleDashboard;
    let title;
    if( role === "user")
    {
        title = "کاربر";
        RoleDashboard =  UserDashboard;
    }
    else if( role === "employee" )
    {       title = "کارمند";
        RoleDashboard = EmployeeDashboard;
    }
    else if( role === "admin" )
    {       
        title = "مدیریت";
        RoleDashboard = AdminDashboard;

    }    



    return ( 
        <>
            <Head>
                <title>پنل {title}</title>
            </Head>

            {
                RoleDashboard ? 
                <RoleDashboard/>: 
                <></> //redirect to 404 page
            }

        
        </>
    );
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