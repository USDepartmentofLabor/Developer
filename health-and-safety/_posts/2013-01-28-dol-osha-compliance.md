---
layout: post
title: OSHA Compliance
version: V1
created: 1359406750
description: The dataset consists of inspection case detail for approximately 100,000 OSHA inspections conducted annually.
---

<div class="force_wrap apiurl">
<p>https://api.dol.gov/V1/Compliance/OSHA</p>
</div>

<p>The dataset consists of inspection case detail for approximately 100,000 OSHA inspections conducted annually. The dataset includes information regarding the impetus for conducting the inspection, and details on citations and penalty assessments resulting from violations of OSHA standards.More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=https://www.osha.gov&amp;exitTitle=Occupational Safety and Health Administration&amp;fedpage=yes">https://www.osha.gov</a></p>
<p>This complete dataset can be found on the DOL Data Enforcement application at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=https://enforcedata.dol.gov&amp;exitTitle=Enforcement&amp;fedpage=yes">https://enforcedata.dol.gov</a></p>

<a href ="http://api.dol.gov/V1/Compliance/OSHA/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL%20Compliance-OSHA" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables  

<div>
	<ul>
		<li><a href="#full">full</a></li>
		<li><a href="#foodservice">foodservice</a></li>
		<li><a href="#hospitality">hospitality</a></li>
		<li><a href="#retail">retail</a></li>
		<li><a href="#occupationcode">occupationcode</a></li>
		<li><a href="#substancecode">substancecode</a></li>
	</ul>
</div>

<div>
	<h3 id="full" tabindex="-1">full Table</H3>
	<table class="accessible responsive" summary="Full - consists of inspection case detail for approximately 100,000 OSHA inspections conducted annually">
		<caption>Full</caption>
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
					activity_nr
				</th>
				<td>
					<span class="small">Data Type</span>
					integer
				</td>
				<td>
					<span class="small">Column Description</span>
					Unique identifier for the inspection
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					estab_name
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(300)
				</td>
				<td>
					<span class="small">Column Description</span>
					Establishment being inspected
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					site_address
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(300)
				</td>
				<td>
					<span class="small">Column Description</span>
					Street address of site inspected
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					site_city
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(180)
				</td>
				<td>
					<span class="small">Column Description</span>
					City of site inspected
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					site_state
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(20)
				</td>
				<td>
					<span class="small">Column Description</span>
					State postal abbreviation of site inspected
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					site_zip
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(40)
				</td>
				<td>
					<span class="small">Column Description</span>
					Postal zip code of site inspected
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					naics_code
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(10)
				</td>
				<td>
					<span class="small">Column Description</span>
					NAICS Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					insp_type
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Inspection Type - A=Accident. B=Complaint. C=Referral. D=Monitoring. E=Variance. F=FollowUp. G=Unprog Rel. H=Planned. I=Prog Related. J=Unprog Other. K=Prog Other. L=Other-L
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					open_date
				</th>
				<td>
					<span class="small">Data Type</span>
					date
				</td>
				<td>
					<span class="small">Column Description</span>
					Indicates when the inspection was started
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					total_current_penalty
				</th>
				<td>
					<span class="small">Data Type</span>
					decimal(24,2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Total current penalty
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					osha_violation_indicator
				</th>
				<td>
					<span class="small">Data Type</span>
					boolean
				</td>
				<td>
					<span class="small">Column Description</span>
					OSHA Violation indicator
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					serious_violations
				</th>
				<td>
					<span class="small">Data Type</span>
					integer
				</td>
				<td>
					<span class="small">Column Description</span>
					Number of serious violations
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					total_violations
				</th>
				<td>
					<span class="small">Data Type</span>
					integer
				</td>
				<td>
					<span class="small">Column Description</span>
					Total violations
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					load_dt
				</th>
				<td>
					<span class="small">Data Type</span>
					date
				</td>
				<td>
					<span class="small">Column Description</span>
					The date the load was completed
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="foodservice" tabindex="-1">foodService Table</h3>
	<table class="accessible responsive" summary="Food Service - OSHA Compliance">
		<caption>Food Service</caption>
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
					activity_nr
				</th>
				<td>
					<span class="small">Data Type</span>
					integer
				</td>
				<td>
					<span class="small">Column Description</span>
					Unique identifier for the inspection
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					estab_name
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(300)
				</td>
				<td>
					<span class="small">Column Description</span>
					Establishment being inspected
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					site_address
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(300)
				</td>
				<td>
					<span class="small">Column Description</span>
					Street address of site inspected
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					site_city
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(180)
				</td>
				<td>
					<span class="small">Column Description</span>
					City of site inspected
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					site_state
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(20)
				</td>
				<td>
					<span class="small">Column Description</span>
					State postal abbreviation of site inspected
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					site_zip
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(40)
				</td>
				<td>
					<span class="small">Column Description</span>
					Postal zip code of site inspected
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					naics_code
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(10)
				</td>
				<td>
					<span class="small">Column Description</span>
					NAICS Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					insp_type
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Inspection Type - A=Accident. B=Complaint. C=Referral. D=Monitoring. E=Variance. F=FollowUp. G=Unprog Rel. H=Planned. I=Prog Related. J=Unprog Other. K=Prog Other. L=Other-L
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					open_date
				</th>
				<td>
					<span class="small">Data Type</span>
					date
				</td>
				<td>
					<span class="small">Column Description</span>
					Indicates when the inspection was started
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					total_current_penalty
				</th>
				<td>
					<span class="small">Data Type</span>
					decimal(24,2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Total current penalty
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					osha_violation_indicator
				</th>
				<td>
					<span class="small">Data Type</span>
					boolean
				</td>
				<td>
					<span class="small">Column Description</span>
					OSHA Violation indicator
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					serious_violations
				</th>
				<td>
					<span class="small">Data Type</span>
					integer
				</td>
				<td>
					<span class="small">Column Description</span>
					Number of serious violations
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					total_violations
				</th>
				<td>
					<span class="small">Data Type</span>
					integer
				</td>
				<td>
					<span class="small">Column Description</span>
					Total violations
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					load_dt
				</th>
				<td>
					<span class="small">Data Type</span>
					date
				</td>
				<td>
					<span class="small">Column Description</span>
					The date the load was completed
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="hospitality" tabindex="-1">hospitality Table</h3>
	<table class="accessible responsive" summary="Hospitality - OSHA Compliance">
		<caption>Hospitality</caption>
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
					activity_nr
				</th>
				<td>
					<span class="small">Data Type</span>
					integer
				</td>
				<td>
					<span class="small">Column Description</span>
					Unique identifier for the inspection
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					estab_name
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(300)
				</td>
				<td>
					<span class="small">Column Description</span>
					Establishment being inspected
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					site_address
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(300)
				</td>
				<td>
					<span class="small">Column Description</span>
					Street address of site inspected
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					site_city
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(180)
				</td>
				<td>
					<span class="small">Column Description</span>
					City of site inspected
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					site_state
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(20)
				</td>
				<td>
					<span class="small">Column Description</span>
					State postal abbreviation of site inspected
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					site_zip
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(40)
				</td>
				<td>
					<span class="small">Column Description</span>
					Postal zip code of site inspected
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					naics_code
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(10)
				</td>
				<td>
					<span class="small">Column Description</span>
					NAICS Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					insp_type
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Inspection Type - A=Accident. B=Complaint. C=Referral. D=Monitoring. E=Variance. F=FollowUp. G=Unprog Rel. H=Planned. I=Prog Related. J=Unprog Other. K=Prog Other. L=Other-L
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					open_date
				</th>
				<td>
					<span class="small">Data Type</span>
					date
				</td>
				<td>
					<span class="small">Column Description</span>
					Indicates when the inspection was started
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					total_current_penalty
				</th>
				<td>
					<span class="small">Data Type</span>
					decimal(24,2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Total current penalty
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					osha_violation_indicator
				</th>
				<td>
					<span class="small">Data Type</span>
					boolean
				</td>
				<td>
					<span class="small">Column Description</span>
					OSHA Violation indicator
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					serious_violations
				</th>
				<td>
					<span class="small">Data Type</span>
					integer
				</td>
				<td>
					<span class="small">Column Description</span>
					Number of serious violations
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					total_violations
				</th>
				<td>
					<span class="small">Data Type</span>
					integer
				</td>
				<td>
					<span class="small">Column Description</span>
					Total violations
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					load_dt
				</th>
				<td>
					<span class="small">Data Type</span>
					date
				</td>
				<td>
					<span class="small">Column Description</span>
					The date the load was completed
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="retail" tabindex="-1">retail Table</h3>
	<table class="accessible responsive" summary="Retail - consists of inspection case detail for approximately 100,000 OSHA inspections conducted annually">
		<caption>Retail</caption>
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
					activity_nr
				</th>
				<td>
					<span class="small">Data Type</span>
					integer
				</td>
				<td>
					<span class="small">Column Description</span>
					Unique identifier for the inspection
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					estab_name
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(300)
				</td>
				<td>
					<span class="small">Column Description</span>
					Establishment being inspected
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					site_address
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(300)
				</td>
				<td>
					<span class="small">Column Description</span>
					Street address of site inspected
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					site_city
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(180)
				</td>
				<td>
					<span class="small">Column Description</span>
					City of site inspected
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					site_state
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(20)
				</td>
				<td>
					<span class="small">Column Description</span>
					State postal abbreviation of site inspected
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					site_zip
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(40)
				</td>
				<td>
					<span class="small">Column Description</span>
					Postal zip code of site inspected
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					naics_code
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(10)
				</td>
				<td>
					<span class="small">Column Description</span>
					NAICS Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					insp_type
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Inspection Type - A=Accident. B=Complaint. C=Referral. D=Monitoring. E=Variance. F=FollowUp. G=Unprog Rel. H=Planned. I=Prog Related. J=Unprog Other. K=Prog Other. L=Other-L
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					open_date
				</th>
				<td>
					<span class="small">Data Type</span>
					date
				</td>
				<td>
					<span class="small">Column Description</span>
					Indicates when the inspection was started
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					total_current_penalty
				</th>
				<td>
					<span class="small">Data Type</span>
					decimal(24,2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Total current penalty
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					osha_violation_indicator
				</th>
				<td>
					<span class="small">Data Type</span>
					boolean
				</td>
				<td>
					<span class="small">Column Description</span>
					OSHA Violation indicator
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					serious_violations
				</th>
				<td>
					<span class="small">Data Type</span>
					integer
				</td>
				<td>
					<span class="small">Column Description</span>
					Number of serious violations
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					total_violations
				</th>
				<td>
					<span class="small">Data Type</span>
					integer
				</td>
				<td>
					<span class="small">Column Description</span>
					Total violations
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					load_dt
				</th>
				<td>
					<span class="small">Data Type</span>
					date
				</td>
				<td>
					<span class="small">Column Description</span>
					The date the load was completed
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="occupationcode" tabindex="-1">occupationCode Table</h3>
	<table class="accessible responsive" summary="Occupation Code - OSHA Compliance">
		<caption>Occupation Code</caption>
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
					occupation_code
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(300)
				</td>
				<td>
					<span class="small">Column Description</span>
					Unique identifier for the occupation
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					occupation_description
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(300)
				</td>
				<td>
					<span class="small">Column Description</span>
					Description of the occupation
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					occupation_code_description
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(300)
				</td>
				<td>
					<span class="small">Column Description</span>
					Occupation code and description
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="substancecode" tabindex="-1">substanceCode Table</h3>
	<table class="accessible responsive" summary="Substance Code - OSHA Compliance">
		<caption>Substance Code</caption>
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
					substance_code
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(300)
				</td>
				<td>
					<span class="small">Column Description</span>
					Unique identifier for the substance
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					substance_name
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(300)
				</td>
				<td>
					<span class="small">Column Description</span>
					Substance name
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					substance_code_name
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(300)
				</td>
				<td>
					<span class="small">Column Description</span>
					Substance code and name
				</td>
			</tr>
		</tbody>
	</table>
</div>