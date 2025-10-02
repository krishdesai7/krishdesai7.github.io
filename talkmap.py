import io
import sys
import frontmatter
import glob
import re
from pathlib import Path

# Suppress output from getorg
old_stdout = sys.stdout
sys.stdout = io.StringIO()
import getorg.orgmap
sys.stdout = old_stdout

from typing import Final
from geopy import Nominatim
from geopy.exc import GeocoderTimedOut

TIMEOUT : Final[int] = 5

# Collect the Markdown files
g : list[str] = glob.glob("_talks/*.md")

# user_agent sends contact information to Nominatim
geocoder : Nominatim = Nominatim(user_agent="https://www.desai.ml")
location_dict : dict[str, tuple[float, float]] = {}
location : str = ""
permalink : str = ""
title : str = ""

# Geolocation
for file in g:
    file_header : dict[str, str] = frontmatter.load(file).to_dict()
    if 'location' not in file_header:
        continue

    title = file_header['title'].strip()
    venue = file_header['venue'].strip()
    if "Neural" in venue:
        venue = f"{venue.split('Annual')[0]} NeurIPS"
    location = file_header['location'].strip()
    if location.casefold() in ['virtual', 'online', 'remote']:
        print(f"Skipping {title} : {location}")
        continue
    description = f"{title}<br />{venue}<br />{location}"

    # Geocode the location and report the status
    try:
        location_dict[description] = geocoder.geocode(location, timeout=TIMEOUT)
        print(description, location_dict[description])
    except ValueError as ex:
        print(f"Error: geocode failed on input {location} with message {ex}")
    except GeocoderTimedOut as ex:
        print(f"Error: geocode timed out on input {location} with message {ex}")
    except Exception as ex:
        print(f"An unhandled exception occurred while processing input {location} with message {ex}")

# Save the map
getorg.orgmap.output_html_cluster_map(location_dict, folder_name="talkmap", hashed_usernames=False)

# Clean up the HTML file
html_file : Path = Path("talkmap/map.html")
with open(html_file, 'r') as f:
    html_content : str = f.read()

html_content = re.sub(r"<span>Mouse.*?bounds</span>", "", html_content)
html_content = re.sub(r"<title>Leaflet debug page</title>", "", html_content)
html_content = re.sub(r"attribution.*?2012'", "", html_content)
with open(html_file, 'w') as f:
    f.write(html_content)