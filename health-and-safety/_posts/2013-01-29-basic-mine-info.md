---
layout: post
title: Basic Mine Information
created: 1359495133
description: The Basic Mine Information dataset lists basic information on all Coal and Metal/Non-Metal mines under MSHA's jurisdiction since 1/1/1970.
---

```
http://api.dol.gov/V1/Mining/BasicMineInfo
```

<p>The Basic Mine Info dataset lists basic information on all Coal and Metal/Non-Metal mines under MSHA's jurisdiction since 1/1/1970. It includes such information as the current status of each mine (Active, Abandoned, NonProducing, etc.), the current owner and operating company, commodity codes and physical attributes of the mine.</p>

<p>Note: This dataset used to be "Address of record". The name was changed due to content organization so did the location.</p>

<p>This complete dataset can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://explore.data.gov/Energy-and-Utilities/Mine-Address-of-Record-Data-Set/329k-nck6&amp;exitTitle=Mine%20Address%20of%20Record&amp;fedpage=yes"> http://explore.data.gov/Energy-and-Utilities/Mine-Address-of-Record-Data-Set/329k-nck6 </a></p>

<a href ="http://api.dol.gov/V1/Mining/BasicMineInfo/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL%20Basic%20Mine%20Info%20Dataset" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables  

<div class="dsktp_tbl">
	<h3>addressOfRecord</h3>
	<table summary="Address of record - Basic Mine Information">
		<caption>Address of record</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">id</th>
				<td>Record id. - Primary Key</td>
				<td>bigint</td>
			</tr>
			<tr>
				<th scope="row">mineId</th>
				<td>Mine id.</td>
				<td>bigint</td>
			</tr>
			<tr>
				<th scope="row">mineName</th>
				<td>Mine name.</td>
				<td>varchar (150)</td>
			</tr>
			<tr>
				<th scope="row">contactTitle</th>
				<td>Contact title.</td>
				<td>varchar (150)</td>
			</tr>
			<tr>
				<th scope="row">nearestTown</th>
				<td>Nearest town.</td>
				<td>varchar (150)</td>
			</tr>
			<tr>
				<th scope="row">businessName</th>
				<td>Business name.</td>
				<td>varchar (150)</td>
			</tr>
			<tr>
				<th scope="row">street</th>
				<td>Street address.</td>
				<td>varchar (150)</td>
			</tr>
			<tr>
				<th scope="row">poBox</th>
				<td>Post office box number.</td>
				<td>float</td>
			</tr>
			<tr>
				<th scope="row">city</th>
				<td>City.</td>
				<td>varchar (150)</td>
			</tr>
			<tr>
				<th scope="row">stateAbbr</th>
				<td>State abbreviation.</td>
				<td>varchar (2)</td>
			</tr>
			<tr>
				<th scope="row">fipsStateCode</th>
				<td>Fips state code.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">state</th>
				<td>State.</td>
				<td>varchar (150)</td>
			</tr>
			<tr>
				<th scope="row">zipCode</th>
				<td>Zip code.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">country</th>
				<td>Country.</td>
				<td>varchar (150)</td>
			</tr>
			<tr>
				<th scope="row">province</th>
				<td>Province.</td>
				<td>varchar (150)</td>
			</tr>
			<tr>
				<th scope="row">postalCode</th>
				<td>Postal code.</td>
				<td>varchar (150)</td>
			</tr>
			<tr>
				<th scope="row">mineTypeCode</th>
				<td>Mine type code.</td>
				<td>varchar (150)</td>
			</tr>
			<tr>
				<th scope="row">mineStatus</th>
				<td>Mine status.</td>
				<td>varchar (150)</td>
			</tr>
			<tr>
				<th scope="row">mineStatusDate</th>
				<td>Mine status date.</td>
				<td>datetime</td>
			</tr>
			<tr>
				<th scope="row">primarySicCode</th>
				<td>Primary SIC code.</td>
				<td>varchar (150)</td>
			</tr>
			<tr>
				<th scope="row">coalMetalInd</th>
				<td>Coal metal ind.</td>
				<td>varchar (3)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h3>addressOfRecord</h3>
	<h4>Address of record - Basic Mine Information</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: id</p>
		<p><span class="mbl-strng">Column Description:</span> Record id. - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: mineId</p>
		<p><span class="mbl-strng">Column Description:</span> Mine id.</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: mineName</p>
		<p><span class="mbl-strng">Column Description:</span> Mine name.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (150)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: contactTitle</p>
		<p><span class="mbl-strng">Column Description:</span> Contact title.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (150)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: nearestTown</p>
		<p><span class="mbl-strng">Column Description:</span> Nearest town.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (150)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: businessName</p>
		<p><span class="mbl-strng">Column Description:</span> Business name.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (150)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: street</p>
		<p><span class="mbl-strng">Column Description:</span> Street address.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (150)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: poBox</p>
		<p><span class="mbl-strng">Column Description:</span> Post office box number.</p>
		<p><span class="mbl-strng">Data Type:</span> float</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: city</p>
		<p><span class="mbl-strng">Column Description:</span> City.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (150)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: stateAbbr</p>
		<p><span class="mbl-strng">Column Description:</span> State abbreviation.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (2)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: fipsStateCode</p>
		<p><span class="mbl-strng">Column Description:</span> Fips state code.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: state</p>
		<p><span class="mbl-strng">Column Description:</span> State.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (150)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: zipCode</p>
		<p><span class="mbl-strng">Column Description:</span> Zip code.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: country</p>
		<p><span class="mbl-strng">Column Description:</span> Country.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (150)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: province</p>
		<p><span class="mbl-strng">Column Description:</span> Province.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (150)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: postalCode</p>
		<p><span class="mbl-strng">Column Description:</span> Postal code.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (150)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: mineTypeCode</p>
		<p><span class="mbl-strng">Column Description:</span> Mine type code.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (150)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: mineStatus</p>
		<p><span class="mbl-strng">Column Description:</span> Mine status.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (150)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: mineStatusDate</p>
		<p><span class="mbl-strng">Column Description:</span> Mine status date.</p>
		<p><span class="mbl-strng">Data Type:</span> datetime</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: primarySicCode</p>
		<p><span class="mbl-strng">Column Description:</span> Primary SIC code.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (150)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: coalMetalInd</p>
		<p><span class="mbl-strng">Column Description:</span> Coal metal ind.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (3)</p>		
	</div>
</div>
