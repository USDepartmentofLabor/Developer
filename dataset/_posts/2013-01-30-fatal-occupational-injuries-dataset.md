---
layout: post
title: Fatal Occupational Injuries Dataset
created: 1359579027
---

```
http://api.dol.gov/V1/Safety/FatalOccupationalInjuries
```

<p>Allows users to search nonfatal and fatal data for the nation and for States from the most current Survey of Occupational Injuries and Illnesses and the Census of Fatal Occupational Injuries programs. Users can search by industry, demographic characteristics, and case characteristics. Historical data for years prior to the current year. More information and details about the data provided can be found at <a href="http://bls.gov/iif/Data.htm">http://bls.gov/iif/Data.htm.</a></p>


### Dataset Metadata  
http://api.dol.gov/V1/Safety/FatalOccupationalInjuries/$metadata

[Sample the Fatal Occupational Injuries Dataset](https://devtools.dol.gov/APISampler/Home/Index1?datasetName=BLS%20Fatal%20Occupational%20Injuries%20Dataset)  

### Dataset Tables:  
<h3>FI_AREA Table</h3>

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
			<th>AREA_CODE</th>
			<td>Unique code used to identify a specific geographic region. Choose major MSAs, states, or US. See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.area</td>
			<td valign="top">varchar (3)</td>
		</tr>
		<tr>
			<th>AREA_NAME</th>
			<td>Describes the specific geographic region. Choose major MSAs, states, or US. See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.area</td>
			<td valign="top">varchar (100)</td>
		</tr>
		<tr>
			<th>DISPLAY_LEVEL</th>
			<td>A hierarchy of various levels. A proprietary nesting scheme.</td>
			<td valign="top">varchar (2)</td>
		</tr>
		<tr>
			<th>SELECTABLE</th>
			<td>A permission to choose (T) a variable in which reasonable data is assured.</td>
			<td valign="top">varchar (1)</td>
		</tr>
		<tr>
			<th>SORT_SEQUENCE</th>
			<td>Order in which variables are displayed.</td>
			<td valign="top">varchar (5)</td>
		</tr>
	</tbody>
</table>
<h3>FI_CASE Table</h3>

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
			<th>CASE_TYPE</th>
			<td>The code identifies the type of case for which data are available. Fatalities in all sectors, detailed industry (private, federal, local, state, or government), event/exposure, detailed occupation (government, all sectors, or private), or source of injury (primary or secondary).See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.case. Definitions pertaining to Case are provided below.</td>
			<td>Varchar (1)</td>
		</tr>
		<tr>
			<th>CASE_TEXT</th>
			<td>Describes case for which data are available. Fatalities in all sectors, detailed industry (private, federal, local, state, or government), event/exposure, detailed occupation (government, all sectors, or private), or source of injury (primary or secondary). See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.case</td>
			<td>Varchar(100)</td>
		</tr>
	</tbody>
</table>
<h3>FI_CATEGORY Table</h3>

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
			<th>CASE_CODE</th>
			<td>The code identifies the type of case for which data are available. Fatalities in all sectors, detailed industry (private, federal, local, state, or government), event/exposure, detailed occupation (government, all sectors, or private), or source of injury (primary or secondary).See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.case</td>
			<td>Varchar (1)</td>
		</tr>
		<tr>
			<th>CATEGORY_CODE</th>
			<td>The code identifies the category of the observation. Choose combination of Case Code and all ownership, age group, event/exposure, gender, nature, occupations, part, race, primary source of injury, secondary source of injury, worker status (wage/salary or self-employed), worker activity, or worker location (See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.category). Definitions for event/exposure, nature, occupation, part, primary source of injury, secondary source of injury, worker activity, and worker location are provided below.</td>
			<td>Varchar(3)</td>
		</tr>
		<tr>
			<th>CATEGORY_TEXT</th>
			<td>Describes the category of the observation. (See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.category). Definitions for event/exposure, nature, occupation, part, primary source of injury, secondary source of injury, worker activity, and worker location are provided below.</td>
			<td>Varchar (100)</td>
		</tr>
	</tbody>
</table>
<h3>FI_CATEGORY2 Table</h3>

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
			<th>CATEGORY_CODE</th>
			<td>The code identifies the category of the observation. Choose combination of Case Code and all ownership, age group, event/exposure, gender, nature, occupations, part, race, primary source of injury, secondary source of injury, worker status (wage/salary or self-employed), worker activity, or worker location (See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.category2). Definitions for event/exposure, nature, occupation, part, primary source of injury, secondary source of injury, worker activity, and worker location are provided below.</td>
			<td>Varchar(3)</td>
		</tr>
		<tr>
			<th>CATEGORY_TEXT</th>
			<td>Describes the category of the observation. (See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.category2). Definitions for event/exposure, nature, occupation, part, primary source of injury, secondary source of injury, worker activity, and worker location are provided below.</td>
			<td>Varchar (100)</td>
		</tr>
	</tbody>
</table>
<h3>FI_DATA_PUB Table</h3>

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
			<th>SERIES_ID</th>
			<td>Code identifying the specific series. See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.data.0.Current.</td>
			<td>Varchar (30)</td>
		</tr>
		<tr>
			<th>YEAR</th>
			<td>Identifies year of observation for 2003-2008 intervals for every Series ID.</td>
			<td>Varchar(4)</td>
		</tr>
		<tr>
			<th>PERIOD</th>
			<td>Identifies the reference period (annual, quarterly, monthly)</td>
			<td>Varchar(3)</td>
		</tr>
		<tr>
			<th>VALUE</th>
			<td>Data values for series.</td>
			<td>Varchar(12)</td>
		</tr>
		<tr>
			<th>FOOTNOTE_CODES</th>
			<td>Identifies footnote for the data series.</td>
			<td>Varchar(10)</td>
		</tr>
	</tbody>
</table>
<h3>FI_DATA_TYPE Table</h3>

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
			<th>DATATYPE_CODE</th>
			<td>Code identifying the datatype of the observation. Only Fatal Injuries (count).</td>
			<td>Varchar (1)</td>
		</tr>
		<tr>
			<th>DATATYPE_TEXT</th>
			<td>Describes the datatype of the observation. Only Fatal Injuries (count).</td>
			<td>Varchar(100)</td>
		</tr>
	</tbody>
</table>
<h3>FI_EVENT Table</h3>

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
			<th>EVENT_CODE</th>
			<td>Names the event which resulted in the reported injury. See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.event. Definition of event provided below.</td>
			<td>varchar (6)</td>
		</tr>
		<tr>
			<th>EVENT_TEXT</th>
			<td>Describes the event which resulted in the reported injury. See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.event. Definition of event provided below.</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th>DISPLAY_LEVEL</th>
			<td>A hierarchy of various levels. A proprietary nesting scheme.</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th>SELECTABLE</th>
			<td>A permission to choose (T) a variable in which reasonable data is assured.</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th>SORT_SEQUENCE</th>
			<td>Order in which variables are displayed.</td>
			<td>varchar (5)</td>
		</tr>
	</tbody>
</table>
<h3>FI_FOOTNOTE Table</h3>

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
			<th>FOOTNOTE_CODE</th>
			<td>Identifies footnote for the data series.</td>
			<td>Varchar (2)</td>
		</tr>
		<tr>
			<th>FOOTNOTE_TEXT</th>
			<td>Contains the text of the footnote.</td>
			<td>Varchar(200)</td>
		</tr>
	</tbody>
</table>
<h3>FI_GQT_CASE Table</h3>

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
			<th>GQT_CASE_COMPONENT</th>
			<td>Abbreviations for type of case component (industry, occupation, source, event, occupation)</td>
			<td>Varchar (3)</td>
		</tr>
		<tr>
			<th>GQT_CASE_CODE</th>
			<td>Alpha-numerical code to describe the case attributes (Industry, occupation, source, event and government or private occupation)</td>
			<td>Varchar(1)</td>
		</tr>
		<tr>
			<th>GQT_CASE_TEXT</th>
			<td>Describes the case code</td>
			<td>Varchar (50)</td>
		</tr>
		<tr>
			<th>GQT_CASE_TABLE_NAME</th>
			<td>Describes the database tables to reference for the application based on code and component</td>
			<td>Varchar(50)</td>
		</tr>
		<tr>
			<th>GQT_CASE_COLUMN_NAMES</th>
			<td>Describes the table columns to display from the CASE_TABLE_NAME</td>
			<td>Varchar (50)</td>
		</tr>
		<tr>
			<th>GQT_CASE_TITLE</th>
			<td>Contains the generic case selection</td>
			<td>Varchar(50)</td>
		</tr>
		<tr>
			<th>GQT_ORDER</th>
			<td>Order in which column is sorted</td>
			<td>Varchar (20)</td>
		</tr>
		<tr>
			<th>GQT_DISPLAY</th>
			<td>Indicate if CASE_CODE is displayed or not</td>
			<td>Int 64</td>
		</tr>
		<tr>
			<th>GQT_CODE_DISPLAY</th>
			<td>GQT Code Display</td>
			<td>Int 64</td>
		</tr>
	</tbody>
</table>
<h3>FI_GQT_CHAR Table</h3>

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
			<th>GQT_REPORT_ID</th>
			<td>Describes to the application the Report format to display selected information.</td>
			<td>Varchar (1)</td>
		</tr>
		<tr>
			<th>GQT_CASE_CODE</th>
			<td>Alpha-numerical code describes the case attributes (Industry, occupation, source, event and government or private occupation)</td>
			<td>Varchar(1)</td>
		</tr>
		<tr>
			<th>GQT_CASE_COMPONENT</th>
			<td>Abbreviations for type of case component (industry, occupation, source, event, occupation)</td>
			<td>Varchar (3)</td>
		</tr>
	</tbody>
</table>
<h3>FI_GQT_CHAR_OWNERSHIP Table</h3>

<table>
	<tbody>
		<tr>
			<th>&nbsp;</th>
		</tr>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<th>GQT_CASE_CODE</th>
			<td>Alpha-numerical code describes the case attributes (Industry, occupation, source, event and government or private occupation).</td>
			<td>Varchar (1)</td>
		</tr>
		<tr>
			<th>OWNERSHIP_CODE</th>
			<td>Codes for ownership types (All, Private, Government, Federal, State, etc…).</td>
			<td>Varchar(1)</td>
		</tr>
		<tr>
			<th>UNIQUE_CODE</th>
			<td>Combination of case and ownership code for application.</td>
			<td>Varchar (1)</td>
		</tr>
		<tr>
			<th>PRIVATE_CODE</th>
			<td>Combination of case and ownership code for application.</td>
			<td>Varchar (1)</td>
		</tr>
	</tbody>
</table>
<h3>FI_GQT_OWNERSHIP Table</h3>

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
			<th>OWNERSHIP_CODE</th>
			<td>Codes for ownership types (All, Private, Government, Federal, State, etc…).</td>
			<td>Varchar (1)</td>
		</tr>
		<tr>
			<th>OWNERSHIP_NAME</th>
			<td>Text describing ownership code.</td>
			<td>Varchar(50)</td>
		</tr>
		<tr>
			<th>SORT_SEQUENCE</th>
			<td>Display order of ownership for application.</td>
			<td>Varchar (5)</td>
		</tr>
	</tbody>
</table>
<h3>FI_GQT_STATE Table</h3>

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
			<th>STATE_CODE</th>
			<td>S+state code and M+metro area codes.</td>
			<td>Varchar (3)</td>
		</tr>
		<tr>
			<th>STATE_NAME</th>
			<td>State and metro area names.</td>
			<td>Varchar(50)</td>
		</tr>
		<tr>
			<th>SORT_SEQUENCE</th>
			<td>Display order of state/areas for application.</td>
			<td>Varchar (5)</td>
		</tr>
	</tbody>
</table>
<h3>FI_GQT_STATE_OWNERSHIP Table</h3>

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
			<th>YEAR</th>
			<td>Available years for data.</td>
			<td>Varchar (4)</td>
		</tr>
		<tr>
			<th>OWNERSHIP_CODE</th>
			<td>Codes for ownership types (All, Private, Government, Federal, State, etc…).</td>
			<td>Varchar(1)</td>
		</tr>
		<tr>
			<th>STATE_CODE</th>
			<td>S+state code and M+metro area codes</td>
			<td>Varchar (3)</td>
		</tr>
		<tr>
			<th>STATE_NAME</th>
			<td>state and metro area names</td>
			<td>Varchar(50)</td>
		</tr>
		<tr>
			<th>SORT_SEQUENCE</th>
			<td>Display order of state/areas for application</td>
			<td>Varchar (5)</td>
		</tr>
	</tbody>
</table>
<h3>FI_INDUSTRY Table</h3>

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
			<th>INDUSTRY_CODE</th>
			<td>The code identifies the industry for which data are observed. See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.industry. See industry definition below.</td>
			<td>Varchar (6)</td>
		</tr>
		<tr>
			<th>INDUSTRY_TEXT</th>
			<td>Describes the industry for which data are observed. See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.industry. See industry definition below.</td>
			<td>Varchar(100)</td>
		</tr>
		<tr>
			<th>DISPLAY_LEVEL</th>
			<td>A hierarchy of various levels. A proprietary nesting scheme.</td>
			<td>Varchar (2)</td>
		</tr>
		<tr>
			<th>SELECTABLE</th>
			<td>A permission to choose (T) a variable in which reasonable data is assured.</td>
			<td>Varchar(1)</td>
		</tr>
		<tr>
			<th>SORT_SEQUENCE</th>
			<td>Order in which variables are displayed.</td>
			<td>Varchar (5)</td>
		</tr>
	</tbody>
</table>
<h3>FI_SERIES Table</h3>

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
			<th>SERIES_ID</th>
			<td>Code identifying the specific series. See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.series.</td>
			<td>Varchar (30)</td>
		</tr>
		<tr>
			<th>CATEGORY_CODE</th>
			<td>The code identifies the category of the observation. Choose combination of Case Code and all ownership, age group, event/exposure, gender, nature, occupations, part, race, primary source of injury, secondary source of injury, worker status (wage/salary or self-employed), worker activity, or worker location (See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.category). Definitions for event/exposure, nature, occupation, part, primary source of injury, secondary source of injury, worker activity, and worker location are provided below.</td>
			<td>Varchar (3)</td>
		</tr>
		<tr>
			<th>DATATYPE_CODE</th>
			<td>Code identifying the datatype of the observation. Only Fatal Injuries (count).</td>
			<td>Varchar (1)</td>
		</tr>
		<tr>
			<th>CASE_CODE</th>
			<td>The code identifies the type of case for which data are available. Fatalities in all sectors or detailed industry (private, federal, local, state, or government), event/exposure, detailed occupation (government, all sectors, or private), or source of injury (primary or secondary).See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.case</td>
			<td>Varchar (1)</td>
		</tr>
		<tr>
			<th>INDUSTRY_CODE</th>
			<td>The code identifies the industry for which data are observed. See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.industry. See industry definition below.</td>
			<td>Varchar(6)</td>
		</tr>
		<tr>
			<th>EVENT_CODE</th>
			<td>Names the event which resulted in the reported injury. See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.event. Definition of event provided below.</td>
			<td>Varchar(6)</td>
		</tr>
		<tr>
			<th>SOURCE_CODE</th>
			<td>The code identifies the source of injury. See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.source. Definition of source is provided below</td>
			<td>Varchar (6)</td>
		</tr>
		<tr>
			<th>OCCUPATION_CODE</th>
			<td>The code identifies the occupation of the person experiencing the injury. See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.occupation. Definition of occupation can be found below.</td>
			<td>Varchar (6)</td>
		</tr>
		<tr>
			<th>AREA_CODE</th>
			<td>Unique code used to identify a specific geographic region. Choose major MSAs, states, or US. See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.area</td>
			<td>Varchar(3)</td>
		</tr>
		<tr>
			<th>FOOTNOTE_CODES</th>
			<td>Identifies footnote for the data series.</td>
			<td>Varchar (10)</td>
		</tr>
		<tr>
			<th>BEGIN_YEAR</th>
			<td>Identifies first year for which data are available.</td>
			<td>Varchar(4)</td>
		</tr>
		<tr>
			<th>BEGIN_PERIOD</th>
			<td>Identifies first data observation within the first year for which data are available.</td>
			<td>Varchar(3)</td>
		</tr>
		<tr>
			<th>END_YEAR</th>
			<td>Identifies last year for which data are available.</td>
			<td>Varchar (4)</td>
		</tr>
		<tr>
			<th>END_PERIOD</th>
			<td>Identifies last data observation within the first year for which data are available.</td>
			<td>Varchar (3)</td>
		</tr>
	</tbody>
</table>
<h3>FI_SUPERSECTOR Table</h3>

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
			<th>SUPERSECTOR_CODE</th>
			<td>The code identifies the source of injury. The list can be found at ftp://ftp.bls.gov/pub/time.series/fi/fi.source.</td>
			<td>Varchar (3)</td>
		</tr>
		<tr>
			<th>SUPERSECTOR_NAME</th>
			<td>Describes the source of injury. The list can be found at ftp://ftp.bls.gov/pub/time.series/fi/fi.source.</td>
			<td>Varchar (100)</td>
		</tr>
		<tr>
			<th>DISPLAY_LEVEL</th>
			<td>A hierarchy of various levels. A proprietary nesting scheme.</td>
			<td>Varchar (2)</td>
		</tr>
		<tr>
			<th>SELECTABLE</th>
			<td>A permission to choose (T) a variable in which reasonable data is assured.</td>
			<td>Varchar(1)</td>
		</tr>
		<tr>
			<th>SORT_SEQUENCE</th>
			<td>Order in which variables are displayed.</td>
			<td>Varchar (5)</td>
		</tr>
	</tbody>
</table>
