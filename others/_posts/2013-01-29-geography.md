---
layout: post
title: Geography
created: 1359478230
description: Find here a list of States, Counties, Cities and, Congressional Districts.
---

```
http://api.dol.gov/V1/Geography
```

<p>Find here a list of States, Counties, Cities and, Congressional Districts. More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://www.census.gov/geo/www/cd110th/tables110.html&amp;exitTitle=U.S.%20Census%20Bureau&amp;fedpage=yes">http://www.census.gov/geo/www/cd110th/tables110.html</a></p>

<a href ="http://api.dol.gov/V1/Geography/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=Geography" class="button radius button_dataset">Explore This Data</a>


## Dataset Tables

- [City](#City)
- [CongressDistrict](#CongressDistrict)
- [County](#County)
- [State](#State)

<h3><a id="City">City Table</a></h3>

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
			<th>CityCode</th>
			<td>City Code - Primary Key</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th>CountyCode</th>
			<td>County Code - Primary Key</td>
			<td>smallint</td>
		</tr>
		<tr>
			<th>StateCode</th>
			<td>State Code - Primary Key</td>
			<td>smallint</td>
		</tr>
		<tr>
			<th>CityName</th>
			<td>Cyty/Place Name</td>
			<td>varchar(250)</td>
		</tr>
		<tr>
			<th>Type</th>
			<td>Type. B=Borough; C=City; D=CDP; O=Comunidad; T=Town; V=Village; X=Other Types</td>
			<td>char(1)</td>
		</tr>
	</tbody>
</table>
<h3><a id="CongressDistrict">CongressDistrict Table</a></h3>

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
			<th>CountyCode</th>
			<td>County Code - Primary Key</td>
			<td>smallint</td>
		</tr>
		<tr>
			<th>StateCode</th>
			<td>State Code - Primary Key</td>
			<td>smallint</td>
		</tr>
		<tr>
			<th>District</th>
			<td>Congressional District - Primary Key</td>
			<td>smallint</td>
		</tr>
	</tbody>
</table>
<h3><a id="County">County Table</a></h3>

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
			<th>CountyCode</th>
			<td>County Code - Primary Key</td>
			<td>smallint</td>
		</tr>
		<tr>
			<th>CountyName</th>
			<td>County Name</td>
			<td>varchar(250)</td>
		</tr>
	</tbody>
</table>
<h3><a id="State">State Table</a></h3>

<table>
	<tbody>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
		<tr>
			<th>StateCode</th>
			<td>State Code - Primary Key</td>
			<td>smallint</td>
		</tr>
		<tr>
			<th>StateName</th>
			<td>State Name</td>
			<td>varchar(200)</td>
		</tr>
	</tbody>
</table>
