import logo from "./logo.svg";
import "./App.css";
import Input from "./Components/Input";

import LandingPage from "./Components/landing-page";
import Dashboard from "./Components/dashboard";
import CommunityPage from "./pages/community";
import DetailPostPage from "./pages/detailPost";
import ConsultationPage from "./pages/consultation";

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
import AuthContext from "./Components/Context/Auth";
import Notification from "./Components/Profile/notification";
import SettingProfile from "./Components/Profile/settings";
import ChangeProfile from "./Components/Profile/changeProfile";
import ArticlePage from "./pages/article";
import DetailArticle from "./Components/detail-article";
import AboutDoctor from "./Components/aboutDoctor";

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
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/community/post" element={<DetailPostPage />} />
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/register/user" element={<RegisterUser />} />
          <Route path="/register/psikolog" element={<RegisterDoctor />} />
          <Route path="/profile/notification" element={<Notification />} />
          <Route path="/profile/settings" element={<SettingProfile />} />
          <Route path="/profile/change-profile" element={<ChangeProfile />} />
          <Route path="/detail-article" element={<DetailArticle />} />
          <Route path="/consultation/aboutDoctor" element={<AboutDoctor />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
