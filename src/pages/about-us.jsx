import React, { useEffect } from "react";

import Head from "next/head";

import Aos from "aos";
import EmployeeSwiper from "../component/aboutus/EmployeeSwiper";

import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import { TopPart } from "../component/aboutus";

import styles from "../../public/styles/aboutUs.module.css";
import "aos/dist/aos.css";


function About() {

    useEffect(() => {
        
        Aos.init({
            duration : 1500,
            once : true
        });

    }, []);

    return (
        <>
            <Head>
                <title>درباره ما</title>
            </Head>
            
            <Header aboutUs={true} homePage={false}/>

            <div className={styles['aboutUs-page']+" mt-5"}>

                <TopPart/>

                <EmployeeSwiper/>

            </div>

            <Footer/>

           
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