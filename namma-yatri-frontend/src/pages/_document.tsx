import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="NammaYatri" />
        <meta
          property="og:description"
          content="web-app for booking auto drivers"
        />
        <meta
          property="og:image"
          content="https://nammayatri.in/logos/nammaYatrilogo.svg"
        />
        <title>Namma Yatri</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
