import axiosInstance from "./axiosInstance";

import { getCookie } from "./cookieProvider";

export function headerRequest() {
    return axiosInstance.get(`home/provideUserInfo?token=${getCookie()}`);
}


