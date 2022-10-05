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
