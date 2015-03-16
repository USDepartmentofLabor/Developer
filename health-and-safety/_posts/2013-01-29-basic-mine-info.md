---
layout: post
title: Basic Mine Info
created: 1359495133
---

```
http://api.dol.gov/V1/Mining/BasicMineInfo
```

<p>The Basic Mine Info dataset lists basic information on all Coal and Metal/Non-Metal mines under MSHA's jurisdiction since 1/1/1970. It includes such information as the current status of each mine (Active, Abandoned, NonProducing, etc.), the current owner and operating company, commodity codes and physical attributes of the mine.</p>

<p>Note: This dataset used to be "Address of record". The name was changed due to content organization so did the location.</p>

<p>This complete dataset can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://explore.data.gov/Energy-and-Utilities/Mine-Address-of-Record-Data-Set/329k-nck6&amp;exitTitle=Mine%20Address%20of%20Record&amp;fedpage=yes"> http://explore.data.gov/Energy-and-Utilities/Mine-Address-of-Record-Data-Set/329k-nck6 </a></p>


<a href ="http://api.dol.gov/V1/Mining/BasicMineInfo/$metadata" class="button radius button_dataset">Dataset Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL%20Basic%20Mine%20Info%20Dataset" class="button radius button_dataset">Dataset Sample</a>


### Dataset Tables:  
<h3>addressOfRecord</h3>

<p>Address of record</p>

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
			<th>id</th>
			<td>Record id. - Primary Key</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th>mineId</th>
			<td>Mine id.</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th>mineName</th>
			<td>Mine name.</td>
			<td>varchar (150)</td>
		</tr>
		<tr>
			<th>contactTitle</th>
			<td>Contact title.</td>
			<td>varchar (150)</td>
		</tr>
		<tr>
			<th>nearestTown</th>
			<td>Nearest town.</td>
			<td>varchar (150)</td>
		</tr>
		<tr>
			<th>businessName</th>
			<td>Business name.</td>
			<td>varchar (150)</td>
		</tr>
		<tr>
			<th>street</th>
			<td>Street address.</td>
			<td>varchar (150)</td>
		</tr>
		<tr>
			<th>poBox</th>
			<td>Post office box number.</td>
			<td>float</td>
		</tr>
		<tr>
			<th>city</th>
			<td>City.</td>
			<td>varchar (150)</td>
		</tr>
		<tr>
			<th>stateAbbr</th>
			<td>State abbreviation.</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th>fipsStateCode</th>
			<td>Fips state code.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>state</th>
			<td>State.</td>
			<td>varchar (150)</td>
		</tr>
		<tr>
			<th>zipCode</th>
			<td>Zip code.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>country</th>
			<td>Country.</td>
			<td>varchar (150)</td>
		</tr>
		<tr>
			<th>province</th>
			<td>Province.</td>
			<td>varchar (150)</td>
		</tr>
		<tr>
			<th>postalCode</th>
			<td>Postal code.</td>
			<td>varchar (150)</td>
		</tr>
		<tr>
			<th>mineTypeCode</th>
			<td>Mine type code.</td>
			<td>varchar (150)</td>
		</tr>
		<tr>
			<th>mineStatus</th>
			<td>Mine status.</td>
			<td>varchar (150)</td>
		</tr>
		<tr>
			<th>mineStatusDate</th>
			<td>Mine status date.</td>
			<td>datetime</td>
		</tr>
		<tr>
			<th>primarySicCode</th>
			<td>Primary SIC code.</td>
			<td>varchar (150)</td>
		</tr>
		<tr>
			<th>coalMetalInd</th>
			<td>Coal metal ind.</td>
			<td>varchar (3)</td>
		</tr>
	</tbody>
</table>
