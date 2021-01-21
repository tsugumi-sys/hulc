import React from "react";
import Link from "next/link"
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
const Hero = () => {
  return (
    <div className="max-w-screen-xl mt-24 lg:mt-40 mb-16 lg:mb-24 px-8 xl:px-16 mx-auto" id="about">
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
          <h1 className="leading-relaxed text-3xl lg:text-4xl xl:text-4xl font-semibold text-black-600">
            北大ローコード(HULC)<br/>
            無料で使える便利なサービスを使いましょう。<br/>アプリ開発やサイト構築等のIT系サービスe.t.c
          </h1>
          <p className="text-black-500 mt-4 mb-6">
            色々なサービスを知っていること、使えることはあなたの武器になります。
            最近はコードを書かない（NoCodeやLowCode）サービスが充実しています。
          </p>
          <Link href="/techBlog">
            <a className="flex flex-col">
              <ButtonPrimary>サービスを見てみる</ButtonPrimary>
            </a>
          </Link>
        </div>
        <div className="flex w-full">
          <div className="h-full w-full">
            <Image
              src="/assets/bg15-1.png"
              alt="VPN Illustrasi"
              quality={100}
              width={500}
              height={350}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
