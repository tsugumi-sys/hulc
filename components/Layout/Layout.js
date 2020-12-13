import React from "react";
import Head from 'next/head';
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta name="twitter:site" content="@HulcLow" />
        <meta property="og:url" content="https://hulc.vercel.app/" key="ogurl" />
        <meta property="og:title" content="HULC HP" key="ogsitename" />
        <meta property="og:description" content="HULC(北大ローコード)のホームページです。" key="ogdesc" />
        <meta property="og:image" content="/assets/twitter-card.png" key="ogimage" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
