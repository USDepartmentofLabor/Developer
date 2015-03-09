---
layout: post
title: DOL WHD Compliance Dataset
created: 1359495404
---

```
http://api.dol.gov/V1/Compliance/WHD
```

<p>The dataset contains all concluded WHD compliance actions since FY 2008. The dataset includes whether any violations were found and the back wage amount, number of employees due back wages, and civil money penalties assessed. More information and details about the data provided can be found at <a href="http://www.dol.gov/whd/">http://www.dol.gov/whd/</a></p>

<p>This complete dataset can be found on the DOL Data Enforcement application at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://enforcedata.dol.gov&amp;exitTitle=Enforcement&amp;fedpage=yes">http://enforcedata.dol.gov</a></p>

<p>If you are using this data as part of the DOL informACTION App Challenge, please be aware of this:<br />
From this dataset, make sure your solution presents these elements to the user:</p>

<ul>
	<li>Trade Name</li>
	<li>Address (Address, City, State, Zip)</li>
	<li>NAIC Description</li>
	<li>Period of Findings (Findings Date Start, Findings Date End)</li>
	<li>FLSA Violations Indicator
	<ol>
		<li>FLSA Violations</li>
		<li>FLSA Repeat Violator</li>
		<li>FLSA BW ATP</li>
		<li>FLSA EE's ATP</li>
		<li>FLSA MW BW ATP</li>
		<li>FLSA OT BW ATP</li>
		<li>FLSA 15(a)(3) BW ATP</li>
		<li>FLSA CMP Assessed</li>
	</ol>
	</li>
	<li>Child Labor Findings Indicator
	<ol>
		<li>FLSA- CL Violations</li>
		<li>FLSA- CL Minors</li>
		<li>FLSA- CL CMP Assessed</li>
	</ol>
	</li>
</ul>

<p>&nbsp;</p>

<h3>Frequency</h3>

<p>Monthly</p>


### Dataset Metadata  
http://api.dol.gov/V1/Compliance/WHD/$metadata

[Sample the DOL WHD Compliance Dataset](https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL Compliance-WHD)  

### Dataset Tables:  
<h3>full Table</h3>

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
			<th>trade_nm</th>
			<td>Employer Name</td>
			<td>varchar(75)</td>
		</tr>
		<tr>
			<th>street_addr_1_txt</th>
			<td>Employer Street Address</td>
			<td>varchar(255)</td>
		</tr>
		<tr>
			<th>city_nm</th>
			<td>City Name</td>
			<td>varchar(75)</td>
		</tr>
		<tr>
			<th>st_cd</th>
			<td>Employer State</td>
			<td>varchar(8)</td>
		</tr>
		<tr>
			<th>zip_cd</th>
			<td>Employer Zip Code</td>
			<td>varchar(8)</td>
		</tr>
		<tr>
			<th>naic_cd</th>
			<td>NAICS Code - Industry Code</td>
			<td>varchar(8)</td>
		</tr>
		<tr>
			<th>naics_code_description</th>
			<td>Industry Code Description</td>
			<td>varchar</td>
		</tr>
		<tr>
			<th>findings_start_date</th>
			<td>The date where WHD determined that findings first occurred. Findings are defined as either a Violation or No Violation found.</td>
			<td>date</td>
		</tr>
		<tr>
			<th>findings_end_date</th>
			<td>The date where WHD determined that findings last occurred. Findings are defined as either a Violation or No Violation found.</td>
			<td>date</td>
		</tr>
		<tr>
			<th>flsa_violtn_cnt</th>
			<td>FLSA Violation Count - Violations found under FLSA (Fair Labor Standards Act)</td>
			<td>integer</td>
		</tr>
		<tr>
			<th>flsa_repeat_violator</th>
			<td>FLSA Repeat/Willful violator. R=Repeat; W=Willful; RW=Repeat and Willful.</td>
			<td>varchar</td>
		</tr>
		<tr>
			<th>flsa_bw_atp_amt</th>
			<td>BW Agreed to under FLSA (Fair Labor Standards Act)</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th>flsa_ee_atp_cnt</th>
			<td>EE's Agreed to under FLSA (Fair Labor Standards Act)</td>
			<td>integer</td>
		</tr>
		<tr>
			<th>flsa_mw_bw_atp_amt</th>
			<td>BW Agreed to under FLSA (Fair Labor Standards Act) Minimum Wages</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th>flsa_ot_bw_atp_amt</th>
			<td>BW Agreed to under FLSA (Fair Labor Standards Act) Overtime</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th>flsa_15a3_bw_atp_amt</th>
			<td>BW Agreed under FLSA (Fair Labor Standards Act) 15 (a)(3)</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th>flsa_cmp_assd_amt</th>
			<td>CMP's assessed under FLSA (Fair Labor Standards Act)</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th>flsa_cl_violtn_cnt</th>
			<td>Violations found under FLSA - CL (Fair Labor Standards Act - Child Labor)</td>
			<td>integer</td>
		</tr>
		<tr>
			<th>flsa_cl_minor_cnt</th>
			<td>Minors found employed in violation of FLSA - CL (Fair Labor Standards Act - Child Labor)</td>
			<td>integer</td>
		</tr>
		<tr>
			<th>flsa_cl_cmp_assd_amt</th>
			<td>CMP's assessed under FLSA - CL (Fair Labor Standards Act - Child Labor)</td>
			<td>deciaml(24,2)</td>
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
			<th>trade_nm</th>
			<td>Employer Name</td>
			<td>varchar(75)</td>
		</tr>
		<tr>
			<th>street_addr_1_txt</th>
			<td>Employer Street Address</td>
			<td>varchar(255)</td>
		</tr>
		<tr>
			<th>city_nm</th>
			<td>City Name</td>
			<td>varchar(75)</td>
		</tr>
		<tr>
			<th>st_cd</th>
			<td>Employer State</td>
			<td>varchar(8)</td>
		</tr>
		<tr>
			<th>zip_cd</th>
			<td>Employer Zip Code</td>
			<td>varchar(8)</td>
		</tr>
		<tr>
			<th>naic_cd</th>
			<td>NAICS Code - Industry Code</td>
			<td>varchar(8)</td>
		</tr>
		<tr>
			<th>naics_code_description</th>
			<td>Industry Code Description</td>
			<td>varchar</td>
		</tr>
		<tr>
			<th>findings_start_date</th>
			<td>The date where WHD determined that findings first occurred. Findings are defined as either a Violation or No Violation found.</td>
			<td>date</td>
		</tr>
		<tr>
			<th>findings_end_date</th>
			<td>The date where WHD determined that findings last occurred. Findings are defined as either a Violation or No Violation found.</td>
			<td>date</td>
		</tr>
		<tr>
			<th>flsa_violtn_cnt</th>
			<td>FLSA Violation Count - Violations found under FLSA (Fair Labor Standards Act)</td>
			<td>integer</td>
		</tr>
		<tr>
			<th>flsa_repeat_violator</th>
			<td>FLSA Repeat/Willful violator. R=Repeat; W=Willful; RW=Repeat and Willful.</td>
			<td>varchar</td>
		</tr>
		<tr>
			<th>flsa_bw_atp_amt</th>
			<td>BW Agreed to under FLSA (Fair Labor Standards Act)</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th>flsa_ee_atp_cnt</th>
			<td>EE's Agreed to under FLSA (Fair Labor Standards Act)</td>
			<td>integer</td>
		</tr>
		<tr>
			<th>flsa_mw_bw_atp_amt</th>
			<td>BW Agreed to under FLSA (Fair Labor Standards Act) Minimum Wages</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th>flsa_ot_bw_atp_amt</th>
			<td>BW Agreed to under FLSA (Fair Labor Standards Act) Overtime</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th>flsa_15a3_bw_atp_amt</th>
			<td>BW Agreed under FLSA (Fair Labor Standards Act) 15 (a)(3)</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th>flsa_cmp_assd_amt</th>
			<td>CMP's assessed under FLSA (Fair Labor Standards Act)</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th>flsa_cl_violtn_cnt</th>
			<td>Violations found under FLSA - CL (Fair Labor Standards Act - Child Labor)</td>
			<td>integer</td>
		</tr>
		<tr>
			<th>flsa_cl_minor_cnt</th>
			<td>Minors found employed in violation of FLSA - CL (Fair Labor Standards Act - Child Labor)</td>
			<td>integer</td>
		</tr>
		<tr>
			<th>flsa_cl_cmp_assd_amt</th>
			<td>CMP's assessed under FLSA - CL (Fair Labor Standards Act - Child Labor)</td>
			<td>deciaml(24,2)</td>
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
			<th>trade_nm</th>
			<td>Employer Name</td>
			<td>varchar(75)</td>
		</tr>
		<tr>
			<th>street_addr_1_txt</th>
			<td>Employer Street Address</td>
			<td>varchar(255)</td>
		</tr>
		<tr>
			<th>city_nm</th>
			<td>City Name</td>
			<td>varchar(75)</td>
		</tr>
		<tr>
			<th>st_cd</th>
			<td>Employer State</td>
			<td>varchar(8)</td>
		</tr>
		<tr>
			<th>zip_cd</th>
			<td>Employer Zip Code</td>
			<td>varchar(8)</td>
		</tr>
		<tr>
			<th>naic_cd</th>
			<td>NAICS Code - Industry Code</td>
			<td>varchar(8)</td>
		</tr>
		<tr>
			<th>naics_code_description</th>
			<td>Industry Code Description</td>
			<td>varchar</td>
		</tr>
		<tr>
			<th>findings_start_date</th>
			<td>The date where WHD determined that findings first occurred. Findings are defined as either a Violation or No Violation found.</td>
			<td>date</td>
		</tr>
		<tr>
			<th>findings_end_date</th>
			<td>The date where WHD determined that findings last occurred. Findings are defined as either a Violation or No Violation found.</td>
			<td>date</td>
		</tr>
		<tr>
			<th>flsa_violtn_cnt</th>
			<td>FLSA Violation Count - Violations found under FLSA (Fair Labor Standards Act)</td>
			<td>integer</td>
		</tr>
		<tr>
			<th>flsa_repeat_violator</th>
			<td>FLSA Repeat/Willful violator. R=Repeat; W=Willful; RW=Repeat and Willful.</td>
			<td>varchar</td>
		</tr>
		<tr>
			<th>flsa_bw_atp_amt</th>
			<td>BW Agreed to under FLSA (Fair Labor Standards Act)</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th>flsa_ee_atp_cnt</th>
			<td>EE's Agreed to under FLSA (Fair Labor Standards Act)</td>
			<td>integer</td>
		</tr>
		<tr>
			<th>flsa_mw_bw_atp_amt</th>
			<td>BW Agreed to under FLSA (Fair Labor Standards Act) Minimum Wages</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th>flsa_ot_bw_atp_amt</th>
			<td>BW Agreed to under FLSA (Fair Labor Standards Act) Overtime</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th>flsa_15a3_bw_atp_amt</th>
			<td>BW Agreed under FLSA (Fair Labor Standards Act) 15 (a)(3)</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th>flsa_cmp_assd_amt</th>
			<td>CMP's assessed under FLSA (Fair Labor Standards Act)</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th>flsa_cl_violtn_cnt</th>
			<td>Violations found under FLSA - CL (Fair Labor Standards Act - Child Labor)</td>
			<td>integer</td>
		</tr>
		<tr>
			<th>flsa_cl_minor_cnt</th>
			<td>Minors found employed in violation of FLSA - CL (Fair Labor Standards Act - Child Labor)</td>
			<td>integer</td>
		</tr>
		<tr>
			<th>flsa_cl_cmp_assd_amt</th>
			<td>CMP's assessed under FLSA - CL (Fair Labor Standards Act - Child Labor)</td>
			<td>deciaml(24,2)</td>
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
			<th>trade_nm</th>
			<td>Employer Name</td>
			<td>varchar(75)</td>
		</tr>
		<tr>
			<th>street_addr_1_txt</th>
			<td>Employer Street Address</td>
			<td>varchar(255)</td>
		</tr>
		<tr>
			<th>city_nm</th>
			<td>City Name</td>
			<td>varchar(75)</td>
		</tr>
		<tr>
			<th>st_cd</th>
			<td>Employer State</td>
			<td>varchar(8)</td>
		</tr>
		<tr>
			<th>zip_cd</th>
			<td>Employer Zip Code</td>
			<td>varchar(8)</td>
		</tr>
		<tr>
			<th>naic_cd</th>
			<td>NAICS Code - Industry Code</td>
			<td>varchar(8)</td>
		</tr>
		<tr>
			<th>naics_code_description</th>
			<td>Industry Code Description</td>
			<td>varchar</td>
		</tr>
		<tr>
			<th>findings_start_date</th>
			<td>The date where WHD determined that findings first occurred. Findings are defined as either a Violation or No Violation found.</td>
			<td>date</td>
		</tr>
		<tr>
			<th>findings_end_date</th>
			<td>The date where WHD determined that findings last occurred. Findings are defined as either a Violation or No Violation found.</td>
			<td>date</td>
		</tr>
		<tr>
			<th>flsa_violtn_cnt</th>
			<td>FLSA Violation Count - Violations found under FLSA (Fair Labor Standards Act)</td>
			<td>integer</td>
		</tr>
		<tr>
			<th>flsa_repeat_violator</th>
			<td>FLSA Repeat/Willful violator. R=Repeat; W=Willful; RW=Repeat and Willful.</td>
			<td>varchar</td>
		</tr>
		<tr>
			<th>flsa_bw_atp_amt</th>
			<td>BW Agreed to under FLSA (Fair Labor Standards Act)</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th>flsa_ee_atp_cnt</th>
			<td>EE's Agreed to under FLSA (Fair Labor Standards Act)</td>
			<td>integer</td>
		</tr>
		<tr>
			<th>flsa_mw_bw_atp_amt</th>
			<td>BW Agreed to under FLSA (Fair Labor Standards Act) Minimum Wages</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th>flsa_ot_bw_atp_amt</th>
			<td>BW Agreed to under FLSA (Fair Labor Standards Act) Overtime</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th>flsa_15a3_bw_atp_amt</th>
			<td>BW Agreed under FLSA (Fair Labor Standards Act) 15 (a)(3)</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th>flsa_cmp_assd_amt</th>
			<td>CMP's assessed under FLSA (Fair Labor Standards Act)</td>
			<td>decimal(24,2)</td>
		</tr>
		<tr>
			<th>flsa_cl_violtn_cnt</th>
			<td>Violations found under FLSA - CL (Fair Labor Standards Act - Child Labor)</td>
			<td>integer</td>
		</tr>
		<tr>
			<th>flsa_cl_minor_cnt</th>
			<td>Minors found employed in violation of FLSA - CL (Fair Labor Standards Act - Child Labor)</td>
			<td>integer</td>
		</tr>
		<tr>
			<th>flsa_cl_cmp_assd_amt</th>
			<td>CMP's assessed under FLSA - CL (Fair Labor Standards Act - Child Labor)</td>
			<td>deciaml(24,2)</td>
		</tr>
	</tbody>
</table>
