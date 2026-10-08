from __future__ import annotations

import glob
import io
import re
import sys
from pathlib import Path
from typing import TYPE_CHECKING, cast

import frontmatter

if TYPE_CHECKING:
    from typing import Any, TextIO

# Suppress output from getorg
old_stdout: TextIO | Any = sys.stdout
sys.stdout = io.StringIO()
import getorg.orgmap

sys.stdout = old_stdout

from typing import Final

from geopy import Nominatim
from geopy.exc import GeocoderTimedOut

TIMEOUT: Final[int] = 5

# Collect the Markdown files
g: list[str] = glob.glob(pathname="_talks/*.md")

# user_agent sends contact information to Nominatim
geocoder: Nominatim = Nominatim(user_agent="https://www.desai.ml")
location_dict: dict[str, tuple[float, float]] = {}
permalink: str = ""

# Geolocation
for file in g:
    file_header: dict[str, str] = cast(
        typ=dict[str, str], val=frontmatter.load(fd=file).to_dict()
    )
    if "location" not in file_header:
        continue

    title: str = file_header["title"].strip()
    venue: str = file_header["venue"].strip()
    if "Neural" in venue:
        venue = f"{venue.split(sep='Annual', maxsplit=1)[0]} NeurIPS"
    location: str = file_header["location"].strip()
    if location.casefold() in ["virtual", "online", "remote"]:
        print(f"Skipping {title} : {location}")
        continue
    description: str = f"{title}<br />{venue}<br />{location}"

    # Geocode the location and report the status
    try:
        location_dict[description] = cast(
            typ=tuple[float, float],
            val=geocoder.geocode(query=location, timeout=TIMEOUT),
        )
        print(description, location_dict[description])
    except ValueError as ex:
        print(f"Error: geocode failed on input {location} with message {ex}")
    except GeocoderTimedOut as ex:
        print(f"Error: geocode timed out on input {location} with message {ex}")
    except Exception as ex:  # ruff: ignore[blind-except]
        print(
            f"An unhandled exception occurred while processing input {location} with message {ex}"
        )

# Save the map
getorg.orgmap.output_html_cluster_map(
    org_location_dict=location_dict, folder_name="talkmap", hashed_usernames=False
)

# Clean up the HTML file
html_file: Path = Path("talkmap/map.html")
with open(html_file, mode="r") as f:
    html_content: str = f.read()

html_content: str = re.sub(
    pattern=r"<span>Mouse.*?bounds</span>", repl="", string=html_content
)
html_content: str = html_content.replace(r"<title>Leaflet debug page</title>", "")
html_content: str = re.sub(pattern=r"attribution.*?2012'", repl="", string=html_content)
html_content: str = re.sub(
    pattern="http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",
    repl="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",
    string=html_content,
)
with open(html_file, mode="w") as f:
    f.write(html_content)
