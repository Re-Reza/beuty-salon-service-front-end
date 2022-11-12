import React, { useState } from 'react';

import styles from "../../../public/styles/reservePage.module.css";

function DropDown( props ){

    const [ state, setState ] = useState({
        show : false,
    });

    const { chooseItem, list, selected, type, element, dropTitle } = props;
    console.log(dropTitle);

    function selectOption(event){
        const value = event.target.innerHTML;
        const id = event.target.value;
        setState({ show: false });
        chooseItem({ value, id } , type);
    }
    
    return (
        <div className={styles['DropDown']}>
            
            <div onClick={()=> { setState({...state, show:!state.show}) } } className={styles["DropDown-select"]}>
                {
                    selected ? 
                    <span>{selected}</span>
                    :
                    <span>{dropTitle ? dropTitle : "انتحاب کنید"}</span>     
                    // <span>dsadsa</span>       
                }
                {
                    state.show?
                    <i className="fa fa-angle-up" style={{fontWeight : "700", fontSize: "1.6em"}} aria-hidden="true"></i>
                    :
                    <i className="fa fa-angle-down" style={{fontWeight : "700", fontSize: "1.6em"}} aria-hidden="true"></i>
                }
            </div>
                
            <ul className={state.show?styles["show"] +" "+ styles["DropDown-options"] : styles["DropDown-options"]}>
            {
                list.map( (item, index) => 
                <option key={index} className={index == list.length-1 ? styles["DropDown-options-options"] : styles["DropDown-options-options"]+" "+styles["option-border"] } 
                onClick={selectOption} value={item.id}>
                    <div>
                        <img src="/imgs/about-3.png" alt="option-img" />
                    </div>
                    <div>
                        <div>{type == "CATEGORY" ? item.categoryTitle : item.serviceTitle}</div>
                        <div>
                            <span>
                                رضایت مشتری
                            </span>

                            <span>9.8/10</span>
                        </div>
                    </div>
                </option>)
            }
            </ul>

    </div>
    )
}

export default DropDown;