import { useState } from "react";

import constate from "constate";

export interface IStore {
  date: Date;
  isBonesDay: boolean;
  videoId: string;
  caption: string;
}

const [StoreProvider, useStore] = constate(({ state }: { state: IStore }) => useState(state));

export { StoreProvider, useStore };
