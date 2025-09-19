# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based personal academic website hosted on GitHub Pages. It showcases publications, talks, teaching experience, and other academic work.

## Common Development Commands

### Building and Running the Site

```bash
# Install Ruby dependencies
bundle install

# Serve the site locally with live reload
bundle exec jekyll serve

# Build the site for production
bundle exec jekyll build

# Build JavaScript assets
npm run build
```

### JavaScript Build Process

The site uses Terser for JavaScript minification:
- Source file: `assets/js/_main.js`
- Output: `assets/js/main.min.js`
- Build command: `npm run build`

## Architecture and Key Components

### Jekyll Collections

The site uses Jekyll collections to organize different types of content:

- **_publications**: Academic publications (journal articles, conference papers, preprints)
- **_talks**: Presentations and talks with location tracking
- **_teaching**: Teaching experience and courses
- **_experience**: Work and research experience
- **_pages**: Static pages (home, about, CV, etc.)

### Directory Structure

- **_sass/**: Custom SCSS styles organized by component
  - `_themes.scss`: Theme variables and color schemes
  - `_modern-grid.scss`: Grid layout system
  - `_visual-refinements.scss`: Typography and visual improvements
  - `_fonts.scss`: Font definitions and imports

- **_layouts/**: Jekyll page templates
  - `default.html`: Base layout
  - `single.html`: Single page/post layout
  - `talk.html`: Talk-specific layout
  - `about.html`: About page layout

- **_includes/**: Reusable HTML components
  - `author-profile.html`: Sidebar profile with social links
  - `head.html`: HTML head section with meta tags
  - `footer.html`: Site footer
  - `cv-template.html`: CV formatting template

### Configuration

The site configuration is in `_config.yml` which defines:
- Site metadata and author information
- Jekyll plugins and build settings
- Collection configurations
- Social media links and academic profiles
- Publication categories (theses, manuscripts, conferences, preprints)

### GitHub Actions

The site uses GitHub Actions for automation:
- **scrape_talks.yml**: Automatically generates talk location data when talks are updated using `talkmap.py`

### Dependencies

**Ruby/Jekyll (Gemfile)**:
- Jekyll and GitHub Pages gem
- Jekyll plugins: sitemap, redirect-from, jemoji

**Node.js (package.json)**:
- Terser for JavaScript minification
- Sass migrator for SCSS updates

**Python (pyproject.toml)**:
- Geopy, Folium for map generation
- Python-frontmatter for parsing Jekyll front matter
- Managed with `uv` package manager

### Key Implementation Details

1. **Theme System**: Uses CSS custom properties for theming, supporting light/dark modes via `_themes.scss`

2. **Responsive Design**: Breakpoints defined in `_breakpoints.scss` for mobile-first responsive design

3. **Publication Management**: Publications are organized by category (defined in `_config.yml`) and displayed through `_pages/publications.html`

4. **Talk Mapping**: The `talkmap.py` script geocodes talk locations and generates an interactive map

5. **SEO**: Comprehensive SEO setup in `_includes/seo.html` with Open Graph and Twitter Card support

## Development Notes

- The site is configured for GitHub Pages deployment
- Jekyll excludes development files (node_modules, vendor, etc.) from the build
- The `_site` directory contains the built static site
- CSS is compiled from SCSS and compressed in production
- JavaScript is minified using Terser before deployment