import React from "react";
import Twitter from "../../../public/assets/Icon/twitter.svg";
import Link from "next/link"
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <img src="/assets/hulc-logo.png" className="h-10 w-auto" />
          <p className="mb-4">
            <strong className="font-medium">HULC</strong> はアプリを作ってみたいメンバーを募集中です。
            相談もいつでも受け付けます。(DM)
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <a href="https://twitter.com/HulcLow" className="flex flex-col">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          <p className="text-gray-400">©2020HULC</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Demo Apps</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              <Link href="/appList">
                  <a>
                    App List
                  </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Socials</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              <a href="https://twitter.com/HulcLow">
                Twitter{" "}
              </a>
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              <a href="https://hulc.hatenablog.com/">
                Blog{" "}
              </a>
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              <Link href="/techBlog">
              <a>
                TechBlog{" "}
              </a>
              </Link>
            </li>
          </ul>
        </div>
        {/*
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Earn Money</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Affiliate{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Become Partner{" "}
            </li>
          </ul>
        </div>
        */}
      </div>
    </div>
  );
};

export default Footer;
