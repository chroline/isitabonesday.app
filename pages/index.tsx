import React from "react";

import { Box } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
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
  );
};

export default Index;
