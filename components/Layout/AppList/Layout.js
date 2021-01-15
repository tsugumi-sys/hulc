import Header from "./Header"
import Footer from "./Footer"
import Head from "next/head"

const Layout = ({ children, title, description, ogImage, url }) => {
    const pageUrl = "https://hulc.vercel.app/appList";
    const ogImg = "https://hulc.vercel.app/assets/hulc-apps.png";
    return(
        <div>
            <Head>
                <title>{title ? title: "北大ローコード（HULC）アプリ一覧"}</title>
                <meta
                  name="description"
                  key="description"
                  content = {
                      description
                        ? description
                        : "北大ローコード（HULC）で開発したアプリ一覧です。様々なノーコード、ローコードサービスを使って作っています。今はGlideというアプリ開発サービスをメインに使っています。"
                  }
                />
                <link rel="icon" href="/favicon.ico" />
                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" key="techblog-twcard" />
                <meta name="twitter:creator" content="@HulcLow" key="techblog-twhandle" />

                {/* Open Graph */}
                <meta property="og:url" content={url ? url : pageUrl} key="techblog-ogurl" />
                <meta property="og:image" content={ogImg} key="techblog-ogimage" />
                <meta property="og:site_name" content="Hokkaido Univ. Low-Code Club" key="techblog-ogsitename" />
                <meta property="og:title" content="HULC(北大ローコード) Apps" key="techblog-ogtitle" />
                <meta property="og:description" content={
                    description
                      ? description
                      : "This is a statically generated blog example using Next.js and Contentful."
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