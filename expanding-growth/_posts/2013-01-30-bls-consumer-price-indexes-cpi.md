---
layout: post
title: Consumer Price Indexes (CPI)
created: 1359576522
description: The Consumer Price Indexes (CPI) program produces monthly data on changes in the prices paid by urban consumers for a representative basket of goods and services.
---

```
http://api.dol.gov/V1/Statistics/CPI
```

<p>The Consumer Price Indexes (CPI) program produces monthly data on changes in the prices paid by urban consumers for a representative basket of goods and services.</p>

<p>More information and details about the data provided can be found at <a href="http://www.bls.gov/cpi">http://www.bls.gov/cpi</a></p>


<a href ="http://api.dol.gov/V1/Statistics/CPI/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=BLS Consumer Price Index (CPI)" class="button radius button_dataset">Explore This Data</a>


## Dataset Tables

- [CU_AREA](#CU_AREA)
- [CU_BASE](#CU_BASE)
- [CU_DATA_PUB](#CU_DATA_PUB)
- [CU_FOOTNOTE](#CU_FOOTNOTE)
- [CU_ITEM](#CU_ITEM)
- [CU_PERIODICITY](#CU_PERIODICITY)
- [CU_SEASONAL](#CU_SEASONAL)
- [CU_SERIES](#CU_SERIES)

<h3><a name="CU_AREA">CU_AREA Table</a></h3>

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
			<th>AREA_CODE</th>
			<td>Area Code</td>
			<td>varchar (4)</td>
		</tr>
		<tr>
			<th>AREA_NAME</th>
			<td>Area Name</td>
			<td>varchar (80)</td>
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
<h3><a name="CU_BASE">CU_BASE Table</a></h3>

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
			<th>BASE_CODE</th>
			<td>Base Identifier Code</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th>BASE_NAME</th>
			<td>Base Description</td>
			<td>varchar (20)</td>
		</tr>
	</tbody>
</table>
<h3><a name="CU_DATA_PUB">CU_DATA_PUB Table</a></h3>

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
<h3><a name="CU_FOOTNOTE">CU_FOOTNOTE Table</a></h3>

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
<h3><a name="CU_ITEM">CU_ITEM Table</a></h3>

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
			<th>ITEM_CODE</th>
			<td>Item Code</td>
			<td>varchar (8)</td>
		</tr>
		<tr>
			<th>ITEM_NAME</th>
			<td>Item Code Description</td>
			<td>varchar (100)</td>
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
<h3><a name="CU_PERIODICITY">CU_PERIODICITY Table</a></h3>

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
			<th>PERIODICITY_CODE</th>
			<td>Periodicity Code</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th>PERIODICITY_NAME</th>
			<td>Periodicity Description</td>
			<td>varchar (20)</td>
		</tr>
	</tbody>
</table>
<h3><a name="CU_SEASONAL">CU_SEASONAL Table</a></h3>

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
<h3><a name="CU_SERIES">CU_SERIES Table</a></h3>

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
			<th>AREA_CODE</th>
			<td>Area Code</td>
			<td>varchar (4)</td>
		</tr>
		<tr>
			<th>ITEM_CODE</th>
			<td>Item Code</td>
			<td>varchar (8)</td>
		</tr>
		<tr>
			<th>SEASONAL</th>
			<td>Seasonal Code</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th>PERIODICITY_CODE</th>
			<td>Periodicity Code</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th>BASE_CODE</th>
			<td>Base Code</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th>BASE_PERIOD</th>
			<td>Base Period</td>
			<td>varchar (20)</td>
		</tr>
		<tr>
			<th>FOOTNOTE_CODES</th>
			<td>Footnote Codes</td>
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
