import { useNavigate } from "react-router";
import { BackIcon, EditIcon } from "../Icons";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/Auth";
import Input from "../Input";

const ChangeProfile = () => {
  const [newData, setNewData] = useState({ name: "", email: "" });
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const backNavigation = () => {
    navigate(-1);
  };
  useEffect(() => {
    if (user) {
      setNewData({ name: user.name, email: user.email });
    }
  }, [user]);
  const onChangeNewData = (e) => {
    setNewData((newData) => ({
      ...newData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="w-full min-h-screen h-full bg-[#F9F9FA] pt-16">
      <div className="flex flex-col  container mx-auto bg-white px-16 py-28">
        <div className=" flex justify-between border-b-2 pb-16">
          <button className="" onClick={backNavigation}>
            <BackIcon />
          </button>
          <h1 className="font-title text-6xl">Ubah Profil</h1>
          <div className=""></div>
        </div>
        <div className="flex flex-col gap-24 items-center pt-7">
          <div className="relative">
            <img
              src={user.profile_photo_url}
              alt=""
              className="h-[400px] w-[400px]  rounded-[160px]"
            />
            <div className="bg-[#FCB114] p-1 rounded-full absolute right-5 bottom-5 cursor-pointer scale-[2] ">
              <EditIcon />
            </div>
          </div>
          <div className="flex flex-col gap-16 w-full max-w-6xl">
            <div className="w-full flex flex-col gap-12 max-w-6xl">
              <Input
                type="text"
                value={newData.name}
                label="Nama"
                name="name"
                onChange={onChangeNewData}
              />
              <Input
                type="email"
                value={newData.email}
                label="Email"
                name="email"
                onChange={onChangeNewData}
              />
            </div>
            <button className="mainButton bg-[#2E2BA6] box-shadow-blue">
              Ubah Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChangeProfile;
