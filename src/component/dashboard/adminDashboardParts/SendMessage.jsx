import React, { useState, useRef } from 'react';

import AllMessages from './AllMessages';

import Toast from '../../elements/Toast';
import { sendMessageFromAdmin } from "../../../dataService/aminProvider";
import styles from "../../../../public/styles/dashboard.module.css";

export function SendMessage() {

    const [ state, setState ] = useState({
        showToast : false,
        error : false,
        areaError : null,
        msg : null,
    });

    const [ showAllMessages,  setShowAllMessages ] = useState(false);

    function hideToast(){
        setTimeout(()=>{
            console.log(state)
            setState({
                ...state,
                showToast : false,
                areaError : null,
            });

        }, 1500);
    }

    function toggleShow(){
        setShowAllMessages(!showAllMessages);
    }

    const messageRef = useRef(null);
    const titleRef = useRef(null);
    const selectRef = useRef(null);

    function sendMessage(){
        const text = messageRef.current.value;
        const title = titleRef.current.value;
        const messageType = selectRef.current.options[selectRef.current.selectedIndex].value;
        
        const messageData = {
            title,
            text,
            messageType
        }
        
        if(text.trim().length < 3) {
            setState({
                ...state,
                areaError : "پیام باید حداقل شامل سه کاراکتر باشد",
            }); 
        }
        else{
            sendMessageFromAdmin(messageData).then( response => {
                console.log(response);
                setState({
                    areaError : null,
                    error: false,
                    msg : "پیام با موفقیت ارسال شد",
                    showToast : true
                });
                messageRef.current.value=""
                titleRef.current.value=""
                hideToast();
            }).catch( err => {
                console.log(err)
                setState({
                    areaError : null,
                    error: true,
                    msg : "خطایی رخ داده است",
                    showToast : true
                });
                messageRef.current.value=""
                titleRef.current.value=""
                hideToast();
            });
        }
    }

    return(
        <>
        {
            state.showToast? 
            <Toast toatData={ { message : state.msg, error : state.error} } /> : <></>
        }
        <div className={styles['dashboard-reserveList']+" "+styles['sendMessageContainer']}> 
        {
            showAllMessages ?
            <AllMessages toggleShow={toggleShow}/> 
            :
            <>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex mb-5 flex-column flex-sm-row'>
                        <div className='ms-sm-5 ms-0 ms-md-5'>
                            <label className='mb-2' htmlFor='title-input'>عنوان</label>
                            <br />
                            <input ref={titleRef} id="title-input" type="text" name='title' className={styles['change-info-input']+" w-100"} />
                        </div>

                        <div className='me-0 mt-4 mt-sm-0 me-md-5'>
                            <label className='mb-2' htmlFor="userCategory">ارسال به</label>
                            <select ref={selectRef} className='form-select'>
                                <option value="1">کارمندان</option>
                                <option value="2">مشتریان</option>
                                <option value="3">همه ی کاربران</option>
                            </select>
                        </div>
                        
                    </div>

                    <p onClick={toggleShow} className='hover-yellow'>مشاهده همه پیام ها <i className="fa fa-envelope-open-o" aria-hidden="true"></i></p>

                    </div>

                    <div className='mt-3'>
                    <label htmlFor="message-area" className='mb-3'>متن پیام</label>
                    {
                        state.areaError ? 
                        <p className='text-danger'>{ state.areaError }</p> : <></>
                    }
                    <textarea ref={messageRef} minLength={2} name="text" id="message-area" className={styles['change-info-input']+" "+styles['message-area']} ></textarea>
                </div>  

                <div className='d-flex justify-content-end mt-4'>
                    <button onClick={sendMessage} className='btn btn-success'>ارسال</button>
                </div>
            
            </>
        }
        </div>

        </>
    );
}

