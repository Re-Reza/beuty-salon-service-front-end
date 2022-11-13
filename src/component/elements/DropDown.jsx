import React, { useState } from 'react';

import DropDownItem from './DropDownItem';

import styles from "../../../public/styles/reservePage.module.css";

function DropDown( props ){

    const [ state, setState ] = useState({
        show : false,
    });

    const { chooseItem, list, selected, type, element, dropTitle } = props;

    function selectOption(value, id){
        console.log("gdfsdfsd")
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
                list.map( (item, index) => <DropDownItem isLast={index == list.length-1 ? true : false } selectOption={selectOption} item={item} type={type} key={index}/>
                )
            }
            </ul>

    </div>
    )
}

export default DropDown;