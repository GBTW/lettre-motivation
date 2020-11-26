import Head from "next/head";

import Layout from "../components/Layout";
import Refus from "../components/Refus";

export default function IndexPage() {
  return (
    <Layout>

      {/* HEAD DE LA PAGE HTML */}
      <Head>
        <title>Refus - Pierre Debruyne</title>
      </Head>

      {/* SECTION REFUS DU SITE */}
      <Refus/>

    </Layout>
  );
}
