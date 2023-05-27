import Header from "./header";
import Footer from "./footer";

function Article() {
    return (
        <div className="font-main">
            <Header />

            <section id="title">
                <div className="container text-mainText bg-white text-lg mx-auto text-center p-10 flex flex-col gap-10 items-center mb-10">
                    <h4 class="text-xl font-bold">Mindfulness Hub</h4>
                    <h2 class="text-6xl font-title text-mainDark">Article</h2>
                    <h2 className="text-6xl font-title text-[#000] px-56">Bersama Dalam Dukungan, Menguatkan Jiwa</h2>
                    <h5 className="text-xl text-mainDark px-56">Temukan ketenangan dan keseimbangan dalam hidup Anda. Dapatkan akses mudah ke beragam sumber daya dan latihan mindfulness yang membantu Anda meningkatkan kesadaran diri, mengurangi stres, dan meningkatkan kesejahteraan secara keseluruhan. Nikmati meditasi terpandu, latihan pernapasan, dan teknik mindfulness lainnya di Mindfulness Hub.</h5>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Article;
