.PHONY: serve stop build talkmap cv

PORT ?= 4000
serve:
	bundle exec jekyll serve -l -P $(PORT) > local.log 2>&1 & echo $$! > .jekyll-pid

stop:
	@if [ -f .jekyll-pid ]; then \
		kill $$(cat .jekyll-pid) 2>/dev/null; \
		rm -f .jekyll-pid; \
		echo "Stopped Jekyll server"; \
	else \
		echo "No Jekyll server running"; \
	fi

build:
	bundle exec jekyll build

talkmap:
	uv run talkmap.py

cv:
	uv run update_cv.py
