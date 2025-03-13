import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:7070/api",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export default api;