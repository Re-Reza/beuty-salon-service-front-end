import axiosInstance from "./axiosInstance";
import { getCookie } from "./cookieProvider";

export function getUserRole(authToken){
    return axiosInstance.get(`home/provideUserRole?token=${authToken}`)
}