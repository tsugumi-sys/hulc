import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from '../lib/gtag'

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
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
             dangerouslySetInnerHTML={{
               __html: `
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
               
               gtag('config', '${GA_TRACKING_ID}', {
                 page_path: window.location.pathname,
               });
             `,
             }}
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap"
            rel="stylesheet"
          />
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
