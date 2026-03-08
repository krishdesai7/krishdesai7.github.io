# Mobile Responsiveness Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Make the site usable and visually clean on iPhone (~375px) screens.

**Architecture:** Add mobile breakpoints using the existing `@include mobile-only` Sass mixin (< 768px). All layout changes are pure CSS except the hamburger nav toggle which needs ~15 lines of vanilla JS. No new dependencies.

**Tech Stack:** Sass/SCSS, vanilla JS, Jekyll

---

### Task 1: Hamburger Menu — HTML + JS Toggle

**Files:**
- Modify: `_includes/masthead.html`
- Modify: `assets/js/_main.js`

**Step 1: Add hamburger button and mobile structure to masthead**

In `_includes/masthead.html`, add a hamburger button inside `.nav__menu` before the `<nav>`, and give the `<ul>` an id for toggling:

```html
<div class="masthead">
  <div class="masthead__inner-wrap">
    <div class="site-title">
      <a href="{{ site.url }}">
        {{ site.title }}
      </a>
    </div>
    <div class="nav__menu">
      <button id="nav-toggle" class="nav__toggle" aria-label="Toggle navigation" aria-expanded="false">
        <i class="fa-sharp-duotone fa-regular fa-bars fa-fw" aria-hidden="true"></i>
      </button>
      <nav id="site-nav" class="greedy-nav">
        <ul class="visible-links" id="nav-links">
          {% for link in site.data.navigation.main %}
            <li class="nav__menu-item">
              <a href="{{ link.url | relative_url }}">
                {{ link.title }}
              </a>
          {% endfor %}
          <li class="nav__menu-item theme-toggle">
            <button id="theme-toggle" type="button" aria-label="Toggle theme">
              <i id="theme-icon" class="fa-duotone fa-regular fa-fw fa-moon-stars"
                aria-hidden="true">
              </i>
            </button>
        </ul>
      </nav>
    </div>
  </div>
</div>
```

**Step 2: Add JS toggle to `_main.js`**

Add to `assets/js/_main.js` (at the top level, outside any existing IIFE):

```js
// Hamburger menu toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('nav--open');
    navToggle.setAttribute('aria-expanded', isOpen);
    // Swap icon between bars and xmark
    const icon = navToggle.querySelector('i');
    if (isOpen) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    } else {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  });
}
```

**Step 3: Rebuild minified JS**

Run: `npm run build`
Expected: `assets/js/main.min.js` is regenerated.

**Step 4: Verify locally**

Run: `bundle exec jekyll serve -lH`
Open in browser, resize to mobile width. Hamburger button should appear and toggle the nav open/closed (styling comes in Task 2).

**Step 5: Commit**

```bash
git add _includes/masthead.html assets/js/_main.js assets/js/main.min.js
git commit -m "feat: add hamburger menu toggle for mobile nav"
```

---

### Task 2: Hamburger Menu — CSS

**Files:**
- Modify: `_sass/layout/_masthead.scss`

**Step 1: Add mobile styles for hamburger nav**

Add to the end of `_sass/layout/_masthead.scss`:

```scss
/* Hamburger toggle button — hidden on desktop */
.nav__toggle {
  display: none;
  background: transparent;
  border: none;
  color: var(--global-nav-link-color);
  font-size: $font-size-25;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: var(--global-nav-link-color-hover);
  }
}

@include mobile-only {
  .masthead__inner-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav__toggle {
    display: block;
  }

  .visible-links {
    display: none;
    flex-direction: column;
    gap: var(--half-baseline);
    padding: var(--baseline) 0;

    &.nav--open {
      display: flex;
    }
  }

  .nav__menu {
    position: relative;
  }

  .greedy-nav {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    background: var(--global-footer-bg-color);
    border-bottom: 1px solid var(--global-dark-border-color);
    z-index: 10;
  }

  .nav__menu-item > a {
    padding: var(--quarter-baseline) var(--baseline);
    display: block;
  }

  .nav__menu-item.theme-toggle {
    padding: var(--quarter-baseline) var(--baseline);
  }

  /* Undo the desktop margin-left: auto on the last item */
  .nav__menu ul > li:last-of-type {
    margin-left: 0;
    margin-right: 0;
  }
}
```

**Step 2: Verify locally**

Resize browser to mobile width. Hamburger button should show, clicking it should reveal a vertical dropdown with all nav links styled properly. On desktop width, nothing should change.

**Step 3: Commit**

```bash
git add _sass/layout/_masthead.scss
git commit -m "feat: style hamburger menu for mobile nav"
```

---

### Task 3: Home Page — Mobile Layout

**Files:**
- Modify: `_sass/layout/_home.scss`

**Step 1: Add mobile breakpoint**

Add to the end of `_sass/layout/_home.scss`:

```scss
@include mobile-only {
  .home-profile {
    flex-direction: column;
    align-items: center;
    text-align: center;

    &__image img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
  }

  .home-content-grid {
    grid-template-columns: 1fr;
  }
}
```

**Step 2: Verify locally**

On mobile width: profile image should be a small centered circle above the bio. Content grid should be single column. Desktop should be unchanged.

**Step 3: Commit**

```bash
git add _sass/layout/_home.scss
git commit -m "feat: mobile layout for home page — circular avatar + single column"
```

---

### Task 4: About Page — Mobile Layout

**Files:**
- Modify: `_sass/pages/_about.scss`

**Step 1: Add mobile breakpoint**

Add to the end of `_sass/pages/_about.scss`:

```scss
@include mobile-only {
  .about-layout {
    grid-template-columns: 1fr;
  }
}
```

**Step 2: Verify locally**

On mobile width: author profile stacks above bio content. Desktop unchanged.

**Step 3: Commit**

```bash
git add _sass/pages/_about.scss
git commit -m "feat: mobile layout for about page — single column"
```

---

### Task 5: Publications — Mobile Layout

**Files:**
- Modify: `_sass/pages/_publications.scss`

**Step 1: Add mobile breakpoint**

Add to the end of `_sass/pages/_publications.scss`:

```scss
@include mobile-only {
  .publication-row {
    grid-template-columns: 1fr;
    width: 100%;
  }
}
```

**Step 2: Verify locally**

On mobile width: date stacks above publication details, full width. Desktop unchanged.

**Step 3: Commit**

```bash
git add _sass/pages/_publications.scss
git commit -m "feat: mobile layout for publications — single column"
```

---

### Task 6: Experience — Mobile Layout

**Files:**
- Modify: `_sass/pages/_experience.scss`

**Step 1: Add mobile breakpoint**

Add to the end of `_sass/pages/_experience.scss` (before the dark-mode logo-switching block):

```scss
@include mobile-only {
  .experience-item {
    grid-template-columns: 1fr;
    gap: var(--half-baseline);
  }

  .experience-logo {
    justify-self: center;
    width: calc(var(--quadruple-baseline) * 1);
    height: calc(var(--quadruple-baseline) * 1);
  }

  .experience-details {
    flex-direction: column;
    > .experience-dates {
      margin-left: 0;
    }
  }
}
```

**Step 2: Verify locally**

On mobile width: logo centered above experience body, smaller. Dates stack below title/position instead of floating right. Desktop unchanged.

**Step 3: Commit**

```bash
git add _sass/pages/_experience.scss
git commit -m "feat: mobile layout for experience — single column with centered logo"
```

---

### Task 7: Final Smoke Test

**Step 1: Full rebuild and test**

Run: `bundle exec jekyll serve -lH`

Test all pages at ~375px width (iPhone SE) in browser dev tools:
- [ ] Home: circular avatar, single-column grid
- [ ] Navbar: hamburger works, opens/closes, all links accessible
- [ ] About: single column
- [ ] Publications: single column
- [ ] Experience: stacked with centered logo
- [ ] Talks, Teaching, CV, Contact, Footer: still look fine (no regression)

Test at desktop width:
- [ ] All pages look exactly as before

**Step 2: Final commit if any tweaks needed**
