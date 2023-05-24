import Footer from "../Components/footer";
import Header from "../Components/header";
import Post from "../Components/post";
import CreatePost from "../Components/createPost";

const CommunityPage = () => {
  return (
    <>
      <Header />
      <section className="mb-48 -mt-14">
        <div className="container bg-white text-lg flex flex-col gap-16 items-center mx-auto">
          <h4 className="text-3xl font-bold  text-[#D23C8F]">Support Net</h4>
          <h1 className="text-[#272D3D] text-7xl font-title">Community</h1>
          <h2 className="text-6xl font-title text-black">
            Menginspirasi Bersama
          </h2>
          <h5 className="text-xl text-mainDark">
            Temukan dukungan dan solidaritas dalam komunitas kami. Terhubung,
            berbagi, dan dukung satu sama lain.
          </h5>
        </div>
      </section>
      <section className="px-56 py-28 bg-[#F4F5F7]">
        <div className="container flex flex-col gap-12 mx-auto">
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-4xl font-main">Hello Nata,</h3>
            <p className="text-xl">
              Apa yang baru denganmu? Apakah kamu ingin membagikan sesuatu
              dengan komunitas?
            </p>
          </div>
          <CreatePost />
          <Post />
          <Post />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CommunityPage;
