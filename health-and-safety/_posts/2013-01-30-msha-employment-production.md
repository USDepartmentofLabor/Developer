---
layout: post
title: MSHA Employment Production
created: 1359570826
description: This dataset contains the annual summation of employee hours and coal production reported by mine operators where the average quarterly employment is greater than zero with grouping by calendar year, subunit code and mine ID beginning with 1983.
---

<div class="force_wrap apiurl">
<p>http://api.dol.gov/V1/Employment</p>
</div>

This dataset contains the annual summation of employee hours and coal production reported by mine operators where the average quarterly employment is greater than zero with grouping by calendar year, subunit code and mine ID beginning with 1983. The subunit code identifies the location or operation of the mine relating to the: (01) Underground; (02) Surface at underground; (03) Strip, quarry, open pit; (04) Auger; (05) Culm bank/refuse pile; (06) Dredge; (12) Other mining; (17) Independent shops or yards; (30) Mill operation/preparation plant; (99) Office workers at mine site.

<a href ="http://api.dol.gov/V1/Employment/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL%20Mine%20Employment%20Production%20Dataset" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables  

<div> 
	<h3>MSHA_employmentProduction</h3>
	<table class="accessible responsive" summary="MSHA_employmentProduction">
	 <caption>MSHA Employment Production</caption>
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
				 Record ID - Primary Key
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				  mineID
			</th>
				<td>
				<span class="small">Data Type</span>
				 bigint
			</td>
				<td>
				<span class="small">Column Description</span>
				 Mine ID
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 mineName
			</th>
				<td>
				<span class="small">Data Type</span>
			    varchar (150
			</td>
				<td>
				<span class="small">Column Description</span>
				 Mine Name
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 state
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar (150)
			</td>
				<td>
				<span class="small">Column Description</span>
				 State where mine is
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 subUnitCode
			</th>
				<td>
				<span class="small">Data Type</span>
				int
			</td>
				<td>
				<span class="small">Column Description</span>
				Sub Unit code of the mine
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 subUnit
			</th>
				<td>
				<span class="small">Data Type</span>
				  varchar (150)
			</td>
				<td>
				<span class="small">Column Description</span>
				 Sub Unit of the mine
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				calendarYear
			</th>
				<td>
				<span class="small">Data Type</span>
				int
			</td>
				<td>
				<span class="small">Column Description</span>
				 Mine Calendar Year
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 annualHours
			</th>
				<td>
				<span class="small">Data Type</span>
				 int 
			</td>
				<td>
				<span class="small">Column Description</span>
				 Miner Annual Hour
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 annualCostProduction
			</th>
				<td>
				<span class="small">Data Type</span>
				 bigint
			</td>
				<td>
				<span class="small">Column Description</span>
				 Annual Cost Production
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 averageEmployeeCount
			</th>
				<td>
				<span class="small">Data Type</span>
				 int
			</td>
				<td>
				<span class="small">Column Description</span>
				 Average Employee Count
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 averageEmployeeHours
			</th>
				<td>
				<span class="small">Data Type</span>
				 int
			</td>
				<td>
				<span class="small">Column Description</span>
				  Average Employee Hours
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				  coalMetalInd
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar (3)
			</td>
				<td>
				<span class="small">Column Description</span>
				 Coal Metal Indicator
			</td>
			</tr>
		</tbody>
	</table>
</div>
