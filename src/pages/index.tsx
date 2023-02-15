import Head from "next/head";
// import Image from "next/image";
// import homePic from "../public/home.jpeg";
import { Companies, Hero, Footer, NavBar } from "../components";
import { StandardLayout } from "@/libs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mazarine Consulting</title>
      </Head>
      <StandardLayout header={<NavBar />} footer={<Footer />}>
        <Hero />
        <Companies />
      </StandardLayout>
    </>
  );
}
