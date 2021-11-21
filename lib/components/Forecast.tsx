import { Box, VStack } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { Global } from "@emotion/react";
import { motion } from "framer-motion";
import Head from "next/head";

import { wrapperVariants, itemVariants } from "../util/transitionVariants";
import { ForecastDisplay } from "./ForecastDisplay";
import { Header } from "./Header";
import { WatchMore } from "./WatchMore";
import { useStore } from "~/util/Store";
import theme from "~/util/theme";
import useIsSafari from "~/util/useIsSafari";

const _MotionVStack = motion(VStack);
const _MotionBox = motion(Box);

export const Forecast: React.FC = () => {
  const [{ isBonesDay, date }] = useStore();

  const includeWatchMore = useBreakpointValue({ md: false, lg: true });

  const backgroundColor = theme.colors[isBonesDay ? "emerald" : "blue"][50];

  const isSafari = useIsSafari();

  return (
    <>
      <Head>
        {typeof window !== "undefined" && !/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent) && (
          <title>
            {date.toLocaleDateString()} is a {isBonesDay ? "bones day :)" : "no bones day :("}
          </title>
        )}
        <meta name="theme-color" content={backgroundColor} />
      </Head>
      <Global styles={{ "html, body": { backgroundColor: theme.colors[isBonesDay ? "emerald" : "blue"][50] } }} />
      <_MotionBox
        flex={1}
        position={!isSafari && { lg: "fixed" }}
        w={!isSafari ? { lg: "calc(calc(100% - 325px) - var(--chakra-space-20))" } : "full"}
        h={"100%"}
        variants={itemVariants}
      >
        <_MotionVStack
          w={"full"}
          h={"full"}
          align={"center"}
          textAlign={"center"}
          py={14}
          px={8}
          direction={"column"}
          justify={"space-between"}
          overflow={"auto"}
          spacing={10}
          variants={wrapperVariants}
          initial={"hidden"}
          animate={"show"}
        >
          <Header />
          <motion.div variants={itemVariants}>
            <_MotionVStack spacing={6}>
              <ForecastDisplay />
            </_MotionVStack>
          </motion.div>
          {(includeWatchMore || isSafari) && <WatchMore />}
        </_MotionVStack>
      </_MotionBox>
    </>
  );
};
