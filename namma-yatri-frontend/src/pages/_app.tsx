import React, { Suspense } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Loading from "@/component/Loading";
import { Provider } from "react-redux";
import { store } from "../Store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={null}>
      <Loading>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
        ,
      </Loading>
    </Suspense>
  );
}
