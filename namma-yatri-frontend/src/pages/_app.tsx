import React, { Suspense } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Loading from "@/component/Loading";
import Head from "next/head";

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
