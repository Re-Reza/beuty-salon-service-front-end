import React, {useState} from "react";

import Modal from 'react-modal';

import styles from "../../../../public/styles/dashboard.module.css";

function EmployeeModalInfo( props ){

    const { openMoal, setOpenMoal, employee : {name, service, phone} } = props; 
    
    const [ showOptionState, setShowOptionState ] = useState({
        info:true,
        history: false,
        currentActivity: false
    });

    const customStyles = {
        overlay:{
            backgroundColor:"rgba(0,0,0, .5)"
        },
        content:{
            width: "60%",
            display:"flex",
            margin:"auto",
            padding:"0",
            borderRadius: "8px"
        }
    };
    
    function closeModal(){
        setOpenMoal(false);
    }

    function changeInfoOption( selected ) { 
        Object.keys(showOptionState).forEach(key => {
            showOptionState[key] = false;
        });
        
        setShowOptionState({
            ...showOptionState,
            [selected] : true
        });
    }

    const { info, history, currentActivity} = showOptionState; 

    Modal.setAppElement("#__next");

    return(
        <>
            <Modal
                isOpen={openMoal}
                style={ customStyles }
            >
                <div className={styles["employeeInofo-modal"]}>

                    <div className={styles["employeeInofo-modal-topPart"]} >
                        
                        <div onClick={closeModal} className="align-self-start me-3 mt-2 position-absolute top-0" role="button">
                            <i className="fa text-danger fs-3 fa-times" aria-hidden="true"></i>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <img className={styles["employeeModal-profileImg"]} src="/imgs/user.png" alt="profile-img" />
                            <div className={styles["employeeModal-name"]}>{name}</div>
                            <div className="text-muted">{service}</div>                            
                        </div>

                    </div>

                    <div className={styles["employeeModal-info"]}>

                        <div className={styles["employeeModal-btn-container"]}>
                            <button  onClick={()=>{changeInfoOption("info")}} className={ info ? styles["modal-option-btn"]+" "+styles["selected-m-btn"] : styles["modal-option-btn"]} type="button"> مشخصات کارمند</button>
                            <button onClick={()=>{changeInfoOption("history")}} className={ history ? styles["modal-option-btn"]+" "+styles["selected-m-btn"] : styles["modal-option-btn"]} type="button">تاریخچه فعالیت ها</button>    
                            <button  onClick={()=>{changeInfoOption("currentActivity")}}className={ currentActivity ? styles["modal-option-btn"]+" "+styles["selected-m-btn"] : styles["modal-option-btn"]} type="button">لیست هفتگی مشتریان</button>

                        </div>
                    
                    </div>

                </div>
                
            </Modal>
        </>
    )
}

export default EmployeeModalInfo;