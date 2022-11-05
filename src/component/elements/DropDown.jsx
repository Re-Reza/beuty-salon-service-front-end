import React, { useState } from 'react';

import styles from "../../../public/styles/reservePage.module.css";

function DropDown( props ){

    const [ state, setState ] = useState({
        show : false,
    });

    const { chooseItem, list, selected, type, element } = props;

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
                    <span>انتخاب کنید</span>            
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
                list.map( (item, index) => <option key={index} className={index == list.length ? styles["DropDown-options-options"] : styles["DropDown-options-options"]+" "+styles["option-border"] } 
                onClick={selectOption} value={item.id}>{type == "CATEGORY" ? item.categoryTitle : item.serviceTitle}
                </option>)
            }
            </ul>

    </div>
    )
}

export default DropDown;