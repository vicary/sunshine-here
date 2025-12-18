import { createDefine } from "fresh";
import { type Lang } from "./i18n.ts";

export interface State {
  title: string;
  lang: Lang;
}

export const define = createDefine<State>();
