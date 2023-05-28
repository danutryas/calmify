import DoctorProfile from "../img/doctor-profile/doctor-profile.png";
import Schedule from "../img/doctor-profile/schedule.png";
import Decrement from "../img/doctor-profile/decrement.png"
import Increment from "../img/doctor-profile/increment.png"

const AboutDoctor = () => {
    return (
        <div id="AboutDoctor" className="text-[#989B9E]">
            <div className="container mx-auto flex flex-col items-center gap-20">
                <div id="header" className="content relative flex justify-center gap-10 w-[92%] border-b-2 p-10">
                    <div className="absolute top-[40%] -left-16 w-10 h-10 text-[#5D5F60] text-6xl">🡨</div>
                    <h3 className="font-title text-[#000] text-[5rem]">Tentang Dokter</h3>
                </div>
                <div id="profilePicture" className="flex flex-col gap-6 items-center w-full p-10">
                    <img src={DoctorProfile} alt="Doctor Profile" className="w-[65%] rounded-full" />
                    <div className="text-[#464646] text-[7rem] font-title">dr. Amelia Ratna</div>
                    <h5 className="text-4xl -mt-10">Spesialisasi bipolar disorder, depresi, dan psikotik.</h5>
                </div>
                <div id="aboutConselor" className="flex flex-col items-center gap-6">
                    <h4 className="text-[4rem] text-[#5D5F60] font-bold">Tentang Konselor</h4>
                    <p className="text-4xl ">dr. Amelia Ratna, Sp.KJ adalah Dokter Spesialis Kedokteran Jiwa yang aktif melayani pasien di RS Siloam.
                        dr. Amelia Ratna, Sp.KJ medapatkan gelar spesialisnya setelah menamatkan pendidikan di Universitas Indonesia.
                        <br /> <br />
                        Beliau tergabung dalam Ikatan Dokter Indonesia (IDI) dan Pehimpunan Dokter Spesialis Kedokteran Jiwa Indonesia (PDSKJI).
                        Layanan yang diberikan oleh beliau yaitu konsultasi mengenai masalah kesehatan mental.
                        <br /> <br />
                        Harga yang tertera merupakan biaya konsultasi dokter, belum termasuk tindakan lain dan biaya admin dari RS/Klinik (apabila ada).</p>
                </div>
                <div id="jadwalConselor" className="text-[#3D3F40] flex flex-col gap-10 items-center w-full px-40">
                    <div className="flex justify-between w-full py-20 border-b-2">
                        <div className="text-5xl font-bold">Tanggal Sesi</div>
                        <img src={Schedule} alt="schedule" />
                    </div>
                    <div className="flex flex-col gap-12 w-full py-20 border-b-2">
                        <div className="text-5xl font-bold">Waktu Sesi</div>
                        <div className="flex justify-between w-full text-[2.5rem] font-bold">
                            <div className="px-16 py-10 bg-[#F2994A] text-white rounded-3xl flex justify-center items-center">14.00 WIB</div>
                            <div className="px-16 py-10 hover:bg-[#F2994A] hover:text-white rounded-3xl flex justify-center items-center">19.00 WIB</div>
                            <div className="px-16 py-10 hover:bg-[#F2994A] hover:text-white rounded-3xl flex justify-center items-center">20.00 WIB</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-12 w-full py-20 border-b-2">
                        <div className="text-5xl font-bold">Durasi Sesi</div>
                        <div className="flex gap-12 text-5xl items-center">
                            <img src={Decrement} alt="decrement" />
                            <span className="text-[#2E2BA6] font-bold -mr-5">1</span>
                            <span className="text-[#989B9E] font-inter">jam</span>
                            <img src={Increment} alt="increment" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-12 w-[125%] py-20 ">
                        <div className="text-5xl font-bold">Total :</div>
                        <div className="flex w-full justify-between">
                            <div className="text-[#F2994A] text-[5rem] font-bold">
                                Rp 25.000
                            </div>
                            <button type="button" className="bg-mainBlue shadow-xl shadow-mainBlue/50 text-white text-4xl font-bold py-5 px-32 rounded-lg cursor-pointer hover:opacity-80 active:opacity-70 transition duration-300">
                                Buat Janji
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutDoctor;