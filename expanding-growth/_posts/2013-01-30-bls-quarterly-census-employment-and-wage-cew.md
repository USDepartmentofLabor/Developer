---
layout: post
title: Quarterly Census Employment and Wage (CEW)
created: 1359578858
version: V1
description: The Quarterly Census of Employment and Wages (QCEW) program publishes a quarterly count of employment and wages reported by employers covering 98 percent of U.S. jobs, available at the county, MSA, state and national levels by industry.
---

<div class="force_wrap apiurl">
<p>https://api.dol.gov/V1/Statistics/CEW</p>
</div>

<p>The Quarterly Census of Employment and Wages (QCEW) program publishes a quarterly count of employment and wages reported by employers covering 98 percent of U.S. jobs, available at the county, MSA, state and national levels by industry.</p>

<p>More information and details about the data provided can be found at <a href="https://www.bls.gov/cew/">http://www.bls.gov/cew</a></p>

<a href ="http://api.dol.gov/V1/Statistics/CEW/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=BLS%20Quarterly%20Census%20Employment%20and%20Wage%20(CEW)" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables  

<div>
	<ul>
		<li><a href="#EN_AREA">EN_AREA</a></li>
		<li><a href="#EN_FOOTNOTE">EN_FOOTNOTE</a></li>
		<li><a href="#EN_INDUSTRY">EN_INDUSTRY</a></li>
		<li><a href="#EN_LQAREA">EN_LQAREA</a></li>
		<li><a href="#EN_OWNER">EN_OWNER</a></li>
		<li><a href="#EN_STATE">EN_STATE</a></li>
		<li><a href="#EN_TYPE">EN_TYPE</a></li>
	</ul>
</div>

<div>
	<h3 id="EN_AREA" tabindex="-1">EN_AREA</h3>
	<table class="accessible responsive" summary="Area - Quarterly Census of Employment and Wages (QCEW)">
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
					varchar (5)
				</td>
				<td>
					<span class="small">Column Description</span>
					Area Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					AREA_TITLE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (60)
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

<!--
	<h3 id="EN_DATA_PUB" tabindex="-1">EN_DATA_PUB</h3>
	<table class="accessible responsive" summary="Data Pub - Quarterly Census of Employment and Wages (QCEW)">
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
-->
	<h3 id="EN_FOOTNOTE" tabindex="-1">EN_FOOTNOTE</h3>
	<table class="accessible responsive" summary="Footnote - Quarterly Census of Employment and Wages (QCEW)">
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
					varchar (2)
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
					varchar (150)
				</td>
				<td>
					<span class="small">Column Description</span>
					Footnote Code Description
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="EN_INDUSTRY" tabindex="-1">EN_INDUSTRY</h3>
	<table class="accessible responsive" summary="Industry - Quarterly Census of Employment and Wages (QCEW)">
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
					varchar (6)
				</td>
				<td>
					<span class="small">Column Description</span>
					Industry Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					INDUSTRY_TITLE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (60)
				</td>
				<td>
					<span class="small">Column Description</span>
					Industry Code Description
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

	<h3 id="EN_LQAREA" tabindex="-1">EN_LQAREA</h3>
	<table class="accessible responsive" summary="Location Quotient  Area - Quarterly Census of Employment and Wages (QCEW)">
		<caption>Location Quotient Area</caption>
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
					varchar (5)
				</td>
				<td>
					<span class="small">Column Description</span>
					Location Quotient Application Area Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					AREA_TITLE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (60)
				</td>
				<td>
					<span class="small">Column Description</span>
					Location Quotient Application Area Name
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
					Location Quotient Application Area Code
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

	<h3 id="EN_OWNER" tabindex="-1">EN_OWNER</h3>
	<table class="accessible responsive" summary="Owner - Quarterly Census of Employment and Wages (QCEW)">
		<caption>Owner</caption>
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
					OWNER_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Establishment Ownership Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					OWNER_TITLE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (30)
				</td>
				<td>
					<span class="small">Column Description</span>
					Establishment Ownership Code Description
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

<!--
	<h3 id="EN_SERIES" tabindex="-1">EN_SERIES</h3>
	<table class="accessible responsive" summary="Series - Quarterly Census of Employment and Wages (QCEW)">
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
					varchar (5)
				</td>
				<td>
					<span class="small">Column Description</span>
					Area Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					TYPE_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Data Type Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					SIZE_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Establishment Size Class Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					OWNER_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Establishment Ownership Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					INDUSTRY_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (6)
				</td>
				<td>
					<span class="small">Column Description</span>
					Industry Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					STATE_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					State Code / FIPS
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
-->
	<h3 id="EN_STATE" tabindex="-1">EN_STATE</h3>
	<table class="accessible responsive" summary="State - Quarterly Census of Employment and Wages (QCEW)">
		<caption>State</caption>
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
					STATE_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					State Code / FIPS
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					STATE_TITLE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (60)
				</td>
				<td>
					<span class="small">Column Description</span>
					State Name
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

	<h3 id="EN_TYPE" tabindex="-1">EN_TYPE</h3>
	<table class="accessible responsive" summary="Type - Quarterly Census of Employment and Wages (QCEW)">
		<caption>Type</caption>
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
					TYPE_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Data Type Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					TYPE_TITLE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (30)
				</td>
				<td>
					<span class="small">Column Description</span>
					Data Type Code Description
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
</div>