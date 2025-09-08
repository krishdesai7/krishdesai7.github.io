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
    
    // Update icon based on saved theme
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
      if (savedTheme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
      }
    }
    
    // Add click handler to existing button
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update icon
        if (themeIcon) {
          if (newTheme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
          } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
          }
        }
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