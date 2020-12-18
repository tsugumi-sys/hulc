import Header from "./Header"
import Footer from "./Footer"
import Head from "next/head"

const Layout = ({ children, title, description, ogImage, url }) => {
    const pageUrl = "https://hulc.vercel.app/techBlog";
    const ogImg = "https://hulc.vercel.app/assets/hulchp-image.png";
    return(
        <>
            <Head>
                <title>{title ? title: "HULC Tech Blog"}</title>
                <meta
                  name="description"
                  key="description"
                  content = {
                      description
                        ? description
                        : "このブログはHULC（北大ローコード）のテックブログです。JavaScriptフレームワーク（Next.js, React.js e.t.c）やFirebase, Vercel, AWSなどのLow-codeサービス、大学研究に使うPython、についての内容です。"
                  }
                />
                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" key="twcard" />
                <meta name="twitter:creator" content="@HulcLow" key="twhandle" />

                {/* Open Graph */}
                <meta property="og:url" content={url ? url : pageUrl} key="ogurl" />
                <meta property="og:image" content={ogImage ? ogImage : ogImg} key="ogimage" />
                <meta property="og:site_name" content="Hokkaido Univ. Low-Code Club" key="ogsitename" />
                <meta property="og:title" content="HULC(北大ローコード)" key="ogtitle" />
                <meta property="og:description" content={
                    description
                      ? description
                      : "This is a statically generated blog example using Next.js and Contentful."
                } key="ogdesc" />
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
        </>
    )
}

export default Layout;