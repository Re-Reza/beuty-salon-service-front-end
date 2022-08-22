import React, { useEffect, useState } from "react";

// import { useRouter } from "next/router";
import Aos from "aos";

//components
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import EmplyeesCarousel from "../../component/servicesParts/EmplyeesCarousel";

import styles from "../../../public/styles/services.module.css";

function Service( props) {

    const { service } = props;

    const [ contentState, setContentState ] = useState({
        hair : {
            title : "مو",
            description : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
            pictures : {
                left: "/imgs/service-imgs/hair1.png" ,
                right: "/imgs/service-imgs/hair2.png"
            },
        }, 
        nail:  {
            title : "ناخن",
            description : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
            pictures : {
                left: "/imgs/service-imgs/nail1.png" ,
                right: "/imgs/service-imgs/nail2.png"
            },
        }, 
        skin: {
            title : "پوست",
            description : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
            pictures : {
                left: "/imgs/service-imgs/skin1.png" ,
                right: "/imgs/service-imgs/skin2.png"
            },
        }, 
        makeup:  {
            title : "میکاپ",
            description : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
            pictures : {
                left: "/imgs/service-imgs/makeup1.png" ,
                right: "/imgs/service-imgs/makeup2.png"
            },
        }, 
        
        employees : [
            {picurl: "https://mediashower.com/img/43FE71F2-2036-11E8-AC02-C4968A40905D/bigstock-Profession-And-Work-Beauty-An-228320059_600x.jpg", name:"مینا احمدی", rate:8},
            {picurl: "https://mediashower.com/img/43FE71F2-2036-11E8-AC02-C4968A40905D/bigstock-Stylist-cutting-hair-of-a-fema-77737904_600x.jpg", name:"مریم مهدوی", rate:9.5},
            {picurl: "https://www.mediashower.com/img/0740CE2E-388A-11E8-A955-D7929167FE77/bigstock-Graphic-image-of-flare-against-179199682_600x.jpg", name:"زهرا محمدی", rate:9},
            {picurl: "https://www.gettimely.com/wp-content/uploads/2018/04/timely-rent-a-chair-hero-1400x800.jpg", name:"پرستو یوسفی", rate:10},
        
        ] //must be gotton from api
    });

    const serviceData = contentState[service];
    const { title, description, pictures, employees} = serviceData;

    useEffect( () => {
        //must send request and get employees

        Aos.init({
            duration:1200,
            // once:true,
            // startEvent:"load"
        });
        // setTimeout( ()=> {
        //     console.log("refresh")
        //     Aos.init({
        //         duration:1200,
        //         once:true
    
        //     });
        //     Aos.refresh();
        // }, 2000)

    }, [ ]);


    return(
        <>
            <Header homePage={false}/>
            
            <div className={styles["service"]}>
                <section className={styles["service-top"]}>
                    
                    <div className={styles["service-top-introduction"]}>
                        <h1 data-aos-delay="100" data-aos="fade-up" className={styles["services-title"]}>خدمات <span className={styles.logo}>{title}</span></h1>
                        <p className="text-muted mt-4">{description}</p>
                    </div>

                    <div className={styles["service-top-pictures"]}>
                        <img data-aos-delay="400" data-aos="fade-left" src={pictures["right"]} alt={title} />
                        <div className={"text-center fs-3 "+styles["service-text-picutures"]}>
                            <p data-aos-delay="300" data-aos="fade-up">بهترین خدمات</p>
                            <p data-aos-delay="600" data-aos="fade-up">{title} و زیبایی در</p>
                            <p data-aos-delay="700" data-aos="fade-up" className={styles.logo}> سالن زیبایی </p>
                            <p data-aos-delay="800" data-aos="fade-up">در اختیار شماست</p>
                        </div>
                        <img data-aos-delay="200" data-aos="fade-right" src={pictures["left"]} alt={title} />
                    </div> 

                </section>

                <section className={styles["service-topEmployees"]}>
                    <div className="d-flex justify-content-center mb-5">
                        <h2 className="text-muted">برترین کارمندان {title}</h2>
                    </div>

                    <div className={styles["service-carousel"]}>
                        <EmplyeesCarousel topEmpolyess={contentState.employees} category = {title}  />
                    </div>   
                    <br /><br /><br/>
                </section>

                <section>

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