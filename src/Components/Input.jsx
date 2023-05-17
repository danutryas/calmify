import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { PasswordHide, PasswordShow } from "./Icons/Password";
import uploadPhoto from "./Assets/Image/upload-photo.png";

const Input = ({ label, type, link, textLink, onChange, name }) => {
  if (type === "password") {
    return (
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <label htmlFor="">{label}</label>
          {link !== undefined ? (
            <a href={link} className="text-[#2E2BA6]">
              {textLink}
            </a>
          ) : (
            ""
          )}
        </div>
        <PasswordInput onChange={onChange} name={name} />
      </div>
    );
  } else if (type === "text") {
    return (
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <label htmlFor="">{label}</label>
          {link !== undefined ? (
            <a href={link} className="text-[#2E2BA6]">
              {textLink}
            </a>
          ) : (
            ""
          )}
        </div>
        <TextInput label={label} onChange={onChange} name={name} />
      </div>
    );
  } else if (type === "email") {
    return (
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <label htmlFor="">{label}</label>
          {link !== undefined ? (
            <a href={link} className="text-[#2E2BA6]">
              {textLink}
            </a>
          ) : (
            ""
          )}
        </div>
        <EmailInput onChange={onChange} name={name} />
      </div>
    );
  } else if (type === "file") {
    return (
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <label htmlFor="">{label}</label>
          {link !== undefined ? (
            <a href={link} className="text-[#2E2BA6]">
              {textLink}
            </a>
          ) : (
            ""
          )}
        </div>
        <FileInput />
      </div>
    );
  }
};
const FileInput = ({}) => {
  return (
    <div className="w-full">
      <input
        type="file"
        id="upload-photo"
        className="opacity-0 absolute z-[-1]"
      />
      <label
        htmlFor="upload-photo"
        className="w-full outline-dashed flex h-56 border-0 outline-2 outline-[#A3A3A3] rounded-lg flex-col justify-center items-center"
      >
        <img src={uploadPhoto} alt="" />
        <p>Drag & Drop atau Browse</p>
      </label>
    </div>
  );
};
const EmailInput = ({ onChange, name }) => {
  return (
    <div className="rounded-xl border-grey-4 flex gap-4 border-2 px-4 py-3 justify-between focus-within:border-[#E0EFFE]  focus-within:border-4 focus-within:py-[9.5px] focus-within:px-3.5">
      <input
        type="email"
        className="border-none outline-none w-full "
        placeholder="Enter your email"
        onChange={(e) => onChange(e)}
        name={name}
      />
    </div>
  );
};

const TextInput = ({ label, onChange, name }) => {
  return (
    <div className="rounded-xl border-grey-4 flex gap-4 border-2 px-4 py-3 justify-between focus-within:border-[#E0EFFE] focus-within:border-4 focus-within:py-[9.5px] focus-within:px-3.5">
      <input
        type="text"
        className="border-none outline-none w-full "
        placeholder={`Enter your ${label}`}
        onChange={(e) => onChange(e)}
        name={name}
      />
    </div>
  );
};

const PasswordInput = ({ onChange, name }) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const inputEl = useRef(null);

  const onButtonClick = () => {
    isPasswordShow
      ? (inputEl.current.type = "password")
      : (inputEl.current.type = "text");
    setIsPasswordShow((prev) => !prev);
  };
  const focusToChild = () => {
    inputEl.current.focus();
  };

  return (
    <div
      className="rounded-xl border-grey-4 flex gap-4 border-2 px-4 py-3 justify-between focus-within:border-[#E0EFFE] focus-within:border-4 items-center focus-within:py-[9.5px] focus-within:px-3.5"
      onClick={focusToChild}
    >
      <input
        type="password"
        ref={inputEl}
        placeholder="Enter your password"
        className="border-none outline-none w-full"
        onChange={(e) => onChange(e)}
        name={name}
      />
      <div className="icon-container" onClick={onButtonClick}>
        {isPasswordShow ? <PasswordShow /> : <PasswordHide />}
      </div>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  link: PropTypes.string,
  textLink: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
};

export default Input;
