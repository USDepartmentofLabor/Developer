---
layout: post
title: Auto Workers Dataset
created: 1359571721
---

```
http://api.dol.gov/V1/AutoWorkers
```

<p>This dataset tells you Auto Companies which are closed or repurposed in the last couple of decades. It also shows you how successful or bad the closure process or the repurpose process is and in which state and city these companies found.</p>


### Dataset Metadata  
http://api.dol.gov/V1/AutoWorkers/$metadata

[Sample the Auto Workers Dataset](https://devtools.dol.gov/APISampler/Home/Index1?datasetName=Auto%20Workers%20Dataset)  

### Dataset Tables:  
<h3>CAR_ClosedRepurposed</h3>

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
			<th>id</th>
			<td>primary key of the table - Primary Key</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th>Number_ID</th>
			<td>Unique key of the table</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th>Last_Automaker_Owner</th>
			<td>Last auto maker owner</td>
			<td>varchar (150)</td>
		</tr>
		<tr>
			<th>Automaker_Plant_Name</th>
			<td>automaker plant name</td>
			<td>varchar (500)</td>
		</tr>
		<tr>
			<th>City</th>
			<td>automaker plant city</td>
			<td>varchar (50)</td>
		</tr>
		<tr>
			<th>State</th>
			<td>automaker plant state</td>
			<td>varchar (50)</td>
		</tr>
		<tr>
			<th>Plant_Product_Category</th>
			<td>plant product category</td>
			<td>varchar (50)</td>
		</tr>
		<tr>
			<th>Year_Closed_Scheduled_To_Close</th>
			<td>year closed or scheduled to be closed</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>Current_Conditions</th>
			<td>current condition of the plant</td>
			<td>varchar (50)</td>
		</tr>
		<tr>
			<th>Automotive_Other</th>
			<td>automotive other</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>Industrial_Automotive_MFG</th>
			<td>Industrial automotive manfacturing</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>Commercial</th>
			<td>commercial</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>Industrial</th>
			<td>Industrial</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>Logistics_And_Warehousing</th>
			<td>Logistics and warehousing</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>Education</th>
			<td>Education</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>Research_and_Development</th>
			<td>Research and Development</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>Recreational</th>
			<td>Recreational</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>Government</th>
			<td>Government</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>Residential</th>
			<td>Residential</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>Vacant</th>
			<td>vacant</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>Demolished</th>
			<td>Demolished</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>Specific_Reuse_Notes</th>
			<td>Specific reuse notes</td>
			<td>varchar (Max)</td>
		</tr>
		<tr>
			<th>Federal_Incentives_Provided</th>
			<td>federal Incentives provided</td>
			<td>varchar (Max)</td>
		</tr>
		<tr>
			<th>State_Incentives_Provided</th>
			<td>State Incentives provided</td>
			<td>varchar (Max)</td>
		</tr>
		<tr>
			<th>Local_Incentives_Provided</th>
			<td>Local Incentives Provided</td>
			<td>varchar (Max)</td>
		</tr>
		<tr>
			<th>Local_or_Regional_Foundation_Assistance</th>
			<td>Local or Regional Foundation Assistance</td>
			<td>varchar (Max)</td>
		</tr>
		<tr>
			<th>SuccessInPropertyValueRestoration5VS1NS</th>
			<td>Success In Property Value Restoration 5 is very successfull and 1 is Not at all successful</td>
			<td>varchar (30)</td>
		</tr>
		<tr>
			<th>SuccessInRestoringJobBase5VS1NS</th>
			<td>Success In Restoring Job Base 5 is very successful and 1 is not at all successful</td>
			<td>varchar (30)</td>
		</tr>
	</tbody>
</table>
