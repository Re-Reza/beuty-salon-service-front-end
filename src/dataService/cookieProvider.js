import Cookies from "js-cookie";

export function getCookie(){
    console.log(Cookies.get("authToken") )
    return Cookies.get("authToken");
}

// export function setCookie(){

// }

export function removeCookie(){
    const a = Cookies.remove("authToken");
    console.log(a)
}

