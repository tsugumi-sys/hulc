import Head from "next/head";
import LayoutSec from "../../components/Layout/LayoutSec";
import MastHead from "../../components/Joinus/MastHead";
import Info from "../../components/Joinus/Info";
import FromMe from "../../components/Joinus/FromMe";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hokkaido Univ. Low-Code Club</title>
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
