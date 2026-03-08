# Mobile Responsiveness Design

## Problem
Site looks broken on iPhone (~375px). iPad is fine. No mobile breakpoints exist except in `_talks.scss`.

## Scope

### Critical
1. **Navbar**: Hamburger menu on mobile (< 768px). Collapse all nav links + theme toggle behind a hamburger button top-right. Vertical dropdown, toggled via small JS in `_main.js`. CSS transitions for open/close.
2. **Home page**: Flex-column layout on mobile. 330px square image becomes ~120px circular centered avatar. Bio text below. `.home-content-grid` collapses from `2fr 1fr` to single column.

### Medium priority
3. **About page**: `.about-layout` grid `2fr 1fr` to single column. Author profile stacks above bio content.
4. **Publications**: `.publication-row` grid `1fr 6fr` to single column. Date above publication details.
5. **Experience**: `.experience-item` grid `1fr 5fr` to single column. Logo above body, centered, smaller.

### Out of scope (already acceptable)
- Footer, Contact, CV, Teaching, Talks

## Technical approach
- All breakpoints use existing `@include mobile-only` mixin (max-width: 767px)
- Pure CSS except hamburger toggle (minimal vanilla JS)
- No new dependencies
