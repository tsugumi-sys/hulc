import React from "react";
import Link from "next/link"
import ButtonPrimary from "../misc/ButtonPrimary";

const Info =  () => {
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14 lg:py-24"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
            What you Need
          </h3>
          <p className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center">
            このサークルはアプリ開発とともに、学生や社会においてどんな課題やニーズがるのかを確認し、
            どのようなアプリがそれらを満たすことができるのかを実践しながら探求していくサークルです。
          </p>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-2 sm:px-0 lg:px-6">
            <Link href="https://twitter.com/HulcLow">
              <a>
                <div className="bg-white rounded-lg shadow-xl py-2 pb-10">
                  <div className="pt-10 pb-3 pl-20">
                    <div className="text-center flex flex-row items-center">
                      <h1 className="text-8xl font-bold">￥0</h1>
                    </div>
                  </div>
                  <div className="text-center w-5/6 mx-auto">
                    <h1 className="font-semibold text-2xl text-gray-700 mb-1">活動費用は0円</h1>
                    <p className="text-gray-600 mb-6">フリーサービスにこだわる限り、このサークルの運営（個人の会費）も無料であるべきです。</p>
                    
                    <ButtonPrimary>@HulcLow</ButtonPrimary>
                    
                  </div>
                </div>
              </a>
            </Link>

            <Link href="https://twitter.com/HulcLow">
              <a>
                <div className="bg-white rounded-lg shadow-xl py-2 pb-10">
                  <div className="pt-10 pb-3 pl-20">
                    <div className="text-center flex flex-row items-center">
                      <h1 className="text-8xl font-bold">EN</h1>
                      <p className="text-lg ml-3">英語</p>
                    </div>
                  </div>
                  <div className="text-center w-5/6 mx-auto">
                    <h1 className="font-semibold text-2xl text-gray-700 mb-1">英語がよく出てくる</h1>
                    <p className="text-gray-600 mb-6">
                      使用するサービスは海外のものが多いです。英語に抵抗がないと良いです。得意である必要はありません。
                    </p>
                    
                    <ButtonPrimary>@HulcLow</ButtonPrimary>
                    
                  
                  </div>
                </div>
              </a>
            </Link>

            <Link href="https://twitter.com/HulcLow">
              <a>
                <div className="bg-white rounded-lg shadow-xl py-2 pb-10">
                  <div className="pt-10 pb-3 pl-20">
                    <div className="text-center flex flex-row items-center">
                      <h1 className="text-8xl font-bold">PC</h1>
                      <p className="text-lg ml-3">& Wi-Fi</p>
                    </div>
                  </div>
                  <div className="text-center w-5/6 mx-auto">
                    <h1 className="font-semibold text-2xl text-gray-700 mb-1">必要なのはこの2つだけ</h1>
                    <p className="text-gray-600 mb-6">ノートPCとWi-Fi環境があればバリバリ活動ができます。ノートPCは高スペックでなくても問題ありません。</p>
                   
                    
                    <ButtonPrimary>@HulcLow</ButtonPrimary>
                    
                  </div>
                </div>
              </a>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
