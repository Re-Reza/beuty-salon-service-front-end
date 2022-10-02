import axios from "axios";

const axiosInstance = axios.create({
    baseURL : "http://localhost:4000/api/",
    timeout : 10000
});

// axios.post("http://localhost:4000/api/login", {
//         phone: "9900",
//         password : "LCV9c9"
//     }).then( res => {
//         console.log(res) ;
//     })
export default axiosInstance;
