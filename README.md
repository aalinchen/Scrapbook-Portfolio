# ✂️ Scrapbook

A simple five-page portfolio template built with **plain HTML, CSS, and JavaScript**. No frameworks, no build tools, and nothing to install. Download it, open `index.html`, and you're ready to start.

I built this to be something you can actually learn from, not just copy and paste. The code is intentionally straightforward, the files are commented, and the placeholder content is clearly marked so you always know what to replace. If you're learning front-end development, don't be afraid to open the files, inspect things in DevTools, and experiment with them.

![no build step](https://img.shields.io/badge/build%20step-none-ff2f9e)
![dependencies](https://img.shields.io/badge/dependencies-zero-21e6c1)
![license](https://img.shields.io/badge/license-free%20to%20use-ffd23f)

---

> **A quick note:** Feel free to use this template for personal projects, client work, or commercial sites. The only thing I ask is that you leave a small, visible credit somewhere on the finished site. It doesn't need to be front and center—a line in the footer or a credits page is more than enough. ❤️

---

## Who it's for

This template is for you if:

* You're learning HTML, CSS, and JavaScript and want a project that's a little more interesting than another landing page tutorial.
* You want a portfolio without having to learn a framework first.
* You'd like to see how common front-end features are built using plain JavaScript, including a dark/light theme toggle, a mobile navigation menu, scroll animations, and a contact form.

You don't need React, Vue, Sass, Webpack, or anything similar. If you can edit a text file and open it in your browser, you can use this template.

---

## Getting started

1. Download or clone the project.
2. Open `index.html` in your browser.
3. Open the folder in your favorite code editor and start exploring.

That's it.

Some browsers restrict a few features (such as `fetch`) when opening files directly using `file://`. If something doesn't seem to work correctly, run a small local server instead:

```bash
# Python
python3 -m http.server 8000

# Node.js
npx serve .
```

Then open `http://localhost:8000` in your browser.

---

## Project structure

```text
scrapbook-portfolio/
├── index.html          Home
├── about.html          About
├── projects.html       Projects
├── journal.html        Journal
├── contact.html        Contact
│
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   ├── animations.css
│   └── themes.css
│
├── js/
│   ├── theme.js
│   ├── nav.js
│   ├── animations.js
│   └── main.js
│
├── assets/svg/
└── README.md
```

Since there's no build process, every page includes its own copy of the header, navigation, and footer. It may seem repetitive, but it keeps everything simple and makes the project easier to understand. Once you've looked through one page, the others should feel familiar.

---

## Making it your own

I'd recommend customizing things in roughly this order.

### 1. Colors and fonts

Open `css/variables.css`.

Most colors are stored as CSS variables, so changing a single value updates it everywhere it's used. If you'd like different fonts, swap the Google Fonts links in each page and update the corresponding font-family variables.

### 2. Replace the placeholder content

Every page includes comments like:

```html
<!-- ✏️ EDIT ME -->
```

You can also search for placeholders like `[Your Name]`, `Project One`, or `20XX`.

### 3. Customize the SVG doodles

All decorative graphics live inside `assets/svg/` as individual SVG files.

You can edit them directly, replace them with your own artwork, or reposition them by adjusting the inline styles where they're used.

### 4. Add or remove sections

Each page is built from regular `<section>` elements inside `<main>`.

Delete sections you don't need, duplicate ones you like, or move them between pages.

### 5. Connect the contact form

The contact form currently simulates a successful submission so you can preview the interaction.

To make it functional, connect it to your own backend, a service like Formspree or Getform, or a serverless function, then replace the demo `setTimeout`.

---

## Things to try

If you're using this as a learning project, here are a few ideas:

* Change `--accent-pink` in `variables.css` and see how much of the site updates.
* Add another toolbox chip on the homepage without touching the CSS.
* Duplicate one of the project cards to add another project.
* Resize your browser below roughly **860px** and watch the desktop navigation switch to the mobile menu.
* Read through `js/animations.js`. It's a short, beginner-friendly example of using `IntersectionObserver`.
* Disable JavaScript and reload the page. The content is still accessible, navigation still works, and only the enhanced interactions disappear. That's progressive enhancement in action.

---

## Features

* Five complete, responsive pages
* Dark and light themes with saved preference
* Responsive mobile navigation
* Scroll reveal animations using `IntersectionObserver`
* Original hand-drawn SVG doodles
* Animated scribble underline effect
* Respects `prefers-reduced-motion`
* Visible keyboard focus styles
* Semantic HTML with appropriate ARIA attributes
* Zero frameworks, zero dependencies, and no build step

---

## Browser support

The template works in current versions of Chrome, Firefox, Safari, and Edge.

It uses modern features such as `color-mix()`, `aspect-ratio`, `:focus-visible`, and `IntersectionObserver`. If a browser doesn't support every feature, the site still remains fully usable—it simply skips some of the visual enhancements.

---

## License

Feel free to use, modify, and distribute this template for personal or commercial projects.

The only requirement is that you keep a small, visible credit somewhere on the finished site, as mentioned above.

The included SVG illustrations are original and covered by the same terms.

If you build something with it, I'd love to see it—but no pressure.

---

Built with a lot of coffee, way too many tiny CSS tweaks, and an unreasonable amount of `border-radius`. Have fun with it. ✨

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:ffb6df,50:ff4fa8,100:ff007f&height=100&section=footer" width="100%"/>


</div>
