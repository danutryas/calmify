import { createContext, useEffect, useState } from "react";
import axios from "../API/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuth: false,
    access_token: "",
  });
  const [user, setUser] = useState({});

  const userLogin = (dataForm) => {
    axios.post("/login", dataForm).then((response) => {
      if (response.data.access_token) {
        localStorage.setItem("AT", response.data.access_token);
        setAuth({
          isAuth: true,
          access_token: response.data.access_token,
        });
        // setSuccessLogin(true);
        // setErrorLogin({ error: false, errorMsg: "" });
        // setTimeout(() => {
        //   navigate("/");
        // }, 2000);
      }
    });
  };
  const getUserData = (token) => {
    axios
      .get("/user", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUser(response.data);
      });
  };
  const userLogout = () => {
    axios
      .post("/logout", {
        headers: { Authorization: `Bearer ${auth.access_token}` },
      })
      .then(() => {
        localStorage.clear();
      });
  };
  const authStatus = () => {
    const accessToken = localStorage.getItem("AT");
    if (accessToken) {
      setAuth({ isAuth: true, access_token: accessToken });
      getUserData(accessToken);
    }
  };

  useEffect(() => {
    authStatus();
  }, []);

  return (
    <AuthContext.Provider
      value={{ auth, setAuth, userLogin, user, userLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
