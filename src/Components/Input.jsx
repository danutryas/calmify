import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { PasswordHide, PasswordShow } from "./Icons/Password";

const Input = ({ label, type, link, textLink }) => {
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
        <PasswordInput />
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
        <TextInput label={label} />
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
        <EmailInput />
      </div>
    );
  }
};

const EmailInput = () => {
  return (
    <div className="rounded-xl border-grey-4 flex gap-4 border-2 px-4 py-3 justify-between focus-within:border-[#E0EFFE]  focus-within:border-4 focus-within:py-2.5 focus-within:px-3.5">
      <input
        type="email"
        className="border-none outline-none w-full "
        placeholder="Enter your email"
      />
    </div>
  );
};

const TextInput = ({ label }) => {
  return (
    <div className="rounded-xl border-grey-4 flex gap-4 border-2 px-4 py-3 justify-between focus-within:border-[#E0EFFE] focus-within:border-4 focus-within:py-2.5 focus-within:px-3.5">
      <input
        type="text"
        className="border-none outline-none w-full "
        placeholder={`Enter your ${label}`}
      />
    </div>
  );
};

const PasswordInput = ({}) => {
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
      className="rounded-xl border-grey-4 flex gap-4 border-2 px-4 py-3 justify-between focus-within:border-[#E0EFFE] focus-within:border-4 items-center focus-within:py-2.5 focus-within:px-3.5"
      onClick={focusToChild}
    >
      <input
        type="password"
        ref={inputEl}
        placeholder="Enter your password"
        className="border-none outline-none w-full"
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
};

export default Input;
