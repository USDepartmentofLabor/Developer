---
layout: post
title: Basic Mine Information
created: 1359495133
description: The Basic Mine Information dataset lists basic information on all Coal and Metal/Non-Metal mines under MSHA's jurisdiction since 1/1/1970.
---

<div class="force_wrap apiurl">
<p>http://api.dol.gov/V1/Mining/BasicMineInfo</p>
</div>

<p>The Basic Mine Info dataset lists basic information on all Coal and Metal/Non-Metal mines under MSHA's jurisdiction since 1/1/1970. It includes such information as the current status of each mine (Active, Abandoned, NonProducing, etc.), the current owner and operating company, commodity codes and physical attributes of the mine.</p>

<p>Note: This dataset used to be "Address of record". The name was changed due to content organization so did the location.</p>
<p>This complete dataset can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://explore.data.gov/Energy-and-Utilities/Mine-Address-of-Record-Data-Set/329k-nck6&amp;exitTitle=Mine%20Address%20of%20Record&amp;fedpage=yes"> http://explore.data.gov/Energy-and-Utilities/Mine-Address-of-Record-Data-Set/329k-nck6 </a></p>

<a href ="http://api.dol.gov/V1/Mining/BasicMineInfo/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL%20Basic%20Mine%20Info%20Dataset" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables  

<div>
	<h3 id="MSHA_addressOfRecord">MSHA_addressOfRecord</h3>
	<table class="accessible responsive" summary="Address of record - Basic Mine Information">
		<caption>Address of record</caption>
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
				id
			</th>
				<td>
				<span class="small">Data Type</span>
				bigint
			</td>
				<td>
				<span class="small">Column Description</span>
				Record id. - Primary Key
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				mineId
			</th>
				<td>
				<span class="small">Data Type</span>
				bigint
			</td>
				<td>
				<span class="small">Column Description</span>
				Mine id.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				mineName
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (150)
			</td>
				<td>
				<span class="small">Column Description</span>
				Mine name.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				contactTitle
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (150)
			</td>
				<td>
				<span class="small">Column Description</span>
				Contact title.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				nearestTown
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (150)
			</td>
				<td>
				<span class="small">Column Description</span>
				Nearest town.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				businessName
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (150)
			</td>
				<td>
				<span class="small">Column Description</span>
				Business name.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				street
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (150)
			</td>
				<td>
				<span class="small">Column Description</span>
				Street address.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				poBox
			</th>
				<td>
				<span class="small">Data Type</span>
				float
			</td>
				<td>
				<span class="small">Column Description</span>
				Post office box number.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				city
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (150)
			</td>
				<td>
				<span class="small">Column Description</span>
				City.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				stateAbbr
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (2)
			</td>
				<td>
				<span class="small">Column Description</span>
				State abbreviation.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				fipsStateCode
			</th>
				<td>
				<span class="small">Data Type</span>
				int
			</td>
				<td>
				<span class="small">Column Description</span>
				Fips state code.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				state
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (150)
			</td>
				<td>
				<span class="small">Column Description</span>
				State.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				zipCode
			</th>
				<td>
				<span class="small">Data Type</span>
				int
			</td>
				<td>
				<span class="small">Column Description</span>
				Zip code.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				country
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (150)
			</td>
				<td>
				<span class="small">Column Description</span>
				Country.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				province
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (150)
			</td>
				<td>
				<span class="small">Column Description</span>
				Province.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				postalCode
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (150)
			</td>
				<td>
				<span class="small">Column Description</span>
				Postal code.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				mineTypeCode
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (150)
			</td>
				<td>
				<span class="small">Column Description</span>
				Mine type code.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				mineStatus
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (150)
			</td>
				<td>
				<span class="small">Column Description</span>
				Mine status.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				mineStatusDate
			</th>
				<td>
				<span class="small">Data Type</span>
				datetime
			</td>
				<td>
				<span class="small">Column Description</span>
				Mine status date.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				primarySicCode
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (150)
			</td>
				<td>
				<span class="small">Column Description</span>
				Primary SIC code.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				coalMetalInd
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (3)
			</td>
				<td>
				<span class="small">Column Description</span>
				Coal metal ind.
			</td>
			</tr>
		</tbody>
	</table>
</div>

