# gumbarros.com.br

Portfolio of me (@gumbarros).

Built with [Astro](https://astro.build) and [Hallmark](https://opencode.ai) (I'm not a front-end developer lol).

## Stack

- **Astro 5**: static site, zero client JS beyond a tiny reveal/type-in script
- **JetBrains Mono**: single-family, monospace-only terminal voice
- **OKLCH custom properties**: every colour, spacing and type token lives in
  `src/styles/tokens.css`

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:4321)
npm run dev
```

If you cloned fresh, you can use `npm ci` instead of `npm install` for a clean install.

## Scripts

| Command         | What it does                              |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Start the dev server with hot reload      |
| `npm run build` | Output the static site to `dist/`         |
| `npm run preview` | Preview the production build locally    |


## Editing

- **Solutions**: edit `src/data/solutions.ts`. All star/fork counts are real and pulled
  from GitHub; keep them honest.
- **Copy**: edit `src/pages/index.astro`.
- **Design tokens**: edit `src/styles/tokens.css`; references tokens by name
  (`var(--color-accent)`), never raw values.

## License

The libraries referenced here are MIT and this website is also MIT.
