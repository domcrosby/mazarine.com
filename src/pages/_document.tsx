import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html className="h-full scroll-smooth bg-white antialiased" lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="flex h-full flex-col">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
