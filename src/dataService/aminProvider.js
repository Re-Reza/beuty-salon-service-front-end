import axiosInstance from "./axiosInstance";
import { getCookie } from "./cookieProvider";

export function provideReserveList(status) {
    return axiosInstance.get(`admin/extractReservesByStatus?token=${getCookie()}&reserveStatus=${status[0]}&reserveStatus=${status[1]}`);
}

export function deleteReserve(reserveId){
    return axiosInstance.delete(`admin/deleteReserve/${reserveId}?token=${getCookie()}`);
}

export function provideEmployeeList(){
    return axiosInstance.get(`admin/allEmployeesList?token=${getCookie()}`)
}

export function provideServices(){
    return axiosInstance.get(`admin/proviceServices?token=${getCookie()}`);''
}

export function changeEmployeeInfo(newData, personId){
    return axiosInstance.put(`admin/editEmployeeInfo/${personId}?token=${getCookie()}`, { newData});
}

export function addNewEmployee(newEmployee){
    return axiosInstance.post(`admin/addNewEmployee?token=${getCookie()}`, newEmployee );
}

export function searchEmployee(data){
    return axiosInstance.get(`admin/searchEmployee?data=${data}&token=${getCookie()}`)
}

export function sendMessageFromAdmin(messageData){
    return axiosInstance.post(`admin/sendMessage?token=${getCookie()}`, messageData);
}

export function deleteMessage(messageId){
    return axiosInstance.delete(`admin/deleteMessage/${messageId}?token=${getCookie()}`);
}

export function provideAllAdminMessages(){
    return axiosInstance.get(`admin/allAdminMessages?token=${getCookie()}`);
}

export function provideCategoriesServices(){
    return axiosInstance.get(`admin/provideCategoriesServices?token=${getCookie()}`);
}

export function editService(id, cost){
    return axiosInstance.put(`admin/editService?token=${getCookie()}`, {id, cost});
}

export function removeService (id, deleteSevice){
    return axiosInstance.delete(`admin/deleteService?id=${id}&deleteSevice=${deleteSevice}&token=${getCookie()}`);
}

export function addNewCategory(data){
    return axiosInstance.post(`admin/addNewServiceCategoey?token=${getCookie()}`, data);
}

export function searchReserveByEmOrCustomer(isEmployee, history, value, employeeIsSearching){
    console.log(isEmployee);
    console.log(employeeIsSearching);
    return axiosInstance.get(`admin/searchReservesByNameOrPhone?isEmployee=${isEmployee}&history=${history}&searchValue=${value}&employeeIsSearching=${employeeIsSearching}&token=${getCookie()}`);
}

export function searchReserveByDate(reserveDate, employeeIsSearching, history){
    return axiosInstance.get(`admin/searchInReservesByDate?reserveDate=${reserveDate}&employeeIsSearching=${employeeIsSearching}&history=${history}&token=${getCookie()}`);
}

export function provideEmployeeListForPdf(){
    return axiosInstance.get(`admin/provideFullInfoOfEmployees?token=${getCookie()}`);
}

export function provideEmployeeFinancialReport(id){
    return axiosInstance.get(`admin/employeeFinancialReport?employeeId=${id}&token=${getCookie()}`)
}
//}?token=${getCookie()}