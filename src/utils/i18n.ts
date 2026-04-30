export const languages = {
  en: "English",
  ko: "한국어",
  de: "Deutsch",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.blog": "Blog",
    "nav.about": "About",
    "blog.translation-in-progress": "Translation in progress",
    "blog.translation-available-in": "This post is available in:",
    "blog.back-to-list": "Back to Blog",
  },
  ko: {
    "nav.home": "Home",
    "nav.blog": "Blog",
    "nav.about": "About",
    "blog.translation-in-progress": "Translation in progress",
    "blog.translation-available-in": "This post is available in:",
    "blog.back-to-list": "Back to Blog",
  },
  de: {
    "nav.home": "Startseite",
    "nav.blog": "Blog",
    "nav.about": "Über mich",
    "blog.translation-in-progress": "Übersetzung in Arbeit",
    "blog.translation-available-in": "Dieser Beitrag ist verfügbar in:",
    "blog.back-to-list": "Zurück zum Blog",
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split("/");
  if (maybeLang in ui) return maybeLang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function getLocalizedPath(
  currentPath: string,
  currentLang: Lang,
  targetLang: Lang,
): string {
  const stripped =
    currentLang !== defaultLang
      ? currentPath.replace(new RegExp(`^/${currentLang}`), "") || "/"
      : currentPath;

  return targetLang !== defaultLang ? `/${targetLang}${stripped}` : stripped;
}

export function getLangFromPostId(id: string): Lang {
  const prefix = id.split("/")[0];
  return prefix in languages ? (prefix as Lang) : defaultLang;
}

export function getBareSlug(id: string): string {
  const parts = id.split("/");
  return parts.length > 1 ? parts.slice(1).join("/") : parts[0];
}
