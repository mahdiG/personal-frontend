import { configureLocalization, localized, msg, str } from "@lit/localize";

export { localized, msg, str };

export const QUERY_PARAM_LANG = "lang";

const { getLocale, setLocale } = configureLocalization({
  sourceLocale: "en",
  targetLocales: ["fa"],
  loadLocale: (locale: string) =>
    locale === "en"
      ? Promise.resolve({ templates: {} })
      : import(`./generated/locales/${locale}.ts`),
});

export { getLocale, setLocale };

/**
 * Map locale code → display label (in its own language).
 */
export const LOCALE_LABELS: Record<string, string> = {
  en: "English",
  fa: "فارسی",
};

// gets ltr/rtl
export function getDir(locale: string) {
  if (locale === "fa") {
    return "rtl";
  }

  return "ltr";
}
