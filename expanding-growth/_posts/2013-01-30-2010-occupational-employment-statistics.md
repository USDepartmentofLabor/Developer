---
layout: post
title: 2010 Occupational Employment Statistics
created: 1359577855
description: The Occupational Employment Statistics (OES) program conducts a semi-annual mail survey designed to produce estimates of employment and wages for specific occupations.
---

<div class="force_wrap apiurl">
<p>http://api.dol.gov/V1/Statistics/OES2010</p>
</div>

<p>The Occupational Employment Statistics (OES) program conducts a semi-annual mail survey designed to produce estimates of employment and wages for specific occupations. The OES program collects data on wage and salary workers in nonfarm establishments in order to produce employment and wage estimates for about 800 occupations. Data from self-employed persons are not collected and are not included in the estimates. The OES program produces these occupational estimates by geographic area and by industry. Estimates based on geographic areas are available at the National, State, Metropolitan, and Nonmetropolitan Area levels. The Bureau of Labor Statistics produces occupational employment and wage estimates for over 450 industry classifications at the national level. The industry classifications correspond to the sector, 3-, 4-, and 5-digit North American Industry Classification System (NAICS) industrial groups. More information and details about the data provided can be found at <a href="http://www.bls.gov/oes">http://www.bls.gov/oes</a></p>

<h3>Summary Data Available</h3>
<p>Cross-industry estimates are available by Nation, State, and metropolitan area for about 800 occupations. Industry specific estimates are available at the National level for over 450 industries.</p>

<h3>Data Characteristics</h3>
<ul>
	<li>Annual wage estimates are rounded to the nearest dollar and are stored with no decimal place.</li>
	<li>Hourly wage estimates are rounded to the nearest cent and are stored with two decimal places.</li>
	<li>Employment estimates are rounded to the nearest ten and are stored with no decimal place.</li>
	<li>Percent relative standard errors are rounded to the nearest tenth and are stored with one decimal place.</li>
	<li>Special characteristics of the data are footnoted where necessary.</li>
</ul>

<a href ="http://api.dol.gov/V1/Statistics/OES2010/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=BLS%202010%20Occupation%20Employment%20Statistics" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables
  
<div>
	<ul>
		<li><a href="#area">area</a></li>
		<li><a href="#area_definitions">area_definitions</a></li>
		<li><a href="#areatype">areatype</a></li>
		<li><a href="#data">data</a></li>
		<li><a href="#datatype">datatype</a></li>
		<li><a href="#footnote">footnote</a></li>
		<li><a href="#industry">industry</a></li>
		<li><a href="#industry_titles">industry_titles</a></li>
		<li><a href="#occugroup">occugroup</a></li>
		<li><a href="#occupation">occupation</a></li>
		<li><a href="#occupation_definitions">occupation_definitions</a></li>
		<li><a href="#release">release</a></li>
		<li><a href="#seasonal">seasonal</a></li>
		<li><a href="#sector">sector</a></li>
		<li><a href="#series">series</a></li>
		<li><a href="#statemsa">statemsa</a></li>
	</ul>
</div>

<div>
	<h3 id="area" tabindex="-1">area Table</h3>
	<table class="accessible responsive" summary="Area Codes and Area Names - Occupational Employment Statistics (OES)">
		<caption>Area Codes and Area Names</caption>
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
					area_code
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(7)
				</td>
				<td>
					<span class="small">Column Description</span>
					Area Code - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					areatype_code
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Area Type Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					area_name
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Area Name
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="area_definitions" tabindex="-1">area_definitions Table</h3>
	<table class="accessible responsive" summary="States, Counties, and Metropolitan Specific Areas - Occupational Employment Statistics (OES)">
		<caption>States, Counties, and Metropolitan Specific Areas</caption>
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
					FIPS
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(10)
				</td>
				<td>
					<span class="small">Column Description</span>
					FIPS - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					State
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(100)
				</td>
				<td>
					<span class="small">Column Description</span>
					State Name
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					MSA_code
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(20)
				</td>
				<td>
					<span class="small">Column Description</span>
					Metropolitan Specific Area Code - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					MSA_name
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(255)
				</td>
				<td>
					<span class="small">Column Description</span>
					Metropolitan Specific Area Name
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					Aggregate_MSA_code
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(20)
				</td>
				<td>
					<span class="small">Column Description</span>
					Aggregate Metropolitan Specific Area Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					Aggregate_MSA_name
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(255)
				</td>
				<td>
					<span class="small">Column Description</span>
					Aggregate Metropolitan Specific Area Name
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					County_code
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(20)
				</td>
				<td>
					<span class="small">Column Description</span>
					County Code - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					Township_code
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(20)
				</td>
				<td>
					<span class="small">Column Description</span>
					Township Code - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					County_name
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(255)
				</td>
				<td>
					<span class="small">Column Description</span>
					County Name
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					Township_name
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(255)
				</td>
				<td>
					<span class="small">Column Description</span>
					Township Name
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="areatype" tabindex="-1">areatype Table</h3>
	<table class="accessible responsive" summary="Area Types - Occupational Employment Statistics (OES)">
		<caption>Area Types</caption>
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
					areatype_code
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Area Type Code - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					areatype_name
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Area Type Name
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="data" tabindex="-1">data Table</h3>
	<table class="accessible responsive" summary="Current Estimates - Occupational Employment Statistics (OES)">
		<caption>Current Estimates</caption>
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
					series_id
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(30)
				</td>
				<td>
					<span class="small">Column Description</span>
					Serie ID - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					year
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(4)
				</td>
				<td>
					<span class="small">Column Description</span>
					Year - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					period
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(3)
				</td>
				<td>
					<span class="small">Column Description</span>
					Period - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					value
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(12)
				</td>
				<td>
					<span class="small">Column Description</span>
					Value of the Estimate
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					footnote_codes
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Unique Code used to identify a specific footnote
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="datatype" tabindex="-1">datatype Table</h3>
	<table class="accessible responsive" summary="Data Types - Occupational Employment Statistics (OES)">
		<caption>Data Types</caption>
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
					datatype_code
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Datatype Code - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					datatype_name
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Datatype Name
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					footnote_code
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Unique Code used to identify a specific footnote
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="footnote" tabindex="-1">footnote Table</h3>
	<table class="accessible responsive" summary="Footnotes and Explanation - Occupational Employment Statistics (OES)">
		<caption>Footnotes and Explanation</caption>
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
					footnote_code
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Footnote Code - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					footnote_text
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(250)
				</td>
				<td>
					<span class="small">Column Description</span>
					Footnote Text
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="industry" tabindex="-1">industry Table</h3>
	<table class="accessible responsive" summary="Industry Codes and Titles - Occupational Employment Statistics (OES)">
		<caption>Industry Codes and Titles</caption>
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
					industry_code
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(6)
				</td>
				<td>
					<span class="small">Column Description</span>
					Industry Code - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					industry_name
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Industry Name
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					display_level
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Display Level
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					selectable
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Selectable
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					sort_sequence
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(5)
				</td>
				<td>
					<span class="small">Column Description</span>
					Sort Sequence
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="industry_titles" tabindex="-1">industry_titles Table</h3>
	<table class="accessible responsive" summary="Industry Titles - Occupational Employment Statistics (OES)">
		<caption>Industry Titles</caption>
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
					Industry_Code
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(6)
				</td>
				<td>
					<span class="small">Column Description</span>
					Industry Code - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					Industry_Title
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(255)
				</td>
				<td>
					<span class="small">Column Description</span>
					Industry Title
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="occugroup" tabindex="-1">occugroup Table</h3>
	<table class="accessible responsive" summary="Major Occupation Groups codes and Titles - Occupational Employment Statistics (OES)">
		<caption>Major Occupation Groups Codes and Titles</caption>
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
					occugroup_code
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(6)
				</td>
				<td>
					<span class="small">Column Description</span>
					Occupation Group Code - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					occugroup_name
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Occupation Group Name
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="occupation" tabindex="-1">occupation Table</h3>
	<table class="accessible responsive" summary="Detail Occupation Codes and Titles - Occupational Employment Statistics (OES)">
		<caption>Detail Occupation Codes and Titles</caption>
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
					occupation_code
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(6)
				</td>
				<td>
					<span class="small">Column Description</span>
					Occupation Code - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					occupation_name
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Occupation Name
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					display_level
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Display Level
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					selectable
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Selectable
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					sort_sequence
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(5)
				</td>
				<td>
					<span class="small">Column Description</span>
					Sort Sequence
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="occupation_definitions" tabindex="-1">occupation_definitions Table</h3>
	<table class="accessible responsive" summary="Occupation Definitions - Occupational Employment Statistics (OES)">
		<caption>Occupation Definitions</caption>
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
					OCC_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Occupation Code - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					OCC_TITL
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(255)
				</td>
				<td>
					<span class="small">Column Description</span>
					Occupation Name
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					DEF
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(max)
				</td>
				<td>
					<span class="small">Column Description</span>
					Definition
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="release" tabindex="-1">release Table</h3>
	<table class="accessible responsive" summary="Reference Date - Occupational Employment Statistics (OES)">
		<caption>Reference Date</caption>
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
					release_date
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(7)
				</td>
				<td>
					<span class="small">Column Description</span>
					Release Date - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					description
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(50)
				</td>
				<td>
					<span class="small">Column Description</span>
					Release Description
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="seasonal" tabindex="-1">Seasonal Table</h3>
	<table class="accessible responsive" summary="Seasonal Adjustment Indicator - Occupational Employment Statistics (OES)">
		<caption>Seasonal Adjustment Indicator</caption>
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
					seasonal
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Seasonal Code - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					seasonal_text
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(30)
				</td>
				<td>
					<span class="small">Column Description</span>
					Seasonal Description
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="sector" tabindex="-1">sector Table</h3>
	<table class="accessible responsive" summary="Industry Sector Codes  and Titles - Occupational Employment Statistics (OES)">
		<caption>Industry Sector Codes  and Titles</caption>
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
					sector_code
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(6)
				</td>
				<td>
					<span class="small">Column Description</span>
					Sector Code - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					sector_name
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Sector Name
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="series" tabindex="-1">series Table</h3>
	<table class="accessible responsive" summary="All Series Codes with Start and End Dates - Occupational Employment Statistics (OES)">
		<caption>All Series Codes with Start and End Dates</caption>
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
					series_id
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(30)
				</td>
				<td>
					<span class="small">Column Description</span>
					Series ID - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					seasonal
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Seasonal
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					areatype_code
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Area Type Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					area_code
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(7)
				</td>
				<td>
					<span class="small">Column Description</span>
					Area Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					industry_code
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(6)
				</td>
				<td>
					<span class="small">Column Description</span>
					Industry Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					occupation_code
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(6)
				</td>
				<td>
					<span class="small">Column Description</span>
					Occupation Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					datatype_code
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Datatype Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					footnote_codes
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Footnote Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					begin_year
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(4)
				</td>
				<td>
					<span class="small">Column Description</span>
					Begin Year
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					begin_period
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(3)
				</td>
				<td>
					<span class="small">Column Description</span>
					Begin Period
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					end_year
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(4)
				</td>
				<td>
					<span class="small">Column Description</span>
					End Year
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					end_period
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(3)
				</td>
				<td>
					<span class="small">Column Description</span>
					End Period
				</td>
			</tr>
		</tbody>
	</table>
</div>

<h3>The series_id (OEUM000040000000000000001) can be broken out into:</h3>
<p>Code Value(Example)</p>
<ul>
	<li>survey abbreviation = OE</li>
	<li>seasonal(code) = U</li>
	<li>area_code = 0000400</li>
	<li>industry_code = 000000</li>
	<li>occupation_code = 000000</li>
	<li>datatype_code = 01</li>
</ul>

<div>
	<h3 id="statemsa" tabindex="-1">statemsa Table</h3>
	<table class="accessible responsive" summary="States and Areas - Occupational Employment Statistics (OES)">
		<caption>States and Areas</caption>
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
					state_code
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(2)
				</td>
				<td>
					<span class="small">Column Description</span>
					State Code - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					msa_code
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(7)
				</td>
				<td>
					<span class="small">Column Description</span>
					Metropolitan Specific Area Code - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					msa_name
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Metropolitan Specific Area Name
				</td>
			</tr>
		</tbody>
	</table>
</div>