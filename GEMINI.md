# GEMINI Project Context

## Project Overview

This is a single-page web application built with React and TypeScript. The project is set up to use Vite for fast development and bundling. It appears to be a personal website or portfolio, hosted on GitHub Pages, as indicated by the `homepage` field in `package.json` and the `gh-pages` deployment script.

The project uses ESLint for code linting and style enforcement, with specific rules for import ordering and removing unused imports.

## Key Technologies

*   **Framework:** React
*   **Language:** TypeScript
*   **Build Tool:** Vite
*   **Deployment:** GitHub Pages
*   **Linting:** ESLint
*   **Package Manager:** npm

## Building and Running

*   **Development Server:** `npm run dev`
    *   Starts the Vite development server.
*   **Build for Production:** `npm run build`
    *   Transpiles TypeScript and bundles the application into the `dist/` directory.
*   **Preview Production Build:** `npm run preview`
    *   Serves the `dist/` directory to preview the production build locally.
*   **Run Tests:** `npm test`
    *   Launches the test runner.
*   **Deploy to GitHub Pages:** `npm run deploy`
    *   Builds the project and deploys the contents of the `dist/` directory to the `gh-pages` branch.

## Development Conventions

*   **Source Code:** All source code is located in the `src/` directory.
*   **Styling:** CSS files are imported directly into components (e.g., `App.css`, `index.css`).
*   **Linting:** ESLint is configured with `react-app` presets and custom rules. To check for linting errors, run `npm run lint`. To automatically fix issues, run `npm run lint:fix`.
*   **Import Order:** Imports are automatically sorted according to the rules in `.eslintrc.js`.
*   **TypeScript:** The project uses a strict TypeScript configuration (`"strict": true` in `tsconfig.json`), enforcing strong type checking.
