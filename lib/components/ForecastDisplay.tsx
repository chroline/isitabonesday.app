import React from "react";

import { Heading, Link } from "@chakra-ui/layout";

import { useStore } from "~/util/Store";
import { isToday, isYesterday } from "~/util/date-helpers";

export const ForecastDisplay: React.FC = () => {
  const [{ isBonesDay, date, caption, videoId }] = useStore();

  const color = isBonesDay ? "emerald" : "blue";

  const dateDisplay = isToday(date)
    ? "today's forecast"
    : isYesterday(date)
    ? "yesterday's forecast"
    : `forecast for ${date.toLocaleDateString()}`;

  return (
    <>
      <Link href={`https://www.tiktok.com/@jongraz/video/${videoId}`} isExternal>
        <Heading
          color={color + ".900"}
          opacity={"0.65"}
          size={"xl"}
          fontWeight={"600"}
          mb={-3}
          textDecoration={"underline"}
        >
          {dateDisplay}:
        </Heading>
      </Link>
      <Heading
        as={"h1"}
        color={color + ".600"}
        size={"4xl"}
        fontWeight={"900"}
        sx={{ fontVariationSettings: `"SOFT" 50,"WONK" 1` }}
      >
        {isBonesDay ? "bones day :)" : "no bones day :("}
      </Heading>
      <Heading color={color + ".900"} opacity={"0.85"} size={"md"} fontWeight={"600"}>
        {isToday(date) ? caption : "check back later for today's forecast!"}
      </Heading>
    </>
  );
};
