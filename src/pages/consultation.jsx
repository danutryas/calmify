import { ConselorCard, OtherConselorCard } from "../Components/conselorCard";
import Header from "../Components/header";
import Footer from "../Components/footer";
import { useContext, useEffect } from "react";
import PsikologContext from "../Components/Context/psikologContext";
import AuthContext from "../Components/Context/Auth";

const ConsultationPage = () => {
  const { psikolog } = useContext(PsikologContext);
  useEffect(() => {
    console.log(psikolog);
  }, [psikolog]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);
  return (
    <>
      <Header />
      <section className="mb-48 -mt-14">
        <div className="container bg-white text-lg flex flex-col gap-16 items-center mx-auto">
          <div className="flex flex-col gap-4 items-center">
            <h4 className="text-3xl font-bold  text-[#D23C8F]">eConselor</h4>
            <h1 className="text-[#272D3D] text-7xl font-title">Consultation</h1>
          </div>
          <h2 className="text-6xl font-title text-black">
            Buat Janji Mudah dan Cepat
          </h2>
          <h5 className="text-xl text-mainDark text-center max-w-[860px]">
            Bantuan konseling langsung dalam genggaman Anda. Dapatkan layanan
            konseling profesional secara online yang praktis dan terpercaya.
            Diskusikan masalah Anda, temukan solusi, dan tingkatkan kesehatan
            mental Anda dengan eCounselor.
          </h5>
        </div>
      </section>
      <section className="  py-20 px-28 bg-[#F4F5F7] flex flex-col gap-20">
        <div className="container flex flex-col gap-16 mx-auto">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-3xl tracking-wide">
              Konselor Rekomendasi
            </h3>
            <p className="text-xl text-[#636363]">
              Konselor yang kami cocokan dengan profil anda, sehingga dapat kami
              rekomendasikan
            </p>
          </div>
          <div className="w-full">
            <div className="scroll-smooth whitespace-nowrap overflow-x-scroll pb-4">
              {psikolog
                ? psikolog.map((psikolog, index) => (
                    <ConselorCard
                      key={index}
                      name={psikolog.name}
                      imgSrc={psikolog.profile_photo_url}
                      specialization={psikolog.spesialisasi}
                      id={psikolog.id}
                    />
                  ))
                : ""}
              {psikolog
                ? psikolog.map((psikolog, index) => (
                    <ConselorCard
                      key={index}
                      name={psikolog.name}
                      imgSrc={psikolog.profile_photo_url}
                      specialization={psikolog.spesialisasi}
                      id={psikolog.id}
                    />
                  ))
                : ""}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-9	gap-y-16 justify-items-center ">
            {psikolog
              ? psikolog.map((psikolog, index) => (
                  <OtherConselorCard
                    key={index}
                    name={psikolog.name}
                    imgSrc={psikolog.profile_photo_url}
                    id={psikolog.id}
                  />
                ))
              : ""}
            {psikolog
              ? psikolog.map((psikolog, index) => (
                  <OtherConselorCard
                    key={index}
                    name={psikolog.name}
                    imgSrc={psikolog.profile_photo_url}
                    id={psikolog.id}
                  />
                ))
              : ""}
            {psikolog
              ? psikolog.map((psikolog, index) => (
                  <OtherConselorCard
                    key={index}
                    name={psikolog.name}
                    imgSrc={psikolog.profile_photo_url}
                    id={psikolog.id}
                  />
                ))
              : ""}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ConsultationPage;
