---
layout: post
title: Fatal Occupational Injuries
created: 1359579027
description: Allows users to search nonfatal and fatal data for the nation and for States from the most current Survey of Occupational Injuries and Illnesses and the Census of Fatal Occupational Injuries programs.
---

<div class="force_wrap apiurl">
<p>http://api.dol.gov/V1/Safety/FatalOccupationalInjuries</p>
</div>

<p>Allows users to search nonfatal and fatal data for the nation and for States from the most current Survey of Occupational Injuries and Illnesses and the Census of Fatal Occupational Injuries programs. Users can search by industry, demographic characteristics, and case characteristics. Historical data for years prior to the current year. More information and details about the data provided can be found at <a href="http://www.bls.gov/data/#injuries">http://www.bls.gov/data/#injuries</a>.</p>

<a href ="http://api.dol.gov/V1/Safety/FatalOccupationalInjuries/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=BLS%20Fatal%20Occupational%20Injuries%20Dataset" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables

<div>
	<ul>
		<li><a href="#FI_AREA">FI_AREA</a></li>
		<li><a href="#FI_CASE">FI_CASE</a></li>
		<li><a href="#FI_CATEGORY">FI_CATEGORY</a></li>
		<li><a href="#FI_CATEGORY2">FI_CATEGORY2</a></li>
		<li><a href="#FI_DATA_PUB">FI_DATA_PUB</a></li>
		<li><a href="#FI_DATA_TYPE">FI_DATA_TYPE</a></li>
		<li><a href="#FI_EVENT">FI_EVENT</a></li>
		<li><a href="#FI_FOOTNOTE">FI_FOOTNOTE</a></li>
		<li><a href="#FI_GQT_CASE">FI_GQT_CASE</a></li>
		<li><a href="#FI_GQT_CHAR">FI_GQT_CHAR</a></li>
		<li><a href="#FI_GQT_CHAR_OWNERSHIP">FI_GQT_CHAR_OWNERSHIP</a></li>
		<li><a href="#FI_GQT_OWNERSHIP">FI_GQT_OWNERSHIP</a></li>
		<li><a href="#FI_GQT_STATE">FI_GQT_STATE</a></li>
		<li><a href="#FI_GQT_STATE_OWNERSHIP">FI_GQT_STATE_OWNERSHIP</a></li>
		<li><a href="#FI_INDUSTRY">FI_INDUSTRY</a></li>
		<li><a href="#FI_SERIES">FI_SERIES</a></li>
	</ul>
</div>

  <div>
	<h3 id="FI_AREA">FI_AREA Table</h3>
	<table class="accessible responsive" summary="Area - Fatal Occupational Injuries -Area - Fatal Occupational Injuries ">
	<caption>Area</caption>
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
				AREA_CODE
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (3)
			</td>
				<td valign="top">
				<span class="small">Column Description</span>
				Unique code used to identify a specific geographic region. Choose major MSAs, states, or US. See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.area
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				AREA_NAME
			</th>
				<td valign="top">
				<span class="small">Data Type</span>
				varchar (100)
			</td>
				<td>
				<span class="small">Column Description</span>
				Describes the specific geographic region. Choose major MSAs, states, or US. See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.area
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				DISPLAY_LEVEL
			</th>
				<td valign="top">
				<span class="small">Data Type</span>
				varchar (2)
			</td>
				<td>
				<span class="small">Column Description</span>
				A hierarchy of various levels. A proprietary nesting scheme.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				SELECTABLE
			</th>
				<td valign="top">
				<span class="small">Data Type</span>
				varchar (1)
			</td>
				<td>
				<span class="small">Column Description</span>
				A permission to choose (T) a variable in which reasonable data is assured.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				SORT_SEQUENCE
			</th>
				<td valign="top">
				<span class="small">Data Type</span>
				varchar (5)
			</td>
				<td>
				<span class="small">Column Description</span>
				Order in which variables are displayed.
			</td>
				
			</tr>
		</tbody>
	</table>

	<h3 id="FI_CASE">FI_CASE Table</h3>
	<table class="accessible responsive" summary="Case - Fatal Occupational Injuries">
		<caption>Case</caption>
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
				CASE_TYPE
			</th>
				
				<td>
				<span class="small">Data Type</span>
				Varchar (1)
			</td>
			<td>
			<span class="small">Column Description</span>
			The code identifies the type of case for which data are available. Fatalities in all sectors, detailed industry (private, federal, local, state, or government), event/exposure, detailed occupation (government, all sectors, or private), or source of injury (primary or secondary).See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.case. Definitions pertaining to Case are provided below.
		</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				CASE_TEXT
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar(100)
			</td>
				<td>
				<span class="small">Column Description</span>
				Describes case for which data are available. Fatalities in all sectors, detailed industry (private, federal, local, state, or government), event/exposure, detailed occupation (government, all sectors, or private), or source of injury (primary or secondary). See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.case
			</td>
				
			</tr>
		</tbody>
	</table>

	<h3 id="FI_CATEGORY">FI_CATEGORY Table</h3>
	<table class="accessible responsive" summary="Category - Fatal Occupational Injuries">
		<caption>Category</caption>
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
				CASE_CODE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (1)
			</td>
				<td>
				<span class="small">Column Description</span>
				The code identifies the type of case for which data are available. Fatalities in all sectors, detailed industry (private, federal, local, state, or government), event/exposure, detailed occupation (government, all sectors, or private), or source of injury (primary or secondary).See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.case
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				CATEGORY_CODE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar(3)
			</td>
				<td>
				<span class="small">Column Description</span>
				The code identifies the category of the observation. Choose combination of Case Code and all ownership, age group, event/exposure, gender, nature, occupations, part, race, primary source of injury, secondary source of injury, worker status (wage/salary or self-employed), worker activity, or worker location (See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.category). Definitions for event/exposure, nature, occupation, part, primary source of injury, secondary source of injury, worker activity, and worker location are provided below.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				CATEGORY_TEXT
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (100)
			</td>
				<td>
				<span class="small">Column Description</span>
				Describes the category of the observation. (See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.category). Definitions for event/exposure, nature, occupation, part, primary source of injury, secondary source of injury, worker activity, and worker location are provided below.
			</td>
				
			</tr>
		</tbody>
	</table>

	<h3 id="FI_CATEGORY2">FI_CATEGORY2 Table</h3>
	<table class="accessible responsive" summary="Category2 - Fatal Occupational Injuries">
		<caption>Category2 </caption>
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
				CATEGORY_CODE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar(3)
			</td>
			     <span class="small">Column Description</span>
				<td>The code identifies the category of the observation. Choose combination of Case Code and all ownership, age group, event/exposure, gender, nature, occupations, part, race, primary source of injury, secondary source of injury, worker status (wage/salary or self-employed), worker activity, or worker location (See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.category2). Definitions for event/exposure, nature, occupation, part, primary source of injury, secondary source of injury, worker activity, and worker location are provided below.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				CATEGORY_TEXT
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (100)
			</td>
				<td>
				<span class="small">Column Description</span>
				Describes the category of the observation. (See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.category2). Definitions for event/exposure, nature, occupation, part, primary source of injury, secondary source of injury, worker activity, and worker location are provided below.
			</td>
				
			</tr>
		</tbody>
	</table>

	<h3 id="FI_DATA_PUB">FI_DATA_PUB Table</h3>
	<table class="accessible responsive" summary="Data Pub  - Fatal Occupational Injuries">
		<caption>Data Pub</caption>
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
				SERIES_ID
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (30)
			</td>
				<td>
				<span class="small">Column Description</span>
				Code identifying the specific series. See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.data.0.Current.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				YEAR
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar(4)
			</td>
				<td>
				<span class="small">Column Description</span>
				Identifies year of observation for 2003-2008 intervals for every Series ID.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				PERIOD
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar(3)
			</td>
				<td>
				<span class="small">Column Description</span>
				Identifies the reference period (annual, quarterly, monthly).
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				VALUE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar(12)
			</td>
				<td>
				<span class="small">Column Description</span>
				Data values for series.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				FOOTNOTE_CODES
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar(10)
			</td>
				<td>
				<span class="small">Column Description</span>
				Identifies footnote for the data series.
			</td>
				
			</tr>
		</tbody>
	</table>

	<h3 id="FI_DATA_TYPE">FI_DATA_TYPE Table</h3>
	<table class="accessible responsive" summary="Data Type - Fatal Occupational Injuries">
		<caption>Data Type</caption>
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
				DATATYPE_CODE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (1)
			</td>
				<td>
				<span class="small">Column Description</span>
				Code identifying the datatype of the observation. Only Fatal Injuries (count).
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				DATATYPE_TEXT
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar(100)
			</td>
				<td>
				<span class="small">Column Description</span>
				Describes the datatype of the observation. Only Fatal Injuries (count).
			</td>
				
			</tr>
		</tbody>
	</table>

	<h3 id="FI_EVENT">FI_EVENT Table</h3>
	<table class="accessible responsive" summary="Event - Fatal Occupational Injuries">
		<caption>Event</caption>
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
				EVENT_CODE
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (6)
			</td>
				<td>
				<span class="small">Column Description</span>
				Names the event which resulted in the reported injury. See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.event. Definition of event provided below.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				EVENT_TEXT
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (100)
			</td>
				<td>
				<span class="small">Column Description</span>
				Describes the event which resulted in the reported injury. See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.event. Definition of event provided below.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				DISPLAY_LEVEL
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (2)
			</td>
				<td>
				<span class="small">Column Description</span>
				A hierarchy of various levels. A proprietary nesting scheme.
				</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				SELECTABLE
			</th>
			<td>
			<span class="small">Data Type</span>
			varchar (1)
		</td>
				<td>
				<span class="small">Column Description</span>
				A permission to choose (T) a variable in which reasonable data is assured.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				SORT_SEQUENCE
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (5)
			</td>
				<td>
				<span class="small">Column Description</span>
				Order in which variables are displayed.
			</td>
				
			</tr>
		</tbody>
	</table>

	<h3 id="FI_FOOTNOTE">FI_FOOTNOTE Table</h3>
	<table class="accessible responsive" summary="Footnote - Fatal Occupational Injuries">
		<caption>Footnote</caption>
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
				FOOTNOTE_CODE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (2)
			</td>
				<td>
				<span class="small">Column Description</span>
				Identifies footnote for the data series.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				FOOTNOTE_TEXT
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar(200)
			</td>
				<td>
				<span class="small">Column Description</span>
				Contains the text of the footnote.
			</td>
				
			</tr>
		</tbody>
	</table>

	<h3 id="FI_GQT_CASE">FI_GQT_CASE Table</h3>
	<table class="accessible responsive" summary="GQT Case - Fatal Occupational Injuries">
		<caption>GQT Case</caption>
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
				GQT_CASE_COMPONENT
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (3)
			</td>
				<td>
				<span class="small">Column Description</span>
				Abbreviations for type of case component (industry, occupation, source, event, occupation)
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				GQT_CASE_CODE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar(1)
			</td>
				<td>
				<span class="small">Column Description</span>
				Alpha-numerical code to describe the case attributes (Industry, occupation, source, event and government or private occupation)
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				GQT_CASE_TEXT
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (50)
			</td>
				<td>
				<span class="small">Column Description</span>
				Describes the case code
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				GQT_CASE_TABLE_NAME
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar(50)
			</td>
				<td>
				<span class="small">Column Decsciption</span>
				Describes the database tables to reference for the application based on code and component
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				GQT_CASE_COLUMN_NAMES
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (50)
			</td>
				<td>
				<span class="small">Column Description</span>
				Describes the table columns to display from the CASE_TABLE_NAME
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				GQT_CASE_TITLE
			</th>
				<td>
				Varchar(50)
				<span class="small">Data Type</span>
				</td>
				<td>
				<span class="small">Column Description</span>
				Contains the generic case selection
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				GQT_ORDER
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (20)
			</td>
				<td>
				<span class="small">Column Description</span>
				Order in which column is sorted
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				GQT_DISPLAY
			</th>
				<td>
				<span class="small">Data Type</span>
				Int 64
			</td>
				<td>
				<span class="small">Column Name</span>
				Indicate if CASE_CODE is displayed or not
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				GQT_CODE_DISPLAY
			</th>
				<td>
				<span class="small">Data Type</span>
				Int 64
			</td>
				<td>
				<span class="small">Column Description</span>
				GQT Code Display
			</td>
				
			</tr>
		</tbody>
	</table>

	<h3 id="FI_GQT_CHAR">FI_GQT_CHAR Table</h3>
	<table class="accessible responsive" summary="GQT Char - Fatal Occupational Injuries">
		<caption>GQT Char</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Descrpition</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				GQT_REPORT_ID
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (1)
			</td>
				<td>
				<span class="small">Column Description</span>
				Describes to the application the Report format to display selected information.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				GQT_CASE_CODE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar(1)
			</td>
				<td>
				<span class="small">Column Description</span>
				Alpha-numerical code describes the case attributes (Industry, occupation, source, event and government or private occupation)
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				GQT_CASE_COMPONENT
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (3)
			</td>
				<td>
				<span class="small">Column Description</span>
				Abbreviations for type of case component (industry, occupation, source, event, occupation)
			</td>
				
			</tr>
		</tbody>
	</table>

	<h3 id="FI_GQT_CHAR_OWNERSHIP">FI_GQT_CHAR_OWNERSHIP Table</h3>
	<table class="accessible responsive" summary="GQT Char Ownership - Fatal Occupational Injuries">
		<caption>GQT Char Ownership</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</tbody>
		<tbody>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				GQT_CASE_CODE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (1)
			</td>
				<td>
				<span class="small">Column Description</span>
				Alpha-numerical code describes the case attributes (Industry, occupation, source, event and government or private occupation).
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				OWNERSHIP_CODE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar(1)
			</td>
				<td>
				<span class="small">Column Description</span>
				Codes for ownership types (All, Private, Government, Federal, State, etc.).
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				UNIQUE_CODE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (1)
			</td>
				<td>
				<span class="small">Column Description</span>
				Combination of case and ownership code for application.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				PRIVATE_CODE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (1)
			</td>
				<td>
				<span class="small">Column Description</span>
				Combination of case and ownership code for application.
			</td>
				
			</tr>
		</tbody>
	</table>

	<h3 id="FI_GQT_OWNERSHIP">FI_GQT_OWNERSHIP Table</h3>
	<table class="accessible responsive"  summary="GQT Ownership - Fatal Occupational Injuries">
		<caption>GQT Ownership</caption>
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
				OWNERSHIP_CODE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (1)
			</td>
				<td>
				<span class="small">Column Description</span>
				Codes for ownership types (All, Private, Government, Federal, State, etc.).
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				OWNERSHIP_NAME
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar(50)
			</td>
				<td>
				<span class="small">Column Description</span>
				Text describing ownership code.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				SORT_SEQUENCE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (5)
			</td>
				<td>
				<span class="small">Column Description</span>
				Display order of ownership for application.
			</td>
				
			</tr>
		</tbody>
	</table>

	<h3 id="FI_GQT_STATE">FI_GQT_STATE Table</h3>
	<table class="accessible responsive"  summary="GQT State - Fatal Occupational Injuries">
		<caption>GQT State</caption>
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
				STATE_CODE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (3)
			</td>
				<td>
				<span class="small">Column Description</span>
				S+state code and M+metro area codes.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				STATE_NAME
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar(50)
			</td>
				<td>
				<span class="small">Column Description</span>
				State and metro area names.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				SORT_SEQUENCE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (5)
			</td>
				<td>
				<span class="small">Column Description</span>
				Display order of state/areas for application.
			</td>
				
			</tr>
		</tbody>
	</table>

	<h3 id="FI_GQT_STATE_OWNERSHIP">FI_GQT_STATE_OWNERSHIP Table</h3>
	<table class="accessible responsive"  summary="GQT State Ownership - Fatal Occupational Injuries">
		<caption>GQT State Ownership</caption>
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
				YEAR
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (4)
			</td>
				<td>
				<span class="small">Column Description</span>
				Available years for data.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				OWNERSHIP_CODE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar(1)
			</td>
				<td>
				<span class="small">Column Description</span>
				Codes for ownership types (All, Private, Government, Federal, State, etc.).
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				STATE_CODE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (3)
			</td>
				<td>
				<span class="small">Column Description</span>
				S+state code and M+metro area codes.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				STATE_NAME
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar(50)
			</td>
				<td>
				<span class="small">Column Description</span>
				State and metro area names.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				SORT_SEQUENCE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (5)
			</td>
			   <td>
			   <span class="small">Column Description</span>
				Display order of state/areas for application.
			</td>
				
			</tr>
		</tbody>
	</table>

	<h3 id="FI_INDUSTRY">FI_INDUSTRY Table</h3>
	<table class="accessible responsive" summary="Industry - Fatal Occupational Injuries">
		<caption>Industry</caption>
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
				INDUSTRY_CODE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (6)
			</td>
				<td>
				<span class="small">Column Description</span>
				The code identifies the industry for which data are observed. See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.industry. See industry definition below.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				INDUSTRY_TEXT
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar(100)
				</td>
				<td>
				<span class="small">Column Description</span>
				Describes the industry for which data are observed. See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.industry. See industry definition below.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				DISPLAY_LEVEL
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (2)
			</td>
				<td>
				<span class="small">Column Description</span>
				A hierarchy of various levels. A proprietary nesting scheme.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				SELECTABLE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar(1)
			</td>
				<td>
				<span class="small">Column Description</span>
				A permission to choose (T) a variable in which reasonable data is assured.
				</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				SORT_SEQUENCE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (5)
			</td>
			<span class="small">Column Description</span>
				<td>Order in which variables are displayed.
			</td>
				
			</tr>
		</tbody>
	</table>

	<h3 id="FI_SERIES">FI_SERIES Table</h3>
	<table class="accessible responsive" summary="Series - Fatal Occupational Injuries">
		<caption>Series</caption>
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
				SERIES_ID
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (30)
			</td>
				<td>
				<span class="small">Column Description</span>
				Code identifying the specific series. See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.series.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				CATEGORY_CODE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (3)
			</td>
				<td>
				<span class="small">Column Description</span>
				The code identifies the category of the observation. Choose combination of Case Code and all ownership, age group, event/exposure, gender, nature, occupations, part, race, primary source of injury, secondary source of injury, worker status (wage/salary or self-employed), worker activity, or worker location (See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.category). Definitions for event/exposure, nature, occupation, part, primary source of injury, secondary source of injury, worker activity, and worker location are provided below.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				DATATYPE_CODE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (1)
			</td>
				<td>
				<span class="small">Column Description</span>
				Code identifying the datatype of the observation. Only Fatal Injuries (count).
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				CASE_CODE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (1)
			</td>
				<td>
				<span class="small">Column Description</span>
				The code identifies the type of case for which data are available. Fatalities in all sectors or detailed industry (private, federal, local, state, or government), event/exposure, detailed occupation (government, all sectors, or private), or source of injury (primary or secondary).See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.case
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				INDUSTRY_CODE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar(6)
			</td>
				<td>
				<span class="small">Column Description</span>
				The code identifies the industry for which data are observed. See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.industry. See industry definition below.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				EVENT_CODE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar(6)
			</td>
				<td>
				<span class="small">Column Description</span>
				Names the event which resulted in the reported injury. See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.event. Definition of event provided below.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				SOURCE_CODE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (6)
			</td>
				<td>
				<span class="small">Column Description</span>
				The code identifies the source of injury. See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.source. Definition of source is provided below
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				OCCUPATION_CODE
			</th>
			   <td>
			   <span class="small">Data Type</span>
			   Varchar (6)
			  </td>
			 <td>
			<span class="small">Column Description</span> 
			 The code identifies the occupation of the person experiencing the injury. See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.occupation. Definition of occupation can be found below.
		</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				AREA_CODE
			</th>
				<td>
				<span class="small">Data Type</span>
				 Varchar(3)
			</td>
				<td>
				<span class="small">Column Description</span>
				Unique code used to identify a specific geographic region. Choose major MSAs, states, or US. See list at ftp://ftp.bls.gov/pub/time.series/fi/fi.area
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				FOOTNOTE_CODES
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (10)
			</td>
				<td>
				<span class="small">Column Description</span>
				Identifies footnote for the data series.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				BEGIN_YEAR
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar(4)
			</td>
				<td>
				<span class="small">Column Description</span>
				Identifies first year for which data are available.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				BEGIN_PERIOD
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar(3)
			</td>
				<td>
				<span class="small">Column Description</span>
				Identifies first data observation within the first year for which data are available.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				END_YEAR
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (4)
			</td>
				<td>
				<span class="small">Column Description</span>
				Identifies last year for which data are available.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				END_PERIOD
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (3)
				</td>
				<td>Identifies last data observation within the first year for which data are available.</td>
				
			</tr>
		</tbody>
	</table>

	<h3 id="FI_SUPERSECTOR">FI_SUPERSECTOR Table</h3>
	<table class="accessible responsive" summary="Super Sector - Fatal Occupational Injuries">
		<caption>Supersector</caption>
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
				SUPERSECTOR_CODE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (3)
			</td>
				<td>
				<span class="small">Column Description</span>
				The code identifies the source of injury. The list can be found at ftp://ftp.bls.gov/pub/time.series/fi/fi.source.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				SUPERSECTOR_NAME
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (100)
			</td>
				<td>
				<span class="small">Column Description</span>
				Describes the source of injury. The list can be found at ftp://ftp.bls.gov/pub/time.series/fi/fi.source.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				DISPLAY_LEVEL
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (2)
			</td>
				<td>
				<span class="small">Column Description</span>
				A hierarchy of various levels. A proprietary nesting scheme.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				SELECTABLE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar(1)
			</td>
				<td>
				<span class="small">Column Description</span>
				A permission to choose (T) a variable in which reasonable data is assured.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				SORT_SEQUENCE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (5)
			</td>
				<td>
				<span class="small">Column Description</span>
				Order in which variables are displayed.
			</td>
				
			</tr>
		</tbody>
	</table>
	