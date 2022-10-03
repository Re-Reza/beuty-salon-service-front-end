import axiosInstance from "./axiosInstance";

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