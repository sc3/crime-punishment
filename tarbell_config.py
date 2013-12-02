# -*- coding: utf-8 -*-

"""
Tarbell project configuration
"""

# Short project name
NAME = "crime_punishment"

# Descriptive title of project
TITLE = "Crime, Punishment and Discretion in Chicago"

# Google spreadsheet key
SPREADSHEET_KEY = "0AtIgbhrbjJC_dGZldkpEUDB0bmRhY1Z3aU9jRlI1VlE"

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

    'name': u'crime_punishment',
    'title': u'Crime and Punishment in Chicago',

}
