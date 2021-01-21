import React from "react"
import { useRouter } from "next/router"
import ErrorPage from "next/error"
import Layout from "../../../components/Layout/AppList/Layout"
import BlogHeader from "../../../components/AppList/BlogHeader"
import ContentfulBody from "../../../components/AppList/ContentfulBody"
import MorePost from "../../../components/TechBlog/MorePost"
import { getPostBySlug, getMorePosts, getAllPostsWithSlug } from "../../../lib/index"

export async function getStaticPaths() {
    const allPosts = await getAllPostsWithSlug("hulcApplicationsContent")
    return {
        paths: allPosts?.map(({ slug }) => `/appList/posts/${slug}`) ?? [],
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const post = await getPostBySlug(params.slug, "hulcApplicationsContent")
    const morePosts = await getMorePosts(params.slug, "hulcApplicationsContent")
    return {
        props: {
            post: post ? post : null,
            morePosts: morePosts ? morePosts : null,
        },
        revalidate: 1,
    }
}

const Blog = ({ post, morePosts }) => {
    const router = useRouter();
    if (!router.isFallback && !post) {
        return <ErrorPage statusCode={404} />;
    }
    return (
        <Layout
          title={post?.fields.title}
          description={post?.fields.subTitle}
          url={`https://hulc.vercel.app/techBlog/posts/${post?.fields.slug}`}
          ogImage={"https:"+post?.fields.coverImage.fields.file.url}
        >
            <BlogHeader
              title={post?.fields.title}
              subTitle={post?.fields.subTitle}
              authorName={post?.fields.author.fields.name}
              authorImage={post?.fields.author.fields.image.fields.file.url}
              slug={post?.fields.slug}
              date={post?.fields.date}
              coverImage={post?.fields.coverImage.fields.file.url}
            />
            <ContentfulBody content={post?.fields.content} />
            {morePosts && (
                <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14 mt-24">
                    <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
                            <h1 className="text-xl">Resent Posts</h1>
                            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                                {morePosts?.map(({ fields }) => (
                                    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" key={fields.slug}>
                                        <MorePost
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
            )}
        </Layout>
    )
}

export default Blog;