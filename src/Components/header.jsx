import logo from "../img/logo/logo-a/Frame 3.png";
import notifImg from "../img/header-footer/Notification.png";
import { useContext } from "react";
import AuthContext from "./Context/Auth";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Header() {
  const { auth, user, userLogout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const NavigationContol = (url) => {
    navigate(url);
  };

  return (
    <div className="font-main">
      <div className="container mx-auto mt-4 mb-28 text-2xl font-bold">
        <div className="text-mainText flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="" className="w-64" />
          </Link>
          <div className="flex gap-6 h-[40px] ">
            <div className="relative">
              <span
                id="home"
                className={`${
                  location.pathname === "/"
                    ? "text-mainBlue after:absolute after:h-[4px] after:rounded-full after:w-[4px] after:bg-[#D23C8F] after:bottom-0 after:left-1/2 after:translate-x-1/2"
                    : "hover:opacity-90"
                }  active:opacity-80`}
              >
                <Link to="/">Home</Link>
              </span>
            </div>
            <div className="relative">
              <span
                id="community"
                className={`${
                  location.pathname === "/community"
                    ? "text-mainBlue after:absolute after:h-[4px] after:rounded-full after:w-[4px] after:bg-[#D23C8F] after:bottom-0 after:left-1/2 after:translate-x-1/2"
                    : "hover:opacity-90"
                }  active:opacity-80`}
              >
                <Link to="/community">Community</Link>
              </span>
            </div>{" "}
            <div className="relative">
              <span
                id="article"
                className={`${
                  location.pathname === "/article"
                    ? "text-mainBlue after:absolute after:h-[4px] after:rounded-full after:w-[4px] after:bg-[#D23C8F] after:bottom-0 after:left-1/2 after:translate-x-1/2"
                    : "hover:opacity-90"
                }  active:opacity-80`}
              >
                <Link to="/article">Article</Link>
              </span>{" "}
            </div>{" "}
            <div className="relative">
              <span
                id="consultation"
                className={`${
                  location.pathname === "/consultation"
                    ? "text-mainBlue after:absolute after:h-[4px] after:rounded-full after:w-[4px] after:bg-[#D23C8F] after:bottom-0 after:left-1/2 after:translate-x-1/2"
                    : "hover:opacity-90"
                }  active:opacity-80`}
              >
                <Link to="/consultation">Consultation</Link>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            {auth.isAuth ? (
              <>
                <div className="relative h-[40px]">
                  <span
                    id="consultation"
                    className={`${
                      location.pathname === "/dashboard"
                        ? "text-mainBlue after:absolute after:h-[4px] after:rounded-full after:w-[4px] after:bg-[#D23C8F] after:bottom-0 after:left-1/2 after:translate-x-1/2"
                        : "hover:opacity-90"
                    }  active:opacity-80`}
                  >
                    <Link
                      id="dashboard"
                      className="text-mainBlue"
                      to="/dashboard"
                    >
                      Dashboard
                    </Link>
                  </span>
                </div>
                <div className="flex gap-4 items-center">
                  <img
                    src={notifImg}
                    alt="Notif Img"
                    onClick={() => NavigationContol("/profile/notification")}
                    className="cursor-pointer"
                  />
                  {user ? (
                    <img
                      src={user.profile_photo_url}
                      alt=""
                      className="rounded-full cursor-pointer"
                      onClick={() => NavigationContol("/profile/settings")}
                    />
                  ) : (
                    <div className="w-20 h-20 bg-mainPink rounded-full"></div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link
                  id="signIn"
                  type="button"
                  to="/login"
                  className="px-4 py-2 cursor-pointer hover:opacity-90 active:opacity-80"
                >
                  Sign In
                </Link>
                <button
                  id="signUp"
                  className="text-white bg-mainBlue px-4 py-2 rounded-md shadow-xl shadow-mainBlue/50 cursor-pointer hover:opacity-80 active:opacity-70 transition duration-300"
                  type="button"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
