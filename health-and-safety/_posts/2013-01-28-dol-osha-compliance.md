---
layout: post
title: OSHA Compliance
created: 1359406750
---

```
http://api.dol.gov/V1/Compliance/OSHA
```

<p>The dataset consists of inspection case detail for approximately 100,000 OSHA inspections conducted annually. The dataset includes information regarding the impetus for conducting the inspection, and details on citations and penalty assessments resulting from violations of OSHA standards.More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://www.osha.gov&amp;exitTitle=Occupational Safety and Health Administration&amp;fedpage=yes">http://www.osha.gov</a></p>

<p>This complete dataset can be found on the DOL Data Enforcement application at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://enforcedata.dol.gov&amp;exitTitle=Enforcement&amp;fedpage=yes">http://enforcedata.dol.gov</a></p>


<a href ="http://api.dol.gov/V1/Compliance/OSHA/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL Compliance-OSHA" class="button radius button_dataset">Explore This Data</a>


### Dataset Tables:  
<h3>full Table</H3>
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
			<th>activity_nr</th>
			<td>Unique identifier for the inspection</td>
			<td>integer</td>
		</tr>
		<tr>
			<th>estab_name</th>
			<td>Establishment being inspected</td>
			<td>varchar(300)</td>
		</tr>
		<tr>
			<th>site_address</th>
			<td>Street address of site inspected</td>
			<td>varchar(300)</td>
		</tr>
		<tr>
			<th>site_city</th>
			<td>City of site inspected</td>
			<td>varchar(180)</td>
		</tr>
		<tr>
			<th>site_state</th>
			<td>State postal abbreviation of site inspected</td>
			<td>varchar(20)</td>
		</tr>
		<tr>
			<th>site_zip</th>
			<td>Postal zip code of site inspected</td>
			<td>varchar(40)</td>
		</tr>
		<tr>
			<th>naics_code</th>
			<td>NAICS Code</td>
			<td>varchar(10)</td>
		</tr>
		<tr>
			<th>insp_type</th>
			<td>Inspection Type - A=Accident. B=Complaint. C=Referral. D=Monitoring. E=Variance. F=FollowUp. G=Unprog Rel. H=Planned. I=Prog Related. J=Unprog Other. K=Prog Other. L=Other-L</td>
			<td>varchar(10)</td>
		</tr>
		<tr>
			<th>open_date</th>
			<td>Indicates when the inspection was started</td>
			<td>date</td>
		</tr>
		<tr>
			<th>total_current_penalty</th>
			<td>Total current penalty</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th>osha_violation_indicator</th>
			<td>OSHA Violation indicator</td>
			<td>boolean</td>
		</tr>
		<tr>
			<th>serious_violations</th>
			<td>Number of serious violations</td>
			<td>integer</td>
		</tr>
		<tr>
			<th>total_violations</th>
			<td>Total violations</td>
			<td>integer</td>
		</tr>
		<tr>
			<th>load_dt</th>
			<td>The date the load was completed</td>
			<td>date</td>
		</tr>
	</tbody>
</table>

<h3>foodService Table</h3>

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
			<th>activity_nr</th>
			<td>Unique identifier for the inspection</td>
			<td>integer</td>
		</tr>
		<tr>
			<th>estab_name</th>
			<td>Establishment being inspected</td>
			<td>varchar(300)</td>
		</tr>
		<tr>
			<th>site_address</th>
			<td>Street address of site inspected</td>
			<td>varchar(300)</td>
		</tr>
		<tr>
			<th>site_city</th>
			<td>City of site inspected</td>
			<td>varchar(180)</td>
		</tr>
		<tr>
			<th>site_state</th>
			<td>State postal abbreviation of site inspected</td>
			<td>varchar(20)</td>
		</tr>
		<tr>
			<th>site_zip</th>
			<td>Postal zip code of site inspected</td>
			<td>varchar(40)</td>
		</tr>
		<tr>
			<th>naics_code</th>
			<td>NAICS Code</td>
			<td>varchar(10)</td>
		</tr>
		<tr>
			<th>insp_type</th>
			<td>Inspection Type - A=Accident. B=Complaint. C=Referral. D=Monitoring. E=Variance. F=FollowUp. G=Unprog Rel. H=Planned. I=Prog Related. J=Unprog Other. K=Prog Other. L=Other-L</td>
			<td>varchar(10)</td>
		</tr>
		<tr>
			<th>open_date</th>
			<td>Indicates when the inspection was started</td>
			<td>date</td>
		</tr>
		<tr>
			<th>total_current_penalty</th>
			<td>Total current penalty</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th>osha_violation_indicator</th>
			<td>OSHA Violation indicator</td>
			<td>boolean</td>
		</tr>
		<tr>
			<th>serious_violations</th>
			<td>Number of serious violations</td>
			<td>integer</td>
		</tr>
		<tr>
			<th>total_violations</th>
			<td>Total violations</td>
			<td>integer</td>
		</tr>
		<tr>
			<th>load_dt</th>
			<td>The date the load was completed</td>
			<td>date</td>
		</tr>
	</tbody>
</table>

<h3>hospitality Table</h3>

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
			<th>activity_nr</th>
			<td>Unique identifier for the inspection</td>
			<td>integer</td>
		</tr>
		<tr>
			<th>estab_name</th>
			<td>Establishment being inspected</td>
			<td>varchar(300)</td>
		</tr>
		<tr>
			<th>site_address</th>
			<td>Street address of site inspected</td>
			<td>varchar(300)</td>
		</tr>
		<tr>
			<th>site_city</th>
			<td>City of site inspected</td>
			<td>varchar(180)</td>
		</tr>
		<tr>
			<th>site_state</th>
			<td>State postal abbreviation of site inspected</td>
			<td>varchar(20)</td>
		</tr>
		<tr>
			<th>site_zip</th>
			<td>Postal zip code of site inspected</td>
			<td>varchar(40)</td>
		</tr>
		<tr>
			<th>naics_code</th>
			<td>NAICS Code</td>
			<td>varchar(10)</td>
		</tr>
		<tr>
			<th>insp_type</th>
			<td>Inspection Type - A=Accident. B=Complaint. C=Referral. D=Monitoring. E=Variance. F=FollowUp. G=Unprog Rel. H=Planned. I=Prog Related. J=Unprog Other. K=Prog Other. L=Other-L</td>
			<td>varchar(10)</td>
		</tr>
		<tr>
			<th>open_date</th>
			<td>Indicates when the inspection was started</td>
			<td>date</td>
		</tr>
		<tr>
			<th>total_current_penalty</th>
			<td>Total current penalty</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th>osha_violation_indicator</th>
			<td>OSHA Violation indicator</td>
			<td>boolean</td>
		</tr>
		<tr>
			<th>serious_violations</th>
			<td>Number of serious violations</td>
			<td>integer</td>
		</tr>
		<tr>
			<th>total_violations</th>
			<td>Total violations</td>
			<td>integer</td>
		</tr>
		<tr>
			<th>load_dt</th>
			<td>The date the load was completed</td>
			<td>date</td>
		</tr>
	</tbody>
</table>

<h3>retail Table</h3>

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
			<th>activity_nr</th>
			<td>Unique identifier for the inspection</td>
			<td>integer</td>
		</tr>
		<tr>
			<th>estab_name</th>
			<td>Establishment being inspected</td>
			<td>varchar(300)</td>
		</tr>
		<tr>
			<th>site_address</th>
			<td>Street address of site inspected</td>
			<td>varchar(300)</td>
		</tr>
		<tr>
			<th>site_city</th>
			<td>City of site inspected</td>
			<td>varchar(180)</td>
		</tr>
		<tr>
			<th>site_state</th>
			<td>State postal abbreviation of site inspected</td>
			<td>varchar(20)</td>
		</tr>
		<tr>
			<th>site_zip</th>
			<td>Postal zip code of site inspected</td>
			<td>varchar(40)</td>
		</tr>
		<tr>
			<th>naics_code</th>
			<td>NAICS Code</td>
			<td>varchar(10)</td>
		</tr>
		<tr>
			<th>insp_type</th>
			<td>Inspection Type - A=Accident. B=Complaint. C=Referral. D=Monitoring. E=Variance. F=FollowUp. G=Unprog Rel. H=Planned. I=Prog Related. J=Unprog Other. K=Prog Other. L=Other-L</td>
			<td>varchar(10)</td>
		</tr>
		<tr>
			<th>open_date</th>
			<td>Indicates when the inspection was started</td>
			<td>date</td>
		</tr>
		<tr>
			<th>total_current_penalty</th>
			<td>Total current penalty</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th>osha_violation_indicator</th>
			<td>OSHA Violation indicator</td>
			<td>boolean</td>
		</tr>
		<tr>
			<th>serious_violations</th>
			<td>Number of serious violations</td>
			<td>integer</td>
		</tr>
		<tr>
			<th>total_violations</th>
			<td>Total violations</td>
			<td>integer</td>
		</tr>
		<tr>
			<th>load_dt</th>
			<td>The date the load was completed</td>
			<td>date</td>
		</tr>
	</tbody>
</table>

<h3>occupationCode Table</h3>

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
			<th>occupation_code</th>
			<td>Unique identifier for the occupation</td>
			<td>varchar(300)</td>
		</tr>
		<tr>
			<th>occupation_description</th>
			<td>Description of the occupation</td>
			<td>varchar(300)</td>
		</tr>
		<tr>
			<th>occupation_code_description</th>
			<td>Occupation code and description</td>
			<td>varchar(300)</td>
		</tr>
	</tbody>
</table>

<h3>substanceCode Table</h3>

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
			<th>substance_code</th>
			<td>Unique identifier for the substance</td>
			<td>varchar(300)</td>
		</tr>
		<tr>
			<th>substance_name</th>
			<td>Substance name</td>
			<td>varchar(300)</td>
		</tr>
		<tr>
			<th>substance_code_name</th>
			<td>Substance code and name</td>
			<td>varchar(300)</td>
		</tr>
	</tbody>
</table>
