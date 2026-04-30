import { getCollection, type CollectionEntry } from "astro:content";

import { defaultLang, getBareSlug, getLangFromPostId, type Lang } from "./i18n";

export type { Lang };
export { getBareSlug };

export async function getPostsByLang(
  lang: Lang,
): Promise<CollectionEntry<"blog">[]> {
  return (await getCollection("blog"))
    .filter((p) => getLangFromPostId(p.id) === lang)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function getBlogUrl(bareSlug: string, lang: Lang): string {
  return lang === defaultLang
    ? `/blog/${bareSlug}/`
    : `/${lang}/blog/${bareSlug}/`;
}

export function getBlogListUrl(lang: Lang): string {
  return lang === defaultLang ? "/blog/" : `/${lang}/blog/`;
}

export async function getStaticPathsForLocale(lang: Lang) {
  const posts = await getPostsByLang(lang);
  return posts.map((post) => ({
    params: { slug: getBareSlug(post.id) },
    props: { post },
  }));
}
