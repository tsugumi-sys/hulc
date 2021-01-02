import React from "react"
import Layout from "../../../components/Layout/AppList/Layout"
import BlogHeader from "../../../components/AppList/BlogHeader"
import Link from "next/link"


const AppListItem = () => {
    return (
        <Layout
          title="売り上げ管理アプリ"
          description="シンプルな売り上げ会計アプリ"
          url="https://hulc.vercel.app/assets/appList/uriage.png"
        >
            <BlogHeader
              title="売り上げ管理アプリ"
              subTitle="シンプルな売り上げグループ会計アプリ"
              authorName="tsugumi7878"
              authorImage="/assets/memberIcon/tsugumi7878.jpg"
              coverImage="/assets/appList/uriage.png"
            />
            <div className="max-w-screen-xl mx-auto">
                <div className="px-4 lg:px-0 mt-12 mb-4 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                    
                        <h3 className="text-3xl font-semibold text-black-600 leading-tight mb-3">
                            主な機能
                        </h3>
                        <ul className="list-disc list-inside lg:text-xl text-black-500 leading-tight mb-8">
                            <li className="my-2">日ごとの売り上げや新規お客様の数の記録機能</li>
                            <li className="my-2">月別の目標や営業日の設定機能</li>
                            <li className="my-2">目標と実績の表示、残り営業日から1営業日あたりの目標売上を計算して表示</li>
                        </ul>

                        <h3 className="text-3xl font-semibold text-black-600 leading-tight mb-3">
                            作者より
                        </h3>
                        <p className="text-2xl text-black-500  mb-10">
                        知人のエステのお店の売り上げ管理をできるアプリを作ってほしいと依頼があり、アプリを制作させていただきました。
                        売り上げの期間が月をまたいでいたのでそれをどうシンプルに実装するかが一番苦労しました。
                        パソコンから売り上げデータを計算してを紙に印刷、写真を撮り共有する業務を一日5個のデータ入力というシンプルな作業にしてくれました。
                        </p>
                        <div>
                            <Link href="https://hulc.hatenablog.com/entry/2021/01/02/162143">
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
                </div>
        </div>
        </Layout>
    )
}

export default AppListItem;