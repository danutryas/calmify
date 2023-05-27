import { useState } from "react";
import { CommentIcon, LikeIcon } from "./Icons";
import WaveIcon from "./Icons/WaveIcon.png";
import { Link, } from "react-router-dom";

const Post = () => {
  const [isLiked, setIsLiked] = useState(false);

  const likePost = () => {
    setIsLiked((prev) => !prev);
    // send to backend
  };

  return (
    <div className="flex flex-col gap-7 rounded-2xl bg-white post-box-shadow p-16">
      <div className="flex gap-7 items-center">
        <div className="">{/* profile pict */}</div>
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
          Hi, disini saya mempunyai permasalahan mengenai pola tidur apakah ada
          solusi untuk mengatasi permasalahan saya? thankyou 😊
        </p>
      </div>
      <div className="flex gap-12">
        <div className="flex gap-4 items-center ">
          <div className="h-auto w-auto cursor-pointer" onClick={likePost}>
            <LikeIcon isActive={isLiked} />
          </div>
          <p className="text-xl text-[#000000B2]">187 Likes</p>
        </div>
        <Link to="/community/post" className="flex gap-4 items-center">
          <CommentIcon />
          <p className="text-xl text-[#000000B2]">24 Comments</p>
        </Link>
      </div>
    </div>
  );
};

export default Post;
