import React, { useEffect, useState } from "react";

import Head from "next/head";

import Aos from "aos";

import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { RateStatics, EmployeesAccordion, RatesOfSalon, CommentSwiper } from "../component/aboutus";

import styles from "../../public/styles/aboutUs.module.css";
import "aos/dist/aos.css";


function About() {

    useEffect(() => {
        
        Aos.init({
            duration : 1500,
            once : true
        });

    }, []);

    const [ state, setState ] = useState({
        employees : [
            { fName : "سارینا", lName: "حیدری", email : "aaa@gmail.com", phone  : "0930000", servicesSaticsfaction : [ { title: "سشوار", rate : "50"},  { title: "کوتاهی", rate : "65"},  { title: "بافت", rate : "72"} ] , workInfo : [{title : "ساعات کاری", quan :"4200"}, {title : "رضایت مشتری", quan :"4200"}, {title : "مشتری ها", quan :"4200"} ] },
            { fName : "سارینا", lName: "حیدری", email : "aaa@gmail.com", phone  : "0930000", servicesSaticsfaction : [ { title: "سشوار", rate : "50"},  { title: "کوتاهی", rate : "65"},  { title: "بافت", rate : "72"} ] , workInfo : [{title : "ساعات کاری", quan :"4200"}, {title : "رضایت مشتری", quan :"4200"}, {title : "مشتری ها", quan :"4200"} ] } ,
            { fName : "سارینا", lName: "حیدری", email : "aaa@gmail.com", phone  : "0930000", servicesSaticsfaction : [ { title: "سشوار", rate : "50"},  { title: "کوتاهی", rate : "65"},  { title: "بافت", rate : "72"} ] , workInfo : [{title : "ساعات کاری", quan :"4200"}, {title : "رضایت مشتری", quan :"4200"}, {title : "مشتری ها", quan :"4200"} ] } ,
            { fName : "سارینا", lName: "حیدری", email : "aaa@gmail.com", phone  : "0930000", servicesSaticsfaction : [ { title: "سشوار", rate : "50"},  { title: "کوتاهی", rate : "65"},  { title: "بافت", rate : "72"} ] , workInfo : [{title : "ساعات کاری", quan :"4200"}, {title : "رضایت مشتری", quan :"4200"}, {title : "مشتری ها", quan :"4200"} ] }  
        ]
    })

    return (
        <>
            <Head>
                <title>درباره ما</title>
            </Head>
            
            <div className="pink-round">
                <Header aboutUs={true} homePage={false}/>

                <div className={styles['aboutUs-page']+" mt-5"}>

                    <RateStatics/>

                    {/* <EmployeeSwiper/> */}
        
                    <EmployeesAccordion data={state.employees}/>
                
                    <RatesOfSalon/>

                    <CommentSwiper/>
                    
                </div>

                <Footer/>
            </div>

           
        </>
    )
}

// export function getServerSideProps(){
//     console.log("here");
//     return{
//         props:{

//         }
//     }
// }

export default About;