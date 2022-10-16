import axiosInstance from "./axiosInstance";
import { getCookie } from "./cookieProvider";

export function provideEmployeeInfo(){
    return axiosInstance.get( `employeeDashboard/provideEmployeeInfo?token=${getCookie()}` );
}

export function provideCustomerReserves(employeeId){
    return axiosInstance.get( `employeeDashboard/extractCustomerList?employeeId=${employeeId}&token=${getCookie()}` );
}

export function setFinalTime(reserveId, newData){
    return axiosInstance.put(`employeeDashboard/editDateAndTime/${reserveId}?token=${getCookie()}`, newData);
}

export function getPlanDates(){
    return axiosInstance.get(`employeeDashboard/providePlanDates?token=${getCookie()}`);
}

export function setWeekPlan(data, isFirstWeek){
    console.log(isFirstWeek);
    return axiosInstance.post(`employeeDashboard/setWeeklyCustomerQuantity?isFirstWeek=${isFirstWeek}&token=${getCookie()}`, data);
} 