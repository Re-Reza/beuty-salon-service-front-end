import Cookies from "js-cookie";

export function getCookie(){

    return Cookies.get("authToken");
}

// export function setCookie(){

// }

export function removeCookie(){
    const a = Cookies.remove("authToken");
}

