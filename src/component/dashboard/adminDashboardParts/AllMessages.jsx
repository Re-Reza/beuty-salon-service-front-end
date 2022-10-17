import React, { useEffect, useState } from 'react';

import { provideAllAdminMessages } from "../../../dataService/aminProvider"; 
import { deleteMessage } from "../../../dataService/aminProvider";
import Loading from "../../elements/Loading";
function AllMessages( props ){

    const [ state, setState ] = useState({
        loading : true,
        messageList : []
    });

    useEffect(()=>{

        provideAllAdminMessages().then( response => {
                   
            setState({
                loading : false,
                messageList : response.data.result
            });
            
        }).catch( err => console.log(err) );


    }, []);

    const deleteNotification = (id) => {

        deleteMessage(id).then( response => {
     
            console.log( response );
            const filtereState = state.messageList.filter( item => item.id != id);
            setState({
                messageList : filtereState
            });

        }).catch( err => {
            console.log(err);
        })
        
    }   

    const defineMassegeReaders = (type) => {
        switch( type ){
            case "1":
                return "کارمندان";
            case "2":
                return "مشتریان";
            case "3": 
                return "همه ی کاربران";
        }
    }

    return(
        state.loading?   <div className="w-100 pt-5 d-flex justify-content-center">
        <Loading />
      </div> :
        <div className='d-flex flex-column'>

            <div className='d-flex justify-content-end mb-3'>
                <p onClick={props.toggleShow} className="hover-yellow">ارسال پیام جدید <i className="fa fa-pencil-square-o" aria-hidden="true"></i></p>
            </div>

            {
                state.messageList.length > 0 ?
                <div className="table-responsive">
            
                    <table className="table">

                    <thead style={ { color:"rgb(50 50 50 / 87%)", backgroundColor: "rgb(255 204 84 / 62%)" } }>
                        <tr>
                            <th scope="col">ردیف</th>
                            <th scope="col">عنوان</th>
                            <th scope="col">متن پیام</th>
                            <th scope="col">تاریخ ارسال</th>
                            <th scope="col">ارسال برای</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                    {
                        
                            state.messageList.map( (item, index) => <tr key={index}>
                            <th scope="row">{++index}</th>
                            <td style={{wordBreak:"break-word",  minWidth : "150px", maxWidth:"220px"}}>{item.title}</td>
                            <td style={ { minWidth : "400px", maxWidth:"500px", wordBreak:"break-word"} }>{item.text}</td>
                            <td>{item.createdTime}</td>
                            <td>{defineMassegeReaders(item.messageType)}</td>
                            <td>
                                <span onClick={()=>{deleteNotification(item.id)}}><i title='حدف اعلان' role="button" className="fa fa-trash-o text-danger fs-5" aria-hidden="true"></i></span>
                            </td>
                        </tr>
                        )
                    }
                    </tbody>

                </table> 

                </div> :

                <div className='text-yellow text-center fs-3'>پیامی موجود نیست <span className='notFoundItem'>:)</span></div>
            }

        </div>
    );  
}

export default AllMessages;