# PlayCanvas Engine + TypeScript Starter

A Vite-powered PlayCanvas Engine project with TypeScript, hot module replacement, ESLint and Prettier.

## Spinning Cube

A rotating cube, a camera and a directional light. It is the smallest PlayCanvas scene in the catalog.

### Controls

The scene runs automatically; no input is required.

## Prerequisites

Node.js 22.23.2 or later.

## Getting started

This repository was initialized with the starter above (`npm create playcanvas@latest -- --format engine`), layered into the repository root alongside the `create-playcanvas` CLI source. The app lives under `src/playcanvas/` with `index.html` at the root, and its scripts carry the `app:` prefix so the CLI's own scripts stay untouched.

```bash
npm install
npm run app:dev
```

Open <http://localhost:5173>. Edit the files under `src/playcanvas/` and save to see the scene update.

## Scripts

| Command                 | Description                       |
| ----------------------- | --------------------------------- |
| `npm run app:dev`       | Start the Vite development server |
| `npm run app:build`     | Build for production              |
| `npm run app:start`     | Preview the production build      |
| `npm run app:lint`      | Run ESLint                        |
| `npm run app:fmt`       | Check formatting                  |
| `npm run app:typecheck` | Run TypeScript checks             |

Run `npm run app:build` to generate a deployable static site in `dist-app/` (the CLI's `dist/` output directory stays reserved for the scaffolding tool).

## Agent skills

The [`@playcanvas/skills`](https://github.com/playcanvas/skills) sources live in this repository's `skills/` directory (they ship with the CLI). Scaffolded projects normally get them under `.claude/skills/` and `.agents/skills/`, so Claude Code, Codex and Cursor pick up PlayCanvas-specific workflows automatically.

## Further reading

- [PlayCanvas Engine manual](https://developer.playcanvas.com/user-manual/engine/)
- [PlayCanvas examples](https://playcanvas.github.io/)
- [Vite documentation](https://vite.dev/)
- [TypeScript documentation](https://www.typescriptlang.org/docs/)
