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

<div class="dsktp_tbl">
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
</div>

<div class="mbl_tbl">
	<h3 id="full">full Table</h3>
	<h4>Full - WHD compliance - contains all concluded WHD compliance actions since FY 2008</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: trade_nm</p>
		<p><span class="mbl-strng">Column Description:</span> Employer Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(75)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: street_addr_1_txt</p>
		<p><span class="mbl-strng">Column Description:</span> Employer Street Address</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(255)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: city_nm</p>
		<p><span class="mbl-strng">Column Description:</span> City Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(75)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: st_cd</p>
		<p><span class="mbl-strng">Column Description:</span> Employer State</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(8)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: zip_cd</p>
		<p><span class="mbl-strng">Column Description:</span> Employer Zip Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(8)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: naic_cd</p>
		<p><span class="mbl-strng">Column Description:</span> NAICS Code - Industry Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(8)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: naics_code_description</p>
		<p><span class="mbl-strng">Column Description:</span> Industry Code Description</p>
		<p><span class="mbl-strng">Data Type:</span> varchar</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: findings_start_date</p>
		<p><span class="mbl-strng">Column Description:</span> The date where WHD determined that findings first occurred. Findings are defined as either a Violation or No Violation found.</p>
		<p><span class="mbl-strng">Data Type:</span> date</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: findings_end_date</p>
		<p><span class="mbl-strng">Column Description:</span> The date where WHD determined that findings last occurred. Findings are defined as either a Violation or No Violation found.</p>
		<p><span class="mbl-strng">Data Type:</span> date</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: flsa_violtn_cnt</p>
		<p><span class="mbl-strng">Column Description:</span> FLSA Violation Count - Violations found under FLSA (Fair Labor Standards Act)</p>
		<p><span class="mbl-strng">Data Type:</span> integer</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: flsa_repeat_violator</p>
		<p><span class="mbl-strng">Column Description:</span> FLSA Repeat/Willful violator. R=Repeat; W=Willful; RW=Repeat and Willful.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: flsa_bw_atp_amt</p>
		<p><span class="mbl-strng">Column Description:</span> BW Agreed to under FLSA (Fair Labor Standards Act)</p>
		<p><span class="mbl-strng">Data Type:</span> decimal(24,2)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: flsa_ee_atp_cnt</p>
		<p><span class="mbl-strng">Column Description:</span> EE's Agreed to under FLSA (Fair Labor Standards Act)</p>
		<p><span class="mbl-strng">Data Type:</span> integer</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: flsa_mw_bw_atp_amt</p>
		<p><span class="mbl-strng">Column Description:</span> BW Agreed to under FLSA (Fair Labor Standards Act) Minimum Wages</p>
		<p><span class="mbl-strng">Data Type:</span> decimal(24,2)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: flsa_ot_bw_atp_amt</p>
		<p><span class="mbl-strng">Column Description:</span> BW Agreed to under FLSA (Fair Labor Standards Act) Overtime</p>
		<p><span class="mbl-strng">Data Type:</span> decimal(24,2)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: flsa_15a3_bw_atp_amt</p>
		<p><span class="mbl-strng">Column Description:</span> BW Agreed under FLSA (Fair Labor Standards Act) 15 (a)(3)</p>
		<p><span class="mbl-strng">Data Type:</span> decimal(24,2)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: flsa_cmp_assd_amt</p>
		<p><span class="mbl-strng">Column Description:</span> CMP's assessed under FLSA (Fair Labor Standards Act)</p>
		<p><span class="mbl-strng">Data Type:</span> decimal(24,2)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: flsa_cl_violtn_cnt</p>
		<p><span class="mbl-strng">Column Description:</span> Violations found under FLSA - CL (Fair Labor Standards Act - Child Labor)</p>
		<p><span class="mbl-strng">Data Type:</span> integer</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: flsa_cl_minor_cnt</p>
		<p><span class="mbl-strng">Column Description:</span> Minors found employed in violation of FLSA - CL (Fair Labor Standards Act - Child Labor)</p>
		<p><span class="mbl-strng">Data Type:</span> integer</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: flsa_cl_cmp_assd_amt</p>
		<p><span class="mbl-strng">Column Description:</span> CMP's assessed under FLSA - CL (Fair Labor Standards Act - Child Labor)</p>
		<p><span class="mbl-strng">Data Type:</span> deciaml(24,2)</p>		
	</div>

	<hr />
	<h3 id="foodService">foodService Table</h3>
	<h4>Food Service - WHD compliance</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: trade_nm</p>
		<p><span class="mbl-strng">Column Description:</span> Employer Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(75)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: street_addr_1_txt</p>
		<p><span class="mbl-strng">Column Description:</span> Employer Street Address</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(255)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: city_nm</p>
		<p><span class="mbl-strng">Column Description:</span> City Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(75)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: st_cd</p>
		<p><span class="mbl-strng">Column Description:</span> Employer State</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(8)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: zip_cd</p>
		<p><span class="mbl-strng">Column Description:</span> Employer Zip Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(8)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: naic_cd</p>
		<p><span class="mbl-strng">Column Description:</span> NAICS Code - Industry Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(8)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: naics_code_description</p>
		<p><span class="mbl-strng">Column Description:</span> Industry Code Description</p>
		<p><span class="mbl-strng">Data Type:</span> varchar</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: findings_start_date</p>
		<p><span class="mbl-strng">Column Description:</span> The date where WHD determined that findings first occurred. Findings are defined as either a Violation or No Violation found.</p>
		<p><span class="mbl-strng">Data Type:</span> date</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: findings_end_date</p>
		<p><span class="mbl-strng">Column Description:</span> The date where WHD determined that findings last occurred. Findings are defined as either a Violation or No Violation found.</p>
		<p><span class="mbl-strng">Data Type:</span> date</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: flsa_violtn_cnt</p>
		<p><span class="mbl-strng">Column Description:</span> FLSA Violation Count - Violations found under FLSA (Fair Labor Standards Act)</p>
		<p><span class="mbl-strng">Data Type:</span> integer</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: flsa_repeat_violator</p>
		<p><span class="mbl-strng">Column Description:</span> FLSA Repeat/Willful violator. R=Repeat; W=Willful; RW=Repeat and Willful.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: flsa_bw_atp_amt</p>
		<p><span class="mbl-strng">Column Description:</span> BW Agreed to under FLSA (Fair Labor Standards Act)</p>
		<p><span class="mbl-strng">Data Type:</span> decimal(24,2)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: flsa_ee_atp_cnt</p>
		<p><span class="mbl-strng">Column Description:</span> EE's Agreed to under FLSA (Fair Labor Standards Act)</p>
		<p><span class="mbl-strng">Data Type:</span> integer</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: flsa_mw_bw_atp_amt</p>
		<p><span class="mbl-strng">Column Description:</span> BW Agreed to under FLSA (Fair Labor Standards Act) Minimum Wages</p>
		<p><span class="mbl-strng">Data Type:</span> decimal(24,2)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: flsa_ot_bw_atp_amt</p>
		<p><span class="mbl-strng">Column Description:</span> BW Agreed to under FLSA (Fair Labor Standards Act) Overtime</p>
		<p><span class="mbl-strng">Data Type:</span> decimal(24,2)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: flsa_15a3_bw_atp_amt</p>
		<p><span class="mbl-strng">Column Description:</span> BW Agreed under FLSA (Fair Labor Standards Act) 15 (a)(3)</p>
		<p><span class="mbl-strng">Data Type:</span> decimal(24,2)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: flsa_cmp_assd_amt</p>
		<p><span class="mbl-strng">Column Description:</span> CMP's assessed under FLSA (Fair Labor Standards Act)</p>
		<p><span class="mbl-strng">Data Type:</span> decimal(24,2)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: flsa_cl_violtn_cnt</p>
		<p><span class="mbl-strng">Column Description:</span> Violations found under FLSA - CL (Fair Labor Standards Act - Child Labor)</p>
		<p><span class="mbl-strng">Data Type:</span> integer</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: flsa_cl_minor_cnt</p>
		<p><span class="mbl-strng">Column Description:</span> Minors found employed in violation of FLSA - CL (Fair Labor Standards Act - Child Labor)</p>
		<p><span class="mbl-strng">Data Type:</span> integer</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: flsa_cl_cmp_assd_amt</p>
		<p><span class="mbl-strng">Column Description:</span> CMP's assessed under FLSA - CL (Fair Labor Standards Act - Child Labor)</p>
		<p><span class="mbl-strng">Data Type:</span> deciaml(24,2)</p>		
	</div>

	<hr />
	<h3 id="hospitality">hospitality Table</h3>
	<h4>Hospitality - WHD compliance</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: trade_nm</p>
		<p><span class="mbl-strng">Column Description:</span> Employer Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(75)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: street_addr_1_txt</p>
		<p><span class="mbl-strng">Column Description:</span> Employer Street Address</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(255)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: city_nm</p>
		<p><span class="mbl-strng">Column Description:</span> City Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(75)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: st_cd</p>
		<p><span class="mbl-strng">Column Description:</span> Employer State</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(8)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: zip_cd</p>
		<p><span class="mbl-strng">Column Description:</span> Employer Zip Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(8)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: naic_cd</p>
		<p><span class="mbl-strng">Column Description:</span> NAICS Code - Industry Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(8)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: naics_code_description</p>
		<p><span class="mbl-strng">Column Description:</span> Industry Code Description</p>
		<p><span class="mbl-strng">Data Type:</span> varchar</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: findings_start_date</p>
		<p><span class="mbl-strng">Column Description:</span> The date where WHD determined that findings first occurred. Findings are defined as either a Violation or No Violation found.</p>
		<p><span class="mbl-strng">Data Type:</span> date</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: findings_end_date</p>
		<p><span class="mbl-strng">Column Description:</span> The date where WHD determined that findings last occurred. Findings are defined as either a Violation or No Violation found.</p>
		<p><span class="mbl-strng">Data Type:</span> date</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: flsa_violtn_cnt</p>
		<p><span class="mbl-strng">Column Description:</span> FLSA Violation Count - Violations found under FLSA (Fair Labor Standards Act)</p>
		<p><span class="mbl-strng">Data Type:</span> integer</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: flsa_repeat_violator</p>
		<p><span class="mbl-strng">Column Description:</span> FLSA Repeat/Willful violator. R=Repeat; W=Willful; RW=Repeat and Willful.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: flsa_bw_atp_amt</p>
		<p><span class="mbl-strng">Column Description:</span> BW Agreed to under FLSA (Fair Labor Standards Act)</p>
		<p><span class="mbl-strng">Data Type:</span> decimal(24,2)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: flsa_ee_atp_cnt</p>
		<p><span class="mbl-strng">Column Description:</span> EE's Agreed to under FLSA (Fair Labor Standards Act)</p>
		<p><span class="mbl-strng">Data Type:</span> integer</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: flsa_mw_bw_atp_amt</p>
		<p><span class="mbl-strng">Column Description:</span> BW Agreed to under FLSA (Fair Labor Standards Act) Minimum Wages</p>
		<p><span class="mbl-strng">Data Type:</span> decimal(24,2)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: flsa_ot_bw_atp_amt</p>
		<p><span class="mbl-strng">Column Description:</span> BW Agreed to under FLSA (Fair Labor Standards Act) Overtime</p>
		<p><span class="mbl-strng">Data Type:</span> decimal(24,2)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: flsa_15a3_bw_atp_amt</p>
		<p><span class="mbl-strng">Column Description:</span> BW Agreed under FLSA (Fair Labor Standards Act) 15 (a)(3)</p>
		<p><span class="mbl-strng">Data Type:</span> decimal(24,2)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: flsa_cmp_assd_amt</p>
		<p><span class="mbl-strng">Column Description:</span> CMP's assessed under FLSA (Fair Labor Standards Act)</p>
		<p><span class="mbl-strng">Data Type:</span> decimal(24,2)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: flsa_cl_violtn_cnt</p>
		<p><span class="mbl-strng">Column Description:</span> Violations found under FLSA - CL (Fair Labor Standards Act - Child Labor)</p>
		<p><span class="mbl-strng">Data Type:</span> integer</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: flsa_cl_minor_cnt</p>
		<p><span class="mbl-strng">Column Description:</span> Minors found employed in violation of FLSA - CL (Fair Labor Standards Act - Child Labor)</p>
		<p><span class="mbl-strng">Data Type:</span> integer</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: flsa_cl_cmp_assd_amt</p>
		<p><span class="mbl-strng">Column Description:</span> CMP's assessed under FLSA - CL (Fair Labor Standards Act - Child Labor)</p>
		<p><span class="mbl-strng">Data Type:</span> deciaml(24,2)</p>		
	</div>

	<hr />
	<h3 id="retail">retail Table</h3>
	<h4>Retail - WHD compliance - contains all concluded WHD compliance actions since FY 2008</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: trade_nm</p>
		<p><span class="mbl-strng">Column Description:</span> Employer Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(75)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: street_addr_1_txt</p>
		<p><span class="mbl-strng">Column Description:</span> Employer Street Address</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(255)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: city_nm</p>
		<p><span class="mbl-strng">Column Description:</span> City Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(75)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: st_cd</p>
		<p><span class="mbl-strng">Column Description:</span> Employer State</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(8)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: zip_cd</p>
		<p><span class="mbl-strng">Column Description:</span> Employer Zip Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(8)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: naic_cd</p>
		<p><span class="mbl-strng">Column Description:</span> NAICS Code - Industry Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(8)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: naics_code_description</p>
		<p><span class="mbl-strng">Column Description:</span> Industry Code Description</p>
		<p><span class="mbl-strng">Data Type:</span> varchar</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: findings_start_date</p>
		<p><span class="mbl-strng">Column Description:</span> The date where WHD determined that findings first occurred. Findings are defined as either a Violation or No Violation found.</p>
		<p><span class="mbl-strng">Data Type:</span> date</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: findings_end_date</p>
		<p><span class="mbl-strng">Column Description:</span> The date where WHD determined that findings last occurred. Findings are defined as either a Violation or No Violation found.</p>
		<p><span class="mbl-strng">Data Type:</span> date</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: flsa_violtn_cnt</p>
		<p><span class="mbl-strng">Column Description:</span> FLSA Violation Count - Violations found under FLSA (Fair Labor Standards Act)</p>
		<p><span class="mbl-strng">Data Type:</span> integer</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: flsa_repeat_violator</p>
		<p><span class="mbl-strng">Column Description:</span> FLSA Repeat/Willful violator. R=Repeat; W=Willful; RW=Repeat and Willful.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: flsa_bw_atp_amt</p>
		<p><span class="mbl-strng">Column Description:</span> BW Agreed to under FLSA (Fair Labor Standards Act)</p>
		<p><span class="mbl-strng">Data Type:</span> decimal(24,2)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: flsa_ee_atp_cnt</p>
		<p><span class="mbl-strng">Column Description:</span> EE's Agreed to under FLSA (Fair Labor Standards Act)</p>
		<p><span class="mbl-strng">Data Type:</span> integer</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: flsa_mw_bw_atp_amt</p>
		<p><span class="mbl-strng">Column Description:</span> BW Agreed to under FLSA (Fair Labor Standards Act) Minimum Wages</p>
		<p><span class="mbl-strng">Data Type:</span> decimal(24,2)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: flsa_ot_bw_atp_amt</p>
		<p><span class="mbl-strng">Column Description:</span> BW Agreed to under FLSA (Fair Labor Standards Act) Overtime</p>
		<p><span class="mbl-strng">Data Type:</span> decimal(24,2)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: flsa_15a3_bw_atp_amt</p>
		<p><span class="mbl-strng">Column Description:</span> BW Agreed under FLSA (Fair Labor Standards Act) 15 (a)(3)</p>
		<p><span class="mbl-strng">Data Type:</span> decimal(24,2)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: flsa_cmp_assd_amt</p>
		<p><span class="mbl-strng">Column Description:</span> CMP's assessed under FLSA (Fair Labor Standards Act)</p>
		<p><span class="mbl-strng">Data Type:</span> decimal(24,2)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: flsa_cl_violtn_cnt</p>
		<p><span class="mbl-strng">Column Description:</span> Violations found under FLSA - CL (Fair Labor Standards Act - Child Labor)</p>
		<p><span class="mbl-strng">Data Type:</span> integer</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: flsa_cl_minor_cnt</p>
		<p><span class="mbl-strng">Column Description:</span> Minors found employed in violation of FLSA - CL (Fair Labor Standards Act - Child Labor)</p>
		<p><span class="mbl-strng">Data Type:</span> integer</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: flsa_cl_cmp_assd_amt</p>
		<p><span class="mbl-strng">Column Description:</span> CMP's assessed under FLSA - CL (Fair Labor Standards Act - Child Labor)</p>
		<p><span class="mbl-strng">Data Type:</span> deciaml(24,2)</p>		
	</div>
</div>
