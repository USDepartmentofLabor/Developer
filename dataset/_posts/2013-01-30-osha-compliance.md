---
layout: post
title: OSHA Compliance
created: 1359572131
---

```
http://api.dol.gov/V1/Safety/Fatalities
```

<p>This Dataset provides summaries of fatalities and catastrophes resulting in the hospitalization of three or more workers. Employers must report these incidents to OSHA within eight hours. The summaries include only preliminary information, as reported to OSHA Area Offices or to States which operate OSHA-approved State Plans. OSHA investigates all work-related fatalities and catastrophes. Once an OSHA investigation is complete, the summary report will be updated with a webpage link to the corresponding inspection, which will list citation information. More information can be found at <a href="http://www.osha.gov/dep/fatcat/dep_fatcat.html">http://www.osha.gov/dep/fatcat/dep_fatcat.htm </a></p>


<a href ="http://api.dol.gov/V1/Safety/Fatalities/$metadata" class="button radius button_dataset">Dataset Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=OSHA%20Fatalities%20Dataset" class="button radius button_dataset">Dataset Sample</a>


### Dataset Tables:  
<h3>OSHA_Fatalities</h3>

<table>
	<thead>
		<tr>
			<th>Column Name
			<p>&nbsp;</p>
			</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>id</th>
			<td>Id of the record - Primary Key</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th>dateofincident</th>
			<td>Date of Incident</td>
			<td>Datetime</td>
		</tr>
		<tr>
			<th>companyandlocation</th>
			<td>Company Name and Location</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th>description</th>
			<td>Preliminary Description of Incident</td>
			<td>varchar (500)</td>
		</tr>
	</tbody>
</table>
