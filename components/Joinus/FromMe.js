import Image from "next/image";
import React from "react";

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
            多くのユーザーに使ってもらえるようなアプリを作るのがこのサークルの目標です。そのためにどんなに少なくともユーザーを獲得してアプリ開発・維持してみる経験、そして少人数でのグループ開発の経験が必要です。
          </p>
          <p className="my-2 text-black-500">
            ノーコードは前半の経験を得られるスピードが大幅に上がる素晴らしい技術です。様々な経験をしながらコーディング技術を鍛えていけそうです。
          </p>
          <p className="my-2 text-black-500">
            ノーコードで多くのシンプルなアプリを作り、より良いアプリのモデルを模索します。そこからローコードでコードを書いてより大規模で複雑なアプリを開発する。これがこのサークルの最終目標です。
          </p>
        </div>
      </div>
    </div>
  );
};

export default FromMe;
