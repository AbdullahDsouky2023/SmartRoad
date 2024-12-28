import axios from "axios";

// Define headers interface for better type safety
interface CustomHeaders {
  Accept: string;
  "Accept-Encoding": string;
  "Accept-Language": string;
  "Cache-Control": string;
  Connection: string;
  Cookie: string;
  Host: string;
  "Upgrade-Insecure-Requests": string;
  "User-Agent": string;
}

export const headers: CustomHeaders = {
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
  "Accept-Encoding": "gzip, deflate",
  "Accept-Language": "ar-EG,ar;q=0.9,en-US;q=0.8,en;q=0.7",
  "Cache-Control": "max-age=0",
  "Connection": "keep-alive",
  "Cookie": "__test=23f1a5766049c779d5ec5c5439274ba5",
  "Host": "www.cartgate.wuaze.com",
  "Upgrade-Insecure-Requests": "1",
  "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
};

const api = axios.create({
  baseURL: 'http://www.cartgate.wuaze.com/api/',
  headers: headers,
  withCredentials: true, // Enable sending cookies
  timeout: 10000, // 10 seconds timeout
});

// Add request interceptor to ensure headers are set for every request
api.interceptors.request.use((config) => {
  config.headers = { ...config.headers, ...headers };
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Add response interceptor to handle common errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Handle specific error cases if needed
      console.error('API Error:', error.response.status, error.response.data);
    }
    return Promise.reject(error);
  }
);

export default api;