import axios from "axios";

export default axios.create({
  baseURL: "https://whale-app-9pmvq.ondigitalocean.app/api",
  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin" : "*",
  },
  // params: {
  //   api_key: process.env.REACT_APP_API_KEY,
  // },
});
