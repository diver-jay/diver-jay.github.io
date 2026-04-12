# Linting Setup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add `npm run lint` and `npm run lint:fix` scripts backed by Prettier for style-consistent formatting and import ordering across all `.astro`, `.ts`, and `.js` source files.

**Architecture:** Prettier-only setup (no ESLint). Two plugins extend Prettier: `prettier-plugin-astro` enables `.astro` file formatting, and `@ianvs/prettier-plugin-sort-imports` handles import grouping. Config lives in `.prettierrc.mjs`; formatting scope is limited to `src/**/*.{astro,ts,js}`.

**Tech Stack:** Prettier 3.x, prettier-plugin-astro, @ianvs/prettier-plugin-sort-imports

---

### Task 1: Install dependencies

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json` (auto-updated by npm)

- [ ] **Step 1: Install the three devDependencies**

```bash
npm install --save-dev prettier prettier-plugin-astro @ianvs/prettier-plugin-sort-imports
```

Expected output: three packages added under `devDependencies` in `package.json`.

- [ ] **Step 2: Verify package.json has all three entries**

```bash
node -e "const p = require('./package.json'); console.log(p.devDependencies)"
```

Expected: object containing `prettier`, `prettier-plugin-astro`, `@ianvs/prettier-plugin-sort-imports`.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: install prettier and plugins"
```

---

### Task 2: Create Prettier config

**Files:**
- Create: `.prettierrc.mjs`

- [ ] **Step 1: Create `.prettierrc.mjs`**

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
    '^astro[:/]',            // 1. Astro virtual modules (astro:assets, astro:content, …)
    '',
    '<THIRD_PARTY_MODULES>', // 2. External npm packages
    '',
    '^[./]',                 // 3. Relative imports
  ],
  importOrderTypeScriptVersion: '5.0.0',
};
```

- [ ] **Step 2: Verify Prettier can load the config**

```bash
npx prettier --find-config-path src/consts.ts
```

Expected: prints the path to `.prettierrc.mjs`.

- [ ] **Step 3: Commit**

```bash
git add .prettierrc.mjs
git commit -m "chore: add prettier config with import ordering"
```

---

### Task 3: Create `.prettierignore`

**Files:**
- Create: `.prettierignore`

- [ ] **Step 1: Create `.prettierignore`**

```
node_modules/
dist/
.astro/
```

- [ ] **Step 2: Commit**

```bash
git add .prettierignore
git commit -m "chore: add .prettierignore"
```

---

### Task 4: Add npm scripts

**Files:**
- Modify: `package.json` (scripts section only)

- [ ] **Step 1: Add lint and lint:fix to scripts**

Open `package.json`. The `scripts` section currently looks like:

```json
"scripts": {
  "dev": "astro dev",
  "build": "astro build",
  "preview": "astro preview",
  "astro": "astro"
},
```

Change it to:

```json
"scripts": {
  "dev": "astro dev",
  "build": "astro build",
  "preview": "astro preview",
  "astro": "astro",
  "lint": "prettier --check \"src/**/*.{astro,ts,js}\"",
  "lint:fix": "prettier --write \"src/**/*.{astro,ts,js}\""
},
```

- [ ] **Step 2: Verify both scripts are recognised**

```bash
npm run --list 2>/dev/null | grep lint
```

Expected: two lines — `lint` and `lint:fix`.

- [ ] **Step 3: Commit**

```bash
git add package.json
git commit -m "chore: add lint and lint:fix npm scripts"
```

---

### Task 5: Format existing files and verify

- [ ] **Step 1: Run lint to see how many files differ**

```bash
npm run lint
```

Expected: exits non-zero and lists files that need formatting (this is expected — the codebase was not previously formatted by Prettier).

- [ ] **Step 2: Run lint:fix to reformat all source files**

```bash
npm run lint:fix
```

Expected: Prettier rewrites files in place, prints each changed path.

- [ ] **Step 3: Run lint again to confirm zero diff**

```bash
npm run lint
```

Expected: exits zero with no output (all files now match Prettier's output).

- [ ] **Step 4: Spot-check one .astro file to confirm import grouping**

```bash
head -20 src/layouts/BlogPost.astro
```

Expected: imports are separated into groups — `astro:*` first, then a blank line, then any external packages, then a blank line, then relative `../` imports.

- [ ] **Step 5: Commit all reformatted files**

```bash
git add src/
git commit -m "style: apply prettier formatting to all source files"
```
