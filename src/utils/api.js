import axios from "axios";

const api = axios.create({
  baseURL: "https://carehub-backend-1-qtxt.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:7070/api",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default api;
