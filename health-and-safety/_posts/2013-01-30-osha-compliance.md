---
layout: post
title: DOL OSHA Compliance
created: 1359572131
description: This Dataset provides summaries of fatalities and catastrophes resulting in the hospitalization of three or more workers.
---

<div class="force_wrap apiurl">
<p>http://api.dol.gov/V1/Safety/Fatalities</p>
</div>

<p>This dataset provides summaries of fatalities and catastrophes resulting in the hospitalization of three or more workers. Employers must report these incidents to OSHA within eight hours. The summaries include only preliminary information, as reported to OSHA Area Offices or to States which operate OSHA-approved State Plans. OSHA investigates all work-related fatalities and catastrophes. Once an OSHA investigation is complete, the summary report will be updated with a webpage link to the corresponding inspection, which will list citation information. More information can be found at <a href="http://www.osha.gov/dep/fatcat/dep_fatcat.html">http://www.osha.gov/dep/fatcat/dep_fatcat.html</a></p>

<a href ="http://api.dol.gov/V1/Safety/Fatalities/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=OSHA%20Fatalities%20Dataset" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables  

<div>
	<h3>OSHA_Fatalities</h3>
	<table summary="OSHA Fatalities - OSHA Compliance">
		<caption>OSHA Fatalities</caption>
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
					Id of the record - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					dateofincident
				</th>
				<td>
					<span class="small">Data Type</span>
					Datetime
				</td>
				<td>
					<span class="small">Column Description</span>
					Date of Incident
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					companyandlocation
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Company Name and Location
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					description
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (500)
				</td>
				<td>
					<span class="small">Column Description</span>
					Preliminary Description of Incident
				</td>
			</tr>
		</tbody>
	</table>
</div>
