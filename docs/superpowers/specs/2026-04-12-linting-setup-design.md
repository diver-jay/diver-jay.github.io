# Linting Setup Design

**Date:** 2026-04-12
**Topic:** Add `npm run lint` / `npm run lint:fix` to the Astro portfolio project

## Goals

1. **Style consistency** (primary) — uniform formatting across all source files
2. **Import ordering** (secondary) — consistent, grouped import statements

## Out of Scope

- Content files (`.md`, `.mdx`) are excluded from formatting
- No code quality / bug-detection rules (no ESLint)

## Tool Choice

**Prettier-only** (Option A selected over Prettier + ESLint).

Rationale: This is a personal Astro blog. Prettier with the official Astro plugin gives full `.astro` formatting support. Import ordering is handled by `@ianvs/prettier-plugin-sort-imports` as a Prettier plugin — no need for a second tool.

## Dependencies

Three packages added as `devDependencies`:

| Package | Role |
|---|---|
| `prettier` | Core formatter |
| `prettier-plugin-astro` | Enables formatting of `.astro` files (official) |
| `@ianvs/prettier-plugin-sort-imports` | Import statement ordering |

## Configuration

**`.prettierrc.mjs`** (project root):

```js
/** @type {import("prettier").Config} */
export default {
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-astro', // must be last
  ],
  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],

  // Style — matches existing codebase conventions
  semi: true,
  singleQuote: true,
  useTabs: true,

  // Import order (empty string = blank line separator between groups)
  importOrder: [
    '^astro[:/]',          // 1. Astro virtual modules (astro:assets, astro:content, …)
    '',
    '<THIRD_PARTY_MODULES>', // 2. External npm packages
    '',
    '^[./]',               // 3. Relative imports
  ],
  importOrderTypeScriptVersion: '5.0.0',
};
```

**`.prettierignore`** (project root):

```
node_modules/
dist/
.astro/
```

## npm Scripts

Added to `package.json` `scripts`:

```json
"lint": "prettier --check \"src/**/*.{astro,ts,js}\"",
"lint:fix": "prettier --write \"src/**/*.{astro,ts,js}\""
```

- `npm run lint` — checks formatting, exits non-zero if any file differs (CI-safe)
- `npm run lint:fix` — rewrites files in place

## File Scope

Target glob: `src/**/*.{astro,ts,js}`

Covers:
- `src/components/*.astro`
- `src/layouts/*.astro`
- `src/pages/**/*.astro`
- `src/pages/rss.xml.js`
- `src/consts.ts`, `src/content.config.ts`
- `src/i18n/*.ts`
- `src/blog/*.ts`

Excluded: `src/content/blog/**/*.md`, `src/content/blog/**/*.mdx`
