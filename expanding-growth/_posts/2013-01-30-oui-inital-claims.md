---
layout: post
title: OUI Inital Claims - United States Department of Labor Developer Portal
created: 1359571923
description: OUI Initial claims dataset contains the non-seasonally and seasonally adjusted Unemployment Insurance Initial Claims time-series data at the National level.
---

```
http://api.dol.gov/V1/Statistics/OUI_InitialClaims
```

<p>OUI Initial claims dataset contains the non-seasonally and seasonally adjusted Unemployment Insurance Initial Claims time-series data at the National level.</p>

<a href ="http://api.dol.gov/V1/Statistics/OUI_InitialClaims/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=OUI%20Initial%20Claims" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables  

<div class="dsktp_tbl">
	<h3>unemploymentInsuranceInitialClaims Table</h3>
	<table summary="Unemployment Insurance Initial Claims Table">
		<caption>Unemployment Insurance Initial Claims Table</caption>
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
				<td>ID - Primary key</td>
				<td>bigint</td>
			</tr>
			<tr>
				<th scope="row">week</th>
				<td>Week</td>
				<td>datetime</td>
			</tr>
			<tr>
				<th scope="row">initialClaimsSeasonalFactor</th>
				<td>Initial Claims Seasonal Factor</td>
				<td>decimal(10,1)</td>
			</tr>
			<tr>
				<th scope="row">continuingClaimsSeasonalFactor</th>
				<td>Continuing Claims Seasonal Factor</td>
				<td>decimal(10,1)</td>
			</tr>
			<tr>
				<th scope="row">coveredEmployment</th>
				<td>Covered Employment</td>
				<td>decimal(10,0)</td>
			</tr>
			<tr>
				<th scope="row">nonSeasonallyAdjustedInitialClaims</th>
				<td>Non Seasonally Adjusted Initial Claims</td>
				<td>bigint</td>
			</tr>
			<tr>
				<th scope="row">seasonallyAdjustedInitialClaims</th>
				<td>Seasonally Adjusted Initial Claims</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">nonSeasonallyAdjustedContinuingClaims</th>
				<td>Non Seasonally Adjusted Continuing Claims</td>
				<td>bigint</td>
			</tr>
			<tr>
				<th scope="row">seasonallyAdjustedContinuingClaims</th>
				<td>Seasonally Adjusted Continuing Claims</td>
				<td>bigint</td>
			</tr>
			<tr>
				<th scope="row">seasonallyAdjustedInsuredUnemploymentRate</th>
				<td>Seasonally Adjusted Insured Unemployment Rate</td>
				<td>decimal(10,2)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h3>unemploymentInsuranceInitialClaims Table</h3>
	<h4>Unemployment Insurance Initial Claims Table</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: id</p>
		<p><span class="mbl-strng">Column Description:</span> ID - Primary key</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: week</p>
		<p><span class="mbl-strng">Column Description:</span> Week</p>
		<p><span class="mbl-strng">Data Type:</span> datetime</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: initialClaimsSeasonalFactor</p>
		<p><span class="mbl-strng">Column Description:</span> Initial Claims Seasonal Factor</p>
		<p><span class="mbl-strng">Data Type:</span> decimal(10,1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: continuingClaimsSeasonalFactor</p>
		<p><span class="mbl-strng">Column Description:</span> Continuing Claims Seasonal Factor</p>
		<p><span class="mbl-strng">Data Type:</span> decimal(10,1)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: coveredEmployment</p>
		<p><span class="mbl-strng">Column Description:</span> Covered Employment</p>
		<p><span class="mbl-strng">Data Type:</span> decimal(10,0)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: nonSeasonallyAdjustedInitialClaims</p>
		<p><span class="mbl-strng">Column Description:</span> Non Seasonally Adjusted Initial Claims</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: seasonallyAdjustedInitialClaims</p>
		<p><span class="mbl-strng">Column Description:</span> Seasonally Adjusted Initial Claims</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: nonSeasonallyAdjustedContinuingClaims</p>
		<p><span class="mbl-strng">Column Description:</span> Non Seasonally Adjusted Continuing Claims</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: seasonallyAdjustedContinuingClaims</p>
		<p><span class="mbl-strng">Column Description:</span> Seasonally Adjusted Continuing Claims</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: seasonallyAdjustedInsuredUnemploymentRate</p>
		<p><span class="mbl-strng">Column Description:</span> Seasonally Adjusted Insured Unemployment Rate</p>
		<p><span class="mbl-strng">Data Type:</span> decimal(10,2)</p>		
	</div>
</div>
