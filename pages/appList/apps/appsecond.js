import React from "react"
import Layout from "../../../components/Layout/AppList/Layout"
import BlogHeader from "../../../components/AppList/BlogHeader"
import Link from "next/link"


const AppFirst = () => {
    return (
        <Layout
          title="KAIKEI"
          description="シンプルなグループ会計アプリ"
          url="https://hulc.vercel.app/assets/appList/kaikei.PNG"
        >
            <BlogHeader
              title="KAIKEI"
              subTitle="シンプルなグループ会計アプリ"
              authorName="tsugumi7878"
              authorImage="/assets/memberIcon/tsugumi7878.jpg"
              coverImage="/assets/appList/kaikei.PNG"
            />
            <div className="max-w-screen-xl mx-auto">
                <div className="px-4 lg:px-0 mt-12 mb-4 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                    
                        <h3 className="text-3xl font-semibold text-black-600 leading-tight mb-3">
                            主な機能
                        </h3>
                        <ul className="list-disc list-inside lg:text-xl text-black-500 leading-tight mb-8">
                            <li className="my-2">複数人で一緒に記入、共有できる</li>
                            <li className="my-2">収入、支出の情報の追加、編集、削除</li>
                            <li className="my-2">Googleスプレッドシートに自動で反映</li>
                            <li className="my-2">当月の会計グラフの表示（年間グラフなどにも変えれます）</li>
                        </ul>

                        <h3 className="text-3xl font-semibold text-black-600 leading-tight mb-3">
                            作者より
                        </h3>
                        <p className="text-2xl text-black-500  mb-10">
                            簡単な会計アプリです。部活動やサークルの会計さん、出先で突然の会計業務に襲われることはありませんか？
                            いきなり部費を部員からもらったり、立替たりしたときでもこのアプリがあればスマホですぐに記入できます。
                            出先でエクセルファイルがないから、どこかにメモしておいてあとからどこにメモしたっけと探す必要はありません。
                            ぜひお試しあれ～。
                        </p>

                        <Link href="/appList/">
                            <a>
                                <button
                                    className="mr-5 mt-5 inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white-500 uppercase transition bg-blue-200 rounded-full shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none"
                                >
                                    Back
                                </button>
                            </a>
                        </Link>
                        <Link href="https://overconfident-vase-6025.glideapp.io/">
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