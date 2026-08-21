import axios from "axios";

const API = axios.create({
    baseURL: "https://hospital-management-backend-prlj.onrender.com"
});

export default API;
