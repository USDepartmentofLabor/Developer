---
layout: post
title: WHD Compliance
created: 1359495404
version: V1
description: The dataset contains all concluded WHD compliance actions since FY 2008.
---

<div class="force_wrap apiurl">
<p>http://api.dol.gov/V1/Compliance/WHD</p>
</div>

<p>The dataset contains all concluded WHD compliance actions since FY 2008. The dataset includes whether any violations were found and the back wage amount, number of employees due back wages, and civil money penalties assessed. More information and details about the data provided can be found at <a href="http://www.dol.gov/whd/">http://www.dol.gov/whd/</a></p>
<p>This complete dataset can be found on the DOL Data Enforcement application at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://enforcedata.dol.gov&amp;exitTitle=Enforcement&amp;fedpage=yes">http://enforcedata.dol.gov</a></p>

<a href ="http://api.dol.gov/V1/Compliance/WHD/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL%20Compliance-WHD" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables 

<div>
	<ul>
		<li><a href="#full">full</a></li>
		<li><a href="#foodservice">foodservice</a></li>
		<li><a href="#hospitality">hospitality</a></li>
		<li><a href="#retail">retail</a></li>
	</ul>
</div>

<div>
	<h3 id="full" tabindex="-1">full Table</h3>
	<table class="accessible responsive" summary="Full - WHD compliance - contains all concluded WHD compliance actions since FY 2008">
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
					trade_nm
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(75)
				</td>
				<td>
					<span class="small">Column Description</span>
					Employer Name
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					street_addr_1_txt
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(255)
				</td>
				<td>
					<span class="small">Column Description</span>
					Employer Street Address
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					city_nm
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(75)
				</td>
				<td>
					<span class="small">Column Description</span>
					City Name
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					st_cd
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(8)
				</td>
				<td>
					<span class="small">Column Description</span>
					Employer State
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					zip_cd
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(8)
				</td>
				<td>
					<span class="small">Column Description</span>
					Employer Zip Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					naic_cd
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(8)
				</td>
				<td>
					<span class="small">Column Description</span>
					NAICS Code - Industry Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					naics_code_description
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar
				</td>
				<td>
					<span class="small">Column Description</span>
					Industry Code Description
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					findings_start_date
				</th>
				<td>
					<span class="small">Data Type</span>
					date
				</td>
				<td>
					<span class="small">Column Description</span>
					The date where WHD determined that findings first occurred. Findings are defined as either a Violation or No Violation found.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					findings_end_date
				</th>
				<td>
					<span class="small">Data Type</span>
					date
				</td>
				<td>
					<span class="small">Column Description</span>
					The date where WHD determined that findings last occurred. Findings are defined as either a Violation or No Violation found.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_violtn_cnt
				</th>
				<td>
					<span class="small">Data Type</span>
					integer
				</td>
				<td>
					<span class="small">Column Description</span>
					FLSA Violation Count - Violations found under FLSA (Fair Labor Standards Act)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_repeat_violator
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar
				</td>
				<td>
					<span class="small">Column Description</span>
					FLSA Repeat/Willful violator. R=Repeat; W=Willful; RW=Repeat and Willful.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_bw_atp_amt
				</th>
				<td>
					<span class="small">Data Type</span>
					decimal(24,2)
				</td>
				<td>
					<span class="small">Column Description</span>
					BW Agreed to under FLSA (Fair Labor Standards Act)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_ee_atp_cnt
				</th>
				<td>
					<span class="small">Data Type</span>
					integer
				</td>
				<td>
					<span class="small">Column Description</span>
					EE's Agreed to under FLSA (Fair Labor Standards Act)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_mw_bw_atp_amt
				</th>
				<td>
					<span class="small">Data Type</span>
					decimal(24,2)
				</td>
				<td>
					<span class="small">Column Description</span>
					BW Agreed to under FLSA (Fair Labor Standards Act) Minimum Wages
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_ot_bw_atp_amt
				</th>
				<td>
					<span class="small">Data Type</span>
					decimal(24,2)
				</td>
				<td>
					<span class="small">Column Description</span>
					BW Agreed to under FLSA (Fair Labor Standards Act) Overtime
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_15a3_bw_atp_amt
				</th>
				<td>
					<span class="small">Data Type</span>
					decimal(24,2)
				</td>
				<td>
					<span class="small">Column Description</span>
					BW Agreed under FLSA (Fair Labor Standards Act) 15 (a)(3)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_cmp_assd_amt
				</th>
				<td>
					<span class="small">Data Type</span>
					decimal(24,2)
				</td>
				<td>
					<span class="small">Column Description</span>
					CMP's assessed under FLSA (Fair Labor Standards Act)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_cl_violtn_cnt
				</th>
				<td>
					<span class="small">Data Type</span>
					integer
				</td>
				<td>
					<span class="small">Column Description</span>
					Violations found under FLSA - CL (Fair Labor Standards Act - Child Labor)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_cl_minor_cnt
				</th>
				<td>
					<span class="small">Data Type</span>
					integer
				</td>
				<td>
					<span class="small">Column Description</span>
					Minors found employed in violation of FLSA - CL (Fair Labor Standards Act - Child Labor)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_cl_cmp_assd_amt
				</th>
				<td>
					<span class="small">Data Type</span>
					deciaml(24,2)
				</td>
				<td>
					<span class="small">Column Description</span>
					CMP's assessed under FLSA - CL (Fair Labor Standards Act - Child Labor)
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="foodservice" tabindex="-1">foodService Table</h3>
	<table class="accessible responsive" summary="Food Service - WHD compliance">
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
					trade_nm
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(75)
				</td>
				<td>
					<span class="small">Column Description</span>
					Employer Name
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					street_addr_1_txt
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(255)
				</td>
				<td>
					<span class="small">Column Description</span>
					Employer Street Address
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					city_nm
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(75)
				</td>
				<td>
					<span class="small">Column Description</span>
					City Name
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					st_cd
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(8)
				</td>
				<td>
					<span class="small">Column Description</span>
					Employer State
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					zip_cd
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(8)
				</td>
				<td>
					<span class="small">Column Description</span>
					Employer Zip Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					naic_cd
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(8)
				</td>
				<td>
					<span class="small">Column Description</span>
					NAICS Code - Industry Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					naics_code_description
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar
				</td>
				<td>
					<span class="small">Column Description</span>
					Industry Code Description
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					findings_start_date
				</th>
				<td>
					<span class="small">Data Type</span>
					date
				</td>
				<td>
					<span class="small">Column Description</span>
					The date where WHD determined that findings first occurred. Findings are defined as either a Violation or No Violation found.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					findings_end_date
				</th>
				<td>
					<span class="small">Data Type</span>
					date
				</td>
				<td>
					<span class="small">Column Description</span>
					The date where WHD determined that findings last occurred. Findings are defined as either a Violation or No Violation found.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_violtn_cnt
				</th>
				<td>
					<span class="small">Data Type</span>
					integer
				</td>
				<td>
					<span class="small">Column Description</span>
					FLSA Violation Count - Violations found under FLSA (Fair Labor Standards Act)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_repeat_violator
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar
				</td>
				<td>
					<span class="small">Column Description</span>
					FLSA Repeat/Willful violator. R=Repeat; W=Willful; RW=Repeat and Willful.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_bw_atp_amt
				</th>
				<td>
					<span class="small">Data Type</span>
					decimal(24,2)
				</td>
				<td>
					<span class="small">Column Description</span>
					BW Agreed to under FLSA (Fair Labor Standards Act)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_ee_atp_cnt
				</th>
				<td>
					<span class="small">Data Type</span>
					integer
				</td>
				<td>
					<span class="small">Column Description</span>
					EE's Agreed to under FLSA (Fair Labor Standards Act)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_mw_bw_atp_amt
				</th>
				<td>
					<span class="small">Data Type</span>
					decimal(24,2)
				</td>
				<td>
					<span class="small">Column Description</span>
					BW Agreed to under FLSA (Fair Labor Standards Act) Minimum Wages
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_ot_bw_atp_amt
				</th>
				<td>
					<span class="small">Data Type</span>
					decimal(24,2)
				</td>
				<td>
					<span class="small">Column Description</span>
					BW Agreed to under FLSA (Fair Labor Standards Act) Overtime
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_15a3_bw_atp_amt
				</th>
				<td>
					<span class="small">Data Type</span>
					decimal(24,2)
				</td>
				<td>
					<span class="small">Column Description</span>
					BW Agreed under FLSA (Fair Labor Standards Act) 15 (a)(3)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_cmp_assd_amt
				</th>
				<td>
					<span class="small">Data Type</span>
					decimal(24,2)
				</td>
				<td>
					<span class="small">Column Description</span>
					CMP's assessed under FLSA (Fair Labor Standards Act)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_cl_violtn_cnt
				</th>
				<td>
					<span class="small">Data Type</span>
					integer
				</td>
				<td>
					<span class="small">Column Description</span>
					Violations found under FLSA - CL (Fair Labor Standards Act - Child Labor)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_cl_minor_cnt
				</th>
				<td>
					<span class="small">Data Type</span>
					integer
				</td>
				<td>
					<span class="small">Column Description</span>
					Minors found employed in violation of FLSA - CL (Fair Labor Standards Act - Child Labor)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_cl_cmp_assd_amt
				</th>
				<td>
					<span class="small">Data Type</span>
					deciaml(24,2)
				</td>
				<td>
					<span class="small">Column Description</span>
					CMP's assessed under FLSA - CL (Fair Labor Standards Act - Child Labor)
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="hospitality" tabindex="-1">hospitality Table</h3>
	<table class="accessible responsive" summary="Hospitality - WHD compliance">
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
					trade_nm
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(75)
				</td>
				<td>
					<span class="small">Column Description</span>
					Employer Name
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					street_addr_1_txt
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(255)
				</td>
				<td>
					<span class="small">Column Description</span>
					Employer Street Address
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					city_nm
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(75)
				</td>
				<td>
					<span class="small">Column Description</span>
					City Name
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					st_cd
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(8)
				</td>
				<td>
					<span class="small">Column Description</span>
					Employer State
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					zip_cd
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(8)
				</td>
				<td>
					<span class="small">Column Description</span>
					Employer Zip Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					naic_cd
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(8)
				</td>
				<td>
					<span class="small">Column Description</span>
					NAICS Code - Industry Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					naics_code_description
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar
				</td>
				<td>
					<span class="small">Column Description</span>
					Industry Code Description
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					findings_start_date
				</th>
				<td>
					<span class="small">Data Type</span>
					date
				</td>
				<td>
					<span class="small">Column Description</span>
					The date where WHD determined that findings first occurred. Findings are defined as either a Violation or No Violation found.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					findings_end_date
				</th>
				<td>
					<span class="small">Data Type</span>
					date
				</td>
				<td>
					<span class="small">Column Description</span>
					The date where WHD determined that findings last occurred. Findings are defined as either a Violation or No Violation found.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_violtn_cnt
				</th>
				<td>
					<span class="small">Data Type</span>
					integer
				</td>
				<td>
					<span class="small">Column Description</span>
					FLSA Violation Count - Violations found under FLSA (Fair Labor Standards Act)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_repeat_violator
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar
				</td>
				<td>
					<span class="small">Column Description</span>
					FLSA Repeat/Willful violator. R=Repeat; W=Willful; RW=Repeat and Willful.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_bw_atp_amt
				</th>
				<td>
					<span class="small">Data Type</span>
					decimal(24,2)
				</td>
				<td>
					<span class="small">Column Description</span>
					BW Agreed to under FLSA (Fair Labor Standards Act)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_ee_atp_cnt
				</th>
				<td>
					<span class="small">Data Type</span>
					integer
				</td>
				<td>
					<span class="small">Column Description</span>
					EE's Agreed to under FLSA (Fair Labor Standards Act)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_mw_bw_atp_amt
				</th>
				<td>
					<span class="small">Data Type</span>
					decimal(24,2)
				</td>
				<td>
					<span class="small">Column Description</span>
					BW Agreed to under FLSA (Fair Labor Standards Act) Minimum Wages
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_ot_bw_atp_amt
				</th>
				<td>
					<span class="small">Data Type</span>
					decimal(24,2)
				</td>
				<td>
					<span class="small">Column Description</span>
					BW Agreed to under FLSA (Fair Labor Standards Act) Overtime
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_15a3_bw_atp_amt
				</th>
				<td>
					<span class="small">Data Type</span>
					decimal(24,2)
				</td>
				<td>
					<span class="small">Column Description</span>
					BW Agreed under FLSA (Fair Labor Standards Act) 15 (a)(3)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_cmp_assd_amt
				</th>
				<td>
					<span class="small">Data Type</span>
					decimal(24,2)
				</td>
				<td>
					<span class="small">Column Description</span>
					CMP's assessed under FLSA (Fair Labor Standards Act)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_cl_violtn_cnt
				</th>
				<td>
					<span class="small">Data Type</span>
					integer
				</td>
				<td>
					<span class="small">Column Description</span>
					Violations found under FLSA - CL (Fair Labor Standards Act - Child Labor)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_cl_minor_cnt
				</th>
				<td>
					<span class="small">Data Type</span>
					integer
				</td>
				<td>
					<span class="small">Column Description</span>
					Minors found employed in violation of FLSA - CL (Fair Labor Standards Act - Child Labor)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_cl_cmp_assd_amt
				</th>
				<td>
					<span class="small">Data Type</span>
					deciaml(24,2)
				</td>
				<td>
					<span class="small">Column Description</span>
					CMP's assessed under FLSA - CL (Fair Labor Standards Act - Child Labor)
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="retail" tabindex="-1">retail Table</h3>
	<table class="accessible responsive" summary="Retail - WHD compliance - contains all concluded WHD compliance actions since FY 2008">
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
					trade_nm
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(75)
				</td>
				<td>
					<span class="small">Column Description</span>
					Employer Name
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					street_addr_1_txt
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(255)
				</td>
				<td>
					<span class="small">Column Description</span>
					Employer Street Address
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					city_nm
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(75)
				</td>
				<td>
					<span class="small">Column Description</span>
					City Name
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					st_cd
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(8)
				</td>
				<td>
					<span class="small">Column Description</span>
					Employer State
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					zip_cd
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(8)
				</td>
				<td>
					<span class="small">Column Description</span>
					Employer Zip Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					naic_cd
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(8)
				</td>
				<td>
					<span class="small">Column Description</span>
					NAICS Code - Industry Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					naics_code_description
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar
				</td>
				<td>
					<span class="small">Column Description</span>
					Industry Code Description
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					findings_start_date
				</th>
				<td>
					<span class="small">Data Type</span>
					date
				</td>
				<td>
					<span class="small">Column Description</span>
					The date where WHD determined that findings first occurred. Findings are defined as either a Violation or No Violation found.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					findings_end_date
				</th>
				<td>
					<span class="small">Data Type</span>
					date
				</td>
				<td>
					<span class="small">Column Description</span>
					The date where WHD determined that findings last occurred. Findings are defined as either a Violation or No Violation found.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_violtn_cnt
				</th>
				<td>
					<span class="small">Data Type</span>
					integer
				</td>
				<td>
					<span class="small">Column Description</span>
					FLSA Violation Count - Violations found under FLSA (Fair Labor Standards Act)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_repeat_violator
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar
				</td>
				<td>
					<span class="small">Column Description</span>
					FLSA Repeat/Willful violator. R=Repeat; W=Willful; RW=Repeat and Willful.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_bw_atp_amt
				</th>
				<td>
					<span class="small">Data Type</span>
					decimal(24,2)
				</td>
				<td>
					<span class="small">Column Description</span>
					BW Agreed to under FLSA (Fair Labor Standards Act)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_ee_atp_cnt
				</th>
				<td>
					<span class="small">Data Type</span>
					integer
				</td>
				<td>
					<span class="small">Column Description</span>
					EE's Agreed to under FLSA (Fair Labor Standards Act)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_mw_bw_atp_amt
				</th>
				<td>
					<span class="small">Data Type</span>
					decimal(24,2)
				</td>
				<td>
					<span class="small">Column Description</span>
					BW Agreed to under FLSA (Fair Labor Standards Act) Minimum Wages
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_ot_bw_atp_amt
				</th>
				<td>
					<span class="small">Data Type</span>
					decimal(24,2)
				</td>
				<td>
					<span class="small">Column Description</span>
					BW Agreed to under FLSA (Fair Labor Standards Act) Overtime
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_15a3_bw_atp_amt
				</th>
				<td>
					<span class="small">Data Type</span>
					decimal(24,2)
				</td>
				<td>
					<span class="small">Column Description</span>
					BW Agreed under FLSA (Fair Labor Standards Act) 15 (a)(3)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_cmp_assd_amt
				</th>
				<td>
					<span class="small">Data Type</span>
					decimal(24,2)
				</td>
				<td>
					<span class="small">Column Description</span>
					CMP's assessed under FLSA (Fair Labor Standards Act)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_cl_violtn_cnt
				</th>
				<td>
					<span class="small">Data Type</span>
					integer
				</td>
				<td>
					<span class="small">Column Description</span>
					Violations found under FLSA - CL (Fair Labor Standards Act - Child Labor)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_cl_minor_cnt
				</th>
				<td>
					<span class="small">Data Type</span>
					integer
				</td>
				<td>
					<span class="small">Column Description</span>
					Minors found employed in violation of FLSA - CL (Fair Labor Standards Act - Child Labor)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					flsa_cl_cmp_assd_amt
				</th>
				<td>
					<span class="small">Data Type</span>
					deciaml(24,2)
				</td>
				<td>
					<span class="small">Column Description</span>
					CMP's assessed under FLSA - CL (Fair Labor Standards Act - Child Labor)
				</td>
			</tr>
		</tbody>
	</table>
</div>