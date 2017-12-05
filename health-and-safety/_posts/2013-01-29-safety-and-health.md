---
layout: post
title: Safety and Health
created: 1359491704
version: V1
description: Data related to safety and health in the workplace.
---

<div class="force_wrap apiurl">
<p>http://api.dol.gov/V1/SafetyHealth</p>
</div>

<p>Data related to safety and health in the workplace.</p>

<a href ="http://api.dol.gov/V1/SafetyHealth/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables

<ul>
	<li><a href="#ChemicalExposureInspections">ChemicalExposureInspections</a></li>
	<li><a href="#EstablishmentSpecificInjuryIllnessRates">EstablishmentSpecificInjuryIllnessRates</a></li>
</ul>
  
<h3 id="ChemicalExposureInspections" tabindex="-1">ChemicalExposureInspections Table</h3>
<p>OSHA takes industrial hygiene samples as part of its compliance monitoring program. The following sampling results represent personal, area, and bulk samples for various airborne contaminants.More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=https://catalog.data.gov/dataset/safety-health-chemical-exposure-inspection&amp;exitTitle=OSHA Chemical Exposure Health Data&amp;fedpage=yes">https://catalog.data.gov/dataset/safety-health-chemical-exposure-inspection</a></p>

<div>
	<table class="accessible responsive" summary="Chemical Exposure Inspection - Safety & Health">
		<caption>Chemical Exposure Inspection</caption>
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
				inspection_number
			</th>
				<td>
				<span class="small">Data Type</span>
				bigint
			</td>
				<td>
				<span class="small">Column Name</span>
				Inspection Number
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				establishment_name
			</th>
				<td>
				<span class="small">Data Type</span>
				nvarchar(50)
			</td>
				<td>
				<span class="small">Column Description</span>
				Establishment Name
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
			    city
			  </th>
				<td>
				<span class="small">Data Type</span>
				nvarchar(30)
			</td>
				<td>
				<span class="small">Column Description</span>
				City
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				state
			</th>
				<td>
				<span class="small">Data Type</span>
				nvarchar(2)
			</td>
				<td>
				<span class="small">Column Description</span>
				State
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				zip_code
			</th>
				<td>
				<span class="small">Data Type</span>
				nvarchar(5)
			</td>
				<td>
				<span class="small">Column Description</span>
				Zip Code
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				sic_code
			</th>
				<td>
				<span class="small">Data Type</span>
				int
			</td>
				<td>
				<span class="small">Column Description</span>
				Sic Code
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				naics_code
			</th>
				<td>
				<span class="small">Data Type</span>
				int
			</td>
				<td>
				<span class="small">Column Description</span>
				Naics Code
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				sampling_number
			</th>
				<td>
				<span class="small">Data Type</span>
				numeric(20,4)
			</td>
				<td>
				<span class="small">Column Description</span>
				Sampling Number
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				office_id
			</th>
				<td>
				<span class="small">Data Type</span>
				bigint
			</td>
				<td>
				<span class="small">Column Description</span>
				Office Id
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				date_sampled
			</th>
				<td>
				<span class="small">Data Type</span>
				nvarchar(25)
			</td>
				<td>
				<span class="small">Column Description</span>
				Date Sampled
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				date_reported
			</th>
				<td>
				<span class="small">Data Type</span>
				nvarchar(25)
			</td>
				<td>
				<span class="small">Column Description</span>
				Date Reported
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				instrument_type
			</th>
				<td>
				<span class="small">Data Type</span>
				nvarchar(16)
			</td>
				<td>
				<span class="small">Column Description</span>
				Instrument Type
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				lab_number
			</th>
				<td>
				<span class="small">Data Type</span>
				nvarchar(6)
			</td>
				<td>
				<span class="small">Column Description</span>
				Lab Number
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				field_number
			</th>
				<td>
				<span class="small">Data Type</span>
				nvarchar(25)
			</td>
				<td>
				<span class="small">Column Description</span>
				Field Number
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				sample_type
			</th>
				<td>
				<span class="small">Data Type</span>
				nvarchar(2)
			</td>
				<td>
				<span class="small">Column Description</span>
				Sample Type
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				blank_used
			</th>
				<td>
				<span class="small">Data Type</span>
				nvarchar(1)
			</td>
				<td>
				<span class="small">Column Description</span>
				Blank Used
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				time_sampled
			</th>
				<td>
				<span class="small">Data Type</span>
				decimal(29,10)
			</td>
				<td>
				<span class="small">Column Description</span>
				Time Sampled
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				air_volume_sampled
			</th>
				<td>
				<span class="small">Data Type</span>
				nvarchar(10)
			</td>
				<td>
				<span class="small">Column Description</span>
				Air volume sampled
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				sample_weight
			</th>
				<td>
				<span class="small">Data Type</span>
				decimal(29,10)
			</td>
				<td>
				<span class="small">Column Description</span>
				Sample Weight
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				imis_substance_code
			</th>
				<td>
				<span class="small">Data Type</span>
				nvarchar(4)
			</td>
				<td>
				<span class="small">Column Description</span>
				Imis Substance Code
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				substance
			</th>
				<td>
				<span class="small">Data Type</span>
				nvarchar(70)
			</td>
				<td>
				<span class="small">Column Description</span>
				Substance
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				sample_result
			</th>
				<td>
				<span class="small">Data Type</span>
				decimal(29,10)
			</td>
				<td>
				<span class="small">Column Description</span>
				Sample Result
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				qualifier
			</th>
				<td>
				<span class="small">Data Type</span>
				nvarchar(6)
			</td>
				<td>
				<span class="small">Column Description</span>
				Qualifier
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				unit_of_measurement
			</th>
				<td>
            <span class="small">Data Type</span>				
				nvarchar(5)
			</td>
				<td>
				<span class="small">Column Description</span>
				Unit_Of_Measurement
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				RowId
			</th>
				<td>
				<span class="small">Data Type</span>
				bigint
			</td>
				<td>
				<span class="small">Column Description</span>
				Row ID - Primary Key
			</td>
				
			</tr>
		</tbody>
	</table>
</div>

<h3 id="EstablishmentSpecificInjuryIllnessRates">Establishment Specific Injury Illness Rates - Safety and Health Table</h3>
<p>Each year the Occupational Safety and Health Administration (OSHA) collects work-related injury and illness data from employers within specific industry and employment size specifications. This data collection is called the OSHA Data Initiative or ODI. The data provided is used by OSHA to calculate establishment specific injury and illness incidence rates. More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=https://catalog.data.gov/dataset/safety-health-establishment-specific-injury-illness-rates&amp;exitTitle=Establishment%20Specific%20Injury%20and%20Illness%20Rates&amp;fedpage=yes">https://catalog.data.gov/dataset/safety-health-establishment-specific-injury-illness-rates</a></p>

<div>
	<table class="accessible responsive"  summary="Establishment Specific Injury Illness Rates - Safety and Health">
		<caption>Establishment Specific Injury Illness Rates</caption>
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
				ROWID
			</th>
				<td>
				<span class="small">Data Type</span>
				int
			</td>
				<td>
				<span class="small">Column Description</span>
				Row Id - Primary Key
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				COMPANY
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(100)
			</td>
				<td>
				<span class="small">Column Description</span>
				Company
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				NAME2
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(100)
			</td>
				<td>
				<span class="small">Column Description</span>
				Name
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				STREET
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(100)
			</td>
				<td>
				<span class="small">Column Description</span>
				Street Address
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				CITY
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar(50)
			</td>
				<td>
				<span class="small">Column Description</span>
				City
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				SIC
			</th>
				<td>
				<span class="small">Data Type</span>
				int
			</td>
				<td>
				<span class="small">Column Description</span>
				Sic Code
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				TCR
			</th>
				<td>
				<span class="small">Data Type</span>
				numeric(5,2)
			</td>
				<td>
				<span class="small">Column Description</span>
				TCR
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				DART
			</th>
				<td>
				<span class="small">Data Type</span>
				numeric(5,2)
			</td>
				<td>
				<span class="small">Column Description</span>
				DART
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				DAFWII
			</th>
				<td>
				<span class="small">Data Type</span>
				numeric(5,2)
			</td>
				<td>
				<span class="small">Column Description</span>
				DAFWII
			</td>
				
			</tr>
		</tbody>
	</table>
</div>

