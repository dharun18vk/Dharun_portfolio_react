# Dharun Kumar V — Portfolio

A dark, "verification-scan" themed 3D portfolio built with React, Three.js
(via react-three-fiber), Tailwind CSS, and Framer Motion.

## What's inside
- **Dark / light theme toggle** (sun/moon icon in the navbar) — every color on the
  page (backgrounds, text, borders, and the 3D scene colors) switches together,
  and your choice is remembered on your next visit
- Full-bleed animated 3D neural-mesh hero (mouse-reactive particle network)
- A second, full-page ambient 3D layer — drifting wireframe shapes (icosahedron,
  torus, torus knot, octahedron) fixed behind every section, so the 3D feel
  carries through the whole scroll, not just the hero
- Circular photo slot with a scanning-light effect and a "match" badge
- **3D mouse-tilt hover effect** on project cards, skill cards, achievement
  cards, the about panel, and the contact card
- Skills section with animated confidence bars
- Experience timeline
- **6 project slots** (4 pre-filled from your resume, 2 open for future work)
- Education timeline (already has room for school-level entries)
- Achievements panel
- Contact section with mailto/tel/social links
- Fully responsive, keyboard-focus visible, respects reduced-motion preference

## 1. Install prerequisites
You need **Node.js 18 or newer** installed. Check with:
```bash
node -v
```
If you don't have it, download it from https://nodejs.org (LTS version).

## 2. Install project dependencies
Open a terminal in this folder (`dharun-portfolio`) and run:
```bash
npm install
```
This downloads React, Three.js, Tailwind, Framer Motion, etc.

## 3. Add your photo (optional but recommended)
Drop a photo into the `public` folder and name it `photo.jpg`.
(If you skip this, the hero circle will show your initials "DK" instead —
the site still works perfectly.)

## 4. Run it locally
```bash
npm run dev
```
Then open the URL shown in the terminal (usually `http://localhost:5173`) in your browser.
The page hot-reloads as you edit files.

## 5. Edit your content
Everything text/data-related — name, summary, skills, experience, all 6 project
slots, education entries, achievements, links — lives in one file:
```
src/data/portfolioData.js
```
Edit that file and save; the site updates instantly in dev mode. You don't need
to touch any component code to update your content.

## 6. Build for deployment
When you're ready to publish:
```bash
npm run build
```
This creates a `dist/` folder with the production-ready static site.

## 7. Deploy (free options)
- **Vercel**: `npm i -g vercel` then run `vercel` in this folder, or connect your
  GitHub repo at vercel.com (you already use Vercel per your resume).
- **Netlify**: drag-and-drop the `dist/` folder at app.netlify.com/drop, or connect
  your repo.
- **GitHub Pages**: push this repo to GitHub, then use the `gh-pages` package or
  GitHub Actions to publish the `dist/` folder.

## Project structure
```
dharun-portfolio/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── public/
│   └── (put photo.jpg here)
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── portfolioData.js   ← edit this to update all content
    ├── context/
    │   └── ThemeContext.jsx   ← dark/light theme state, persisted to localStorage
    └── components/
        ├── Navbar.jsx
        ├── ThemeToggle.jsx    ← the sun/moon switch
        ├── Hero.jsx
        ├── NeuralField.jsx    ← hero's 3D background (theme-aware colors)
        ├── AmbientBackground.jsx  ← full-page drifting 3D shapes (theme-aware)
        ├── Tilt.jsx           ← reusable 3D mouse-tilt wrapper
        ├── About.jsx
        ├── Skills.jsx
        ├── Experience.jsx
        ├── Projects.jsx
        ├── ProjectCard.jsx
        ├── Education.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        ├── Reveal.jsx         ← scroll-reveal animation wrapper
        └── SectionHeader.jsx
```

## Customizing the theme colors
Both themes are defined as CSS variables at the top of `src/index.css`:
```css
:root { /* dark theme values */ }
[data-theme='light'] { /* light theme values */ }
```
Each variable is an `R G B` triple (e.g. `--c-cyan: 0 217 255;`). Change these to
retune the palette — every component picks the new colors up automatically,
including the 3D scenes.

## Troubleshooting
- **Blank page / errors about "three" or "@react-three/fiber"**: delete
  `node_modules` and `package-lock.json`, then run `npm install` again.
- **Port already in use**: Vite will automatically offer the next free port —
  just use the URL it prints.
- **3D background looks empty on very old GPUs/browsers**: it gracefully falls
  back to the plain dark background; everything else still works.
