---
layout: post
title: MSHA Employment Production
created: 1359570826
description: This dataset contains the annual summation of employee hours and coal production reported by mine operators where the average quarterly employment is greater than zero with grouping by calendar year, subunit code and mine ID beginning with 1983.
categories: [health-and-safety, dataset]
---

<div class="force_wrap apiurl">
<p>http://api.dol.gov/V1/Employment</p>
</div>

This dataset contains the annual summation of employee hours and coal production reported by mine operators where the average quarterly employment is greater than zero with grouping by calendar year, subunit code and mine ID beginning with 1983. The subunit code identifies the location or operation of the mine relating to the: (01) Underground; (02) Surface at underground; (03) Strip, quarry, open pit; (04) Auger; (05) Culm bank/refuse pile; (06) Dredge; (12) Other mining; (17) Independent shops or yards; (30) Mill operation/preparation plant; (99) Office workers at mine site.

<a href ="http://api.dol.gov/V1/Employment/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL%20Mine%20Employment%20Production%20Dataset" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables  

<div class="dsktp_tbl">
	<h3>MSHA_employmentProduction</h3> 
	<table summary="MSHA Employment Production">
		<caption>MSHA Employment Production</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">id</th>
				<td>Record ID - Primary Key</td>
				<td>bigint</td>
			</tr>
			<tr>
				<th scope="row">mineId</th>
				<td>Mine ID</td>
				<td>bigint</td>
			</tr>
			<tr>
				<th scope="row">mineName</th>
				<td>Mine Name</td>
				<td>varchar (150)</td>
			</tr>
			<tr>
				<th scope="row">state</th>
				<td>State where mine is</td>
				<td>varchar (150)</td>
			</tr>
			<tr>
				<th scope="row">subUnitCode</th>
				<td>Sub Unit code of the mine</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">subUnit</th>
				<td>Sub Unit of the mine</td>
				<td>varchar (150)</td>
			</tr>
			<tr>
				<th scope="row">calendarYear</th>
				<td>Mine Calendar Year</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">annualHours</th>
				<td>Miner Annual Hour</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">annualCostProduction</th>
				<td>Annual Cost Production</td>
				<td>bigint</td>
			</tr>
			<tr>
				<th scope="row">averageEmployeeCount</th>
				<td>Average Employee Count</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">averageEmployeeHours</th>
				<td>Average Employee Hours</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">coalMetalInd</th>
				<td>Coal Metal Indicator</td>
				<td>varchar (3)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h3>MSHA_employmentProduction</h3>
	<h4>MSHA Employment Production</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: id</p>
		<p><span class="mbl-strng">Column Description:</span> Record ID - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: mineId</p>
		<p><span class="mbl-strng">Column Description:</span> Mine ID</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: mineName</p>
		<p><span class="mbl-strng">Column Description:</span> Mine Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (150)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: state</p>
		<p><span class="mbl-strng">Column Description:</span> State where mine is</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (150)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: subUnitCode</p>
		<p><span class="mbl-strng">Column Description:</span> Sub Unit code of the mine</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: subUnit</p>
		<p><span class="mbl-strng">Column Description:</span> Sub Unit of the mine</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (150)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: calendarYear</p>
		<p><span class="mbl-strng">Column Description:</span> Mine Calendar Year</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: annualHours</p>
		<p><span class="mbl-strng">Column Description:</span> Miner Annual Hour 	</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: annualCostProduction</p>
		<p><span class="mbl-strng">Column Description:</span> Annual Cost Production</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: averageEmployeeCount</p>
		<p><span class="mbl-strng">Column Description:</span> Average Employee Count</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: averageEmployeeHours</p>
		<p><span class="mbl-strng">Column Description:</span> Average Employee Hours</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: coalMetalInd</p>
		<p><span class="mbl-strng">Column Description:</span> Coal Metal Indicator</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (3)</p>		
	</div>
</div>
