import React from "react";
import Footer from "./Footer";
import HeaderSec from "./HeaderSec";
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>北大ローコード（Hokkaido Univ. LowCode Club）Join Us Page</title>
        <meta content="HULC(北大ローコード)のホームページです。北海道大学のサークルとして2020年12月から活動を開始。無料サービスを使いこなして色々できる人をたくさん輩出します。" name="description" />
        <link rel="icon" href="/favicon.ico" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta name="twitter:creator" content="@HulcLow" key="twhandle" />

        {/* Open Graph */}
        <meta property="og:url" content="https://hulc.vercel.app/" key="ogurl" />
        <meta property="og:image" content="https://hulc.vercel.app/assets/hulchp-image.png" key="ogimage" />
        <meta property="og:site_name" content="Hokkaido Univ. Low-Code Club" key="ogsitename" />
        <meta property="og:title" content="HULC(北大ローコード)" key="ogtitle" />
        <meta property="og:description" content="HULC(北大ローコード)のメンバー募集ページです。" key="ogdesc" />
      </Head>
      <HeaderSec />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
