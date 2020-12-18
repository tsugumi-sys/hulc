import React from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline";
import Maps from "../public/assets/HugeGlobal.svg";

const Pricing = () => {
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
            What's No-Code App?
          </h3>
          <p className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center">
            コードを書かずに(No-Code)、もしくはより少ないコードで(Low Code)アプリを作れるサービスが充実してきています。
            HULCで使用するメインのサービスを紹介します。
          </p>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <a href="https://www.glideapps.com/">
                  <Image
                    src="/assets/glide_home.jpeg"
                    width={165}
                    height={165}
                    alt="Free Plan"
                  />
                </a>
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Glide
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  No-Code
                </li>
                <li className="relative check custom-list my-2">
                  自分のGoogleシートと連携
                </li>
                <li className="relative check custom-list my-2">
                  スマホから自動でGoogleシートに記録
                </li>
                <li className="relative check custom-list my-2">
                  無料プランでできる
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <a href="https://www.glideapps.com/" className="flex flex-col w-full">
                  <ButtonOutline>Glide</ButtonOutline>
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/zapier-logo.svg"
                  width={145}
                  height={165}
                  alt="Standard Plan"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Zapier{" "}
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  No-Code
                </li>
                <li className="relative check custom-list my-2">
                  アプリとアプリを繋げる
                </li>
                <li className="relative check custom-list my-2">
                  通知機能が作れる
                </li>
                <li className="relative check custom-list my-2">
                  Google Sheets, Gmail, Twitter
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <a href="https://zapier.com/" className="flex flex-col w-full">
                  <ButtonOutline>Zapier</ButtonOutline>
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/javascript-logo.svg"
                  width={165}
                  height={165}
                  alt="Premium Plan"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Javascript{" "}
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  Nextjs and Vercel
                </li>
                <li className="relative check custom-list my-2">
                  Reactjs
                </li>
                <li className="relative check custom-list my-2">
                  Firebase
                </li>
                <li className="relative check custom-list my-2">
                  AWS
                </li>
                <li className="relative check custom-list my-2">
                  その他様々な言語やフレームワークで{" "}
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <a href="https://nextjs.org/" className="flex flex-col w-full">
                  <ButtonOutline>Nextjs</ButtonOutline>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full my-16">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
            WE LOVE FREE APPS{" "}
          </h3>
          <p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12">
            便利な無料サービスは世界中にあふれています。HULCはそのようなサービスを使ってアプリを開発するので無料です。
          </p>
          <div className="py-12 w-full px-8 mt-16">
            <Maps className="w-full h-auto" />
          </div>
        </div>
        <div className="flex flex-col w-full my-16" id="testimoni">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
            Trusted by many Customers{" "}
          </h3>
          <p className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12">
            実際にアプリを作った事例と使ってもらっている感想を聞いてみました。Many Customerと書いてありますが2020/12/10時点で1件です。
          </p>
          <div className="w-full flex flex-col py-12">
            <Testimoni />
          </div>
          <div className="relative w-full mt-16">
            <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
              <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                  Find a simple and free <br /> way to solve your problems
                </h5>
                <p>TwitterのDMにて気軽にご相談ください。</p>
              </div>
              <a href="https://twitter.com/HulcLow" className="flex flex-col">
                <ButtonPrimary>Contact us</ButtonPrimary>
              </a>
            </div>
            <div
              className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
              style={{ filter: "blur(114px)" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
