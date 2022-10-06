import axiosInstance from "./axiosInstance";
import { getCookie } from "./cookieProvider";

export function provideEmployeeInfo(){
    return axiosInstance.get( `employeeDashboard/provideEmployeeInfo?token=${getCookie()}` );
}

export function provideCustomerReserves(employeeId){
    return axiosInstance.get( `employeeDashboard/extractCustomerList?employeeId=${employeeId}&token=${getCookie()}` );
}

export function setFinalTime(reserveId, newData){
    console.log(newData);
    return axiosInstance.put(`employeeDashboard/editDateAndTime/${reserveId}?token=${getCookie()}`, {newTime : newData} );
}

//reserves that belongs to employee its self
export function provideEmployeeReserves(employeeId){
    return axiosInstance.get(`employeeDashboard/extractReserves/${employeeId}?token=${getCookie()}`);
}