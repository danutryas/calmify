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
                        <p>
                            Kata-kata itu sering terdengar pada anak-anak remaja zaman sekarang, untuk membully maupun melamahkan lawan bicara. Namun hal ini sepertinya sudah menjadi trend di kalangan remaja sekarang.
                            Kesehatan mental dipengaruhi oleh peristiwa dalam kehidupan yang meninggalkan dampak yang besar pada kepribadian dan perilaku seseorang. Peristiwa-peristiwa tersebut dapat berupa kekerasan dalam rumah tangga, pelecehan anak, atau stres berat jangka panjang.
                            Jika kesehatan mental terganggu, maka timbul gangguan mental atau penyakit mental. Gangguan mental dapat mengubah cara seseorang dalam menangani stres, berhubungan dengan orang lain, membuat pilihan, dan memicu hasrat untuk menyakiti diri sendiri.
                            <br /> <br />
                            <span className="font-bold">Pengertian Kesehatan Mental</span><br />
                            Kesehatan mental merupakan kondisi dimana individu memiliki kesejahteraan yang tampak dari dirinya yang mampu menyadari potensinya sendiri, memiliki kemampuan untuk mengatasi tekanan hidup normal pada berbagai situasi dalam kehidupan, mampu bekerja secara produktif dan menghasilkan, serta mampu memberikan kontribusi kepada komunitasnya.
                            <br /> <br />
                            Berikut adalah beberapa gejala atau tanda penyakit mental yang mungkin terjadi pada anak :
                            <br /> <br />
                            1. Perubahan perilaku <br />
                            Ini merupakan tanda munculnya penyakit mental pada anak yang tergolong mudah Anda sadari melalui aktivitas sehari-hari baik di rumah maupun di sekolah. Ketika anak menjadi lebih sering bertengkar, cenderung kasar, hingga berkata kasar yang menyakitkan orang lain padahal sebelumnya tidak, Anda perlu curiga. Tak hanya itu saja, Anda juga mungkin melihat perubahan perilaku anak seperti menjadi lebih mudah marah dan merasa frustasi.
                            <br /> <br />
                            2. Perubahan mood <br />
                            Tanda penyakit mental lainnya adalah mood atau suasana hati anak yang berubah secara tiba-tiba. Kondisi ini bisa berlangsung sebentar hingga dalam jangka waktu yang tidak menentu.
                            Tentunya, hal ini bisa mengakibatkan masalah pada hubungan dengan keluarga serta teman sebaya. Ini merupakan gejala umum dari depresi, ADHD, hingga kelainan bipolar.
                            <br /> <br />
                            3. Kesulitan berkonsentrasi <br />
                            Anak-anak yang menderita gangguan mental cenderung sulit fokus atau memperhatikan dalam waktu yang lama. Selain itu, mereka juga memiliki kesulitan untuk duduk diam dan membaca. Tanda penyakit mental yang satu ini dapat menyebabkan menurunnya performa di sekolah juga perkembangan otaknya.
                            <br /> <br />
                            4. Penurunan berat badan <br />
                            Tahukah Anda bahwa gangguan mental juga dapat memengaruhi kondisi fisik anak? Tak hanya karena penyakit fisik, berat badan yang menurun drastis juga bisa menjadi tanda penyakit mental anak. Gangguan makan, stres, hingga depresi dapat menjadi penyebab anak kehilangan nafsu makan, mual, dan muntah yang berkelanjutan.
                            <br /> <br />
                            5. Menyakiti diri sendiri <br />
                            Perhatikan saat anak sering mengalami kekhawatiran serta rasa takut berlebih. Perasaan ini dapat berujung pada keinginannya untuk menyakiti diri sendiri.
                            Biasanya, ini menjadi akumulasi dari perasaan stres serta menyalahkan diri sendiri karena gangguan mental juga mengakibatkan anak sulit mengelola emosi. Ini juga menjadi tanda gangguan mental pada anak yang perlu Anda cermati karena tidak menutup kemungkinan berujung pada percobaan bunuh diri.
                        </p>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default DetailArticle;
