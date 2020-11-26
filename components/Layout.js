import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Layout({ children }) {
  return (

    // MAIN CONTAINER DU SITE
    <div className="flex flex-col h-screen justify-between">

      {/* HEADER DU SITE */}
      <Header/>

      {/* CONTENT DU SITE */}
      <div>{children}</div>

      {/* FOOTER DU SITE */}
      <Footer/>
      
    </div>
  );
}
