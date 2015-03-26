---
layout: post
title: Injuries And Illness
created: 1359641735
description: The Injuries, Illnesses, and Fatalities (IIF) program provides annual information on the rate and number of work related injuries, illnesses, and fatal injuries, and how these statistics vary by incident, industry, geography, occupation, and other characteristics.
---

```
http://api.dol.gov/V1/Safety/InjuriesAndIllness
```

<p>The Injuries, Illnesses, and Fatalities (IIF) program provides annual information on the rate and number of work related injuries, illnesses, and fatal injuries, and how these statistics vary by incident, industry, geography, occupation, and other characteristics. More information and details about the data provided can be found at <a href="http://bls.gov/iif/Data.htm">http://bls.gov/iif/Data.htm</a>.</p>

<a href ="http://api.dol.gov/V1/Safety/InjuriesAndIllness/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=BLS%20Injuries%20and%20Illness%20Dataset" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables
  
- [II_AREA](#II_AREA)
- [II_CASE_TYPE](#II_CASE_TYPE)
- [II_DATA_PUB](#II_DATA_PUB)
- [II_DATA_TYPE](#II_DATA_TYPE)
- [II_FOOTNOTE](#II_FOOTNOTE)
- [II_GQT_CASE](#II_GQT_CASE)
- [II_GQT_CHAR](#II_GQT_CHAR)
- [II_GQT_OWNERSHIP](#II_GQT_OWNERSHIP)
- [II_GQT_STATE](#II_GQT_STATE)
- [II_GQT_STATE_OWNERSHIP](#II_GQT_STATE_OWNERSHIP)
- [II_INDUSTRY](#II_INDUSTRY)
- [II_SERIES](#II_SERIES)
- [II_SUPERSECTOR](#II_SUPERSECTOR)
  
<h3 id="II_AREA">II_AREA Table</h3>
<table summary="Area - Injuries, Illnesses, and Fatalities (IIF)">
	<caption>Area</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">AREA_CODE</th>
			<td>Unique code used to identify a specific geographic region. Choose combination of ownership (all, private, state, local, or state and local) and state . See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.area.</td>
			<td>varchar (3)</td>
		</tr>
		<tr>
			<th scope="row">AREA_NAME</th>
			<td>Describes the specific geographic region. Choose combination of ownership (all, private, state, local, or state and local) and state . See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.area.</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th scope="row">DISPLAY_LEVEL</th>
			<td>A hierarchy of various levels. A proprietary nesting scheme.</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">SELECTABLE</th>
			<td>A permission to choose (T) a variable in which reasonable data is assured.</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th scope="row">SORT_SEQUENCE</th>
			<td>Order in which variables are displayed.</td>
			<td>varchar (5)</td>
		</tr>
	</tbody>
</table>

<h3 id="II_CASE_TYPE">II_CASE_TYPE Table</h3>
<table summary="Case Type - Injuries, Illnesses, and Fatalities (IIF)">
	<caption>Case Type</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">CASE_TYPE_CODE</th>
			<td>The code identifies the type of case for which data are available. Choose total recordable cases (all, poisoning, skin disease, hearing loss, respiratory illness, or all other) or involving days away from work, days of job transfer and restriction, or all three. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.case_type. Definitions for days away from work, job transfer, and job restriction are listed below.</td>
			<td>Varchar (1)</td>
		</tr>
		<tr>
			<th scope="row">CASE_TYPE_TEXT</th>
			<td>Describes case for which data are available. Choose total recordable cases (all, poisoning, skin disease, hearing loss, respiratory illness, or all other) or involving days away from work, days of job transfer and restriction, or all three. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.case_type. Definitions for days away from work, job transfer, and job restriction are listed below.</td>
			<td>Varchar(100)</td>
		</tr>
	</tbody>
</table>

<h3 id="II_DATA_PUB">II_DATA_PUB Table</h3>
<table summary="Data Pub - Injuries, Illnesses, and Fatalities (IIF)">
	<caption>Data Pub</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">SERIES_ID</th>
			<td>Code identifying the specific series. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.data.1.AllData</td>
			<td>Varchar (17)</td>
		</tr>
		<tr>
			<th scope="row">YEAR</th>
			<td>Identifies year of observation between 2003-2010 for every Series ID.</td>
			<td>Varchar(4)</td>
		</tr>
		<tr>
			<th scope="row">PERIOD</th>
			<td>Identifies the period of the observation (annual, monthly, quarterly).</td>
			<td>Varchar(3)</td>
		</tr>
		<tr>
			<th scope="row">VALUE</th>
			<td>Data values for series.</td>
			<td>Varchar(12)</td>
		</tr>
		<tr>
			<th scope="row">FOOTNOTE_CODES</th>
			<td>Identifies footnote for the data series.</td>
			<td>Varchar(10)</td>
		</tr>
	</tbody>
</table>

<h3 id="II_DATA_TYPE">II_DATA_TYPE Table</h3>
<table summary="Data Type - Injuries, Illnesses, and Fatalities (IIF)">
	<caption>Data Type</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">DATA_TYPE_CODE</th>
			<td>Code identifying the datatype of the observation. Choose rate or number of illness or injury cases or illness and injury cases. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.data_type.</td>
			<td>Varchar (1)</td>
		</tr>
		<tr>
			<th scope="row">DATA_TYPE_TEXT</th>
			<td>Describes the datatype of the observation. Choose rate or number of illness or injury cases or illness and injury cases. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.data_type.</td>
			<td>Varchar(100)</td>
		</tr>
	</tbody>
</table>

<h3 id="II_FOOTNOTE">II_FOOTNOTE Table</h3>
<table summary="Footnote -Injuries, Illnesses, and Fatalities (IIF)">
	<caption>Footnote</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">FOOTNOTE_CODE</th>
			<td>Identifies footnote for the data series. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.footnote.</td>
			<td>Varchar (1)</td>
		</tr>
		<tr>
			<th scope="row">FOOTNOTE_TEXT</th>
			<td>Contains the text of the footnote. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.footnote</td>
			<td>Varchar(100)</td>
		</tr>
	</tbody>
</table>

<h3 id="II_GQT_CASE">II_GQT_CASE Table</h3>
<table summary="GQT Case - Injuries, Illnesses, and Fatalities (IIF)">
	<caption>GQT Case</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">GQT_CASE_COMPONENT</th>
			<td>Abbreviations for type of case component (industry, occupation, source, event, occupation)</td>
			<td>Varchar (3)</td>
		</tr>
		<tr>
			<th scope="row">GQT_CASE_CODE</th>
			<td>The code identifies the type of case for which data are available. Choose total recordable cases (all, poisoning, skin disease, hearing loss, respiratory illeness, or all other) or involving days away from work, days of job transfer and restriction, or all three. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.case_type. Definitions for days away from work, job transfer, and job restriction are listed below.</td>
			<td>Varchar(1)</td>
		</tr>
		<tr>
			<th scope="row">GQT_CASE_TEXT</th>
			<td>Describes case for which data are available. Choose total recordable cases (all, poisoning, skin disease, hearing loss, respiratory illeness, or all other) or involving days away from work, days of job transfer and restriction, or all three. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.case_type. Definitions for days away from work, job transfer, and job restriction are listed below.</td>
			<td>Varchar (50)</td>
		</tr>
		<tr>
			<th scope="row">GQT_CASE_TABLE_NAME</th>
			<td>Describes the database tables to reference for the application based on code and component.</td>
			<td>Varchar(50)</td>
		</tr>
		<tr>
			<th scope="row">GQT_CASE_COLUMN_NAMES</th>
			<td>Describes the table columns to display from the CASE_TABLE_NAME</td>
			<td>Varchar (50)</td>
		</tr>
		<tr>
			<th scope="row">GQT_CASE_TITLE</th>
			<td>Contains the generic case selection</td>
			<td>Varchar(50)</td>
		</tr>
		<tr>
			<th scope="row">GQT_ORDER</th>
			<td>Order in which variables are displayed</td>
			<td>Varchar (20)</td>
		</tr>
		<tr>
			<th scope="row">GQT_DISPLAY</th>
			<td>whether CASE_CODE is displayed or not</td>
			<td>Int 64</td>
		</tr>
		<tr>
			<th scope="row">GQT_CODE_DISPLAY</th>
			<td>Code Display</td>
			<td>Int 64</td>
		</tr>
	</tbody>
</table>

<h3 id="II_GQT_CHAR">II_GQT_CHAR Table</h3>
<table summary="GQT Character - Injuries, Illnesses, and Fatalities (IIF)">
	<caption>GQT Character</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">GQT_REPORT_ID</th>
			<td>Describes to the application the Report format to display selected information.</td>
			<td>Varchar (1)</td>
		</tr>
		<tr>
			<th scope="row">GQT_CASE_CODE</th>
			<td>The code identifies the type of case for which data are available. Choose total recordable cases (all, poisoning, skin disease, hearing loss, respiratory illeness, or all other) or involving days away from work, days of job transfer and restriction, or all three. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.case_type. Definitions for days away from work, job transfer, and job restriction are listed below.</td>
			<td>Varchar(1)</td>
		</tr>
		<tr>
			<th scope="row">GQT_CASE_COMPONENT</th>
			<td>Abbreviations for type of case component.</td>
			<td>Varchar (3)</td>
		</tr>
	</tbody>
</table>

<h3 id="II_GQT_OWNERSHIP">II_GQT_OWNERSHIP Table</h3>
<table summary="GQT Ownership - Injuries, Illnesses, and Fatalities (IIF)">
	<caption>GQT Ownership</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">OWNERSHIP_CODE</th>
			<td>Unique code used to identify a specific ownership type (private, state government, local government).</td>
			<td>Varchar (1)</td>
		</tr>
		<tr>
			<th scope="row">OWNERSHIP_NAME</th>
			<td>Describes the ownership type for the observation (private, state government, local government, all).</td>
			<td>Varchar(50)</td>
		</tr>
		<tr>
			<th scope="row">SORT_SEQUENCE</th>
			<td>Display order of ownership for application.</td>
			<td>Varchar (5)</td>
		</tr>
	</tbody>
</table>

<h3 id="II_GQT_STATE">II_GQT_STATE Table</h3>
<table summary="GQT State - Injuries, Illnesses, and Fatalities (IIF)">
	<caption>GQT State</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">STATE_CODE</th>
			<td>Unique code used to identify the state or area associated with the observation.</td>
			<td>Varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">STATE_NAME</th>
			<td>State or area name associated with the observation.</td>
			<td>Varchar(50)</td>
		</tr>
		<tr>
			<th scope="row">SORT_SEQUENCE</th>
			<td>Order in which variables are displayed.</td>
			<td>Varchar (5)</td>
		</tr>
	</tbody>
</table>

<h3 id="II_GQT_STATE_OWNERSHIP">II_GQT_STATE_OWNERSHIP Table</h3>
<table summary="GQT State Ownership - Injuries, Illnesses, and Fatalities (IIF)">
	<caption>GQT State Ownership</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">YEAR</th>
			<td>Identifies year of observation between 2003-2010 for every Series ID.</td>
			<td>Varchar (4)</td>
		</tr>
		<tr>
			<th scope="row">OWNERSHIP_CODE</th>
			<td>Unique code used to identify a specific ownership type (private, state government, local government)</td>
			<td>Varchar(1)</td>
		</tr>
		<tr>
			<th scope="row">STATE_CODE</th>
			<td>Unique code used to identify the state or area associated with the observation.</td>
			<td>Varchar (3)</td>
		</tr>
		<tr>
			<th scope="row">STATE_NAME</th>
			<td>State or area name associated with the observation.</td>
			<td>Varchar(50)</td>
		</tr>
		<tr>
			<th scope="row">SORT_SEQUENCE</th>
			<td>Order in which variables are displayed.</td>
			<td>Varchar (5)</td>
		</tr>
	</tbody>
</table>

<h3 id="II_INDUSTRY">II_INDUSTRY Table</h3>
<table summary="Industry - Injuries, Illnesses, and Fatalities (IIF)">
	<caption>Industry</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">SUPERSECTOR_CODE</th>
			<td>Unique code use to identify the supersectors (Cobstruction, Education &amp; Health Services, Financial Activities, Information, Leisure &amp; Hospitality, Manufacturing, Natural Resources &amp; Mining, Trade Transportation &amp; Utilities, or Professional &amp; Business Services). Definition of supersector is provided below.</td>
			<td>Varchar (3)</td>
		</tr>
		<tr>
			<th scope="row">INDUSTRY_CODE</th>
			<td>The code identifies the industry for which data are observed. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.industry. See industry definition below.</td>
			<td>Varchar(6)</td>
		</tr>
		<tr>
			<th scope="row">INDUSTRY_NAME</th>
			<td>Describes the industry for which data are observed. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.industry. See industry definition below.</td>
			<td>Varchar (100)</td>
		</tr>
		<tr>
			<th scope="row">DISPLAY_LEVEL</th>
			<td>A hierarchy of various levels. A proprietary nesting scheme.</td>
			<td>Varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">SELECTABLE</th>
			<td>A permission to choose (T) a variable in which reasonable data is assured.</td>
			<td>Varchar(1)</td>
		</tr>
		<tr>
			<th scope="row">SORT_SEQUENCE</th>
			<td>Order in which variables are displayed.</td>
			<td>Varchar (5)</td>
		</tr>
	</tbody>
</table>

<h3 id="II_SERIES">II_SERIES Table</h3>
<table summary="Series - Injuries, Illnesses, and Fatalities (IIF)">
	<caption>Series</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">SERIES_ID</th>
			<td>Code identifying the specific series. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.series.</td>
			<td>Varchar (17)</td>
		</tr>
		<tr>
			<th scope="row">SUPERSECTOR_CODE</th>
			<td>Unique code use to identify the supersectors (Cobstruction, Education &amp; Health Services, Financial Activities, Information, Leisure &amp; Hospitality, Manufacturing, Natural Resources &amp; Mining, Trade Transportation &amp; Utilities, or Professional &amp; Business Services). Definition of supersector is provided below.</td>
			<td>Varchar (3)</td>
		</tr>
		<tr>
			<th scope="row">INDUSTRY_CODE</th>
			<td>The code identifies the industry for which data are observed. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.industry. See industry definition below.</td>
			<td>Varchar(6)</td>
		</tr>
		<tr>
			<th scope="row">DATA_TYPE_CODE</th>
			<td>Code identifying the datatype of the observation. Choose rate or number of illness or injury cases or illness and injury cases. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.data_type.</td>
			<td>Varchar (1)</td>
		</tr>
		<tr>
			<th scope="row">CASE_TYPE_CODE</th>
			<td>The code identifies the type of case for which data are available. Choose total recordable cases (all, poisoning, skin disease, hearing loss, respiratory illeness, or all other) or involving days away from work, days of job transfer and restriction, or all three. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.case_type. Definitions for days away from work, job transfer, and job restriction are listed below.</td>
			<td>Varchar (1)</td>
		</tr>
		<tr>
			<th scope="row">AREA_CODE</th>
			<td>Unique code used to identify a specific geographic region. Choose combination of ownership (all, private, state, local, or state and local) and state . See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.area.</td>
			<td>Varchar(3)</td>
		</tr>
		<tr>
			<th scope="row">FOOTNOTE_CODES</th>
			<td>Identifies footnote for the data series. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.footnote.</td>
			<td>Varchar (10)</td>
		</tr>
		<tr>
			<th scope="row">BEGIN_YEAR</th>
			<td>Identifies first year for which data are available (2003-2008).</td>
			<td>Varchar(4)</td>
		</tr>
		<tr>
			<th scope="row">BEGIN_PERIOD</th>
			<td>Identifies first data observation within the first year for which data are available.</td>
			<td>Varchar(3)</td>
		</tr>
		<tr>
			<th scope="row">END_YEAR</th>
			<td>Identifies last year for which data are available (2005-2010).</td>
			<td>Varchar (4)</td>
		</tr>
		<tr>
			<th scope="row">END_PERIOD</th>
			<td>Identifies last data observation within the first year for which data are available.</td>
			<td>Varchar (3)</td>
		</tr>
	</tbody>
</table>

<h3 id="II_SUPERSECTOR">II_SUPERSECTOR Table</h3>
<table summary="Super Sector -Injuries, Illnesses, and Fatalities (IIF)">
	<caption>Supersector</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">SUPERSECTOR_CODE</th>
			<td>Unique code use to identify the supersectors (Cobstruction, Education &amp; Health Services, Financial Activities, Information, Leisure &amp; Hospitality, Manufacturing, Natural Resources &amp; Mining, Trade Transportation &amp; Utilities, or Professional &amp; Business Services). Definition of supersector is provided below.</td>
			<td>Varchar (3)</td>
		</tr>
		<tr>
			<th scope="row">SUPERSECTOR_NAME</th>
			<td>Name identifying the type of supersector (Cobstruction, Education &amp; Health Services, Financial Activities, Information, Leisure &amp; Hospitality, Manufacturing, Natural Resources &amp; Mining, Trade Transportation &amp; Utilities, or Professional &amp; Business Services). Definition of supersector is provided below.</td>
			<td>Varchar (100)</td>
		</tr>
		<tr>
			<th scope="row">DISPLAY_LEVEL</th>
			<td>A hierarchy of various levels. A proprietary nesting scheme.</td>
			<td>Varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">SELECTABLE</th>
			<td>A permission to choose (T) a variable in which reasonable data is assured.</td>
			<td>Varchar(1)</td>
		</tr>
		<tr>
			<th scope="row">SORT_SEQUENCE</th>
			<td>Order in which variables are displayed.</td>
			<td>Varchar (5)</td>
		</tr>
	</tbody>
</table>
