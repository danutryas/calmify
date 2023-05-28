import Header from "./header";
import Footer from "./footer";
import articleImg from "../img/detail-article/article1.png"
import { YellowQuote } from "../img/index";

function DetailArticle() {
    return (
        <div className="font-main text-[#000]">
            <Header />

            <div className="content flex flex-col items-center mb-40">
                <div className="container flex flex-col gap-16">
                    <img src={articleImg} alt="article" />
                    <div className="flex gap-10">
                        <div className="w-[5%]">
                            <img src={YellowQuote} alt="Yellow Quote" className="w-[80%]" />
                        </div>
                        <h2 className="font-title text-[#000] text-[4.5rem] w-[95%] pt-4">Mengenal Pentingnya Kesehatan Mental pada Remaja</h2>
                    </div>
                    <div className="content text-xl">
                        <p className="mb-10">Kata-kata itu sering terdengar pada anak-anak remaja zaman sekarang, untuk membully maupun melamahkan lawan bicara. Namun hal ini sepertinya sudah menjadi trend di kalangan remaja sekarang.
                            Kesehatan mental dipengaruhi oleh peristiwa dalam kehidupan yang meninggalkan dampak yang besar pada kepribadian dan perilaku seseorang. Peristiwa-peristiwa tersebut dapat berupa kekerasan dalam rumah tangga, pelecehan anak, atau stres berat jangka panjang.
                            Jika kesehatan mental terganggu, maka timbul gangguan mental atau penyakit mental. Gangguan mental dapat mengubah cara seseorang dalam menangani stres, berhubungan dengan orang lain, membuat pilihan, dan memicu hasrat untuk menyakiti diri sendiri.
                        </p>
                        <h6 className="font-bold ">Pengertian Kesehatan Mental</h6>
                        <p className="mb-10">Kesehatan mental merupakan kondisi dimana individu memiliki kesejahteraan yang tampak dari dirinya yang mampu menyadari potensinya sendiri, memiliki kemampuan untuk mengatasi tekanan hidup normal pada berbagai situasi dalam kehidupan, mampu bekerja secara produktif dan menghasilkan, serta mampu memberikan kontribusi kepada komunitasnya.</p>
                        <p>Berikut adalah beberapa gejala atau tanda penyakit mental yang mungkin terjadi pada anak :</p>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default DetailArticle;
