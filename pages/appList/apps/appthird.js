import React from "react"
import Layout from "../../../components/Layout/AppList/Layout"
import BlogHeader from "../../../components/AppList/BlogHeader"
import Link from "next/link"

const AppFirst = () => {
    return (
        <Layout
          title="SCORES"
          description="HULC（北大ローコード）スポーツ系サークル、部活用、記録・スケジュール管理アプリ"
          url="https://hulc.vercel.app/assets/appList/scores.png"
        >
            <BlogHeader
              title="SCORES"
              subTitle="スポーツ系サークル、部活用、記録・スケジュール管理アプリ"
              authorName="tsugumi7878"
              authorImage="/assets/memberIcon/tsugumi7878.jpg"
              coverImage="/assets/appList/scores.png"
            />
            <div className="max-w-screen-xl mx-auto">
                <div className="px-4 lg:px-0 mt-12 mb-4 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                    
                        <h3 className="text-3xl font-semibold text-black-600 leading-tight mb-3">
                            主な機能
                        </h3>
                        <ul className="list-disc list-inside lg:text-xl text-black-500 leading-tight mb-8">
                            <li className="my-2">選手の記録管理、グラフ表示</li>
                            <li className="my-2">チーム全体での情報（総データ数・選手ごとのデータ数表示</li>
                            <li className="my-2">選手のベストスコア等を一覧表示</li>
                            <li className="my-2">タイムトライアル等のスケジュール管理。</li>
                        </ul>

                        <h3 className="text-3xl font-semibold text-black-600 leading-tight mb-3">
                            作者より
                        </h3>
                        <p className="text-2xl text-black-500  mb-10">
                            部活・サークルでの記録管理と共有をもっと簡単にするために作成しました。選手個人のデータとチーム全体のデータを
                            表示することでチームのコーチングや選手個人の素早い状況把握に役立てて欲しいです。加えて、スケジュール管理と記
                            録管理を一体化することでチームのマネジメントにも力を発揮して欲しい。そんな思いをこのアプリに込めました。イエイ！
                        </p>
                        <div>
                            <Link href="https://hulc.hatenablog.com/entry/2020/12/21/192943">
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
                        <Link href="https://jazzy-hobbies-6470.glideapp.io/">
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