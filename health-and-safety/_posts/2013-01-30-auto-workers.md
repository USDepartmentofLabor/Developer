---
layout: post
title: Auto Workers
created: 1359571721
version: V1
description: This dataset tells you Auto Companies which are closed or repurposed in the last couple of decades.
---

<div class="force_wrap apiurl">
<p>https://api.dol.gov/V1/AutoWorkers</p>
</div>

<p>This dataset tells you Auto Companies which are closed or repurposed in the last couple of decades. It also shows you how successful or bad the closure process or the repurpose process is and in which state and city these companies found.</p>

<a href ="http://api.dol.gov/V1/AutoWorkers/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=Auto%20Workers%20Dataset" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables  

<div>
	<h3 id="CAR_ClosedRepurposed">CAR_ClosedRepurposed Table</h3>
	<table class="accessible responsive" summary="Car Closed Repurposed - Auto Workers">
		<caption>Car Closed Repurposed</caption>
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
				Primary key of the table - Primary Key
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				Number_ID
			</th>
				<td>
				<span class="small">Data Type</span>
				bigint
			</td>
				<td>
				<span class="small">Column Description</span>
				Unique key of the table
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				Last_Automaker_Owner
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (150)
			</td>
				<td>
				<span class="small">Column Description</span>
				Last auto maker owner
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				Automaker_Plant_Name
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (500)
			</td>
				<td>
				<span class="small">Column Description</span>
				Automaker plant name
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				City
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (50)
			</td>
				<td>
				<span class="small">Column Description</span>
				Automaker plant city
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				State
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (50)
			</td>
				<td>
				<span class="small">Column Description</span>
				Automaker plant state
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				Plant_Product_Category
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (50)
			</td>
				<td>
				<span class="small">Column Description</span>
				Plant product category
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				Year_Closed_Scheduled_To_Close
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (10)
			</td>
				<td>
				<span class="small">Column Description</span>
				Year closed or scheduled to be closed
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				Current_Conditions
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (50)
			</td>
				<td>
				<span class="small">Column Description</span>
				Current condition of the plant
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
			    Automotive_Other
			   </th>
				<td>
				<span class="small">Data Type</span>
				varchar (10)
			</td>
				<td>
				<span class="small">Column Description</span>
				Automotive other
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				Industrial_Automotive_MFG
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (10)
			</td>
				<td>
				<span class="small">Column Description</span>
				Industrial automotive manfacturing
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				Commercial
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (10)
			</td>
				<td>
				<span class="small">Column Description</span>
				Commercial
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				Industrial
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (10)
			</td>
				<td>
				<span class="small">Column Description</span>
				Industrial
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				Logistics_And_Warehousing
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (10)
			</td>
				<td>
				<span class="small">Column Description</span>
			  Logistics and warehousing
			 </td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				Education
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (10)
			</td>
				<td>
				<span class="small">Column Description</span>
				Education
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				Research_and_Development
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (10)
			</td>
				<td>
				<span class="small">Column Description</span>
				Research and Development
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				Recreational
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (10)
			</td>
				<td>
				<span class="small">Column Description</span>
				Recreational
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				Government
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (10)
			</td>
				<td>
				<span class="small">Column Description</span>
				Government
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				Residential
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (10)
			</td>
				<td>
				<span class="small">Column Description</span>
				Residential
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				Vacant
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (10)
			</td>
				<td>
				<span class="small">Column Description</span>
				Vacant
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				Demolished
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (10)
			</td>
				<td>
				<span class="small">Column Description</span>
				Demolished
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				Specific_Reuse_Notes
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (Max)
			</td>
				<td>
				<span class="small">Column Description</span>
				Specific reuse notes
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				Federal_Incentives_Provided
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (Max)
			</td>
				<td>
				<span class="small">Column Description</span>
				Federal Incentives provided
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				State_Incentives_Provided
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (Max)
			</td>
				<td>
				<span class="small">Column Description</span>
				State Incentives provided
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				Local_Incentives_Provided
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (Max)
			</td>
				<td>
				<span class="small">Column Description</span>
				Local Incentives Provided
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				Local_or_Regional_Foundation_Assistance
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (Max)
			</td>
				<td>
				<span class="small">Column Description</span>
				Local or Regional Foundation Assistance
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				SuccessInPropertyValueRestoration5VS1NS
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (30)
			</td>
				<td>
				<span class="small">Column Description</span>
				Success In Property Value Restoration 5 is very successfull and 1 is Not at all successful
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				SuccessInRestoringJobBase5VS1NS
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (30)
			</td>
				<td>
				<span class="small">Column Description</span>
				Success In Restoring Job Base 5 is very successful and 1 is not at all successful
			</td>
			</tr>
		</tbody>
	</table>
</div>
