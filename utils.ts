import { createDefine } from "fresh";
import en from "./locales/en.json" with { type: "json" };
import zhHK from "./locales/zh-HK.json" with { type: "json" };

// =============================================================================
// Internationalization
// =============================================================================

const translations = { en, "zh-HK": zhHK } as const;

export type Lang = keyof typeof translations;

export type TranslationKey = keyof typeof en;

/** Get a translated string for the given language and key */
export const t = (lang: Lang, key: TranslationKey): string =>
  translations[lang][key];

/** Check if a value is a valid Lang */
export const isLang = (value: unknown): value is Lang =>
  value === "en" || value === "zh-HK";

// =============================================================================
// Fresh State & Define
// =============================================================================

export interface State {
  title: string;
  lang: Lang;
}

export const define = createDefine<State>();
