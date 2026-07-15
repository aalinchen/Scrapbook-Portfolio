/* ==========================================================================
   theme.js — dark / light mode toggle
   Note: the *initial* theme is set by an inline script in <head> (see any
   HTML page) so the correct theme paints before first render, with no flash.
   This file only wires up the toggle button for switching + persisting.

   👉 HOW IT WORKS, if you're new to this pattern:
   1. We store the chosen theme as a string ("dark" or "light") on the
      <html> element itself, as a data-* attribute: data-theme="light".
   2. css/variables.css has a rule like [data-theme='light'] { ... } that
      redefines all the color variables when that attribute is present.
   3. We save the choice in localStorage so it's remembered next visit.
   4. The little inline <script> at the top of each HTML <head> reads
      that saved value and sets the attribute immediately — before the
      page renders — so you never see a flash of the wrong theme.
   ========================================================================== */

(function () {
  'use strict';

  var STORAGE_KEY = 'scrapbook-theme';

  function getTheme() {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) { /* storage unavailable, ignore */ }
    var buttons = document.querySelectorAll('.theme-toggle');
    buttons.forEach(function (btn) {
      btn.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
      btn.setAttribute('aria-label', theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
    });
  }

  function toggleTheme() {
    setTheme(getTheme() === 'dark' ? 'light' : 'dark');
  }

  document.addEventListener('DOMContentLoaded', function () {
    setTheme(getTheme());
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.addEventListener('click', toggleTheme);
    });
  });
})();
