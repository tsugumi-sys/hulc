import React from "react"
import Post from "../../components/AppList/Post"
import Pastpost from "../../components/AppList/Pastpost"
import Layout from "../../components/Layout/AppList/Layout"
import PageHeader from "../../components/AppList/PageHeader"
import { getAllPosts } from "../../lib/index"

// hulcApplicationsContent

export async function getStaticProps() {
    const posts = await getAllPosts("hulcApplicationsContent")
    return { revalidate: 1, props: { posts } };
};

export default function TechBlog({ posts }) {
    const apps = [
        {
            title: "SCORES",
            subTitle: "選手のスコア記録・スケジュール管理アプリ",
            authorName: "tsugumi7878",
            authorImage: "/assets/memberIcon/tsugumi7878.jpg",
            slug: "appthird",
            coverImage:"/assets/appList/scores.png",
        },
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
        },
        {
            title: "URIAGE",
            subTitle: "シンプルな売り上げ会計アプリ",
            authorName: "tsugumi7878",
            authorImage: "/assets/memberIcon/tsugumi7878.jpg",
            slug: "appforth",
            coverImage:"/assets/appList/uriage.png",
        },
    ];
    return (
        <Layout>
            <PageHeader />
            <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-4 mt-4">
                <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
                  
                        <div className="flex flex-wrap -mx-1 lg:-mx-4">
                            {posts?.map(({ fields }) => (
                                <div className="my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" key={fields.slug}>
                                    <Post
                                    title={fields.title}
                                    subtitle={fields.subTitle}
                                    authorName={fields.author.fields.name}
                                    authorImage={fields.author.fields.image.fields.file.url}
                                    slug={fields.slug}
                                    date={fields.date}
                                    coverImage={fields.coverImage.fields.file.url}
                                    />
                                </div>
                            ))}
                            {apps?.map((fields) => (
                                <div className="my-3 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" key={fields.slug}>
                                    <Pastpost
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
