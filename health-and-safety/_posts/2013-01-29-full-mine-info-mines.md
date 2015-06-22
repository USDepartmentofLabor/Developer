---
layout: post
title: Full Mine Information Mines - United States Department of Labor Developer Portal
created: 1359495618
description: The Full Mine Information dataset lists all Coal and Metal/Non-Metal mines under MSHA's jurisdiction since 1/1/1970.
---

```
http://api.dol.gov/V1/Mining/FullMineInfo/
```

<p>The Full Mine Info dataset lists all Coal and Metal/Non-Metal mines under MSHA's jurisdiction since 1/1/1970. It includes such information as the current status of each mine (Active, Abandoned, NonProducing, etc.), the current owner and operating company, commodity codes and physical attributes of the mine. Mine ID is the unique key for this data.</p>

<a href ="http://api.dol.gov/V1/Mining/FullMineInfo/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL%20Mines%20Dataset" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables  

<div class="dsktp_tbl">
	<h3>MSHA_mines</h3>
	<table Summary="MSHA Mines - Full Mine Information">
		<caption>MSHA Mines</caption>
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
				<td>Primary key of the table - Primary Key</td>
				<td>bigint</td>
			</tr>
			<tr>
				<th scope="row">MINE_ID</th>
				<td>Identification number assigned to the mine by MSHA - Primary Key</td>
				<td>varchar (14)</td>
			</tr>
			<tr>
				<th scope="row">CURRENT_MINE_NAME</th>
				<td>Name of the mine as designated on the Legal ID Form</td>
				<td>varchar (50)</td>
			</tr>
			<tr>
				<th scope="row">COAL_METAL_IND</th>
				<td>Identifies if the mine is a Coal or Metal/Non-Metal mine</td>
				<td>varchar (1)</td>
			</tr>
			<tr>
				<th scope="row">CURRENT_MINE_TYPE</th>
				<td>From the Legal ID (LID) form. The types are Facility, Surface or Underground</td>
				<td>varchar (20)</td>
			</tr>
			<tr>
				<th scope="row">CURRENT_MINE_STATUS</th>
				<td>Current status of the mine.</td>
				<td>varchar (50)</td>
			</tr>
			<tr>
				<th scope="row">CURRENT_STATUS_DT</th>
				<td>Date the mine obtained the current status</td>
				<td>datetime</td>
			</tr>
			<tr>
				<th scope="row">CURRENT_CONTROLLER_ID</th>
				<td>Identification number assigned by MSHA</td>
				<td>varchar (7)</td>
			</tr>
			<tr>
				<th scope="row">CURRENT_CONTROLLER_NAME</th>
				<td>Either the business name or a person's name for the Legal Entity</td>
				<td>varchar (72)</td>
			</tr>
			<tr>
				<th scope="row">CURRENT_OPERATOR_ID</th>
				<td>Identification number assigned by MSHA Assessments Center</td>
				<td>varchar (7)</td>
			</tr>
			<tr>
				<th scope="row">CURRENT_OPERATOR_NAME</th>
				<td>The latest operator name</td>
				<td>varchar (60)</td>
			</tr>
			<tr>
				<th scope="row">STATE</th>
				<td>State in which the mine is located</td>
				<td>varchar (2)</td>
			</tr>
			<tr>
				<th scope="row">BOM_STATE_CD</th>
				<td>Bureau of Mines (BOM) assigned state codes</td>
				<td>varchar (2)</td>
			</tr>
			<tr>
				<th scope="row">FIPS_CNTY_CD</th>
				<td>Federal Information Processing Standard county code</td>
				<td>varchar (3)</td>
			</tr>
			<tr>
				<th scope="row">FIPS_CNTY_NM</th>
				<td>FIPS county code name</td>
				<td>varchar (80)</td>
			</tr>
			<tr>
				<th scope="row">CONG_DIST_CD</th>
				<td>The Congressional District of the state</td>
				<td>varchar (2)</td>
			</tr>
			<tr>
				<th scope="row">COMPANY_TYPE</th>
				<td>Unique description for each legal entity type</td>
				<td>varchar (80)</td>
			</tr>
			<tr>
				<th scope="row">CURRENT_CONTROLLER_BEGIN_DT</th>
				<td>Start date of the operating period at the mine</td>
				<td>datetime</td>
			</tr>
			<tr>
				<th scope="row">DISTRICT</th>
				<td>The first three characters of the Coal districts</td>
				<td>varchar (3)</td>
			</tr>
			<tr>
				<th scope="row">OFFICE_CD</th>
				<td>MSHA code that identifies the office</td>
				<td>varchar (5)</td>
			</tr>
			<tr>
				<th scope="row">OFFICE_NAME</th>
				<td>The name of the office to which the mine is assigned</td>
				<td>varchar (80)</td>
			</tr>
			<tr>
				<th scope="row">ASSESS_CTRL_NO</th>
				<td>The most recent Assessment Control Number</td>
				<td>varchar (20)</td>
			</tr>
			<tr>
				<th scope="row">PRIMARY_SIC_CD</th>
				<td>This is a code derived from the SIC codes</td>
				<td>varchar (6)</td>
			</tr>
			<tr>
				<th scope="row">PRIMARY_SIC</th>
				<td>Description of the SIC</td>
				<td>varchar (80)</td>
			</tr>
			<tr>
				<th scope="row">PRIMARY_SIC_CD_1</th>
				<td>Standard Industrial Classification Code</td>
				<td>varchar (4)</td>
			</tr>
			<tr>
				<th scope="row">PRIMARY_SIC_CD_SFX</th>
				<td>Suffix to the SIC</td>
				<td>varchar (2)</td>
			</tr>
			<tr>
				<th scope="row">SECONDARY_SIC_CD</th>
				<td>This is a code derived from the SIC</td>
				<td>varchar (6)</td>
			</tr>
			<tr>
				<th scope="row">SECONDARY_SIC</th>
				<td>Description of the SIC</td>
				<td>varchar (80)</td>
			</tr>
			<tr>
				<th scope="row">SECONDARY_SIC_CD_1</th>
				<td>Standard Industrial Classification Code (SIC)</td>
				<td>varchar (4)</td>
			</tr>
			<tr>
				<th scope="row">SECONDARY_SIC_CD_SFX</th>
				<td>Suffix to the SIC</td>
				<td>varchar (2)</td>
			</tr>
			<tr>
				<th scope="row">PRIMARY_CANVASS_CD</th>
				<td>Canvass code associated with the primary</td>
				<td>varchar (20)</td>
			</tr>
			<tr>
				<th scope="row">PRIMARY_CANVASS</th>
				<td>Unique code abbreviation for the primary</td>
				<td>varchar (20)</td>
			</tr>
			<tr>
				<th scope="row">SECONDARY_CANVASS_CD</th>
				<td>Canvass code associated with the secondary</td>
				<td>varchar (20)</td>
			</tr>
			<tr>
				<th scope="row">SECONDARY_CANVASS</th>
				<td>Unique code abbreviation for the secondary</td>
				<td>varchar (20)</td>
			</tr>
			<tr>
				<th scope="row">CURRENT_103I</th>
				<td>This is the description of the Mine 103I Classification Code</td>
				<td>varchar (80)</td>
			</tr>
			<tr>
				<th scope="row">CURRENT_103I_DT</th>
				<td>The date the mine entered the current 103I status</td>
				<td>datetime</td>
			</tr>
			<tr>
				<th scope="row">PORTABLE_OPERATION</th>
				<td>Indicates whether this is a portable mine or not</td>
				<td>varchar (1)</td>
			</tr>
			<tr>
				<th scope="row">PORTABLE_FIPS_ST_CD</th>
				<td>FIPS state code if it is a portable mine</td>
				<td>varchar (2)</td>
			</tr>
			<tr>
				<th scope="row">DAYS_PER_WEEK</th>
				<td>Number of days per week</td>
				<td>float</td>
			</tr>
			<tr>
				<th scope="row">HOURS_PER_SHIFT</th>
				<td>Number of hours per shift at the mine</td>
				<td>float</td>
			</tr>
			<tr>
				<th scope="row">PROD_SHIFTS_PER_DAY</th>
				<td>Number of production shifts per 24-hour day</td>
				<td>float</td>
			</tr>
			<tr>
				<th scope="row">MAINT_SHIFTS_PER_DAY</th>
				<td>Number of maintenance-only shifts per 24-hour day</td>
				<td>float</td>
			</tr>
			<tr>
				<th scope="row">NO_EMPLOYEES</th>
				<td>Number of workers employed at the mine</td>
				<td>float</td>
			</tr>
			<tr>
				<th scope="row">PART48_TRAINING</th>
				<td>Indicates whether MSHA is restricted</td>
				<td>varchar (1)</td>
			</tr>
			<tr>
				<th scope="row">LONGITUDE</th>
				<td>Longitude denoting the mine location</td>
				<td>float</td>
			</tr>
			<tr>
				<th scope="row">LATITUDE</th>
				<td>Latitude denoting the mine location</td>
				<td>float</td>
			</tr>
			<tr>
				<th scope="row">AVG_MINE_HEIGHT</th>
				<td>Average mining height in inches</td>
				<td>float</td>
			</tr>
			<tr>
				<th scope="row">MINE_GAS_CATEGORY_CD</th>
				<td>This categorization is used by underground</td>
				<td>varchar (20)</td>
			</tr>
			<tr>
				<th scope="row">METHANE_LIBERATION</th>
				<td>Methane Liberation on Section (cubic feet each 24 hrs).</td>
				<td>float</td>
			</tr>
			<tr>
				<th scope="row">NO_PRODUCING_PITS</th>
				<td>Number of pits that are actively producing</td>
				<td>float</td>
			</tr>
			<tr>
				<th scope="row">NO_NONPRODUCING_PITS</th>
				<td>Number of pits that are not producing</td>
				<td>float</td>
			</tr>
			<tr>
				<th scope="row">NO_TAILING_PONDS</th>
				<td>Number of tailing ponds (Metal/Non-Metal mines only).</td>
				<td>float</td>
			</tr>
			<tr>
				<th scope="row">PILLAR_RECOVERY_USED</th>
				<td>Indicator denoting whether or not a mine uses pillar</td>
				<td>varchar (1)</td>
			</tr>
			<tr>
				<th scope="row">HIGHWALL_MINER_USED</th>
				<td>Indicator denoting whether or not a mine uses a highwall</td>
				<td>varchar (1)</td>
			</tr>
			<tr>
				<th scope="row">MULTIPLE_PITS</th>
				<td>Indicates whether there are multiple pits</td>
				<td>varchar (1)</td>
			</tr>
			<tr>
				<th scope="row">MINERS_REP_IND</th>
				<td>Indicates where there is a miners' representative</td>
				<td>varchar (1)</td>
			</tr>
			<tr>
				<th scope="row">SAFETY_COMMITTEE_IND</th>
				<td>Values are 'Y' or 'N'.</td>
				<td>varchar (1)</td>
			</tr>
			<tr>
				<th scope="row">MILES_FROM_OFFICE</th>
				<td>Driving distance to the mine/mill</td>
				<td>float</td>
			</tr>
			<tr>
				<th scope="row">DIRECTIONS_TO_MINE</th>
				<td>Free-form description of directions</td>
				<td>varchar (300)</td>
			</tr>
			<tr>
				<th scope="row">NEAREST_TOWN</th>
				<td>Nearest town or city</td>
				<td>varchar (30)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h3>MSHA_Mines</h3>
	<h4>MSHA Full Mine Information</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: id</p>
		<p><span class="mbl-strng">Column Description:</span> Primary key of the table - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: MINE_ID</p>
		<p><span class="mbl-strng">Column Description:</span> Identification number assigned to the mine by MSHA - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (14)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: CURRENT_MINE_NAME</p>
		<p><span class="mbl-strng">Column Description:</span> Name of the mine as designated on the Legal ID Form</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (50)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: COAL_METAL_IND</p>
		<p><span class="mbl-strng">Column Description:</span> Identifies if the mine is a Coal or Metal/Non-Metal mine</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: CURRENT_MINE_TYPE</p>
		<p><span class="mbl-strng">Column Description:</span> From the Legal ID (LID) form. The types are Facility, Surface or Underground</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (20)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: CURRENT_MINE_STATUS</p>
		<p><span class="mbl-strng">Column Description:</span> Current status of the mine.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (50)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: CURRENT_STATUS_DT</p>
		<p><span class="mbl-strng">Column Description:</span> Date the mine obtained the current status</p>
		<p><span class="mbl-strng">Data Type:</span> datetime</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: CURRENT_CONTROLLER_ID</p>
		<p><span class="mbl-strng">Column Description:</span> Identification number assigned by MSHA</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (7)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: CURRENT_CONTROLLER_NAME</p>
		<p><span class="mbl-strng">Column Description:</span> Either the business name or a person's name for the Legal Entity</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (72)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: CURRENT_OPERATOR_ID</p>
		<p><span class="mbl-strng">Column Description:</span> Identification number assigned by MSHA Assessments Center</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (7)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: CURRENT_OPERATOR_NAME</p>
		<p><span class="mbl-strng">Column Description:</span> The latest operator name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (60)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: STATE</p>
		<p><span class="mbl-strng">Column Description:</span> State in which the mine is located</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (2)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: BOM_STATE_CD</p>
		<p><span class="mbl-strng">Column Description:</span> Bureau of Mines (BOM) assigned state codes</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (2)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: FIPS_CNTY_CD</p>
		<p><span class="mbl-strng">Column Description:</span> Federal Information Processing Standard county code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (3)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: FIPS_CNTY_NM</p>
		<p><span class="mbl-strng">Column Description:</span> FIPS county code name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (80)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: CONG_DIST_CD</p>
		<p><span class="mbl-strng">Column Description:</span> The Congressional District of the state</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (2)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: COMPANY_TYPE</p>
		<p><span class="mbl-strng">Column Description:</span> Unique description for each legal entity type</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (80)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: CURRENT_CONTROLLER_BEGIN_DT</p>
		<p><span class="mbl-strng">Column Description:</span> Start date of the operating period at the mine</p>
		<p><span class="mbl-strng">Data Type:</span> datetime</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: DISTRICT</p>
		<p><span class="mbl-strng">Column Description:</span> The first three characters of the Coal districts</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (3)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: OFFICE_CD</p>
		<p><span class="mbl-strng">Column Description:</span> MSHA code that identifies the office</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (5)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: OFFICE_NAME</p>
		<p><span class="mbl-strng">Column Description:</span> The name of the office to which the mine is assigned</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (80)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: ASSESS_CTRL_NO</p>
		<p><span class="mbl-strng">Column Description:</span> The most recent Assessment Control Number</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (20)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: PRIMARY_SIC_CD</p>
		<p><span class="mbl-strng">Column Description:</span> This is a code derived from the SIC codes</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (6)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: PRIMARY_SIC</p>
		<p><span class="mbl-strng">Column Description:</span> Description of the SIC</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (80)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: PRIMARY_SIC_CD_1</p>
		<p><span class="mbl-strng">Column Description:</span> Standard Industrial Classification Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (4)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: PRIMARY_SIC_CD_SFX</p>
		<p><span class="mbl-strng">Column Description:</span> Suffix to the SIC</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (2)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: SECONDARY_SIC_CD</p>
		<p><span class="mbl-strng">Column Description:</span> This is a code derived from the SIC</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (6)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: SECONDARY_SIC</p>
		<p><span class="mbl-strng">Column Description:</span> Description of the SIC</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (80)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: SECONDARY_SIC_CD_1</p>
		<p><span class="mbl-strng">Column Description:</span> Standard Industrial Classification Code (SIC)</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (4)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: SECONDARY_SIC_CD_SFX</p>
		<p><span class="mbl-strng">Column Description:</span> Suffix to the SIC</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (2)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: PRIMARY_CANVASS_CD</p>
		<p><span class="mbl-strng">Column Description:</span> Canvass code associated with the primary</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (20)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: PRIMARY_CANVASS</p>
		<p><span class="mbl-strng">Column Description:</span> Unique code abbreviation for the primary</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (20)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: SECONDARY_CANVASS_CD</p>
		<p><span class="mbl-strng">Column Description:</span> Canvass code associated with the secondary</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (20)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: SECONDARY_CANVASS</p>
		<p><span class="mbl-strng">Column Description:</span> Unique code abbreviation for the secondary</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (20)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: CURRENT_103I</p>
		<p><span class="mbl-strng">Column Description:</span> This is the description of the Mine 103I Classification Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (80)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: CURRENT_103I_DT</p>
		<p><span class="mbl-strng">Column Description:</span> The date the mine entered the current 103I status</p>
		<p><span class="mbl-strng">Data Type:</span> datetime</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: PORTABLE_OPERATION</p>
		<p><span class="mbl-strng">Column Description:</span> Indicates whether this is a portable mine or not</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: PORTABLE_FIPS_ST_CD</p>
		<p><span class="mbl-strng">Column Description:</span> FIPS state code if it is a portable mine</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (2)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: DAYS_PER_WEEK</p>
		<p><span class="mbl-strng">Column Description:</span> Number of days per week</p>
		<p><span class="mbl-strng">Data Type:</span> float</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: HOURS_PER_SHIFT</p>
		<p><span class="mbl-strng">Column Description:</span> Number of hours per shift at the mine</p>
		<p><span class="mbl-strng">Data Type:</span> float</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: PROD_SHIFTS_PER_DAY</p>
		<p><span class="mbl-strng">Column Description:</span> Number of production shifts per 24-hour day</p>
		<p><span class="mbl-strng">Data Type:</span> float</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: MAINT_SHIFTS_PER_DAY</p>
		<p><span class="mbl-strng">Column Description:</span> Number of maintenance-only shifts per 24-hour day</p>
		<p><span class="mbl-strng">Data Type:</span> float</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: NO_EMPLOYEES</p>
		<p><span class="mbl-strng">Column Description:</span> Number of workers employed at the mine</p>
		<p><span class="mbl-strng">Data Type:</span> float</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: PART48_TRAINING</p>
		<p><span class="mbl-strng">Column Description:</span> Indicates whether MSHA is restricted</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: LONGITUDE</p>
		<p><span class="mbl-strng">Column Description:</span> Longitude denoting the mine location</p>
		<p><span class="mbl-strng">Data Type:</span> float</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: LATITUDE</p>
		<p><span class="mbl-strng">Column Description:</span> Latitude denoting the mine location</p>
		<p><span class="mbl-strng">Data Type:</span> float</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: AVG_MINE_HEIGHT</p>
		<p><span class="mbl-strng">Column Description:</span> Average mining height in inches</p>
		<p><span class="mbl-strng">Data Type:</span> float</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: MINE_GAS_CATEGORY_CD</p>
		<p><span class="mbl-strng">Column Description:</span> This categorization is used by underground</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (20)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: METHANE_LIBERATION</p>
		<p><span class="mbl-strng">Column Description:</span> Methane Liberation on Section (cubic feet each 24 hrs).</p>
		<p><span class="mbl-strng">Data Type:</span> float</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: NO_PRODUCING_PITS</p>
		<p><span class="mbl-strng">Column Description:</span> Number of pits that are actively producing</p>
		<p><span class="mbl-strng">Data Type:</span> float</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: NO_NONPRODUCING_PITS</p>
		<p><span class="mbl-strng">Column Description:</span> Number of pits that are not producing</p>
		<p><span class="mbl-strng">Data Type:</span> float</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: NO_TAILING_PONDS</p>
		<p><span class="mbl-strng">Column Description:</span> Number of tailing ponds (Metal/Non-Metal mines only).</p>
		<p><span class="mbl-strng">Data Type:</span> float</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: PILLAR_RECOVERY_USED</p>
		<p><span class="mbl-strng">Column Description:</span> Indicator denoting whether or not a mine uses pillar</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: HIGHWALL_MINER_USED</p>
		<p><span class="mbl-strng">Column Description:</span> Indicator denoting whether or not a mine uses a highwall</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: MULTIPLE_PITS</p>
		<p><span class="mbl-strng">Column Description:</span> Indicates whether there are multiple pits</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: MINERS_REP_IND</p>
		<p><span class="mbl-strng">Column Description:</span> Indicates where there is a miners' representative</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: SAFETY_COMMITTEE_IND</p>
		<p><span class="mbl-strng">Column Description:</span> Values are 'Y' or 'N'.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: MILES_FROM_OFFICE</p>
		<p><span class="mbl-strng">Column Description:</span> Driving distance to the mine/mill</p>
		<p><span class="mbl-strng">Data Type:</span> float</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: DIRECTIONS_TO_MINE</p>
		<p><span class="mbl-strng">Column Description:</span> Free-form description of directions</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (300)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: NEAREST_TOWN</p>
		<p><span class="mbl-strng">Column Description:</span> Nearest town or city</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (30)</p>		
	</div>
</div>