import Header from "./header";
import Footer from "./footer";
import {
    HeroImg,
    IconPengalaman,
    IconPenghargaan,
    MindfulnessHubIcon,
    SupportNetIcon,
    MindfulTipsIcon,
    ChatMind,
    SupportImg,
    EarthIcon,
    YellowQuote,
    BlueQuote,
    PinkQuote,
    ArticleImg,
    Rainbow
} from "../img/index"

function LandingPage() {
    return (
        <div class="bg-white font-main">
            <Header />

            <section id="hero">
                <div class="container text-mainText text-xl mx-auto flex mb-40">
                    <div class="w-[45%] pr-20 py-16">
                        <h1 class="text-mainDark text-[6rem] font-title leading-[5.5rem]">Membangun <br /> <span class="text-mainBlue"><span class="underline decoration-[5px] underline-offset-8 decoration-mainText">ketang</span>guhan</span>, satu langkah pada satu waktu.</h1>
                        <p class="col-start-1 col-end-2 py-6 leading-10">Angkat diri Anda ke tingkat baru dan mulailah perjalanan transformatif menuju pertumbuhan pribadi. Manfaatkan fitur-fitur yang kami sediakan dan buka kunci alat-alat untuk membangun versi diri yang lebih baik. Rangkullah kemungkinan-kemungkinan dan ungkapkan potensi sejati Anda!</p>
                        <div class="flex gap-6">
                            <button type="button" class="bg-mainBlue shadow-xl shadow-mainBlue/50 mainButton">
                                Article
                            </button>
                            <button type="button" class="bg-mainYellow shadow-xl shadow-mainYellow/50 mainButton">
                                Consultation
                            </button>
                        </div>
                    </div>
                    <div class="w-[55%] flex justify-end items-center relative">
                        <img src={HeroImg} alt="Hero Img" class="h-[95%] absolute -right-7" />
                        <div class="parent absolute bottom-48 left-0 z-10">
                            <div class="content absolute floatContent">
                                <div class="self-center">
                                    <img src={IconPengalaman} alt="Icon Pengalaman" /></div>
                                <div class="self-start">
                                    <h6 class="text-2xl text-mainDark font-bold">Pengalaman.</h6>
                                    <p class="text-lg text-mainText ">Konsultan Berpengalaman.</p>
                                </div>
                            </div>
                        </div>
                        <div class="parent absolute bottom-[45%] right-1/3 z-10">
                            <div class="content absolute floatContent">
                                <div class="self-center">
                                    <img src={IconPenghargaan} alt="Icon Penghargaan" />
                                </div>
                                <div class="self-start">
                                    <h6 class="text-2xl text-mainDark font-bold">Dapatkan konsultasi.</h6>
                                    <p class="text-lg text-mainText ">Layanan kami terpercaya.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="features">
                <div class="container mx-auto font-main text-mainText text-lg flex flex-col gap-4 items-center text-center mb-40">
                    <h4 class="text-xl font-bold">Pelayanan Kami</h4>
                    <h2 class="text-6xl font-title text-mainDark">Fitur & Manfaat</h2>
                    <div class="grid grid-cols-4 gap-6 mt-8">
                        <div class="shadow-xl p-8 rounded-[2rem]">
                            <div class="flex flex-col gap-4 justify-between items-center">
                                <img src={MindfulnessHubIcon} alt="MindfulnessHub Icon" class="w-16" />
                                <h3 class="text-mainDark text-3xl font-bold">Mindfulness Hub</h3>
                                <span class="mx-auto">Mindfulness Hub adalah fitur dalam aplikasi kesehatan mental yang menyediakan sumber daya dan alat untuk mempromosikan praktik kesadaran (mindfulness).
                                </span>
                            </div>
                        </div>
                        <div class="shadow-xl p-8 rounded-[2rem]">
                            <div class="flex flex-col gap-4 justify-between items-center">
                                <img src={SupportNetIcon} alt="Support Net Icon" class="w-16" />
                                <h3 class="text-mainDark text-3xl font-bold">Support Net</h3>
                                <span class="mx-auto">Membangun komunitas dukungan dalam aplikasi kesehatan mental. Pengguna dapat terhubung dengan orang lain yang menghadapi tantangan serupa, berbagi cerita, dan saling memberikan dukungan.</span>
                            </div>
                        </div>
                        <div class="shadow-xl p-8 rounded-[2rem]">
                            <div class="flex flex-col gap-4 justify-between items-center">
                                <img src={MindfulTipsIcon} alt="Mindful Tips" class="w-16" />
                                <h3 class="text-mainDark text-3xl font-bold">Mindful Tips</h3>
                                <span class="mx-auto">Memberikan tips praktis untuk meningkatkan kesejahteraan mental melalui konten terkurasi tentang pengelolaan stres, perawatan diri, pemikiran positif, dan ketangguhan.</span>
                            </div>
                        </div>
                        <div class="shadow-xl p-8 rounded-[2rem]">
                            <div class="flex flex-col gap-4 justify-between items-center">
                                <img src={ChatMind} alt="Chat Mind Icon" class="w-16" />
                                <h3 class="text-mainDark text-3xl font-bold">ChatMind</h3>
                                <span class="text-center">Memberikan tips praktis untuk meningkatkan kesejahteraan mental melalui konten terkurasi tentang pengelolaan stres, perawatan diri, pemikiran positif, dan ketangguhan.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="support" class="bg-[#092C4C] rounded-tl-[4rem] rounded-tr-[4rem]">
                <div class="container text-xl mx-auto flex pt-60 pb-80 mb-40 text-mainPink">
                    <div class="w-1/2 flex justify-start items-center relative">
                        <img src={SupportImg} alt="support" class="h-[115%] absolute" />
                        <div class=" parent absolute right-0 bottom-16 z-10">
                            <div class="content absolute right-12 bg-white text-center rounded-xl p-5 pt-12 w-72">
                                <img src={EarthIcon} alt="Earth Icon" class="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2" />
                                <h6 class="text-2xl text-mainDark font-bold">Positif Circle</h6>
                                <p class="text-lg text-mainText">Menyelesaikan permasalahan dengan bekomunikasi dengan yang lain adalah solusi yang baik </p>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/2 flex flex-col gap-6 py-8 pl-20">
                        <h4 class="text-3xl font-bold">
                            Support Net
                        </h4>
                        <h1 class="pr-40 text-white text-[4.4rem] font-title leading-[5rem]">Bersama Dalam Dukungan, Menguatkan Jiwa</h1>
                        <p class="pr-48 text-white/70 leading-10">Temukan dukungan dan solidaritas dalam komunitas kami. Terhubung, berbagi, dan dukung satu sama lain.</p>
                        <div class="flex gap-6 text-mainText">
                            <button type="button" class="bg-mainYellow shadow-xl shadow-mainYellow/50 mainButton">
                                Start Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonials">
                <div class="container text-lg mx-auto font-main text-mainText flex flex-col gap-4 items-center mb-60">
                    <h4 class="text-xl font-bold">Testimonials</h4>
                    <h2 class="text-6xl font-title text-mainDark">Apa Pendapat Orang Tentang Kami</h2>
                    <div class="grid grid-cols-3 gap-6 mt-8">
                        <div class="shadow-xl p-12 rounded-[2rem]">
                            <div class="flex flex-col gap-4 justify-between items-center">
                                <div class="flex justify-between w-full">
                                    <div class="w-12 h-12 bg-mainPink rounded-full"></div>
                                    <div>
                                        <h5 class="text-mainDark text-2xl font-bold">Dywan Malcom</h5>
                                        <p class="text-lg">Ireland</p>
                                    </div>
                                    <div class="w-12 h-12">
                                        <img src={YellowQuote} alt="Yellow Quote" />
                                    </div>
                                </div>
                                <span class="mx-auto">Study at their own pace and on their own schedule, which is ideal for those who have work, family, or other commitments </span>
                            </div>
                        </div>
                        <div class="shadow-xl p-12 rounded-[2rem]">
                            <div class="flex flex-col gap-4 justify-between items-center">
                                <div class="flex justify-between w-full">
                                    <div class="w-12 h-12 bg-mainPink rounded-full"></div>
                                    <div>
                                        <h5 class="text-mainDark text-2xl font-bold">Dywan Malcom</h5>
                                        <p class="text-lg">Ireland</p>
                                    </div>
                                    <div class="w-12 h-12">
                                        <img src={BlueQuote} alt="Blue Quote" />
                                    </div>
                                </div>
                                <span class="mx-auto">Study at their own pace and on their own schedule, which is ideal for those who have work, family, or other commitments </span>
                            </div>
                        </div>
                        <div class="shadow-xl p-12 rounded-[2rem]">
                            <div class="flex flex-col gap-4 justify-between items-center">
                                <div class="flex justify-between w-full">
                                    <div class="w-12 h-12 bg-mainPink rounded-full"></div>
                                    <div>
                                        <h5 class="text-mainDark text-2xl font-bold">Dywan Malcom</h5>
                                        <p class="text-lg">Ireland</p>
                                    </div>
                                    <div class="w-12 h-12">
                                        <img src={PinkQuote} alt="Pink Quote" />
                                    </div>
                                </div>
                                <span class="mx-auto">Study at their own pace and on their own schedule, which is ideal for those who have work, family, or other commitments </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="article">
                <div class="container mx-auto flex flex-col gap-6 items-center mb-40 text-mainText">
                    <h4 class="text-xl font-bold">Blog</h4>
                    <h2 class="text-6xl font-title text-mainDark">Article</h2>
                    <div class="flex mt-14 ">
                        <div class="w-3/5 flex justify-start">
                            <div class="overflow-hidden">
                                <img src={ArticleImg} alt="Article Img" class=" h-full object-cover" />
                            </div>
                        </div>
                        <div class="w-2/5 py-28 flex flex-col items-end">
                            <p class="text-mainBlue font-bold text-xl self-start pb-5 pr-20">27 April 2023</p>
                            <h1 class="text-mainDark text-5xl font-title">Pentingnya Kesehatan Mental</h1>
                            <p class="text-mainText text-xl pt-5 pb-10 pr-20">Jaga kesehatan mental Anda, kunci kebahagiaan dan kualitas hidup yang baik. Dalam dunia yang semakin sibuk dan penuh tekanan, penting bagi kita untuk memberikan perhatian serius pada kesehatan mental kita.</p>
                            <div class="flex justify-start self-start gap-6 text-mainText">
                                <button type="button" class="bg-mainYellow shadow-xl shadow-mainYellow/50 mainButton">
                                    Read More
                                </button>
                                <button type="button" class="bg-mainBlue shadow-xl shadow-mainBlue/50 mainButton">
                                    All Posts <span class="w-96">➔</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="rainbow">
                <div class="container p-48 mx-auto rounded-[2rem] mb-20 flex justify-center items-center bg-cover bg-mainBlue"
                    style={{
                        backgroundImage: `url(${Rainbow})`
                    }}
                >
                    <div class="flex flex-col gap-6 justify-center items-center">
                        <h1 class="text-white font-title text-center text-[6rem] leading-[6rem]">
                            Ayo mulai hari ini!
                        </h1>
                        <p class="text-white/60 text-3xl">Konsultasi bersama kami</p>
                        <div class="flex gap-6 mt-10">
                            <button type="button" class="bg-mainPink shadow-xl shadow-mainPink/70 mainButton">
                                Daftar Sekarang
                            </button>
                            <button type="button" class="bg-mainYellow shadow-xl shadow-mainYellow/50 mainButton">
                                Lihat Konsultan
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>

    );
}

=======
import Header from "./header";
import Footer from "./footer";
import {
    HeroImg,
    IconPengalaman,
    IconPenghargaan,
    SupportImg,
    EarthIcon,
    YellowQuote,
    BlueQuote,
    PinkQuote,
    ArticleImg,
    Rainbow
} from "../img/index"

function LandingPage() {
    return (
        <div class="bg-[##F5F5F5] font-main">
            <Header />

            <section id="hero">
                <div class="container text-mainText text-xl mx-auto flex mb-40">
                    <div class="w-[45%] pr-20 py-16">
                        <h1 class="text-mainDark text-[6rem] font-title leading-[5.5rem]">Membangun <br /> <span class="text-mainBlue"><span class="underline decoration-[5px] underline-offset-8 decoration-mainText">ketang</span>guhan</span>, satu langkah pada satu waktu.</h1>
                        <p class="col-start-1 col-end-2 py-6 leading-10">Angkat diri Anda ke tingkat baru dan mulailah perjalanan transformatif menuju pertumbuhan pribadi. Manfaatkan fitur-fitur yang kami sediakan dan buka kunci alat-alat untuk membangun versi diri yang lebih baik. Rangkullah kemungkinan-kemungkinan dan ungkapkan potensi sejati Anda!</p>
                        <div class="flex gap-6">
                            <button type="button" class="bg-mainBlue shadow-xl shadow-mainBlue/50 mainButton">
                                Article
                            </button>
                            <button type="button" class="bg-mainYellow shadow-xl shadow-mainYellow/50 mainButton">
                                Consultation
                            </button>
                        </div>
                    </div>
                    <div class="w-[55%] flex justify-end items-center relative">
                        <img src={HeroImg} alt="Hero Img" class="h-[95%] absolute -right-7" />
                        <div class="parent absolute bottom-48 left-0 z-10">
                            <div class="content absolute floatContent">
                                <div class="self-center">
                                    <img src={IconPengalaman} alt="Icon Pengalaman" /></div>
                                <div class="self-start">
                                    <h6 class="text-2xl text-mainDark font-bold">Pengalaman.</h6>
                                    <p class="text-lg text-mainText ">Konsultan Berpengalaman.</p>
                                </div>
                            </div>
                        </div>
                        <div class="parent absolute bottom-[45%] right-1/3 z-10">
                            <div class="content absolute floatContent">
                                <div class="self-center">
                                    <img src={IconPenghargaan} alt="Icon Penghargaan" />
                                </div>
                                <div class="self-start">
                                    <h6 class="text-2xl text-mainDark font-bold">Dapatkan konsultasi.</h6>
                                    <p class="text-lg text-mainText ">Layanan kami terpercaya.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="features">
                <div class="container mx-auto font-main text-mainText text-lg flex flex-col gap-4 items-center text-center mb-40">
                    <h4 class="text-xl font-bold">Pelayanan Kami</h4>
                    <h2 class="text-6xl font-title text-mainDark">Fitur & Manfaat</h2>
                    <div class="grid grid-cols-4 gap-6 mt-8">
                        <div class="shadow-xl p-8 rounded-[2rem]">
                            <div class="flex flex-col gap-4 justify-between items-center">
                                <img src="/src/img/landing-page/icon/mindfulnessHelp.jpg" alt="Mindfulness Icon" class="w-16" />
                                <h3 class="text-mainDark text-3xl font-bold">Mindfulness Hub</h3>
                                <span class="mx-auto">Mindfulness Hub adalah fitur dalam aplikasi kesehatan mental yang menyediakan sumber daya dan alat untuk mempromosikan praktik kesadaran (mindfulness).
                                </span>
                            </div>
                        </div>
                        <div class="shadow-xl p-8 rounded-[2rem]">
                            <div class="flex flex-col gap-4 justify-between items-center">
                                <img src="/src/img/landing-page/icon/supportNet.jpg" alt="Support Net Icon" class="w-16" />
                                <h3 class="text-mainDark text-3xl font-bold">Support Net</h3>
                                <span class="mx-auto">Membangun komunitas dukungan dalam aplikasi kesehatan mental. Pengguna dapat terhubung dengan orang lain yang menghadapi tantangan serupa, berbagi cerita, dan saling memberikan dukungan.</span>
                            </div>
                        </div>
                        <div class="shadow-xl p-8 rounded-[2rem]">
                            <div class="flex flex-col gap-4 justify-between items-center">
                                <img src="/src/img/landing-page/icon/mindfulTips.jpg" alt="Mindful Tips" class="w-16" />
                                <h3 class="text-mainDark text-3xl font-bold">Mindful Tips</h3>
                                <span class="mx-auto">Memberikan tips praktis untuk meningkatkan kesejahteraan mental melalui konten terkurasi tentang pengelolaan stres, perawatan diri, pemikiran positif, dan ketangguhan.</span>
                            </div>
                        </div>
                        <div class="shadow-xl p-8 rounded-[2rem]">
                            <div class="flex flex-col gap-4 justify-between items-center">
                                <img src="/src/img/landing-page/icon/chatMind.jpg" alt="Chat Mind Icon" class="w-16" />
                                <h3 class="text-mainDark text-3xl font-bold">ChatMind</h3>
                                <span class="text-center">Memberikan tips praktis untuk meningkatkan kesejahteraan mental melalui konten terkurasi tentang pengelolaan stres, perawatan diri, pemikiran positif, dan ketangguhan.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="support" class="bg-[#092C4C] rounded-tl-[4rem] rounded-tr-[4rem]">
                <div class="container text-xl mx-auto flex pt-60 pb-80 mb-40 text-mainPink">
                    <div class="w-1/2 flex justify-start items-center relative">
                        <img src={SupportImg} alt="support" class="h-[115%] absolute" />
                        <div class=" parent absolute right-0 bottom-16 z-10">
                            <div class="content absolute right-12 bg-white text-center rounded-xl p-5 pt-12 w-72">
                                <img src={EarthIcon} alt="Earth Icon" class="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2" />
                                <h6 class="text-2xl text-mainDark font-bold">Positif Circle</h6>
                                <p class="text-lg text-mainText">Menyelesaikan permasalahan dengan bekomunikasi dengan yang lain adalah solusi yang baik </p>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/2 flex flex-col gap-6 py-8 pl-20">
                        <h4 class="text-3xl font-bold">
                            Support Net
                        </h4>
                        <h1 class="pr-40 text-white text-[4.4rem] font-title leading-[5rem]">Bersama Dalam Dukungan, Menguatkan Jiwa</h1>
                        <p class="pr-48 text-white/70 leading-10">Temukan dukungan dan solidaritas dalam komunitas kami. Terhubung, berbagi, dan dukung satu sama lain.</p>
                        <div class="flex gap-6 text-mainText">
                            <button type="button" class="bg-mainYellow shadow-xl shadow-mainYellow/50 mainButton">
                                Start Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonials">
                <div class="container text-lg mx-auto font-main text-mainText flex flex-col gap-4 items-center mb-60">
                    <h4 class="text-xl font-bold">Testimonials</h4>
                    <h2 class="text-6xl font-title text-mainDark">Apa Pendapat Orang Tentang Kami</h2>
                    <div class="grid grid-cols-3 gap-6 mt-8">
                        <div class="shadow-xl p-12 rounded-[2rem]">
                            <div class="flex flex-col gap-4 justify-between items-center">
                                <div class="flex justify-between w-full">
                                    <div class="w-12 h-12 bg-mainPink rounded-full"></div>
                                    <div>
                                        <h5 class="text-mainDark text-2xl font-bold">Dywan Malcom</h5>
                                        <p class="text-lg">Ireland</p>
                                    </div>
                                    <div class="w-12 h-12">
                                        <img src={YellowQuote} alt="Yellow Quote" />
                                    </div>
                                </div>
                                <span class="mx-auto">Study at their own pace and on their own schedule, which is ideal for those who have work, family, or other commitments </span>
                            </div>
                        </div>
                        <div class="shadow-xl p-12 rounded-[2rem]">
                            <div class="flex flex-col gap-4 justify-between items-center">
                                <div class="flex justify-between w-full">
                                    <div class="w-12 h-12 bg-mainPink rounded-full"></div>
                                    <div>
                                        <h5 class="text-mainDark text-2xl font-bold">Dywan Malcom</h5>
                                        <p class="text-lg">Ireland</p>
                                    </div>
                                    <div class="w-12 h-12">
                                        <img src={BlueQuote} alt="Blue Quote" />
                                    </div>
                                </div>
                                <span class="mx-auto">Study at their own pace and on their own schedule, which is ideal for those who have work, family, or other commitments </span>
                            </div>
                        </div>
                        <div class="shadow-xl p-12 rounded-[2rem]">
                            <div class="flex flex-col gap-4 justify-between items-center">
                                <div class="flex justify-between w-full">
                                    <div class="w-12 h-12 bg-mainPink rounded-full"></div>
                                    <div>
                                        <h5 class="text-mainDark text-2xl font-bold">Dywan Malcom</h5>
                                        <p class="text-lg">Ireland</p>
                                    </div>
                                    <div class="w-12 h-12">
                                        <img src={PinkQuote} alt="Pink Quote" />
                                    </div>
                                </div>
                                <span class="mx-auto">Study at their own pace and on their own schedule, which is ideal for those who have work, family, or other commitments </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="article">
                <div class="container mx-auto flex flex-col gap-6 items-center mb-40 text-mainText">
                    <h4 class="text-xl font-bold">Blog</h4>
                    <h2 class="text-6xl font-title text-mainDark">Article</h2>
                    <div class="flex mt-14 ">
                        <div class="w-3/5 flex justify-start">
                            <div class="overflow-hidden">
                                <img src={ArticleImg} alt="Article Img" class=" h-full object-cover" />
                            </div>
                        </div>
                        <div class="w-2/5 py-28 flex flex-col items-end">
                            <p class="text-mainBlue font-bold text-xl self-start pb-5 pr-20">27 April 2023</p>
                            <h1 class="text-mainDark text-5xl font-title">Pentingnya Kesehatan Mental</h1>
                            <p class="text-mainText text-xl pt-5 pb-10 pr-20">Jaga kesehatan mental Anda, kunci kebahagiaan dan kualitas hidup yang baik. Dalam dunia yang semakin sibuk dan penuh tekanan, penting bagi kita untuk memberikan perhatian serius pada kesehatan mental kita.</p>
                            <div class="flex justify-start self-start gap-6 text-mainText">
                                <button type="button" class="bg-mainYellow shadow-xl shadow-mainYellow/50 mainButton">
                                    Read More
                                </button>
                                <button type="button" class="bg-mainBlue shadow-xl shadow-mainBlue/50 mainButton">
                                    All Posts <span class="w-96">➔</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="rainbow">
                <div class="container p-48 mx-auto rounded-[2rem] mb-20 flex justify-center items-center bg-cover bg-mainBlue"
                    style={{
                        backgroundImage: `url(${Rainbow})`
                    }}
                >
                    <div class="flex flex-col gap-6 justify-center items-center">
                        <h1 class="text-white font-title text-center text-[6rem] leading-[6rem]">
                            Ayo mulai hari ini!
                        </h1>
                        <p class="text-white/60 text-3xl">Konsultasi bersama kami</p>
                        <div class="flex gap-6 mt-10">
                            <button type="button" class="bg-mainPink shadow-xl shadow-mainPink/70 mainButton">
                                Daftar Sekarang
                            </button>
                            <button type="button" class="bg-mainYellow shadow-xl shadow-mainYellow/50 mainButton">
                                Lihat Konsultan
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>

    );
}

>>>>>>> main
export default LandingPage;