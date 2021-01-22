import React from "react";
import Link from "next/link"
import ButtonPrimary from "./misc/ButtonPrimary";

const Pricing = () => {
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14 lg:py-24"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
            Activities
          </h3>
          <p className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center">
            北大ローコードは2020年12月初旬に誕生しました。無料のサービスを駆使しながらいかにチープで良質なアプリが作れるかを追求するサークルです。
          </p>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-2 sm:px-0 lg:px-6">
            
            <Link href="/joinus">
                <a>
                  <div className="bg-white rounded-lg shadow-xl py-2 pb-10">
                    <div className="pt-10 pb-3 pl-20">
                      <div className="text-center flex flex-row items-center">
                        <h1 className="text-8xl font-bold">+1</h1>
                        <p className="text-lg ml-3">Members</p>
                      </div>
                    </div>
                    <div className="text-center w-5/6 mx-auto">
                      <h1 className="font-semibold text-2xl text-gray-700 mb-1">Join Us Now</h1>
                      <p className="text-gray-600 mb-6">
                        無料サービスを使って、一緒に活動してみませんか？
                        北大ローコードは仲間を募集しています。
                      </p>
                      <ButtonPrimary>Join Us</ButtonPrimary>
                    </div>
                  </div>
                </a>
              </Link>


              <Link href="/techBlog">
                <a>
                  <div className="bg-white rounded-lg shadow-xl py-2 pb-10">
                    <div className="pt-10 pb-3 pl-20">
                      <div className="text-center flex flex-row items-center">
                        <h1 className="text-8xl font-bold">+9</h1>
                        <p className="text-lg ml-3">Services</p>
                      </div>
                    </div>
                    <div className="text-center w-5/6 mx-auto">
                      <h1 className="font-semibold text-2xl text-gray-700 mb-1">Check the Services</h1>
                      <p className="text-gray-600 mb-6">サークルで使用するサービスやフレームワークについてシンプルにまとめています。</p>
                      <ButtonPrimary>Services</ButtonPrimary>
                    </div>
                  </div>
                </a>
              </Link>
            
            
            <Link href="/appList">
              <a>
                <div className="bg-white rounded-lg shadow-xl py-2 pb-10">
                  <div className="pt-10 pb-3 pl-20">
                    <div className="text-center flex flex-row items-center">
                      <h1 className="text-8xl font-bold">+4</h1>
                      <p className="text-lg ml-3">Apps</p>
                    </div>
                  </div>
                  <div className="text-center w-5/6 mx-auto">
                    <h1 className="font-semibold text-2xl text-gray-700 mb-1">Check App List</h1>
                    <p className="text-gray-600 mb-6">サークルメンバーが無料サービスを駆使して作成したアプリをぜひ見てみてください。</p>
                    
                    <ButtonPrimary>アプリを見る</ButtonPrimary>
                      
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

export default Pricing;
