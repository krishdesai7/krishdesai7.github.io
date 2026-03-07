# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Jekyll-based academic personal website for Krish Desai, hosted on GitHub Pages at desai.ml. Uses custom theme with four content collections: publications, talks, experience, and teaching.

## Development Commands

```bash
# Serve locally with live reload (http://127.0.0.1:4000)
bundle exec jekyll serve --livereload

# Build for production
bundle exec jekyll build

# Minify JavaScript (_main.js -> main.min.js)
npm run build

# Generate talk location maps
uv run talkmap.py

# Update CV JSON from collection frontmatter
uv run update_cv.py

# Install dependencies
bundle install        # Ruby gems
uv sync              # Python packages
```

## Architecture

### Content Collections

Each collection lives in a `_<name>/` directory with markdown files using YAML frontmatter. The `_config.yml` defines four collections: `publications`, `talks`, `experience`, `teaching`.

### Publication frontmatter fields

`layout`, `title`, `collection`, `category` (manuscripts/conferences/preprints/theses), `permalink`, `date`, `venue`, `paperurl`, `biblatexurl`, `citation`, `authors`, and optional link fields: `doi`, `arxiv`, `scix`, `inspirehep`, `researchgate`, `code`.

Authors use `<strong>` tags to bold the site owner's name.

### Rendering pipeline

- `_pages/*.html` — top-level pages that iterate over collections
- `_layouts/` — templates (publication.html, talk.html, about.html, default.html, teaching.html)
- `_includes/` — partials (publication-single.html, publication-links.html, author-profile.html, etc.)
- `_sass/` — stylesheets compiled by Jekyll
- `assets/js/_main.js` — source JS (theme toggle, BibTeX modals); minified via `npm run build`

### Data files

- `_data/cv.json` — structured CV data, auto-updated by `update_cv.py` from collection frontmatter
- `_data/navigation.yml` — site navigation menu

### Publication categories

Defined in `_config.yml` under `publication_category`: theses, manuscripts (Journal Articles), conferences (Conference Papers), preprints.

### Python scripts

- `talkmap.py` — geocodes talk locations via Nominatim, generates Leaflet maps in `talkmap/`
- `update_cv.py` — reads frontmatter from `_publications/`, `_talks/`, `_experience/` and writes to `_data/cv.json`

Both use `uv` for dependency management (see `pyproject.toml`). Python 3.13+.

## CI/CD

- `.github/workflows/pages.yml` — GitHub Pages deployment
- `.github/workflows/scrape_talks.yml` — auto-runs `talkmap.py` on changes to `_talks/` or `talkmap.py`

## File naming convention

Collection files use date-prefixed slugs: `YYYY-MM-DD-descriptive-slug.md`. Permalinks follow `/collection/YYYY-MM-DD-slug` pattern.
