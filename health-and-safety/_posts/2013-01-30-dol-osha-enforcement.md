---
layout: post
title: DOL OSHA Enforcement
created: 1359641735
description: The dataset consists of inspection case detail for approximately 90,000 OSHA inspections conducted annually. The dataset includes information regarding the impetus for conducting the inspection, and details on citations and penalty assessments resulting from violations of OSHA standards. Additionally, accident investigation information is provided, including textual descriptions of the accident, and details regarding the injuries and fatalities which occurred. For more information refer to - www.osha.gov
categories: [health-and-safety, dataset]
---

#OSHA Enforcement

<p>The dataset consists of inspection case detail for approximately 90,000 OSHA inspections conducted annually. The dataset includes information regarding the impetus for conducting the inspection, and details on citations and penalty assessments resulting from violations of OSHA standards. Additionally, accident investigation information is provided, including textual descriptions of the accident, and details regarding the injuries and fatalities which occurred. For more information refer to: <a href="http://www.osha.gov">www.osha.gov</a></p>

<!--a href ="http://api.dol.gov/V1/Safety/abc/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=xyz" class="button radius button_dataset">Explore This Data</a-->

## Dataset Tables

<div class="dsktp_tbl">
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

<div class="mbl_tbl">
	<ul>
		<li><a href="#osha_accident_mbl">accident</a></li>
		<li><a href="#osha_accident_abstract_mbl">accident_abstract</a></li>
		<li><a href="#osha_accident_injury_mbl">accident_injury</a></li>
		<li><a href="#osha_inspection_mbl">inspection</a></li>
		<li><a href="#osha_optional_info_mbl">optional_info</a></li>
		<li><a href="#osha_related_activity_mbl">related_activity</a></li>
		<li><a href="#osha_strategic_codes_mbl">strategic_codes</a></li>
		<li><a href="#osha_violation_mbl">violation</a></li>
		<li><a href="#osha_violation_event_mbl">violation_event</a></li>
		<li><a href="#osha_violation_gen_duty_std_mbl">violation_gen_duty_std</a></li>
	</ul>
</div>
  
<div class="dsktp_tbl">
	<h3 id="osha_accident" tabindex="-1">Accident Table</h3>
	<div class="force_wrap apiurl">
		<p>https://data.dol.gov/get/accident</p>
    </div>
	<p>The following table contains OSHA accident information including date, time, description, and other associated accident fields.</p>
	<table summary="OSHA Accident - OSHA Enforcement">
		<caption>accident</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">summary_nr</th>
				<td>Identifies the accident OSHA-170 form</td>
				<td>numeric(9,0)</td>
			</tr>
			<tr>
				<th scope="row">report_id</th>
				<td>Identifies the OSHA federal or state reporting jurisdiction</td>
				<td>char(7)</td>
			</tr>
			<tr>
				<th scope="row">event_date</th>
				<td>Date of accident (yyyymmdd hhmmss)</td>
				<td>timestamp without time zone</td>
			</tr>
			<tr>
				<th scope="row">event_time</th>
				<td>Time of accident (yyyymmdd)</td>
				<td>date</td>
			</tr>
			<tr>
				<th scope="row">event_desc</th>
				<td>Short description of event</td>
				<td>varchar(200)</td>
			</tr>
			<tr>
				<th scope="row">event_keyword</th>
				<td>Contains comma separated keywords entered by ERG during the review process</td>
				<td>varchar(200)</td>
			</tr>			<tr>
				<th scope="row">const_end_use</th>
				<td>Construction - end-use (code table ENDU)</td>
				<td>varchar(1)</td>
			</tr>
			<tr>
				<th scope="row">build_stories</th>
				<td>Construction - number of stories in building</td>
				<td>numeric(4,0)</td>
			</tr>
			<tr>
				<th scope="row">nonbuild_ht</th>
				<td>Construction - height in feet when not a building</td>
				<td>numeric(4,0)</td>
			</tr>
			<tr>
				<th scope="row">project_cost</th>
				<td>Construction - project cost range (code table COST)</td>
				<td>varchar(1)</td>
			</tr>
			<tr>
				<th scope="row">project_type</th>
				<td>Construction - project type (code table PTYP)</td>
				<td>varchar(1)</td>
			</tr>
			<tr>
				<th scope="row">sic_list</th>
				<td>Comma separated 4-digit SICs associated with related inspections</td>
				<td>varchar(40)</td>
			</tr>
			<tr>
				<th scope="row">fatality</th>
				<td>X=Fatality is associated with accident</td>
				<td>varchar(1)</td>
			</tr>
			<tr>
				<th scope="row">state_flag</th>
				<td>Flag used to identify a State</td>
				<td>numeric(1,0)</td>
			</tr>
			<tr>
				<th scope="row">abstract_text</th>
				<td>Abstract text</td>
				<td>varchar</td>
			</tr>
			<tr>
				<th scope="row">load_dt</th>
				<td>Date the load was completed (yyyymmdd hhmmss)</td>
				<td>timestamp without time zone</td>
			</tr>
		</tbody>
	</table>

	<h3 id="osha_accident_abstract" tabindex="-1">Accident Abstract Table</h3>
	<div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/accident_abstract</p>
    </div>
	<p>The following table contains information about OSHA accident abstracts. The information in the table originates from form OSHA-170 and is linked to OSHA accident reports found in the osha_accident table.</p>
	<table summary="OSHA Accident Abstract - OSHA Enforcement">
		<caption>accident_abstract</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">summary_nr</th>
				<td>Identifies the accident OSHA-170 form</td>
				<td>numeric(9,0)</td>
			</tr>
			<tr>
				<th scope="row">line_nr</th>
				<td>Abstract line number - this is a sequence number which should only be used for ordering the lines</td>
				<td>numeric(7,0)</td>
			</tr>
			<tr>
				<th scope="row">abstract_text</th>
				<td>Abstract text</td>
				<td>varchar</td>
			</tr>
			<tr>
				<th scope="row">load_dt</th>
				<td>Date the load was completed (yyyymmdd hhmmss)</td>
				<td>timestamp without time zone</td>
			</tr>
		</tbody>
	</table>

	<h3 id="osha_accident_injury" tabindex="-1">Accident Injury Table</h3>
	<div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/accident_injury</p>
    </div>
	<p>The following table contains information about injuries associated with OSHA accident reports. It includes information such as the Degree of Injury and the Cause of Injury and is linked to OSHA accident reports found in the osha_acident table.</p>
	<table summary="OSHA Accident Injury - OSHA Enforcement">
		<caption>accident_injury</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">summary_nr</th>
				<td>Identifies the accident OSHA-170 form</td>
				<td>numeric(9,0)</td>
			</tr>
			<tr>
				<th scope="row">rel_insp_nr</th>
				<td>Identifies the inspection associated with investigating a particular injury</td>
				<td>numeric(9,0)</td>
			</tr>
			<tr>
				<th scope="row">age</th>
				<td>Age of the injured person</td>
				<td>numeric(2,0)</td>
			</tr>
			<tr>
				<th scope="row">sex</th>
				<td>M=Male or F=Female</td>
				<td>varchar(1)</td>
			</tr>
			<tr>
				<th scope="row">nature_of_inj</th>
				<td>Nature of injury code - code table IN</td>
				<td>numeric(2,0)</td>
			</tr>
			<tr>
				<th scope="row">part_of_body</th>
				<td>Part of body code - code table BD</td>
				<td>numeric(2,0)</td>
			</tr>
			<tr>
				<th scope="row">src_of_injury</th>
				<td>Source of injury code - code table SO</td>
				<td>numeric(2,0)</td>
			</tr>
			<tr>
				<th scope="row">event_type</th>
				<td>Event type code - code table FT</td>
				<td>numeric(2,0)</td>
			</tr>
			<tr>
				<th scope="row">evn_factor</th>
				<td>Environmental factor code - code table EN</td>
				<td>numeric(2,0)</td>
			</tr>
			<tr>
				<th scope="row">hum_factor</th>
				<td>Human factor code - code table HU</td>
				<td>numeric(2,0)</td>
			</tr>
			<tr>
				<th scope="row">occ_code</th>
				<td>Occupation code - code table OCC</td>
				<td>numeric(3,0)</td>
			</tr>
			<tr>
				<th scope="row">degree_of_inj</th>
				<td>1=Fatality or 2=Hospitalized injuries or 3=No Hospitalized injuries</td>
				<td>numeric(1,0)</td>
			</tr>
			<tr>
				<th scope="row">task_assigned</th>
				<td>1=Task regularly assigned or 2=Task not regularly assigned</td>
				<td>numeric(1,0)</td>
			</tr>
			<tr>
				<th scope="row">hazsub</th>
				<td>Hazardous substance code</td>
				<td>varchar(4)</td>
			</tr>
			<tr>
				<th scope="row">const_op</th>
				<td>Construction - operation code (code table OPER)</td>
				<td>numeric(2,0)</td>
			</tr>
			<tr>
				<th scope="row">const_op_cause</th>
				<td>Construction - cause of injury (code table OPER)</td>
				<td>numeric(2,0)</td>
			</tr>
			<tr>
				<th scope="row">fat_cause</th>
				<td>Construction - cause of fatality (code table CAUS)</td>
				<td>numeric(2,0)</td>
			</tr>
			<tr>
				<th scope="row">fall_distance</th>
				<td>Construction - distance of fall (feet)</td>
				<td>numeric(4,0)</td>
			</tr>
			<tr>
				<th scope="row">fall_ht</th>
				<td>Construction - height of person when fell (feet)</td>
				<td>numeric(4,0)</td>
			</tr>
			<tr>
				<th scope="row">injury_line_nr</th>
				<td>Injury line number - is often referenced in the abstract text to refer to a particular person</td>
				<td>numeric</td>
			</tr>
			<tr>
				<th scope="row">load_dt</th>
				<td>Date the load was completed (yyyymmdd hhmmss)</td>
				<td>timestamp without time zone</td>
			</tr>
		</tbody>
	</table>

	<h3 id="osha_inspection" tabindex="-1">Inspection Table</h3>
	<div class="force_wrap apiurl">
         <p>https://data.dol.gov/get/inspection</p>
    </div>
	<p>The following table highlights OSHA inspections conducted by OSHA compliance safety and health officers under the Occupational Safety and Health Act of 1970 (the Act) to determine whether employers are complying with standards issued by the agency for safe and healthful workplaces. OSHA publishes information on its inspection and citation activity on the Internet under the provisions of the Electronic Freedom of Information Act. Data for a given inspection will be present if data exists for the inspection and the inspection is indicated as being closed.</p>
	<table summary="OSHA Inspection - OSHA Enforcement">
		<caption>inspection</caption>
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
				<td>numeric(9,0)</td>
			</tr>
			<tr>
				<th scope="row">reporting_id</th>
				<td>Identifies the OSHA federal or state reporting jurisdiction</td>
				<td>char(7)</td>
			</tr>
			<tr>
				<th scope="row">state_flag</th>
				<td>Flag used to identify a State</td>
				<td>char(1)</td>
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
				<th scope="row">owner_type</th>
				<td>A=Private or B=LocalGovt or C=StateGovt or D=Federal</td>
				<td>text</td>
			</tr>
			<tr>
				<th scope="row">owner_code</th>
				<td>Used for owner=D only</td>
				<td>varchar(100)</td>
			</tr>
			<tr>
				<th scope="row">adv_notice</th>
				<td>Y/N/blank</td>
				<td>varchar(1000)</td>
			</tr>
			<tr>
				<th scope="row">safety_hlth</th>
				<td>Safety/Health indicator (S=Safety or H=Health)</td>
				<td>varchar(100)</td>
			</tr>
			<tr>
				<th scope="row">sic_code</th>
				<td>SIC code</td>
				<td>varchar(40)</td>
			</tr>
			<tr>
				<th scope="row">naics_code</th>
				<td>Unique code number that is assigned to the NAICS</td>
				<td>varchar(10)</td>
			</tr>
			<tr>
				<th scope="row">insp_type</th>
				<td>A=Accident or B=Complaint or C=Referral or D=Monitoring or E=Variance or F=FollowUp or G=Unprog Rel or H=Planned or I=Prog Related or J=Unprog Other or K=Prog Other or L=Other-L</td>
				<td>varchar(10)</td>
			</tr>
			<tr>
				<th scope="row">insp_scope</th>
				<td>A=Complete or B=Partial or C=Records or D=NoInspection</td>
				<td>varchar(10)</td>
			</tr>
			<tr>
				<th scope="row">why_no_insp</th>
				<td>A=No Insp/Not Found or B=No Insp/Out of Business or C=No Insp/Process Inactive or D=No Insp/10 or Fewer Empe or E=No Insp/Denied Entry or F=No Insp/SIC not on PG or G=No Insp/Exempt Voluntary or H=No Insp/NonExempt Consult or I=No Insp/Other</td>
				<td>text</td>
			</tr>
			<tr>
				<th scope="row">union_status</th>
				<td>Indicates union representation during inspection (Yes=Y/U/A or No=N/B/blank)</td>
				<td>varchar(10)</td>
			</tr>
			<tr>
				<th scope="row">safety_manuf</th>
				<td>Safety planning guide manufacturing (X/blank)</td>
				<td>text</td>
			</tr>
			<tr>
				<th scope="row">safety_const</th>
				<td>Safety planning guide construction (X/blank)</td>
				<td>varchar(10)</td>
			</tr>
			<tr>
				<th scope="row">safety_marit</th>
				<td>Safety planning guide maritime (X/blank)</td>
				<td>text</td>
			</tr>
			<tr>
				<th scope="row">health_manuf</th>
				<td>Health planning guide manufacturing (X/blank)</td>
				<td>text</td>
			</tr>
			<tr>
				<th scope="row">health_const</th>
				<td>Health planning guide construction (X/blank)</td>
				<td>varchar(10)</td>
			</tr>
			<tr>
				<th scope="row">health_marit</th>
				<td>Health planning guide maritime (X/blank)</td>
				<td>text</td>
			</tr>
			<tr>
				<th scope="row">migrant</th>
				<td>Migrant labor inspection (X/blank)</td>
				<td>varchar(10)</td>
			</tr>
			<tr>
				<th scope="row">mail_street</th>
				<td>Mailing address street</td>
				<td>text</td>
			</tr>
			<tr>
				<th scope="row">mail_city</th>
				<td>Mailing address city</td>
				<td>text</td>
			</tr>
			<tr>
				<th scope="row">mail_state</th>
				<td>Mailing address state postal abbreviation</td>
				<td>text</td>
			</tr>
			<tr>
				<th scope="row">mail_zip</th>
				<td>Mailing address postal zip code</td>
				<td>varchar15)</td>
			</tr>
			<tr>
				<th scope="row">host_est_key</th>
				<td>Internal establishment key</td>
				<td>varchar(40)</td>
			</tr>
			<tr>
				<th scope="row">open_date</th>
				<td>Indicates when the inspection was started (yyyymmdd)</td>
				<td>date</td>
			</tr>
			<tr>
				<th scope="row">case_mod_date</th>
				<td>Date the inspection or associated violations were last affected by updating (yyyymmdd). Note: this field was only recently added to the database to facilitate the transfer process. Therefore. cases not affected by updating in April. 2004 or later will have zero in this field</td>
				<td>date</td>
			</tr>
			<tr>
				<th scope="row">close_conf_date</th>
				<td>Closing conference date (yyyymmdd)</td>
				<td>date</td>
			</tr>
			<tr>
				<th scope="row">close_case_date</th>
				<td>Close date of inspection (yyyymmdd)</td>
				<td>date</td>
			</tr>
			<tr>
				<th scope="row">ld_dt</th>
				<td>Load Date Timestamp (yyyymmdd hhmmss)</td>
				<td>timestamp without time zone</td>
			</tr>
		</tbody>
	</table>

	<h3 id="osha_optional_info" tabindex="-1">Optional Information Table</h3>
	<div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/optional_info</p>
    </div>
	<p>The following table provides additional, optional information associated with an OSHA inspection. The information is linked to OSHA inspection reports found in the osha_inspection table.</p>
	<table summary="OSHA Optional Information - OSHA Enforcement">
		<caption>optional_info</caption>
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
				<td>Identifies the parent inspection</td>
				<td>numeric(9,0)</td>
			</tr>
			<tr>
				<th scope="row">opt_type</th>
				<td>Identifies the optional information type (only N type included)</td>
				<td>varchar(1)</td>
			</tr>
			<tr>
				<th scope="row">opt_id</th>
				<td>Optional information ID</td>
				<td>numeric(2,0)</td>
			</tr>
			<tr>
				<th scope="row">opt_value</th>
				<td>Optional information value</td>
				<td>varchar(50)</td>
			</tr>
			<tr>
				<th scope="row">opt_info_id</th>
				<td>Optional Information ID</td>
				<td>numeric</td>
			</tr>
			<tr>
				<th scope="row">load_dt</th>
				<td>Date the load was completed (yyyymmdd hhmmss)</td>
				<td>timestamp without time zone</td>
			</tr>
		</tbody>
	</table>

	<h3 id="osha_related_activity" tabindex="-1">Related Activity Table</h3>
	<div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/related_activity</p>
    </div>
	<p>The following table provides information about activity related to an OSHA inspection. The information is linked to OSHA inspection reports found in the osha_inspection table.</p>
	<table summary="OSHA Related Activity - OSHA Enforcement">
		<caption>related_activity</caption>
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
				<td>Identifies the parent inspection</td>
				<td>numeric(9,0)</td>
			</tr>
			<tr>
				<th scope="row">rel_type</th>
				<td>C=Complaint or I=Inspection or R=Referral or A=Accident</td>
				<td>varchar(1)</td>
			</tr>
			<tr>
				<th scope="row">rel_act_nr</th>
				<td>Activity number of the related activity</td>
				<td>numeric(9,0)</td>
			</tr>
			<tr>
				<th scope="row">rel_safety</th>
				<td>X=Yes or blank=No</td>
				<td>varchar(1)</td>
			</tr>
			<tr>
				<th scope="row">rel_health</th>
				<td>X=Yes or blank=No</td>
				<td>varchar(1)</td>
			</tr>
			<tr>
				<th scope="row">load_dt</th>
				<td>Date the load was completed (yyyymmdd hhmmss)</td>
				<td>timestamp without time zone</td>
			</tr>
		</tbody>
	</table>

	<h3 id="osha_strategic_codes" tabindex="-1">Strategic Codes Table</h3>
	<div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/strategic_codes</p>
    </div>
	<p>The following table provides information about strategic codes tied to OSHA inspections, including NEP (National Emphasis Program), LEP (Local Emphasis Program), and Strategic Plan Code. The information is linked to OSHA inspection reports found in the osha_inspection table.</p>
	<table summary="OSHA Strategic Codes - OSHA Enforcement">
		<caption>strategic_codes</caption>
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
				<td>Identifies the parent inspection</td>
				<td>numeric(9,0)</td>
			</tr>
			<tr>
				<th scope="row">prog_type</th>
				<td>N=NEP (National Emphasis Program) or L=LEP (Local Emphasis Program) or S=Strategic Plan Code</td>
				<td>varchar(1)</td>
			</tr>
			<tr>
				<th scope="row">prog_value</th>
				<td>Code value</td>
				<td>varchar(25)</td>
			</tr>
			<tr>
				<th scope="row">load_dt</th>
				<td>Date the load was completed (yyyymmdd hhmmss)</td>
				<td>timestamp without time zone</td>
			</tr>
		</tbody>
	</table>

	<h3 id="osha_violation" tabindex="-1">Violation Table</h3>
	<div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/violation</p>
    </div>
	<p>The following table contains information about OSHA violations that are in violation of the Act, Executive Order 12196, or 29 CFR Part 1960. OSHA publishes information on its inspection and citation activity on the Internet under the provisions of the Electronic Freedom of Information Act. Data for a given citation may not be available for 5 days following receipt by the employer for Federal inspections or for 30 days following receipt by the employer for State inspections. The information is linked to OSHA inspection reports found in the osha_inspection table.</p>
	<table summary="OSHA Violation - OSHA Enforcement">
		<caption>violation</caption>
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
				<td>Identifies the parent inspection</td>
				<td>numeric(9,0)</td>
			</tr>
			<tr>
				<th scope="row">citation_id</th>
				<td>Identifies the citation number, item number, and item group of the issued citation</td>
				<td>varchar(25)</td>
			</tr>
			<tr>
				<th scope="row">delete_flag</th>
				<td>D=deleted</td>
				<td>varchar(25)</td>
			</tr>
			<tr>
				<th scope="row">standard</th>
				<td>OSHA standard violated</td>
				<td>varchar(100)</td>
			</tr>
			<tr>
				<th scope="row">viol_type</th>
				<td>S=Serious or W=Willful or R=Repeat or O=Other</td>
				<td>varchar(25)</td>
			</tr>
			<tr>
				<th scope="row">issuance_date</th>
				<td>Date of citation issuance (yyyymmdd)</td>
				<td>date</td>
			</tr>
			<tr>
				<th scope="row">abate_date</th>
				<td>Date by which the violation must be abated (yyyymmdd)</td>
				<td>date</td>
			</tr>
			<tr>
				<th scope="row">abate_complete</th>
				<td>Q=Quick Fix or X=Abatement Completed or I=Corrected During Inspection or E=Not Completed - Employer out of business or W=Not Changed - Worksite changed or S=Not Completed - Solicitor advised or A=Not Completed - AD discretion</td>
				<td>varchar(25)</td>
			</tr>
			<tr>
				<th scope="row">current_penalty</th>
				<td>Current penalty assessed (ZZZZZZ9.99)</td>
				<td>numeric(24,2)</td>
			</tr>
			<tr>
				<th scope="row">initial_penalty</th>
				<td>Initial penalty assessed (ZZZZZZ9.99)</td>
				<td>numeric(24,2)</td>
			</tr>
			<tr>
				<th scope="row">contest_date</th>
				<td>Date contested (yyyymmdd)</td>
				<td>date</td>
			</tr>
			<tr>
				<th scope="row">final_order_date</th>
				<td>Date of final order (yyyymmdd)</td>
				<td>date</td>
			</tr>
			<tr>
				<th scope="row">nr_instances</th>
				<td>Number of instances</td>
				<td>numeric(5,0)</td>
			</tr>
			<tr>
				<th scope="row">nr_exposed</th>
				<td>Number of employees exposed</td>
				<td>numeric(5,0)</td>
			</tr>
			<tr>
				<th scope="row">rec</th>
				<td>A=Accident or C=Complaint or I=Imminent Danger or R=Referral or V=Variance</td>
				<td>varchar(25)</td>
			</tr>
			<tr>
				<th scope="row">gravity</th>
				<td>Level of gravity for serious viol - 01-10 or blank</td>
				<td>varchar(25)</td>
			</tr>
			<tr>
				<th scope="row">emphasis</th>
				<td>X or blank</td>
				<td>varchar(25)</td>
			</tr>
			<tr>
				<th scope="row">hazcat</th>
				<td>General industry standard hazard category</td>
				<td>varchar(25)</td>
			</tr>
			<tr>
				<th scope="row">fta_insp_nr</th>
				<td>FTA inspection number</td>
				<td>numeric(9,0)</td>
			</tr>
			<tr>
				<th scope="row">fta_issuance_date</th>
				<td>FTA issuance date (yyyymmdd)</td>
				<td>date</td>
			</tr>
			<tr>
				<th scope="row">fta_penalty</th>
				<td>FTA penalty (ZZZZZZ9.99)</td>
				<td>numeric(24,2)</td>
			</tr>
			<tr>
				<th scope="row">fta_contest_date</th>
				<td>FTA contest date (yyyymmdd)</td>
				<td>date</td>
			</tr>
			<tr>
				<th scope="row">fta_final_order_date</th>
				<td>FTA final order date (yyyymmdd)</td>
				<td>date</td>
			</tr>
			<tr>
				<th scope="row">hazsub1</th>
				<td>Hazardous substance code</td>
				<td>varchar(25)</td>
			</tr>
			<tr>
				<th scope="row">hazsub2</th>
				<td>Hazardous substance code</td>
				<td>varchar(25)</td>
			</tr>
			<tr>
				<th scope="row">hazsub3</th>
				<td>Hazardous substance code</td>
				<td>varchar(25)</td>
			</tr>
			<tr>
				<th scope="row">hazsub4</th>
				<td>Hazardous substance code</td>
				<td>varchar(25)</td>
			</tr>
			<tr>
				<th scope="row">hazsub5</th>
				<td>Hazardous substance code</td>
				<td>varchar(25)</td>
			</tr>
			<tr>
				<th scope="row">load_dt</th>
				<td>Date the load was completed (yyyymmdd hhmmss)</td>
				<td>timestamp without time zone</td>
			</tr>
		</tbody>
	</table>

	<h3 id="osha_violation_event" tabindex="-1">Violation Event Table</h3>
	<div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/violation_event</p>
    </div>
	<p>The following table provides information about OSHA violation events, including the event and penalty information. The information is linked to OSHA violation reports found in the osha_violation table and inspection reports found in the osha_inspection table.</p>
	<table summary="OSHA Violation Event - OSHA Enforcement">
		<caption>violation_event</caption>
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
				<td>Identifies the associated inspection</td>
				<td>numeric(9,0)</td>
			</tr>
			<tr>
				<th scope="row">citation_id</th>
				<td>Identifies the citation number, item number, and item group of the associated citation</td>
				<td>varchar(7)</td>
			</tr>
			<tr>
				<th scope="row">pen_fta</th>
				<td>P=Penalty or F=FTA</td>
				<td>varchar(1)</td>
			</tr>
			<tr>
				<th scope="row">hist_event</th>
				<td>Z=Issued or P=Petition to Mod Abatement or I=Informal Settlement or A=Amendment or W=Empr Withdrew or D=Govt Dismissed or L=State Settlement or Y=State Decision or F=Formal Settlement or J=ALJ Decision or R=Review Commission or 1=State Lower Court or 2=Appeals Court or 3=Supreme Court</td>
				<td>varchar(1)</td>
			</tr>
			<tr>
				<th scope="row">hist_date</th>
				<td>Date of the event (yyyymmdd)</td>
				<td>date</td>
			</tr>
			<tr>
				<th scope="row">hist_penalty</th>
				<td>Amount assessed (ZZZZZZ9.99)</td>
				<td>varchar(10)</td>
			</tr>
			<tr>
				<th scope="row">hist_abate_date</th>
				<td>Abatement date (yyyymmdd) - when pen-fta=P</td>
				<td>date</td>
			</tr>
			<tr>
				<th scope="row">hist_vtype</th>
				<td>Violation type - when pen-fta=P</td>
				<td>varchar(1)</td>
			</tr>
			<tr>
				<th scope="row">hist_insp_nr</th>
				<td>FTA inspection number - when pen-fta=F</td>
				<td>numeric(9,0)</td>
			</tr>
			<tr>
				<th scope="row">load_dt</th>
				<td>Date the load was completed (yyyymmdd hhmmss)</td>
				<td>timestamp without time zone</td>
			</tr>
		</tbody>
	</table>

	<h3 id="osha_violation_gen_duty_std" tabindex="-1">Violation General Duty Standards Table</h3>
	<div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/violation_gen_duty_std</p>
    </div>
	<p>The following table provides information associated with general duty standards cited during OSHA inspections. The information is linked to OSHA violation reports found in the osha_violation table and inspection reports found in the osha_inspection table.</p>
	<table summary="OSHA Violation General Duty Standards  - OSHA Enforcement">
		<caption>violation_gen_duty_std</caption>
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
				<td>Identifies the associated inspection</td>
				<td>numeric(9,0)</td>
			</tr>
			<tr>
				<th scope="row">citation_id</th>
				<td>Identifies the citation number, item number, and item group of the associated citation</td>
				<td>varchar(30)</td>
			</tr>
			<tr>
				<th scope="row">line_nr</th>
				<td>Identifies the relative line in the citation text represented by Line-text</td>
				<td>integer</td>
			</tr>
			<tr>
				<th scope="row">line_text</th>
				<td>Citation text line</td>
				<td>varchar</td>
			</tr>
			<tr>
				<th scope="row">load_dt</th>
				<td>Date the load was completed (yyyymmdd hhmmss)</td>
				<td>timestamp without time zone</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h3 id="osha_accident_mbl" tabindex="-1">Accident Table</h3>
	<div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/accident</p>
    </div>
	<p>The following table contains OSHA accident information including date, time, description, and other associated accident fields.</p>
	<h4>accident - OSHA Enforcement</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: summary_nr</p>
		<p><span class="mbl-strng">Column Description:</span> Identifies the accident OSHA-170 form</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(9,0)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: report_id</p>
		<p><span class="mbl-strng">Column Description:</span> Identifies the OSHA federal or state reporting jurisdiction</p>
		<p><span class="mbl-strng">Data Type:</span> char(7)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: event_date</p>
		<p><span class="mbl-strng">Column Description:</span> Date of accident (yyyymmdd hhmmss)</p>
		<p><span class="mbl-strng">Data Type:</span> timestamp without time zone</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: event_time</p>
		<p><span class="mbl-strng">Column Description:</span> Time of accident (yyyymmdd)</p>
		<p><span class="mbl-strng">Data Type:</span> date</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: event_desc</p>
		<p><span class="mbl-strng">Column Description:</span> Short description of event</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(200)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: event_keyword</p>
		<p><span class="mbl-strng">Column Description:</span> Contains comma separated keywords entered by ERG during the review process</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(200)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: const_end_use</p>
		<p><span class="mbl-strng">Column Description:</span> Construction - end-use (code table ENDU)</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: build_stories</p>
		<p><span class="mbl-strng">Column Description:</span> Construction - number of stories in building</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(4,0)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: nonbuild_ht</p>
		<p><span class="mbl-strng">Column Description:</span> Construction - height in feet when not a building</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(4,0)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: project_cost</p>
		<p><span class="mbl-strng">Column Description:</span> Construction - project cost range (code table COST)</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: project_type</p>
		<p><span class="mbl-strng">Column Description:</span> Construction - project type (code table PTYP)</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: sic_list</p>
		<p><span class="mbl-strng">Column Description:</span> Comma separated 4-digit SICs associated with related inspections</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(40)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: fatality</p>
		<p><span class="mbl-strng">Column Description:</span> X=Fatality is associated with accident</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: state_flag</p>
		<p><span class="mbl-strng">Column Description:</span> Flag used to identify a State</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(1,0)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: abstract_text</p>
		<p><span class="mbl-strng">Column Description:</span> Abstract text</p>
		<p><span class="mbl-strng">Data Type:</span> varchar</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: load_dt</p>
		<p><span class="mbl-strng">Column Description:</span> Date the load was completed (yyyymmdd hhmmss)</p>
		<p><span class="mbl-strng">Data Type:</span> timestamp without time zone</p>
	</div>
	
	<hr/>
	<h3 id="osha_accident_abstract_mbl" tabindex="-1">Accident Abstract Table</h3>
	<div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/accident_abstract</p>
    </div>
	<p>The following table contains information about OSHA accident abstracts. The information in the table originates from form OSHA-170 and is linked to OSHA accident reports found in the osha_accident table.</p>
	<h4>accident_abstract - OSHA Enforcement</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: summary_nr</p>
		<p><span class="mbl-strng">Column Description:</span> Identifies the accident OSHA-170 form</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(9,0)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: line_nr</p>
		<p><span class="mbl-strng">Column Description:</span> Abstract line number - this is a sequence number which should only be used for ordering the lines</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(7,0)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: abstract_text</p>
		<p><span class="mbl-strng">Column Description:</span> Abstract text</p>
		<p><span class="mbl-strng">Data Type:</span> varchar</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: load_dt</p>
		<p><span class="mbl-strng">Column Description:</span> Date the load was completed (yyyymmdd hhmmss)</p>
		<p><span class="mbl-strng">Data Type:</span> timestamp without time zone</p>
	</div>
	
	<hr/>
	<h3 id="osha_accident_injury_mbl" tabindex="-1">Accident Injury Table</h3>
	<div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/accident_injury</p>
    </div>
	<p>The following table contains information about injuries associated with OSHA accident reports. It includes information such as the Degree of Injury and the Cause of Injury and is linked to OSHA accident reports found in the osha_acident table.</p>
	<h4>accident_injury - OSHA Enforcement</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: summary_nr</p>
		<p><span class="mbl-strng">Column Description:</span> Identifies the accident OSHA-170 form</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(9,0)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: rel_insp_nr</p>
		<p><span class="mbl-strng">Column Description:</span> Identifies the inspection associated with investigating a particular injury</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(9,0)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: age</p>
		<p><span class="mbl-strng">Column Description:</span> Age of the injured person</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(2,0)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: sex</p>
		<p><span class="mbl-strng">Column Description:</span> M=Male or F=Female</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: nature_of_inj</p>
		<p><span class="mbl-strng">Column Description:</span> Nature of injury code - code table IN</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(2,0)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: part_of_body</p>
		<p><span class="mbl-strng">Column Description:</span> Part of body code - code table BD</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(2,0)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: src_of_injury</p>
		<p><span class="mbl-strng">Column Description:</span> Source of injury code - code table SO</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(2,0)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: event_type</p>
		<p><span class="mbl-strng">Column Description:</span> Event type code - code table FT</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(2,0)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: evn_factor</p>
		<p><span class="mbl-strng">Column Description:</span> Environmental factor code - code table EN</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(2,0)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: hum_factor</p>
		<p><span class="mbl-strng">Column Description:</span> Human factor code - code table HU</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(2,0)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: occ_code</p>
		<p><span class="mbl-strng">Column Description:</span> Occupation code - code table OCC</p>
		<p><span class="mbl-strng">Data Type:</span>  	numeric(3,0)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: degree_of_inj</p>
		<p><span class="mbl-strng">Column Description:</span> 1=Fatality or 2=Hospitalized injuries or 3=No Hospitalized injuries</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(1,0)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: task_assigned</p>
		<p><span class="mbl-strng">Column Description:</span> 1=Task regularly assigned or 2=Task not regularly assigned</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(1,0)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: hazsub</p>
		<p><span class="mbl-strng">Column Description:</span> Hazardous substance code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(4)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: const_op</p>
		<p><span class="mbl-strng">Column Description:</span> Construction - operation code (code table OPER)</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(2,0)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: const_op_cause</p>
		<p><span class="mbl-strng">Column Description:</span> Construction - cause of injury (code table OPER)</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(2,0)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: fat_cause</p>
		<p><span class="mbl-strng">Column Description:</span> Construction - cause of fatality (code table CAUS)</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(2,0)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: fall_distance</p>
		<p><span class="mbl-strng">Column Description:</span> Construction - distance of fall (feet)</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(4,0)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: fall_ht</p>
		<p><span class="mbl-strng">Column Description:</span> Construction - height of person when fell (feet)</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(4,0)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: injury_line_nr</p>
		<p><span class="mbl-strng">Column Description:</span> Injury line number - is often referenced in the abstract text to refer to a particular person</p>
		<p><span class="mbl-strng">Data Type:</span> numeric</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: load_dt</p>
		<p><span class="mbl-strng">Column Description:</span> Date the load was completed (yyyymmdd hhmmss)</p>
		<p><span class="mbl-strng">Data Type:</span> timestamp without time zone</p>
	</div>
	
	<hr/>
	<h3 id="osha_inspection_mbl" tabindex="-1">Inspection Table</h3>
	<div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/inspection</p>
    </div>
	<p>The following table highlights OSHA inspections conducted by OSHA compliance safety and health officers under the Occupational Safety and Health Act of 1970 (the Act) to determine whether employers are complying with standards issued by the agency for safe and healthful workplaces. OSHA publishes information on its inspection and citation activity on the Internet under the provisions of the Electronic Freedom of Information Act. Data for a given inspection will be present if data exists for the inspection and the inspection is indicated as being closed.</p>
	<h4>inspection - OSHA Enforcement</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: activity_nr</p>
		<p><span class="mbl-strng">Column Description:</span> Unique identifier for the inspection</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(9,0)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: reporting_id</p>
		<p><span class="mbl-strng">Column Description:</span> Identifies the OSHA federal or state reporting jurisdiction</p>
		<p><span class="mbl-strng">Data Type:</span> char(7)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: state_flag</p>
		<p><span class="mbl-strng">Column Description:</span> Flag used to identify a State</p>
		<p><span class="mbl-strng">Data Type:</span> char(1)</p>
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
		<p class="mbl-strng">Column Name: owner_type</p>
		<p><span class="mbl-strng">Column Description:</span> A=Private or B=LocalGovt or C=StateGovt or D=Federal</p>
		<p><span class="mbl-strng">Data Type:</span> text</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: owner_code</p>
		<p><span class="mbl-strng">Column Description:</span> Used for owner=D only</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(100)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: adv_notice</p>
		<p><span class="mbl-strng">Column Description:</span> Y/N/blank</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1000)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: safety_hlth</p>
		<p><span class="mbl-strng">Column Description:</span> Safety/Health indicator (S=Safety or H=Health)</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(100)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: sic_code</p>
		<p><span class="mbl-strng">Column Description:</span> SIC code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(40)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: naics_code</p>
		<p><span class="mbl-strng">Column Description:</span> Unique code number that is assigned to the NAICS</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(10)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: insp_type</p>
		<p><span class="mbl-strng">Column Description:</span> A=Accident or B=Complaint or C=Referral or D=Monitoring or E=Variance or F=FollowUp or G=Unprog Rel or H=Planned or I=Prog Related or J=Unprog Other or K=Prog Other or L=Other-L</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(10)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: insp_scope</p>
		<p><span class="mbl-strng">Column Description:</span> A=Complete or B=Partial or C=Records or D=NoInspection</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(10)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: why_no_insp</p>
		<p><span class="mbl-strng">Column Description:</span> A=No Insp/Not Found or B=No Insp/Out of Business or C=No Insp/Process Inactive or D=No Insp/10 or Fewer Empe or E=No Insp/Denied Entry or F=No Insp/SIC not on PG or G=No Insp/Exempt Voluntary or H=No Insp/NonExempt Consult or I=No Insp/Other</p>
		<p><span class="mbl-strng">Data Type:</span> text</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: union_status</p>
		<p><span class="mbl-strng">Column Description:</span> Indicates union representation during inspection (Yes=Y/U/A or No=N/B/blank)</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(10)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: safety_manuf</p>
		<p><span class="mbl-strng">Column Description:</span> Safety planning guide manufacturing (X/blank)</p>
		<p><span class="mbl-strng">Data Type:</span> text</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: safety_const</p>
		<p><span class="mbl-strng">Column Description:</span> Safety planning guide construction (X/blank)</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(10)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: safety_marit</p>
		<p><span class="mbl-strng">Column Description:</span> Safety planning guide maritime (X/blank)</p>
		<p><span class="mbl-strng">Data Type:</span> text</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: health_manuf</p>
		<p><span class="mbl-strng">Column Description:</span> Health planning guide manufacturing (X/blank)</p>
		<p><span class="mbl-strng">Data Type:</span> text</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: health_const</p>
		<p><span class="mbl-strng">Column Description:</span> Health planning guide construction (X/blank)</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(10)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: health_marit</p>
		<p><span class="mbl-strng">Column Description:</span> Health planning guide maritime (X/blank)</p>
		<p><span class="mbl-strng">Data Type:</span> text</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: migrant</p>
		<p><span class="mbl-strng">Column Description:</span> Migrant labor inspection (X/blank)</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(10)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: mail_street</p>
		<p><span class="mbl-strng">Column Description:</span> Mailing address street</p>
		<p><span class="mbl-strng">Data Type:</span> text</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: mail_city</p>
		<p><span class="mbl-strng">Column Description:</span> Mailing address city</p>
		<p><span class="mbl-strng">Data Type:</span> text</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: mail_state</p>
		<p><span class="mbl-strng">Column Description:</span> Mailing address state postal abbreviation</p>
		<p><span class="mbl-strng">Data Type:</span> text</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: mail_zip</p>
		<p><span class="mbl-strng">Column Description:</span> Mailing address postal zip code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar15)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: host_est_key</p>
		<p><span class="mbl-strng">Column Description:</span> Internal establishment key</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(40)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: open_date</p>
		<p><span class="mbl-strng">Column Description:</span> Indicates when the inspection was started (yyyymmdd)</p>
		<p><span class="mbl-strng">Data Type:</span> date</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: case_mod_date</p>
		<p><span class="mbl-strng">Column Description:</span> Date the inspection or associated violations were last affected by updating (yyyymmdd). Note: this field was only recently added to the database to facilitate the transfer process. Therefore. cases not affected by updating in April. 2004 or later will have zero in this field</p>
		<p><span class="mbl-strng">Data Type:</span> date</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: close_conf_date</p>
		<p><span class="mbl-strng">Column Description:</span> Closing conference date (yyyymmdd)</p>
		<p><span class="mbl-strng">Data Type:</span> date</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: close_case_date</p>
		<p><span class="mbl-strng">Column Description:</span> Close date of inspection (yyyymmdd)</p>
		<p><span class="mbl-strng">Data Type:</span> date</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: ld_dt</p>
		<p><span class="mbl-strng">Column Description:</span> Load Date Timestamp (yyyymmdd hhmmss)</p>
		<p><span class="mbl-strng">Data Type:</span> timestamp without time zone</p>
	</div>
	
	<hr/>
	<h3 id="osha_optional_info_mbl" tabindex="-1">Optional Information Table</h3>
	<div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/optional_info</p>
    </div>
	<p>The following table provides additional, optional information associated with an OSHA inspection. The information is linked to OSHA inspection reports found in the osha_inspection table.</p>
	<h4>optional_info - OSHA Enforcement</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: activity_nr</p>
		<p><span class="mbl-strng">Column Description:</span> Identifies the parent inspection</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(9,0)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: opt_type</p>
		<p><span class="mbl-strng">Column Description:</span> Identifies the optional information type (only N type included)</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: opt_id</p>
		<p><span class="mbl-strng">Column Description:</span> Optional information ID</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(2,0)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: opt_value</p>
		<p><span class="mbl-strng">Column Description:</span> Optional information value</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(50)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: opt_info_id</p>
		<p><span class="mbl-strng">Column Description:</span> Optional Information ID</p>
		<p><span class="mbl-strng">Data Type:</span> numeric</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: load_dt</p>
		<p><span class="mbl-strng">Column Description:</span> Date the load was completed (yyyymmdd hhmmss)</p>
		<p><span class="mbl-strng">Data Type:</span> timestamp without time zone</p>
	</div>
	
	<hr/>
	<h3 id="osha_related_activity_mbl" tabindex="-1">Related Activity Table</h3>
	<div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/related_activity</p>
    </div>
	<p>The following table provides information about activity related to an OSHA inspection. The information is linked to OSHA inspection reports found in the osha_inspection table.</p>
	<h4>related_activity - OSHA Enforcement</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: activity_nr</p>
		<p><span class="mbl-strng">Column Description:</span> Identifies the parent inspection</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(9,0)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: rel_type</p>
		<p><span class="mbl-strng">Column Description:</span> C=Complaint or I=Inspection or R=Referral or A=Accident</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: rel_act_nr</p>
		<p><span class="mbl-strng">Column Description:</span> Activity number of the related activity</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(9,0)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: rel_safety</p>
		<p><span class="mbl-strng">Column Description:</span> X=Yes or blank=No</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: rel_health</p>
		<p><span class="mbl-strng">Column Description:</span> X=Yes or blank=No</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: load_dt</p>
		<p><span class="mbl-strng">Column Description:</span> Date the load was completed (yyyymmdd hhmmss)</p>
		<p><span class="mbl-strng">Data Type:</span> timestamp without time zone</p>
	</div>
	
	<hr/>
	<h3 id="osha_strategic_codes_mbl" tabindex="-1">Strategic Codes Table</h3>
	<div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/strategic_codes</p>
    </div>
	<p>The following table provides information about strategic codes tied to OSHA inspections, including NEP (National Emphasis Program), LEP (Local Emphasis Program), and Strategic Plan Code. The information is linked to OSHA inspection reports found in the osha_inspection table.</p>
	<h4>strategic_codes - OSHA Enforcement</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: activity_nr</p>
		<p><span class="mbl-strng">Column Description:</span> Identifies the parent inspection</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(9,0)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: prog_type</p>
		<p><span class="mbl-strng">Column Description:</span> N=NEP (National Emphasis Program) or L=LEP (Local Emphasis Program) or S=Strategic Plan Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: prog_value</p>
		<p><span class="mbl-strng">Column Description:</span> Code value</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(25)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: load_dt</p>
		<p><span class="mbl-strng">Column Description:</span> Date the load was completed (yyyymmdd hhmmss)</p>
		<p><span class="mbl-strng">Data Type:</span> timestamp without time zone</p>
	</div>
	
	<hr/>
	<h3 id="osha_violation_mbl" tabindex="-1">Violation Table</h3>
	<div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/violation</p>
    </div>
	<p>The following table contains information about OSHA violations that are in violation of the Act, Executive Order 12196, or 29 CFR Part 1960. OSHA publishes information on its inspection and citation activity on the Internet under the provisions of the Electronic Freedom of Information Act. Data for a given citation may not be available for 5 days following receipt by the employer for Federal inspections or for 30 days following receipt by the employer for State inspections. The information is linked to OSHA inspection reports found in the osha_inspection table.</p>
	<h4>violation - OSHA Enforcement</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: activity_nr</p>
		<p><span class="mbl-strng">Column Description:</span> Identifies the parent inspection</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(9,0)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: citation_id</p>
		<p><span class="mbl-strng">Column Description:</span> Identifies the citation number, item number, and item group of the issued citation</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(25)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: delete_flag</p>
		<p><span class="mbl-strng">Column Description:</span> D=deleted</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(25)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: standard</p>
		<p><span class="mbl-strng">Column Description:</span> OSHA standard violated</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(100)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: viol_type</p>
		<p><span class="mbl-strng">Column Description:</span> S=Serious or W=Willful or R=Repeat or O=Other</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(25)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: issuance_date</p>
		<p><span class="mbl-strng">Column Description:</span> Date of citation issuance (yyyymmdd)</p>
		<p><span class="mbl-strng">Data Type:</span> date</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: abate_date</p>
		<p><span class="mbl-strng">Column Description:</span>  	Date by which the violation must be abated (yyyymmdd)</p>
		<p><span class="mbl-strng">Data Type:</span> date</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: abate_complete</p>
		<p><span class="mbl-strng">Column Description:</span> Q=Quick Fix or X=Abatement Completed or I=Corrected During Inspection or E=Not Completed - Employer out of business or W=Not Changed - Worksite changed or S=Not Completed - Solicitor advised or A=Not Completed - AD discretion</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(25)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: current_penalty</p>
		<p><span class="mbl-strng">Column Description:</span> Current penalty assessed (ZZZZZZ9.99)</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(24,2)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: initial_penalty</p>
		<p><span class="mbl-strng">Column Description:</span> Initial penalty assessed (ZZZZZZ9.99)</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(24,2)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: contest_date</p>
		<p><span class="mbl-strng">Column Description:</span> Date contested (yyyymmdd)</p>
		<p><span class="mbl-strng">Data Type:</span> date</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: final_order_date</p>
		<p><span class="mbl-strng">Column Description:</span> Date of final order (yyyymmdd)</p>
		<p><span class="mbl-strng">Data Type:</span> date</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: nr_instances</p>
		<p><span class="mbl-strng">Column Description:</span> Number of instances</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(5,0)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: nr_exposed</p>
		<p><span class="mbl-strng">Column Description:</span> Number of employees exposed</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(5,0)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: rec</p>
		<p><span class="mbl-strng">Column Description:</span> A=Accident or C=Complaint or I=Imminent Danger or R=Referral or V=Variance</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(25)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: gravity</p>
		<p><span class="mbl-strng">Column Description:</span> Level of gravity for serious viol - 01-10 or blank</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(25)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: emphasis</p>
		<p><span class="mbl-strng">Column Description:</span> X or blank</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(25)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: hazcat</p>
		<p><span class="mbl-strng">Column Description:</span> General industry standard hazard category</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(25)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: fta_insp_nr</p>
		<p><span class="mbl-strng">Column Description:</span> FTA inspection number</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(9,0)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: fta_issuance_date</p>
		<p><span class="mbl-strng">Column Description:</span> FTA issuance date (yyyymmdd)</p>
		<p><span class="mbl-strng">Data Type:</span> date</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: fta_penalty</p>
		<p><span class="mbl-strng">Column Description:</span> FTA penalty (ZZZZZZ9.99)</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(24,2)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: fta_contest_date</p>
		<p><span class="mbl-strng">Column Description:</span> FTA contest date (yyyymmdd)</p>
		<p><span class="mbl-strng">Data Type:</span> date</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: fta_final_order_date</p>
		<p><span class="mbl-strng">Column Description:</span> FTA final order date (yyyymmdd)</p>
		<p><span class="mbl-strng">Data Type:</span> date</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: hazsub1</p>
		<p><span class="mbl-strng">Column Description:</span> Hazardous substance code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(25)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: hazsub2</p>
		<p><span class="mbl-strng">Column Description:</span> Hazardous substance code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(25)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: hazsub3</p>
		<p><span class="mbl-strng">Column Description:</span> Hazardous substance code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(25)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: hazsub4</p>
		<p><span class="mbl-strng">Column Description:</span> Hazardous substance code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(25)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: hazsub5</p>
		<p><span class="mbl-strng">Column Description:</span> Hazardous substance code</p>
		<p><span class="mbl-strng">Data Type:</span> zvarchar(25)zz</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: load_dt</p>
		<p><span class="mbl-strng">Column Description:</span> Date the load was completed (yyyymmdd hhmmss)</p>
		<p><span class="mbl-strng">Data Type:</span> timestamp without time zone</p>
	</div>
	
	<hr/>
	<h3 id="osha_violation_event_mbl" tabindex="-1">Violation Event Table</h3>
	<div class="force_wrap apiurl">
		<p>https://data.dol.gov/get/violation_event</p>
    </div>
	<p>The following table provides information about OSHA violation events, including the event and penalty information. The information is linked to OSHA violation reports found in the osha_violation table and inspection reports found in the osha_inspection table.</p>
	<h4>violation_event - OSHA Enforcement</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: activity_nr</p>
		<p><span class="mbl-strng">Column Description:</span> Identifies the associated inspection</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(9,0)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: citation_id</p>
		<p><span class="mbl-strng">Column Description:</span> Identifies the citation number, item number, and item group of the associated citation</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(7)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: pen_fta</p>
		<p><span class="mbl-strng">Column Description:</span> P=Penalty or F=FTA</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: hist_event</p>
		<p><span class="mbl-strng">Column Description:</span> Z=Issued or P=Petition to Mod Abatement or I=Informal Settlement or A=Amendment or W=Empr Withdrew or D=Govt Dismissed or L=State Settlement or Y=State Decision or F=Formal Settlement or J=ALJ Decision or R=Review Commission or 1=State Lower Court or 2=Appeals Court or 3=Supreme Court</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: hist_date</p>
		<p><span class="mbl-strng">Column Description:</span> Date of the event (yyyymmdd)</p>
		<p><span class="mbl-strng">Data Type:</span> date</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: hist_penalty</p>
		<p><span class="mbl-strng">Column Description:</span> Amount assessed (ZZZZZZ9.99)</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(10)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: hist_abate_date</p>
		<p><span class="mbl-strng">Column Description:</span> Abatement date (yyyymmdd) - when pen-fta=P</p>
		<p><span class="mbl-strng">Data Type:</span> date</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: hist_vtype</p>
		<p><span class="mbl-strng">Column Description:</span> Violation type - when pen-fta=P</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: hist_insp_nr</p>
		<p><span class="mbl-strng">Column Description:</span> FTA inspection number - when pen-fta=F</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(9,0)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: load_dt</p>
		<p><span class="mbl-strng">Column Description:</span> Date the load was completed (yyyymmdd hhmmss)</p>
		<p><span class="mbl-strng">Data Type:</span> timestamp without time zone</p>
	</div>

	<hr/>
	<h3 id="osha_violation_gen_duty_std_mbl" tabindex="-1">Violation General Duty Standards Table</h3>
	<div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/violation_gen_duty_std</p>
    </div>
	<p>The following table provides information associated with general duty standards cited during OSHA inspections. The information is linked to OSHA violation reports found in the osha_violation table and inspection reports found in the osha_inspection table.</p>
	<h4>violation_gen_duty_std - OSHA Enforcement</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: activity_nr</p>
		<p><span class="mbl-strng">Column Description:</span> Identifies the associated inspection</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(9,0)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: citation_id</p>
		<p><span class="mbl-strng">Column Description:</span> Identifies the citation number, item number, and item group of the associated citation</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(30)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: line_nr</p>
		<p><span class="mbl-strng">Column Description:</span> Identifies the relative line in the citation text represented by Line-text</p>
		<p><span class="mbl-strng">Data Type:</span> integer</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: line_text</p>
		<p><span class="mbl-strng">Column Description:</span> Citation text line</p>
		<p><span class="mbl-strng">Data Type:</span> varchar</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: load_dt</p>
		<p><span class="mbl-strng">Column Description:</span> Date the load was completed (yyyymmdd hhmmss)</p>
		<p><span class="mbl-strng">Data Type:</span> timestamp without time zone</p>
	</div>
</div>
