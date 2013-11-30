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
    'title': u'Crime and Punishment in Chicago',
    'opengraph_description': 'Another Tarbell website.',
    'opengraph_image': 'http://tarbell.tribapps.com/readme/img/ida-tarbell.jpg',

    'call': {
        'title': 'Call for Service',
        'intro': ("There are two potential starting points for an individual's contact "
            "with the law. The first is that a call for service goes out to a 911 operator "
            "at the [Office of Emergency Management and Communications]"
            "(https://www.cityofchicago.org/city/en/depts/oem.html) (OEMC). After the operator "
            "categorizes the call based on the information they received, it is dispatched "
            "to a police officer."),
        'data_available': ("Although it is known that data-collection happens for this entry "
            "point to Chicago's criminal justice system, neither anonymized nor agreggate data "
            "is publicly available on an up-to-date basis; rather, it must be requested through "
            "the [FOIA](http://www.foia.gov/about.html). "
            "[The Chicago Justice Project](http://www.chicagojustice.org/about/us) (CJP) did "
            "submit a FOIA request for data on calls for police service. You can find the "
            "result of that request [here]"
            "(http://www.chicagojustice.org/foi/data-sets-available-for-download/calls-for-police-service)"
            ", for the years 2008-2011."),
        'data_format': ("The data we have is available in spreadsheet format. It is aggregated "
            "yearly data, meaning that there are no individual records of calls, nor any "
            "specific addresses that can be linked to specific incidents. It is broken down by "
            "the 25 police districts, by event type that the operator judged the call to "
            "represent (out of about 300 possibilities), as well as sometimes by day of the "
            "week (for 2008-2010)."),
        'data_summary': ("For the year of 2011, there were 6,595,636 total calls received.... "
            "Highest/lowest districts.... Highest event type total, highest event type in highest "
            "districts.... Highest/lowest day of the week...."),
        'data_limits': (
            "Because of the aggregated nature of the data the CJP received by way "
            "of FOIA request it is not possible to follow up on a specific call by tying it to "
            "incident reports of police, or court cases, or jail sentences.  "
            "<br><br>"          
            "The whole picture is similarly atomized in that the event types recorded reflect "
            "only the judgment of 911 operators, and may differ from later stages of "
            "classification, like police crime reports, so that comparing different datasets "
            "doesn't tell you much.")
    },

    'police': {
        'title': '',
        'intro': '',
        'data_available': '',
        'data_format': '',
        'data_summary': '',
        'data_limits': '',
    },
    'charges': {
        'title': '',
        'intro': '',
        'data_available': '',
        'data_format': '',
        'data_summary': '',
        'data_limits': '',
    },
    'jail': {
        'title': '',
        'intro': '',
        'data_available': '',
        'data_format': '',
        'data_summary': '',
        'data_limits': '',
    },
    'courts': {
        'title': '',
        'intro': '',
        'data_available': '',
        'data_format': '',
        'data_summary': '',
        'data_limits': '',
    }
}

