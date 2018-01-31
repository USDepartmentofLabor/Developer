---
layout: post
title: Consumer Price Indexes (CPI)
created: 1359576522
version: V1
description: The Consumer Price Indexes (CPI) program produces monthly data on changes in the prices paid by urban consumers for a representative basket of goods and services.
---

<div class="force_wrap apiurl">
<p>https://api.dol.gov/V1/Statistics/CPI</p>
</div>

<p>The Consumer Price Indexes (CPI) program produces monthly data on changes in the prices paid by urban consumers for a representative basket of goods and services.</p>

<p>More information and details about the data provided can be found at <a href="https://www.bls.gov/cpi">http://www.bls.gov/cpi</a></p>


<a href ="http://api.dol.gov/V1/Statistics/CPI/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=BLS%20Consumer%20Price%20Index%20(CPI)" class="button radius button_dataset">Explore This Data</a>


## Dataset Tables

<div>
	<ul>
		<li><a href="#CU_AREA">CU_AREA</a></li>
		<li><a href="#CU_BASE">CU_BASE</a></li>
		<li><a href="#CU_DATA_PUB">CU_DATA_PUB</a></li>
		<li><a href="#CU_FOOTNOTE">CU_FOOTNOTE</a></li>
		<li><a href="#CU_ITEM">CU_ITEM</a></li>
		<li><a href="#CU_PERIODICITY">CU_PERIODICITY</a></li>
		<li><a href="#CU_SEASONAL">CU_SEASONAL</a></li>
		<li><a href="#CU_SERIES">CU_SERIES</a></li>
	</ul>
</div>

<div>
	<h3 id="CU_AREA" tabindex="-1">CU_AREA Table</h3>
	<table class="accessible responsive" summary="Area - Consumer Price Indexes (CPI)">
		<caption>Area</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					AREA_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (4)
				</td>
				<td>
					<span class="small">Column Description</span>
					Area Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					AREA_NAME
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (80)
				</td>
				<td>
					<span class="small">Column Description</span>
					Area Name
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					DISPLAY_LEVEL
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Display Indent Level For Query Tool
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					SELECTABLE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Code To Allow/Disallow Query Tool Selection
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					SORT_SEQUENCE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (5)
				</td>
				<td>
					<span class="small">Column Description</span>
					Data Query Tool Widget Sorting
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="CU_BASE" tabindex="-1">CU_BASE Table</h3>
	<table class="accessible responsive" summary="Base - Consumer Price Indexes (CPI)">
		<caption>Base</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					BASE_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Base Identifier Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					BASE_NAME
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (20)
				</td>
				<td>
					<span class="small">Column Description</span>
					Base Description
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="CU_DATA_PUB" tabindex="-1">CU_DATA_PUB Table</h3>
	<table class="accessible responsive" summary="Data Pub - Consumer Price Indexes (CPI)">
		<caption>Data Pub</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					SERIES_ID
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (17)
				</td>
				<td>
					<span class="small">Column Description</span>
					Series Identifier Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					YEAR
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (4)
				</td>
				<td>
					<span class="small">Column Description</span>
					Data Observation Year
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					PERIOD
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (3)
				</td>
				<td>
					<span class="small">Column Description</span>
					Data Observation Period (Month, Quarter, Semi-Annual, Annual)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					VALUE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (12)
				</td>
				<td>
					<span class="small">Column Description</span>
					Data Observation/Estimate
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					FOOTNOTE_CODES
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Footnote Codes
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="CU_FOOTNOTE" tabindex="-1">CU_FOOTNOTE Table</h3>
	<table class="accessible responsive" summary="Footnote - Consumer Price Indexes (CPI)">
		<caption>Footnote</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					FOOTNOTE_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Footnote Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					FOOTNOTE_TEXT
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Footnote Code Description
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="CU_ITEM" tabindex="-1">CU_ITEM Table</h3>
	<table class="accessible responsive" summary="Item - Consumer Price Indexes (CPI)">
		<caption>Item</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					ITEM_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (8)
				</td>
				<td>
					<span class="small">Column Description</span>
					Item Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					ITEM_NAME
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Item Code Description
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					DISPLAY_LEVEL
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Display Indent Level For Query Tool
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					SELECTABLE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Code To Allow/Disallow Query Tool Selection
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					SORT_SEQUENCE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (5)
				</td>
				<td>
					<span class="small">Column Description</span>
					Data Query Tool Widget Sorting
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="CU_PERIODICITY" tabindex="-1">CU_PERIODICITY Table</h3>
	<table class="accessible responsive" summary="Periodicity - Consumer Price Indexes (CPI)">
		<caption>Periodicity</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					PERIODICITY_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Periodicity Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					PERIODICITY_NAME
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (20)
				</td>
				<td>
					<span class="small">Column Description</span>
					Periodicity Description
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="CU_SEASONAL" tabindex="-1">CU_SEASONAL Table</h3>
	<table class="accessible responsive" summary="Seasonal - Consumer Price Indexes (CPI)">
		<caption>Seasonal</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					SEASONAL
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Seasonally adjusted code (S, U)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					SEASONAL_TEXT
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (30)
				</td>
				<td>
					<span class="small">Column Description</span>
					Seasonal Description
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="CU_SERIES" tabindex="-1">CU_SERIES Table</h3>
	<table class="accessible responsive" summary="Series - Consumer Price Indexes (CPI)">
		<caption>Series</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					SERIES_ID
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (17)
				</td>
				<td>
					<span class="small">Column Description</span>
					Series Identifier Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					AREA_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (4)
				</td>
				<td>
					<span class="small">Column Description</span>
					Area Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					ITEM_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (8)
				</td>
				<td>
					<span class="small">Column Description</span>
					Item Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					SEASONAL
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Seasonal Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					PERIODICITY_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Periodicity Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					BASE_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Base Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					BASE_PERIOD
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (20)
				</td>
				<td>
					<span class="small">Column Description</span>
					Base Period
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					FOOTNOTE_CODES
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Footnote Codes
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					BEGIN_YEAR
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (4)
				</td>
				<td>
					<span class="small">Column Description</span>
					Begin Year Of Series
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					BEGIN_PERIOD
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (3)
				</td>
				<td>
					<span class="small">Column Description</span>
					Begin Period Of Series
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					END_YEAR
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (4)
				</td>
				<td>
					<span class="small">Column Description</span>
					End Year Of Series
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					END_PERIOD
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (3)
				</td>
				<td>
					<span class="small">Column Description</span>
					End Period Of Series
				</td>
			</tr>
		</tbody>
	</table>
</div>