import { useEffect, useRef } from "react";
import { ImageIcon, MessageIcon, SendIcon } from "./Icons";
const CreatePost = () => {
  const textAreaEl = useRef(null);

  const onSubmitPost = () => {};

  function autoResize(e) {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  }
  const onClickArea = () => {
    textAreaEl.current.focus();
  };

  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-7 rounded-2xl bg-white post-box-shadow p-16">
        <h5 className="font-title text-5xl">Create Post</h5>
        <div
          className="py-10 px-14 bg-[#F4F5F7] rounded-3xl flex gap-10 cursor-text"
          onClick={onClickArea}
        >
          <MessageIcon />
          <textarea
            placeholder="Bagaimana kabarmu, Nata?"
            className="border-none outline-none bg-transparent w-full resize-none overflow-hidden text-xl "
            ref={textAreaEl}
            onChange={(e) => autoResize(e)}
          />
        </div>
        <div className="flex justify-between">
          <label
            className="flex items-center gap-4 cursor-pointer"
            htmlFor="add-image"
          >
            <ImageIcon />
            <p className="text-[#000000B2] text-2xl">Image</p>
          </label>
          <input type="file" id="add-image" className="hidden" />
          <button
            className="bg-[#2E2BA6] flex text-white gap-4 py-4 px-10 rounded-lg box-shadow-blue font-bold text-xl items-center"
            onClick={onSubmitPost}
          >
            <SendIcon />
            <span>Submit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
