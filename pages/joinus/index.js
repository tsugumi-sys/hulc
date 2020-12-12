import Head from "next/head";
import LayoutSec from "../../components/Layout/LayoutSec";
import MastHead from "../../components/Joinus/MastHead";
import Info from "../../components/Joinus/Info";
import FromMe from "../../components/Joinus/FromMe";

export default function Home() {
  return (
    <>
      <Head>
        <title>HULC Joinus Page</title>
        <meta content="HULC(北大ローコード)のメンバー募集ホームページです。北海道大学のサークルとして2020年12月から活動を開始。北大IT系サークルとしてアプリケーション開発を通して他の学生団体（部活・サークル）を支援していくことが目的です。" name="description" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutSec>
        <MastHead />
        <Info />
        <FromMe />
      </LayoutSec>
    </>
  );
}
