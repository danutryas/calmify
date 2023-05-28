import logo from "../img/logo/logo-a/Frame 3.png";

function Footer() {
  return (
    <div className="font-main py-32">
      <div className="container text-mainText text-xl mx-auto grid grid-cols-2 gap-8">
        <div className="col-start-1 col-end-2 row-start-1  w-64">
          <img src={logo} alt="logo" />
        </div>
        <div className="col-start-1 grid gap-8 grid-cols-3 text-mainText">
          <div
            id="about"
            className="text-[#303030] text-2xl font-bold col-start-1"
          >
            About
          </div>
          <div className="text-xl col-start-2 col-end-4">081237130753</div>
          <div
            id="about"
            className="text-[#303030] text-2xl font-bold col-start-1"
          >
            Courses
          </div>
          <div className="text-xl col-start-2 col-end-4">
            Email: Info@Calmify.com
          </div>
          <div
            id="about"
            className="text-[#303030] text-2xl font-bold col-start-1"
          >
            Career
          </div>
          <div className="text-xl col-start-2 col-end-4">
            Jl. Telekomunikasi. 1, Terusan Buahbatu-Bojongsoang, Telkom
            University
          </div>
        </div>
        <div className="pl-20 flex flex-col items-start justify-start gap-5 h-full">
          <h5 className="text-4xl font-bold text-[#303030]">Subscriber</h5>
          <p>Daftar untuk menerima buletin Calmify</p>
          <div className="flex gap-10 justify-between w-full">
            <input
              type="text"
              className="border border-primary rounded-lg w-full  px-4"
              placeholder="Masukan Email"
            />
            <button
              type="submit"
              className="bg-mainBlue shadow-xl shadow-mainBlue/50 mainButton"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
