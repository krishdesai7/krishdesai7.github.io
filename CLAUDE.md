# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is Dr. Krish Desai's academic portfolio website built with Jekyll and hosted on GitHub Pages. The site showcases research publications, teaching experience, talks, and blog posts.

## Essential Commands

### Local Development
```bash
# Install Ruby dependencies
bundle install

# Run local Jekyll server (use one of these)
jekyll serve -l -H localhost
bundle exec jekyll serve -l -H localhost

# For permission issues, install gems locally
bundle config set --local path 'vendor/bundle'
bundle install
```

### JavaScript Build
```bash
# Build/minify JavaScript
npm run build:js

# Watch JavaScript files for changes
npm run watch:js
```

### Docker Development
```bash
# Set permissions and start container
chmod -R 777 .
docker compose up
```

## Architecture Overview

### Jekyll Collections
The site uses Jekyll collections for structured content:
- `_publications/` - Academic papers and research
- `_talks/` - Conference presentations
- `_teaching/` - Teaching experience
- `_portfolio/` - Project showcases
- `_posts/` - Blog posts

### Template Hierarchy
- `_layouts/default.html` - Base template with header/footer
- `_layouts/single.html` - Individual content pages
- `_layouts/archive.html` - Listing pages
- `_includes/` - Reusable components (author profile, navigation, etc.)

### Styling System
- Entry point: `assets/css/main.scss`
- Theme files: `_sass/theme/_default.scss` and `_sass/theme/_dark.scss`
- Typography: Crimson Pro (serif) as primary font
- Responsive breakpoints defined in `_sass/_themes.scss`

### Key Configuration Files
- `_config.yml` - Site settings, author info, collection definitions
- `_data/navigation.yml` - Menu structure
- `package.json` - JavaScript build scripts
- `Gemfile` - Ruby/Jekyll dependencies

## Development Workflow

### Adding Content
1. Publications: Add markdown files to `_publications/`
2. Talks: Add to `_talks/` with venue and date frontmatter
3. Blog posts: Add to `_posts/` following `YYYY-MM-DD-title.md` format
4. Teaching: Add to `_teaching/` with course details

### Testing Changes
1. Run local server with `bundle exec jekyll serve`
2. Check site at `http://localhost:4000`
3. Jekyll will auto-rebuild on file changes
4. For JS changes, run `npm run watch:js` in parallel

### Common Issues
- Permission errors: Use local bundle installation
- Port conflicts: Add `--port 4001` to Jekyll serve command
- Build failures: Check Ruby/Jekyll versions match GitHub Pages

## Important Notes
- Site is configured for domain: www.desai.ml
- Uses GitHub Pages for hosting (master branch)
- No custom Jekyll plugins to maintain GitHub Pages compatibility
- CV available in both markdown and JSON formats