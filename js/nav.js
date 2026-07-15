/* ==========================================================================
   nav.js — mobile nav drawer

   👉 HOW IT WORKS: the drawer is just a hidden <nav> (see #nav-drawer in
   any HTML file) that gets a CSS class added/removed to show or hide it.
   Toggling a class instead of writing inline styles from JS keeps all the
   actual appearance (position, animation, colors) in CSS where it belongs —
   this file only ever adds or removes the class "is-open".
   ========================================================================== */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.nav-toggle');
    var drawer = document.getElementById('nav-drawer');
    var closeBtn = document.querySelector('.drawer-close');
    if (!toggle || !drawer) return;

    var lastFocused = null;

    function openDrawer() {
      lastFocused = document.activeElement;
      drawer.classList.add('is-open');
      document.body.classList.add('nav-open');
      toggle.setAttribute('aria-expanded', 'true');
      var firstLink = drawer.querySelector('a');
      if (firstLink) firstLink.focus();
    }

    function closeDrawer() {
      drawer.classList.remove('is-open');
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      if (lastFocused) lastFocused.focus();
    }

    toggle.addEventListener('click', function () {
      var isOpen = drawer.classList.contains('is-open');
      isOpen ? closeDrawer() : openDrawer();
    });

    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

    drawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeDrawer);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) closeDrawer();
    });

    // simple focus trap while drawer is open
    drawer.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab') return;
      var focusables = drawer.querySelectorAll('a, button');
      if (!focusables.length) return;
      var first = focusables[0];
      var last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  });
})();
