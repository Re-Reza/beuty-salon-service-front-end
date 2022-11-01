import React, { useEffect, useState, useRef } from "react";

import Head from "next/head";
import Link from "next/link";
// import { useRouter } from "next/router";

//components
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import { TopEmployees, PopularServices, DetailBox } from "../../component/servicesParts";

import styles from "../../../public/styles/services.module.css";

function Service( props) {

    const { service } = props;

    const counter = useRef(0);
    //باید لیسد خدمات داخل نو بار از ای پی ای بیاید

    // const [ contentState, setContentState ] = useState({
    //     hair : {
    //         title : "مو",
    //         description : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    //         pictures : {
    //             left: "/imgs/service-imgs/hair1.png" ,
    //             right: "/imgs/service-imgs/hair2.png"
    //         },
    //     }, 
    //     nail:  {
    //         title : "ناخن",
    //         description : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    //         pictures : {
    //             left: "/imgs/service-imgs/nail1.png" ,
    //             right: "/imgs/service-imgs/nail2.png"
    //         },
    //     }, 
    //     skin: {
    //         title : "پوست",
    //         description : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    //         pictures : {
    //             left: "/imgs/service-imgs/skin1.png" ,
    //             right: "/imgs/service-imgs/skin2.png"
    //         },
    //     }, 
    //     makeup:  {
    //         title : "میکاپ",
    //         description : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    //         pictures : {
    //             left: "/imgs/service-imgs/makeup1.png" ,
    //             right: "/imgs/service-imgs/makeup2.png"
    //         },
    //     }, 
        
    //     employees : [
    //         {picurl: "https://mediashower.com/img/43FE71F2-2036-11E8-AC02-C4968A40905D/bigstock-Profession-And-Work-Beauty-An-228320059_600x.jpg", name:"مینا احمدی", rate:8},
    //         {picurl: "https://mediashower.com/img/43FE71F2-2036-11E8-AC02-C4968A40905D/bigstock-Stylist-cutting-hair-of-a-fema-77737904_600x.jpg", name:"مریم مهدوی", rate:9.5},
    //         {picurl: "https://www.mediashower.com/img/0740CE2E-388A-11E8-A955-D7929167FE77/bigstock-Graphic-image-of-flare-against-179199682_600x.jpg", name:"زهرا محمدی", rate:9},
    //         {picurl: "https://www.gettimely.com/wp-content/uploads/2018/04/timely-rent-a-chair-hero-1400x800.jpg", name:"پرستو یوسفی", rate:10},
        
    //     ] //must be gotton from api
        
    // });

    // const serviceData = contentState[service];
    // const { title, description, pictures, employees} = serviceData;

    const [ state, setState ] = useState({
        employees : [
            {
                fName : "مینا",
                lName : "احمدی",
                biography : "مینا احمدی هستم سلامت مو خیلی مهمه و لازمه هر چند وقت یکبار کوتاه بشه تا از موخوره و اسیب های زیاد جلوگیری بشه ",
                featurList : ["دارای مدرک معتبر بین المللی ", "با سابقه 10 سال در کوتاهی مو ", "با اخلاق خوش "],
                profileImg : "/imgs/gallery-img2.png",
                rate : "9.8",
                professions : []
            },
            {
                fName : "مریم",
                lName : "احمدی",
                biography : "مینا احمدی هستم سلامت مو خیلی مهمه و لازمه هر چند وقت یکبار کوتاه بشه تا از موخوره و اسیب های زیاد جلوگیری بشه ",
                featurList : ["دارای مدرک معتبر بین المللی ", "با سابقه 10 سال در کوتاهی مو ", "با اخلاق خوش "],
                profileImg : "/imgs/gallery-img2.png",
                rate : "9.8",
                professions : []
            }
        ],
        popularServices : [
            {
                serviceTitle : "شنیون",
                employee: "مینا احمدی",
                rate : "8",
                img : "/imgs/gallery-img4.jpg"
            },
            {
                serviceTitle : "شنیون",
                employee: "مینا احمدی",
                rate : "8",
                img : "/imgs/gallery-img4.jpg"
            },
            {
                serviceTitle : "شنیون",
                employee: "مینا احمدی",
                rate : "8",
                img : "/imgs/gallery-img4.jpg"
            },
            {
                serviceTitle : "شنیون",
                employee: "مینا احمدی",
                rate : "8",
                img : "/imgs/gallery-img4.jpg"
            },
            {
                serviceTitle : "شنیون",
                employee: "مینا احمدی",
                rate : "8",
                img : "/imgs/gallery-img4.jpg"
            },
            {
                serviceTitle : "شنیون",
                employee: "مینا احمدی",
                rate : "8",
                img : "/imgs/gallery-img4.jpg"
            }
        ],
        serviceDetails : [
            { serviceTitle: "کراتین مو", description : "بسیاری از شما ممکن است موهای مجعد و فری داشته باشید که گاهی حتی استفاده از نرم کننده‌ها و اتو مو هم برای صاف کردن و از بین بردن وز آنها افاقه نکند و موهایتان آنطور که می‌خواهید و انتظار دارید لخت و صاف نشود پیشنهاد من به شما کراتین کردن مو هست ", img:"/imgs/hairService.jpeg"},
            { serviceTitle: "کراتین مو", description : "بسیاری از شما ممکن است موهای مجعد و فری داشته باشید که گاهی حتی استفاده از نرم کننده‌ها و اتو مو هم برای صاف کردن و از بین بردن وز آنها افاقه نکند و موهایتان آنطور که می‌خواهید و انتظار دارید لخت و صاف نشود پیشنهاد من به شما کراتین کردن مو هست ", img:"/imgs/hairService.jpeg"},
            { serviceTitle: "کراتین مو", description : "بسیاری از شما ممکن است موهای مجعد و فری داشته باشید که گاهی حتی استفاده از نرم کننده‌ها و اتو مو هم برای صاف کردن و از بین بردن وز آنها افاقه نکند و موهایتان آنطور که می‌خواهید و انتظار دارید لخت و صاف نشود پیشنهاد من به شما کراتین کردن مو هست ", img:"/imgs/hairService.jpeg"},
            { serviceTitle: "کراتین مو", description : "بسیاری از شما ممکن است موهای مجعد و فری داشته باشید که گاهی حتی استفاده از نرم کننده‌ها و اتو مو هم برای صاف کردن و از بین بردن وز آنها افاقه نکند و موهایتان آنطور که می‌خواهید و انتظار دارید لخت و صاف نشود پیشنهاد من به شما کراتین کردن مو هست ", img:"/imgs/hairService.jpeg"},
            { serviceTitle: "کراتین مو", description : "بسیاری از شما ممکن است موهای مجعد و فری داشته باشید که گاهی حتی استفاده از نرم کننده‌ها و اتو مو هم برای صاف کردن و از بین بردن وز آنها افاقه نکند و موهایتان آنطور که می‌خواهید و انتظار دارید لخت و صاف نشود پیشنهاد من به شما کراتین کردن مو هست ", img:"/imgs/hairService.jpeg"}
        ]
    });


    return(
        <>
            <Head>
                <title>خدمات {"title"}</title>
            </Head>

            <Header homePage={false}/>
            
            <div className={styles["service"]}>
                
                <TopEmployees data = {state.employees} /> 
                
                <PopularServices data={state.popularServices} />

                <section className={styles["service-detailBox-container"]}>
                {
                    state.serviceDetails.map( (item, index )=> <DetailBox indx={index+1} item={item} key={index}/> )
                }
                </section>

            </div>
            
            <Footer/>
        </>
    ); 

}

export async function getServerSideProps(context){
    //must requeest to api and get employees form here
    const { query  : {service} } = context

    return {
        props : {
            service : service
        }
    }

}

export default Service;