import Header from "./header";
import Footer from "./footer";
import { YellowQuote, AktivitasIcon, YearIcon, RatingIcon } from "../img/index";

function Dashboard() {
    return (
        <div className="font-main text-mainText">
            <Header />

            <section id="dashboard">
                <div className="container bg-white text-lg mx-auto p-10 flex flex-col gap-10 items-center mb-10">
                    <h4 className="text-3xl font-bold mb-10">Dashboard</h4>
                    <h2 className="text-6xl font-title text-mainDark">Hello Nata, Selamat datang</h2>
                    <h5 className="text-xl text-mainDark">Semoga aktivitas mu menyenangkan,</h5>
                </div>
            </section>
            <section id="motivasi" className="bg-[#F4F5F7] p-20">
                <div className="container text-center bg-white text-[#494479] mx-auto p-16 px-[15%] rounded-3xl shadow-xl flex flex-col gap-6 items-center justify-center">
                    <div className="flex gap-7">
                        <div class="w-12 h-12">
                            <img src={YellowQuote} alt="Yellow Quote" />
                        </div>
                        <h5 className="text-mainDark font-title text-5xl">Motivasi Hari ini</h5>
                    </div>
                    <p className="text-4xl italic px-4 pb-7">
                        Anda tidak perlu mengendalikan pikiran Anda. Anda hanya harus berhenti membiarkan mereka mengendalikan Anda.
                    </p>
                    <p className="text-2xl italic">
                        Semoga harimu menyenangkan - Calmify Team
                    </p>
                </div>
            </section>
            <section id="aktivitas" className="bg-[#F4F5F7] p-20">
                {/* Start Create Container */}
                <div className="container  bg-white text-[#000] mx-auto p-16 rounded-3xl shadow-xl flex flex-col gap-16">

                    {/* Start First Component (Aktivitasmu) */}
                    <div className="pb-20 text-center flex gap-10 border-b-2">
                        {/* Add Icon */}
                        <img src={AktivitasIcon} alt="Aktivitas Icon" className="self-center w-[6rem]" />

                        {/* Add text */}
                        <div className="flex flex-col gap-4 items-start">
                            <h5 className="text-[2.6rem] font-bold">Aktivitasmu</h5>
                            <p className="text-4xl">Lihat aktivitasmu pada website ini</p>
                        </div>
                    </div>
                    {/* End First Component (Aktivitasmu) */}

                    {/* Start Second Component */}
                    {/* Change background color */}
                    <div className="bg-[#F4F5F7] rounded-2xl p-12 grid grid-cols-5 gap-6">

                        {/* Add picture */}
                        <div className="w-36 h-36 bg-mainPink rounded-[3rem]"></div>

                        {/* Add text */}
                        <div className="col-start-2 col-end-6 flex flex-col justify-around text-xl text-[#000000B2]">
                            <p className="font-bold">Sedang Dilakukan,</p>
                            <div className="flex items-center gap-1 text-2xl">
                                <img src={YearIcon} alt="Year Icon" />
                                <span className="text-[#3D3F40]">1</span><span className="text-[#989B9E] font-inter">tahun</span>
                                <img src={RatingIcon} alt="Rating Icon" className="ml-4" />
                                <span className="text-[#3D3F40] font-inter font-[600] tracking-[-0.3rem]">4</span><span className="font-inter text-[#989B9E]">/5</span>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam officia excepturi repellendus voluptas, consequuntur beatae exercitationem impedit voluptates expedita sint amet similique tempora, distinctio repellat commodi, esse id? Nostrum, natus!</p>
                        </div>

                        {/* Add button */}
                        <div className="col-start-6 p-10 flex justify-center items-center">
                            <button type="button" class="bg-mainBlue shadow-xl shadow-mainBlue/50 text-white text-2xl font-semibold py-5 px-8 rounded-md cursor-pointer hover:opacity-80 active:opacity-70 transition duration-300">
                                Lihat Selengkapnya
                            </button>
                        </div>
                    </div>
                    {/* End Second Component */}

                    {/* Start Third Component */}
                    {/* Change background color */}
                    <div className="bg-[#F4F5F7] rounded-2xl p-12 grid grid-cols-5 gap-6">

                        {/* Add picture */}
                        <div className="w-36 h-36 bg-mainPink rounded-[3rem]"></div>

                        {/* Add text */}
                        <div className="col-start-2 col-end-6 flex flex-col justify-around text-xl text-[#000000B2]">
                            <p className="font-bold">Sedang Dilakukan,</p>
                            <div className="flex items-center gap-1 text-2xl">
                                <img src={YearIcon} alt="Year Icon" />
                                <span className="text-[#3D3F40]">1</span><span className="text-[#989B9E] font-inter">tahun</span>
                                <img src={RatingIcon} alt="Rating Icon" className="ml-4" />
                                <span className="text-[#3D3F40] font-inter font-[600] tracking-[-0.3rem]">4</span><span className="font-inter text-[#989B9E]">/5</span>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam officia excepturi repellendus voluptas, consequuntur beatae exercitationem impedit voluptates expedita sint amet similique tempora, distinctio repellat commodi, esse id? Nostrum, natus!</p>
                        </div>

                        {/* Add button */}
                        <div className="col-start-6 p-10 flex justify-center items-center">
                            <button type="button" class="bg-mainBlue shadow-xl shadow-mainBlue/50 text-white text-2xl font-semibold py-5 px-8 rounded-md cursor-pointer hover:opacity-80 active:opacity-70 transition duration-300">
                                Lihat Selengkapnya
                            </button>
                        </div>
                    </div>
                    {/* End Third Component */}
                </div>
                {/* End Create Container */}
            </section>

            <Footer />
        </div>
    );
}

export default Dashboard;
import Header from "./header";
import Footer from "./footer";
import { YellowQuote, AktivitasIcon, YearIcon, RatingIcon } from "../img/index";

function Dashboard() {
    return (
        <div className="font-main text-mainText">
            <Header />

            <section id="dashboard">
                <div className="container bg-white text-lg mx-auto p-10 flex flex-col gap-10 items-center mb-10">
                    <h4 className="text-3xl font-bold mb-10">Dashboard</h4>
                    <h2 className="text-6xl font-title text-mainDark">Hello Nata, Selamat datang</h2>
                    <h5 className="text-xl text-mainDark">Semoga aktivitas mu menyenangkan,</h5>
                </div>
            </section>
            <section id="motivasi" className="bg-[#F4F5F7] p-20">
                <div className="container text-center bg-white text-[#494479] mx-auto p-16 px-[15%] rounded-3xl shadow-xl flex flex-col gap-6 items-center justify-center">
                    <div className="flex gap-7">
                        <div class="w-12 h-12">
                            <img src={YellowQuote} alt="Yellow Quote" />
                        </div>
                        <h5 className="text-mainDark font-title text-5xl">Motivasi Hari ini</h5>
                    </div>
                    <p className="text-4xl italic px-4 pb-7">
                        Anda tidak perlu mengendalikan pikiran Anda. Anda hanya harus berhenti membiarkan mereka mengendalikan Anda.
                    </p>
                    <p className="text-2xl italic">
                        Semoga harimu menyenangkan - Calmify Team
                    </p>
                </div>
            </section>
            <section id="aktivitas" className="bg-[#F4F5F7] p-20">
                {/* Start Create Container */}
                <div className="container  bg-white text-[#000] mx-auto p-16 rounded-3xl shadow-xl flex flex-col gap-16">

                    {/* Start First Component (Aktivitasmu) */}
                    <div className="pb-20 text-center flex gap-10 border-b-2">
                        {/* Add Icon */}
                        <img src={AktivitasIcon} alt="Aktivitas Icon" className="self-center w-[6rem]" />

                        {/* Add text */}
                        <div className="flex flex-col gap-4 items-start">
                            <h5 className="text-[2.6rem] font-bold">Aktivitasmu</h5>
                            <p className="text-4xl">Lihat aktivitasmu pada website ini</p>
                        </div>
                    </div>
                    {/* End First Component (Aktivitasmu) */}

                    {/* Start Second Component */}
                    {/* Change background color */}
                    <div className="bg-[#F4F5F7] rounded-2xl p-12 grid grid-cols-5 gap-6">

                        {/* Add picture */}
                        <div className="w-36 h-36 bg-mainPink rounded-[3rem]"></div>

                        {/* Add text */}
                        <div className="col-start-2 col-end-6 flex flex-col justify-around text-xl text-[#000000B2]">
                            <p className="font-bold">Sedang Dilakukan,</p>
                            <div className="flex items-center gap-1 text-2xl">
                                <img src={YearIcon} alt="Year Icon" />
                                <span className="text-[#3D3F40]">1</span><span className="text-[#989B9E] font-inter">tahun</span>
                                <img src={RatingIcon} alt="Rating Icon" className="ml-4" />
                                <span className="text-[#3D3F40] font-inter font-[600] tracking-[-0.3rem]">4</span><span className="font-inter text-[#989B9E]">/5</span>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam officia excepturi repellendus voluptas, consequuntur beatae exercitationem impedit voluptates expedita sint amet similique tempora, distinctio repellat commodi, esse id? Nostrum, natus!</p>
                        </div>

                        {/* Add button */}
                        <div className="col-start-6 p-10 flex justify-center items-center">
                            <button type="button" class="bg-mainBlue shadow-xl shadow-mainBlue/50 text-white text-2xl font-semibold py-5 px-8 rounded-md cursor-pointer hover:opacity-80 active:opacity-70 transition duration-300">
                                Lihat Selengkapnya
                            </button>
                        </div>
                    </div>
                    {/* End Second Component */}

                    {/* Start Third Component */}
                    {/* Change background color */}
                    <div className="bg-[#F4F5F7] rounded-2xl p-12 grid grid-cols-5 gap-6">

                        {/* Add picture */}
                        <div className="w-36 h-36 bg-mainPink rounded-[3rem]"></div>

                        {/* Add text */}
                        <div className="col-start-2 col-end-6 flex flex-col justify-around text-xl text-[#000000B2]">
                            <p className="font-bold">Sedang Dilakukan,</p>
                            <div className="flex items-center gap-1 text-2xl">
                                <img src={YearIcon} alt="Year Icon" />
                                <span className="text-[#3D3F40]">1</span><span className="text-[#989B9E] font-inter">tahun</span>
                                <img src={RatingIcon} alt="Rating Icon" className="ml-4" />
                                <span className="text-[#3D3F40] font-inter font-[600] tracking-[-0.3rem]">4</span><span className="font-inter text-[#989B9E]">/5</span>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam officia excepturi repellendus voluptas, consequuntur beatae exercitationem impedit voluptates expedita sint amet similique tempora, distinctio repellat commodi, esse id? Nostrum, natus!</p>
                        </div>

                        {/* Add button */}
                        <div className="col-start-6 p-10 flex justify-center items-center">
                            <button type="button" class="bg-mainBlue shadow-xl shadow-mainBlue/50 text-white text-2xl font-semibold py-5 px-8 rounded-md cursor-pointer hover:opacity-80 active:opacity-70 transition duration-300">
                                Lihat Selengkapnya
                            </button>
                        </div>
                    </div>
                    {/* End Third Component */}
                </div>
                {/* End Create Container */}
            </section>

            <Footer />
        </div>
    );
}

export default Dashboard;
