import React from "react";
import Footer from "./Footer";
import HeaderSec from "./HeaderSec";

const Layout = ({ children }) => {
  return (
    <>
      <HeaderSec />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
