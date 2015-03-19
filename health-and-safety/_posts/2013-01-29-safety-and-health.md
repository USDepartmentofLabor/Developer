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
<a href ="http://developer.dol.gov/DOL-SafetyHealth-DATASET.htm" class="button radius button_dataset">Explore This Data</a>


## Dataset Tables

- [ChemicalExposureInspection](#ChemicalExposureInspection)
- [EstablishmentSpecificInjuryIllnessRates](#EstablishmentSpecificInjuryIllnessRates)
  
<h3><a name="ChemicalExposureInspection">ChemicalExposureInspection Table</a></h3>

<p>OSHA takes industrial hygiene samples as part of its compliance monitoring program. The following sampling results represent personal, area, and bulk samples for various airborne contaminants. More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://explore.data.gov/Labor-Force-Employment-and-Earnings/OSHA-Chemical-Exposure-Health-Data/zyuw-7agv&amp;exitTitle=OSHA Chemical Exposure Health Data&amp;fedpage=yes">http://explore.data.gov/Agriculture/Migrant-and-Seasonal-Agricultural-Protection-Act-M/bsvf-3e67</a></p>

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
			<th>inspection_number</th>
			<td>Inspection Number</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th>establishment_name</th>
			<td>Establishment Name</td>
			<td>nvarchar(50)</td>
		</tr>
		<tr>
			<th>city</th>
			<td>City</td>
			<td>nvarchar(30)</td>
		</tr>
		<tr>
			<th>state</th>
			<td>State</td>
			<td>nvarchar(2)</td>
		</tr>
		<tr>
			<th>zip_code</th>
			<td>Zip Code</td>
			<td>nvarchar(5)</td>
		</tr>
		<tr>
			<th>sic_code</th>
			<td>Sic Code</td>
			<td>int</td>
		</tr>
		<tr>
			<th>naics_code</th>
			<td>Naics Code</td>
			<td>int</td>
		</tr>
		<tr>
			<th>sampling_number</th>
			<td>Sampling Number</td>
			<td>numeric(20,4)</td>
		</tr>
		<tr>
			<th>office_id</th>
			<td>Office Id</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th>date_sampled</th>
			<td>Date Sampled</td>
			<td>nvarchar(25)</td>
		</tr>
		<tr>
			<th>date_reported</th>
			<td>Date Reported</td>
			<td>nvarchar(25)</td>
		</tr>
		<tr>
			<th>instrument_type</th>
			<td>Instrument Type</td>
			<td>nvarchar(16)</td>
		</tr>
		<tr>
			<th>lab_number</th>
			<td>Lab Number</td>
			<td>nvarchar(6)</td>
		</tr>
		<tr>
			<th>field_number</th>
			<td>Field Number</td>
			<td>nvarchar(25)</td>
		</tr>
		<tr>
			<th>sample_type</th>
			<td>Sample Type</td>
			<td>nvarchar(2)</td>
		</tr>
		<tr>
			<th>blank_used</th>
			<td>Blank Used</td>
			<td>nvarchar(1)</td>
		</tr>
		<tr>
			<th>time_sampled</th>
			<td>Time Sampled</td>
			<td>decimal(29,10)</td>
		</tr>
		<tr>
			<th>air_volume_sampled</th>
			<td>Air volume sampled</td>
			<td>nvarchar(10)</td>
		</tr>
		<tr>
			<th>sample_weight</th>
			<td>Sample Weight</td>
			<td>decimal(29,10)</td>
		</tr>
		<tr>
			<th>imis_substance_code</th>
			<td>Imis Substance Code</td>
			<td>nvarchar(4)</td>
		</tr>
		<tr>
			<th>substance</th>
			<td>Substance</td>
			<td>nvarchar(70)</td>
		</tr>
		<tr>
			<th>sample_result</th>
			<td>Sample Result</td>
			<td>decimal(29,10)</td>
		</tr>
		<tr>
			<th>qualifier</th>
			<td>Qualifier</td>
			<td>nvarchar(6)</td>
		</tr>
		<tr>
			<th>unit_of_measurement</th>
			<td>Unit_Of_Measurement</td>
			<td>nvarchar(5)</td>
		</tr>
		<tr>
			<th>RowId</th>
			<td>Row ID - Primary Key</td>
			<td>bigint</td>
		</tr>
	</tbody>
</table>
<h3><a name="EstablishmentSpecificInjuryIllnessRates">EstablishmentSpecificInjuryIllnessRates Table</a></h3>

<p>Each year the Occupational Safety and Health Administration (OSHA) collects work-related injury and illness data from employers within specific industry and employment size specifications. This data collection is called the OSHA Data Initiative or ODI. The data provided is used by OSHA to calculate establishment specific injury and illness incidence rates.<br />
More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://explore.data.gov/Labor-Force-Employment-and-Earnings/OSHA-Data-Initiative-Establishment-Specific-Injury/i4a7-82ev&amp;exitTitle=Establishment%20Specific%20Injury%20and%20Illness%20Rates&amp;fedpage=yes">http://explore.data.gov/Labor-Force-Employment-and-Earnings/OSHA-Data-Initiative-Establishment-Specific-Injury/i4a7-82ev</a></p>

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
			<th>ROWID</th>
			<td>Row Id - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>COMPANY</th>
			<td>Company</td>
			<td>varchar(100)</td>
		</tr>
		<tr>
			<th>NAME2</th>
			<td>Name</td>
			<td>varchar(100)</td>
		</tr>
		<tr>
			<th>STREET</th>
			<td>Street Address</td>
			<td>varchar(100)</td>
		</tr>
		<tr>
			<th>CITY</th>
			<td>City</td>
			<td>varchar(50)</td>
		</tr>
		<tr>
			<th>SIC</th>
			<td>Sic Code</td>
			<td>int</td>
		</tr>
		<tr>
			<th>TCR</th>
			<td>TCR</td>
			<td>numeric(5,2)</td>
		</tr>
		<tr>
			<th>DART</th>
			<td>DART</td>
			<td>numeric(5,2)</td>
		</tr>
		<tr>
			<th>DAFWII</th>
			<td>DAFWII</td>
			<td>numeric(5,2)</td>
		</tr>
	</tbody>
</table>
