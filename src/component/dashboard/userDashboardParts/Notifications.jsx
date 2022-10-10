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

  let role;
  if( props.isAdmin)
    role = 1;
  else if(props.isEmployee)
    role = 2;
  else 
    role = 3;

  return (
    state.loading ? <div>loading</div>:
    <div className={ styles["nofication-container"] }>
      
      <ul className={ styles["nofications-list"] }>
      {
        state.notifications.map( (item, index ) => <NotificationItem role={role} key={index} item={item}/>)
      }
      </ul>

    </div>
  )
}

