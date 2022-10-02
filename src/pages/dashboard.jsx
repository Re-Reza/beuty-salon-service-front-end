import React from "react";

import Head from "next/head";

import { getUserRole } from "../dataService/dashboardProvider";

import UserDashboard from "../component/dashboard/dashboardPages/UserDashboard";
import EmployeeDashboard from "../component/dashboard/dashboardPages/EmployeeDashboard";
import AdminDashboard from "../component/dashboard/dashboardPages/AdminDashboard";

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

export async function getServerSideProps(context){
    // console.log(context.req.cookies)
    // const { query:{role} } = context;

    try{
        const response = await getUserRole(context.req.cookies.authToken);
        return { 
            props: {
                role:response.data.role 
            }
        }
    }
    catch( err ){
        // console.log("in error");
        // console.log(err);
        // redirect user if it had not logged in
        return {
            redirect : {
                permanent: false,
                destination: "/notFound",
            }
        }
    }

}

export default Dashboard;