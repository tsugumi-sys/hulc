import React　from 'react'
import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
//import Loading from "../components/Loading/Loading"

export default function Home() {
  return (
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
      </Layout>
  );
}
