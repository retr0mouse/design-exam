import Image from "next/image";
import Ads from "./components/Ads";
import Events from "./components/Events";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        // link fonts from here and configure them in tailwind.config.js and use them as font-helvetica
      </Head>
      <div className="w-full flex flex-col">
        <Header/>
        <div className="flex flex-col bg-landing w-full h-96 justify-center items-center"><p className="text-white font-bold text-4xl">Lorem ipsum dolor sit amet</p></div>
          <Events/>
          <Ads/>
        <Footer/>
      </div>
    </>
    
  )
}
