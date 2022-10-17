import axiosInstance from "./axiosInstance";
import { getCookie } from "./cookieProvider";

export function getUserRole(authToken){
    return axiosInstance.get(`home/provideUserRole?token=${authToken}`)
}

export function getInfo(){
    return axiosInstance.get(`userDashboard/userInfo/?token=${getCookie()}`);
}
//اگر از تاریخ رزروی گذشته بود در لیست تاریخچه برود
export function provideReserveList(isHistory){
    return axiosInstance.get(`userDashboard/userReserves?token=${getCookie()}&isHistory=${isHistory}`);
}

export function cancelReservation(reserveId) {
    return axiosInstance.delete(`userDashboard/userDeleteReserve/${reserveId}?token=${getCookie()}`);
}

export function changeUserInfo(newData){
    console.log(newData);
    return axiosInstance.put(`userDashboard/changeUserInfo?token=${getCookie()}`, newData);
}

export function provideGeneralInfo(){
    return axiosInstance.get(`userDashboard/generalInfo?token=${getCookie()}`);
}

export function provideMessages(){
    return axiosInstance.get(`userDashboard/userMessages?token=${getCookie()}`);
}

export function readMessage(data){
    return axiosInstance.post(`userDashboard/readMessage?token=${getCookie()}`, data);
}

export function searchByDate(date, isHistory){
    return axiosInstance.get(`userDashboard/searhReserveByDate?&date=${date}&isHistory=${isHistory}&token=${getCookie()}`);
}