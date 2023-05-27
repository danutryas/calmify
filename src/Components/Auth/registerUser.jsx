import { useRef, useState } from "react";
import Input from "../Input";
import { Link } from "react-router-dom";
import axios from "../API/axios";

function RegisterUser() {
  const [account, setAccount] = useState({
    email: "",
    password: "",
    name: "",
    role: "user",
  });
  const [validationState, setValidationState] = useState({
    email: "",
    password: "",
  });
  const onSubmitButton = () => {
    validation(account.email, account.password);
    if (isValidEmail(account.email) && isValidPassword(account.password)) {
      // try {
      //   axios.post("/register", JSON.stringify(account));
      // } catch (e) {
      //   console.error(e);
      // }
    } else {
    }
  };

  const validation = (email, password) => {
    if (!isValidEmail(email)) {
      setValidationState((prev) => ({ ...prev, email: "Email is not valid" }));
    } else {
      setValidationState((prev) => ({ ...prev, email: "" }));
    }
    if (!isValidPassword(password)) {
      setValidationState((prev) => ({
        ...prev,
        password: "Password is not valid",
      }));
    } else {
      setValidationState((prev) => ({ ...prev, password: "" }));
    }
  };
  const onChangeInput = (e) => {
    setAccount((account) => ({ ...account, [e.target.name]: e.target.value }));
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  const isValidPassword = (password) => {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
  };

  return (
    <div className="bg-[#F9F9FA] h-screen ">
      <div className=" bg-white w-[640px] mx-auto  px-24 py-14 rounded-2xl flex flex-col gap-8 absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-black-1 text-2xl font-bold">Buat sebuah akun</h1>
        </div>
        <div className="flex justify-center gap-6 text-[#5A5A5D]">
          <Link>Pengguna</Link>
          <p>|</p>
          <Link
            to="/register/psikolog"
            className="text-[#C6C6C6] hover:text-[#5A5A5D]"
          >
            Psikolog
          </Link>
        </div>
        <div className="flex flex-col gap-6">
          <Input
            type="text"
            label="Name"
            onChange={onChangeInput}
            name="name"
          />
          <div className="flex flex-col gap-0.5">
            <Input
              label={"Email"}
              type="email"
              onChange={onChangeInput}
              name="email"
            />
            {validationState.email !== "" ? (
              <p className="text-red-500 text-xs">{validationState.email}</p>
            ) : (
              ""
            )}
          </div>
          <div className="flex flex-col gap-0.5">
            <Input
              label={"Password"}
              type={"password"}
              name="password"
              onChange={onChangeInput}
            />
            {validationState.password !== "" ? (
              <p className="text-red-500 text-xs">{validationState.password}</p>
            ) : (
              ""
            )}
          </div>
        </div>
        <button
          className="w-full bg-[#2E2BA6] py-4 text-white rounded-xl font-bold box-shadow-blue"
          onClick={onSubmitButton}
        >
          Buat Akun
        </button>
        <div className="flex justify-center gap-3">
          <p className="text-[#BEBEBF]">Sudah Memiliki Akun ? </p>
          <a href="/login" className="text-[#2E2BA6] font-medium">
            Gabung
          </a>
        </div>
      </div>
    </div>
  );
}

export default RegisterUser;
