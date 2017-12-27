---
layout: post
title: Geography
created: 1359478230
version: V1
description: Find here a list of States, Counties, Cities and, Congressional Districts.
---

<div class="force_wrap apiurl">
<p>http://api.dol.gov/V1/Geography</p>
</div>

<p>Find here a list of States, Counties, Cities and, Congressional Districts. More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://www.census.gov/geo/reference/ansi.html&amp;exitTitle=Geography&20-&20American&20National&20Standards&20Institute&20-ANSI&20Codes&amp;fedpage=yes">http://www.census.gov/geo/reference/ansi.html</a></p>

<a href ="http://api.dol.gov/V1/Geography/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=Geography" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables

<div>
	<ul>
		<li><a href="#City">City</a></li>
		<li><a href="#CongressDistrict">CongressDistrict</a></li>
		<li><a href="#County">County</a></li>
		<li><a href="#State">State</a></li>
	</ul>
</div>

<div>
	<h3 id="City" tabindex="-1">City Table</h3>
	<table class="accessible responsive" summary="City - Geography - list of States, Counties, and Cities">
		<caption>City</caption>
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
					CityCode
				</th>
				<td>
					<span class="small">Data Type</span>
					bigint
				</td>
				<td>
					<span class="small">Column Description</span>
					City Code - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					CountyCode
				</th>
				<td>
					<span class="small">Data Type</span>
					smallint
				</td>
				<td>
					<span class="small">Column Description</span>
					County Code - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					StateCode
				</th>
				<td>
					<span class="small">Data Type</span>
					smallint
				</td>
				<td>
					<span class="small">Column Description</span>
					State Code - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					CityName
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(250)
				</td>
				<td>
					<span class="small">Column Description</span>
					Cyty/Place Name
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					Type
				</th>
				<td>
					<span class="small">Data Type</span>
					char(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Type. B=Borough; C=City; D=CDP; O=Comunidad; T=Town; V=Village; X=Other Types
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="CongressDistrict" tabindex="-1">Congress District Table</h3>
	<table class="accessible responsive" summary="Congress District - Geography - list of Congressional Districts">
		<caption>Congress District</caption>
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
					CountyCode
				</th>
				<td>
					<span class="small">Data Type</span>
					smallint
				</td>
				<td>
					<span class="small">Column Description</span>
					County Code - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					StateCode
				</th>
				<td>
					<span class="small">Data Type</span>
					smallint
				</td>
				<td>
					<span class="small">Column Description</span>
					State Code - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					District
				</th>
				<td>
					<span class="small">Data Type</span>
					smallint
				</td>
				<td>
					<span class="small">Column Description</span>
					Congressional District - Primary Key
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="County" tabindex="-1">County Table</h3>
	<table class="accessible responsive" summary="County - Geography - list of Counties">
		<caption>County</caption>
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
					CountyCode
				</th>
				<td>
					<span class="small">Data Type</span>
					smallint
				</td>
				<td>
					<span class="small">Column Description</span>
					County Code - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					CountyName
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(250)
				</td>
				<td>
					<span class="small">Column Description</span>
					County Name
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="State" tabindex="-1">State Table</h3>
	<table class="accessible responsive" summary="State - Geography - list of States">
		<caption>State</caption>
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
					StateCode
				</th>
				<td>
					<span class="small">Data Type</span>
					smallint
				</td>
				<td>
					<span class="small">Column Description</span>
					State Code - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					StateName
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(200)
				</td>
				<td>
					<span class="small">Column Description</span>
					State Name
				</td>
			</tr>
		</tbody>
	</table>
</div>