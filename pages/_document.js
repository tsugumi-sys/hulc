import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap"
            rel="stylesheet"
          />
          <meta content="HULC(北大ローコード)のホームページです。北海道大学のサークルとして2020年12月から活動を開始。北大IT系サークルとしてアプリケーション開発を通して他の学生団体（部活・サークル）を支援していくことが目的です。" name="description" />
          <meta charSet="utf-8" />
          
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:site" content="@HulcLow" />
          <meta property="og:url" content="https://hulc.tsugumi-sys.vercel.app/" />
          <meta property="og:title" content="HULC HP" />
          <meta property="og:description" content="HULC(北大ローコード)のホームページです。" />
          <meta property="og:image" content="https://drive.google.com/file/d/19f-DKRuy0YpQTAWLoxt8ze8RtCl_yoaG/view?usp=sharing" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
