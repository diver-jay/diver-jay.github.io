# Prettier Setup Design

**Date:** 2026-04-12
**Project:** diver-jay.github.io (Astro blog)

## Goal

Add Prettier to the project with standard JS 2-space style, format all existing files uniformly.

## Config

**`.prettierrc`**
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false,
  "plugins": ["prettier-plugin-astro"],
  "overrides": [
    {
      "files": "*.astro",
      "options": { "parser": "astro" }
    }
  ]
}
```

**`.prettierignore`**
```
node_modules
dist
.astro/
public
```

## Packages

- `prettier` — core formatter
- `prettier-plugin-astro` — adds `.astro` file support (HTML + frontmatter JS)

## package.json Changes

Add to `scripts`:
```json
"format": "prettier --write ."
```

## Execution

Run `npm run format` once after setup to reformat all existing source files.

## Scope

- Formats: `.astro`, `.ts`, `.js`, `.mjs`, `.json`, `.md`, `.mdx`, `.css`
- Excludes: `node_modules`, `dist`, `.astro/` (build cache), `public`
