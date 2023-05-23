import axios from "axios";

export default axios.create({
  baseURL: "https://f406-113-11-180-8.ngrok-free.app/api",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin" : "*",
  },
  // params: {
  //   api_key: process.env.REACT_APP_API_KEY,
  // },
});
