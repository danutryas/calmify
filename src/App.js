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

function App() {
  return (
    <div className="App">
      <Router>
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
