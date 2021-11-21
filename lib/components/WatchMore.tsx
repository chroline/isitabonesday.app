import React from "react";

import { VStack, Heading, HStack, Text, Image, LinkOverlay, LinkBox } from "@chakra-ui/react";

import InstagramLogo from "../icons/instagram.svg";
import TikTokLogo from "../icons/tiktok.svg";

export const WatchMore: React.FC = () => {
  return (
    <VStack>
      <Heading size={"sm"} fontWeight={"400"} whiteSpace={"nowrap"}>
        Watch more <b>Noodle the Pug!</b>
      </Heading>
      <LinkBox as={HStack}>
        <Image src={TikTokLogo.src} h={5} alt={"TikTok"} />
        <Text>
          <LinkOverlay href={"https://tiktok.com/@jongraz"} target={"_blank"}>
            @jongraz
          </LinkOverlay>
        </Text>
      </LinkBox>
      <LinkBox as={HStack}>
        <Image src={InstagramLogo.src} h={5} alt={"Instagram"} />
        <Text>
          <LinkOverlay href={"https://instagram.com/showmenoodz"} target={"_blank"}>
            @showmenoodz
          </LinkOverlay>
        </Text>
      </LinkBox>
    </VStack>
  );
};
