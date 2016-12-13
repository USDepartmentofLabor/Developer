---
layout: post
title: Auto Workers
created: 1359571721
description: This dataset tells you Auto Companies which are closed or repurposed in the last couple of decades.
categories: [health-and-safety, dataset]
---

<div class="force_wrap apiurl">
<p>http://api.dol.gov/V1/AutoWorkers</p>
</div>

<p>This dataset tells you Auto Companies which are closed or repurposed in the last couple of decades. It also shows you how successful or bad the closure process or the repurpose process is and in which state and city these companies found.</p>

<a href ="http://api.dol.gov/V1/AutoWorkers/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=Auto%20Workers%20Dataset" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables  

<div class="dsktp_tbl">
	<h3>CAR_ClosedRepurposed</h3>
	<table summary="Car Closed Repurposed - Auto Workers">
		<caption>Car Closed Repurposed</caption>
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
				<td>Primary key of the table - Primary Key</td>
				<td>bigint</td>
			</tr>
			<tr>
				<th scope="row">Number_ID</th>
				<td>Unique key of the table</td>
				<td>bigint</td>
			</tr>
			<tr>
				<th scope="row">Last_Automaker_Owner</th>
				<td>Last auto maker owner</td>
				<td>varchar (150)</td>
			</tr>
			<tr>
				<th scope="row">Automaker_Plant_Name</th>
				<td>Automaker plant name</td>
				<td>varchar (500)</td>
			</tr>
			<tr>
				<th scope="row">City</th>
				<td>Automaker plant city</td>
				<td>varchar (50)</td>
			</tr>
			<tr>
				<th scope="row">State</th>
				<td>Automaker plant state</td>
				<td>varchar (50)</td>
			</tr>
			<tr>
				<th scope="row">Plant_Product_Category</th>
				<td>Plant product category</td>
				<td>varchar (50)</td>
			</tr>
			<tr>
				<th scope="row">Year_Closed_Scheduled_To_Close</th>
				<td>Year closed or scheduled to be closed</td>
				<td>varchar (10)</td>
			</tr>
			<tr>
				<th scope="row">Current_Conditions</th>
				<td>Current condition of the plant</td>
				<td>varchar (50)</td>
			</tr>
			<tr>
				<th scope="row">Automotive_Other</th>
				<td>Automotive other</td>
				<td>varchar (10)</td>
			</tr>
			<tr>
				<th scope="row">Industrial_Automotive_MFG</th>
				<td>Industrial automotive manfacturing</td>
				<td>varchar (10)</td>
			</tr>
			<tr>
				<th scope="row">Commercial</th>
				<td>Commercial</td>
				<td>varchar (10)</td>
			</tr>
			<tr>
				<th scope="row">Industrial</th>
				<td>Industrial</td>
				<td>varchar (10)</td>
			</tr>
			<tr>
				<th scope="row">Logistics_And_Warehousing</th>
				<td>Logistics and warehousing</td>
				<td>varchar (10)</td>
			</tr>
			<tr>
				<th scope="row">Education</th>
				<td>Education</td>
				<td>varchar (10)</td>
			</tr>
			<tr>
				<th scope="row">Research_and_Development</th>
				<td>Research and Development</td>
				<td>varchar (10)</td>
			</tr>
			<tr>
				<th scope="row">Recreational</th>
				<td>Recreational</td>
				<td>varchar (10)</td>
			</tr>
			<tr>
				<th scope="row">Government</th>
				<td>Government</td>
				<td>varchar (10)</td>
			</tr>
			<tr>
				<th scope="row">Residential</th>
				<td>Residential</td>
				<td>varchar (10)</td>
			</tr>
			<tr>
				<th scope="row">Vacant</th>
				<td>Vacant</td>
				<td>varchar (10)</td>
			</tr>
			<tr>
				<th scope="row">Demolished</th>
				<td>Demolished</td>
				<td>varchar (10)</td>
			</tr>
			<tr>
				<th scope="row">Specific_Reuse_Notes</th>
				<td>Specific reuse notes</td>
				<td>varchar (Max)</td>
			</tr>
			<tr>
				<th scope="row">Federal_Incentives_Provided</th>
				<td>Federal Incentives provided</td>
				<td>varchar (Max)</td>
			</tr>
			<tr>
				<th scope="row">State_Incentives_Provided</th>
				<td>State Incentives provided</td>
				<td>varchar (Max)</td>
			</tr>
			<tr>
				<th scope="row">Local_Incentives_Provided</th>
				<td>Local Incentives Provided</td>
				<td>varchar (Max)</td>
			</tr>
			<tr>
				<th scope="row">Local_or_Regional_Foundation_Assistance</th>
				<td>Local or Regional Foundation Assistance</td>
				<td>varchar (Max)</td>
			</tr>
			<tr>
				<th scope="row">SuccessInPropertyValueRestoration5VS1NS</th>
				<td>Success In Property Value Restoration 5 is very successfull and 1 is Not at all successful</td>
				<td>varchar (30)</td>
			</tr>
			<tr>
				<th scope="row">SuccessInRestoringJobBase5VS1NS</th>
				<td>Success In Restoring Job Base 5 is very successful and 1 is not at all successful</td>
				<td>varchar (30)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h3>CAR_ClosedRepurposed</h3>
	<h4>Car Closed Repurposed</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: id</p>
		<p><span class="mbl-strng">Column Description:</span> Primary key of the table - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: Number_ID</p>
		<p><span class="mbl-strng">Column Description:</span> Unique key of the table 	</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: Last_Automaker_Owner</p>
		<p><span class="mbl-strng">Column Description:</span> Last auto maker owner</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (150)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: Automaker_Plant_Name</p>
		<p><span class="mbl-strng">Column Description:</span> Automaker plant name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (500)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: City</p>
		<p><span class="mbl-strng">Column Description:</span> Automaker plant city</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (50)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: State</p>
		<p><span class="mbl-strng">Column Description:</span> Automaker plant state</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (50)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: Plant_Product_Category</p>
		<p><span class="mbl-strng">Column Description:</span> Plant product category</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (50)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: Year_Closed_Scheduled_To_Close</p>
		<p><span class="mbl-strng">Column Description:</span> Year closed or scheduled to be closed</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: Current_Conditions</p>
		<p><span class="mbl-strng">Column Description:</span> Current condition of the plant</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: Automotive_Other</p>
		<p><span class="mbl-strng">Column Description:</span> Automotive other</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: Industrial_Automotive_MFG</p>
		<p><span class="mbl-strng">Column Description:</span> Industrial automotive manfacturing</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: Commercial</p>
		<p><span class="mbl-strng">Column Description:</span> Commercial</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: Industrial</p>
		<p><span class="mbl-strng">Column Description:</span> Industrial</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: Logistics_And_Warehousing</p>
		<p><span class="mbl-strng">Column Description:</span> Logistics and warehousing</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: Education</p>
		<p><span class="mbl-strng">Column Description:</span> Education</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: Research_and_Development</p>
		<p><span class="mbl-strng">Column Description:</span> Research and Development</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: Recreational</p>
		<p><span class="mbl-strng">Column Description:</span> Recreational</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: Government</p>
		<p><span class="mbl-strng">Column Description:</span> Government</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: Residential</p>
		<p><span class="mbl-strng">Column Description:</span> Residential</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: Vacant</p>
		<p><span class="mbl-strng">Column Description:</span> Vacant</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: Demolished</p>
		<p><span class="mbl-strng">Column Description:</span> Demolished</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: Specific_Reuse_Notes</p>
		<p><span class="mbl-strng">Column Description:</span> Specific reuse notes</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (Max)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: Federal_Incentives_Provided</p>
		<p><span class="mbl-strng">Column Description:</span> Federal Incentives provided 	</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (Max)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: State_Incentives_Provided</p>
		<p><span class="mbl-strng">Column Description:</span> State Incentives provided</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (Max)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: Local_Incentives_Provided</p>
		<p><span class="mbl-strng">Column Description:</span> Local Incentives Provided</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (Max)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: Local_or_Regional_Foundation_Assistance</p>
		<p><span class="mbl-strng">Column Description:</span> Local or Regional Foundation Assistance</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (Max)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: SuccessInPropertyValueRestoration5VS1NS</p>
		<p><span class="mbl-strng">Column Description:</span> Success In Property Value Restoration 5 is very successfull and 1 is Not at all successful</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (30)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: SuccessInRestoringJobBase5VS1NS</p>
		<p><span class="mbl-strng">Column Description:</span> Success In Restoring Job Base 5 is very successful and 1 is not at all successful</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (30)</p>		
	</div>
</div>
