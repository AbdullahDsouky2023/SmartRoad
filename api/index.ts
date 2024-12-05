import axios from "axios";

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_KEY,
  headers: {
    'Authorization': `Bearer your_token_here`
  }
});



export default api