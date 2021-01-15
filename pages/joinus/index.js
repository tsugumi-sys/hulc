import Head from "next/head";
import LayoutSec from "../../components/Layout/LayoutSec";
import MastHead from "../../components/Joinus/MastHead";
import Info from "../../components/Joinus/Info";
import FromMe from "../../components/Joinus/FromMe";

export default function Home() {
  return (
    <div>
      <LayoutSec>
        <MastHead />
        <Info />
        <FromMe />
      </LayoutSec>
    </div>
  );
}
