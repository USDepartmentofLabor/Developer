---
layout: post
title: Occupational Employment Statistics Survey (OES)
created: 1359578884
---

```
http://api.dol.gov/V1/Statistics/OES/$metadata
```

<p>The Occupational Employment Statistics (OES) program produces employment and wage estimates for over 800 occupations. These are estimates of the number of people employed in certain occupations, and estimates of the wages paid to them. Self-employed persons are not included in the estimates. These estimates are available for the nation as a whole, for individual States, and for metropolitan and nonmetropolitan areas; national occupational estimates for specific industries are also available.</p>

<p>More information and details about the data provided can be found at <a href="http://www.bls.gov/oes">http://www.bls.gov/oes</a></p>


<a href ="http://api.dol.gov/V1/Statistics/OES/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=BLS Occupational Employment Statistics Survey (OES)" class="button radius button_dataset">Explore This Data</a>


## Dataset Tables  
<h3>OE_AREA</h3>

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
			<th>AREA_CODE</th>
			<td>Area Code</td>
			<td>varchar (7)</td>
		</tr>
		<tr>
			<th>AREATYPE_CODE</th>
			<td>Area Type Code</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th>AREA_NAME</th>
			<td>Area Name</td>
			<td>varchar (100)</td>
		</tr>
	</tbody>
</table>
<h3>OE_AREATYPE</h3>

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
			<th>AREATYPE_CODE</th>
			<td>Area Type Code</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th>AREATYPE_NAME</th>
			<td>Area Type Description</td>
			<td>varchar (100)</td>
		</tr>
	</tbody>
</table>
<h3>OE_DATA_PUB</h3>

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
			<th>SERIES_ID</th>
			<td>Series Identifier Code</td>
			<td>varchar (30)</td>
		</tr>
		<tr>
			<th>YEAR</th>
			<td>Data Observation Year</td>
			<td>varchar (4)</td>
		</tr>
		<tr>
			<th>PERIOD</th>
			<td>Data Observation Period (Month, Quarter, Semi-Annual, Annual)</td>
			<td>varchar (3)</td>
		</tr>
		<tr>
			<th>VALUE</th>
			<td>Data Observation/Estimate</td>
			<td>varchar (12)</td>
		</tr>
		<tr>
			<th>FOOTNOTE_CODES</th>
			<td>Footnote Code</td>
			<td>varchar (10)</td>
		</tr>
	</tbody>
</table>
<h3>OE_DATATYPE</h3>

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
			<th>DATATYPE_CODE</th>
			<td>Data Type Code</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th>DATATYPE_NAME</th>
			<td>Data Type Code Description</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th>FOOTNOTE_CODE</th>
			<td>Footnote Code</td>
			<td>varchar (1)</td>
		</tr>
	</tbody>
</table>
<h3>OE_FOOTNOTE</h3>

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
			<th>FOOTNOTE_CODE</th>
			<td>Footnote Code</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th>FOOTNOTE_TEXT</th>
			<td>Footnote Code Description</td>
			<td>varchar (300)</td>
		</tr>
	</tbody>
</table>
<h3>OE_INDUSTRY</h3>

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
			<th>INDUSTRY_CODE</th>
			<td>Industry Code</td>
			<td>varchar (6)</td>
		</tr>
		<tr>
			<th>INDUSTRY_NAME</th>
			<td>Industry Code Description</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th>DISPLAY_LEVEL</th>
			<td>Display Indent Level For Query Tool</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th>SELECTABLE</th>
			<td>Code To Allow/Disallow Query Tool Selection</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th>SORT_SEQUENCE</th>
			<td>Data Query Tool Widget Sorting</td>
			<td>varchar (5)</td>
		</tr>
	</tbody>
</table>
<h3>OE_OCCUGROUP</h3>

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
			<th>OCCUGROUP_CODE</th>
			<td>Occupation Group Code 2 Digit Level</td>
			<td>varchar (6)</td>
		</tr>
		<tr>
			<th>OCCUGROUP_NAME</th>
			<td>Occupation Group Code Description</td>
			<td>varchar (100)</td>
		</tr>
	</tbody>
</table>
<h3>OE_OCCUPATION</h3>

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
			<th>OCCUPATION_CODE</th>
			<td>Occupation Code</td>
			<td>varchar (6)</td>
		</tr>
		<tr>
			<th>OCCUPATION_NAME</th>
			<td>Occupation Code Description</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th>DISPLAY_LEVEL</th>
			<td>Display Indent Level For Query Tool</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th>SELECTABLE</th>
			<td>Code To Allow/Disallow Query Tool Selection</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th>SORT_SEQUENCE</th>
			<td>Data Query Tool Widget Sorting</td>
			<td>varchar (5)</td>
		</tr>
	</tbody>
</table>
<h3>OE_RELEASE</h3>

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
			<th>RELEASE_DATE</th>
			<td>Data Reference Period</td>
			<td>varchar (7)</td>
		</tr>
		<tr>
			<th>DESCRIPTION</th>
			<td>Data Reference Period Description</td>
			<td>varchar (50)</td>
		</tr>
	</tbody>
</table>
<h3>OE_SEASONAL</h3>

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
			<th>SEASONAL</th>
			<td>Seasonal Code</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th>SEASONAL_TEXT</th>
			<td>Seasonal Code Description</td>
			<td>varchar (30)</td>
		</tr>
	</tbody>
</table>
<h3>OE_SECTOR</h3>

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
			<th>SECTOR_CODE</th>
			<td>Industry Sector Code</td>
			<td>varchar (6)</td>
		</tr>
		<tr>
			<th>SECTOR_NAME</th>
			<td>Industry Sector Description</td>
			<td>varchar (100)</td>
		</tr>
	</tbody>
</table>
<h3>OE_SERIES</h3>

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
			<th>SERIES_ID</th>
			<td>Series Identifier Code</td>
			<td>varchar (30)</td>
		</tr>
		<tr>
			<th>SEASONAL</th>
			<td>Seasonal Code</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th>AREATYPE_CODE</th>
			<td>Area Type Code</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th>AREA_CODE</th>
			<td>Area Code</td>
			<td>varchar (7)</td>
		</tr>
		<tr>
			<th>INDUSTRY_CODE</th>
			<td>Industry Code</td>
			<td>varchar (6)</td>
		</tr>
		<tr>
			<th>OCCUPATION_CODE</th>
			<td>Occupation Code</td>
			<td>varchar (6)</td>
		</tr>
		<tr>
			<th>DATATYPE_CODE</th>
			<td>Data Type Code</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th>FOOTNOTE_CODES</th>
			<td>Footnote Codes</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>BEGIN_YEAR</th>
			<td>Begin Year Of Series</td>
			<td>varchar (4)</td>
		</tr>
		<tr>
			<th>BEGIN_PERIOD</th>
			<td>Begin Period Of Series</td>
			<td>varchar (3)</td>
		</tr>
		<tr>
			<th>END_YEAR</th>
			<td>End Year Of Series</td>
			<td>varchar (4)</td>
		</tr>
		<tr>
			<th>END_PERIOD</th>
			<td>End Period Of Series</td>
			<td>varchar (3)</td>
		</tr>
	</tbody>
</table>
<h3>OE_STATEMSA</h3>

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
			<th>STATE_CODE</th>
			<td>State Code</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th>MSA_CODE</th>
			<td>MSA Code</td>
			<td>varchar (7)</td>
		</tr>
		<tr>
			<th>MSA_NAME</th>
			<td>MSA Name</td>
			<td>varchar (100)</td>
		</tr>
	</tbody>
</table>
