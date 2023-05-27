import logo from "./logo.svg";
import "./App.css";
import Input from "./Components/Input";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
  Navigate,
} from "react-router-dom";
import LoginPage from "./Components/Auth/login";
import RegisterUser from "./Components/Auth/registerUser";
import RegisterDoctor from "./Components/Auth/registerDoctor";
import { useContext } from "react";
import AuthContext from "./Components/Auth/Auth";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <div className="App">
      <Router>
        {/* {auth.isAuth ? (
          <></>
        ) : (
          <Routes>
            <Route path="/" />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register/user" element={<RegisterUser />} />
            <Route path="/register/psikolog" element={<RegisterDoctor />} />
          </Routes>
        )} */}
        <Routes>
          <Route path="/" />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register/user" element={<RegisterUser />} />
          <Route path="/register/psikolog" element={<RegisterDoctor />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
