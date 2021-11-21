import React from "react";

import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Head from "next/head";

import "~/fonts/Fraunces/stylesheet.css";
import "~/fonts/Radial Sans/stylesheet.css";

const AppWrapper = dynamic(async () => (await import("~/components/AppWrapper")).AppWrapper);

function MyApp({ Component, pageProps }: AppProps) {
  const PWAPrompt = dynamic(() => import("react-ios-pwa-prompt"), {
    ssr: false,
  });

  return (
    <>
      <Head>
        <title>is it a bones day?</title>
      </Head>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
      {/*@ts-ignore*/}
      <PWAPrompt delay={2500} />
    </>
  );
}

export default MyApp;
