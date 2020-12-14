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
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletamanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
          />
          <script
             dangerouslySetInnerHTML={{
               __html: `
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
               
               gtag('config', '${process.env.GA_TRACKING_ID}', {
                 page_path: window.location.pathname,
               });
             `,
             }}
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap"
            rel="stylesheet"
          />
          <meta content="HULC(北大ローコード)のホームページです。北海道大学のサークルとして2020年12月から活動を開始。北大IT系サークルとしてアプリケーション開発を通して他の学生団体（部活・サークル）を支援していくことが目的です。" name="description" />
          <meta charSet="utf-8" />
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
