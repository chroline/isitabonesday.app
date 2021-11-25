import React from "react";

import { Box } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

import { IStore, StoreProvider } from "~/util/Store";
import { getMostRecentData as fetchMostRecentData } from "~/util/fetch-data";
import { wrapperVariants, itemVariants } from "~/util/transitionVariants";
import useIsSafari from "~/util/useIsSafari";

const Forecast = dynamic(async () => (await import("~/components/Forecast")).Forecast);
const VideoPanel = dynamic(async () => (await import("~/components/VideoPanel")).VideoPanel);

const _MotionStack = motion(Stack);
const _MotionBox = motion(Box);

export async function getStaticProps() {
  const data = await fetchMostRecentData();

  return {
    props: data,
    revalidate: 300, // 5 minutes
  };
}

const Index = (props: IStore & { date: string }) => {
  const isSafari = useIsSafari();

  return (
    <>
      <NextSeo
        title="is it a bones day?"
        description="Will today be a bones day? Will it be a no bones day? Keep up to date with Noodle the Pug's (almost) daily forecasts for whether you should wear soft pants or treat yo'self!"
        openGraph={{
          url: "https://isitabonesday.app",
          title: "is it a bones day?",
          description:
            "Will today be a bones day? Will it be a no bones day? Keep up to date with Noodle the Pug's (almost) daily forecasts for whether you should wear soft pants or treat yo'self!",
          images: [{ url: "https://isitabonesday.app/seo.png" }],
          site_name: "is it a bones day?",
        }}
        twitter={{
          handle: "@colegawin_",
          site: "@jongraz",
          cardType: "summary_large_image",
        }}
      />
      <StoreProvider state={{ ...props, date: new Date(props.date) }}>
        <_MotionStack
          direction={{ base: "column", lg: "row" }}
          h={!isSafari ? { lg: "full" } : "full"}
          w={"full"}
          spacing={0}
          variants={wrapperVariants}
          initial={"hidden"}
          animate={"show"}
        >
          <Forecast />
          {!isSafari && (
            <_MotionBox
              position={{ lg: "absolute" }}
              right={{ lg: 0 }}
              w={{ base: "full", lg: "325px" }}
              pt={{ base: 5, md: 14 }}
              pb={14}
              px={20}
              // @ts-ignore
              boxSizing={{ lg: "content-box" }}
              variants={itemVariants}
            >
              <VideoPanel />
            </_MotionBox>
          )}
        </_MotionStack>
      </StoreProvider>
    </>
  );
};

export default Index;
