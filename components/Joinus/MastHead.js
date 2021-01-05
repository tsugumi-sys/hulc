import React from "react";
import Image from "next/image";
import Link from "next/link"
import ButtonPrimary from "../misc/ButtonPrimary"

function MastHead() {
  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 ">
        <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
          <h1 className="leading-relaxed text-3xl lg:text-4xl xl:text-4xl font-semibold text-black-600">
             仲間募集中！！！
          </h1>
          <p className="text-black-500 mt-4 mb-6">
            作ったばかりのサークルで初期メンバーを探しています。
            <br />
            将来エンジニアやIT系志望の人、ぜひ僕と一緒にやってみませんか？
            <br />
            行動力があるそこのあなた！！DM待ってます。
          </p>
          <Link href="https://twitter.com/HulcLow">
            <a>
              <ButtonPrimary>@HulcLow</ButtonPrimary>
            </a>
          </Link>
        </div>
        <div className="flex w-full">
          <div className="h-full w-full">
            <Image
              src="/assets/joinus-image0.png"
              alt="VPN Illustrasi"
              quality={100}
              width={500}
              height={383}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MastHead;
