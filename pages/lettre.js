import Head from "next/head";

import Layout from "../components/Layout";
import Lettre from "../components/Lettre";

export default function IndexPage() {
  return (
    <Layout>

        {/* HEAD DE LA PAGE HTML */}
        <Head>
          <title>Lettre de motivation - Pierre Debruyne</title>
        </Head>

        {/* SECTION LETTRE DE MOTIVATION DU SITE */}
        <Lettre/>

    </Layout>
  );
}
