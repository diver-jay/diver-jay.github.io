# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React TypeScript application created with Create React App, configured for deployment to GitHub Pages at `diver-jay.github.io`. The project uses modern React 19 with TypeScript 4.9.

## Development Commands

- `npm run dev` - Start Vite development server (runs on http://localhost:5173)
- `npm test` - Run tests in interactive watch mode
- `npm run build` - Build production bundle to `dist/` folder with TypeScript compilation
- `npm run preview` - Preview production build locally
- `npm run lint` - Check code for linting errors
- `npm run lint:fix` - Automatically fix linting errors

## Project Structure

```
src/
├── index.tsx          # App entry point with React 18+ root API
├── App.tsx            # Main App component
├── App.test.tsx       # App component tests
├── App.css            # App styles
├── index.css          # Global styles
├── reportWebVitals.ts # Performance measurement
├── setupTests.ts      # Jest test setup
└── react-app-env.d.ts # TypeScript environment declarations

public/
├── index.html         # HTML template
├── manifest.json      # PWA manifest
├── favicon.ico        # Site favicon
├── logo192.png        # App icons
├── logo512.png
└── robots.txt         # Search engine directives
```

## Technology Stack

- **Framework**: React 19.1.1 with TypeScript 4.9.5
- **Build Tool**: Vite 7.1.6 with React plugin
- **Testing**: Jest + React Testing Library
- **Deployment**: GitHub Pages (via gh-pages package)
- **TypeScript Config**: Strict mode enabled, ES5 target, JSX transform

## Testing

Uses Jest and React Testing Library. Test files should be named `*.test.tsx` or placed in `__tests__/` directories. The project includes setupTests.ts for global test configuration.

## Deployment

The project is configured for GitHub Pages deployment with homepage set to `https://diver-jay.github.io`. Uses Vite for building and the `gh-pages` package for deployment automation. Build output goes to `dist/` folder.

## Code Style

- Uses TypeScript strict mode
- React functional components with hooks
- CSS for styling (no CSS-in-JS framework configured)
- Standard Create React App ESLint configuration (react-app preset)

## Game Portfolio Project

This project aims to create a Pokemon-style game portfolio website where users can control a character with keyboard input and interact with buildings to view portfolio content.

### Game Concept
- **Objective**: Interactive game-like portfolio where users navigate a character through a world
- **Interaction**: Keyboard controls for character movement, entering buildings shows portfolio content
- **Style**: 8-bit RPG aesthetic similar to classic Pokemon games

### Technical Implementation
- **Game Libraries**: Consider Phaser or PixiJS for 2D game development
  - Phaser: Specialized 2D game framework with sprite and tilemap management
  - PixiJS: High-performance 2D rendering library for custom game logic
- **Required Assets**:
  - Sprites: Character, NPC, and object images
  - Tilesets: Background map components (grass, trees, roads, water)
  - Tilemaps: Map data files (can use Tiled Map Editor)
  - Sounds: Background music, footsteps, interaction sounds

### Core Features to Implement
1. **Character Movement**: Keyboard input detection and sprite animation
2. **Collision Detection**: Prevent movement through walls and obstacles
3. **Map Transitions**: Moving between different areas/maps
4. **Interaction System**: Triggering portfolio content when entering buildings
5. **Game Loop**: Continuous rendering and input handling

### Development Approach
- Start with basic character movement and simple map
- Gradually add collision detection and interactions
- Integrate portfolio content as game interactions
- Deploy via GitHub Pages for public access