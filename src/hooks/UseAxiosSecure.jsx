import { use, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const useAxiosSecure = () => {
  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Request interceptor
    const requestInterceptor = axiosInstance.interceptors.request.use(
      async (config) => {
        if (user) {
          try {
            const token = await user.getIdToken(); // 🔥 correct way
            config.headers.Authorization = `Bearer ${token}`;
          } catch (err) {
            console.log("Token error:", err);
          }
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    //  Response interceptor
    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const status = error?.response?.status;

        if (status === 401 || status === 403) {
          try {
            await logOut();
          } catch (err) {
            console.log(err);
          }
          navigate("/login");
        }

        return Promise.reject(error);
      }
    );

    //  Cleanup (important)
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [user, logOut, navigate]);

  return axiosInstance;
};

export default useAxiosSecure;