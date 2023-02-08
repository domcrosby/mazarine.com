import Head from "next/head";
// import Image from "next/image";
// import homePic from "../public/home.jpeg";
import { Hero, NavBar } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mazarine Consulting</title>
      </Head>
      <NavBar />
      <>
        <Hero />
        <div className="text-center p-8 ">
          <p className="mt-2 text-3xl font-light leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Landscape photographer based in Boulder, Colorado.
          </p>
        </div>
        <div className="p-8">
          {/* <Image
            src={homePic}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
            alt="landscape view"
            priority
            placeholder="blur"
          /> */}
        </div>
      </>
    </>
  );
}
