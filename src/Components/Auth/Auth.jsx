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
  const authStatus = () => {
    const accessToken = localStorage.getItem("AT");
    if (accessToken) {
      setAuth({ isAuth: true, access_token: accessToken });
    }
  };

  useEffect(() => {
    authStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, userLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
