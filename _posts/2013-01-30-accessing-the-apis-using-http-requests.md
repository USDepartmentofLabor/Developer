---
layout: page
title: Accessing the API Using HTTP Requests
created: 1359565589
---

{% capture anchors %}
- [Requesting Dataset Metadata](#requesting)
- [Reading a table](#reading)
- [Limit the number of results returned](#limit)
- [Skip a Number of Results](#skip)
- [Data Pagination by Combining Top and Skip](#pagination)
- [Selecting Specific Columns](#select)
- [Sorting Data](#sort)
- [Filtering Data - Single Filter](#filter_single)
- [Filtering Data - Multiple Filters](#filter_multi)
{% endcapture %}


{% capture curl_table %}

| Item         | Description                                                                           |
|--------------|---------------------------------------------------------------------------------------|
| YOUR_API_KEY | Your QUARRY API key                                                                   |
| ALIAS        | A valid alias data table name                                                         |
| filtername   | A filter name that is part of a key/value pair                                        |
| filtervalue  | The value of the filter key/pair that can either set a fixed parameter or is a number |


{% endcapture %}

{% include api_guide.html %}

