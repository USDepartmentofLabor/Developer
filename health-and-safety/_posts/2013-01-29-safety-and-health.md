---
layout: post
title: Safety & Health
created: 1359491704
description: Data related to safety and health in the workplace.
---

```
http://api.dol.gov/V1/SafetyHealth
```

<p>Data related to safety and health in the workplace.</p>

<a href ="http://api.dol.gov/V1/SafetyHealth/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables

- [ChemicalExposureInspection](#ChemicalExposureInspection)
- [EstablishmentSpecificInjuryIllnessRates](#EstablishmentSpecificInjuryIllnessRates)
  
<h3 id="ChemicalExposureInspection">ChemicalExposureInspection Table</h3>
<p>OSHA takes industrial hygiene samples as part of its compliance monitoring program. The following sampling results represent personal, area, and bulk samples for various airborne contaminants. More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://explore.data.gov/Labor-Force-Employment-and-Earnings/OSHA-Chemical-Exposure-Health-Data/zyuw-7agv&amp;exitTitle=OSHA Chemical Exposure Health Data&amp;fedpage=yes">http://explore.data.gov/Agriculture/Migrant-and-Seasonal-Agricultural-Protection-Act-M/bsvf-3e67</a></p>
<table summary="Chemical Exposure Inspection -Safety & Health">
	<caption>Chemical Exposure Inspection</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">inspection_number</th>
			<td>Inspection Number</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th scope="row">establishment_name</th>
			<td>Establishment Name</td>
			<td>nvarchar(50)</td>
		</tr>
		<tr>
			<th scope="row">city</th>
			<td>City</td>
			<td>nvarchar(30)</td>
		</tr>
		<tr>
			<th scope="row">state</th>
			<td>State</td>
			<td>nvarchar(2)</td>
		</tr>
		<tr>
			<th scope="row">zip_code</th>
			<td>Zip Code</td>
			<td>nvarchar(5)</td>
		</tr>
		<tr>
			<th scope="row">sic_code</th>
			<td>Sic Code</td>
			<td>int</td>
		</tr>
		<tr>
			<th scope="row">naics_code</th>
			<td>Naics Code</td>
			<td>int</td>
		</tr>
		<tr>
			<th scope="row">sampling_number</th>
			<td>Sampling Number</td>
			<td>numeric(20,4)</td>
		</tr>
		<tr>
			<th scope="row">office_id</th>
			<td>Office Id</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th scope="row">date_sampled</th>
			<td>Date Sampled</td>
			<td>nvarchar(25)</td>
		</tr>
		<tr>
			<th scope="row">date_reported</th>
			<td>Date Reported</td>
			<td>nvarchar(25)</td>
		</tr>
		<tr>
			<th scope="row">instrument_type</th>
			<td>Instrument Type</td>
			<td>nvarchar(16)</td>
		</tr>
		<tr>
			<th scope="row">lab_number</th>
			<td>Lab Number</td>
			<td>nvarchar(6)</td>
		</tr>
		<tr>
			<th scope="row">field_number</th>
			<td>Field Number</td>
			<td>nvarchar(25)</td>
		</tr>
		<tr>
			<th scope="row">sample_type</th>
			<td>Sample Type</td>
			<td>nvarchar(2)</td>
		</tr>
		<tr>
			<th scope="row">blank_used</th>
			<td>Blank Used</td>
			<td>nvarchar(1)</td>
		</tr>
		<tr>
			<th scope="row">time_sampled</th>
			<td>Time Sampled</td>
			<td>decimal(29,10)</td>
		</tr>
		<tr>
			<th scope="row">air_volume_sampled</th>
			<td>Air volume sampled</td>
			<td>nvarchar(10)</td>
		</tr>
		<tr>
			<th scope="row">sample_weight</th>
			<td>Sample Weight</td>
			<td>decimal(29,10)</td>
		</tr>
		<tr>
			<th scope="row">imis_substance_code</th>
			<td>Imis Substance Code</td>
			<td>nvarchar(4)</td>
		</tr>
		<tr>
			<th scope="row">substance</th>
			<td>Substance</td>
			<td>nvarchar(70)</td>
		</tr>
		<tr>
			<th scope="row">sample_result</th>
			<td>Sample Result</td>
			<td>decimal(29,10)</td>
		</tr>
		<tr>
			<th scope="row">qualifier</th>
			<td>Qualifier</td>
			<td>nvarchar(6)</td>
		</tr>
		<tr>
			<th scope="row">unit_of_measurement</th>
			<td>Unit_Of_Measurement</td>
			<td>nvarchar(5)</td>
		</tr>
		<tr>
			<th scope="row">RowId</th>
			<td>Row ID - Primary Key</td>
			<td>bigint</td>
		</tr>
	</tbody>
</table>

<h3 id="EstablishmentSpecificInjuryIllnessRates">EstablishmentSpecificInjuryIllnessRates Table</h3>
<p>Each year the Occupational Safety and Health Administration (OSHA) collects work-related injury and illness data from employers within specific industry and employment size specifications. This data collection is called the OSHA Data Initiative or ODI. The data provided is used by OSHA to calculate establishment specific injury and illness incidence rates.<br />
More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://explore.data.gov/Labor-Force-Employment-and-Earnings/OSHA-Data-Initiative-Establishment-Specific-Injury/i4a7-82ev&amp;exitTitle=Establishment%20Specific%20Injury%20and%20Illness%20Rates&amp;fedpage=yes">http://explore.data.gov/Labor-Force-Employment-and-Earnings/OSHA-Data-Initiative-Establishment-Specific-Injury/i4a7-82ev</a></p>
<table summary="Establishment Specific Injury Illness Rates -Safety & Health">
	<caption>Establishment Specific Injury Illness Rates</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">ROWID</th>
			<td>Row Id - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th scope="row">COMPANY</th>
			<td>Company</td>
			<td>varchar(100)</td>
		</tr>
		<tr>
			<th scope="row">NAME2</th>
			<td>Name</td>
			<td>varchar(100)</td>
		</tr>
		<tr>
			<th scope="row">STREET</th>
			<td>Street Address</td>
			<td>varchar(100)</td>
		</tr>
		<tr>
			<th scope="row">CITY</th>
			<td>City</td>
			<td>varchar(50)</td>
		</tr>
		<tr>
			<th scope="row">SIC</th>
			<td>Sic Code</td>
			<td>int</td>
		</tr>
		<tr>
			<th scope="row">TCR</th>
			<td>TCR</td>
			<td>numeric(5,2)</td>
		</tr>
		<tr>
			<th scope="row">DART</th>
			<td>DART</td>
			<td>numeric(5,2)</td>
		</tr>
		<tr>
			<th scope="row">DAFWII</th>
			<td>DAFWII</td>
			<td>numeric(5,2)</td>
		</tr>
	</tbody>
</table>
