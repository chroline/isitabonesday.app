import React from "react";

import { Flex, Box, Text, Heading, Link } from "@chakra-ui/react";
import Image from "next/image";

import Bone from "../../public/bone.png";

export const Header: React.FC = () => {
  return (
    <Flex textAlign={"center"} align={"center"} direction={"column"}>
      <Box w={16} pb={4}>
        <Image src={Bone} alt={"bone"} />
      </Box>
      <Heading fontSize={"2xl"} fontWeight={600} opacity={0.65}>
        is it a bones day?
      </Heading>
      <Text fontSize={"lg"} fontWeight={400}>
        <Text opacity={0.65} as={"span"}>
          made with
        </Text>{" "}
        ❤️{" "}
        <Text opacity={0.65} as={"span"}>
          by{" "}
          <Link href={"https://instagram.com/colegawin"} isExternal>
            Cole Gawin
          </Link>
        </Text>
      </Text>
    </Flex>
  );
};
