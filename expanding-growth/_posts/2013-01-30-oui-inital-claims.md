---
layout: post
title: OUI Inital Claims
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
<h3>unemploymentInsuranceInitialClaims Table</h3>

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
			<td>ID - Primary key</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th>week</th>
			<td>Week</td>
			<td>datetime</td>
		</tr>
		<tr>
			<th>initialClaimsSeasonalFactor</th>
			<td>Initial Claims Seasonal Factor</td>
			<td>decimal(10,1)</td>
		</tr>
		<tr>
			<th>continuingClaimsSeasonalFactor</th>
			<td>Continuing Claims Seasonal Factor</td>
			<td>decimal(10,1)</td>
		</tr>
		<tr>
			<th>coveredEmployment</th>
			<td>coveredEmployment</td>
			<td>decimal(10,0)</td>
		</tr>
		<tr>
			<th>nonSeasonallyAdjustedInitialClaims</th>
			<td>Non Seasonally Adjusted Initial Claims</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th>seasonallyAdjustedInitialClaims</th>
			<td>Seasonally Adjusted Initial Claims</td>
			<td>int</td>
		</tr>
		<tr>
			<th>nonSeasonallyAdjustedContinuingClaims</th>
			<td>Non Seasonally Adjusted Continuing Claims</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th>seasonallyAdjustedContinuingClaims</th>
			<td>Seasonally Adjusted Continuing Claims</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th>seasonallyAdjustedInsuredUnemploymentRate</th>
			<td>Seasonally Adjusted Insured Unemployment Rate</td>
			<td>decimal(10,2)</td>
		</tr>
	</tbody>
</table>
