import Image from "next/image";
import Link from "next/link"
import React from "react";
import ButtonPrimary from "./misc/ButtonPrimary";

const Feature = () => {
  return (
    <div
      className="max-w-screen-xl mt-14 lg:mt-40 mb-16 lg:mb-24 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >                 
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <div className="flex w-full justify-end">
          <div className="h-full w-full p-4">
            <Image
              src="/assets/bg8-2.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={357}
              width={550}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center ml-auto w-full lg:w-9/12">
          <h3 className="text-3xl lg:text-4xl font-bold leading-relaxed text-black-600">
            便利なサービスを駆使して、やりたいことを実現しましょう。
          </h3>
          <p className="my-2 text-black-500">
            良いサービスはできることの可能性を広げてくれます。北大ローコードのメンバーがどんなものを作ったか確認できます。
          </p>
          <ul className="text-black-500 self-start list-inside ml-8 mb-6">
            <li className="relative circle-check custom-list">
              WEB、スマホアプリケーション作成
            </li>
            <li className="relative circle-check custom-list">
              HP構築、ブログ設置、
            </li>
            <li className="relative circle-check custom-list">
              LINE通知、メール通知の自動化
            </li>
          </ul>
          <Link href="/appList">
            <a>
              <ButtonPrimary>アプリを見てみる</ButtonPrimary>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Feature;
