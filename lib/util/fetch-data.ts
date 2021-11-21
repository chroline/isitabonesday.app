import cheerio from "cheerio";

import { IStore } from "./Store";

type BonesBackendRes = Array<{
  _id: string;
  date: string;
  value: "n" | "b";
  link: string;
  embedblock: string;
}>;

export async function getMostRecentData() {
  const [todayData] = (await (await fetch("https://bones-backend.herokuapp.com/bones")).json()) as BonesBackendRes;

  return {
    date: todayData.date,
    isBonesDay: todayData.value === "b",
    videoId: todayData.link.split("https://www.tiktok.com/@jongraz/video/")[1].split("?")[0],
    caption: cheerio.load(todayData.embedblock, null)("blockquote section").text().split(" 🔮🦴🔮")[0] + " 🔮🦴🔮",
  } as IStore & { date: string };
}
