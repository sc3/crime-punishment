### Summary

In Chicago, all Calls for Service data is controlled by the [Office of Emergency Management & Communications (OEMC)](http://www.cityofchicago.org/city/en/depts/oem.html). [Dispatch operations](http://www.cityofchicago.org/content/dam/city/depts/oemc/general/img/orgchart.htm)&#151;the reception of 911 calls for service and the dispatch of police to respond to calls&#151;is managed by OEMC.

The City of Chicago releases no Calls for Service data in bulk format. 

There are many municipalities that publish live or near-live listing of dispatch records for police. There are a number of common elements, including date/time, a unique ID, an address (with a level of specifity going from the block level to the exact address), and a call type. There is often a field for current status or ultimate disposition of the call, including perhaps the source of the call (for instance, whether it was phoned in or if was police-initiated. Often they indicate a geographic area for the call (district, beat, etc.)

### Data Inventory

This is a list of the information that's collected by the OEMC for any caller. The inventory is divided into three categories:
<ol>
  <li>Data readily available,</li>
  <li>Data available through a Freedom of Information (FOIA) request, and</li>
  <li>Data that is collected but not available.</li>
</ol>
<br>

#### Open Data

The City of Chicago does not publish this data set on the portal at this time. 

#### FOIA Accessible Data

{{ inventory('callforservice', 'foi') }}

#### Unavailable Data

{{ inventory('callforservice', 'unavailable') }}
