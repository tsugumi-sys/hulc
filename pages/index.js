import Head from "next/head";
import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hokkaido Univ. Low-Code Club</title>
        <meta content="HULC(北大ローコード)のホームページです。北海道大学のサークルとして2020年12月から活動を開始。北大IT系サークルとしてアプリケーション開発を通して他の学生団体（部活・サークル）を支援していくことが目的です。" name="description" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
        <link rel="icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="@HulcLow" />
        <meta property="og:url" content="https://hulc.tsugumi-sys.vercel.app/" />
        <meta property="og:title" content="HULC HP" />
        <meta property="og:description" content="HULC(北大ローコード)のホームページです。" />
        <meta property="og:image" content="/assets/twittercard.png" />
      </Head>
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
      </Layout>
    </>
  );
}
