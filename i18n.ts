import en from "./locales/en.json" with { type: "json" };
import zhHK from "./locales/zh-HK.json" with { type: "json" };

const translations = { en, "zh-HK": zhHK } as const;

export type Lang = keyof typeof translations;

export type TranslationKey = keyof typeof en;

export function t(lang: Lang, key: TranslationKey): string {
  return translations[lang][key];
}
