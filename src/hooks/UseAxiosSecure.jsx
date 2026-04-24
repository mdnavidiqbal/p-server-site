// import { use, useEffect } from 'react'
// import { useNavigate } from 'react-router'
// import axios from 'axios'
// import { AuthContext } from '../provider/AuthProvider'


// const axiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
// baseURL: import.meta.env.VITE_API_URL,
//   withCredentials: true,
// })
// const useAxiosSecure = () => {

//   const { user, logOut, loading } = use(AuthContext)
//   const navigate = useNavigate()

//   useEffect(() => {
//     if (!loading && user.getIdToken) {
//       // Add request interceptor
//       const requestInterceptor = axiosInstance.interceptors.request.use(
//         config => {
//           config.headers.Authorization = `Bearer ${user.accessToken}`
//           return config
//         }
//       )

//       // Add response interceptor
//       const responseInterceptor = axiosInstance.interceptors.response.use(
//         res => res,
//         err => {
//           if (err?.response?.status === 401 || err?.response?.status === 403) {
//             logOut()
//               .then(() => {
//                 console.log('Logged out successfully.')
//               })
//               .catch(console.error)
//             navigate('/login')
//           }
//           return Promise.reject(err)
//         }
//       )

//       // Cleanup to prevent multiple interceptors on re-renders
//       return () => {
//         axiosInstance.interceptors.request.eject(requestInterceptor)
//         axiosInstance.interceptors.response.eject(responseInterceptor)
//       }
//     }
//   }, [user, loading, logOut, navigate])

//   return axiosInstance
// }
// export default useAxiosSecure


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
    // ✅ Request interceptor
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

    // ✅ Response interceptor
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

    // ✅ Cleanup (important)
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [user, logOut, navigate]);

  return axiosInstance;
};

export default useAxiosSecure;