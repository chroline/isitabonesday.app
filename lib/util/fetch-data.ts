import { google } from "googleapis";

import { IStore } from "./Store";

const spreadsheetId = "13jHJgGRXc9xbOUgGTpAXTdQru1Z6nbPSMRLZvuVlUbY";

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GAPI_KEY),
  scopes: "https://www.googleapis.com/auth/spreadsheets",
});

export async function getMostRecentData() {
  const {
    data: { values },
  } = await google.sheets({ version: "v4", auth: await auth.getClient() }).spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "A:E",
  });

  const [, date, _isBonesDay, videoId, caption] = values[values.length - 1];

  return {
    date,
    isBonesDay: _isBonesDay === "bones day :)",
    videoId,
    caption,
  } as IStore & { date: string };
}
