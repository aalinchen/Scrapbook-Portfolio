/* ==========================================================================
   animations.js — scroll-triggered reveals

   👉 HOW IT WORKS: IntersectionObserver is a browser API that watches
   elements and tells you when they enter the viewport — no manual
   scroll-position math required. We give it a list of elements
   (anything with class .reveal, .reveal-stagger, or .scribble) and a
   callback; when an element scrolls into view we add the class
   "in-view", which is what actually triggers the CSS transition in
   css/animations.css. Once it's in view we stop watching it, since we
   only want the animation to play once.
   ========================================================================== */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var targets = document.querySelectorAll('.reveal, .reveal-stagger, .scribble');
    if (!targets.length) return;

    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !('IntersectionObserver' in window)) {
      targets.forEach(function (el) { el.classList.add('in-view'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    targets.forEach(function (el) { observer.observe(el); });
  });
})();
