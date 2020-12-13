import React from "react";
import Image from "next/image";
import ButtonOutline from "../misc/ButtonOutline.";

function Info() {
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
            What do you need to join us?
          </h3>
          <p className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center">
            HULCと一緒に活動するに当たって知っておいて欲しい基本的な情報をここで紹介します。
          </p>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <a href="https://www.glideapps.com/">
                  <Image
                    src="/assets/pin.png"
                    width={112}
                    height={123}
                    alt="Free Plan"
                  />
                </a>
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Active
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  プログラミングに興味がある
                </li>
                <li className="relative check custom-list my-2">
                  アプリを作って役立ててみたい
                </li>
                <li className="relative check custom-list my-2">
                  英語に抵抗がない(使用サービスが英語のため)
                </li>
                <li className="relative check custom-list my-2">
                  好奇心が強く積極的なメンバーを募集中
                </li>
              </ul>
              
            </div>
            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/tools.png"
                  width={80}
                  height={130}
                  alt="Standard Plan"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Tools{" "}
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  ノートパソコン
                </li>
                <li className="relative check custom-list my-2">
                  ネット環境
                </li>
                <li className="relative check custom-list my-2">
                  これらさえあればHULCのメンバーとして活動できます。
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20">
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/bg5-2.png"
                  width={170}
                  height={120}
                  alt="Premium Plan"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Note{" "}
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  会費はかかりません
                </li>
                <li className="relative check custom-list my-2">
                  このサークルはアプリ開発を通して収益を出すことが目的ではありません。
                </li>
                <li className="relative check custom-list my-2">
                  よってお金を稼ぐことはできません。
                </li>
                <li className="relative check custom-list my-2">
                  アプリ開発を通して部活・サークル等を支援する事が目的です。{" "}
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <a href="https://twitter.com/HulcLow" className="flex flex-col w-full">
                  <ButtonOutline>Contact Us</ButtonOutline>
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Info;
