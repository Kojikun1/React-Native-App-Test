import axios from "axios";

const api = axios.create({
    baseURL: "https://api-rest-jwt.herokuapp.com"
})


export default api;