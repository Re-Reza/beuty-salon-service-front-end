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

//}?token=${getCookie()}