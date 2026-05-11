# H2S Hackathon Website

A Vite + React landing page for a futuristic hackathon website. The page is built from reusable React sections and a single global stylesheet that recreates the dark purple visual direction from the reference screenshots.

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- Framer Motion
- ESLint

## Project Structure

```text
src/
  App.jsx
  index.css
  main.jsx
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Participation.jsx
    Challenges.jsx
    Schedule.jsx
    Rewards.jsx
    FAQ.jsx
    Footer.jsx
  data/
    challenges.js
    faq.js
    schedule.js
public/
  assets/
    astronaut.png
    hero-cyber-model.png
```

## `src/index.css`

This file owns the visual system for the whole page:

- imports Tailwind with `@import "tailwindcss";`
- defines global body, typography, links, and page background styles
- styles the shared section layout, buttons, navbar, hero, cards, timeline, rewards, FAQ, and footer
- includes responsive media queries for tablet and mobile layouts

The hero outline text uses:

```css
-webkit-text-stroke: 2px #8b3dff;
-webkit-text-fill-color: transparent;
text-shadow: 0 0 1px #8b3dff;
```

This avoids the unsupported plain `text-stroke` property and keeps the `FUTURE` outline visible in browsers that support WebKit text stroke, with a small fallback glow.

## Run Locally

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal, usually:

```text
http://127.0.0.1:5173/
```

On Windows PowerShell, if `npm` is blocked by script policy, use:

```bash
npm.cmd run dev
```

## Build

```bash
npm run build
```

Or on Windows PowerShell:

```bash
npm.cmd run build
```

## Lint

```bash
npm run lint
```

Or on Windows PowerShell:

```bash
npm.cmd run lint
```
