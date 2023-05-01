import React, { Suspense } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Loading from "@/component/Loading";
import Head from "next/head";

/**
 * The main component of the Namma Yatri app. Renders the page title and a loading spinner
 * while the page is being loaded.
 * @param {AppProps} Component - The component to render.
 * @param {AppProps} pageProps - The props to pass to the component.
 * @returns The rendered component with a loading spinner.
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Namma Yatri</title>
      </Head>
      <Suspense fallback={null}>
        <Loading>
          <Component {...pageProps} />
        </Loading>
      </Suspense>
    </>
  );
}
