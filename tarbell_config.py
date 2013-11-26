# -*- coding: utf-8 -*-

"""
Tarbell project configuration
"""

# Short project name
NAME = "crime_punishment"

# Descriptive title of project
TITLE = "Crime and Punishment"

# Google spreadsheet key
#SPREADSHEET_KEY = "None"

# Create JSON data at ./data.json, disabled by default
# CREATE_JSON = True

# S3 bucket configuration
#S3_BUCKETS = {
    # Provide target -> s3 url pairs, such as:
    # "mytarget": "s3://mys3url.bucket.url/some/path"
#}

# Repository this project is based on (used for updates)
TEMPLATE_REPO_URL = "https://github.com/newsapps/tarbell-template"

# Default template variables
DEFAULT_CONTEXT = {

    'name': 'crime_punishment',
    'title': "Crime and Punishment Stuff12121",
}
