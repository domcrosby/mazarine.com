import Document, { Html, Head, Main, NextScript } from "next/document";
import { classNames, Flex } from "@/libs";

const maxWidth = "max-w-7xl";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="relative min-h-screen justify-center flex">
          <div className={classNames("pb-32 w-full", maxWidth)}>
            <Main />
          </div>

          <NextScript />
          <footer className="z-50 p-8 bg-blue-900 absolute h-32 bottom-0 w-screen flex justify-center">
            <Flex
              className={classNames(
                "justify-between items-center w-full",
                maxWidth
              )}
            >
              <p className="text-3xl font-light text-slate-50">Mazarine</p>
              <p className="flex space-x-4 right-0 text-slate-50">
                Made by hand
              </p>
            </Flex>
          </footer>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
