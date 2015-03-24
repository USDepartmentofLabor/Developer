---
layout: post
title: Current Employment Statistics (CES)
created: 1359575092
description: Each month the Current Employment Statistics (CES) program surveys about 141,000 businesses and government agencies, representing approximately 486,000 individual worksites, in order to provide detailed industry data on employment, hours, and earnings of workers on nonfarm payrolls.
---

```
http://api.dol.gov/V1/Statistics/CES
```

<p>Each month the Current Employment Statistics (CES) program surveys about 141,000 businesses and government agencies, representing approximately 486,000 individual worksites, in order to provide detailed industry data on employment, hours, and earnings of workers on nonfarm payrolls.</p>

<p>More information and details about the data provided can be found at <a href="http://www.bls.gov/cpi">http://www.bls.gov/ces</a></p>


<a href ="http://api.dol.gov/V1/Statistics/CES/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=BLS%20Current%20Employment%20Statistics%20Survey%20(CES)" class="button radius button_dataset">Explore This Data</a>


## Dataset Tables 
 
- [CE_DATA_PUB](#CE_DATA_PUB)
- [CE_DATATYYPE](#CE_DATATYYPE)
- [CE_FOOTNOTE](#CE_FOOTNOTE)
- [CE_INDUSTRY](#CE_INDUSTRY)
- [CE_SEASONAL](#CE_SEASONAL)
- [CE_SERIES](#CE_SERIES)
- [CE_SUPERSECTOR](#CE_SUPERSECTOR)

<h3 id="CE_DATA_PUB">CU_DATA_PUB Table</h3>
<table summary="Data Pub - Current Employment Statistics (CES)">
	<caption>Data Pub</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">SERIES_ID</th>
			<td>Series Identifier Code</td>
			<td>varchar (17)</td>
		</tr>
		<tr>
			<th scope="row">YEAR</th>
			<td>Data Observation Year</td>
			<td>varchar (4)</td>
		</tr>
		<tr>
			<th scope="row">PERIOD</th>
			<td>Data Observation Period (Month, Quarter, Semi-Annual, Annual)</td>
			<td>varchar (3)</td>
		</tr>
		<tr>
			<th scope="row">VALUE</th>
			<td>Data Observation/Estimate</td>
			<td>varchar (12)</td>
		</tr>
		<tr>
			<th scope="row">FOOTNOTE_CODES</th>
			<td>Footnote Codes</td>
			<td>varchar (10)</td>
		</tr>
	</tbody>
</table>

<h3 id="CE_DATATYYPE">CE_DATATYYPE Table</h3>
<table summary="Data Type - Current Employment Statistics (CES)">
	<caption>Data Type</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">DATA_TYPE_CODE</th>
			<td>Datatype Code</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">DATA_TYPE_TEXT</th>
			<td>Datatype Description</td>
			<td>varchar (100)</td>
		</tr>
	</tbody>
</table>

<h3 id="CE_FOOTNOTE">CE_FOOTNOTE Table</h3>
<table summary="Footnote - Current Employment Statistics (CES)">
	<caption>Footnote</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">FOOTNOTE_CODE</th>
			<td>Footnote Code</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th scope="row">FOOTNOTE_TEXT</th>
			<td>Footnote Code Description</td>
			<td>varchar (100)</td>
		</tr>
	</tbody>
</table>

<h3 id="CE_INDUSTRY">CE_INDUSTRY Table</h3>
<table summary="Industry - Current Employment Statistics (CES)">
	<caption>Industry</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">INDUSTRY_CODE</th>
			<td>Industry Code</td>
			<td>varchar (8)</td>
		</tr>
		<tr>
			<th scope="row">NAICS_CODE</th>
			<td>NAICS Code</td>
			<td>varchar (13)</td>
		</tr>
		<tr>
			<th scope="row">PUBLISHING_STATUS</th>
			<td>Publishing Status</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">INDUSTRY_NAME</th>
			<td>Industry Name</td>
			<td>varchar (150)</td>
		</tr>
		<tr>
			<th scope="row">DISPLAY_LEVEL</th>
			<td>Display Indent Level For Query Tool</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">SELECTABLE</th>
			<td>Code To Allow/Disallow Query Tool Selection</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th scope="row">SORT_SEQUENCE</th>
			<td>Data Query Tool Widget Sorting</td>
			<td>varchar (5)</td>
		</tr>
	</tbody>
</table>

<h3 id="CE_SEASONAL">CE_SEASONAL Table</h3>
<table summary="Seasonal - Current Employment Statistics (CES)">
	<caption>Seasonal</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">SEASONAL</th>
			<td>Seasonally adjusted code (S, U)</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th scope="row">SEASONAL_TEXT</th>
			<td>Seasonal Description</td>
			<td>varchar (30)</td>
		</tr>
	</tbody>
</table>

<h3 id="CE_SERIES">CE_SERIES Table</h3>
<table summary="Series - Current Employment Statistics (CES)">
	<caption>Series</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">SERIES_ID</th>
			<td>Series Identifier Code</td>
			<td>varchar (17)</td>
		</tr>
		<tr>
			<th scope="row">SUPERSECTOR_CODE</th>
			<td>Supersector Code</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">INDUSTRY_CODE</th>
			<td>Industry Code</td>
			<td>varchar (8)</td>
		</tr>
		<tr>
			<th scope="row">DATA_TYPE_CODE</th>
			<td>Datatype Code</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">SEASONAL</th>
			<td>Seasonal Code</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th scope="row">FOOTNOTE_CODES</th>
			<td>Footnote Code</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th scope="row">BEGIN_YEAR</th>
			<td>Begin Year Of Series</td>
			<td>varchar (4)</td>
		</tr>
		<tr>
			<th scope="row">BEGIN_PERIOD</th>
			<td>Begin Period Of Series</td>
			<td>varchar (3)</td>
		</tr>
		<tr>
			<th scope="row">END_YEAR</th>
			<td>End Year Of Series</td>
			<td>varchar (4)</td>
		</tr>
		<tr>
			<th scope="row">END_PERIOD</th>
			<td>End Period Of Series</td>
			<td>varchar (3)</td>
		</tr>
	</tbody>
</table>

<h3 id="CE_SUPERSECTOR">CE_SUPERSECTOR Table</h3>
<table summary="Super sector - Current Employment Statistics (CES)">
	<caption>Supersector</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">SUPERSECTOR_CODE</th>
			<td>Supersector Code</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">SUPERSECTOR_NAME</th>
			<td>Supersector Description</td>
			<td>varchar (100)</td>
		</tr>
	</tbody>
</table>
