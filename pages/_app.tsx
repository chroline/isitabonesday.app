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
        <meta charSet={"utf-8"} />

        <link rel={"icon"} href={"favicon.png"} />
        <link rel={"manifest"} href={"/manifest.json"} />

        <link rel={"apple-touch-icon"} href={"/icons/icon-192x192.png"}></link>
        <meta name={"apple-mobile-web-app-status-bar-style"} content={"black"} />

        <meta
          name={"description"}
          content={
            "Will today be a bones day? Will it be a no bones day? Keep up to date with Noodle the Pug's (almost) daily forecasts for whether you should wear soft pants or treat yo'self!"
          }
        />
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
