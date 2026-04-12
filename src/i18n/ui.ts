export const languages = {
	en: 'English',
	ko: '한국어',
	de: 'Deutsch',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui = {
	en: {
		'nav.home': 'Home',
		'nav.blog': 'Blog',
		'nav.about': 'About',
		'blog.translation-in-progress': 'Translation in progress',
		'blog.translation-available-in': 'This post is available in:',
		'blog.back-to-list': 'Back to Blog',
	},
	ko: {
		'nav.home': 'Home',
		'nav.blog': 'Blog',
		'nav.about': 'About',
		'blog.translation-in-progress': 'Translation in progress',
		'blog.translation-available-in': 'This post is available in:',
		'blog.back-to-list': 'Back to Blog',
	},
	de: {
		'nav.home': 'Startseite',
		'nav.blog': 'Blog',
		'nav.about': 'Über mich',
		'blog.translation-in-progress': 'Übersetzung in Arbeit',
		'blog.translation-available-in': 'Dieser Beitrag ist verfügbar in:',
		'blog.back-to-list': 'Zurück zum Blog',
	},
} as const;
