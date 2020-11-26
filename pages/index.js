import Head from "next/head";

import Layout from "../components/Layout";
import Hero from "../components/Hero";

export default function IndexPage() {
  return (
    <Layout>


        {/* HEAD DE LA PAGE HTML */}
        <Head>
          <title>Pierre Debruyne - Carbone 4</title>
        </Head>

        {/* SECTION HERO DU SITE */}
        <Hero/>

    </Layout>
  );
}
