import React from "react"
import Post from "../../components/AppList/Post"
import Layout from "../../components/Layout/AppList/Layout"
import PageHeader from "../../components/AppList/PageHeader"


export default function TechBlog() {
    const apps = [
        {
            title: "SHINKAN",
            subTitle: "新入生記録とイベント管理アプリ",
            authorName: "tsugumi7878",
            authorImage: "/assets/memberIcon/tsugumi7878.jpg",
            slug: "appfirst",
            coverImage:"/assets/appList/shinkan.PNG",
        },
        {
            title: "KAIKEI",
            subTitle: "シンプルなグループ会計アプリ",
            authorName: "tsugumi7878",
            authorImage: "/assets/memberIcon/tsugumi7878.jpg",
            slug: "appsecond",
            coverImage:"/assets/appList/kaikei.PNG",
        }
    ];
    return (
        <Layout
        title="HULC App List"
        description="HULC（北大ローコード）のアプリです。ぜひ体験してみてね。"
        >
            <PageHeader />
            <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-4 mt-4">
                <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
                  
                        <div className="flex flex-wrap -mx-1 lg:-mx-4">
                            {apps?.map((fields) => (
                                <div className="my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" key={fields.slug}>
                                    <Post
                                    title={fields.title}
                                    subtitle={fields.subTitle}
                                    authorName={fields.authorName}
                                    authorImage={fields.authorImage}
                                    slug={fields.slug}
                                    coverImage={fields.coverImage}
                                    />
                                </div>
                            ))}
                        </div>
                 </div>
            </div>
        </Layout>
    )
}
