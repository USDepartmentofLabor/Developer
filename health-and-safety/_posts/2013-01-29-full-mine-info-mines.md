---
layout: post
title: Full Mine Info Mines
created: 1359495618
---

```
http://api.dol.gov/V1/Mining/FullMineInfo/
```

<p>The Full Mine Info dataset lists all Coal and Metal/Non-Metal mines under MSHA's jurisdiction since 1/1/1970. It includes such information as the current status of each mine (Active, Abandoned, NonProducing, etc.), the current owner and operating company, commodity codes and physical attributes of the mine. Mine ID is the unique key for this data.</p>


<a href ="http://api.dol.gov/V1/Mining/FullMineInfo/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL%20Mines%20Dataset" class="button radius button_dataset">Explore This Data</a>


## Dataset Tables  
<h3>MSHA_mines</h3>

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
			<td>Primary key of the table - Primary Key</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th>MINE_ID</th>
			<td>Identification number assigned to the mine by MSHA - Primary Key</td>
			<td>varchar (14)</td>
		</tr>
		<tr>
			<th>CURRENT_MINE_NAME</th>
			<td>Name of the mine as designated on the Legal ID Form</td>
			<td>varchar (50)</td>
		</tr>
		<tr>
			<th>COAL_METAL_IND</th>
			<td>Identifies if the mine is a Coal or Metal/Non-Metal mine</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th>CURRENT_MINE_TYPE</th>
			<td>From the Legal ID (LID) form. The types are Facility, Surface or Underground</td>
			<td>varchar (20)</td>
		</tr>
		<tr>
			<th>CURRENT_MINE_STATUS</th>
			<td>Current status of the mine.</td>
			<td>varchar (50)</td>
		</tr>
		<tr>
			<th>CURRENT_STATUS_DT</th>
			<td>Date the mine obtained the current status</td>
			<td>datetime</td>
		</tr>
		<tr>
			<th>CURRENT_CONTROLLER_ID</th>
			<td>Identification number assigned by MSHA</td>
			<td>varchar (7)</td>
		</tr>
		<tr>
			<th>CURRENT_CONTROLLER_NAME</th>
			<td>Either the business name or a person's name for the Legal Entity</td>
			<td>varchar (72)</td>
		</tr>
		<tr>
			<th>CURRENT_OPERATOR_ID</th>
			<td>Identification number assigned by MSHA Assessments Center</td>
			<td>varchar (7)</td>
		</tr>
		<tr>
			<th>CURRENT_OPERATOR_NAME</th>
			<td>The latest operator name</td>
			<td>varchar (60)</td>
		</tr>
		<tr>
			<th>STATE</th>
			<td>State in which the mine is located</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th>BOM_STATE_CD</th>
			<td>Bureau of Mines (BOM) assigned state codes</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th>FIPS_CNTY_CD</th>
			<td>Federal Information Processing Standard county code</td>
			<td>varchar (3)</td>
		</tr>
		<tr>
			<th>FIPS_CNTY_NM</th>
			<td>FIPS county code name</td>
			<td>varchar (80)</td>
		</tr>
		<tr>
			<th>CONG_DIST_CD</th>
			<td>The Congressional District of the state</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th>COMPANY_TYPE</th>
			<td>Unique description for each legal entity type</td>
			<td>varchar (80)</td>
		</tr>
		<tr>
			<th>CURRENT_CONTROLLER_BEGIN_DT</th>
			<td>Start date of the operating period at the mine</td>
			<td>datetime</td>
		</tr>
		<tr>
			<th>DISTRICT</th>
			<td>The first three characters of the Coal districts</td>
			<td>varchar (3)</td>
		</tr>
		<tr>
			<th>OFFICE_CD</th>
			<td>MSHA code that identifies the office</td>
			<td>varchar (5)</td>
		</tr>
		<tr>
			<th>OFFICE_NAME</th>
			<td>The name of the office to which the mine is assigned</td>
			<td>varchar (80)</td>
		</tr>
		<tr>
			<th>ASSESS_CTRL_NO</th>
			<td>The most recent Assessment Control Number</td>
			<td>varchar (20)</td>
		</tr>
		<tr>
			<th>PRIMARY_SIC_CD</th>
			<td>This is a code derived from the SIC codes</td>
			<td>varchar (6)</td>
		</tr>
		<tr>
			<th>PRIMARY_SIC</th>
			<td>Description of the SIC</td>
			<td>varchar (80)</td>
		</tr>
		<tr>
			<th>PRIMARY_SIC_CD_1</th>
			<td>Standard Industrial Classification Code</td>
			<td>varchar (4)</td>
		</tr>
		<tr>
			<th>PRIMARY_SIC_CD_SFX</th>
			<td>Suffix to the SIC</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th>SECONDARY_SIC_CD</th>
			<td>This is a code derived from the SIC</td>
			<td>varchar (6)</td>
		</tr>
		<tr>
			<th>SECONDARY_SIC</th>
			<td>Description of the SIC</td>
			<td>varchar (80)</td>
		</tr>
		<tr>
			<th>SECONDARY_SIC_CD_1</th>
			<td>Standard Industrial Classification Code (SIC)</td>
			<td>varchar (4)</td>
		</tr>
		<tr>
			<th>SECONDARY_SIC_CD_SFX</th>
			<td>Suffix to the SIC</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th>PRIMARY_CANVASS_CD</th>
			<td>Canvass code associated with the primary</td>
			<td>varchar (20)</td>
		</tr>
		<tr>
			<th>PRIMARY_CANVASS</th>
			<td>Unique code abbreviation for the primary</td>
			<td>varchar (20)</td>
		</tr>
		<tr>
			<th>SECONDARY_CANVASS_CD</th>
			<td>Canvass code associated with the secondary</td>
			<td>varchar (20)</td>
		</tr>
		<tr>
			<th>SECONDARY_CANVASS</th>
			<td>Unique code abbreviation for the secondary</td>
			<td>varchar (20)</td>
		</tr>
		<tr>
			<th>CURRENT_103I</th>
			<td>This is the description of the Mine 103I Classification Code</td>
			<td>varchar (80)</td>
		</tr>
		<tr>
			<th>CURRENT_103I_DT</th>
			<td>The date the mine entered the current 103I status</td>
			<td>datetime</td>
		</tr>
		<tr>
			<th>PORTABLE_OPERATION</th>
			<td>Indicates whether this is a portable mine or not</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th>PORTABLE_FIPS_ST_CD</th>
			<td>FIPS state code if it is a portable mine</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th>DAYS_PER_WEEK</th>
			<td>Number of days per week</td>
			<td>float</td>
		</tr>
		<tr>
			<th>HOURS_PER_SHIFT</th>
			<td>Number of hours per shift at the mine</td>
			<td>float</td>
		</tr>
		<tr>
			<th>PROD_SHIFTS_PER_DAY</th>
			<td>Number of production shifts per 24-hour day</td>
			<td>float</td>
		</tr>
		<tr>
			<th>MAINT_SHIFTS_PER_DAY</th>
			<td>Number of maintenance-only shifts per 24-hour day</td>
			<td>float</td>
		</tr>
		<tr>
			<th>NO_EMPLOYEES</th>
			<td>Number of workers employed at the mine</td>
			<td>float</td>
		</tr>
		<tr>
			<th>PART48_TRAINING</th>
			<td>Indicates whether MSHA is restricted</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th>LONGITUDE</th>
			<td>Longitude denoting the mine location</td>
			<td>float</td>
		</tr>
		<tr>
			<th>LATITUDE</th>
			<td>Latitude denoting the mine location</td>
			<td>float</td>
		</tr>
		<tr>
			<th>AVG_MINE_HEIGHT</th>
			<td>Average mining height in inches</td>
			<td>float</td>
		</tr>
		<tr>
			<th>MINE_GAS_CATEGORY_CD</th>
			<td>This categorization is used by underground</td>
			<td>varchar (20)</td>
		</tr>
		<tr>
			<th>METHANE_LIBERATION</th>
			<td>Methane Liberation on Section (cubic feet each 24 hrs).</td>
			<td>float</td>
		</tr>
		<tr>
			<th>NO_PRODUCING_PITS</th>
			<td>Number of pits that are actively producing</td>
			<td>float</td>
		</tr>
		<tr>
			<th>NO_NONPRODUCING_PITS</th>
			<td>Number of pits that are not producing</td>
			<td>float</td>
		</tr>
		<tr>
			<th>NO_TAILING_PONDS</th>
			<td>Number of tailing ponds (Metal/Non-Metal mines only).</td>
			<td>float</td>
		</tr>
		<tr>
			<th>PILLAR_RECOVERY_USED</th>
			<td>Indicator denoting whether or not a mine uses pillar</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th>HIGHWALL_MINER_USED</th>
			<td>Indicator denoting whether or not a mine uses a highwall</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th>MULTIPLE_PITS</th>
			<td>Indicates whether there are multiple pits</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th>MINERS_REP_IND</th>
			<td>Indicates where there is a miners' representative</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th>SAFETY_COMMITTEE_IND</th>
			<td>Values are 'Y' or 'N'.</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th>MILES_FROM_OFFICE</th>
			<td>Driving distance to the mine/mill</td>
			<td>float</td>
		</tr>
		<tr>
			<th>DIRECTIONS_TO_MINE</th>
			<td>Free-form description of directions</td>
			<td>varchar (300)</td>
		</tr>
		<tr>
			<th>NEAREST_TOWN</th>
			<td>Nearest town or city</td>
			<td>varchar (30)</td>
		</tr>
	</tbody>
</table>
