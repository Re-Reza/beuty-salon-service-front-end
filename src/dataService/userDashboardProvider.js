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
    console.log(isHistory);
    return axiosInstance.get(`userDashboard/userReserves?token=${getCookie()}&isHistory=${isHistory}`);
}