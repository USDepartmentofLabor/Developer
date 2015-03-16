---
layout: post
title: Current Employment Statistics (CES)
created: 1359575092
---

```
http://api.dol.gov/V1/Statistics/CES
```

<p>Each month the Current Employment Statistics (CES) program surveys about 141,000 businesses and government agencies, representing approximately 486,000 individual worksites, in order to provide detailed industry data on employment, hours, and earnings of workers on nonfarm payrolls.</p>

<p>More information and details about the data provided can be found at <a href="http://www.bls.gov/cpi">http://www.bls.gov/ces</a></p>


<a href ="http://api.dol.gov/V1/Statistics/CES/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=BLS Current Employment Statistics Survey (CES)" class="button radius button_dataset">Explore This Data</a>


### Dataset Tables:  
<h3>CE_DATA_PUB</h3>

<table>
	<thead>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>SERIES_ID</th>
			<td>Series Identifier Code</td>
			<td>varchar (17)</td>
		</tr>
		<tr>
			<th>YEAR</th>
			<td>Data Observation Year</td>
			<td>varchar (4)</td>
		</tr>
		<tr>
			<th>PERIOD</th>
			<td>Data Observation Period (Month, Quarter, Semi-Annual, Annual)</td>
			<td>varchar (3)</td>
		</tr>
		<tr>
			<th>VALUE</th>
			<td>Data Observation/Estimate</td>
			<td>varchar (12)</td>
		</tr>
		<tr>
			<th>FOOTNOTE_CODES</th>
			<td>Footnote Codes</td>
			<td>varchar (10)</td>
		</tr>
	</tbody>
</table>
<h3>CE_DATATYYPE</h3>

<table>
	<thead>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>DATA_TYPE_CODE</th>
			<td>Datatype Code</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th>DATA_TYPE_TEXT</th>
			<td>Datatype Description</td>
			<td>varchar (100)</td>
		</tr>
	</tbody>
</table>
<h3>CE_FOOTNOTE</h3>

<table>
	<thead>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>FOOTNOTE_CODE</th>
			<td>Footnote Code</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th>FOOTNOTE_TEXT</th>
			<td>Footnote Code Description</td>
			<td>varchar (100)</td>
		</tr>
	</tbody>
</table>
<h3>CE_INDUSTRY</h3>

<table>
	<thead>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>INDUSTRY_CODE</th>
			<td>Industry Code</td>
			<td>varchar (8)</td>
		</tr>
		<tr>
			<th>NAICS_CODE</th>
			<td>NAICS Code</td>
			<td>varchar (13)</td>
		</tr>
		<tr>
			<th>PUBLISHING_STATUS</th>
			<td>Publishing Status</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th>INDUSTRY_NAME</th>
			<td>Industry Name</td>
			<td>varchar (150)</td>
		</tr>
		<tr>
			<th>DISPLAY_LEVEL</th>
			<td>Display Indent Level For Query Tool</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th>SELECTABLE</th>
			<td>Code To Allow/Disallow Query Tool Selection</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th>SORT_SEQUENCE</th>
			<td>Data Query Tool Widget Sorting</td>
			<td>varchar (5)</td>
		</tr>
	</tbody>
</table>
<h3>CE_SEASONAL</h3>

<table>
	<thead>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>SEASONAL</th>
			<td>Seasonally adjusted code (S, U)</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th>SEASONAL_TEXT</th>
			<td>Seasonal Description</td>
			<td>varchar (30)</td>
		</tr>
	</tbody>
</table>
<h3>CE_SERIES</h3>

<table>
	<thead>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>SERIES_ID</th>
			<td>Series Identifier Code</td>
			<td>varchar (17)</td>
		</tr>
		<tr>
			<th>SUPERSECTOR_CODE</th>
			<td>Supersector Code</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th>INDUSTRY_CODE</th>
			<td>Industry Code</td>
			<td>varchar (8)</td>
		</tr>
		<tr>
			<th>DATA_TYPE_CODE</th>
			<td>Datatype Code</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th>SEASONAL</th>
			<td>Seasonal Code</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th>FOOTNOTE_CODES</th>
			<td>Footnote Code</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>BEGIN_YEAR</th>
			<td>Begin Year Of Series</td>
			<td>varchar (4)</td>
		</tr>
		<tr>
			<th>BEGIN_PERIOD</th>
			<td>Begin Period Of Series</td>
			<td>varchar (3)</td>
		</tr>
		<tr>
			<th>END_YEAR</th>
			<td>End Year Of Series</td>
			<td>varchar (4)</td>
		</tr>
		<tr>
			<th>END_PERIOD</th>
			<td>End Period Of Series</td>
			<td>varchar (3)</td>
		</tr>
	</tbody>
</table>
<h3>CE_SUPERSECTOR</h3>

<table>
	<thead>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>SUPERSECTOR_CODE</th>
			<td>Supersector Code</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th>SUPERSECTOR_NAME</th>
			<td>Supersector Description</td>
			<td>varchar (100)</td>
		</tr>
	</tbody>
</table>
