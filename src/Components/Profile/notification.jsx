import { Link, useNavigate } from "react-router-dom";
import { BackIcon } from "../Icons";
import NotificationImage from "../../img/notification.png";
const Notification = () => {
  const navigate = useNavigate();

  const backNavigation = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col  container mx-auto ">
      <div className=" flex justify-between border-b-2 p-16">
        <button className="" onClick={backNavigation}>
          <BackIcon />
        </button>
        <h1 className="font-title text-6xl">Notifikasi</h1>
        <div className=""></div>
      </div>
      <div className="flex flex-col gap-16 py-28 items-center">
        <div className="">
          <img src={NotificationImage} alt="" />
        </div>
        <div className="flex flex-col gap-6 items-center">
          <h2 className="font-bold text-4xl font-main text-[#2E2BA6]">
            Belum ada notifikasi
          </h2>
          <p className="text-3xl">
            Saat ini kamu belum mendapatkan notifikasi baru
          </p>
        </div>
      </div>
    </div>
  );
};
export default Notification;
