---
layout: post
title: Quarterly Census Employment and Wage (CEW) - United States Department of Labor Developer Portal
created: 1359578858
description: The Quarterly Census of Employment and Wages (QCEW) program publishes a quarterly count of employment and wages reported by employers covering 98 percent of U.S. jobs, available at the county, MSA, state and national levels by industry.
---

```
http://api.dol.gov/V1/Statistics/CEW
```

<p>The Quarterly Census of Employment and Wages (QCEW) program publishes a quarterly count of employment and wages reported by employers covering 98 percent of U.S. jobs, available at the county, MSA, state and national levels by industry.</p>

<p>More information and details about the data provided can be found at <a href="http://www.bls.gov/cew">http://www.bls.gov/cew</a></p>


<a href ="http://api.dol.gov/V1/Statistics/CEW/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=BLS%20Quarterly%20Census%20Employment%20and%20Wage%20(CEW)" class="button radius button_dataset">Explore This Data</a>


## Dataset Tables  

- [EN_AREA](#EN_AREA)
- [EN_DATA_PUB](#EN_DATA_PUB)
- [EN_FOOTNOTE](#EN_FOOTNOTE)
- [EN_INDUSTRY](#EN_INDUSTRY)
- [EN_LQAREA](#EN_LQAREA)
- [EN_OWNER](#EN_OWNER)
- [EN_SERIES](#EN_SERIES)
- [EN_STATE](#EN_STATE)
- [EN_TYPE](#EN_TYPE)

<div class="dsktp_tbl">
	<h3 id="EN_AREA">EN_AREA</h3>
	<table summary="Area - Quarterly Census of Employment and Wages (QCEW)">
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
				<td>varchar (5)</td>
			</tr>
			<tr>
				<th scope="row">AREA_TITLE</th>
				<td>Area Name</td>
				<td>varchar (60)</td>
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

	<h3 id="EN_DATA_PUB">EN_DATA_PUB</h3>
	<table summary="Data Pub - Quarterly Census of Employment and Wages (QCEW)">
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

	<h3 id="EN_FOOTNOTE">EN_FOOTNOTE</h3>
	<table summary="Footnote - Quarterly Census of Employment and Wages (QCEW)">
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
				<td>varchar (2)</td>
			</tr>
			<tr>
				<th scope="row">FOOTNOTE_TEXT</th>
				<td>Footnote Code Description</td>
				<td>varchar (150)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="EN_INDUSTRY">EN_INDUSTRY</h3>
	<table summary="Industry - Quarterly Census of Employment and Wages (QCEW)">
		<caption>Industry</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">INDUSTRY_CODE</th>
				<td>Industry Code</td>
				<td>varchar (6)</td>
			</tr>
			<tr>
				<th scope="row">INDUSTRY_TITLE</th>
				<td>Industry Code Description</td>
				<td>varchar (60)</td>
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

	<h3 id="EN_LQAREA">EN_LQAREA</h3>
	<table summary="Location Quotient  Area - Quarterly Census of Employment and Wages (QCEW)">
		<caption>Location Quotient  Area</caption>
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
				<td>Location Quotient Application Area Code</td>
				<td>varchar (5)</td>
			</tr>
			<tr>
				<th scope="row">AREA_TITLE</th>
				<td>Location Quotient Application Area Name</td>
				<td>varchar (60)</td>
			</tr>
			<tr>
				<th scope="row">DISPLAY_LEVEL</th>
				<td>Location Quotient Application Area Code</td>
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

	<h3 id="EN_OWNER">EN_OWNER</h3>
	<table summary="Owner - Quarterly Census of Employment and Wages (QCEW)">
		<caption>Owner</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">OWNER_CODE</th>
				<td>Establishment Ownership Code</td>
				<td>varchar (1)</td>
			</tr>
			<tr>
				<th scope="row">OWNER_TITLE</th>
				<td>Establishment Ownership Code Description</td>
				<td>varchar (30)</td>
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

	<h3 id="EN_SERIES">EN_SERIES</h3>
	<table summary="Series - Quarterly Census of Employment and Wages (QCEW)">
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
				<td>varchar (5)</td>
			</tr>
			<tr>
				<th scope="row">TYPE_CODE</th>
				<td>Data Type Code</td>
				<td>varchar (1)</td>
			</tr>
			<tr>
				<th scope="row">SIZE_CODE</th>
				<td>Establishment Size Class Code</td>
				<td>varchar (1)</td>
			</tr>
			<tr>
				<th scope="row">OWNER_CODE</th>
				<td>Establishment Ownership Code</td>
				<td>varchar (1)</td>
			</tr>
			<tr>
				<th scope="row">INDUSTRY_CODE</th>
				<td>Industry Code</td>
				<td>varchar (6)</td>
			</tr>
			<tr>
				<th scope="row">STATE_CODE</th>
				<td>State Code / FIPS</td>
				<td>varchar (2)</td>
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

	<h3 id="EN_STATE">EN_STATE</h3>
	<table summary="State - Quarterly Census of Employment and Wages (QCEW)">
		<caption>State</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">STATE_CODE</th>
				<td>State Code / FIPS</td>
				<td>varchar (2)</td>
			</tr>
			<tr>
				<th scope="row">STATE_TITLE</th>
				<td>State Name</td>
				<td>varchar (60)</td>
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

	<h3 id="EN_TYPE">EN_TYPE</h3>
	<table summary="Type - Quarterly Census of Employment and Wages (QCEW)">
		<caption>Type</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">TYPE_CODE</th>
				<td>Data Type Code</td>
				<td>varchar (1)</td>
			</tr>
			<tr>
				<th scope="row">TYPE_TITLE</th>
				<td>Data Type Code Description</td>
				<td>varchar (30)</td>
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
</div>

<div class="mbl_tbl">
	<h3 id="EN_AREA">EN_AREA</h3>
	<h4>Area - Quarterly Census of Employment and Wages (QCEW)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: AREA_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Area Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (5)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: AREA_TITLE</p>
		<p><span class="mbl-strng">Column Description:</span> Area Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (60)</p>		
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
	<h3 id="EN_DATA_PUB">EN_DATA_PUB</h3>
	<h4>Data Pub - Quarterly Census of Employment and Wages (QCEW)</h4>
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
	<h3 id="EN_FOOTNOTE">EN_FOOTNOTE</h3>
	<h4>Footnote - Quarterly Census of Employment and Wages (QCEW)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: FOOTNOTE_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Footnote Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (2)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: FOOTNOTE_TEXT</p>
		<p><span class="mbl-strng">Column Description:</span> Footnote Code Description 	</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (150)</p>		
	</div>

	<hr />
	<h3 id="EN_INDUSTRY">EN_INDUSTRY</h3>
	<h4>Industry - Quarterly Census of Employment and Wages (QCEW)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: INDUSTRY_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Industry Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (6)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: INDUSTRY_TITLE</p>
		<p><span class="mbl-strng">Column Description:</span> Industry Code Description</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (60)</p>		
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
	<h3 id="EN_LQAREA">EN_LQAREA</h3>
	<h4>Location Quotient Area - Quarterly Census of Employment and Wages (QCEW)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: AREA_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Location Quotient Application Area Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (5)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: AREA_TITLE</p>
		<p><span class="mbl-strng">Column Description:</span> Location Quotient Application Area Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (60)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: DISPLAY_LEVEL</p>
		<p><span class="mbl-strng">Column Description:</span> Location Quotient Application Area Code</p>
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
	<h3 id="EN_OWNER">EN_OWNER</h3>
	<h4>Owner - Quarterly Census of Employment and Wages (QCEW)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: OWNER_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Establishment Ownership Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: OWNER_TITLE</p>
		<p><span class="mbl-strng">Column Description:</span> Establishment Ownership Code Description</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (30)</p>		
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
	<h3 id="EN_SERIES">EN_SERIES</h3>
	<h4>Series - Quarterly Census of Employment and Wages (QCEW)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: SERIES_ID</p>
		<p><span class="mbl-strng">Column Description:</span> Series Identifier Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (17)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: AREA_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Area Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (5)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: TYPE_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Data Type Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: SIZE_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Establishment Size Class Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: OWNER_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Establishment Ownership Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: INDUSTRY_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Industry Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (6)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: STATE_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> State Code / FIPS</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (2)</p>		
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

	<hr />
	<h3 id="EN_STATE">EN_STATE</h3>
	<h4>State - Quarterly Census of Employment and Wages (QCEW)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: STATE_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> State Code / FIPS</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (2)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: STATE_TITLE</p>
		<p><span class="mbl-strng">Column Description:</span> State Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (60)</p>		
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
	<h3 id="EN_TYPE">EN_TYPE</h3>
	<h4>Type - Quarterly Census of Employment and Wages (QCEW)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: TYPE_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Data Type Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: TYPE_TITLE</p>
		<p><span class="mbl-strng">Column Description:</span> Data Type Code Description</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (30)</p>		
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
</div>
