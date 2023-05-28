import { createContext, useContext, useEffect, useState } from "react";
import axios from "../API/axios";
import AuthContext from "./Auth";

const PsikologContext = createContext();

export const PsikologProvider = ({ children }) => {
  const [psikolog, setPsikolog] = useState([]);
  const { auth } = useContext(AuthContext);

  const getPsikolog = () => {
    axios
      .get("/psikolog", {
        headers: { Authorization: `Bearer ${auth.access_token}` },
      })
      .then((response) => setPsikolog(response.data));
  };

  useEffect(() => {
    getPsikolog();
  }, [auth]);

  return (
    <PsikologContext.Provider value={{ psikolog }}>
      {children}
    </PsikologContext.Provider>
  );
};

export default PsikologContext;
