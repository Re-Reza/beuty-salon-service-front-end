import axiosInstance from "./axiosInstance";
import {getCookie} from "./cookieProvider"

export function provideCategories() {
    return axiosInstance.get("reserve/provideCategories");
}

export function provideServiceOfCategory(categoryId){
    return axiosInstance.get(`reserve/provideServicesOfCategory/${categoryId}`);
}

export function provideEmployessOfServive(serviceId){
    return axiosInstance.get(`reserve/extractEmployeesOfService?serviceId=${serviceId}`)
}

export function provideEmployeeTimeWork(serviceId, employeeId){
    return axiosInstance.get(`reserve/getTimeWorkOfEmployee?serviceId=${serviceId}&employeeId=${employeeId}`)
}

export function confirmReserve( reserveData ){
    const token = getCookie()
    return axiosInstance.post(`reserve/addReserve?token=${token}`, reserveData);
}

export function provideDateRange(){
    return axiosInstance.get("reserve/provideDateRange");
}

export function provideEmployeesOfDate(date, serviceId){
    console.log("requesting")
    return axiosInstance.get(`reserve/getEmployeesOfDate?date=${date}&serviceId=${serviceId}`);
}