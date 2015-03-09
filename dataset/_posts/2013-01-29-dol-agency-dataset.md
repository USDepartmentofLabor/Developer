---
layout: post
title: DOL Agency Dataset
created: 1359469552
---

```
http://api.dol.gov/V1/DOLAgency
```

<p>Find here a list of DOL agencies and the links to its websites. More information and details about the data provided can be found at <a href="http://www.dol.gov/dol/organization.htm">http://www.dol.gov/dol/organization.htm</a></p>


### Dataset Metadata  
http://api.dol.gov/V1/DOLAgency/$metadata

[Sample the DOL Agency Dataset](https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL Agency)  

### Dataset Tables:  
<h3>Agencies Table</h3>

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
			<th>Agency</th>
			<td>Agency Acronym - Primary Key</td>
			<td>varchar(20)</td>
		</tr>
		<tr>
			<th>AgencyFullName</th>
			<td>Agency Full Name</td>
			<td>varchar(100)</td>
		</tr>
		<tr>
			<th>WebsiteURL</th>
			<td>Website URL</td>
			<td>varchar(100)</td>
		</tr>
		<tr>
			<th>MissionURL</th>
			<td>Mission URL</td>
			<td>varchar(100)</td>
		</tr>
		<tr>
			<th>OrganizationalURL</th>
			<td>Organizational URL</td>
			<td>varchar(100)</td>
		</tr>
		<tr>
			<th>KeyPersonnelURL</th>
			<td>Key Personnel URL</td>
			<td>varchar(100)</td>
		</tr>
	</tbody>
</table>
