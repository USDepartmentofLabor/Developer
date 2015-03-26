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

<h3 id="City">City Table</h3>
<table summary="City - Geography">
	<caption>City</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">CityCode</th>
			<td>City Code - Primary Key</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th scope="row">CountyCode</th>
			<td>County Code - Primary Key</td>
			<td>smallint</td>
		</tr>
		<tr>
			<th scope="row">StateCode</th>
			<td>State Code - Primary Key</td>
			<td>smallint</td>
		</tr>
		<tr>
			<th scope="row">CityName</th>
			<td>Cyty/Place Name</td>
			<td>varchar(250)</td>
		</tr>
		<tr>
			<th scope="row">Type</th>
			<td>Type. B=Borough; C=City; D=CDP; O=Comunidad; T=Town; V=Village; X=Other Types</td>
			<td>char(1)</td>
		</tr>
	</tbody>
</table>

<h3 id="CongressDistrict">CongressDistrict Table</h3>
<table summary="Congress District - Geography">
	<caption>Congress District</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">CountyCode</th>
			<td>County Code - Primary Key</td>
			<td>smallint</td>
		</tr>
		<tr>
			<th scope="row">StateCode</th>
			<td>State Code - Primary Key</td>
			<td>smallint</td>
		</tr>
		<tr>
			<th scope="row">District</th>
			<td>Congressional District - Primary Key</td>
			<td>smallint</td>
		</tr>
	</tbody>
</table>

<h3 id="County">County Table</h3>
<table summary="County - Geography">
	<caption>County</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">CountyCode</th>
			<td>County Code - Primary Key</td>
			<td>smallint</td>
		</tr>
		<tr>
			<th scope="row">CountyName</th>
			<td>County Name</td>
			<td>varchar(250)</td>
		</tr>
	</tbody>
</table>

<h3 id="State">State Table</h3>
<table summary="State - Geography">
	<caption>State</caption>
	<tbody>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
		<tr>
			<th scope="row">StateCode</th>
			<td>State Code - Primary Key</td>
			<td>smallint</td>
		</tr>
		<tr>
			<th scope="row">StateName</th>
			<td>State Name</td>
			<td>varchar(200)</td>
		</tr>
	</tbody>
</table>
