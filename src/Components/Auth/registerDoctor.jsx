import { useRef, useState } from "react";
import Input from "../Input";

function RegisterDoctor() {
  const [account, setAccount] = useState({
    email: "",
    password: "",
    name: "",
    role: "psikolog",
    ijazah: null,
    sertifikasi: null,
  });
  const [validationState, setValidationState] = useState({
    email: "",
    password: "",
  });
  const onSubmitButton = () => {
    validation(account.email, account.password);
    // if (validationState.email === "" && validationState.password === "") {
    //   // validation complete
    // } else {
    // }
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
          <h1 className="text-black-1 text-2xl font-bold">Create an account</h1>
        </div>
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
              name="password"
              onChange={onChangeInput}
            />
            {validationState.password !== "" ? (
              <p className="text-red-500 text-xs">{validationState.password}</p>
            ) : (
              ""
            )}
          </div>
          <Input
            type="text"
            label="Name"
            onChange={onChangeInput}
            name="name"
          />
          <Input
            type="file"
            label="Ijazah Terakhir"
            onChange={onChangeInput}
            name="ijazah"
          />
          <Input
            type="file"
            label="Sertifikat"
            onChange={onChangeInput}
            name="sertifikasi"
          />
        </div>
        <button
          className="w-full bg-[#2E2BA6] py-4 text-white rounded-xl font-bold box-shadow-blue"
          onClick={onSubmitButton}
        >
          Create account
        </button>
        <div className="flex justify-center gap-3">
          <p>Already have an account ? </p>
          <a href="/login" className="text-[#2E2BA6]">
            Log In
          </a>
        </div>
      </div>
    </div>
  );
}

export default RegisterDoctor;
