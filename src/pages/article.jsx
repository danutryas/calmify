import Header from "../Components/header";
import Footer from "../Components/footer";
import { useEffect } from "react";
import Data from "../Components/Assets/dummy/article.json";
import Article from "../Components/article";

function ArticlePage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);
  console.log(Data);
  return (
    <div className="font-main">
      <Header />
      <section id="title">
        <div className="container text-mainText bg-white text-lg mx-auto text-center p-10 flex flex-col gap-10 items-center mb-10">
          <h4 className="text-xl font-bold">Mindfulness Hub</h4>
          <h2 className="text-6xl font-title text-mainDark">Article</h2>
          <h2 className="text-6xl font-title text-[#000] px-56">
            Bersama Dalam Dukungan, Menguatkan Jiwa
          </h2>
          <h5 className="text-xl text-mainDark px-56">
            Temukan ketenangan dan keseimbangan dalam hidup Anda. Dapatkan akses
            mudah ke beragam sumber daya dan latihan mindfulness yang membantu
            Anda meningkatkan kesadaran diri, mengurangi stres, dan meningkatkan
            kesejahteraan secara keseluruhan. Nikmati meditasi terpandu, latihan
            pernapasan, dan teknik mindfulness lainnya di Mindfulness Hub.
          </h5>
        </div>
      </section>
      <div className="py-9">
        <div className="grid grid-cols-3 container mx-auto gap-y-28">
          {Data.map((data) => {
            console.log(data);
            return <Article data={data} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ArticlePage;
