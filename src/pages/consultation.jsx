import { ConselorCard, OtherConselorCard } from "../Components/conselorCard";
import Header from "../Components/header";
import Footer from "../Components/footer";

const ConsultationPage = () => {
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
              <ConselorCard />
              <ConselorCard />
              <ConselorCard />
              <ConselorCard />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-9	gap-y-16 justify-items-center ">
            <OtherConselorCard />
            <OtherConselorCard />
            <OtherConselorCard />
            <OtherConselorCard />
            <OtherConselorCard />
            <OtherConselorCard />
            <OtherConselorCard />
            <OtherConselorCard />
            <OtherConselorCard />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ConsultationPage;
