# Leaflet cluster map of talk locations
#
# Run this from the _talks/ directory, which contains .md files of all your
# talks. This scrapes the location YAML field from each .md file, geolocates it
# with geopy/Nominatim, and uses the getorg library to output data, HTML, and
# Javascript for a standalone cluster map. This is functionally the same as the
# #talkmap Jupyter notebook.
import os
import glob
import yaml
from geopy import Nominatim
from geopy.exc import GeocoderTimedOut

# Set the default timeout, in seconds
TIMEOUT = 5

# Collect the Markdown files
g = glob.glob("*.md")
print(f"Found {len(g)} talk files")

# Prepare to geolocate
geocoder = Nominatim(user_agent="academicpages.github.io")
location_dict = {}
location = ""
permalink = ""
title = ""

# Perform geolocation
for file in g:
    # Read the file  
    fm = frontmatter.Frontmatter()
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    data = fm.read(content)[0]

    # Press on if the location is not present
    if 'location' not in data:
        continue

    # Prepare the description
    title = data['title'].strip()
    venue = data['venue'].strip()
    location = data['location'].strip()
    description = f"{title}<br />{venue}; {location}"

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
# getorg has issues with ipyleaflet imports outside Jupyter environments
# Use folium directly for map generation
import folium
from folium.plugins import MarkerCluster

# Create a base map centered on world view
m = folium.Map(location=[20, 0], zoom_start=2)

# Add marker cluster
marker_cluster = MarkerCluster().add_to(m)

# Add markers for each location
for description, location_data in location_dict.items():
    if location_data:
        folium.Marker(
            location=[location_data.latitude, location_data.longitude],
            popup=description,
            tooltip=description
        ).add_to(marker_cluster)

# Save the map
os.makedirs("talkmap", exist_ok=True)
m.save("talkmap/map.html")
print(f"Map saved to talkmap/map.html with {len(location_dict)} locations")
