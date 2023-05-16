import Input from "./Input";

function LoginPage() {
  const onSubmitButton = () => {};

  return (
    <div className="bg-[#F9F9FA] h-screen ">
      <div className=" bg-white w-[640px] mx-auto  px-24 py-14 rounded-2xl flex flex-col gap-8 absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
        <div className="flex flex-col gap-2 ">
          <p className="text-grey-1">Welcome back</p>
          <h1 className="text-black-1 text-2xl font-bold">
            Login to your Account
          </h1>
        </div>
        <div className="flex flex-col gap-6">
          <Input label={"Email"} type="email" />
          <Input
            label={"Password"}
            type={"password"}
            textLink="Forgot ?"
            link="https://www.google.com"
          />
        </div>
        <button className="w-full bg-[#2E2BA6] py-4 text-white rounded-xl font-bold box-shadow-blue">
          Login now
        </button>
        <div className="flex justify-center gap-3">
          <p>Don't Have An Account ? </p>
          <a href="/register" className="text-[#2E2BA6]">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
