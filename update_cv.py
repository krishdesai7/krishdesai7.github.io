import json
import frontmatter
from typing import Final
from pathlib import Path
import re
import sys
import datetime
from typing import Callable, cast

CV_FILE_PATH: Final[Path] = Path("_data/cv.json")
CATEGORY_MAPPING: Final[dict[str, str]] = {
    "publications": "Publications",
    "talks": "Talks",
    "experience": "Professional Experience",
    "teaching": "Teaching",
}

def load_markdown_files(directory: Path) -> list[dict[str, object]]:
    """
    Loads the frontmatter of all markdown files in the given directory.
    args:
        directory: The directory to load the markdown files from.
    returns:
        A list of dictionaries containing the frontmatter of the markdown files.
    """
    if directory.is_dir():
        items: list[dict[str, object]] = []
        for file in directory.glob("*.md"):
            post: frontmatter.Post = frontmatter.load(file.as_posix())
            items.append(post.metadata)
        items.sort(key=lambda x: x.get("date", x.get("year", "")), reverse=True)
        return items
    print(f"Directory {directory} does not exist", file=sys.stderr)
    sys.exit(3)

def html_to_markdown_bold(text: str) -> str:
    """Converts <strong>...</strong> HTML tags to **...** markdown bold."""
    return re.sub(r"<strong>(.*?)</strong>", r"**\1**", text)

def get_publications(items: list[dict[str, str | datetime.date]]) -> list[dict[str, str | datetime.date]]:
    """Gets the publications section."""
    publications: list[dict[str, str | datetime.date]] = []
    for item in items:
        entry: dict[str, str | datetime.date] = {
            "name"      : item["title"],
            "authors"   : html_to_markdown_bold(cast(str, item["authors"])),
            "publisher" : item["venue"],
            "date"      : item["date"],
            "pdf"       : item["paperurl"],
            "biblatex"  : item["biblatexurl"],
        }
        if "note" in item:
            entry["note"] = item["note"]
        publications.append(entry)
    return publications

def get_talks(items: list[dict[str, str | datetime.date]]) -> list[dict[str, str | datetime.date]]:
    """Gets the talks section."""
    talks: list[dict[str, str | datetime.date]] = []
    for item in items:
        talks.append({
            "name"     : item["title"],
            "event"    : item["venue"],
            "date"     : item["date"],
            "location" : item["location"],
        })
    return talks

def get_experience(items: list[dict[str, str | datetime.date]]) -> list[dict[str, str | datetime.date]]:
    """Gets the experience section."""
    experience: list[dict[str, str | datetime.date]] = []
    for item in items:
        experience.append({
            "name"      : item["venue"],
            "position"  : item["title"],
            "startDate" : item["date"],
            "endDate"   : item.get("end_date", "Present"),
        })
    experience.sort(
        key=lambda x: (
            1 if x["endDate"] == "Present" else 0,
            x["endDate"] if x["endDate"] != "Present" else datetime.date.max,
        ),
        reverse=True,
    )
    return experience

SEMESTER_ORDER: Final[dict[str, int]] = {"Fall": 0, "Summer": 1, "Spring": 2}

def get_teaching(items: list[dict[str, str | datetime.date]]) -> list[dict[str, str | datetime.date]]:
    """Gets the teaching section."""
    teaching: list[dict[str, str | datetime.date]] = []
    for item in items:
        teaching.append({
            "name"        : f"{item['course']}: {item['title']}",
            "institution" : item["venue"],
            "date"        : f"{item['semester']} {item['year']}",
            "role"        : item["type"],
        })
    teaching.sort(key=lambda x: (
        -int(x["date"].split()[-1]),
        SEMESTER_ORDER.get(x["date"].split()[0], 99),
    ))
    return teaching

def main() -> int:
    if CV_FILE_PATH.exists():
        with open(CV_FILE_PATH, "r") as f:
            cv_data: dict = json.load(f)
        for category, json_key in CATEGORY_MAPPING.items():
            if hasattr(sys.modules[__name__], f"get_{category}"):
                getter: Callable = getattr(sys.modules[__name__], f"get_{category}")
            else:
                print(f"Category {category} does not have a getter function", file=sys.stderr)
                return 2
            items: list[dict[str, object]] = load_markdown_files(Path(f"_{category}"))
            cv_data["contents"][json_key] = getter(items)
        with open(CV_FILE_PATH, "w") as f:
            json.dump(cv_data, f, indent=4, default=datetime.date.isoformat)
            f.write("\n")
        return 0
    print(f"CV file {CV_FILE_PATH} does not exist", file=sys.stderr)
    return 1

if __name__ == "__main__":
    sys.exit(main())
