# -*- coding: utf-8 -*-

"""
Tarbell project configuration
"""

# Short project name
NAME = "crime_punishment"

# Descriptive title of project
TITLE = "Crime, Punishment and Discretion in Chicago"

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

    'name': u'crime_punishment',
    'title': u'Crime, Punishment and Discretion in Chicago',
    'call_page': {
    	'title': u'Call for Service',
    	'intro': u"There are two potential starting points for an individual's contact with the law. The first is that a call for service goes out to a 911 operator at the [Office of Emergency Management and Communications](https://www.cityofchicago.org/city/en/depts/oem.html) (OEMC). After the operator categorizes the call based on the information they received, it is dispatched to a police officer.",
    	'text': unicode(open('copy/call.md').read())
    },
    'police_page': {
    	'title': u'Police Response',
    	'intro': u'',
    	'text': unicode(open('copy/police.md').read())
    },
    'charges_page': {
    	'title': u"State's Attorney's Office",
    	'intro': u'',
    	'text': unicode(open('copy/charges.md').read())
    },
    'courts_page': {
    	'title': u'Courts',
    	'intro': u'',
    	'text': unicode(open('copy/courts.md').read())
    }

}

