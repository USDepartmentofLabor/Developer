---
layout: post
title: WHD Compliance
created: 1359495404
description: The dataset contains all concluded WHD compliance actions since FY 2008.
---

```
http://api.dol.gov/V1/Compliance/WHD
```

<p>The dataset contains all concluded WHD compliance actions since FY 2008. The dataset includes whether any violations were found and the back wage amount, number of employees due back wages, and civil money penalties assessed. More information and details about the data provided can be found at <a href="http://www.dol.gov/whd/">http://www.dol.gov/whd/</a></p>
<p>This complete dataset can be found on the DOL Data Enforcement application at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://enforcedata.dol.gov&amp;exitTitle=Enforcement&amp;fedpage=yes">http://enforcedata.dol.gov</a></p>

<a href ="http://api.dol.gov/V1/Compliance/WHD/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL%20Compliance-WHD" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables 

- [full table](#full)
- [foodservice table](#foodservice)
- [hospitality table](#hospitality)
- [retail table](#retail)

<h3 id="full">full Table</h3>
<table summary="Full - WHD compliance - contains all concluded WHD compliance actions since FY 2008">
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
			<th scope="row">trade_nm</th>
			<td>Employer Name</td>
			<td>varchar(75)</td>
		</tr>
		<tr>
			<th scope="row">street_addr_1_txt</th>
			<td>Employer Street Address</td>
			<td>varchar(255)</td>
		</tr>
		<tr>
			<th scope="row">city_nm</th>
			<td>City Name</td>
			<td>varchar(75)</td>
		</tr>
		<tr>
			<th scope="row">st_cd</th>
			<td>Employer State</td>
			<td>varchar(8)</td>
		</tr>
		<tr>
			<th scope="row">zip_cd</th>
			<td>Employer Zip Code</td>
			<td>varchar(8)</td>
		</tr>
		<tr>
			<th scope="row">naic_cd</th>
			<td>NAICS Code - Industry Code</td>
			<td>varchar(8)</td>
		</tr>
		<tr>
			<th scope="row">naics_code_description</th>
			<td>Industry Code Description</td>
			<td>varchar</td>
		</tr>
		<tr>
			<th scope="row">findings_start_date</th>
			<td>The date where WHD determined that findings first occurred. Findings are defined as either a Violation or No Violation found.</td>
			<td>date</td>
		</tr>
		<tr>
			<th scope="row">findings_end_date</th>
			<td>The date where WHD determined that findings last occurred. Findings are defined as either a Violation or No Violation found.</td>
			<td>date</td>
		</tr>
		<tr>
			<th scope="row">flsa_violtn_cnt</th>
			<td>FLSA Violation Count - Violations found under FLSA (Fair Labor Standards Act)</td>
			<td>integer</td>
		</tr>
		<tr>
			<th scope="row">flsa_repeat_violator</th>
			<td>FLSA Repeat/Willful violator. R=Repeat; W=Willful; RW=Repeat and Willful.</td>
			<td>varchar</td>
		</tr>
		<tr>
			<th scope="row">flsa_bw_atp_amt</th>
			<td>BW Agreed to under FLSA (Fair Labor Standards Act)</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th scope="row">flsa_ee_atp_cnt</th>
			<td>EE's Agreed to under FLSA (Fair Labor Standards Act)</td>
			<td>integer</td>
		</tr>
		<tr>
			<th scope="row">flsa_mw_bw_atp_amt</th>
			<td>BW Agreed to under FLSA (Fair Labor Standards Act) Minimum Wages</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th scope="row">flsa_ot_bw_atp_amt</th>
			<td>BW Agreed to under FLSA (Fair Labor Standards Act) Overtime</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th scope="row">flsa_15a3_bw_atp_amt</th>
			<td>BW Agreed under FLSA (Fair Labor Standards Act) 15 (a)(3)</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th scope="row">flsa_cmp_assd_amt</th>
			<td>CMP's assessed under FLSA (Fair Labor Standards Act)</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th scope="row">flsa_cl_violtn_cnt</th>
			<td>Violations found under FLSA - CL (Fair Labor Standards Act - Child Labor)</td>
			<td>integer</td>
		</tr>
		<tr>
			<th scope="row">flsa_cl_minor_cnt</th>
			<td>Minors found employed in violation of FLSA - CL (Fair Labor Standards Act - Child Labor)</td>
			<td>integer</td>
		</tr>
		<tr>
			<th scope="row">flsa_cl_cmp_assd_amt</th>
			<td>CMP's assessed under FLSA - CL (Fair Labor Standards Act - Child Labor)</td>
			<td>deciaml(24,2)</td>
		</tr>
	</tbody>
</table>

<h3 id="foodservice">foodService Table</h3>
<table summary="Food Service - WHD compliance">
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
			<th scope="row">trade_nm</th>
			<td>Employer Name</td>
			<td>varchar(75)</td>
		</tr>
		<tr>
			<th scope="row">street_addr_1_txt</th>
			<td>Employer Street Address</td>
			<td>varchar(255)</td>
		</tr>
		<tr>
			<th scope="row">city_nm</th>
			<td>City Name</td>
			<td>varchar(75)</td>
		</tr>
		<tr>
			<th scope="row">st_cd</th>
			<td>Employer State</td>
			<td>varchar(8)</td>
		</tr>
		<tr>
			<th scope="row">zip_cd</th>
			<td>Employer Zip Code</td>
			<td>varchar(8)</td>
		</tr>
		<tr>
			<th scope="row">naic_cd</th>
			<td>NAICS Code - Industry Code</td>
			<td>varchar(8)</td>
		</tr>
		<tr>
			<th scope="row">naics_code_description</th>
			<td>Industry Code Description</td>
			<td>varchar</td>
		</tr>
		<tr>
			<th scope="row">findings_start_date</th>
			<td>The date where WHD determined that findings first occurred. Findings are defined as either a Violation or No Violation found.</td>
			<td>date</td>
		</tr>
		<tr>
			<th scope="row">findings_end_date</th>
			<td>The date where WHD determined that findings last occurred. Findings are defined as either a Violation or No Violation found.</td>
			<td>date</td>
		</tr>
		<tr>
			<th scope="row">flsa_violtn_cnt</th>
			<td>FLSA Violation Count - Violations found under FLSA (Fair Labor Standards Act)</td>
			<td>integer</td>
		</tr>
		<tr>
			<th scope="row">flsa_repeat_violator</th>
			<td>FLSA Repeat/Willful violator. R=Repeat; W=Willful; RW=Repeat and Willful.</td>
			<td>varchar</td>
		</tr>
		<tr>
			<th scope="row">flsa_bw_atp_amt</th>
			<td>BW Agreed to under FLSA (Fair Labor Standards Act)</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th scope="row">flsa_ee_atp_cnt</th>
			<td>EE's Agreed to under FLSA (Fair Labor Standards Act)</td>
			<td>integer</td>
		</tr>
		<tr>
			<th scope="row">flsa_mw_bw_atp_amt</th>
			<td>BW Agreed to under FLSA (Fair Labor Standards Act) Minimum Wages</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th scope="row">flsa_ot_bw_atp_amt</th>
			<td>BW Agreed to under FLSA (Fair Labor Standards Act) Overtime</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th scope="row">flsa_15a3_bw_atp_amt</th>
			<td>BW Agreed under FLSA (Fair Labor Standards Act) 15 (a)(3)</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th scope="row">flsa_cmp_assd_amt</th>
			<td>CMP's assessed under FLSA (Fair Labor Standards Act)</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th scope="row">flsa_cl_violtn_cnt</th>
			<td>Violations found under FLSA - CL (Fair Labor Standards Act - Child Labor)</td>
			<td>integer</td>
		</tr>
		<tr>
			<th scope="row">flsa_cl_minor_cnt</th>
			<td>Minors found employed in violation of FLSA - CL (Fair Labor Standards Act - Child Labor)</td>
			<td>integer</td>
		</tr>
		<tr>
			<th scope="row">flsa_cl_cmp_assd_amt</th>
			<td>CMP's assessed under FLSA - CL (Fair Labor Standards Act - Child Labor)</td>
			<td>deciaml(24,2)</td>
		</tr>
	</tbody>
</table>

<h3 id="hospitality">hospitality Table</h3>
<table summary="Hospitality - WHD compliance">
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
			<th scope="row">trade_nm</th>
			<td>Employer Name</td>
			<td>varchar(75)</td>
		</tr>
		<tr>
			<th scope="row">street_addr_1_txt</th>
			<td>Employer Street Address</td>
			<td>varchar(255)</td>
		</tr>
		<tr>
			<th scope="row">city_nm</th>
			<td>City Name</td>
			<td>varchar(75)</td>
		</tr>
		<tr>
			<th scope="row">st_cd</th>
			<td>Employer State</td>
			<td>varchar(8)</td>
		</tr>
		<tr>
			<th scope="row">zip_cd</th>
			<td>Employer Zip Code</td>
			<td>varchar(8)</td>
		</tr>
		<tr>
			<th scope="row">naic_cd</th>
			<td>NAICS Code - Industry Code</td>
			<td>varchar(8)</td>
		</tr>
		<tr>
			<th scope="row">naics_code_description</th>
			<td>Industry Code Description</td>
			<td>varchar</td>
		</tr>
		<tr>
			<th scope="row">findings_start_date</th>
			<td>The date where WHD determined that findings first occurred. Findings are defined as either a Violation or No Violation found.</td>
			<td>date</td>
		</tr>
		<tr>
			<th scope="row">findings_end_date</th>
			<td>The date where WHD determined that findings last occurred. Findings are defined as either a Violation or No Violation found.</td>
			<td>date</td>
		</tr>
		<tr>
			<th scope="row">flsa_violtn_cnt</th>
			<td>FLSA Violation Count - Violations found under FLSA (Fair Labor Standards Act)</td>
			<td>integer</td>
		</tr>
		<tr>
			<th scope="row">flsa_repeat_violator</th>
			<td>FLSA Repeat/Willful violator. R=Repeat; W=Willful; RW=Repeat and Willful.</td>
			<td>varchar</td>
		</tr>
		<tr>
			<th scope="row">flsa_bw_atp_amt</th>
			<td>BW Agreed to under FLSA (Fair Labor Standards Act)</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th scope="row">flsa_ee_atp_cnt</th>
			<td>EE's Agreed to under FLSA (Fair Labor Standards Act)</td>
			<td>integer</td>
		</tr>
		<tr>
			<th scope="row">flsa_mw_bw_atp_amt</th>
			<td>BW Agreed to under FLSA (Fair Labor Standards Act) Minimum Wages</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th scope="row">flsa_ot_bw_atp_amt</th>
			<td>BW Agreed to under FLSA (Fair Labor Standards Act) Overtime</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th scope="row">flsa_15a3_bw_atp_amt</th>
			<td>BW Agreed under FLSA (Fair Labor Standards Act) 15 (a)(3)</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th scope="row">flsa_cmp_assd_amt</th>
			<td>CMP's assessed under FLSA (Fair Labor Standards Act)</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th scope="row">flsa_cl_violtn_cnt</th>
			<td>Violations found under FLSA - CL (Fair Labor Standards Act - Child Labor)</td>
			<td>integer</td>
		</tr>
		<tr>
			<th scope="row">flsa_cl_minor_cnt</th>
			<td>Minors found employed in violation of FLSA - CL (Fair Labor Standards Act - Child Labor)</td>
			<td>integer</td>
		</tr>
		<tr>
			<th scope="row">flsa_cl_cmp_assd_amt</th>
			<td>CMP's assessed under FLSA - CL (Fair Labor Standards Act - Child Labor)</td>
			<td>deciaml(24,2)</td>
		</tr>
	</tbody>
</table>

<h3 id="retail">retail Table</h3>
<table summary="Retail - WHD compliance - contains all concluded WHD compliance actions since FY 2008">
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
			<th scope="row">trade_nm</th>
			<td>Employer Name</td>
			<td>varchar(75)</td>
		</tr>
		<tr>
			<th scope="row">street_addr_1_txt</th>
			<td>Employer Street Address</td>
			<td>varchar(255)</td>
		</tr>
		<tr>
			<th scope="row">city_nm</th>
			<td>City Name</td>
			<td>varchar(75)</td>
		</tr>
		<tr>
			<th scope="row">st_cd</th>
			<td>Employer State</td>
			<td>varchar(8)</td>
		</tr>
		<tr>
			<th scope="row">zip_cd</th>
			<td>Employer Zip Code</td>
			<td>varchar(8)</td>
		</tr>
		<tr>
			<th scope="row">naic_cd</th>
			<td>NAICS Code - Industry Code</td>
			<td>varchar(8)</td>
		</tr>
		<tr>
			<th scope="row">naics_code_description</th>
			<td>Industry Code Description</td>
			<td>varchar</td>
		</tr>
		<tr>
			<th scope="row">findings_start_date</th>
			<td>The date where WHD determined that findings first occurred. Findings are defined as either a Violation or No Violation found.</td>
			<td>date</td>
		</tr>
		<tr>
			<th scope="row">findings_end_date</th>
			<td>The date where WHD determined that findings last occurred. Findings are defined as either a Violation or No Violation found.</td>
			<td>date</td>
		</tr>
		<tr>
			<th scope="row">flsa_violtn_cnt</th>
			<td>FLSA Violation Count - Violations found under FLSA (Fair Labor Standards Act)</td>
			<td>integer</td>
		</tr>
		<tr>
			<th scope="row">flsa_repeat_violator</th>
			<td>FLSA Repeat/Willful violator. R=Repeat; W=Willful; RW=Repeat and Willful.</td>
			<td>varchar</td>
		</tr>
		<tr>
			<th scope="row">flsa_bw_atp_amt</th>
			<td>BW Agreed to under FLSA (Fair Labor Standards Act)</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th scope="row">flsa_ee_atp_cnt</th>
			<td>EE's Agreed to under FLSA (Fair Labor Standards Act)</td>
			<td>integer</td>
		</tr>
		<tr>
			<th scope="row">flsa_mw_bw_atp_amt</th>
			<td>BW Agreed to under FLSA (Fair Labor Standards Act) Minimum Wages</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th scope="row">flsa_ot_bw_atp_amt</th>
			<td>BW Agreed to under FLSA (Fair Labor Standards Act) Overtime</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th scope="row">flsa_15a3_bw_atp_amt</th>
			<td>BW Agreed under FLSA (Fair Labor Standards Act) 15 (a)(3)</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th scope="row">flsa_cmp_assd_amt</th>
			<td>CMP's assessed under FLSA (Fair Labor Standards Act)</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th scope="row">flsa_cl_violtn_cnt</th>
			<td>Violations found under FLSA - CL (Fair Labor Standards Act - Child Labor)</td>
			<td>integer</td>
		</tr>
		<tr>
			<th scope="row">flsa_cl_minor_cnt</th>
			<td>Minors found employed in violation of FLSA - CL (Fair Labor Standards Act - Child Labor)</td>
			<td>integer</td>
		</tr>
		<tr>
			<th scope="row">flsa_cl_cmp_assd_amt</th>
			<td>CMP's assessed under FLSA - CL (Fair Labor Standards Act - Child Labor)</td>
			<td>deciaml(24,2)</td>
		</tr>
	</tbody>
</table>
