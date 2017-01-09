---
layout: post
title: DOL OSHA Enforcement
created: 1359641735
description: The dataset consists of inspection case detail for approximately 90,000 OSHA inspections conducted annually. The dataset includes information regarding the impetus for conducting the inspection, and details on citations and penalty assessments resulting from violations of OSHA standards. Additionally, accident investigation information is provided, including textual descriptions of the accident, and details regarding the injuries and fatalities which occurred. For more information refer to - www.osha.gov
---

# OSHA Enforcement 

<p>The dataset consists of inspection case detail for approximately 90,000 OSHA inspections conducted annually. The dataset includes information regarding the impetus for conducting the inspection, and details on citations and penalty assessments resulting from violations of OSHA standards. Additionally, accident investigation information is provided, including textual descriptions of the accident, and details regarding the injuries and fatalities which occurred. For more information refer to: <a href="http://www.osha.gov">www.osha.gov</a>.</p>

<p>View OSHA's metric codes on the <a href="http://enforcedata.dol.gov/views/data_catalogs.php" target="_blank">'Data Enforcement' page under 'OSHA Enforcement Data'</a> or <a href="{{ site.baseurl }}/docs/IMISCodes.xlsx" target="_blank">Downloaded</a>.
</p>

<!--a href ="http://api.dol.gov/V1/Safety/abc/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=xyz" class="button radius button_dataset">Explore This Data</a-->
<br>
<p>The following datasets use offset for pagination so you can gather more than the limit of 200 records. For more detailed information <a href="/accessing-the-apis-using-http-requests#offset-page">read about the how to use our <strong>offset</strong> under the "<strong>data.dol.gov</strong>" tab</a>.</p>

## Dataset Tables

<div>
	<ul>
		<li><a href="#osha_accident">accident</a></li>
		<li><a href="#osha_accident_abstract">accident_abstract</a></li>
		<li><a href="#osha_accident_injury">accident_injury</a></li>
		<li><a href="#osha_inspection">inspection</a></li>
		<li><a href="#osha_optional_info">optional_info</a></li>
		<li><a href="#osha_related_activity">related_activity</a></li>
		<li><a href="#osha_strategic_codes">strategic_codes</a></li>
		<li><a href="#osha_violation">violation</a></li>
		<li><a href="#osha_violation_event">violation_event</a></li>
		<li><a href="#osha_violation_gen_duty_std">violation_gen_duty_std</a></li>
	</ul>
</div>

<div>
	<h3 id="osha_accident">Accident Table</h3>
	<div class="force_wrap apiurl">
		<p>https://data.dol.gov/get/accident</p>
    </div>
	<p>The following table contains OSHA accident information including date, time, description, and other associated accident fields.</p>
	<table class="accessible responsive" summary="OSHA Accident - OSHA Enforcement">
		<caption>accident</caption>
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
				summary_nr
			</th>
				<td>
				<span class="small">Data Type</span>
				numeric(9,0) 
			</td>
				<td>
				<span class="small">Column Description</span>
				Identifies the accident OSHA-170 form
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				report_id
			</th>
				<td>
				<span class="small">Data Type</span>
				Identifies the OSHA federal or state reporting jurisdiction
			</td>
				<td>
				<span class="small">Column Description</span>
				char(7)
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				event_date
			</th>
				<td>
				<span class="small">Data Type</span>
				Date of accident (yyyymmdd hhmmss)
			</td>
				<td>
				<span class="small">Column Description</span>
				timestamp without time zone
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				event_time
			</th>
				<td>
				<span class="small">Data Type</span>
				date
			</td>
				<td>
				<span class="small">Column Description</span>
				Time of accident (yyyymmdd)
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				event_desc
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar(200)
			</td>
				<td>
				<span class="small">Column </span>
				 Short description of event
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				event_keyword
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar(200)
			</td>
				<td>
				<span class="small">Column Description</span>
				Contains comma separated keywords entered by ERG during the review process
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				const_end_use
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar(1)
			</td>
				<td>
				<span class="small">Column Description</span>
				Construction - end-use (code table ENDU)
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				build_stories
			</th>
				<td>
				<span class="small">Data Type</span>
				  numeric(4,0)
			</td>
				<td>
				<span class="small">Column Description</span>
				Construction - number of stories in building
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				nonbuild_ht
			</th>
				<td>
				<span class="small">Data Type</span>
				 numeric(4,0)
			</td>
				<td>
				<span class="small">Column Name</span>
				Construction - height in feet when not a building
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				project_cost
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(1) 
			</td>
				<td>
				<span class="small">Column Description</span>
				Construction - project cost range (code table COST)
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				project_type
			</th>
				<td>
				<span class="small">Data Type</span>
				  varchar(1)
			</td>
				<td>
				<span class="small"> Column Description</span>
				Construction - project type (code table PTYP)
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				sic_list
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(40) 
				</td>
				<td>
				<span class="small">Column Description</span>
				Comma separated 4-digit SICs associated with related inspections
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				fatality
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar(1)
			</td>
				<td>
				<span class="small">Column Description</span>
				X=Fatality is associated with accident
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				state_flag
			</th>
				<td>
				<span class="small">Data type</span>
				numeric(1,0) 
			</td>
				<td>
				<span class="small">Column Description</span>
				Flag used to identify a State
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				abstract_text
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar
			</td>
				<td>
				<span class="small">Column Description</span>
				Abstract text
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				load_dt
			</th>
				<td>
				<span class="small">Data Type</span>
				Date the load was completed (yyyymmdd hhmmss) 
			</td>
				<td>
				<span class="small">Column Description</span>
				timestamp without time zone
			</td>
			</tr>
		</tbody>
	</table>

	<h3 id="osha_accident_abstract">Accident Abstract Table</h3>
	<div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/accident_abstract</p>
    </div>
	<p>The following table contains information about OSHA accident abstracts. The information in the table originates from form OSHA-170 and is linked to OSHA accident reports found in the osha_accident table.</p>
	<table class="accessible responsive"  summary="OSHA Accident Abstract - OSHA Enforcement">
		<caption>accident_abstract</caption>
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
				summary_nr
			</th>
				<td>
				<span class="small">Data Type</span>
				numeric(9,0) 
			</td>
				<td>
				<span class="small">Column Description</span>
				Identifies the accident OSHA-170 form
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				line_nr
			</th>
				<td>
				<span class="small">Data Type</span>
				numeric(7,0)
			</td>
				<td>
				<span class="small">Column Description</span>
				Abstract line number - this is a sequence number which should only be used for ordering the lines
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				abstract_text
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar 
			</td>
				<td>
				<span class="small">Column Description</span>
				Abstract text
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				load_dt
			</th>
				<td>
				<span class="small">Data Type</span>
				Date the load was completed (yyyymmdd hhmmss)
			</td>
				<td>
				<span class="small">Column Description</span>
				timestamp without time zone  
			</td>
			</tr>
		</tbody>
	</table>

	<h3 id="osha_accident_injury">Accident Injury Table</h3>
	<div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/accident_injury</p>
    </div>
	<p>The following table contains information about injuries associated with OSHA accident reports. It includes information such as the Degree of Injury and the Cause of Injury and is linked to OSHA accident reports found in the osha_acident table.</p>
	<table class="accessible responsive"  summary="OSHA Accident Injury - OSHA Enforcement">
		<caption>accident_injury</caption>
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
				summary_nr
			</th>
				<td>
				<span class="small">Data Type</span>
				numeric(9,0) 
			</td>
				<td>
				<span class="small">Column Description</span>
				Identifies the accident OSHA-170 form
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				rel_insp_nr
			</th>
				<td>
				<span class="small">Data Type</span>
				numeric(9,0)
			</td>
				<td>
				<span class="small">Column Description</span>
				 Identifies the inspection associated with investigating a particular injury
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				age
			</th>
				<td>
				<span class="small">Data Type</span>
				numeric(2,0) 
			</td>
				<td>
				<span class="small">Column Name</span>
				 Age of the injured person
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				sex
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar(1) 
			</td>
				<td>
				<span class="small">Column Description</span>
				 M=Male or F=Female
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				nature_of_inj
			</th>
				<td>
				<span class="small">Data Type</span>
				 numeric(2,0) 
			</td>
				<td>
				<span class="small">Column Description</span>
				 Nature of injury code - code table IN
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				part_of_body
			</th>
				<td>
				<span class="small">Data Type</span>
				 numeric(2,0)
			</td>
				<td>
				<span class="small">Column Description</span>
				Part of body code - code table BD
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				src_of_injury
			</th>
				<td>
				<span class="small">Data Type</span>
				 numeric(2,0) 
			</td>
				<td>
				<span class="small">Column Description</span>
				 Source of injury code - code table SO
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				event_type
			</th>
				<td>
				<span class="small">Data Type</span>
				 numeric(2,0) 
			</td>
				<td>
				<span class="small">Column Name</span>
				 Event type code - code table FT
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 evn_factor
			</th>
				<td>
				<span class="small">Data Type</span>
				numeric(2,0) 
			</td>
				<td>
				<span class="small">Column Description</span>
				 Environmental factor code - code table EN
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				hum_factor
			</th>
				<td>
				<span class="small">Data Type</span>
				 numeric(2,0) 
			</td>
				<td>
				<span class="small">Column Description</span>
				 Human factor code - code table HU
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				occ_code
			</th>
				<td>
				<span class="small">Data Type</span>
				numeric(3,0) 
			</td>
				<td>
				<span class="small">Column Description</span>
				Occupation code - code table OCC
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				degree_of_inj
			</th>
				<td>
				<span class="small">Data Type</span>
				 numeric(1,0)
			</td>
				<td>
				<span class="small">Column Description</span>
				 1=Fatality or 2=Hospitalized injuries or 3=No Hospitalized injuries
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				task_assigned
			</th>
				<td>
				<span class="small">Data Type</span>
				 numeric(1,0)
			</td>
				<td>
				<span class="small">Column Description</span>
				 1=Task regularly assigned or 2=Task not regularly assigned
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				hazsub
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(4)
			</td>
				<td>
				<span class="small">Column Description</span>
				 Hazardous substance code
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				const_op
			</th>
				<td>
				<span class="small">Data Type</span>
				numeric(2,0)
			</td>
				<td>
				<span class="small">Column Description</span>
				 Construction - operation code (code table OPER)
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				const_op_cause
			</th>
				<td>
				<span class="small">Data Type</span>
				numeric(2,0) 
			</td>
				<td>
				<span class="small">Column Description</span>
				 Construction - cause of injury (code table OPER)
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				fat_cause
			</th>
				<td>
				<span class="small">Data Type</span>
				 numeric(2,0)
			</td>
				<td>
				<span class="small">Column Description</span>
				 Construction - cause of fatality (code table CAUS)
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				fall_distance
			</th>
				<td>
				<span class="small">Data Type</span>
				numeric(4,0) 
			</td>
				<td>
				<span class="small">Column Description</span>
				 Construction - distance of fall (feet)
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				fall_ht
			</th>
				<td>
				<span class="small">Data Type</span>
				 numeric(4,0)
			</td>
				<td>
				<span class="small">Column Description</span>
				Construction - height of person when fell (feet)
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				injury_line_nr
			</th>
				<td>
				<span class="small">Data Type</span>
				 numeric 
			</td>
				<td>
				<span class="small">Column Description</span>
				Injury line number - is often referenced in the abstract text to refer to a particular person
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				load_dt
			</th>
				<td>
				<span class="small">Data Type</span>
				timestamp without time zone Date the load was completed (yyyymmdd hhmmss)
			</td>
				<td>
				<span class="small">Column Description</span>
				Date the load was completed (yyyymmdd hhmmss)
			</td>
			</tr>
		</tbody>
	</table>

	<h3 id="osha_inspection">Inspection Table</h3>
	<div class="force_wrap apiurl">
         <p>https://data.dol.gov/get/inspection</p>
    </div>
    	<div class="force_wrap apiurl">
         <p>http://enforcedata.dol.gov/views/dd_display.php</p></div>
	<p>The following table highlights OSHA inspections conducted by OSHA compliance safety and health officers under the Occupational Safety and Health Act of 1970 (the Act) to determine whether employers are complying with standards issued by the agency for safe and healthful workplaces. OSHA publishes information on its inspection and citation activity on the Internet under the provisions of the Electronic Freedom of Information Act. Data for a given inspection will be present if data exists for the inspection and the inspection is indicated as being closed.</p>
	<table class="accessible responsive" summary="OSHA Inspection - OSHA Enforcement">
		<caption>inspection</caption>
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
			      numeric(9,0)	
			</td>
				<td>
				<span class="small">Column Description</span>
				Unique identifier for the inspection
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				reporting_id
			</th>
				<td>
				<span class="small">Data Type</span>
				char(7) 
			</td>
				<td>
				<span class="small">Column Description</span>
				Identifies the OSHA federal or state reporting jurisdiction
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				state_flag
			</th>
				<td>
				<span class="small">Data Type</span>
				char(1)
			</td>
				<td>
				<span class="small">Column Name</span>
				 Flag used to identify a State
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
				<span class="small">Column Name</span>
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
				owner_type
			</th>
				<td>
				<span class="small">Data Type</span>
				text 
			</td>
				<td>
				<span class="small">Column Description</span>
				A=Private or B=LocalGovt or C=StateGovt or D=Federal
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				owner_code
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(100)
			</td>
				<td>
				<span class="small">Column Description</span>
				Used for owner=D only
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				adv_notice
			</th>
				<td>
				<span class="small">Data type</span>
				 varchar(1000)
			</td>
				<td>
				<span class="small">Column Description</span>
				Y/N/blank
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				safety_hlth
			</th>
				<td>
				<span class="small">Data Type</span>
			     varchar(100)	 
			</td>
				<td>
				<span class="small">Column Description</span>
				Safety/Health indicator (S=Safety or H=Health)
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				sic_code
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar(40)
			</td>
				<td>
				<span class="small">Column Descripition</span>
				 SIC code
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
				Unique code number that is assigned to the NAICS
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
				A=Accident or B=Complaint or C=Referral or D=Monitoring or E=Variance or F=FollowUp or G=Unprog Rel or H=Planned or I=Prog Related or J=Unprog Other or K=Prog Other or L=Other-L
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				insp_scope
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(10)
			</td>
				<td>
				<span class="small">Column Description</span>
				A=Complete or B=Partial or C=Records or D=NoInspection
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				why_no_insp
			</th>
				<td>
				<span class="small">Data Type</span>
				text 
			</td>
				<td>
				<span class="small">Column Description</span>
				A=No Insp/Not Found or B=No Insp/Out of Business or C=No Insp/Process Inactive or D=No Insp/10 or Fewer Empe or E=No Insp/Denied Entry or F=No Insp/SIC not on PG or G=No Insp/Exempt Voluntary or H=No Insp/NonExempt Consult or I=No Insp/Other
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				union_status
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(10) 
			</td>
				<td>
				<span class="small">Column Description</span>
				Indicates union representation during inspection (Yes=Y/U/A or No=N/B/blank)
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				safety_manuf
			</th>
				<td>
				<span class="small">Data Type</span>
				 text 
			</td>
				<td>
				<span class="small">Column Name</span>
				Safety planning guide manufacturing (X/blank)
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				safety_const
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(10) 
			</td>
				<td>
				<span class="small">Column Description</span>
				Safety planning guide construction (X/blank)
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				safety_marit
			</th>
				<td>
				<span class="small">Data Type</span>
				text 
			</td>
				<td>
				<span class="small">Column Description</span>
				Safety planning guide maritime (X/blank)
			</td>
			</tr>
			<tr>
				<th scope="row">
				
				health_manuf
			</th>
				<td>
				<span class="small">Data Type</span>
				text 
			</td>
				<td>
				<span class="small">Column Description</span>
				Health planning guide manufacturing (X/blank)
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				health_const
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(10)
			</td>
				<td>
				<span class="small">Column Description</span>
				Health planning guide construction (X/blank)
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				health_marit
			</th>
				<td>
				<span class="small">Data Type</span>
				text
			</td>
				<td>
				<span class="small">Column Description</span>
				Health planning guide maritime (X/blank)
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				migrant
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(10)
			</td>
				<td>
				<span class="small">Column Description</span>
				 Migrant labor inspection (X/blank)
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				mail_street
			</th>
				<td>
				<span class="small">Data Type</span>
				text
			</td>
				<td>
				<span class="small">Column Description</span>
				Mailing address street
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				mail_city
			</th>
				<td>
				<span class="small">Data Type</span>
				text
			</td>
				<td>
				<span class="small">Column Description</span>
				 Mailing address city
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				mail_state
			</th>
				<td>
				<span class="small">Data Type</span>
				text
			</td>
				<td>
				<span class="small">Column Description</span>
				Mailing address state postal abbreviation
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				mail_zip
			</th>
				<td>
				<span class="small">Column Data Type</span>
				(varchar15)
			</td>
				<td>
				<span class="small">Column Description</span>
				 Mailing address postal zip code
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				host_est_key
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(40)
			</td>
				<td>
				<span class="small">Column Description</span>
				 Internal establishment key
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
				Indicates when the inspection was started (yyyymmdd)
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				case_mod_date
			</th>
				<td>
				<span class="small">Data Type</span>
				date
			</td>
				<td>
				<span class="small">Column Description</span>
				Date the inspection or associated violations were last affected by updating (yyyymmdd). Note: this field was only recently added to the database to facilitate the transfer process. Therefore. cases not affected by updating in April. 2004 or later will have zero in this field
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				close_conf_date
			</th>
				<td>
				<span class="small">Data Type</span>
				date
			</td>
				<td>
				<span class="small">Column Description</span>
				Closing conference date (yyyymmdd)
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				close_case_date
			</th>
				<td>
				<span class="small">Data Type</span>
				date
			</td>
				<td>
				<span class="small">Column Description</span>
				Close date of inspection (yyyymmdd)
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				ld_dt
			</th>
				<td>
				<span class="small">Data Type</span>
				timestamp without time zone
			</td>
				<td>
				<span class="small">Column Description</span>
				Load Date Timestamp (yyyymmdd hhmmss)
			</td>
			</tr>
		</tbody>
	</table>

	<h3 id="osha_optional_info">Optional Information Table</h3>
	<div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/optional_info</p>
    </div>
	<p>The following table provides additional, optional information associated with an OSHA inspection. The information is linked to OSHA inspection reports found in the osha_inspection table.</p>
	<table class="accessible responsive" summary="OSHA Optional Information - OSHA Enforcement">
		<caption>optional_info</caption>
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
				numeric(9,0)
			</td>
				<td>
				<span class="small">Column Description</span>
				Identifies the parent inspection
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				opt_type
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(1)
			</td>
				<td>
				<span class="small">Column Description</span>
				Identifies the optional information type (only N type included)
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				opt_id
			</th>
				<td>
				<span class="small">Data Type</span>
				numeric(2,0)
			</td>
				<td>
				<span class="small">Column Description</span>
				Optional information ID
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				opt_value
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(50)
			</td>
				<td>
				<span class="small">Column Description</span>
				Optional information value
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				opt_info_id
			</th>
				<td>
				<span class="small">Data Type</span>
				numeric
			</td>
				<td>
				<span class="small">Column Description</span>
				Optional Information ID
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				load_dt
			</th>
				<td>
				<span class="small">Data Type</span>
				timestamp without time zone
			</td>
				<td>
				<span class="small">Column Description</span>
				Date the load was completed (yyyymmdd hhmmss)
			</td>
			</tr>
		</tbody>
	</table>

	<h3 id="osha_related_activity">Related Activity Table</h3>
	<div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/related_activity</p>
    </div>
	<p>The following table provides information about activity related to an OSHA inspection. The information is linked to OSHA inspection reports found in the osha_inspection table.</p>
	<table class="accessible responsive" summary="OSHA Related Activity - OSHA Enforcement">
		<caption>related_activity</caption>
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
				numeric(9,0)
			</td>
				<td>
				<span class="small">Column Description</span>
				Identifies the parent inspection
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				rel_type
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(1)
			</td>
				<td>
				<span class="small">Column Description</span>
				C=Complaint or I=Inspection or R=Referral or A=Accident
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				rel_act_nr
			</th>
				<td>
				<span class="small">Data Type</span>
				numeric(9,0)
			</td>
				<td>
				<span class="small">Column Description</span>
				 Activity number of the related activity
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				rel_safety
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(1) 
			</td>
				<td>
				<span class="small">Column Description</span>
				X=Yes or blank=No
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				rel_health
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(1)
			</td>
				<td>
				<span class="small">Column Description</span>
				 X=Yes or blank=No
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
			     load_dt
			</th>
				<td>
				<span class="small">Data Type</span>
				timestamp without time zone 
			</td>
				<td>
				<span class="small">Column Description</span>
				Date the load was completed (yyyymmdd hhmmss)
			</td>
			</tr>
		</tbody>
	</table>

	<h3 id="osha_strategic_codes">Strategic Codes Table</h3>
	<div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/strategic_codes</p>
    </div>
	<p>The following table provides information about strategic codes tied to OSHA inspections, including NEP (National Emphasis Program), LEP (Local Emphasis Program), and Strategic Plan Code. The information is linked to OSHA inspection reports found in the osha_inspection table.</p>
	<table class="accessible responsive" summary="OSHA Strategic Codes - OSHA Enforcement">
		<caption>strategic_codes</caption>
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
				numeric(9,0) 
			</td>
				<td>
				<span class="small">Column Description</span>
				Identifies the parent inspection
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				prog_type
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(1) 
			</td>
				<td>
				<span class="small">Column Description</span>
				N=NEP (National Emphasis Program) or L=LEP (Local Emphasis Program) or S=Strategic Plan Code
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				prog_value
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(25)
			</td>
				<td>
				<span class="small">Column Description</span>
				Code value
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				load_dt
			</th>
				<td>
				<span class="small">Data Type</span>
				timestamp without time zone
			</td>
				<td>
				<span class="small">Column Description</span>
				Date the load was completed (yyyymmdd hhmmss)
			</td>
			</tr>
		</tbody>
	</table>

	<h3 id="osha_violation">Violation Table</h3>
	<div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/violation</p>
    </div>
	<p>The following table contains information about OSHA violations that are in violation of the Act, Executive Order 12196, or 29 CFR Part 1960. OSHA publishes information on its inspection and citation activity on the Internet under the provisions of the Electronic Freedom of Information Act. Data for a given citation may not be available for 5 days following receipt by the employer for Federal inspections or for 30 days following receipt by the employer for State inspections. The information is linked to OSHA inspection reports found in the osha_inspection table.</p>
	<table class="accessible responsive" summary="OSHA Violation - OSHA Enforcement">
		<caption>violation</caption>
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
				numeric(9,0)
			</td>
				<td>
				<span class="small">Column Description</span>
				Identifies the parent inspection
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				citation_id
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(25) 
			</td>
				<td>
				<span class="small">Column Description</span>
				Identifies the citation number, item number, and item group of the issued citation
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				delete_flag
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(25) 
			</td>
				<td>
				<span class="small">Column Description</span>
				D=deleted
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				standard
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(100)
			</td>
				<td>
				<span class="small">Column Description </span>
				 OSHA standard violated
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				viol_type
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(25)
			</td>
				<td>
				<span class="small">Column Description</span>
				S=Serious or W=Willful or R=Repeat or O=Other
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				issuance_date
			</th>
				<td>
				<span class="small">Data Type</span>
				date
			</td>
				<td>
				<span class="small">Column Description</span>
				Date of citation issuance (yyyymmdd)
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				abate_date
			</th>
				<td>
				<span class="small">Data Type</span>
				date 
			</td>
				<td>
				<span class="small">Column Description</span>
				Date by which the violation must be abated (yyyymmdd)
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				abate_complete
			</th>
				<td>
				<span class="small">Data Type</span>
			      varchar(25)
			</td>
				<td>
				<span class="small">Column Description</span>
				Q=Quick Fix or X=Abatement Completed or I=Corrected During Inspection or E=Not Completed - Employer out of business or W=Not Changed - Worksite changed or S=Not Completed - Solicitor advised or A=Not Completed - AD discretion
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				current_penalty
			</th>
				<td>
				<span class="small">Data Type</span>
				numeric(24,2)
			</td>
				<td>
				<span class="small">Column Description</span>
				Current penalty assessed (ZZZZZZ9.99)
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				initial_penalty
			</th>
				<td>
				<span class="small">Data Type</span>
				numeric(24,2) 
			</td>
				<td>
				<span class="small">Column Description</span>
				Initial penalty assessed (ZZZZZZ9.99)
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				contest_date
			</th>
				<td>
				<span class="small">Data Type</span>
				date 
			</td>
				<td>
				<span class="small">Column Description</span>
				Date contested (yyyymmdd)
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				final_order_date
			</th>
				<td>
				<span class="small">Data Type</span>
				date 
			</td>
				<td>
				<span class="small">Column Description</span>
				Date of final order (yyyymmdd)
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				nr_instances
			</th>
				<td>
				<span class="small">Data Type</span>
				numeric(5,0)
			</td>
				<td>
				<span class="small">Column Description</span>
				 Number of instances
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				nr_exposed
			</th>
				<td>
				<span class="small">Data Type</span>
				numeric(5,0) 
			</td>
				<td>
				<span class="small">Column Description</span>
				Number of employees exposed
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				rec
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(25) 
			</td>
				<td>
				<span class="small">Column Description</span>
				A=Accident or C=Complaint or I=Imminent Danger or R=Referral or V=Variance
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				gravity
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(25) 
			</td>
				<td>
				<span class="small">Column Description</span>
				Level of gravity for serious viol - 01-10 or blank
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				emphasis
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(25) 
			</td>
				<td>
				<span class="small">Column Description</span>
				X or blank
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				hazcat
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(25)
			</td>
				<td>
				<span class="small">Column Description</span>
				General industry standard hazard category
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				fta_insp_nr
			</th>
				<td>
				<span class="small">Data Type</span>
				numeric(9,0)
			</td>
				<td>
				<span class="small">Column Description</span>
				 FTA inspection number
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				fta_issuance_date
			</th>
				<td>
				<span class="small">Data Type</span>
				date
			</td>
				<td>
				<span class="small">Column Description</span>
				FTA issuance date (yyyymmdd)
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				fta_penalty
			</th>
				<td>
				<span class="small">Data Type</span>
				numeric(24,2)
			</td>
				<td>
				<span class="small">Column Description</span>
				 FTA penalty (ZZZZZZ9.99)
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				fta_contest_date
			</th>
				<td>
				<span class="small">Data Type</span>
				 date
			</td>
				<td>
				<span class="small">Column Description</span>
				FTA contest date (yyyymmdd)
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				fta_final_order_date
			</th>
				<td>
				<span class="small">Data Type</span>
				date 
			</td>
				<td>
				<span class="small">Column Description</span>
				 FTA final order date (yyyymmdd)
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				hazsub1
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(25)
			</td>
				<td>
				<span class="small">Column Description</span>
				Hazardous substance code
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				hazsub2
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(25)
			</td>
				<td>
				<span class="small">Column Description</span>
				Hazardous substance code
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				hazsub3
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(25)
			</td>
				<td>
				<span class="small">Column Description</span>
				 Hazardous substance code
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				hazsub4
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(25)
			</td>
				<td>
				<span class="small">Column Description</span>
				Hazardous substance code
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				hazsub5
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(25)
			</td>
				<td>
				<span class="small">Column Description</span>
				Hazardous substance code
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				load_dt
			</th>
				<td>
				<span class="small">Data Type</span>
				timestamp without time zone
			</td>
				<td>
				<span class="small">Column Description</span>
				Date the load was completed (yyyymmdd hhmmss)
			</td>
			</tr>
		</tbody>
	</table>

	<h3 id="osha_violation_event">Violation Event Table</h3>
	<div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/violation_event</p>
    </div>
	<p>The following table provides information about OSHA violation events, including the event and penalty information. The information is linked to OSHA violation reports found in the osha_violation table and inspection reports found in the osha_inspection table.</p>
	<table class="accessible responsive" summary="OSHA Violation Event - OSHA Enforcement">
		<caption>violation_event</caption>
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
				numeric(9,0)
			</th>
				<td>
				<span class="small">Data Type</span>
				activity_nr
			</td>
				<td>
				span class="small">Column Description</span>
				Identifies the associated inspection
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				citation_id
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(7)
			</td>
				<td>
				<span class="small">Column Description</span>
				Identifies the citation number, item number, and item group of the associated citation
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				pen_fta
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(1)
			</td>
				<td>
				<span class="small">Column Description</span>
				P=Penalty or F=FTA
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				hist_event
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(1)
			</td>
				<td>
				<span class="small">Column Description</span>
				Z=Issued or P=Petition to Mod Abatement or I=Informal Settlement or A=Amendment or W=Empr Withdrew or D=Govt Dismissed or L=State Settlement or Y=State Decision or F=Formal Settlement or J=ALJ Decision or R=Review Commission or 1=State Lower Court or 2=Appeals Court or 3=Supreme Court
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				hist_date
			</th>
				<td>
				<span class="small">Data Type</span>
				date
			</td>
				<td>
				<span class="small">Column Description</span>
				Date of the event (yyyymmdd)
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				hist_penalty
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(10)
			</td>
				<td>
				<span class="small">Column Description</span>
				Amount assessed (ZZZZZZ9.99)
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				hist_abate_date
			</th>
				<td>
				<span class="small">Data Type</span>
				date
			</td>
				<td>
				<span class="small">Column Description</span>
				Abatement date (yyyymmdd) - when pen-fta=P
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				hist_vtype
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(1)
			</td>
				<td>
				<span class="small">Column Description</span>
				Violation type - when pen-fta=P
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				hist_insp_nr
			</th>
				<td>
				<span class="small">Data Type</span>
				numeric(9,0)
			</td>
				<td>
				<span class="small">Column Description</span>
				FTA inspection number - when pen-fta=F
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				load_dt
			</th>
				<td>
				<span class="small">Data Type</span>
				timestamp without time zone
			</td>
				<td>
				<span class="small">Column Description</span>
				Date the load was completed (yyyymmdd hhmmss)
			</td>
			</tr>
		</tbody>
	</table>

	<h3 id="osha_violation_gen_duty_std">Violation General Duty Standards Table</h3>
	<div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/violation_gen_duty_std</p>
    </div>
	<p>The following table provides information associated with general duty standards cited during OSHA inspections. The information is linked to OSHA violation reports found in the osha_violation table and inspection reports found in the osha_inspection table.</p>
	<table class="accessible responsive" summary="OSHA Violation General Duty Standards  - OSHA Enforcement">
		<caption>violation_gen_duty_std</caption>
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
				numeric(9,0)
			</td>
				<td>
				<span class="small">Column Description</span>
				Identifies the associated inspection
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				citation_id
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(30)
			</td>
				<td>
				<span class="small">Column Description</span>
				Identifies the citation number, item number, and item group of the associated citation
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				line_nr
			</th>
				<td>
				<span class="small">Data Type</span>
				integer
			</td>
				<td>
				<span class="small">Column Description</span>
				Identifies the relative line in the citation text represented by Line-text
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				line_text
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar
			</td>
				<td>
				<span class="small">Column Description</span>
				Citation text line
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				load_dt
			</th>
				<td>
				<span class="small">Data Type</span>
				timestamp without time zone
			</td>
				<td>
				<span class="small">Column Description</span>
				Date the load was completed (yyyymmdd hhmmss)
			</td>
			</tr>
		</tbody>
	</table>
</div>

