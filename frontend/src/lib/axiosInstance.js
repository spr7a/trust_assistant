import axios from "axios";

// Ensure the base URL ends with a slash and includes /api
const baseURL = import.meta.env.VITE_API_BASE_URL.endsWith('/') 
    ? `${import.meta.env.VITE_API_BASE_URL}api/` 
    : `${import.meta.env.VITE_API_BASE_URL}/api/`;

export const axiosInstance = axios.create({
    baseURL: baseURL,
    withCredentials: true,
});

// Add request interceptor to include auth token
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add response interceptor to handle token storage
axiosInstance.interceptors.response.use(
    (response) => {
        // Store token from login responses
        if (response.data?.data?.token) {
            localStorage.setItem('token', response.data.data.token);
        }
        return response;
    },
    (error) => {
        // Clear token on auth errors
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
        }
        return Promise.reject(error);
    }
);