import logo from "./logo.svg";
import "./App.css";
import Input from "./Components/Input";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/login";
import RegisterPage from "./Components/register";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
