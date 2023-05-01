import { Html, Head, Main, NextScript } from "next/document";

/**
 * The Document component is a Next.js component that is used to customize the
 * HTML document that is rendered for each page. This component sets the meta tags
 * for the Open Graph protocol, which is used by social media platforms to display
 * information about the website when it is shared.
 * @returns The HTML document with the appropriate meta tags for the Open Graph protocol.
 */
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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
