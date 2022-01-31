import axios from "axios";
import { store } from "./redux/store";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: {
    "X-API-Key": process.env.REACT_APP_API_KEY,
    "X-Auth": store.getState().auth.userToken,
    Accept: "application/json",
  },
});

export default instance;
