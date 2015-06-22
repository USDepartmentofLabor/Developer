---
layout: post
title: Consumer Price Indexes (CPI) - United States Department of Labor Developer Portal
created: 1359576522
description: The Consumer Price Indexes (CPI) program produces monthly data on changes in the prices paid by urban consumers for a representative basket of goods and services.
---

```
http://api.dol.gov/V1/Statistics/CPI
```

<p>The Consumer Price Indexes (CPI) program produces monthly data on changes in the prices paid by urban consumers for a representative basket of goods and services.</p>

<p>More information and details about the data provided can be found at <a href="http://www.bls.gov/cpi">http://www.bls.gov/cpi</a></p>


<a href ="http://api.dol.gov/V1/Statistics/CPI/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=BLS%20Consumer%20Price%20Index%20(CPI)" class="button radius button_dataset">Explore This Data</a>


## Dataset Tables

- [CU_AREA](#CU_AREA)
- [CU_BASE](#CU_BASE)
- [CU_DATA_PUB](#CU_DATA_PUB)
- [CU_FOOTNOTE](#CU_FOOTNOTE)
- [CU_ITEM](#CU_ITEM)
- [CU_PERIODICITY](#CU_PERIODICITY)
- [CU_SEASONAL](#CU_SEASONAL)
- [CU_SERIES](#CU_SERIES)

<div class="dsktp_tbl">
	<h3 id="CU_AREA">CU_AREA Table</h3>
	<table summary="Area - Consumer Price Indexes (CPI)">
		<caption>Area</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">AREA_CODE</th>
				<td>Area Code</td>
				<td>varchar (4)</td>
			</tr>
			<tr>
				<th scope="row">AREA_NAME</th>
				<td>Area Name</td>
				<td>varchar (80)</td>
			</tr>
			<tr>
				<th scope="row">DISPLAY_LEVEL</th>
				<td>Display Indent Level For Query Tool</td>
				<td>varchar (2)</td>
			</tr>
			<tr>
				<th scope="row">SELECTABLE</th>
				<td scope="row">Code To Allow/Disallow Query Tool Selection</td>
				<td scope="row">varchar (1)</td>
			</tr>
			<tr>
				<th scope="row">SORT_SEQUENCE</th>
				<td>Data Query Tool Widget Sorting</td>
				<td>varchar (5)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="CU_BASE">CU_BASE Table</h3>
	<table summary="Base - Consumer Price Indexes (CPI)">
		<caption>Base</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">BASE_CODE</th>
				<td>Base Identifier Code</td>
				<td>varchar (1)</td>
			</tr>
			<tr>
				<th scope="row">BASE_NAME</th>
				<td>Base Description</td>
				<td>varchar (20)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="CU_DATA_PUB">CU_DATA_PUB Table</h3>
	<table summary="Data Pub - Consumer Price Indexes (CPI)">
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

	<h3 id="CU_FOOTNOTE">CU_FOOTNOTE Table</h3>
	<table summary="Footnote - Consumer Price Indexes (CPI)">
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

	<h3 id="CU_ITEM">CU_ITEM Table</h3>
	<table summary="Item - Consumer Price Indexes (CPI)">
		<caption>Item</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">ITEM_CODE</th>
				<td>Item Code</td>
				<td>varchar (8)</td>
			</tr>
			<tr>
				<th scope="row">ITEM_NAME</th>
				<td>Item Code Description</td>
				<td>varchar (100)</td>
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

	<h3 id="CU_PERIODICITY">CU_PERIODICITY Table</h3>
	<table summary="Periodicity - Consumer Price Indexes (CPI)">
		<caption>Periodicity</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">PERIODICITY_CODE</th>
				<td>Periodicity Code</td>
				<td>varchar (1)</td>
			</tr>
			<tr>
				<th scope="row">PERIODICITY_NAME</th>
				<td>Periodicity Description</td>
				<td>varchar (20)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="CU_SEASONAL">CU_SEASONAL Table</h3>
	<table summary="Seasonal - Consumer Price Indexes (CPI)">
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

	<h3 id="CU_SERIES">CU_SERIES Table</h3>
	<table summary="Series - Consumer Price Indexes (CPI)">
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
				<th scope="row">AREA_CODE</th>
				<td>Area Code</td>
				<td>varchar (4)</td>
			</tr>
			<tr>
				<th scope="row">ITEM_CODE</th>
				<td>Item Code</td>
				<td>varchar (8)</td>
			</tr>
			<tr>
				<th scope="row">SEASONAL</th>
				<td>Seasonal Code</td>
				<td>varchar (1)</td>
			</tr>
			<tr>
				<th scope="row">PERIODICITY_CODE</th>
				<td>Periodicity Code</td>
				<td>varchar (1)</td>
			</tr>
			<tr>
				<th scope="row">BASE_CODE</th>
				<td>Base Code</td>
				<td>varchar (1)</td>
			</tr>
			<tr>
				<th scope="row">BASE_PERIOD</th>
				<td>Base Period</td>
				<td>varchar (20)</td>
			</tr>
			<tr>
				<th scope="row">FOOTNOTE_CODES</th>
				<td>Footnote Codes</td>
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
</div>

<div class="mbl_tbl">
	<h3 id="CU_AREA">CU_AREA Table</h3>
	<h4>Area - Consumer Price Indexes (CPI)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: AREA_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Area Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (4)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: AREA_NAME</p>
		<p><span class="mbl-strng">Column Description:</span> Area Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (80)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: DISPLAY_LEVEL</p>
		<p><span class="mbl-strng">Column Description:</span> Display Indent Level For Query Tool</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (2)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: SELECTABLE</p>
		<p><span class="mbl-strng">Column Description:</span> Code To Allow/Disallow Query Tool Selection</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
		<div class="odd_row">
		<p class="mbl-strng">Column Name: SORT_SEQUENCE</p>
		<p><span class="mbl-strng">Column Description:</span> Data Query Tool Widget Sorting</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (5)</p>		
	</div>

	<hr />
	<h3 id="CU_BASE">CU_BASE Table</h3>
	<h4>Base - Consumer Price Indexes (CPI)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: BASE_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Base Identifier Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: BASE_NAME</p>
		<p><span class="mbl-strng">Column Description:</span> Base Description</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (20)</p>		
	</div>

	<hr />
	<h3 id="CU_DATA_PUB">CU_DATA_PUB Table</h3>
	<h4>Data Pub - Consumer Price Indexes (CPI)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: SERIES_ID</p>
		<p><span class="mbl-strng">Column Description:</span> Series Identifier Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (17)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: YEAR</p>
		<p><span class="mbl-strng">Column Description:</span> Data Observation Year</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (4)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: PERIOD</p>
		<p><span class="mbl-strng">Column Description:</span> Data Observation Period (Month, Quarter, Semi-Annual, Annual)</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (3)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: VALUE</p>
		<p><span class="mbl-strng">Column Description:</span> Data Observation/Estimate</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (12)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: FOOTNOTE_CODES</p>
		<p><span class="mbl-strng">Column Description:</span> Footnote Codes</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>

	<hr />
	<h3 id="CU_FOOTNOTE">CU_FOOTNOTE Table</h3>
	<h4>Footnote - Consumer Price Indexes (CPI)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: FOOTNOTE_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Footnote Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: FOOTNOTE_TEXT</p>
		<p><span class="mbl-strng">Column Description:</span> Footnote Code Description</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (100)</p>		
	</div>

	<hr />
	<h3 id="CU_ITEM">CU_ITEM Table</h3>
	<h4>Item - Consumer Price Indexes (CPI)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: ITEM_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Item Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (8)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: ITEM_NAME</p>
		<p><span class="mbl-strng">Column Description:</span> Item Code Description</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (100)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: DISPLAY_LEVEL</p>
		<p><span class="mbl-strng">Column Description:</span> Display Indent Level For Query Tool</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (2)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: SELECTABLE</p>
		<p><span class="mbl-strng">Column Description:</span> Code To Allow/Disallow Query Tool Selection</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: SORT_SEQUENCE</p>
		<p><span class="mbl-strng">Column Description:</span> Data Query Tool Widget Sorting</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (5)</p>		
	</div>

	<hr />
	<h3 id="CU_PERIODICITY">CU_PERIODICITY Table</h3>
	<h4>Periodicity - Consumer Price Indexes (CPI)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: PERIODICITY_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Periodicity Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: PERIODICITY_NAME</p>
		<p><span class="mbl-strng">Column Description:</span> Periodicity Description</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (20)</p>		
	</div>

	<hr />
	<h3 id="CU_SEASONAL">CU_SEASONAL Table</h3>
	<h4>Seasonal - Consumer Price Indexes (CPI)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: SEASONAL</p>
		<p><span class="mbl-strng">Column Description:</span> Seasonally adjusted code (S, U)</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: SEASONAL_TEXT</p>
		<p><span class="mbl-strng">Column Description:</span> Seasonal Description</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (30)</p>		
	</div>

	<hr />
	<h3 id="CU_SERIES">CU_SERIES Table</h3>
	<h4>Series - Consumer Price Indexes (CPI)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: SERIES_ID</p>
		<p><span class="mbl-strng">Column Description:</span> Series Identifier Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (17)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: AREA_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Area Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (4)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: ITEM_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Item Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (8)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: SEASONAL</p>
		<p><span class="mbl-strng">Column Description:</span> Seasonal Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: PERIODICITY_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Periodicity Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: BASE_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Base Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: BASE_PERIOD</p>
		<p><span class="mbl-strng">Column Description:</span> Base Period</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (20)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: FOOTNOTE_CODES</p>
		<p><span class="mbl-strng">Column Description:</span> Footnote Codes</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: BEGIN_YEAR</p>
		<p><span class="mbl-strng">Column Description:</span> Begin Year Of Series</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (4)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: BEGIN_PERIOD</p>
		<p><span class="mbl-strng">Column Description:</span> Begin Period Of Series</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (3)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: END_YEAR</p>
		<p><span class="mbl-strng">Column Description:</span> End Year Of Series</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (4)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: END_PERIOD</p>
		<p><span class="mbl-strng">Column Description:</span> End Period Of Series</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (3)</p>		
	</div>
</div>
