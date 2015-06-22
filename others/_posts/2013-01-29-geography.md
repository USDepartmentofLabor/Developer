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

<div class="dsktp_tbl">
	<ul>
		<li><a href="#City">City</a></li>
		<li><a href="#CongressDistrict">CongressDistrict</a></li>
		<li><a href="#County">County</a></li>
		<li><a href="#State">State</a></li>
	</ul>
</div>

<div class="dsktp_tbl">
	<ul>
		<li><a href="#City_mbl">City</a></li>
		<li><a href="#CongressDistrict_mbl">CongressDistrict</a></li>
		<li><a href="#County_mbl">County</a></li>
		<li><a href="#State_mbl">State</a></li>
	</ul>
</div>

<div class="dsktp_tbl">
	<h3 id="City">City Table</h3>
	<table summary="City - Geography - list of States, Counties, and Cities">
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

	<h3 id="CongressDistrict">Congress District Table</h3>
	<table summary="Congress District - Geography - list of Congressional Districts">
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
	<table summary="County - Geography - list of Counties">
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
	<table summary="State - Geography - list of States">
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
</div>

<div class="mbl_tbl">
	<h3 id="City_mbl">City Table</h3>
	<h4>List of States, Counties, and Cities</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: CityCode</p>
		<p><span class="mbl-strng">Column Description:</span> City Code - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: CountyCode</p>
		<p><span class="mbl-strng">Column Description:</span> County Code - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> smallint</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: StateCode</p>
		<p><span class="mbl-strng">Column Description:</span> State Code - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> smallint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: CityName</p>
		<p><span class="mbl-strng">Column Description:</span> Cyty/Place Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(250)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: Type</p>
		<p><span class="mbl-strng">Column Description:</span> Type. B=Borough; C=City; D=CDP; O=Comunidad; T=Town; V=Village; X=Other Types</p>
		<p><span class="mbl-strng">Data Type:</span> char(1)</p>		
	</div>

	<hr />
	<h3 id="CongressDistrict_mbl">CongressDistrict Table</h3>
	<h4>List of Congressional Districts</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: CountyCode</p>
		<p><span class="mbl-strng">Column Description:</span> County Code - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> smallint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: StateCode</p>
		<p><span class="mbl-strng">Column Description:</span> State Code - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> smallint</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: District</p>
		<p><span class="mbl-strng">Column Description:</span> Congressional District - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> smallint</p>		
	</div>

	<hr />
	<h3 id="County_mbl">County Table</h3>
	<h4>List of Counties</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: CountyCode</p>
		<p><span class="mbl-strng">Column Description:</span> County Code - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> smallint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: CountyName</p>
		<p><span class="mbl-strng">Column Description:</span> County Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(250)</p>		
	</div>

	<hr />
	<h3 id="State_mbl">State Table</h3>
	<h4>List of States</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: StateCode</p>
		<p><span class="mbl-strng">Column Description:</span> State Code - Primary Key 	</p>
		<p><span class="mbl-strng">Data Type:</span> smallint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: StateName</p>
		<p><span class="mbl-strng">Column Description:</span> State Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(200)</p>		
	</div>
</div>
