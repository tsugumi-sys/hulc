import Image from "next/image";
import React from "react";
import ButtonPrimary from "../misc/ButtonPrimary";

const FromMe = () => {
  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <div className="flex w-full justify-end">
          <div className="h-full w-full p-4">
            <Image
              src="/assets/bg9-1.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={344}
              width={500}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center ml-auto w-full lg:w-9/12">
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            About Me
          </h3>
          <p className="my-2 text-black-500">
            北大理学部地球惑星科学科4年（理学院進学予定）です。元々所属していたボート部にてNo-Code
            アプリを作ったのがこのサークルができたきっかけでした。
          </p>
          <p className="my-2 text-black-500">
            プログラミングの知識がまだ少ししかないけど自分でアプリを作って人に使ってもらいたい。そんな思いを実現するのにNo-Codeはぴったりです。
            知識が全くなくても作れます。
          </p>
          <p className="my-2 text-black-500">
            活動を通して貴重な経験ができ、さらに大きく成長できる場所。そんなサークルを目指しています。
          </p>
        </div>
      </div>
    </div>
  );
};

export default FromMe;
