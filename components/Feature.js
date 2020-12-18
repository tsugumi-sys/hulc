import Image from "next/image";
import Link from "next/link"
import React from "react";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonSecondary from "./misc/ButtonSecondary"

const Feature = () => {
  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
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
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            We Make a Very Simple App for You
          </h3>
          <p className="my-2 text-black-500">
            HULCはNo(Low)-Codeアプリをあなた自身やあなたの部活・サークルのために作ります
          </p>
          <ul className="text-black-500 self-start list-inside ml-8">
            <li className="relative circle-check custom-list">
              記録作業をスマホでやりたい
            </li>
            <li className="relative circle-check custom-list">
              使用するサービスが増えすぎて困っている
            </li>
            <li className="relative circle-check custom-list">
              自分好みのサービスがなかなか見つからない
            </li>
            <li className="relative circle-check custom-list">
              この問題、No-Codeで解決できるかも知れません
            </li>
          </ul>
          <a href='https://hulc.hatenablog.com/' className='mt-5 mb-5'>
            <ButtonPrimary>&emsp;Blog&ensp;&emsp;</ButtonPrimary>
        　</a>
          <Link href="/techBlog/">
            <a>
              <ButtonSecondary>Tech Blog</ButtonSecondary>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Feature;
