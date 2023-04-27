import React, { Suspense } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Loading from "@/component/Loading";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={null}>
      <Loading>
        <Component {...pageProps} />
      </Loading>
    </Suspense>
  );
}
