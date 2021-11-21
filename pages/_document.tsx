import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang={"en"}>
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

          <script async defer src="https://www.tiktok.com/embed.js"></script>
          <script defer data-domain="isitabonesday.app" src="https://plausible.io/js/plausible.js"></script>
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
