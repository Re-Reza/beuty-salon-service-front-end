import React, { useState, useEffect} from 'react';

import NotificationItem from './NotificationItem';
import { provideMessages } from "../../../dataService/userDashboardProvider";
import styles from "../../../../public/styles/dashboard.module.css";

export const Notifications = (props) => {
  
  const [ state, setState ] = useState({
    notifications : [],
    loading : true
  });

  useEffect(() => {
    
    provideMessages().then( response => {
      console.log(response);
      setState({
        notifications : response.data.result,
        loading : false
      });
    }).catch( err => {
      console.log(err);
    });

  }, []);

  function deleteNotification(id){
    const filteredList = state.notifications.filter( item => {
      if(item.reserveId)
        return item
      if(item.id != id)
        return item;
    });
    console.log(filteredList);
    setState({
      ...state,
      notifications: filteredList
    });
  }

  let role;
  if( props.isAdmin)
    role = 1;
  else if(props.isEmployee)
    role = 2;
  else 
    role = 3;

  return (
    state.loading ? <div>loading</div> :
    <div className={ styles["nofication-container"] }>
      
    {
      state.notifications.length > 0 ?
      <ul className={ styles["nofications-list"] }>
      {
        state.notifications.map( (item, index ) => <NotificationItem deleteNotification={deleteNotification} role={role} key={index} item={item}/>)
      }
      </ul>:
      <div className='text-yellow w-100 d-flex justify-content-center align-items-center h-100 fs-3'>اعلان جدیدی پیدا نشد <span className='notFoundItem'>:)</span></div>
    }

    </div>
  )
}

