import React from "react";

const ButtonOutline = ({ children }) => {
  return (
      <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-blue-200 text-blue-200 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-blue-200 hover:text-white-500 transition-all">
        {" "}
        {children}
      </button>
  );
};

export default ButtonOutline;
