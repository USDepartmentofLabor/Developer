---
layout: post
title: Geography Dataset
created: 1359478230
---

```
http://api.dol.gov/V1/Geography
```

<p>Find here a list of States, Counties, Cities and, Congressional Districts. More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://www.census.gov/geo/www/cd110th/tables110.html&amp;exitTitle=U.S.%20Census%20Bureau&amp;fedpage=yes">http://www.census.gov/geo/www/cd110th/tables110.html</a></p>

<p><img alt="" src="/sites/default/files/dataset-geography.jpg" style="width: 407px; height: 401px;" /></p>


### Dataset Metadata  
http://api.dol.gov/V1/Geography/$metadata

[Sample the Geography Dataset](https://devtools.dol.gov/APISampler/Home/Index1?datasetName=Geography)  

### Dataset Tables:  
<h3>City Table</h3>

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
<h3>CongressDistrict Table</h3>

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
<h3>County Table</h3>

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
<h3>State Table</h3>

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
