/* ==========================================================================
   main.js — misc site behavior: footer year, contact form, hero sparkles
   ========================================================================== */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    /* ---- footer year ---- */
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ---- contact form (front-end only demo; wire up your own backend/API) ---- */
    var form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var status = document.getElementById('form-status');
        var submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) submitBtn.disabled = true;
        if (status) status.textContent = 'Sending…';

        window.setTimeout(function () {
          if (status) {
            status.textContent = 'Sent! I\u2019ll get back to you soon \u2014 thank you \u2728';
            status.classList.add('is-success');
          }
          form.reset();
          if (submitBtn) submitBtn.disabled = false;
        }, 700);
      });
    }

    /* ---- hero sparkle trail: a few doodles gently follow the cursor ---- */
    var trailZone = document.querySelector('[data-sparkle-trail]');
    if (trailZone && window.matchMedia('(pointer: fine)').matches) {
      var sparkles = [];
      var count = 3;
      for (var i = 0; i < count; i++) {
        var s = document.createElement('img');
        s.src = 'assets/svg/sparkle-mini.svg';
        s.alt = '';
        s.setAttribute('aria-hidden', 'true');
        s.style.cssText = 'position:absolute;width:' + (10 + i * 4) + 'px;height:' + (10 + i * 4) +
          'px;opacity:0;pointer-events:none;z-index:6;transition:opacity 300ms ease;will-change:transform;';
        trailZone.appendChild(s);
        sparkles.push({ el: s, x: 0, y: 0, delay: i * 60 });
      }

      var mouseX = 0, mouseY = 0;
      trailZone.addEventListener('mousemove', function (e) {
        var rect = trailZone.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
        sparkles.forEach(function (sp) { sp.el.style.opacity = '0.9'; });
      });
      trailZone.addEventListener('mouseleave', function () {
        sparkles.forEach(function (sp) { sp.el.style.opacity = '0'; });
      });

      (function animateTrail() {
        sparkles.forEach(function (sp, idx) {
          var ease = 0.14 - idx * 0.02;
          sp.x += (mouseX - sp.x) * Math.max(ease, 0.06);
          sp.y += (mouseY - sp.y) * Math.max(ease, 0.06);
          sp.el.style.transform = 'translate(' + (sp.x - 6) + 'px,' + (sp.y - 6) + 'px) rotate(' + (idx * 20) + 'deg)';
        });
        requestAnimationFrame(animateTrail);
      })();
    }
  });
})();
