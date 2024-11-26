import axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
});

axiosInstance.interceptors.response.use((response) => {
  return response.data;
});

export default axiosInstance;
