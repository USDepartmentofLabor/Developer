---
layout: post
title: 2010 Occupational Employment Statistics
created: 1359577855
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
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=BLS 2010 Occupation Employment Statistics" class="button radius button_dataset">Explore This Data</a>


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

<h3><a name="area">area Table</a></h3>

<p>Describes Area codes and Area names.</p>

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
			<th>area_code</th>
			<td>Area Code - Primary Key</td>
			<td>varchar(7)</td>
		</tr>
		<tr>
			<th>areatype_code</th>
			<td>Area Type Code</td>
			<td>varchar(1)</td>
		</tr>
		<tr>
			<th>area_name</th>
			<td>Area Name</td>
			<td>varchar(100)</td>
		</tr>
	</tbody>
</table>
<h3><a name="area_definitions">area_definitions Table</a></h3>
<h3>area_definitions Table</h3>

<p>Describes States, Counties, and Metropolitan Specific Areas.</p>

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
			<th>FIPS</th>
			<td>FIPS - Primary Key</td>
			<td>varchar(10)</td>
		</tr>
		<tr>
			<th>State</th>
			<td>State Name</td>
			<td>varchar(100)</td>
		</tr>
		<tr>
			<th>MSA_code</th>
			<td>Metropolitan Specific Area Code - Primary Key</td>
			<td>varchar(20)</td>
		</tr>
		<tr>
			<th>MSA_name</th>
			<td>Metropolitan Specific Area Name</td>
			<td>varchar(255)</td>
		</tr>
		<tr>
			<th>Aggregate_MSA_code</th>
			<td>Aggregate Metropolitan Specific Area Code</td>
			<td>varchar(20)</td>
		</tr>
		<tr>
			<th>Aggregate_MSA_name</th>
			<td>Aggregate Metropolitan Specific Area Name</td>
			<td>varchar(255)</td>
		</tr>
		<tr>
			<th>County_code</th>
			<td>County Code - Primary Key</td>
			<td>varchar(20)</td>
		</tr>
		<tr>
			<th>Township_code</th>
			<td>Township Code - Primary Key</td>
			<td>varchar(20)</td>
		</tr>
		<tr>
			<th>County_name</th>
			<td>County Name</td>
			<td>varchar(255)</td>
		</tr>
		<tr>
			<th>Township_name</th>
			<td>Township Name</td>
			<td>varchar(255)</td>
		</tr>
	</tbody>
</table>
<h3><a name="areatype">areatype Table</a></h3>

<p>Describes Area Types.</p>

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
			<th>areatype_code</th>
			<td>Area Type Code - Primary Key</td>
			<td>varchar(1)</td>
		</tr>
		<tr>
			<th>areatype_name</th>
			<td>Area Type Name</td>
			<td>varchar(100)</td>
		</tr>
	</tbody>
</table>
<h3><a name="data">data Table</a></h3>

<p>Describes current estimates.</p>

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
			<th>series_id</th>
			<td>Serie ID - Primary Key</td>
			<td>varchar(30)</td>
		</tr>
		<tr>
			<th>year</th>
			<td>Year - Primary Key</td>
			<td>varchar(4)</td>
		</tr>
		<tr>
			<th>period</th>
			<td>Period - Primary Key</td>
			<td>varchar(3)</td>
		</tr>
		<tr>
			<th>value</th>
			<td>Value of the Estimate</td>
			<td>varchar(12)</td>
		</tr>
		<tr>
			<th>footnote_codes</th>
			<td>Unique Code used to identify a specific footnote</td>
			<td>varchar(1)</td>
		</tr>
	</tbody>
</table>
<h3><a name="datatype">datatype Table</a></h3>

<p>Describes Data Types.</p>

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
			<th>datatype_code</th>
			<td>Datatype Code - Primary Key</td>
			<td>varchar(2)</td>
		</tr>
		<tr>
			<th>datatype_name</th>
			<td>Datatype Name</td>
			<td>varchar(100)</td>
		</tr>
		<tr>
			<th>footnote_code</th>
			<td>Unique Code used to identify a specific footnote</td>
			<td>varchar(1)</td>
		</tr>
	</tbody>
</table>
<h3><a name="footnote">footnote Table</a></h3>

<p>Describes Footnotes and explanation.</p>

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
			<th>footnote_code</th>
			<td>Footnote Code - Primary Key</td>
			<td>varchar(1)</td>
		</tr>
		<tr>
			<th>footnote_text</th>
			<td>Footnote Text</td>
			<td>varchar(250)</td>
		</tr>
	</tbody>
</table>
<h3><a name="industry">industry Table</a></h3>

<p>Describes Industry Codes and titles.</p>

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
			<th>industry_code</th>
			<td>Industry Code - Primary Key</td>
			<td>varchar(6)</td>
		</tr>
		<tr>
			<th>industry_name</th>
			<td>Industry Name</td>
			<td>varchar(100)</td>
		</tr>
		<tr>
			<th>display_level</th>
			<td>Display Level</td>
			<td>varchar(2)</td>
		</tr>
		<tr>
			<th>selectable</th>
			<td>Selectable</td>
			<td>varchar(1)</td>
		</tr>
		<tr>
			<th>sort_sequence</th>
			<td>Sort Sequence</td>
			<td>varchar(5)</td>
		</tr>
	</tbody>
</table>
<h3><a name="industry_titles">industry_titles Table</a></h3>

<p>Describes Industry titles.</p>

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
			<th>Industry_Code</th>
			<td>Industry Code - Primary Key</td>
			<td>varchar(6)</td>
		</tr>
		<tr>
			<th>Industry_Title</th>
			<td>Industry Title</td>
			<td>varchar(255)</td>
		</tr>
	</tbody>
</table>
<h3><a name="occugroup">occugroup Table</a></h3>

<p>Describes major Occupation Groups codes and titles.</p>

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
			<th>occugroup_code</th>
			<td>Occupation Group Code - Primary Key</td>
			<td>varchar(6)</td>
		</tr>
		<tr>
			<th>occugroup_name</th>
			<td>Occupation Group Name</td>
			<td>varchar(100)</td>
		</tr>
	</tbody>
</table>
<h3><a name="occupation">occupation Table</a></h3>

<p>Describes detail Occupation codes and titles.</p>

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
			<th>occupation_code</th>
			<td>Occupation Code - Primary Key</td>
			<td>varchar(6)</td>
		</tr>
		<tr>
			<th>occupation_name</th>
			<td>Occupation Name</td>
			<td>varchar(100)</td>
		</tr>
		<tr>
			<th>display_level</th>
			<td>Display Level</td>
			<td>varchar(1)</td>
		</tr>
		<tr>
			<th>selectable</th>
			<td>Selectable</td>
			<td>varchar(1)</td>
		</tr>
		<tr>
			<th>sort_sequence</th>
			<td>Sort Sequence</td>
			<td>varchar(5)</td>
		</tr>
	</tbody>
</table>
<h3><a name="occupation_definitions">occupation_definitions Table</a></h3>

<p>Describes Occupation definitions.</p>

<table>
	<thead>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
		<tr>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>OCC_CODE</th>
			<td>Occupation Code - Primary Key</td>
			<td>varchar(10)</td>
		</tr>
		<tr>
			<th>OCC_TITL</th>
			<td>Occupation Name</td>
			<td>varchar(255)</td>
		</tr>
		<tr>
			<th>DEF</th>
			<td>Definition</td>
			<td>varchar(max)</td>
		</tr>
	</tbody>
</table>
<h3><a name="release">release Table</a></h3>

<p>Describes the reference date.</p>

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
			<th>release_date</th>
			<td>Release Date - Primary Key</td>
			<td>varchar(7)</td>
		</tr>
		<tr>
			<th>description</th>
			<td>Release Description</td>
			<td>varchar(50)</td>
		</tr>
	</tbody>
</table>
<h3><a name="seasonal">Seasonal Table</a></h3>

<p>Describes Seasonal adjustment indicator.</p>

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
			<th>seasonal</th>
			<td>Seasonal Code - Primary Key</td>
			<td>varchar(1)</td>
		</tr>
		<tr>
			<th>seasonal_text</th>
			<td>Seasonal Description</td>
			<td>varchar(30)</td>
		</tr>
	</tbody>
</table>
<h3><a name="sector">sector Table</a></h3>

<p>Describes Industry Sector codes and titles.</p>

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
			<th>sector_code</th>
			<td>Sector Code - Primary Key</td>
			<td>varchar(6)</td>
		</tr>
		<tr>
			<th>sector_name</th>
			<td>Sector Name</td>
			<td>varchar(100)</td>
		</tr>
	</tbody>
</table>
<h3><a name="series">series Table</a></h3>

<p>Describes all Series codes with start and end dates.</p>

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
			<th>series_id</th>
			<td>Series ID - Primary Key</td>
			<td>varchar(30)</td>
		</tr>
		<tr>
			<th>seasonal</th>
			<td>Seasonal</td>
			<td>varchar(1)</td>
		</tr>
		<tr>
			<th>areatype_code</th>
			<td>Area Type Code</td>
			<td>varchar(1)</td>
		</tr>
		<tr>
			<th>area_code</th>
			<td>Area Code</td>
			<td>varchar(7)</td>
		</tr>
		<tr>
			<th>industry_code</th>
			<td>Industry Code</td>
			<td>varchar(6)</td>
		</tr>
		<tr>
			<th>occupation_code</th>
			<td>Occupation Code</td>
			<td>varchar(6)</td>
		</tr>
		<tr>
			<th>datatype_code</th>
			<td>Datatype Code</td>
			<td>varchar(2)</td>
		</tr>
		<tr>
			<th>footnote_codes</th>
			<td>Footnote Code</td>
			<td>varchar(10)</td>
		</tr>
		<tr>
			<th>begin_year</th>
			<td>Begin Year</td>
			<td>varchar(4)</td>
		</tr>
		<tr>
			<th>begin_period</th>
			<td>Begin Period</td>
			<td>varchar(3)</td>
		</tr>
		<tr>
			<th>end_year</th>
			<td>End Year</td>
			<td>varchar(4)</td>
		</tr>
		<tr>
			<th>end_period</th>
			<td>End Period</td>
			<td>varchar(3)</td>
		</tr>
	</tbody>
</table>
<p>The series_id (OEUM000040000000000000001) can be broken out into:</p>

<p>Code Value(Example)</p>

<ul>
	<li>survey abbreviation = OE</li>
	<li>seasonal(code) = U</li>
	<li>area_code = 0000400</li>
	<li>industry_code = 000000</li>
	<li>occupation_code = 000000</li>
	<li>datatype_code = 01</li>
</ul>
<h3><a name="statemsa">statemsa Table</a></h3>

<p>Describes States and Areas.</p>

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
			<th>state_code</th>
			<td>State Code - Primary Key</td>
			<td>varchar(2)</td>
		</tr>
		<tr>
			<th>msa_code</th>
			<td>Metropolitan Specific Area Code - Primary Key</td>
			<td>varchar(7)</td>
		</tr>
		<tr>
			<th>msa_name</th>
			<td>Metropolitan Specific Area Name</td>
			<td>varchar(100)</td>
		</tr>
	</tbody>
</table>
