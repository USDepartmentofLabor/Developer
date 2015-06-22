---
layout: post
title: 2010 Occupational Employment Statistics - United States Department of Labor Developer Portal
created: 1359577855
description: The Occupational Employment Statistics (OES) program conducts a semi-annual mail survey designed to produce estimates of employment and wages for specific occupations.
---

```
http://api.dol.gov/V1/Statistics/OES2010
```

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
  
- [area](#area)
- [area_definitions](#area_definitions)
- [areatype](#areatype)
- [data](#data)
- [datatype](#datatype)
- [footnote](#footnote)
- [industry](#industry)
- [industry_titles](#industry_titles)
- [occugroup](#occugroup)
- [occupation](#occupation)
- [occupation_definitions](#occupation_definitions)
- [release](#release)
- [seasonal](#seasonal)
- [sector](#sector)
- [series](#series)
- [statemsa](#statemsa)

<div class="dsktp_tbl">
	<h3 id="area">area Table</h3>
	<table summary="Area Codes and Area Names - Occupational Employment Statistics (OES)">
		<caption>Area Codes and Area Names</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">area_code</th>
				<td>Area Code - Primary Key</td>
				<td>varchar(7)</td>
			</tr>
			<tr>
				<th scope="row">areatype_code</th>
				<td>Area Type Code</td>
				<td>varchar(1)</td>
			</tr>
			<tr>
				<th scope="row">area_name</th>
				<td>Area Name</td>
				<td>varchar(100)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="area_definitions">area_definitions Table</h3>
	<table summary="States, Counties, and Metropolitan Specific Areas - Occupational Employment Statistics (OES)">
		<caption>States, Counties, and Metropolitan Specific Areas</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">FIPS</th>
				<td>FIPS - Primary Key</td>
				<td>varchar(10)</td>
			</tr>
			<tr>
				<th scope="row">State</th>
				<td>State Name</td>
				<td>varchar(100)</td>
			</tr>
			<tr>
				<th scope="row">MSA_code</th>
				<td>Metropolitan Specific Area Code - Primary Key</td>
				<td>varchar(20)</td>
			</tr>
			<tr>
				<th scope="row">MSA_name</th>
				<td>Metropolitan Specific Area Name</td>
				<td>varchar(255)</td>
			</tr>
			<tr>
				<th scope="row">Aggregate_MSA_code</th>
				<td>Aggregate Metropolitan Specific Area Code</td>
				<td>varchar(20)</td>
			</tr>
			<tr>
				<th scope="row">Aggregate_MSA_name</th>
				<td>Aggregate Metropolitan Specific Area Name</td>
				<td>varchar(255)</td>
			</tr>
			<tr>
				<th scope="row">County_code</th>
				<td>County Code - Primary Key</td>
				<td>varchar(20)</td>
			</tr>
			<tr>
				<th scope="row">Township_code</th>
				<td>Township Code - Primary Key</td>
				<td>varchar(20)</td>
			</tr>
			<tr>
				<th scope="row">County_name</th>
				<td>County Name</td>
				<td>varchar(255)</td>
			</tr>
			<tr>
				<th scope="row">Township_name</th>
				<td>Township Name</td>
				<td>varchar(255)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="areatype">areatype Table</h3>
	<table summary="Area Types - Occupational Employment Statistics (OES)">
		<caption>Area Types</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">areatype_code</th>
				<td>Area Type Code - Primary Key</td>
				<td>varchar(1)</td>
			</tr>
			<tr>
				<th scope="row">areatype_name</th>
				<td>Area Type Name</td>
				<td>varchar(100)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="data">data Table</h3>
	<table summary="Current Estimates - Occupational Employment Statistics (OES)">
		<caption>Current Estimates</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">series_id</th>
				<td>Serie ID - Primary Key</td>
				<td>varchar(30)</td>
			</tr>
			<tr>
				<th scope="row">year</th>
				<td>Year - Primary Key</td>
				<td>varchar(4)</td>
			</tr>
			<tr>
				<th scope="row">period</th>
				<td>Period - Primary Key</td>
				<td>varchar(3)</td>
			</tr>
			<tr>
				<th scope="row">value</th>
				<td>Value of the Estimate</td>
				<td>varchar(12)</td>
			</tr>
			<tr>
				<th scope="row">footnote_codes</th>
				<td>Unique Code used to identify a specific footnote</td>
				<td>varchar(1)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="datatype">datatype Table</h3>
	<table summary="Data Types - Occupational Employment Statistics (OES)">
		<caption>Data Types</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">datatype_code</th>
				<td>Datatype Code - Primary Key</td>
				<td>varchar(2)</td>
			</tr>
			<tr>
				<th scope="row">datatype_name</th>
				<td>Datatype Name</td>
				<td>varchar(100)</td>
			</tr>
			<tr>
				<th scope="row">footnote_code</th>
				<td>Unique Code used to identify a specific footnote</td>
				<td>varchar(1)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="footnote">footnote Table</h3>
	<table summary="Footnotes and Explanation - Occupational Employment Statistics (OES)">
		<caption>Footnotes and Explanation</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">footnote_code</th>
				<td>Footnote Code - Primary Key</td>
				<td>varchar(1)</td>
			</tr>
			<tr>
				<th scope="row">footnote_text</th>
				<td>Footnote Text</td>
				<td>varchar(250)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="industry">industry Table</h3>
	<table summary="Industry Codes and Titles - Occupational Employment Statistics (OES)">
		<caption>Industry Codes and Titles</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">industry_code</th>
				<td>Industry Code - Primary Key</td>
				<td>varchar(6)</td>
			</tr>
			<tr>
				<th scope="row">industry_name</th>
				<td>Industry Name</td>
				<td>varchar(100)</td>
			</tr>
			<tr>
				<th scope="row">display_level</th>
				<td>Display Level</td>
				<td>varchar(2)</td>
			</tr>
			<tr>
				<th scope="row">selectable</th>
				<td>Selectable</td>
				<td>varchar(1)</td>
			</tr>
			<tr>
				<th scope="row">sort_sequence</th>
				<td>Sort Sequence</td>
				<td>varchar(5)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="industry_titles">industry_titles Table</h3>
	<table summary="Industry Titles - Occupational Employment Statistics (OES)">
		<caption>Industry Titles</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">Industry_Code</th>
				<td>Industry Code - Primary Key</td>
				<td>varchar(6)</td>
			</tr>
			<tr>
				<th scope="row">Industry_Title</th>
				<td>Industry Title</td>
				<td>varchar(255)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="occugroup">occugroup Table</h3>
	<table summary="Major Occupation Groups codes and Titles - Occupational Employment Statistics (OES)">
		<caption>Major Occupation Groups Codes and Titles</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">occugroup_code</th>
				<td>Occupation Group Code - Primary Key</td>
				<td>varchar(6)</td>
			</tr>
			<tr>
				<th scope="row">occugroup_name</th>
				<td>Occupation Group Name</td>
				<td>varchar(100)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="occupation">occupation Table</h3>
	<table summary="Detail Occupation Codes and Titles - Occupational Employment Statistics (OES)">
		<caption>Detail Occupation Codes and Titles</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">occupation_code</th>
				<td>Occupation Code - Primary Key</td>
				<td>varchar(6)</td>
			</tr>
			<tr>
				<th scope="row">occupation_name</th>
				<td>Occupation Name</td>
				<td>varchar(100)</td>
			</tr>
			<tr>
				<th scope="row">display_level</th>
				<td>Display Level</td>
				<td>varchar(1)</td>
			</tr>
			<tr>
				<th scope="row">selectable</th>
				<td>Selectable</td>
				<td>varchar(1)</td>
			</tr>
			<tr>
				<th scope="row">sort_sequence</th>
				<td>Sort Sequence</td>
				<td>varchar(5)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="occupation_definitions">occupation_definitions Table</h3>
	<table summary="Occupation Definitions - Occupational Employment Statistics (OES)">
		<caption>Occupation Definitions</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
			<tr>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">OCC_CODE</th>
				<td>Occupation Code - Primary Key</td>
				<td>varchar(10)</td>
			</tr>
			<tr>
				<th scope="row">OCC_TITL</th>
				<td>Occupation Name</td>
				<td>varchar(255)</td>
			</tr>
			<tr>
				<th scope="row">DEF</th>
				<td>Definition</td>
				<td>varchar(max)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="release">release Table</h3>
	<table summary="Reference Date - Occupational Employment Statistics (OES)">
		<caption>Reference Date</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">release_date</th>
				<td>Release Date - Primary Key</td>
				<td>varchar(7)</td>
			</tr>
			<tr>
				<th scope="row">description</th>
				<td>Release Description</td>
				<td>varchar(50)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="seasonal">Seasonal Table</h3>
	<table summary="Seasonal Adjustment Indicator - Occupational Employment Statistics (OES)">
		<caption>Seasonal Adjustment Indicator</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">seasonal</th>
				<td>Seasonal Code - Primary Key</td>
				<td>varchar(1)</td>
			</tr>
			<tr>
				<th scope="row">seasonal_text</th>
				<td>Seasonal Description</td>
				<td>varchar(30)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="sector">sector Table</h3>
	<table summary="Industry Sector Codes  and Titles - Occupational Employment Statistics (OES)">
		<caption>Industry Sector Codes  and Titles</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">sector_code</th>
				<td>Sector Code - Primary Key</td>
				<td>varchar(6)</td>
			</tr>
			<tr>
				<th scope="row">sector_name</th>
				<td>Sector Name</td>
				<td>varchar(100)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="series">series Table</h3>
	<table summary="All Series Codes with Start and End Dates - Occupational Employment Statistics (OES)">
		<caption>All Series Codes with Start and End Dates</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">series_id</th>
				<td>Series ID - Primary Key</td>
				<td>varchar(30)</td>
			</tr>
			<tr>
				<th scope="row">seasonal</th>
				<td>Seasonal</td>
				<td>varchar(1)</td>
			</tr>
			<tr>
				<th scope="row">areatype_code</th>
				<td>Area Type Code</td>
				<td>varchar(1)</td>
			</tr>
			<tr>
				<th scope="row">area_code</th>
				<td>Area Code</td>
				<td>varchar(7)</td>
			</tr>
			<tr>
				<th scope="row">industry_code</th>
				<td>Industry Code</td>
				<td>varchar(6)</td>
			</tr>
			<tr>
				<th scope="row">occupation_code</th>
				<td>Occupation Code</td>
				<td>varchar(6)</td>
			</tr>
			<tr>
				<th scope="row">datatype_code</th>
				<td>Datatype Code</td>
				<td>varchar(2)</td>
			</tr>
			<tr>
				<th scope="row">footnote_codes</th>
				<td>Footnote Code</td>
				<td>varchar(10)</td>
			</tr>
			<tr>
				<th scope="row">begin_year</th>
				<td>Begin Year</td>
				<td>varchar(4)</td>
			</tr>
			<tr>
				<th scope="row">begin_period</th>
				<td>Begin Period</td>
				<td>varchar(3)</td>
			</tr>
			<tr>
				<th scope="row">end_year</th>
				<td>End Year</td>
				<td>varchar(4)</td>
			</tr>
			<tr>
				<th scope="row">end_period</th>
				<td>End Period</td>
				<td>varchar(3)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h3 id="area">area Table</h3>
	<h4>Area Codes and Area Names - Occupational Employment Statistics (OES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: area_code</p>
		<p><span class="mbl-strng">Column Description:</span> Area Code - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(7)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: areatype_code</p>
		<p><span class="mbl-strng">Column Description:</span> Area Type Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: area_name</p>
		<p><span class="mbl-strng">Column Description:</span> Area Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(100)</p>		
	</div>

	<hr />
	<h3 id="area_definitions">area_definitions Table</h3>
	<h4>States, Counties, and Metropolitan Specific Areas - Occupational Employment Statistics (OES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: FIPS</p>
		<p><span class="mbl-strng">Column Description:</span> FIPS - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(10)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: State</p>
		<p><span class="mbl-strng">Column Description:</span> State Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(100)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: MSA_code</p>
		<p><span class="mbl-strng">Column Description:</span> Metropolitan Specific Area Code - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(20)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: MSA_name</p>
		<p><span class="mbl-strng">Column Description:</span> Metropolitan Specific Area Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(255)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: Aggregate_MSA_code</p>
		<p><span class="mbl-strng">Column Description:</span> Aggregate Metropolitan Specific Area Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(20)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: Aggregate_MSA_name</p>
		<p><span class="mbl-strng">Column Description:</span> Aggregate Metropolitan Specific Area Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(255)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: County_code</p>
		<p><span class="mbl-strng">Column Description:</span> County Code - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(20)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: Township_code</p>
		<p><span class="mbl-strng">Column Description:</span> Township Code - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(20)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: County_name</p>
		<p><span class="mbl-strng">Column Description:</span> County Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(255)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: Township_name</p>
		<p><span class="mbl-strng">Column Description:</span> Township Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(255)</p>		
	</div>

	<hr />
	<h3 id="areatype">areatype Table</h3>
	<h4>Area Types - Occupational Employment Statistics (OES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: areatype_code</p>
		<p><span class="mbl-strng">Column Description:</span> Area Type Code - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: areatype_name</p>
		<p><span class="mbl-strng">Column Description:</span> Area Type Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(100)</p>		
	</div>

	<hr />
	<h3 id+"data">data Table</h3>
	<h4>Current Estimates - Occupational Employment Statistics (OES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: series_id</p>
		<p><span class="mbl-strng">Column Description:</span> Serie ID - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(30)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: year</p>
		<p><span class="mbl-strng">Column Description:</span> Year - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(4)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: period</p>
		<p><span class="mbl-strng">Column Description:</span> Period - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(3)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: value</p>
		<p><span class="mbl-strng">Column Description:</span> Value of the Estimate</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(12)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: footnote_codes</p>
		<p><span class="mbl-strng">Column Description:</span> Unique Code used to identify a specific footnote</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>		
	</div>

	<hr />
	<h3 id="datatype">datatype Table</h3>
	<h4>Data Types - Occupational Employment Statistics (OES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: datatype_code</p>
		<p><span class="mbl-strng">Column Description:</span> Datatype Code - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(2)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: datatype_name</p>
		<p><span class="mbl-strng">Column Description:</span> Datatype Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(100)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: footnote_code</p>
		<p><span class="mbl-strng">Column Description:</span> Unique Code used to identify a specific footnote</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>		
	</div>

	<hr />
	<h3 id="footnote">footnote Table</h3>
	<h4>Footnotes and Explanation - Occupational Employment Statistics (OES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: footnote_code</p>
		<p><span class="mbl-strng">Column Description:</span> Footnote Code - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: footnote_text</p>
		<p><span class="mbl-strng">Column Description:</span> Footnote Text</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(250) </p>		
	</div>

	<hr />
	<h3 id="industry">industry Table</h3>
	<h4>Industry Codes and Titles - Occupational Employment Statistics (OES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: industry_code</p>
		<p><span class="mbl-strng">Column Description:</span> Industry Code - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(6)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: industry_name</p>
		<p><span class="mbl-strng">Column Description:</span> Industry Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(100)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: display_level</p>
		<p><span class="mbl-strng">Column Description:</span> Display Level</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(2)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: selectable</p>
		<p><span class="mbl-strng">Column Description:</span> Selectable</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: sort_sequence</p>
		<p><span class="mbl-strng">Column Description:</span> Sort Sequence</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(5)</p>		
	</div>

	<hr />
	<h3 id="industry_titles">industry_titles Table</h3>
	<h4>Industry Titles - Occupational Employment Statistics (OES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: Industry_Code</p>
		<p><span class="mbl-strng">Column Description:</span> Industry Code - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(6)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: Industry_Title</p>
		<p><span class="mbl-strng">Column Description:</span> Industry Title</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(255)</p>		
	</div>

	<hr />
	<h3 id="occugroup">occugroup Table</h3>
	<h4>Major Occupation Groups Codes and Titles - Occupational Employment Statistics (OES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: occugroup_code</p>
		<p><span class="mbl-strng">Column Description:</span> Occupation Group Code - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(6)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: occugroup_name</p>
		<p><span class="mbl-strng">Column Description:</span> Occupation Group Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(100)</p>		
	</div>

	<hr />
	<h3 id="occupation">occupation Table</h3>
	<h4>Detail Occupation Codes and Titles - Occupational Employment Statistics (OES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: occupation_code</p>
		<p><span class="mbl-strng">Column Description:</span> Occupation Code - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(6)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: occupation_name</p>
		<p><span class="mbl-strng">Column Description:</span> Occupation Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(100)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: display_level</p>
		<p><span class="mbl-strng">Column Description:</span> Display Level</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: selectable</p>
		<p><span class="mbl-strng">Column Description:</span> Selectable</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: sort_sequence</p>
		<p><span class="mbl-strng">Column Description:</span> Sort Sequence</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(5)</p>		
	</div>

	<hr />
	<h3 id="occupation_definitions">occupation_definitions Table</h3>
	<h4>Occupation Definitions - Occupational Employment Statistics (OES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: OCC_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Occupation Code - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(10)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: OCC_TITL</p>
		<p><span class="mbl-strng">Column Description:</span> Occupation Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(255)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: DEF</p>
		<p><span class="mbl-strng">Column Description:</span> Definition</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(max)</p>		
	</div>

	<hr />
	<h3 id="release">release Table</h3>
	<h4>Reference Date - Occupational Employment Statistics (OES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: release_date</p>
		<p><span class="mbl-strng">Column Description:</span> Release Date - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(7)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: description</p>
		<p><span class="mbl-strng">Column Description:</span> Release Description</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(50)</p>		
	</div>

	<hr />
	<h3 id="seasonal">seasonal Table</h3>
	<h4>Seasonal Adjustment Indicator - Occupational Employment Statistics (OES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: seasonal</p>
		<p><span class="mbl-strng">Column Description:</span> Seasonal Code - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: seasonal_text</p>
		<p><span class="mbl-strng">Column Description:</span> Seasonal Description</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(30)</p>		
	</div>

	<hr />
	<h3 id="sector">sector Table</h3>
	<h4>Industry Sector Codes  and Titles - Occupational Employment Statistics (OES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: sector_code</p>
		<p><span class="mbl-strng">Column Description:</span> Sector Code - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(6)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: sector_name</p>
		<p><span class="mbl-strng">Column Description:</span> Sector Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(100)</p>		
	</div>

	<hr />
	<h3 id="series">series Table</h3>
	<h4>All Series Codes with Start and End Dates - Occupational Employment Statistics (OES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: series_id</p>
		<p><span class="mbl-strng">Column Description:</span> Series ID - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(30)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: seasonal</p>
		<p><span class="mbl-strng">Column Description:</span> Seasonal</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: areatype_code</p>
		<p><span class="mbl-strng">Column Description:</span> Area Type Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: area_code</p>
		<p><span class="mbl-strng">Column Description:</span> Area Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(7)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: industry_code</p>
		<p><span class="mbl-strng">Column Description:</span> Industry Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(6)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: occupation_code</p>
		<p><span class="mbl-strng">Column Description:</span> Occupation Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(6)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: datatype_code</p>
		<p><span class="mbl-strng">Column Description:</span> Datatype Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(2)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: footnote_codes</p>
		<p><span class="mbl-strng">Column Description:</span> Footnote Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(10)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: begin_year</p>
		<p><span class="mbl-strng">Column Description:</span> Begin Year</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(4)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: begin_period</p>
		<p><span class="mbl-strng">Column Description:</span> Begin Period</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(3)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: end_year</p>
		<p><span class="mbl-strng">Column Description:</span> End Year</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(4)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: end_period</p>
		<p><span class="mbl-strng">Column Description:</span> End Period</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(3)</p>		
	</div>
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

<div class="dsktp_tbl">
	<h3 id="statemsa">statemsa Table</h3>
	<table summary="States and Areas - Occupational Employment Statistics (OES)">
		<caption>States and Areas</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">state_code</th>
				<td>State Code - Primary Key</td>
				<td>varchar(2)</td>
			</tr>
			<tr>
				<th scope="row">msa_code</th>
				<td>Metropolitan Specific Area Code - Primary Key</td>
				<td>varchar(7)</td>
			</tr>
			<tr>
				<th scope="row">msa_name</th>
				<td>Metropolitan Specific Area Name</td>
				<td>varchar(100)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<hr />
	<h3 id="statemsa">statemsa Table</h3>
	<h4>States and Areas - Occupational Employment Statistics (OES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: state_code</p>
		<p><span class="mbl-strng">Column Description:</span> State Code - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(2)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: msa_code</p>
		<p><span class="mbl-strng">Column Description:</span> Metropolitan Specific Area Code - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(7)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: msa_name</p>
		<p><span class="mbl-strng">Column Description:</span> Metropolitan Specific Area Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(100)</p>		
	</div>
</div>
