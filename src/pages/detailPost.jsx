import { useState } from "react";
import {
  BackIcon,
  CommentIcon,
  LikeIcon,
  VideoIcon,
} from "../Components/Icons";
import WaveIcon from "../Components/Icons/WaveIcon.png";
import { useEffect, useRef } from "react";
import { ImageIcon, MessageIcon, SendIcon } from "../Components/Icons";
import Post from "../Components/post";
import CommentElement from "../Components/comment";
import Footer from "../Components/footer";

const DetailPostPage = () => {
  const [isLiked, setIsLiked] = useState(false);

  const likePost = () => {
    setIsLiked((prev) => !prev);
    // send to backend
  };
  const textAreaEl = useRef(null);

  const onSubmitPost = () => {};

  function autoResize(e) {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  }
  const onClickArea = () => {
    textAreaEl.current.focus();
  };

  const onClickBack = () => {};
  return (
    <div className="bg-[#F4F5F7]">
      <div className="px-16 py-8  bg-white w-full h-auto mb-10">
        <div
          className="w-[72px] h-[72px] cursor-pointer flex justify-center items-center"
          onClick={onClickBack}
        >
          <BackIcon />
        </div>
      </div>
      <div className="container flex flex-col gap-12 mx-auto">
        <div className="flex flex-col gap-14 rounded-2xl bg-white post-box-shadow p-16 mb-5">
          <div className="flex flex-col gap-7 ">
            <div className="flex gap-7 items-center">
              {/* <div className="">profile pict</div> */}
              <div className="rounded-full bg-red-950 h-[90px] w-[90px] m-4 pointer-events-none">
                {/*profile pict*/}
              </div>

              <div className="flex flex-col gap-2">
                <h5 className="text-3xl font-bold">Lucia Schaefer</h5>
                <div className="flex gap-1 font-semibold text-xl text-[#6E7A8E] font-main">
                  <p className="p">5 mins ago</p>
                  <p className="p">•</p>
                  <p className="p">Public</p>
                </div>
              </div>
            </div>
            <div className="py-10 px-14 bg-[#F4F5F7] rounded-3xl flex gap-10 cursor-text">
              <div className="">
                <div className="rounded-full  h-[56px] w-[56px] pointer-events-none">
                  <img src={WaveIcon} alt="" />
                </div>
              </div>
              <p className="w-full text-xl">
                Hi, disini saya mempunyai permasalahan mengenai pola tidur
                apakah ada solusi untuk mengatasi permasalahan saya? thankyou 😊
              </p>
            </div>
            <div className="flex gap-12">
              <div className="flex gap-4 items-center ">
                <div
                  className="h-auto w-auto cursor-pointer"
                  onClick={likePost}
                >
                  <LikeIcon isActive={isLiked} />
                </div>
                <p className="text-xl text-[#000000B2]">187 Likes</p>
              </div>
              <div className="flex gap-4 items-center">
                <CommentIcon />
                <p className="text-xl text-[#000000B2]">24 Comments</p>
              </div>
            </div>
          </div>
          <hr className="w-full h-1.5 bg-[#FBFCFD] border-none" />
          <div className="">
            <div
              className="py-10 px-14 bg-[#F4F5F7] rounded-3xl flex gap-10 cursor-text"
              onClick={onClickArea}
            >
              <MessageIcon />
              <textarea
                placeholder="Ketik Komentarmu disini"
                className="border-none outline-none bg-transparent w-full resize-none overflow-hidden text-xl "
                ref={textAreaEl}
                onChange={(e) => autoResize(e)}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-12 items-center">
              <label
                className="flex items-center gap-4 cursor-pointer"
                htmlFor="add-image"
              >
                <ImageIcon />
                <p className="text-[#000000B2] text-2xl">Image</p>
              </label>
              <input type="file" id="add-image" className="hidden" />
              <div className="h-1/2 w-0.5 bg-black-2"></div>
              <label
                className="flex items-center gap-4 cursor-pointer"
                htmlFor="add-video"
              >
                <VideoIcon />
                <p className="text-[#000000B2] text-2xl">Video</p>
              </label>
              <input type="file" id="add-video" className="hidden" />
            </div>
            <button
              className="bg-[#2E2BA6] flex text-white gap-4 py-4 px-10 rounded-lg box-shadow-blue font-bold text-xl items-center"
              onClick={onSubmitPost}
            >
              <SendIcon />
              <span>Replay</span>
            </button>
          </div>
          <hr className="w-full h-1.5 bg-[#FBFCFD] border-none" />
          <div className="flex flex-col gap-28">
            <CommentElement />
            <CommentElement />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailPostPage;
