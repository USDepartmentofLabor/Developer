---
layout: post
title: Auto Workers
created: 1359571721
description: This dataset tells you Auto Companies which are closed or repurposed in the last couple of decades.
---

```
http://api.dol.gov/V1/AutoWorkers
```

<p>This dataset tells you Auto Companies which are closed or repurposed in the last couple of decades. It also shows you how successful or bad the closure process or the repurpose process is and in which state and city these companies found.</p>

<a href ="http://api.dol.gov/V1/AutoWorkers/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=Auto%20Workers%20Dataset" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables  

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
			<td>primary key of the table - Primary Key</td>
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
			<td>automaker plant name</td>
			<td>varchar (500)</td>
		</tr>
		<tr>
			<th scope="row">City</th>
			<td>automaker plant city</td>
			<td>varchar (50)</td>
		</tr>
		<tr>
			<th scope="row">State</th>
			<td>automaker plant state</td>
			<td>varchar (50)</td>
		</tr>
		<tr>
			<th scope="row">Plant_Product_Category</th>
			<td>plant product category</td>
			<td>varchar (50)</td>
		</tr>
		<tr>
			<th scope="row">Year_Closed_Scheduled_To_Close</th>
			<td>year closed or scheduled to be closed</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th scope="row">Current_Conditions</th>
			<td>current condition of the plant</td>
			<td>varchar (50)</td>
		</tr>
		<tr>
			<th scope="row">Automotive_Other</th>
			<td>automotive other</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th scope="row">Industrial_Automotive_MFG</th>
			<td>Industrial automotive manfacturing</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th scope="row">Commercial</th>
			<td>commercial</td>
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
			<td>vacant</td>
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
			<td>federal Incentives provided</td>
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
