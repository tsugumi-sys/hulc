import React from "react"
import Layout from "../../../components/Layout/AppList/Layout"
import BlogHeader from "../../../components/AppList/BlogHeader"
import Link from "next/link"

const AppFirst = () => {
    return (
        <Layout
          title="SHINKAN"
          description="HULC（北大ローコード）新入生記録とイベント管理アプリ"
          url="https://hulc.vercel.app/assets/appList/shinkan.PNG"
          ogImage="https://hulc.vercel.app/assets/appList/shinkan.PNG"
        >
            <BlogHeader
              title="SHINKAN"
              subTitle="新入生記録とイベント管理アプリ"
              authorName="tsugumi7878"
              authorImage="/assets/memberIcon/tsugumi7878.jpg"
              coverImage="/assets/appList/shinkan.PNG"
            />
            <div className="max-w-screen-xl mx-auto">
                <div className="px-4 lg:px-0 mt-12 mb-4 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                    
                        <h3 className="text-3xl font-semibold text-black-600 leading-tight mb-3">
                            主な機能
                        </h3>
                        <ul className="list-disc list-inside lg:text-xl text-black-500 leading-tight mb-8">
                            <li className="my-2">新入生の情報をGoogleスプレッドシートに記録、編集</li>
                            <li className="my-2">新入生ごとにイベントスケジュール（誰がいつどのイベントに来るか）を管理</li>
                            <li className="my-2">当日来る新入生をイベントごとに表示</li>
                            <li className="my-2">グループで情報を簡単に共有できます。</li>
                        </ul>

                        <h3 className="text-3xl font-semibold text-black-600 leading-tight mb-3">
                            作者より
                        </h3>
                        <p className="text-2xl text-black-500  mb-10">
                            新歓活動に向けて制作しました。新入生の情報をいちいちラインで報告したり、それをまとめてエクセルファイルに
                            記入したり、今日のイベントには何人の親入生が来るのかe.t.c....何かと大変ではないでしょうか。このアプリは
                            そんな面倒事をもっとシンプルにしてくれます。
                        </p>
                        <div>
                            <Link href="https://hulc.hatenablog.com/entry/2020/12/15/172010">
                                <a>
                                    <button
                                        className="mr-5 mt-5 inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white-500 uppercase transition bg-green-500 rounded-full shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none"
                                    >
                                        詳細
                                    </button>
                                </a>
                            </Link>
                            <p className="text-black-500 leading-tight mb-5 mt-5">
                                こちらでより詳細な情報を確認できます。
                            </p>
                        </div>
                        <Link href="/appList/">
                            <a>
                                <button
                                    className="mr-5 mt-5 inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white-500 uppercase transition bg-blue-200 rounded-full shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none"
                                >
                                    Back
                                </button>
                            </a>
                        </Link>
                        <Link href="https://quarrelsome-expert-6516.glideapp.io/">
                            <a>
                                <button
                                    className="mt-5 inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white-500 uppercase transition bg-orange-500 rounded-full shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none"
                                >
                                    Try App
                                </button>
                            </a>
                        </Link>
                        <p className="text-black-500 leading-tight mb-5 mt-5">
                            "TRY APP"ボタンから実際にデモアプリを使うことができます。
                        </p>
                </div>
        </div>
        </Layout>
    )
}

export default AppFirst;