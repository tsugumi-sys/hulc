import React from "react";
import Image from "next/image";
import Link from "next/link"
import ButtonPrimary from "../misc/ButtonPrimary"

function MastHead() {
  return (
    <div className="bg-blue-400">
      <div className="max-w-screen-xl mt-20 px-8 xl:px-16 mx-auto bg-blue-400" id="about">
        <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 ">
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="leading-relaxed text-3xl lg:text-4xl xl:text-4xl font-semibold text-white-300">
              仲間募集中！！！
            </h1>
            <p className="text-gray-100 mt-4 mb-6">
              作ったばかりのサークルで、新メンバーを募集中！。
              <br />
              将来エンジニアやIT系志望の人もそうじゃない人も、ぜひ北大ローコードでアプリを作ってみませんか？
              <br />
              一緒にアプリ開発を楽しみましょう。
            </p>
            <Link href="https://twitter.com/HulcLow">
              <a>
                <ButtonPrimary>@HulcLow</ButtonPrimary>
              </a>
            </Link>
          </div>
          <div className="flex w-full">
            <div className="w-4/5 mx-auto">
              <Image
                src="/assets/joinus/joinus-image-top.png"
                alt="VPN Illustrasi"
                quality={100}
                width={300}
                height={300}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MastHead;
