// The site is in English, with a Kannada version of the homepage and contact
// page under /kn. Components take a `lang` prop and keep their own copy for
// each language next to the markup.
export type Lang = "en" | "kn";

// Path prefix for each language: "" for English, "/kn" for Kannada.
export const LANG_PREFIX: Record<Lang, string> = { en: "", kn: "/kn" };

// Builds a path in the given language, e.g. localPath("kn", "/contact") is "/kn/contact".
export function localPath(lang: Lang, path: string): string {
  const prefix = LANG_PREFIX[lang];
  if (!prefix) return path;
  return path === "/" ? prefix : `${prefix}${path.startsWith("/#") ? path.slice(1) : path}`;
}

// hreflang alternates for a page that exists in both languages.
export function languageAlternates(path: string) {
  return {
    en: localPath("en", path),
    kn: localPath("kn", path),
    "x-default": localPath("en", path),
  };
}
