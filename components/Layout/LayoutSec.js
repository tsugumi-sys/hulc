import React from "react";
import Footer from "./Footer";
import HeaderSec from "./HeaderSec";

const Layout = ({ children }) => {
  return (
    <div>
      <HeaderSec />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
