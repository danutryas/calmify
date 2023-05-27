import { useContext } from "react";
import AuthContext from "../Context/Auth";
import {
  BackIcon,
  CallIcon,
  EditIcon,
  LogOutIcon,
  NotificationIcon,
} from "../Icons";
import { useNavigate } from "react-router";

const SettingProfile = () => {
  const { user, userLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);
  const NavigationContol = (url) => {
    navigate(url);
  };

  return (
    <div className="w-full min-h-screen h-full bg-[#F9F9FA]">
      <div className="container mx-auto">
        <div className=" flex justify-between border-b-2 p-8">
          <button className="" onClick={() => NavigationContol(-1)}>
            <BackIcon />
          </button>
          <h1 className="font-title text-5xl ">Settings</h1>
          <div className=""></div>
        </div>
        <div className="flex flex-col gap-5 pt-24">
          <div className="px-9 py-11 flex gap-6 items-center bg-white">
            <div className="relative">
              <img
                src={user.profile_photo_url}
                alt="user-profile"
                className="w-[160px] h-[160px] rounded-[60px]"
              />
              <div
                className="bg-[#FCB114] p-1 rounded-full absolute right-0 bottom-0 cursor-pointer"
                onClick={() => NavigationContol("/profile/change-profile")}
              >
                <EditIcon />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="capitalize font-bold text-3xl">{user.name}</h3>
              <p className="capitalize text-2xl">{user.role}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="px-16 py-5 bg-white flex gap-4 cursor-pointer">
              <CallIcon />
              <p className="text-lg">Kontak Kami</p>
            </div>
            <div className="px-16 py-5 bg-white flex gap-4 cursor-pointer">
              <NotificationIcon />
              <p className="text-lg">Notifikasi</p>
            </div>
          </div>
          <div
            className="px-16 py-5 bg-white flex gap-4 cursor-pointer"
            // onClick={}
          >
            <LogOutIcon />
            <p className="text-lg">Log out</p>
          </div>
          {/* logout */}
        </div>
      </div>
    </div>
  );
};
export default SettingProfile;
