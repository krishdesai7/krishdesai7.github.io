import json
import frontmatter
import yaml
from typing import Final
from pathlib import Path
import re
import sys
import datetime
from typing import Callable, cast

CV_FILE_PATH: Final[Path] = Path("_data/cv.json")
CONFIG_FILE_PATH: Final[Path] = Path("_config.yml")
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

PROFILE_URL_TEMPLATES: Final[dict[str, str]] = {
    "googlescholar" : "https://scholar.google.com/citations?hl=en&user={}",
    "orcid"         : "https://orcid.org/{}",
    "arxiv"         : "https://arxiv.org/a/{}",
    "inspirehep"    : "https://inspirehep.net/authors/{}",
    "semantic"      : "https://www.semanticscholar.org/author/{}",
    "researchgate"  : "https://www.researchgate.net/profile/{}",
    "linkedin"      : "https://www.linkedin.com/in/{}",
    "github"        : "https://github.com/{}",
}

PROFILE_DISPLAY_NAMES: Final[dict[str, str]] = {
    "googlescholar" : "Google Scholar",
    "github"        : "GitHub",
    "linkedin"      : "LinkedIn",
    "orcid"         : "ORCID",
    "researchgate"  : "ResearchGate",
    "inspirehep"    : "INSPIRE-HEP",
    "arxiv"         : "arXiv",
    "semantic"      : "Semantic Scholar",
}

def update_basics_from_config(cv_data: dict, config: dict) -> None:
    """Updates cv.json basics and profiles from _config.yml."""
    author = config["author"]
    cv_data["basics"]["name"] = config["name"]
    cv_data["basics"]["contact"]["Employment"] = {
        "position" : author["bio"],
        "company"  : author["employer"],
        "url"      : author["employer_url"],
    }
    cv_data["basics"]["contact"]["Address"] = author["address"]
    cv_data["basics"]["contact"]["E-mail"] = author["email"]
    cv_data["basics"]["contact"]["Website"] = config["url"]
    profiles: dict[str, str] = {}
    for key, template in PROFILE_URL_TEMPLATES.items():
        value = author.get(key)
        if value:
            profiles[PROFILE_DISPLAY_NAMES[key]] = template.format(value.lstrip("@"))
    cv_data["basics"]["profiles"] = profiles

def main() -> int:
    if CV_FILE_PATH.exists():
        with open(CV_FILE_PATH, "r") as f:
            cv_data: dict = json.load(f)
        if CONFIG_FILE_PATH.exists():
            with open(CONFIG_FILE_PATH, "r") as f:
                config: dict = yaml.safe_load(f)
            update_basics_from_config(cv_data, config)
        else:
            print(f"Config file {CONFIG_FILE_PATH} does not exist", file=sys.stderr)
            return 4
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
