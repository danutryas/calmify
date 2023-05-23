import { useEffect, useState } from "react";
import Input from "../Input";
// import axios from "../API/axios";
import axios from "axios";

function LoginPage() {
  const [account, setAccount] = useState({ email: "", password: "" });
  const [errorLogin, setErrorLogin] = useState({ error: false, errorMsg: "" });
  const [validationState, setValidationState] = useState({
    email: "",
    password: "",
  });
  const onSubmitButton = () => {
    validation(account.email, account.password);
    if (validationState.email === "" && validationState.password === "") {
      // validation complete
      // try {
      axios.post(
        "https://f406-113-11-180-8.ngrok-free.app/api/login",
        JSON.stringify({ account }),
        { headers: { "Content-Type": "application/json" } }
      );
      // .then((response) => {
      //   console.log(response);
      // }
      // );
      // } catch (e) {
      //   console.log(e)
      // }
    } else {
      console.log(validationState);
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
    <div className="bg-[#F9F9FA] h-screen">
      <div className=" bg-white w-[640px] mx-auto px-24 py-14 rounded-2xl flex flex-col gap-8 absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-grey-1">Selamat Datang,</p>
          <h1 className="text-black-1 text-2xl font-bold">
            Masuk ke akun Anda
          </h1>
        </div>
        {errorLogin.error ? (
          <div className="w-full bg-red-500 px-4 py-4 rounded-md transition slide-in ">
            <p className="text-white font-bold">{errorLogin.errorMsg}</p>
          </div>
        ) : (
          ""
        )}

        <div className="flex flex-col gap-6">
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
              textLink="Lupa Password?"
              link="https://www.google.com"
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
          Masuk
        </button>
        <div className="flex justify-center gap-3">
          <p>Belum Punya Akun?</p>
          <a href="/register/user" className="text-[#2E2BA6]">
            Mendaftar
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
