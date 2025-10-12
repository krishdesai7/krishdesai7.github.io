# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Quick Start

### Local Development
```bash
# Install Ruby dependencies
bundle install

# Serve locally with live reload (accessible at http://127.0.0.1:4000)
bundle exec jekyll serve --livereload

# Build for production
bundle exec jekyll build

# Minify JavaScript assets
npm run build

# Generate talk location maps (Python script)
uv run talkmap.py
```

### Python Environment Setup
```bash
# Set up Python dependencies using uv
uv sync

# Or manually with specific Python version
python3 -m pip install -r requirements.txt  # if using pip
```

## Architecture Overview

This is a Jekyll-based academic personal website hosted on GitHub Pages. The site uses a custom theme with multiple content collections and automated features.

### Site Structure
- **Collections**: Four main content types with their own layouts and permalinks:
  - `_publications/` - Research papers with BibTeX support
  - `_talks/` - Conference presentations with geographic mapping
  - `_experience/` - Professional experience entries  
  - `_teaching/` - Teaching and educational activities

- **Data Files**: 
  - `_data/navigation.yml` - Main site navigation menu
  - `_data/cv.json` - Structured CV data for the resume page

- **Custom Layouts**:
  - `publication.html` - Specialized layout for papers with citation features
  - `talk.html` - Talk-specific layout with venue and location info
  - `single.html` - Generic single-page layout
  - `about.html`, `archive.html` - Specialized page layouts

### Key Features
- **Automated BibTeX Modal**: JavaScript handles citation copying and BibTeX file downloads
- **Geographic Talk Mapping**: Python script (`talkmap.py`) geocodes talk locations and generates interactive maps
- **Dark/Light Theme Toggle**: Client-side theme switching with localStorage persistence
- **GitHub Actions Integration**: Automated talk map generation on content changes

## Development Workflows

### Adding Publications
1. Create new `.md` file in `_publications/` with date-based naming (e.g., `2024-12-13-moment-unfolding.md`)
2. Include required frontmatter:
   ```yaml
   ---
   layout: publication
   title: "Paper Title"
   collection: publications
   category: journals  # or conferences, preprints
   permalink: /publication/2024-12-13-moment-unfolding
   date: 2024-12-13
   venue: 'Journal Name'
   paperurl: 'https://example.com/paper.pdf'
   biblatexurl: 'https://example.com/citation.bib'
   citation: 'Formatted citation string'
   authors: '<strong>Your Name</strong>, Co-Author Name'
   code: 'https://github.com/username/repo'  # optional
   ---
   ```
3. Add abstract and content in markdown below frontmatter

### Adding Talks
1. Create `.md` file in `_talks/` 
2. Include location for automatic mapping (GitHub Actions will geocode)
3. Use `venue` field for conference/event name
4. The `talkmap.py` script runs automatically via GitHub Actions when talk files change

### Updating CV Data
- Edit `_data/cv.json` for structured resume information
- This feeds the `/cv/` page layout

### Local Development Loop
1. Run `bundle exec jekyll serve --livereload` 
2. Edit content files (markdown, YAML, CSS/JS)
3. Browser automatically refreshes on file changes
4. Test BibTeX modals, theme switching, and responsive design
5. Run `uv run talkmap.py` if testing talk location features locally

## Technology Stack

### Core Technologies
- **Jekyll 4.4+** - Static site generator
- **Ruby/Bundler** - Dependency management for Jekyll gems
- **Sass** - CSS preprocessing 
- **Node.js/npm** - JavaScript build tools (Terser for minification)
- **Python 3.13+** - Talk mapping and data processing scripts

### Key Dependencies
**Ruby Gems:**
- `jekyll-gist` - GitHub Gist embedding
- `jekyll-paginate-v2` - Advanced pagination
- `jekyll-sitemap` - XML sitemap generation
- `jekyll-redirect-from` - URL redirection support

**Python Packages:**
- `geopy` - Geocoding for talk locations
- `folium` - Interactive map generation  
- `getorg` - Organization mapping utilities
- `python-frontmatter` - YAML frontmatter parsing
- `requests`, `pandas` - Data processing

**JavaScript:**
- `terser` - JavaScript minification
- Custom theme switching and BibTeX modal functionality

### Deployment
- **GitHub Pages** - Automatic deployment from main branch
- **GitHub Actions** - Automated talk map regeneration on content changes
- **Custom Domain** - Configured via `CNAME` file (desai.ml)

## File Organization

### Critical Configuration
- `_config.yml` - Main Jekyll configuration, collections, plugins, author info
- `Gemfile` - Ruby gem dependencies and versions  
- `package.json` - Node.js dependencies and build scripts
- `pyproject.toml` - Python dependencies managed by uv

### Content Directories  
- `_pages/` - Static pages (about, contact, CV, etc.)
- `_publications/` - Individual publication markdown files
- `_talks/` - Talk and presentation files
- `_experience/` - Professional experience entries
- `_teaching/` - Teaching and educational content

### Theme and Assets
- `_layouts/` - Jekyll layout templates
- `_includes/` - Reusable template partials  
- `_sass/` - Sass stylesheets
- `assets/` - Images, CSS, and JavaScript files
  - `assets/js/_main.js` - Source JavaScript (theme, BibTeX modals)
  - `assets/js/main.min.js` - Minified production JavaScript

### Build Artifacts and Data
- `_site/` - Generated static site (ignored in git)
- `talkmap/` - Generated talk location maps
- `files/` - PDF files, BibTeX files, and other downloadable content

## Content Patterns

### Publication Frontmatter Schema
```yaml
layout: publication
title: "Descriptive Paper Title"
collection: publications
category: journals | conferences | preprints  
permalink: /publication/YYYY-MM-DD-slug
date: YYYY-MM-DD
venue: 'Journal or Conference Name'
paperurl: 'https://example.com/paper.pdf'
biblatexurl: 'https://example.com/citation.bib'  
citation: 'Full formatted citation with HTML'
authors: '<strong>First Author</strong>, Second Author, Third Author'
code: 'https://github.com/username/repository'  # optional
```

### Talk Frontmatter Schema  
```yaml
layout: talk
title: "Talk Title"
collection: talks
type: "Conference presentation" | "Invited talk" | "Workshop"
permalink: /talks/YYYY-MM-DD-slug
venue: "Conference or Event Name"
date: YYYY-MM-DD
location: "City, State/Country"  # Used for geocoding
slides: 'https://example.com/slides.pdf'  # optional
```

### Experience Frontmatter Schema
```yaml
layout: single  
title: "Position Title"
collection: experience
permalink: /experience/YYYY-company-slug
date: YYYY-MM-DD
company: "Company Name"
location: "City, State" 
duration: "Start Date - End Date"
```

## CI/CD and Automation

### GitHub Actions Workflows
- **Talk Location Scraping** (`.github/workflows/scrape_talks.yml`):
  - Triggers on changes to `_talks/` directory or `talkmap.py`
  - Runs `uv run talkmap.py` to geocode locations and generate maps
  - Automatically commits updated map files back to repository

### Local Automation Scripts
- `talkmap.py` - Geocodes talk locations and generates interactive Leaflet maps
  - Uses Nominatim geocoding service
  - Outputs HTML map files to `talkmap/` directory
  - Handles timeouts and error cases gracefully

### Asset Pipeline
- JavaScript: `npm run build` minifies `assets/js/_main.js` → `main.min.js`
- CSS: Jekyll/Sass automatically compiles `.scss` files
- Images: Manual optimization (no automated pipeline)

## Development Notes

### Local Testing Checklist
1. Verify Jekyll builds without errors: `bundle exec jekyll build`
2. Test theme switching functionality in browser
3. Test BibTeX modal download/copy features  
4. Check responsive design across mobile/desktop
5. Verify talk map generation: `uv run talkmap.py`
6. Test all internal links and navigation

### Common Troubleshooting
- **Jekyll Build Errors**: Check for YAML syntax errors in frontmatter
- **Talk Maps Not Updating**: Ensure location field uses standard geographic names
- **BibTeX Modal Issues**: Verify `biblatexurl` points to valid `.bib` file
- **Theme Toggle Broken**: Check JavaScript console for errors in `_main.js`

### Performance Considerations
- Large publication lists may slow page load - consider pagination
- Talk maps with many markers may need clustering for better UX
- Optimize images in `assets/images/` directory for web delivery