import React from "react"
import Post from "../../components/TechBlog/Post"
import Layout from "../../components/Layout/TechBlog/Layout"
import PageHeader from "../../components/TechBlog/PageHeader"
import { getAllPosts } from "../../lib/index"

export async function getStaticProps() {
    const posts = await getAllPosts("hurcBlogContent2");
    return { revalidate: 1, props: { posts } };
};

export default function TechBlog({ posts }) {
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
                        </div>
                 </div>
            </div>
        </Layout>
    )
}
