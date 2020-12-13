import React, { useState, useEffect } from "react";
import Link from "next/link";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../misc/ButtonOutline.";
//import SheetLogo from "../../public/assets/sheet-icon.svg";

const HeaderSec = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <Link href="/">
              <a>
                <img src="/assets/hulc-logo.png" className="h-10 w-auto" />
              </a>
            </Link>
          </div>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <Link href="/joinus/">
              <a className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">
                  Join us
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

export default HeaderSec;
