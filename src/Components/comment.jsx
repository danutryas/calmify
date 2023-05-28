import { useRef, useState } from "react";
import { CommentIcon, LikeIcon, ShareIcon } from "./Icons";

const CommentElement = () => {
  const [isLiked, setIsLiked] = useState(false);

  const likePost = () => {
    setIsLiked((prev) => !prev);
    // send to backend
  };

  return (
    <div className="flex gap-16">
      <div className="">
        {/* profile pict */}
        <div className="rounded-full bg-red-950 h-[90px] w-[90px] m-4 pointer-events-none"></div>
      </div>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <h3 className="text-3xl font-bold font-main">Dewanata</h3>
          <p className="text-2xl">
            Hi, disini saya mempunyai permasalahan mengenai pola tidur apakah
            ada solusi untuk mengatasi permasalahan saya? thankyou 😊
          </p>
        </div>
        <div className="flex gap-12">
          <div className="flex gap-4 items-center ">
            <div className="h-auto w-auto cursor-pointer" onClick={likePost}>
              <LikeIcon isActive={isLiked} />
            </div>
            <p className="text-2xl text-[#000000B2]">187 Likes</p>
          </div>
          <div className="flex gap-4 items-center">
            <ShareIcon />
            <p className="text-2xl text-[#000000B2]">24 Share</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommentElement;
