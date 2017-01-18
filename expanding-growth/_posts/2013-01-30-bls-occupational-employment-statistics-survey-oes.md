---
layout: post
title: Occupational Employment Statistics Survey (OES)
created: 1359578884
description: The Occupational Employment Statistics (OES) program produces employment and wage estimates for over 800 occupations.
---

<div class="force_wrap apiurl">
<p>http://api.dol.gov/V1/Statistics/OES/$metadata</p>
</div>

<p>The Occupational Employment Statistics (OES) program produces employment and wage estimates for over 800 occupations. These are estimates of the number of people employed in certain occupations, and estimates of the wages paid to them. Self-employed persons are not included in the estimates. These estimates are available for the nation as a whole, for individual States, and for metropolitan and nonmetropolitan areas; national occupational estimates for specific industries are also available.</p>

<p>More information and details about the data provided can be found at <a href="http://www.bls.gov/oes">http://www.bls.gov/oes</a></p>


<a href ="http://api.dol.gov/V1/Statistics/OES/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=BLS%20Occupational%20Employment%20Statistics%20Survey%20(OES)" class="button radius button_dataset">Explore This Data</a>


## Dataset Tables  

<div>
	<ul>
		<li><a href="#OE_AREA">OE_AREA</a></li>
		<li><a href="#OE_AREATYPE">OE_AREATYPE</a></li>
		<li><a href="#OE_DATA_PUB">OE_DATA_PUB</a></li>
		<li><a href="#OE_DATATYPE">OE_DATATYPE</a></li>
		<li><a href="#OE_FOOTNOTE">OE_FOOTNOTE</a></li>
		<li><a href="#OE_INDUSTRY">OE_INDUSTRY</a></li>
		<li><a href="#OE_OCCUPATION">OE_OCCUPATION</a></li>
		<li><a href="#OE_RELEASE">OE_RELEASE</a></li>
		<li><a href="#OE_SEASONAL">OE_SEASONAL</a></li>
		<li><a href="#OE_SECTOR">OE_SECTOR</a></li>
		<li><a href="#OE_SERIES">OE_SERIES</a></li>
	</ul>
</div>

<div>
	<h3 id="OE_AREA" tabindex="-1">OE_AREA</h3>
	<table class="accessible responsive" summary="Area - Occupational Employment Statistics (OES)">
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
					varchar (7)
				</td>
				<td>
					<span class="small">Column Description</span>
					Area Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					AREATYPE_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Area Type Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					AREA_NAME
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Area Name
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="OE_AREATYPE" tabindex="-1">OE_AREATYPE</h3>
	<table class="accessible responsive" summary="Area Type - Occupational Employment Statistics (OES)">
		<caption>Area Type</caption>
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
					AREATYPE_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Area Type Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					AREATYPE_NAME
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Area Type Description
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="OE_DATA_PUB" tabindex="-1">OE_DATA_PUB</h3>
	<table class="accessible responsive" summary="Data Pub - Occupational Employment Statistics (OES)">
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
					varchar (30)
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
					Footnote Code
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="OE_DATATYPE" tabindex="-1">OE_DATATYPE</h3>
	<table class="accessible responsive" summary="Data Type - Occupational Employment Statistics (OES)">
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
					DATATYPE_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Data Type Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					DATATYPE_NAME
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Data Type Code Description
				</td>
			</tr>
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
		</tbody>
	</table>

	<h3 id="OE_FOOTNOTE" tabindex="-1">OE_FOOTNOTE</h3>
	<table class="accessible responsive" summary="Footnote - Occupational Employment Statistics (OES)">
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
					varchar (300)
				</td>
				<td>
					<span class="small">Column Description</span>
					Footnote Code Description
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="OE_INDUSTRY" tabindex="-1">OE_INDUSTRY</h3>
	<table class="accessible responsive" summary="Industry - Occupational Employment Statistics (OES)">
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
					INDUSTRY_NAME
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
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
<!--
	<h3 id="OE_OCCUGROUP" tabindex="-1">OE_OCCUGROUP</h3>
	<table class="accessible responsive" summary="OCCU Group - Occupational Employment Statistics (OES)">
		<caption>Occupation Group</caption>
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
					OCCUGROUP_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (6)
				</td>
				<td>
					<span class="small">Column Description</span>
					Occupation Group Code 2 Digit Level
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					OCCUGROUP_NAME
				</th>
				<td>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Occupation Group Code Description
				</td>
			</tr>
		</tbody>
	</table>
-->
	<h3 id="OE_OCCUPATION" tabindex="-1">OE_OCCUPATION</h3>
	<table class="accessible responsive" summary="Occupation - Occupational Employment Statistics (OES)">
		<caption>Occupation</caption>
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
					OCCUPATION_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (6)
				</td>
				<td>
					<span class="small">Column Description</span>
					Occupation Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					OCCUPATION_NAME
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Occupation Code Description
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

	<h3 id="OE_RELEASE" tabindex="-1">OE_RELEASE</h3>
	<table class="accessible responsive" summary="Release - Occupational Employment Statistics (OES)">
		<caption>Release</caption>
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
					RELEASE_DATE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (7)
				</td>
				<td>
					<span class="small">Column Description</span>
					Data Reference Period
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					DESCRIPTION
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (50)
				</td>
				<td>
					<span class="small">Column Description</span>
					Data Reference Period Description
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="OE_SEASONAL" tabindex="-1">OE_SEASONAL</h3>
	<table class="accessible responsive" summary="Seasonal - Occupational Employment Statistics (OES)">
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
					Seasonal Code
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
					Seasonal Code Description
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="OE_SECTOR" tabindex="-1">OE_SECTOR</h3>
	<table class="accessible responsive" summary="Sector - Occupational Employment Statistics (OES)">
		<caption>Sector</caption>
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
					SECTOR_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (6)
				</td>
				<td>
					<span class="small">Column Description</span>
					Industry Sector Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					SECTOR_NAME
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Industry Sector Description
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="OE_SERIES" tabindex="-1">OE_SERIES</h3>
	<table class="accessible responsive" summary="Series - Occupational Employment Statistics (OES)">
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
					varchar (30)
				</td>
				<td>
					<span class="small">Column Description</span>
					Series Identifier Code
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
					AREATYPE_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Area Type Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					AREA_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (7)
				</td>
				<td>
					<span class="small">Column Description</span>
					Area Code
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
					OCCUPATION_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (6)
				</td>
				<td>
					<span class="small">Column Description</span>
					Occupation Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					DATATYPE_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Data Type Code
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
<!--
	<h3 id="OE_STATEMSA" tabindex="-1">OE_STATEMSA</h3>
	<table class="accessible responsive" summary="State MSA - Occupational Employment Statistics (OES)">
		<caption>State MSA</caption>
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
					State Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					MSA_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (7)
				</td>
				<td>
					<span class="small">Column Description</span>
					MSA Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					MSA_NAME
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					MSA Name
				</td>
			</tr>
		</tbody>
	</table>
-->
</div>