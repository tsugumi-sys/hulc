import React, { useState, useEffect } from "react";
import Link from "next/link";
// Import react scroll
import ButtonOutline from "../../misc/ButtonOutline";

const Header = () => {
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
    return () => {
      setScrollActive(false)
    }
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-blue-200 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <Link href="/appList/">
              <a className="text-white-300 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">
                HOME
              </a>
            </Link>
          </div>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <Link href="/">
              <a className="text-white-300 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">
                  HP Top
              </a>
            </Link>
            <a href="https://twitter.com/HulcLow" className="flex flex-col">
              <ButtonOutline>Contuct us</ButtonOutline>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
