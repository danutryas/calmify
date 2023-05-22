import logo from "./logo.svg";
import "./App.css";
import Input from "./Components/Input";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/login";
import RegisterPage from "./Components/register";
import LandingPage from "./Components/landing-page";
import Dashboard from "./Components/dashboard";
import Article from "./Components/article";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/article" element={<Article />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
