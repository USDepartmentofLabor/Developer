---
layout: post
title: Injuries And Illness
created: 1359641735
description: The Injuries, Illnesses, and Fatalities (IIF) program provides annual information on the rate and number of work related injuries, illnesses, and fatal injuries, and how these statistics vary by incident, industry, geography, occupation, and other characteristics.
---

<div class="force_wrap apiurl">
<p>http://api.dol.gov/V1/Safety/InjuriesAndIllness</p>
</div>

<p>The Injuries, Illnesses, and Fatalities (IIF) program provides annual information on the rate and number of work related injuries, illnesses, and fatal injuries, and how these statistics vary by incident, industry, geography, occupation, and other characteristics. More information and details about the data provided can be found at <a href="http://www.bls.gov/data/#injuries">http://www.bls.gov/data/#injuries</a>.</p>

<a href ="http://api.dol.gov/V1/Safety/InjuriesAndIllness/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=BLS%20Injuries%20and%20Illness%20Dataset" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables
  
<div>
<ul>
<li><a href="#II_AREA">II_AREA</a></li>
<li><a href="#II_CASE_TYPE">II_CASE_TYPE</a></li>
<li><a href="#II_DATA_PUB">II_DATA_PUB</a></li>
<li><a href="#II_DATA_TYPE">II_DATA_TYPE</a></li>
<li><a href="#II_FOOTNOTE">II_FOOTNOTE</a></li>
<li><a href="#II_GQT_CASE">II_GQT_CASE</a></li>
<li><a href="#II_GQT_CHAR">II_GQT_CHAR</a></li>
<li><a href="#II_GQT_OWNERSHIP">II_GQT_OWNERSHIP</a></li>
<li><a href="#II_GQT_STATE">II_GQT_STATE</a></li>
<li><a href="#II_GQT_STATE_OWNERSHIP">II_GQT_STATE_OWNERSHIP</a></li>
<li><a href="#II_INDUSTRY">II_INDUSTRY</a></li>
<li><a href="#II_SERIES">II_SERIES</a></li>
<li><a href="#II_SUPERSECTOR">II_SUPERSECTOR</a></li>
</ul>
</div>
  
<div>
	<h3 id="II_AREA" tabindex="-1">II_AREA Table</h3>
	<table class="accessible responsive" summary="Area - Injuries, Illnesses, and Fatalities (IIF)">
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
			<td>
				<span class="small">Column Description</span>
				Unique code used to identify a specific geographic region. Choose combination of ownership (all, private, state, local, or state and local) and state . See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.area.\
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 AREA_NAME
			 </th>
			 <td>
			 		<span class="small">Data Type</span>
			 		 varchar (100)
			</td>
				<td>
				<span class="small">Column Description</span>
				Describes the specific geographic region. Choose combination of ownership (all, private, state, local, or state and local) and state . See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.area.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				DISPLAY_LEVEL
			</th>
				<td>
				<span class="small">Data type</span>
				varchar (2)
				</td>
				<td>
				<span class="small">Coloumn Description</span>
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
				<span class="small">Data Type </span>
				varchar (5)
			</td>
				<td>
				<span class="small">Column Description</span>
		         Order in which variables are displayed.
			</td>
			</tr>
		</tbody>
	</table>

	<h3 id="II_CASE_TYPE" tabindex="-1">II_CASE_TYPE Table</h3>
	<table class="accessible responsive" summary="Case Type - Injuries, Illnesses, and Fatalities (IIF)">
		<caption>Case Type</caption>
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
				CASE_TYPE_CODE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (1)
			</td>
				<td>
				<span class="small">Column Description</span>
				The code identifies the type of case for which data are available. Choose total recordable cases (all, poisoning, skin disease, hearing loss, respiratory illness, or all other) or involving days away from work, days of job transfer and restriction, or all three. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.case_type. Definitions for days away from work, job transfer, and job restriction are listed below.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				CASE_TYPE_TEXT
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar(100)
			</td>
			<td>
			<span class="small">Column Description</span>
			Describes case for which data are available. Choose total recordable cases (all, poisoning, skin disease, hearing loss, respiratory illness, or all other) or involving days away from work, days of job transfer and restriction, or all three. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.case_type. Definitions for days away from work, job transfer, and job restriction are listed below.
		 </td>
			</tr>
		</tbody>
	</table>

	<h3 id="II_DATA_PUB" tabindex="-1">II_DATA_PUB Table</h3>
	<table class="accessible responsive" summary="Data Pub - Injuries, Illnesses, and Fatalities (IIF)">
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
				Varchar (17)
			</td>
				<td>
				<span class="small">Column Description</span>
				Code identifying the specific series. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.data.1.AllData
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				YEAR
			</th>
				<td>
				<span class="small">Data type</span>
				Varchar(4)
			</td>
				<td>
				<span class="small">Column Description</span>
				Identifies year of observation between 2003-2010 for every Series ID
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
				Identifies the period of the observation (annual, monthly, quarterly).
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
				<span class="small">Column Decscription</span>
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

	<h3 id="II_DATA_TYPE" tabindex="-1">II_DATA_TYPE Table</h3>
	<table class="accessible responsive" summary="Data Type - Injuries, Illnesses, and Fatalities (IIF)">
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
				DATA_TYPE_CODE
				</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (1)
			</td>
				<td>
				<span class="small">Column Description</span>
				Code identifying the datatype of the observation. Choose rate or number of illness or injury cases or illness and injury cases. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.data_type.
				</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				DATA_TYPE_TEXT
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar(100)
			</td>
				<td>
				<span class="small">Column Descrition</span>
				Describes the datatype of the observation. Choose rate or number of illness or injury cases or illness and injury cases. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.data_type.
			</td>
			</tr>
		</tbody>
	</table>

	<h3 id="II_FOOTNOTE" tabindex="-1">II_FOOTNOTE Table</h3>
	<table class="accessible responsive" summary="Footnote -Injuries, Illnesses, and Fatalities (IIF)">
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
				Varchar (1)
			</td>
				<td>
				<span class="small">Column Description</span>
				Identifies footnote for the data series. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.footnote.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				FOOTNOTE_TEXT
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar(100)
			</td>
				<td>
				<span class="small">Column Description</span>
				Contains the text of the footnote. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.footnote
			</td>
			</tr>
		</tbody>
	</table>

	<h3 id="II_GQT_CASE" tabindex="-1">II_GQT_CASE Table</h3>
	<table class="accessible responsive" summary="GQT Case - Injuries, Illnesses, and Fatalities (IIF)">
		<caption>GQT Case</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Coloumn Description</th>
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
				Abbreviations for type of case component (industry, occupation, source, event, occupation).
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
				The code identifies the type of case for which data are available. Choose total recordable cases (all, poisoning, skin disease, hearing loss, respiratory illeness, or all other) or involving days away from work, days of job transfer and restriction, or all three. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.case_type. Definitions for days away from work, job transfer, and job restriction are listed below.
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
				Describes case for which data are available. Choose total recordable cases (all, poisoning, skin disease, hearing loss, respiratory illeness, or all other) or involving days away from work, days of job transfer and restriction, or all three. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.case_type. Definitions for days away from work, job transfer, and job restriction are listed below.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				GQT_CASE_TABLE_NAME
			</th>
				<td>
				<span class="small">Data type</span>
				Varchar(50)
			</td>
				<td>
				<span class="small">Column Description</span>
				Describes the database tables to reference for the application based on code and component.
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
				Describes the table columns to display from the CASE_TABLE_NAME.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				GQT_CASE_TITLE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar(50)
			</td>
				<td>
				<span class="small">Column Description</span>
				Contains the generic case selection.
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
				Order in which variables are displayed.
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
				<span class="small">Column Description</span>
				Whether CASE_CODE is displayed or not.
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
				Code Display.
			</td>
			</tr>
		</tbody>
	</table>

	<h3 id="II_GQT_CHAR" tabindex="-1">II_GQT_CHAR Table</h3>
	<table class="accessible responsive" summary="GQT Character - Injuries, Illnesses, and Fatalities (IIF)">
		<caption>GQT Character</caption>
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
				Varchar(1)The code identifies the type of case for which data are available. Choose total recordable cases (all, poisoning, skin disease, hearing loss, respiratory illeness, or all other) or involving days away from work, days of job transfer and restriction, or all three. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.case_type.
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
				 Abbreviations for type of case component.
			</td>
			</tr>
		</tbody>
	</table>

	<h3 id="II_GQT_OWNERSHIP" tabindex="-1">II_GQT_OWNERSHIP Table</h3>
	<table class="accessible responsive" summary="GQT Ownership - Injuries, Illnesses, and Fatalities (IIF)">
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
				Unique code used to identify a specific ownership type (private, state government, local government).
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
				Describes the ownership type for the observation (private, state government, local government, all).
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

	<h3 id="II_GQT_STATE" tabindex="-1">II_GQT_STATE Table</h3>
	<table class="accessible responsive" summary="GQT State - Injuries, Illnesses, and Fatalities (IIF)">
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
				Varchar (2)
				</td>
				<td>
				<span class="small">Column Description</span>
				Unique code used to identify the state or area associated with the observation.
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
				State or area name associated with the observation.
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

	<h3 id="II_GQT_STATE_OWNERSHIP" tabindex="-1">II_GQT_STATE_OWNERSHIP Table</h3>
	<table class="accessible responsive" summary="GQT State Ownership - Injuries, Illnesses, and Fatalities (IIF)">
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
				Identifies year of observation between 2003-2010 for every Series ID.
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
				Unique code used to identify a specific ownership type (private, state government, local government).
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				STATE_CODE
			</th>
				<td>
				<span class="small">Data Type</span>
		         Unique code used to identify the state or area associated with the observation.
			</td>
				<td>
				<span class="small">Column Description</span>
				Unique code used to identify the state or area associated with the observation.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				STATE_NAME
			</th>
				<td>
				<span class="small">Data Type</span>
			   State or area name associated with the observation.
			</td>
				<td>
				<span class="small">Column Description</span>
				State or area name associated with the observation.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				SORT_SEQUENCE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (5)Order in which variables are displayed.
			</td>
				<td>
				<span class="small">Column Description</span>
		        Order in which variables are displayed.
			</td>
			</tr>
		</tbody>
	</table>

	<h3 id="II_INDUSTRY" tabindex="-1">II_INDUSTRY Table</h3>
	<table class="accessible responsive" summary="Industry - Injuries, Illnesses, and Fatalities (IIF)">
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
				SUPERSECTOR_CODE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (3) 
			</td>
				<td>
				<span class="small">Column Description</span>
				Unique code use to identify the supersectors (Cobstruction, Education &amp; Health Services, Financial Activities, Information, Leisure &amp; Hospitality, Manufacturing, Natural Resources &amp; Mining, Trade Transportation &amp; Utilities, or Professional &amp; Business Services). Definition of supersector is provided below.
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
				The code identifies the industry for which data are observed. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.industry. See industry definition below.
			</td>
			</tr>
			<tr>
				<th scope="row">
			<span class="small">Column Name</span>
				INDUSTRY_NAME
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (100)Describes the industry for which data are observed. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.industry. See industry definition below.
			</td>
				<td>
				<span class="small">Column Description</span>
				Describes the industry for which data are observed. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.industry. See industry definition below.
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
				Varchar (2)A hierarchy of various levels. A proprietary nesting scheme.
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

	<h3 id="II_SERIES" tabindex="-1">II_SERIES Table</h3>
	<table class="accessible responsive" summary="Series - Injuries, Illnesses, and Fatalities (IIF)">
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
				Varchar (17)
			</td>
				<td>
				<span class="small">Column Description</span>
			Code identifying the specific series. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.series.
			</td>
			</tr>
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
				Unique code use to identify the supersectors (Cobstruction, Education &amp; Health Services, Financial Activities, Information, Leisure &amp; Hospitality, Manufacturing, Natural Resources &amp; Mining, Trade Transportation &amp; Utilities, or Professional &amp; Business Services). Definition of supersector is provided below.
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
				The code identifies the industry for which data are observed. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.industry. See industry definition below.
				</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				DATA_TYPE_CODE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (1)
			</td>
				<td>
				<span class="small">Column Description</span>
				Code identifying the datatype of the observation. Choose rate or number of illness or injury cases or illness and injury cases. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.data_type.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				CASE_TYPE_CODE
			</th>
				<td>
				<span class="small">Data Type</span>
				Varchar (1)
			</td>
				<td>
				<span class="small">Column Description</span>
				The code identifies the type of case for which data are available. Choose total recordable cases (all, poisoning, skin disease, hearing loss, respiratory illeness, or all other) or involving days away from work, days of job transfer and restriction, or all three. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.case_type. Definitions for days away from work, job transfer, and job restriction are listed below.
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
				Unique code used to identify a specific geographic region. Choose combination of ownership (all, private, state, local, or state and local) and state . See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.area.
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
				Identifies footnote for the data series. See list at ftp://ftp.bls.gov/pub/time.series/ii/ii.footnote.
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
				Identifies first year for which data are available (2003-2008).
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
				Identifies last year for which data are available (2005-2010).
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
				<td>
				<span class="small">Column Description</span>
			Varchar (3)Identifies last data observation within the first year for which data are available.
		</td>
			</tr>
		</tbody>
	</table>

	<h3 id="II_SUPERSECTOR">II_SUPERSECTOR Table</h3>
	<table class="accessible responsive" summary="Super Sector -Injuries, Illnesses, and Fatalities (IIF)">
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
				Unique code use to identify the supersectors (Cobstruction, Education &amp; Health Services, Financial Activities, Information, Leisure &amp; Hospitality, Manufacturing, Natural Resources &amp; Mining, Trade Transportation &amp; Utilities, or Professional &amp; Business Services). Definition of supersector is provided below.
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
				Name identifying the type of supersector (Cobstruction, Education &amp; Health Services, Financial Activities, Information, Leisure &amp; Hospitality, Manufacturing, Natural Resources &amp; Mining, Trade Transportation &amp; Utilities, or Professional &amp; Business Services). Definition of supersector is provided below.
			</td>
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
</div>
