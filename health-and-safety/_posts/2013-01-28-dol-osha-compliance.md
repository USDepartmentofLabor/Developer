---
layout: post
title: OSHA Compliance
created: 1359406750
description: The dataset consists of inspection case detail for approximately 100,000 OSHA inspections conducted annually.
---

<div class="force_wrap apiurl">
<p>http://api.dol.gov/V1/Compliance/OSHA</p>
</div>

<p>The dataset consists of inspection case detail for approximately 100,000 OSHA inspections conducted annually. The dataset includes information regarding the impetus for conducting the inspection, and details on citations and penalty assessments resulting from violations of OSHA standards.More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://www.osha.gov&amp;exitTitle=Occupational Safety and Health Administration&amp;fedpage=yes">http://www.osha.gov</a></p>
<p>This complete dataset can be found on the DOL Data Enforcement application at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://enforcedata.dol.gov&amp;exitTitle=Enforcement&amp;fedpage=yes">http://enforcedata.dol.gov</a></p>

<a href ="http://api.dol.gov/V1/Compliance/OSHA/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL%20Compliance-OSHA" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables  

<div class="dsktp_tbl">
	<ul>
		<li><a href="#full">full</a></li>
		<li><a href="#foodservice">foodservice</a></li>
		<li><a href="#hospitality">hospitality</a></li>
		<li><a href="#retail">retail</a></li>
		<li><a href="#occupationcode">occupationcode</a></li>
		<li><a href="#substancecode">substancecode</a></li>
	</ul>
</div>

<div class="mbl_tbl">
	<ul>
		<li><a href="#full_mbl">full</a></li>
		<li><a href="#foodservice_mbl">foodservice</a></li>
		<li><a href="#hospitality_mbl">hospitality</a></li>
		<li><a href="#retail_mbl">retail</a></li>
		<li><a href="#occupationcode_mbl">occupationcode</a></li>
		<li><a href="#substancecode_mbl">substancecode</a></li>
	</ul>
</div>

<div class="dsktp_tbl">
	<h3 id="full" tabindex="-1">full Table</H3>
	<table summary="Full - consists of inspection case detail for approximately 100,000 OSHA inspections conducted annually">
		<caption>Full</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">activity_nr</th>
				<td>Unique identifier for the inspection</td>
				<td>integer</td>
			</tr>
			<tr>
				<th scope="row">estab_name</th>
				<td>Establishment being inspected</td>
				<td>varchar(300)</td>
			</tr>
			<tr>
				<th scope="row">site_address</th>
				<td>Street address of site inspected</td>
				<td>varchar(300)</td>
			</tr>
			<tr>
				<th scope="row">site_city</th>
				<td>City of site inspected</td>
				<td>varchar(180)</td>
			</tr>
			<tr>
				<th scope="row">site_state</th>
				<td>State postal abbreviation of site inspected</td>
				<td>varchar(20)</td>
			</tr>
			<tr>
				<th scope="row">site_zip</th>
				<td>Postal zip code of site inspected</td>
				<td>varchar(40)</td>
			</tr>
			<tr>
				<th scope="row">naics_code</th>
				<td>NAICS Code</td>
				<td>varchar(10)</td>
			</tr>
			<tr>
				<th scope="row">insp_type</th>
				<td>Inspection Type - A=Accident. B=Complaint. C=Referral. D=Monitoring. E=Variance. F=FollowUp. G=Unprog Rel. H=Planned. I=Prog Related. J=Unprog Other. K=Prog Other. L=Other-L</td>
				<td>varchar(10)</td>
			</tr>
			<tr>
				<th scope="row">open_date</th>
				<td>Indicates when the inspection was started</td>
				<td>date</td>
			</tr>
			<tr>
				<th scope="row">total_current_penalty</th>
				<td>Total current penalty</td>
				<td>decimal(24,2)</td>
			</tr>
			<tr>
				<th scope="row">osha_violation_indicator</th>
				<td>OSHA Violation indicator</td>
				<td>boolean</td>
			</tr>
			<tr>
				<th scope="row">serious_violations</th>
				<td>Number of serious violations</td>
				<td>integer</td>
			</tr>
			<tr>
				<th scope="row">total_violations</th>
				<td>Total violations</td>
				<td>integer</td>
			</tr>
			<tr>
				<th scope="row">load_dt</th>
				<td>The date the load was completed</td>
				<td>date</td>
			</tr>
		</tbody>
	</table>

	<h3 id="foodservice" tabindex="-1">foodService Table</h3>
	<table summary="Food Service - OSHA Compliance">
		<caption>Food Service</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">activity_nr</th>
				<td>Unique identifier for the inspection</td>
				<td>integer</td>
			</tr>
			<tr>
				<th scope="row">estab_name</th>
				<td>Establishment being inspected</td>
				<td>varchar(300)</td>
			</tr>
			<tr>
				<th scope="row">site_address</th>
				<td>Street address of site inspected</td>
				<td>varchar(300)</td>
			</tr>
			<tr>
				<th scope="row">site_city</th>
				<td>City of site inspected</td>
				<td>varchar(180)</td>
			</tr>
			<tr>
				<th scope="row">site_state</th>
				<td>State postal abbreviation of site inspected</td>
				<td>varchar(20)</td>
			</tr>
			<tr>
				<th scope="row">site_zip</th>
				<td>Postal zip code of site inspected</td>
				<td>varchar(40)</td>
			</tr>
			<tr>
				<th scope="row">naics_code</th>
				<td>NAICS Code</td>
				<td>varchar(10)</td>
			</tr>
			<tr>
				<th scope="row">insp_type</th>
				<td>Inspection Type - A=Accident. B=Complaint. C=Referral. D=Monitoring. E=Variance. F=FollowUp. G=Unprog Rel. H=Planned. I=Prog Related. J=Unprog Other. K=Prog Other. L=Other-L</td>
				<td>varchar(10)</td>
			</tr>
			<tr>
				<th scope="row">open_date</th>
				<td>Indicates when the inspection was started</td>
				<td>date</td>
			</tr>
			<tr>
				<th scope="row">total_current_penalty</th>
				<td>Total current penalty</td>
				<td>decimal(24,2)</td>
			</tr>
			<tr>
				<th scope="row">osha_violation_indicator</th>
				<td>OSHA Violation indicator</td>
				<td>boolean</td>
			</tr>
			<tr>
				<th scope="row">serious_violations</th>
				<td>Number of serious violations</td>
				<td>integer</td>
			</tr>
			<tr>
				<th scope="row">total_violations</th>
				<td>Total violations</td>
				<td>integer</td>
			</tr>
			<tr>
				<th scope="row">load_dt</th>
				<td>The date the load was completed</td>
				<td>date</td>
			</tr>
		</tbody>
	</table>

	<h3 id="hospitality" tabindex="-1">hospitality Table</h3>
	<table summary="Hospitality - OSHA Compliance">
		<caption>Hospitality</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">activity_nr</th>
				<td>Unique identifier for the inspection</td>
				<td>integer</td>
			</tr>
			<tr>
				<th scope="row">estab_name</th>
				<td>Establishment being inspected</td>
				<td>varchar(300)</td>
			</tr>
			<tr>
				<th scope="row">site_address</th>
				<td>Street address of site inspected</td>
				<td>varchar(300)</td>
			</tr>
			<tr>
				<th scope="row">site_city</th>
				<td>City of site inspected</td>
				<td>varchar(180)</td>
			</tr>
			<tr>
				<th scope="row">site_state</th>
				<td>State postal abbreviation of site inspected</td>
				<td>varchar(20)</td>
			</tr>
			<tr>
				<th scope="row">site_zip</th>
				<td>Postal zip code of site inspected</td>
				<td>varchar(40)</td>
			</tr>
			<tr>
				<th scope="row">naics_code</th>
				<td>NAICS Code</td>
				<td>varchar(10)</td>
			</tr>
			<tr>
				<th scope="row">insp_type</th>
				<td>Inspection Type - A=Accident. B=Complaint. C=Referral. D=Monitoring. E=Variance. F=FollowUp. G=Unprog Rel. H=Planned. I=Prog Related. J=Unprog Other. K=Prog Other. L=Other-L</td>
				<td>varchar(10)</td>
			</tr>
			<tr>
				<th scope="row">open_date</th>
				<td>Indicates when the inspection was started</td>
				<td>date</td>
			</tr>
			<tr>
				<th scope="row">total_current_penalty</th>
				<td>Total current penalty</td>
				<td>decimal(24,2)</td>
			</tr>
			<tr>
				<th scope="row">osha_violation_indicator</th>
				<td>OSHA Violation indicator</td>
				<td>boolean</td>
			</tr>
			<tr>
				<th scope="row">serious_violations</th>
				<td>Number of serious violations</td>
				<td>integer</td>
			</tr>
			<tr>
				<th scope="row">total_violations</th>
				<td>Total violations</td>
				<td>integer</td>
			</tr>
			<tr>
				<th scope="row">load_dt</th>
				<td>The date the load was completed</td>
				<td>date</td>
			</tr>
		</tbody>
	</table>

	<h3 id="retail" tabindex="-1">retail Table</h3>
	<table summary="Retail - consists of inspection case detail for approximately 100,000 OSHA inspections conducted annually">
		<caption>Retail</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">activity_nr</th>
				<td>Unique identifier for the inspection</td>
				<td>integer</td>
			</tr>
			<tr>
				<th scope="row">estab_name</th>
				<td>Establishment being inspected</td>
				<td>varchar(300)</td>
			</tr>
			<tr>
				<th scope="row">site_address</th>
				<td>Street address of site inspected</td>
				<td>varchar(300)</td>
			</tr>
			<tr>
				<th scope="row">site_city</th>
				<td>City of site inspected</td>
				<td>varchar(180)</td>
			</tr>
			<tr>
				<th scope="row">site_state</th>
				<td>State postal abbreviation of site inspected</td>
				<td>varchar(20)</td>
			</tr>
			<tr>
				<th scope="row">site_zip</th>
				<td>Postal zip code of site inspected</td>
				<td>varchar(40)</td>
			</tr>
			<tr>
				<th scope="row">naics_code</th>
				<td>NAICS Code</td>
				<td>varchar(10)</td>
			</tr>
			<tr>
				<th scope="row">insp_type</th>
				<td>Inspection Type - A=Accident. B=Complaint. C=Referral. D=Monitoring. E=Variance. F=FollowUp. G=Unprog Rel. H=Planned. I=Prog Related. J=Unprog Other. K=Prog Other. L=Other-L</td>
				<td>varchar(10)</td>
			</tr>
			<tr>
				<th scope="row">open_date</th>
				<td>Indicates when the inspection was started</td>
				<td>date</td>
			</tr>
			<tr>
				<th scope="row">total_current_penalty</th>
				<td>Total current penalty</td>
				<td>decimal(24,2)</td>
			</tr>
			<tr>
				<th scope="row">osha_violation_indicator</th>
				<td>OSHA Violation indicator</td>
				<td>boolean</td>
			</tr>
			<tr>
				<th scope="row">serious_violations</th>
				<td>Number of serious violations</td>
				<td>integer</td>
			</tr>
			<tr>
				<th scope="row">total_violations</th>
				<td>Total violations</td>
				<td>integer</td>
			</tr>
			<tr>
				<th scope="row">load_dt</th>
				<td>The date the load was completed</td>
				<td>date</td>
			</tr>
		</tbody>
	</table>

	<h3 id="occupationcode" tabindex="-1">occupationCode Table</h3>
	<table summary="Occupation Code - OSHA Compliance">
		<caption>Occupation Code</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">occupation_code</th>
				<td>Unique identifier for the occupation</td>
				<td>varchar(300)</td>
			</tr>
			<tr>
				<th scope="row">occupation_description</th>
				<td>Description of the occupation</td>
				<td>varchar(300)</td>
			</tr>
			<tr>
				<th scope="row">occupation_code_description</th>
				<td>Occupation code and description</td>
				<td>varchar(300)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="substancecode" tabindex="-1">substanceCode Table</h3>
	<table summary="Substance Code - OSHA Compliance">
		<caption>Substance Code</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">substance_code</th>
				<td>Unique identifier for the substance</td>
				<td>varchar(300)</td>
			</tr>
			<tr>
				<th scope="row">substance_name</th>
				<td>Substance name</td>
				<td>varchar(300)</td>
			</tr>
			<tr>
				<th scope="row">substance_code_name</th>
				<td>Substance code and name</td>
				<td>varchar(300)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h3 id="full_mbl" tabindex="-1">full Table</h3>
	<h4>Full - Consists of Inspection Case Ddetail for Approximately 100,000 OSHA Inspections Conducted Annually</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: activity_nr</p>
		<p><span class="mbl-strng">Column Description:</span> Unique identifier for the inspection</p>
		<p><span class="mbl-strng">Data Type:</span> integer</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: estab_name</p>
		<p><span class="mbl-strng">Column Description:</span> Establishment being inspected</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(300)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: site_address</p>
		<p><span class="mbl-strng">Column Description:</span> Street address of site inspected</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(300)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: site_city</p>
		<p><span class="mbl-strng">Column Description:</span> City of site inspected</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(180)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: site_state</p>
		<p><span class="mbl-strng">Column Description:</span> State postal abbreviation of site inspected</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(20)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: site_zip</p>
		<p><span class="mbl-strng">Column Description:</span> Postal zip code of site inspected</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(40)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: naics_code</p>
		<p><span class="mbl-strng">Column Description:</span> NAICS Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(10)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: insp_type</p>
		<p><span class="mbl-strng">Column Description:</span> Inspection Type - A=Accident. B=Complaint. C=Referral. D=Monitoring. E=Variance. F=FollowUp. G=Unprog Rel. H=Planned. I=Prog Related. J=Unprog Other. K=Prog Other. L=Other-L</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(10)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: open_date</p>
		<p><span class="mbl-strng">Column Description:</span> Indicates when the inspection was started</p>
		<p><span class="mbl-strng">Data Type:</span> date</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: total_current_penalty</p>
		<p><span class="mbl-strng">Column Description:</span> Total current penalty</p>
		<p><span class="mbl-strng">Data Type:</span> decimal(24,2)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: osha_violation_indicator</p>
		<p><span class="mbl-strng">Column Description:</span> OSHA Violation indicator</p>
		<p><span class="mbl-strng">Data Type:</span> boolean</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: serious_violations</p>
		<p><span class="mbl-strng">Column Description:</span> Number of serious violations</p>
		<p><span class="mbl-strng">Data Type:</span> integer</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: total_violations</p>
		<p><span class="mbl-strng">Column Description:</span> Total violations</p>
		<p><span class="mbl-strng">Data Type:</span> integer</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: load_dt</p>
		<p><span class="mbl-strng">Column Description:</span> The date the load was completed</p>
		<p><span class="mbl-strng">Data Type:</span> date</p>		
	</div>

	<hr />
	<h3 id="foodservice_mbl" tabindex="-1">foodService Table</h3>
	<h4>Food Service - OSHA Compliance</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: activity_nr</p>
		<p><span class="mbl-strng">Column Description:</span> Unique identifier for the inspection</p>
		<p><span class="mbl-strng">Data Type:</span> integer</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: estab_name</p>
		<p><span class="mbl-strng">Column Description:</span> Establishment being inspected</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(300)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: site_address</p>
		<p><span class="mbl-strng">Column Description:</span> Street address of site inspected</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(300)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: site_city</p>
		<p><span class="mbl-strng">Column Description:</span> City of site inspected</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(180)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: site_state</p>
		<p><span class="mbl-strng">Column Description:</span> State postal abbreviation of site inspected</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(20)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: site_zip</p>
		<p><span class="mbl-strng">Column Description:</span> Postal zip code of site inspected</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(40)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: naics_code</p>
		<p><span class="mbl-strng">Column Description:</span> NAICS Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(10)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: insp_type</p>
		<p><span class="mbl-strng">Column Description:</span> Inspection Type - A=Accident. B=Complaint. C=Referral. D=Monitoring. E=Variance. F=FollowUp. G=Unprog Rel. H=Planned. I=Prog Related. J=Unprog Other. K=Prog Other. L=Other-L</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(10)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: open_date</p>
		<p><span class="mbl-strng">Column Description:</span> Indicates when the inspection was started</p>
		<p><span class="mbl-strng">Data Type:</span> date</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: total_current_penalty</p>
		<p><span class="mbl-strng">Column Description:</span> Total current penalty</p>
		<p><span class="mbl-strng">Data Type:</span> decimal(24,2)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: osha_violation_indicator</p>
		<p><span class="mbl-strng">Column Description:</span> OSHA Violation indicator</p>
		<p><span class="mbl-strng">Data Type:</span> boolean</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: serious_violations</p>
		<p><span class="mbl-strng">Column Description:</span> Number of serious violations</p>
		<p><span class="mbl-strng">Data Type:</span> integer</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: total_violations</p>
		<p><span class="mbl-strng">Column Description:</span> Total violations</p>
		<p><span class="mbl-strng">Data Type:</span> integer</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: load_dt</p>
		<p><span class="mbl-strng">Column Description:</span> The date the load was completed</p>
		<p><span class="mbl-strng">Data Type:</span> date</p>		
	</div>

	<hr />
	<h3 id="hospitality_mbl" tabindex="-1">hospitality Table</h3>
	<h4>Hospitality - OSHA Compliance</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: activity_nr</p>
		<p><span class="mbl-strng">Column Description:</span> Unique identifier for the inspection</p>
		<p><span class="mbl-strng">Data Type:</span> integer</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: estab_name</p>
		<p><span class="mbl-strng">Column Description:</span> Establishment being inspected</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(300)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: site_address</p>
		<p><span class="mbl-strng">Column Description:</span> Street address of site inspected</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(300)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: site_city</p>
		<p><span class="mbl-strng">Column Description:</span> City of site inspected</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(180)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: site_state</p>
		<p><span class="mbl-strng">Column Description:</span> State postal abbreviation of site inspected</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(20)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: site_zip</p>
		<p><span class="mbl-strng">Column Description:</span> Postal zip code of site inspected</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(40)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: naics_code</p>
		<p><span class="mbl-strng">Column Description:</span> NAICS Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(10)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: insp_type</p>
		<p><span class="mbl-strng">Column Description:</span> Inspection Type - A=Accident. B=Complaint. C=Referral. D=Monitoring. E=Variance. F=FollowUp. G=Unprog Rel. H=Planned. I=Prog Related. J=Unprog Other. K=Prog Other. L=Other-L</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(10)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: open_date</p>
		<p><span class="mbl-strng">Column Description:</span> Indicates when the inspection was started</p>
		<p><span class="mbl-strng">Data Type:</span> date</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: total_current_penalty</p>
		<p><span class="mbl-strng">Column Description:</span> Total current penalty</p>
		<p><span class="mbl-strng">Data Type:</span> decimal(24,2)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: osha_violation_indicator</p>
		<p><span class="mbl-strng">Column Description:</span> OSHA Violation indicator</p>
		<p><span class="mbl-strng">Data Type:</span> boolean</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: serious_violations</p>
		<p><span class="mbl-strng">Column Description:</span> Number of serious violations</p>
		<p><span class="mbl-strng">Data Type:</span> integer</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: total_violations</p>
		<p><span class="mbl-strng">Column Description:</span> Total violations</p>
		<p><span class="mbl-strng">Data Type:</span> integer</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: load_dt</p>
		<p><span class="mbl-strng">Column Description:</span> The date the load was completed</p>
		<p><span class="mbl-strng">Data Type:</span> date</p>		
	</div>

	<hr />
	<h3 id="retail_mbl" tabindex="-1">retail Table</h3>
	<h4>Retail - Consists of Inspection Case Detail for Approximately 100,000 OSHA Inspections Conducted Annually"</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: activity_nr</p>
		<p><span class="mbl-strng">Column Description:</span> Unique identifier for the inspection</p>
		<p><span class="mbl-strng">Data Type:</span> integer</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: estab_name</p>
		<p><span class="mbl-strng">Column Description:</span> Establishment being inspected</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(300)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: site_address</p>
		<p><span class="mbl-strng">Column Description:</span> Street address of site inspected</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(300)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: site_city</p>
		<p><span class="mbl-strng">Column Description:</span> City of site inspected</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(180)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: site_state</p>
		<p><span class="mbl-strng">Column Description:</span> State postal abbreviation of site inspected</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(20)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: site_zip</p>
		<p><span class="mbl-strng">Column Description:</span> Postal zip code of site inspected</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(40)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: naics_code</p>
		<p><span class="mbl-strng">Column Description:</span> NAICS Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(10)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: insp_type</p>
		<p><span class="mbl-strng">Column Description:</span> Inspection Type - A=Accident. B=Complaint. C=Referral. D=Monitoring. E=Variance. F=FollowUp. G=Unprog Rel. H=Planned. I=Prog Related. J=Unprog Other. K=Prog Other. L=Other-L</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(10)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: open_date</p>
		<p><span class="mbl-strng">Column Description:</span> Indicates when the inspection was started</p>
		<p><span class="mbl-strng">Data Type:</span> date</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: total_current_penalty</p>
		<p><span class="mbl-strng">Column Description:</span> Total current penalty</p>
		<p><span class="mbl-strng">Data Type:</span> decimal(24,2)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: osha_violation_indicator</p>
		<p><span class="mbl-strng">Column Description:</span> OSHA Violation indicator</p>
		<p><span class="mbl-strng">Data Type:</span> boolean</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: serious_violations</p>
		<p><span class="mbl-strng">Column Description:</span> Number of serious violations</p>
		<p><span class="mbl-strng">Data Type:</span> integer</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: total_violations</p>
		<p><span class="mbl-strng">Column Description:</span> Total violations</p>
		<p><span class="mbl-strng">Data Type:</span> integer</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: load_dt</p>
		<p><span class="mbl-strng">Column Description:</span> The date the load was completed</p>
		<p><span class="mbl-strng">Data Type:</span> date</p>		
	</div>

	<hr />
	<h3 id="occupationcode_mbl" tabindex="-1">occupationCode Table</h3>
	<h4>Occupation Code - OSHA Compliance</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: occupation_code</p>
		<p><span class="mbl-strng">Column Description:</span> Unique identifier for the occupation</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(300)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: occupation_description</p>
		<p><span class="mbl-strng">Column Description:</span> Description of the occupation</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(300)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: occupation_code_description 	</p>
		<p><span class="mbl-strng">Column Description:</span> Occupation code and description</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(300)</p>		
	</div>

	<hr />
	<h3 id="substancecode_mbl" tabindex="-1">substanceCode Table</h3>
	<h4>Substance Code - OSHA Compliance</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: substance_code</p>
		<p><span class="mbl-strng">Column Description:</span> Unique identifier for the substance</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(300)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: substance_name</p>
		<p><span class="mbl-strng">Column Description:</span> Substance name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(300)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: substance_code_name</p>
		<p><span class="mbl-strng">Column Description:</span> Substance code and name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(300)</p>		
	</div>
</div>
