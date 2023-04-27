import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="NammaYatri" />
        <meta
          property="og:description"
          content="Add your og:description here"
        />
        <meta property="og:image" content="Add your og:image here" />
        <title>Namma Yatri</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
