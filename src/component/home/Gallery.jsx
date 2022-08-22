import React, {useEffect} from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import styles from "../../../public/styles/home.module.css";

export function Gallery(){

    useEffect(() => {
        
        Aos.init({
            duration : 1500,
            once : true
        });

    }, []);

    return(
        <section className={styles["gallery-section"]+ " flex-column align-items-center"}>
            
            <div className="d-flex justify-content-center mb-3">
                <h3 className={styles["gallery-section-title"]}> گالری تصاویر</h3>
            </div>

            <article className={styles["gallery-pictures-container"] }>

                <div data-aos="fade-left" className={ styles["gallery-img"]+" "+ styles["gallery-img-1"]}>
                </div>

                <div data-aos="fade-right" className={ styles["gallery-img"]+" "+ styles["gallery-img-2"]}>
                </div>

                <div data-aos="fade-left" className={ styles["gallery-img"]+" "+ styles["gallery-img-3"]}>
                </div>

                <div data-aos="flip-up" className={ styles["gallery-img"]+" "+ styles["gallery-img-4"]}>
                </div>

                <div data-aos="fade-right" className={ styles["gallery-img"]+" "+ styles["gallery-img-5"]}>
                </div>

            </article>
        
        </section>
    )
}