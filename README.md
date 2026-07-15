# ✂️ Scrapbook

A free, five-page portfolio template built with **plain HTML, CSS, and
JavaScript** — no build step, no framework, no `npm install`. Open
`index.html` in a browser and it just works.

It's meant to be *read*, not just used: every file is commented, the
markup is kept boring and predictable on purpose, and every page is full
of placeholder content clearly marked for you to replace. If you're
learning front-end development, this is designed to be picked apart —
view source, poke at things in dev tools, and see what breaks.

![no build step](https://img.shields.io/badge/build%20step-none-ff2f9e)
![dependencies](https://img.shields.io/badge/dependencies-zero-21e6c1)
![license](https://img.shields.io/badge/license-free%20to%20use-ffd23f)

---

## Who this is for

- You're learning HTML/CSS/JS and want a real, non-trivial codebase to
  study — not a 20-line "hello world."
- You want a portfolio site and don't want to fight a framework or build
  tool to get one.
- You want to see practical, working examples of: a dark/light theme
  toggle, a mobile nav drawer, scroll animations, and a contact form —
  all without a single dependency.

You do **not** need to know React, Vue, Sass, Webpack, or anything else
to use or understand this. If you can edit a text file and open it in a
browser, you can use this template.

## Quick start

1. **Download and unzip** this folder.
2. **Open `index.html`** in your browser — double-click it, or drag it
   into a browser window. That's it, no install step.
3. **Open the folder in a code editor** (VS Code, Sublime, whatever you
   like) and start reading. `index.html` is the best place to begin.

Some browsers restrict a few features (like `fetch`) on `file://` URLs,
so if something seems off, run a tiny local server instead:

```bash
# Python (comes preinstalled on most systems)
python3 -m http.server 8000

# or, if you have Node.js
npx serve .
```

Then visit `http://localhost:8000` in your browser.

## File structure

```
scrapbook-portfolio/
├── index.html          Home
├── about.html            About
├── projects.html         Projects
├── journal.html           Journal / blog-style notes
├── contact.html          Contact (working form UI, no backend)
│
├── css/
│   ├── reset.css         Removes browser default styling
│   ├── variables.css     Design tokens: colors, fonts, spacing (start here!)
│   ├── base.css          Global element defaults (body, headings, links)
│   ├── layout.css        Header, nav, footer, page grids
│   ├── components.css    Buttons, cards, polaroids, tape, tags, forms
│   ├── animations.css    @keyframes and scroll-reveal helper classes
│   └── themes.css        Rules that only apply in dark or light mode
│
├── js/
│   ├── theme.js           Dark/light toggle, explained inline
│   ├── nav.js              Mobile menu open/close, explained inline
│   ├── animations.js       Scroll-triggered reveals, explained inline
│   └── main.js             Footer year, contact form demo, cursor sparkles
│
├── assets/svg/           19 original hand-drawn SVGs (tape, stars, icons...)
└── README.md              You are here
```

Every page shares identical `<header>`, mobile `<nav>`, and `<footer>`
markup — copy-pasted on purpose rather than templated, since there's no
build tool here to generate it for you. Once you understand one page's
structure, you understand all five.

## How to make it yours

Go roughly in this order:

1. **Colors & fonts** — open `css/variables.css`. Every color in the site
   is a variable like `--accent-pink`; change the hex value and it
   updates everywhere the variable is used. Swap the three Google Fonts
   linked in each page's `<head>` for your own pick from
   [fonts.google.com](https://fonts.google.com), then update the family
   names in `variables.css` to match.

2. **Text content** — every page has HTML comments like
   `<!-- ✏️ EDIT ME — Hero -->` marking the blocks meant to be replaced.
   Search each file for `✏️` to find them all, or just search for
   placeholder phrases like `[Your Name]`, `Project One`, or `20XX`.

3. **Doodles** — everything decorative lives in `assets/svg/` as
   individual files (not a sprite sheet), so you can open any one in a
   text editor or design tool and change its colors, or drop in your own
   SVGs. Position them using the `top` / `left` / `width` inline styles
   next to each `<img class="doodle">`.

4. **Add or remove sections** — sections are just `<section>` elements
   inside `<main>`. Delete one you don't need, or copy one you like into
   another page.

5. **Wire up the contact form** — `js/main.js` currently fakes a
   successful submission after a short delay so you can see what the
   interaction looks like. Point `<form id="contact-form">` at a real
   backend, a form service (Formspree, Getform, etc.), or a serverless
   function, and remove the demo `setTimeout`.

## Things to try (if you're learning)

A few small exercises that touch different parts of the codebase:

- Change `--accent-pink` in `variables.css` to a different color and
  watch how much of the site updates from one change.
- Add a sixth chip to the "toolbox" section on the home page — no CSS
  changes needed, the layout wraps automatically.
- Duplicate a `<figure class="polaroid">` on `projects.html` to add a
  seventh project card.
- Open dev tools, shrink the window below ~860px wide, and watch the
  desktop nav disappear and the mobile menu button appear — that
  breakpoint lives in `css/layout.css`.
- Read `js/animations.js` top to bottom — it's under 30 lines and is a
  clean, real-world example of `IntersectionObserver`.
- Try disabling JavaScript entirely in your browser settings and reload
  the page — notice the site still works: content is there, nav links
  work, the reveal animations just show everything immediately instead
  of fading in. That's called **progressive enhancement**.

## Features

- 5 complete, cross-linked pages
- Fully responsive down to small mobile widths
- Dark and light themes, persisted across visits, no flash of the wrong
  theme on load
- Custom mobile nav drawer with keyboard focus trap and Escape-to-close
- Scroll-triggered reveal animations via `IntersectionObserver`
- 19 original SVG doodles — washi tape, stars, flowers, arrows, hearts,
  pins, clouds, icons — no icon library, easy to study or swap
- A hand-drawn "scribble underline" that draws itself in under headings
  on scroll
- Respects `prefers-reduced-motion` — every animation has an off switch
- Visible keyboard focus states throughout
- Semantic HTML with `aria-current`, `aria-expanded`, `aria-live` used
  where they matter, not sprinkled everywhere
- Zero build step, zero JS/CSS dependencies — three Google Fonts loaded
  via CDN are the only external requests the site makes

## Browser support

Modern evergreen browsers (Chrome, Firefox, Safari, Edge). The CSS uses
`color-mix()`, `aspect-ratio`, and `:focus-visible`; the JS uses
`IntersectionObserver` — all broadly supported since 2022+, with graceful
fallbacks (see `prefers-reduced-motion` handling in `animations.css` and
`animations.js`).

## License

Free to use, modify, and ship — personal or commercial, no attribution
required. The SVG doodles are original and covered by the same terms.
If you build something with it, no need to tell us, but it'd be nice.

---

Made with tape, glue, and a few too many `border-radius` tweaks. Have fun
picking it apart. ✨
