---
layout: post
title: Current Employment Statistics (CES)
created: 1359575092
version: V1
description: Each month the Current Employment Statistics (CES) program surveys about 141,000 businesses and government agencies, representing approximately 486,000 individual worksites, in order to provide detailed industry data on employment, hours, and earnings of workers on nonfarm payrolls.
---

<div class="force_wrap apiurl">
<p>https://api.dol.gov/V1/Statistics/CES</p>
</div>

<p>Each month the Current Employment Statistics (CES) program surveys about 141,000 businesses and government agencies, representing approximately 486,000 individual worksites, in order to provide detailed industry data on employment, hours, and earnings of workers on nonfarm payrolls.</p>

<p>More information and details about the data provided can be found at <a href="https://www.bls.gov/ces/">https://www.bls.gov/ces/</a></p>


<a href ="http://api.dol.gov/V1/Statistics/CES/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=BLS%20Current%20Employment%20Statistics%20Survey%20(CES)" class="button radius button_dataset">Explore This Data</a>


## Dataset Tables 
 
<div>
	<ul>
		<li><a href="#CE_DATA_PUB">CE_DATA_PUB</a></li>
		<li><a href="#CE_DATATYPE">CE_DATATYPE</a></li>
		<li><a href="#CE_FOOTNOTE">CE_FOOTNOTE</a></li>
		<li><a href="#CE_INDUSTRY">CE_INDUSTRY</a></li>
		<li><a href="#CE_SEASONAL">CE_SEASONAL</a></li>
		<li><a href="#CE_SERIES">CE_SERIES</a></li>
		<li><a href="#CE_SUPERSECTOR">CE_SUPERSECTOR</a></li>
	</ul>
</div>

<div>
	<h3 id="CE_DATA_PUB" tabindex="-1">CE_DATA_PUB Table</h3>
	<table class="accessible responsive" summary="Data Pub - Current Employment Statistics (CES)">
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

	<h3 id="CE_DATATYPE" tabindex="-1">CE_DATATYPE Table</h3>
	<table class="accessible responsive" summary="Data Type - Current Employment Statistics (CES)">
		<caption>Data Type</caption>
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
					DATA_TYPE_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Datatype Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					DATA_TYPE_TEXT
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Datatype Description
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="CE_FOOTNOTE" tabindex="-1">CE_FOOTNOTE Table</h3>
	<table class="accessible responsive" summary="Footnote - Current Employment Statistics (CES)">
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

	<h3 id="CE_INDUSTRY" tabindex="-1">CE_INDUSTRY Table</h3>
	<table class="accessible responsive" summary="Industry - Current Employment Statistics (CES)">
		<caption>Industry</caption>
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
					INDUSTRY_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (8)
				</td>
				<td>
					<span class="small">Column Description</span>
					Industry Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					NAICS_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (13)
				</td>
				<td>
					<span class="small">Column Description</span>
					NAICS Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					PUBLISHING_STATUS
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Publishing Status
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					INDUSTRY_NAME
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (150)
				</td>
				<td>
					<span class="small">Column Description</span>
					Industry Name
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

	<h3 id="CE_SEASONAL" tabindex="-1">CE_SEASONAL Table</h3>
	<table class="accessible responsive" summary="Seasonal - Current Employment Statistics (CES)">
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

	<h3 id="CE_SERIES" tabindex="-1">CE_SERIES Table</h3>
	<table class="accessible responsive" summary="Series - Current Employment Statistics (CES)">
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
					SUPERSECTOR_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Supersector Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					INDUSTRY_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (8)
				</td>
				<td>
					<span class="small">Column Description</span>
					Industry Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					DATA_TYPE_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Datatype Code
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
					FOOTNOTE_CODES
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Footnote Code
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

	<h3 id="CE_SUPERSECTOR" tabindex="-1">CE_SUPERSECTOR Table</h3>
	<table class="accessible responsive" summary="Super sector - Current Employment Statistics (CES)">
		<caption>Supersector</caption>
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
					SUPERSECTOR_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Supersector Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					SUPERSECTOR_NAME
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Supersector Description
				</td>
			</tr>
		</tbody>
	</table>
</div>