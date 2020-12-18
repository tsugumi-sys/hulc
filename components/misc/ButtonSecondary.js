import React from "react";

const ButtonPrimary = ({ children, addClass }) => {
  return (
    <button
      className={
        "py-3 lg:py-4 px-12 lg:px-16 border border-blue-100 text-blue-100 font-semibold rounded-lg bg-white-500 hover:shadow-blue transition-all outline-none capitalize hover:bg-blue-100 hover:text-white-500 transition-all" +
        addClass
      }
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
