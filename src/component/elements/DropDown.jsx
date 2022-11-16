import React, { useState } from 'react';

import DropDownItem from './DropDownItem';

import styles from "../../../public/styles/reservePage.module.css";
import DropDownEmployeeItem from './DropDownEmployeeItem';

function DropDown( props ){

    const [ state, setState ] = useState({
        show : false,
    });

    const { chooseItem, list, selected, type, element, dropTitle } = props;

    function selectOption(value, id){
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
                    <span>{dropTitle}</span>           
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
                list.map( (item, index) => props.selectEmployee == true ? <DropDownEmployeeItem  isLast={index == list.length-1 ? true : false }  key={index} item={item} chooseEmployee={props.chooseEmployee}/> : <DropDownItem isLast={index == list.length-1 ? true : false } selectOption={selectOption} item={item} type={type} key={index}/>
                )
            }
            </ul>

    </div>
    )
}

export default DropDown;