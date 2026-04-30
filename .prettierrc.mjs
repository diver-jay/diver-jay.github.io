/** @type {import("prettier").Config} */
export default {
	plugins: ['prettier-plugin-astro', '@ianvs/prettier-plugin-sort-imports'],
	overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
	importOrder: [
		'<BUILTIN_MODULES>',
		'',
		'^astro[:/]',
		'^@astrojs/',
		'',
		'<THIRD_PARTY_MODULES>',
		'',
		'^@/',
		'^[./]',
	],
	importOrderTypeScriptVersion: '5.0.0',
};
