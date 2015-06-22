---
layout: post
title: DOL OSHA Compliance
created: 1359572131
description: This Dataset provides summaries of fatalities and catastrophes resulting in the hospitalization of three or more workers.
---

```
http://api.dol.gov/V1/Safety/Fatalities
```

<p>This dataset provides summaries of fatalities and catastrophes resulting in the hospitalization of three or more workers. Employers must report these incidents to OSHA within eight hours. The summaries include only preliminary information, as reported to OSHA Area Offices or to States which operate OSHA-approved State Plans. OSHA investigates all work-related fatalities and catastrophes. Once an OSHA investigation is complete, the summary report will be updated with a webpage link to the corresponding inspection, which will list citation information. More information can be found at <a href="http://www.osha.gov/dep/fatcat/dep_fatcat.html">http://www.osha.gov/dep/fatcat/dep_fatcat.htm </a></p>

<a href ="http://api.dol.gov/V1/Safety/Fatalities/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=OSHA%20Fatalities%20Dataset" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables  

<div class="dsktp_tbl">
	<h3>OSHA_Fatalities</h3>
	<table summary="OSHA Fatalities - OSHA Compliance">
		<caption>OSHA Fatalities</caption>
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
				<td>Id of the record - Primary Key</td>
				<td>bigint</td>
			</tr>
			<tr>
				<th scope="row">dateofincident</th>
				<td>Date of Incident</td>
				<td>Datetime</td>
			</tr>
			<tr>
				<th scope="row">companyandlocation</th>
				<td>Company Name and Location</td>
				<td>varchar (100)</td>
			</tr>
			<tr>
				<th scope="row">description</th>
				<td>Preliminary Description of Incident</td>
				<td>varchar (500)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h3>OSHA_Fatalities</h3>
	<h4>OSHA Fatalities</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: id</p>
		<p><span class="mbl-strng">Column Description:</span> Id of the record - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: dateofincident</p>
		<p><span class="mbl-strng">Column Description:</span> Date of Incident</p>
		<p><span class="mbl-strng">Data Type:</span> Datetime</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: companyandlocation</p>
		<p><span class="mbl-strng">Column Description:</span> Company Name and Location 	</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (100)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: description</p>
		<p><span class="mbl-strng">Column Description:</span> Preliminary Description of Incident</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (500)</p>		
	</div>
</div>
