import axios from "axios";

const MyAxios = axios.create({
  baseURL: "https://machine-task-n99k.onrender.com/api/admin",
});
export default MyAxios;

