---
layout: post
title: Occupational Employment Statistics Survey (OES)
created: 1359578884
description: The Occupational Employment Statistics (OES) program produces employment and wage estimates for over 800 occupations.
---

```
http://api.dol.gov/V1/Statistics/OES/$metadata
```

<p>The Occupational Employment Statistics (OES) program produces employment and wage estimates for over 800 occupations. These are estimates of the number of people employed in certain occupations, and estimates of the wages paid to them. Self-employed persons are not included in the estimates. These estimates are available for the nation as a whole, for individual States, and for metropolitan and nonmetropolitan areas; national occupational estimates for specific industries are also available.</p>

<p>More information and details about the data provided can be found at <a href="http://www.bls.gov/oes">http://www.bls.gov/oes</a></p>


<a href ="http://api.dol.gov/V1/Statistics/OES/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=BLS%20Occupational%20Employment%20Statistics%20Survey%20(OES)" class="button radius button_dataset">Explore This Data</a>


## Dataset Tables  

<div class="dsktp_tbl">
	<ul>
		<li><a href="#OE_AREA">OE_AREA</a></li>
		<li><a href="#OE_AREATYPE">OE_AREATYPE</a></li>
		<li><a href="#OE_DATA_PUB">OE_DATA_PUB</a></li>
		<li><a href="#OE_DATATYPE">OE_DATATYPE</a></li>
		<li><a href="#OE_FOOTNOTE">OE_FOOTNOTE</a></li>
		<li><a href="#OE_INDUSTRY">OE_INDUSTRY</a></li>
		<li><a href="#OE_OCCUGROUP">OE_OCCUGROUP</a></li>
		<li><a href="#OE_OCCUPATION">OE_OCCUPATION</a></li>
		<li><a href="#OE_RELEASE">OE_RELEASE</a></li>
		<li><a href="#OE_SEASONAL">OE_SEASONAL</a></li>
		<li><a href="#OE_SECTOR">OE_SECTOR</a></li>
		<li><a href="#OE_SERIES">OE_SERIES</a></li>
		<li><a href="#OE_STATEMSA">OE_STATEMSA</a></li>
	</ul>
</div>

<div class="mbl_tbl">
	<ul>
		<li><a href="#OE_AREA_mbl">OE_AREA</a></li>
		<li><a href="#OE_AREATYPE_mbl">OE_AREATYPE</a></li>
		<li><a href="#OE_DATA_PUB_mbl">OE_DATA_PUB</a></li>
		<li><a href="#OE_DATATYPE_mbl">OE_DATATYPE</a></li>
		<li><a href="#OE_FOOTNOTE_mbl">OE_FOOTNOTE</a></li>
		<li><a href="#OE_INDUSTRY_mbl">OE_INDUSTRY</a></li>
		<li><a href="#OE_OCCUGROUP_mbl">OE_OCCUGROUP</a></li>
		<li><a href="#OE_OCCUPATION_mbl">OE_OCCUPATION</a></li>
		<li><a href="#OE_RELEASE_mbl">OE_RELEASE</a></li>
		<li><a href="#OE_SEASONAL_mbl">OE_SEASONAL</a></li>
		<li><a href="#OE_SECTOR_mbl">OE_SECTOR</a></li>
		<li><a href="#OE_SERIES_mbl">OE_SERIES</a></li>
		<li><a href="#OE_STATEMSA_mbl">OE_STATEMSA</a></li>
	</ul>
</div>

<div class="dsktp_tbl">
	<h3 id="OE_AREA">OE_AREA</h3>
	<table summary="Area - Occupational Employment Statistics (OES)">
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
				<td>varchar (7)</td>
			</tr>
			<tr>
				<th scope="row">AREATYPE_CODE</th>
				<td>Area Type Code</td>
				<td>varchar (1)</td>
			</tr>
			<tr>
				<th scope="row">AREA_NAME</th>
				<td>Area Name</td>
				<td>varchar (100)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="OE_AREATYPE">OE_AREATYPE</h3>
	<table summary="Area Type - Occupational Employment Statistics (OES)">
		<caption>Area Type</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">AREATYPE_CODE</th>
				<td>Area Type Code</td>
				<td>varchar (1)</td>
			</tr>
			<tr>
				<th scope="row">AREATYPE_NAME</th>
				<td>Area Type Description</td>
				<td>varchar (100)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="OE_DATA_PUB">OE_DATA_PUB</h3>
	<table summary="Data Pub - Occupational Employment Statistics (OES)">
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
				<td>varchar (30)</td>
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
				<td>Footnote Code</td>
				<td>varchar (10)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="OE_DATATYPE">OE_DATATYPE</h3>
	<table summary="Data Type - Occupational Employment Statistics (OES)">
		<caption>Data Type</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">DATATYPE_CODE</th>
				<td>Data Type Code</td>
				<td>varchar (2)</td>
			</tr>
			<tr>
				<th scope="row">DATATYPE_NAME</th>
				<td>Data Type Code Description</td>
				<td>varchar (100)</td>
			</tr>
			<tr>
				<th scope="row">FOOTNOTE_CODE</th>
				<td>Footnote Code</td>
				<td>varchar (1)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="OE_FOOTNOTE">OE_FOOTNOTE</h3>
	<table summary="Footnote - Occupational Employment Statistics (OES)">
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
				<td>varchar (300)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="OE_INDUSTRY">OE_INDUSTRY</h3>
	<table summary="Industry - Occupational Employment Statistics (OES)">
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
				<th scope="row">INDUSTRY_NAME</th>
				<td>Industry Code Description</td>
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

	<h3 id="OE_OCCUGROUP">OE_OCCUGROUP</h3>
	<table summary="OCCU Group - Occupational Employment Statistics (OES)">
		<caption>Occupation Group</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">OCCUGROUP_CODE</th>
				<td>Occupation Group Code 2 Digit Level</td>
				<td>varchar (6)</td>
			</tr>
			<tr>
				<th scope="row">OCCUGROUP_NAME</th>
				<td>Occupation Group Code Description</td>
				<td>varchar (100)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="OE_OCCUPATION">OE_OCCUPATION</h3>
	<table summary="Occupation - Occupational Employment Statistics (OES)">
		<caption>Occupation</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">OCCUPATION_CODE</th>
				<td>Occupation Code</td>
				<td>varchar (6)</td>
			</tr>
			<tr>
				<th scope="row">OCCUPATION_NAME</th>
				<td>Occupation Code Description</td>
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

	<h3 id="OE_RELEASE">OE_RELEASE</h3>
	<table summary="Release - Occupational Employment Statistics (OES)">
		<caption>Release</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">RELEASE_DATE</th>
				<td>Data Reference Period</td>
				<td>varchar (7)</td>
			</tr>
			<tr>
				<th scope="row">DESCRIPTION</th>
				<td>Data Reference Period Description</td>
				<td>varchar (50)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="OE_SEASONAL">OE_SEASONAL</h3>
	<table summary="Seasonal - Occupational Employment Statistics (OES)">
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
				<td>Seasonal Code</td>
				<td>varchar (1)</td>
			</tr>
			<tr>
				<th scope="row">SEASONAL_TEXT</th>
				<td>Seasonal Code Description</td>
				<td>varchar (30)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="OE_SECTOR">OE_SECTOR</h3>
	<table summary="Sector - Occupational Employment Statistics (OES)">
		<caption>Sector</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">SECTOR_CODE</th>
				<td>Industry Sector Code</td>
				<td>varchar (6)</td>
			</tr>
			<tr>
				<th scope="row">SECTOR_NAME</th>
				<td>Industry Sector Description</td>
				<td>varchar (100)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="OE_SERIES">OE_SERIES</h3>
	<table summary="Series - Occupational Employment Statistics (OES)">
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
				<td>varchar (30)</td>
			</tr>
			<tr>
				<th scope="row">SEASONAL</th>
				<td>Seasonal Code</td>
				<td>varchar (1)</td>
			</tr>
			<tr>
				<th scope="row">AREATYPE_CODE</th>
				<td>Area Type Code</td>
				<td>varchar (1)</td>
			</tr>
			<tr>
				<th scope="row">AREA_CODE</th>
				<td>Area Code</td>
				<td>varchar (7)</td>
			</tr>
			<tr>
				<th scope="row">INDUSTRY_CODE</th>
				<td>Industry Code</td>
				<td>varchar (6)</td>
			</tr>
			<tr>
				<th scope="row">OCCUPATION_CODE</th>
				<td>Occupation Code</td>
				<td>varchar (6)</td>
			</tr>
			<tr>
				<th scope="row">DATATYPE_CODE</th>
				<td>Data Type Code</td>
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

	<h3 id="OE_STATEMSA">OE_STATEMSA</h3>
	<table summary="State MSA - Occupational Employment Statistics (OES)">
		<caption>State MSA</caption>
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
				<td>State Code</td>
				<td>varchar (2)</td>
			</tr>
			<tr>
				<th scope="row">MSA_CODE</th>
				<td>MSA Code</td>
				<td>varchar (7)</td>
			</tr>
			<tr>
				<th scope="row">MSA_NAME</th>
				<td>MSA Name</td>
				<td>varchar (100)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h3 id="OE_AREA_mbl">OE_AREA</h3>
	<h4>Area - Occupational Employment Statistics (OES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: AREA_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Area Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (7)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: AREATYPE_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Area Type Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: AREA_NAME</p>
		<p><span class="mbl-strng">Column Description:</span> Area Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (100)</p>		
	</div>
	
	<hr />
	<h3 id="OE_AREATYPE_mbl">OE_AREATYPE</h3>
	<h4>Area Type - Occupational Employment Statistics (OES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: AREATYPE_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Area Type Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: AREATYPE_NAME</p>
		<p><span class="mbl-strng">Column Description:</span> Area Type Description</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (100)</p>		
	</div>

	<hr />
	<h3 id="OE_DATA_PUB_mbl">OE_DATA_PUB</h3>
	<h4>Data Pub - Occupational Employment Statistics (OES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: SERIES_ID</p>
		<p><span class="mbl-strng">Column Description:</span> Series Identifier Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (30)</p>		
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
		<p><span class="mbl-strng">Column Description:</span> Footnote Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>

	<hr />
	<h3 id="OE_DATATYPE_mbl">OE_DATATYPE</h3>
	<h4>Data Type - Occupational Employment Statistics (OES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: DATATYPE_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Data Type Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (2)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: DATATYPE_NAME</p>
		<p><span class="mbl-strng">Column Description:</span> Data Type Code Description</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (100)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: FOOTNOTE_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Footnote Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>

	<hr />
	<h3 id="OE_FOOTNOTE_mbl">OE_FOOTNOTE</h3>
	<h4>Footnote - Occupational Employment Statistics (OES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: FOOTNOTE_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Footnote Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: FOOTNOTE_TEXT</p>
		<p><span class="mbl-strng">Column Description:</span> Footnote Code Description</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (300)</p>		
	</div>

	<hr />
	<h3 id="OE_INDUSTRY_mbl">OE_INDUSTRY</h3>
	<h4>Industry - Occupational Employment Statistics (OES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: INDUSTRY_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Industry Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (6)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: INDUSTRY_NAME</p>
		<p><span class="mbl-strng">Column Description:</span> Industry Code Description</p>
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
	<h3 id="OE_OCCUGROUP_mbl">OE_OCCUGROUP</h3>
	<h4>Occupation Group - Occupational Employment Statistics (OES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: OCCUGROUP_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Occupation Group Code 2 Digit Level</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (6)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: OCCUGROUP_NAME</p>
		<p><span class="mbl-strng">Column Description:</span> Occupation Group Code Description</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (100)</p>		
	</div>

	<hr />
	<h3 id="OE_OCCUPATION_mbl">OE_OCCUPATION</h3>
	<h4>Occupation - Occupational Employment Statistics (OES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: OCCUPATION_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Occupation Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (6)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: OCCUPATION_NAME</p>
		<p><span class="mbl-strng">Column Description:</span> Occupation Code Description</p>
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
	<h3 id="OE_RELEASE_mbl">OE_RELEASE</h3>
	<h4>Release - Occupational Employment Statistics (OES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: RELEASE_DATE</p>
		<p><span class="mbl-strng">Column Description:</span> Data Reference Period</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (7)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: DESCRIPTION</p>
		<p><span class="mbl-strng">Column Description:</span> Data Reference Period Description</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (50)</p>		
	</div>

	<hr />
	<h3 id="OE_SEASONAL_mbl">OE_SEASONAL</h3>
	<h4>Seasonal - Occupational Employment Statistics (OES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: SEASONAL</p>
		<p><span class="mbl-strng">Column Description:</span> Seasonal Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: SEASONAL_TEXT</p>
		<p><span class="mbl-strng">Column Description:</span> Seasonal Code Description</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (30)</p>		
	</div>

	<hr />
	<h3 id="OE_SECTOR_mbl">OE_SECTOR</h3>
	<h4>Sector - Occupational Employment Statistics (OES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: SECTOR_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Industry Sector Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (6)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: SECTOR_NAME</p>
		<p><span class="mbl-strng">Column Description:</span> Industry Sector Description</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (100)</p>		

	<hr />
	<h3 id="OE_SERIES_mbl">OE_SERIES</h3>
	<h4>Series - Occupational Employment Statistics (OES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: SERIES_ID</p>
		<p><span class="mbl-strng">Column Description:</span> Series Identifier Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (30)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: SEASONAL</p>
		<p><span class="mbl-strng">Column Description:</span> Seasonal Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: AREATYPE_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Area Type Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: AREA_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Area Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (7)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: INDUSTRY_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Industry Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (6)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: OCCUPATION_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Occupation Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (6)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: DATATYPE_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Data Type Code</p>
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
	<h3 id="OE_STATEMSA_mbl">OE_STATEMSA</h3>
	<h4>State MSA - Occupational Employment Statistics (OES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: STATE_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> State Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (2)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: MSA_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> MSA Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (7)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: MSA_NAME</p>
		<p><span class="mbl-strng">Column Description:</span> MSA Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (100)</p>		
	</div>
</div>
