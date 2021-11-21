import { Heading, VStack, Stack, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { wrapperVariants, itemVariants } from "../util/transitionVariants";
import { TikTokEmbed } from "./TikTokEmbed";
import { WatchMore } from "./WatchMore";

const _MotionStack = motion(Stack);
const _MotionVStack = motion(VStack);

export const VideoPanel: React.FC = () => {
  const isLG = useBreakpointValue({ base: false, lg: true });

  return (
    <_MotionStack
      direction={{ base: "column-reverse", md: "row" }}
      align={"center"}
      justify={{ base: "space-evenly", md: "center" }}
      spacing={14}
      variants={wrapperVariants}
      initial={"hidden"}
      animate={"show"}
    >
      {!isLG && (
        <motion.div variants={itemVariants}>
          <WatchMore />
        </motion.div>
      )}
      <_MotionVStack spacing={14} variants={wrapperVariants} initial={"hidden"} animate={"show"}>
        {isLG && (
          <motion.div variants={itemVariants}>
            <Heading size={"lg"} fontWeight={"400"}>
              <b>watch</b> the forecast:
            </Heading>
          </motion.div>
        )}
        <motion.div variants={itemVariants}>
          <TikTokEmbed />
        </motion.div>
      </_MotionVStack>
    </_MotionStack>
  );
};
