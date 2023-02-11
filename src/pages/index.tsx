import Head from "next/head";
// import Image from "next/image";
// import homePic from "../public/home.jpeg";
import { Companies, Hero, Footer, NavBar } from "../components";
import { Flex, Grow } from "@/libs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mazarine Consulting</title>
      </Head>
      <Flex column full>
        <NavBar />
        <Grow>
          <Hero />
          <Companies />
        </Grow>
        <Footer />
      </Flex>
    </>
  );
}
