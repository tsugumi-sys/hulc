import Header from "./Header"
import Footer from "../Footer"
import Head from "next/head"

const Layout = ({ children, title, description, ogImage, url }) => {
    const pageUrl = "https://hulc.vercel.app/techBlog";
    const ogImg = "https://hulc.vercel.app/assets/hulc-techblog.png";
    const ogImageUrl = ogImage + "?fit=pad&w=1200&h=630";
    return(
        <div>
            <Head>
                <title>{title ? title: "北大ローコード（HULC）サービス"}</title>
                <meta
                  name="description"
                  key="description"
                  content = {
                      description
                        ? description
                        : "北大ローコードのメンバーが使っているサービスの一覧です。JavaScriptフレームワーク（Next.js, React.js e.t.c）やFirebase, Vercel, AWSなどのLow-codeサービス、大学研究に使うPython、についての内容です。"
                  }
                />
                <link rel="icon" href="/favicon.ico" />
                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" key="techblog-twcard" />
                <meta name="twitter:creator" content="@HulcLow" key="techblog-twhandle" />

                {/* Open Graph */}
                <meta property="og:url" content={url ? url : pageUrl} key="techblog-ogurl" />
                <meta property="og:image" content={ogImage ? ogImageUrl : ogImg} key="techblog-ogimage" />
                <meta property="og:site_name" content="Hokkaido Univ. Low-Code Club" key="techblog-ogsitename" />
                <meta property="og:title" content={title} key="techblog-ogtitle" />
                <meta property="og:description" content={
                    description
                      ? description
                      : "北大ローコードのメンバーが使っているサービスの一覧です。JavaScriptフレームワーク（Next.js, React.js e.t.c）やFirebase, Vercel, AWSなどのLow-codeサービス、大学研究に使うPython、についての内容です。"
                } key="techblog-ogdesc" />
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
            <style jsx global>
                {`
                    html:,
                    body {
                        background: #f9f9f9;
                        over-flow-x: hidden;
                        padding: 0 !important;
                    }
                    #__next {
                        min-height: 100vh;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }
                    main {
                        flex: 1;
                    }
                `}
            </style>
        </div>
    )
}

export default Layout;