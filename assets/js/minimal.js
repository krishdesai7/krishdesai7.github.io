/* ==========================================================================
   MINIMAL JAVASCRIPT
   Only essential functionality, no libraries
   ========================================================================== */

(function() {
  'use strict';

  // Theme toggle functionality
  function initThemeToggle() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Add theme toggle button to nav if needed
    const nav = document.querySelector('.visible-links');
    if (nav && !document.querySelector('.theme-toggle')) {
      const toggleBtn = document.createElement('li');
      toggleBtn.className = 'theme-toggle';
      toggleBtn.innerHTML = '<button aria-label="Toggle theme">🌓</button>';
      nav.appendChild(toggleBtn);
      
      toggleBtn.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
      });
    }
  }

  // Smooth scroll for anchor links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // Mobile navigation toggle (if needed)
  function initMobileNav() {
    const mobileToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.visible-links');
    
    if (mobileToggle && navMenu) {
      mobileToggle.addEventListener('click', function() {
        navMenu.classList.toggle('is-visible');
      });
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initThemeToggle();
      initSmoothScroll();
      initMobileNav();
    });
  } else {
    initThemeToggle();
    initSmoothScroll();
    initMobileNav();
  }

})();