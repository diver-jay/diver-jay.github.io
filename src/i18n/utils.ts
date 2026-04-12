import { defaultLang, languages, ui, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
	const [, maybeLang] = url.pathname.split('/');
	if (maybeLang in ui) return maybeLang as Lang;
	return defaultLang;
}

export function useTranslations(lang: Lang) {
	return function t(key: keyof (typeof ui)[typeof defaultLang]) {
		return ui[lang][key] ?? ui[defaultLang][key];
	};
}

export function getLocalizedPath(currentPath: string, currentLang: Lang, targetLang: Lang): string {
	// Strip current lang prefix if not default
	const stripped =
		currentLang !== defaultLang
			? currentPath.replace(new RegExp(`^/${currentLang}`), '') || '/'
			: currentPath;

	// Add target lang prefix if not default
	return targetLang !== defaultLang ? `/${targetLang}${stripped}` : stripped;
}

// Derive lang from a Content Layer post.id like "ko/1" or "en/about"
export function getLangFromPostId(id: string): Lang {
	const prefix = id.split('/')[0];
	return (prefix in languages) ? prefix as Lang : defaultLang;
}

// Given a post.id like "ko/1", return just "1"
export function getBareSlug(id: string): string {
	const parts = id.split('/');
	return parts.length > 1 ? parts.slice(1).join('/') : parts[0];
}
