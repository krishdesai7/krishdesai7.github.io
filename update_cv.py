import json
import frontmatter
from typing import Final
from pathlib import Path
import sys
import datetime
from typing import Callable

CV_FILE_PATH: Final[Path] = Path("_data/cv.json")
CATEGORY_MAPPING: Final[dict[str, str]] = {
    "publications": "Publications",
    "talks": "Talks",
    "experience": "Professional Experience",
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
            post: frontmatter.Post = frontmatter.load(file)
            items.append(post.metadata)
        items.sort(key=lambda x: x.get("date", ""), reverse=True)
        return items
    print(f"Directory {directory} does not exist", file=sys.stderr)
    sys.exit(3)

def get_publications(items: list[dict[str, object]]) -> dict[str, dict[str, str | datetime.date]]:
    """Gets the publications section.
    args:
        items: The list of dictionaries containing the frontmatter of the markdown files.
    returns:
        A dictionary containing the publications section.
    """
    publications_dict: dict[str, dict[str, str | datetime.date]] = {}
    for item in items:
        title: str = item["title"]
        entry: dict[str, str | datetime.date] = {
            "authors"   : item["authors"],
            "publisher" : item["venue"],
            "date"      : item["date"],
            "pdf"       : item["paperurl"],
            "biblatex"  : item["biblatexurl"],
        }
        publications_dict[title] = entry
    return publications_dict

def get_talks(items: list[dict[str, object]]) -> dict[str, dict[str, str | datetime.date]]:
    """Gets the talks section.
    args:
        items: The list of dictionaries containing the frontmatter of the markdown files.
    returns:
        A dictionary containing the talks section.
    """
    talks_dict: dict[str, dict[str, str | datetime.date]] = {}
    for item in items:
        title: str = item["title"]
        entry: dict[str, str | datetime.date] = {
            "event" : item["venue"],
            "date"  : item["date"],
            "location" : item["location"],
        }
        talks_dict[title] = entry
    return talks_dict

def get_experience(items: list[dict[str, object]]) -> dict[str, dict[str, str | datetime.date]]:
    """Gets the experience section.
    args:
        items: The list of dictionaries containing the frontmatter of the markdown files.
    returns:
        A dictionary containing the experience section.
    """
    experience_dict: dict[str, dict[str, str | datetime.date]] = {}
    for item in items:
        company: str = item["venue"]
        entry: dict[str, str | datetime.date] = {
            "position" : item["title"],
            "startDate"     : item["date"],
            "endDate"       : item.get("end_date", "Present"),
        }
        experience_dict[company] = entry
    return experience_dict

def main() -> int:
    if CV_FILE_PATH.exists():
        with open(CV_FILE_PATH, "r") as f:
            cv_data: dict[str, dict[str, dict[str, str | datetime.date]]] = json.load(f)
        for category, json_key in CATEGORY_MAPPING.items():
            if hasattr(sys.modules[__name__], f"get_{category}"):
                getter: Callable[[list[dict[str, object]]],
                                            dict[str, dict[str, str | datetime.date]
                                            ]] = getattr(sys.modules[__name__], f"get_{category}")
            else:
                print(f"Category {category} does not have a getter function", file=sys.stderr)
                return 2
            items: list[dict[str, object]] = load_markdown_files(Path(f"_{category}"))
            cv_data["contents"][category] = getter(items)
        with open(CV_FILE_PATH, "w") as f:
            json.dump(cv_data, f, indent=4, default=datetime.date.isoformat)
        return 0
    print(f"CV file {CV_FILE_PATH} does not exist", file=sys.stderr)
    return 1

if __name__ == "__main__":
    sys.exit(main())