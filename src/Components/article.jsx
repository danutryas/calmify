import Header from "./header";
import Footer from "./footer";
import card1 from "../img/article/article1.png"
import card2 from "../img/article/article2.png"
import card3 from "../img/article/article3.png"
import card4 from "../img/article/article4.png"
import card5 from "../img/article/article5.png"
import card6 from "../img/article/article6.png"

function Article() {
    return (
        <div className="font-main">
            <Header />

            <section id="title">
                <div className="container text-[#000000B2] bg-white text-lg mx-auto text-center p-10 flex flex-col gap-20 items-center mb-10">
                    <div>
                        <h4 class="text-xl font-bold text-mainText mb-6">Mindfulness Hub</h4>
                        <h2 class="text-6xl font-title text-mainDark">Article</h2>
                    </div>
                    <h3 className="text-[5rem] leading-[4rem] font-title text-[#000] px-56">Bersama Dalam Dukungan, Menguatkan Jiwa</h3>
                    <h5 className="text-xl px-56">Temukan ketenangan dan keseimbangan dalam hidup Anda. Dapatkan akses mudah ke beragam sumber daya dan latihan mindfulness yang membantu Anda meningkatkan kesadaran diri, mengurangi stres, dan meningkatkan kesejahteraan secara keseluruhan. Nikmati meditasi terpandu, latihan pernapasan, dan teknik mindfulness lainnya di Mindfulness Hub.</h5>
                    <div>
                        <h4 className="text-5xl font-title text-[#000] px-56 mb-6">Artikel</h4>
                        <p>Kami menyediakan artikel yang kamu butuhkan</p>
                    </div>
                </div>
            </section>
            <section id="card">
                <div className="container mx-auto text-[#000] grid grid-cols-3 gap-x-16 gap-y-24 mb-40">
                    {/* card 1 */}
                    <div className="flex flex-col gap-4 p-6 bg-white shadow-[-20px_30px_60px_-30px_rgba(0,0,0,0.25)] rounded-2xl">
                        <img src={card1} alt="card 1" className="w-full" />
                        <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col gap-4 mb-3">
                                <h5 className="text-2xl font-bold">Kesehatan Mental Remaja</h5>
                                <p className="text-xl">Kata-kata itu sering terdengar pada anak-anak remaja zaman sekarang, untuk membully maupun melamahkan lawan bicara. </p>
                            </div>
                            <div className="flex gap-1 items-center text-xl">
                                <div className="w-12 mr-4">
                                    <img src={card1} alt="card 1" className="rounded-full" />
                                </div>
                                <span className="text-[#4D4D4D]">by vark bob</span><span className="text-[#4D4D4D80] font-bold">• 5 min read</span>
                            </div>
                        </div>
                    </div>

                    {/* card 2 */}
                    <div className="flex flex-col gap-4 p-6 bg-white shadow-[-20px_30px_60px_-30px_rgba(0,0,0,0.25)] rounded-2xl">
                        <img src={card2} alt="card 2" className="w-full" />
                        <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col gap-4 mb-3">
                                <h5 className="text-2xl font-bold">Back to School Shopping!</h5>
                                <p className="text-xl">Suspendisse sem dui, sodales quis nunc sit, hendrerit porta risus. Nunc quis augue vitae libero fermentum eleifend eu sit amet magna. Curabitur gravida quis dolor ac pharetra. Nulla ultricies fringilla leo varius fringil...</p>
                            </div>
                            <div className="flex gap-1 items-center text-xl">
                                <div className="w-12 mr-4">
                                    <img src={card1} alt="card 1" className="rounded-full" />
                                </div>
                                <span className="text-[#4D4D4D]">by vark bob</span><span className="text-[#4D4D4D80] font-bold">• 5 min read</span>
                            </div>
                        </div>
                    </div>

                    {/* card 3 */}
                    <div className="flex flex-col gap-4 p-6 bg-white shadow-[-20px_30px_60px_-30px_rgba(0,0,0,0.25)] rounded-2xl">
                        <img src={card3} alt="card 3" className="w-full" />
                        <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col gap-4 mb-3">
                                <h5 className="text-2xl font-bold">Kesehatan Mental Remaja</h5>
                                <p className="text-xl">kunci kebahagiaan dan kualitas hidup yang baik. Dalam dunia yang semakin sibuk dan penuh tekanan. mencintai diri sendiri adalah kuncinya.</p>
                            </div>
                            <div className="flex gap-1 items-center text-xl">
                                <div className="w-12 mr-4">
                                    <img src={card1} alt="card 1" className="rounded-full" />
                                </div>
                                <span className="text-[#4D4D4D]">by vark bob</span><span className="text-[#4D4D4D80] font-bold">• 5 min read</span>
                            </div>
                        </div>
                    </div>

                    {/* card 4 */}
                    <div className="flex flex-col gap-4 p-6 bg-white shadow-[-20px_30px_60px_-30px_rgba(0,0,0,0.25)] rounded-2xl">
                        <img src={card4} alt="card 4" className="w-full" />
                        <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col gap-4 mb-3">
                                <h5 className="text-2xl font-bold">Kesehatan Mental Remaja</h5>
                                <p className="text-xl">Kata-kata itu sering terdengar pada anak-anak remaja zaman sekarang, untuk membully maupun melamahkan lawan bicara. </p>
                            </div>
                            <div className="flex gap-1 items-center text-xl">
                                <div className="w-12 mr-4">
                                    <img src={card1} alt="card 1" className="rounded-full" />
                                </div>
                                <span className="text-[#4D4D4D]">by vark bob</span><span className="text-[#4D4D4D80] font-bold">• 5 min read</span>
                            </div>
                        </div>
                    </div>

                    {/* card 5 */}
                    <div className="flex flex-col gap-4 p-6 bg-white shadow-[-20px_30px_60px_-30px_rgba(0,0,0,0.25)] rounded-2xl">
                        <img src={card5} alt="card 5" className="w-full" />
                        <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col gap-4 mb-3">
                                <h5 className="text-2xl font-bold">Kesehatan Mental Remaja</h5>
                                <p className="text-xl">Kata-kata itu sering terdengar pada anak-anak remaja zaman sekarang, untuk membully maupun melamahkan lawan bicara. </p>
                            </div>
                            <div className="flex gap-1 items-center text-xl">
                                <div className="w-12 mr-4">
                                    <img src={card1} alt="card 1" className="rounded-full" />
                                </div>
                                <span className="text-[#4D4D4D]">by vark bob</span><span className="text-[#4D4D4D80] font-bold">• 5 min read</span>
                            </div>
                        </div>
                    </div>

                    {/* card 6 */}
                    <div className="flex flex-col gap-4 p-6 bg-white shadow-[-20px_30px_60px_-30px_rgba(0,0,0,0.25)] rounded-2xl">
                        <img src={card6} alt="card 6" className="w-full" />
                        <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col gap-4 mb-3">
                                <h5 className="text-2xl font-bold">Kesehatan Mental Remaja</h5>
                                <p className="text-xl">Kata-kata itu sering terdengar pada anak-anak remaja zaman sekarang, untuk membully maupun melamahkan lawan bicara. </p>
                            </div>
                            <div className="flex gap-1 items-center text-xl">
                                <div className="w-12 mr-4">
                                    <img src={card1} alt="card 1" className="rounded-full" />
                                </div>
                                <span className="text-[#4D4D4D]">by vark bob</span><span className="text-[#4D4D4D80] font-bold">• 5 min read</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="pagination">
                <div className="container mx-auto flex gap-4 justify-center text-[#5B5B5B] text-2xl mb-40">
                    <div className="flex justify-center items-center w-16 h-16 rounded-xl hover:bg-[#F2994A] hover:text-white"><div className="triangle left"></div></div>
                    <div className="flex justify-center items-center shadow-lg w-16 h-16 rounded-xl hover:bg-[#F2994A] hover:text-white">1</div>
                    <div className="flex justify-center items-center shadow-lg w-16 h-16 rounded-xl hover:bg-[#F2994A] hover:text-white">2</div>
                    <div className="flex justify-center items-center shadow-lg w-16 h-16 rounded-xl hover:bg-[#F2994A] hover:text-white">3</div>
                    <div className="flex justify-center items-center shadow-lg w-16 h-16 rounded-xl hover:bg-[#F2994A] hover:text-white">4</div>
                    <div className="flex justify-center items-center shadow-lg w-16 h-16 rounded-xl hover:bg-[#F2994A] hover:text-white">• • •</div>
                    <div className="flex justify-center items-center w-16 h-16 rounded-xl hover:bg-[#F2994A] hover:text-white"><div className="triangle right"></div></div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Article;
