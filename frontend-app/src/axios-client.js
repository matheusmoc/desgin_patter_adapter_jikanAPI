import axios from "axios";

const axiosClient = axios.create({
//  baseURL:`${import.meta.env.VITE_API_BASE_URL}/api`,
  baseURL:"http://localhost:8000/api",
});

// Add a request interceptor

axiosClient.interceptors.request.use((config) => {
  // Do something before request is sent
  const token = localStorage.getItem("ACCESS_TOKEN");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Add a response interceptor

axiosClient.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },

  (error) => {
    try {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      const { response } = error;
      if (response.status === 401) {
        localStorage.removeItem("ACCESS_TOKEN");
      }
    } catch (e) {
      console.error(e);
    }
    throw error;
  }
);

export default axiosClient;
