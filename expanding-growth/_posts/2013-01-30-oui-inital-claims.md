---
layout: post
title: OUI Initial Claims
created: 1359571923
version: V1
description: OUI Initial claims dataset contains the non-seasonally and seasonally adjusted Unemployment Insurance Initial Claims time-series data at the National level.
---

<div class="force_wrap apiurl">
<p>https://api.dol.gov/V1/Statistics/OUI_InitialClaims</p>
</div>

<p>OUI Initial claims dataset contains the non-seasonally and seasonally adjusted Unemployment Insurance Initial Claims time-series data at the National level.</p>

<a href ="http://api.dol.gov/V1/Statistics/OUI_InitialClaims/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=OUI%20Initial%20Claims" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables  

<div>
	<h3>unemploymentInsuranceInitialClaims Table</h3>
	<table class="accessible responsive" summary="Unemployment Insurance Initial Claims Table">
		<caption>Unemployment Insurance Initial Claims Table</caption>
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
					ID - Primary key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					week
				</th>
				<td>
					<span class="small">Data Type</span>
					datetime
				</td>
				<td>
					<span class="small">Column Description</span>
					Week
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					initialClaimsSeasonalFactor
				</th>
				<td>
					<span class="small">Data Type</span>
					decimal(10,1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Initial Claims Seasonal Factor
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					continuingClaimsSeasonalFactor
				</th>
				<td>
					<span class="small">Data Type</span>
					decimal(10,1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Continuing Claims Seasonal Factor
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					coveredEmployment
				</th>
				<td>
					<span class="small">Data Type</span>
					decimal(10,0)
				</td>
				<td>
					<span class="small">Column Description</span>
					Covered Employment
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					nonSeasonallyAdjustedInitialClaims
				</th>
				<td>
					<span class="small">Data Type</span>
					bigint
				</td>
				<td>
					<span class="small">Column Description</span>
					Non Seasonally Adjusted Initial Claims
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					seasonallyAdjustedInitialClaims
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Seasonally Adjusted Initial Claims
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					nonSeasonallyAdjustedContinuingClaims
				</th>
				<td>
					<span class="small">Data Type</span>
					bigint
				</td>
				<td>
					<span class="small">Column Description</span>
					Non Seasonally Adjusted Continuing Claims
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					seasonallyAdjustedContinuingClaims
				</th>
				<td>
					<span class="small">Data Type</span>
					bigint
				</td>
				<td>
					<span class="small">Column Description</span>
					Seasonally Adjusted Continuing Claims
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					seasonallyAdjustedInsuredUnemploymentRate
				</th>
				<td>
					<span class="small">Data Type</span>
					decimal(10,2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Seasonally Adjusted Insured Unemployment Rate
				</td>
			</tr>
		</tbody>
	</table>
</div>