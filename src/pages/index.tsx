import Head from "next/head";
// import Image from "next/image";
// import homePic from "../public/home.jpeg";
import { Hero, Footer, NavBar } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mazarine Consulting</title>
      </Head>
      <NavBar />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}
