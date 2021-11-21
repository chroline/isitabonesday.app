import { Box } from "@chakra-ui/layout";
import Head from "next/head";
import Script from "next/script";

import { useStore } from "~/util/Store";

export const TikTokEmbed: React.FC = () => {
  const [{ isBonesDay, videoId }] = useStore();

  const baseColor = isBonesDay ? "5, 150, 105" : "30, 58, 138";

  return (
    <>
      <Head>
        <Script src={"https://www.tiktok.com/embed.js"} strategy={"afterInteractive"} />
      </Head>
      <Box
        w={"325px"}
        style={{
          borderRadius: "8px",
          overflow: "hidden",
          filter: `drop-shadow(0px 6.0308px 23.8999px rgba(${baseColor}, 0.0715329)) drop-shadow(0px 3.38082px 13.3981px rgba(${baseColor}, 0.06)) drop-shadow(0px 1.79553px 7.11561px rgba(${baseColor}, 0.0484671)) drop-shadow(0px 0.747159px 2.96096px rgba(${baseColor}, 0.0337375))`,
        }}
        sx={{
          "& > blockquote": {
            margin: 0,
          },
        }}
      >
        <blockquote className={"tiktok-embed"} data-video-id={videoId}>
          <section>
            <a target={"_blank"} title={"@jongraz"} href={"https://www.tiktok.com/@jongraz"}>
              @jongraz
            </a>
          </section>
        </blockquote>
      </Box>
    </>
  );
};
