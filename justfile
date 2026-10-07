port := env("PORT", "4000")

# List available recipes
default:
    @just --list

# Serve locally with livereload in the background
serve:
    #!/usr/bin/env bash
    bundle exec jekyll serve -l -P {{port}} > local.log 2>&1 &
    echo $! > .jekyll-pid

# Stop the background Jekyll server
stop:
    #!/usr/bin/env bash
    if [ -f .jekyll-pid ]; then
        kill "$(cat .jekyll-pid)" 2>/dev/null
        rm -f .jekyll-pid
        echo "Stopped Jekyll server"
    else
        echo "No Jekyll server running"
    fi

# Build the site for production
build:
    bundle exec jekyll build

# Generate talk location maps
talkmap:
    uv run talkmap.py

# Update CV JSON from collection frontmatter
cv:
    uv run update_cv.py
