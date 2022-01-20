import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: {
    "X-API-Key": process.env.REACT_APP_API_KEY,
    Accept: "application/json"
  },
});

export default instance