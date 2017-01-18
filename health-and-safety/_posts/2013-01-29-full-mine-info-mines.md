---
layout: post
title: Full Mine Information Mines
created: 1359495618
description: The Full Mine Information dataset lists all Coal and Metal/Non-Metal mines under MSHA's jurisdiction since 1/1/1970.
---

<div class="force_wrap apiurl">
<p>http://api.dol.gov/V1/Mining/FullMineInfo/</p>
</div>

<p>The Full Mine Info dataset lists all Coal and Metal/Non-Metal mines under MSHA's jurisdiction since 1/1/1970. It includes such information as the current status of each mine (Active, Abandoned, NonProducing, etc.), the current owner and operating company, commodity codes and physical attributes of the mine. Mine ID is the unique key for this data.</p>

<a href ="http://api.dol.gov/V1/Mining/FullMineInfo/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL%20Mines%20Dataset" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables  

<div>
	<h3 id="MSHA_mines">MSHA_mines</h3>
	<table class="accessible responsive" Summary="MSHA Mines - Full Mine Information">
		<caption>MSHA Mines</caption>
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
				Primary key of the table - Primary Key
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				MINE_ID
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (14)
			</td>
				<td>
				<span class="small">Column Description</span>
				Identification number assigned to the mine by MSHA - Primary Key
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				CURRENT_MINE_NAME
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (50)
			</td>
				<td>
				<span class="small">Column Description</span>
				Name of the mine as designated on the Legal ID Form
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				COAL_METAL_IND
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (1)
			</td>
				<td>
				<span class="small">Column Description</span>
				Identifies if the mine is a Coal or Metal/Non-Metal mine
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				CURRENT_MINE_TYPE
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (20)
			</td>
				<td>
				<span class="small">Column Description</span>
				From the Legal ID (LID) form. The types are Facility, Surface or Underground
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				CURRENT_MINE_STATUS
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (50)
			</td>
				<td>
				<span class="small">Column Description</span>
				Current status of the mine.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				CURRENT_STATUS_DT
			</th>
				<td>
				<span class="small">Data Type</span>
				datetime
			</td>
				<td>
				<span class="small">Column Description</span>
				Date the mine obtained the current status
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				CURRENT_CONTROLLER_ID
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (7)
			</td>
				<td>
				<span class="small">Column Description</span>
				Identification number assigned by MSHA
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				CURRENT_CONTROLLER_NAME
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (72)
			</td>
				<td>
				<span class="small">Column Description</span>
				Either the business name or a person's name for the Legal Entity
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				CURRENT_OPERATOR_ID
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (7)
			</td>
				<td>
				<span class="small">Column Description</span>
				Identification number assigned by MSHA Assessments Center
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				CURRENT_OPERATOR_NAME
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (60)
			</td>
				<td>
				<span class="small">Column Description</span>
				The latest operator name
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				STATE
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (2)
			</td>
				<td>
				<span class="small">Column Description</span>
				State in which the mine is located
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				BOM_STATE_CD
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (2)
			</td>
				<td>
				<span class="small">Column Description</span>
				Bureau of Mines (BOM) assigned state codes
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				FIPS_CNTY_CD
			</th>
				<td>
				<span class="small">Column Name</span>
				varchar (3)
			</td>
				<td>
				<span class="small">Column Description</span>
				Federal Information Processing Standard county code
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				FIPS_CNTY_NM
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (80)
			</td>
				<td>
				<span class="small">Column Description</span>
				FIPS county code name
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				CONG_DIST_CD
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (2)
			</td>
				<td>
				<span class="small">Column Description</span>
				The Congressional District of the state
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				COMPANY_TYPE
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (80)
			</td>
				<td>
				<span class="small">Column Description</span>
				Unique description for each legal entity type
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				CURRENT_CONTROLLER_BEGIN_DT
			</th>
				 <td>
				 <span class="small">Data Type</span>
				 datetime
			</td>
				<td>
				<span class="small">Column Description</span>
				Start date of the operating period at the mine
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				DISTRICT
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (3)
			</td>
				<td>
				<span class="small">Column Description</span>
				The first three characters of the Coal districts
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				OFFICE_CD
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (5)
			</td>
				<td>
				<span class="small">Column Description</span>
				MSHA code that identifies the office
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				OFFICE_NAME
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (80)
			</td>
				<td>
				<span class="small">Column Description</span>
				The name of the office to which the mine is assigned
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				ASSESS_CTRL_NO
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (20)
			</td>
				<td>
				<span class="small">Column Description</span>
				The most recent Assessment Control Number
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				PRIMARY_SIC_CD
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (6)
			</td>
				<td>
				<span class="small">Column Description</span>
				This is a code derived from the SIC codes
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				PRIMARY_SIC
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (80)
			</td>
				<td>
				<span class="small">Column Description</span>
				Description of the SIC
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				PRIMARY_SIC_CD_1
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (4)
			</td>
				<td>
				<span class="small">Column Description</span>
				Standard Industrial Classification Code
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				PRIMARY_SIC_CD_SFX
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (2)
			</td>
				<td>
				<span class="small">Column Name</span>
				Suffix to the SIC
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				SECONDARY_SIC_CD
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (6)
			</td>
				<td>
				<span class="small">Column Description</span>
				This is a code derived from the SIC
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Description</span>
				SECONDARY_SIC
			</th>
				<td>
				<span class="small">Column Name</span>
				varchar (80)
			</td>
				<td>
				<span class="small">Column Description</span>
				Description of the SIC
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				SECONDARY_SIC_CD_1
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (4)
			</td>
				<td>
				<span class="small">Column Description</span>
				Standard Industrial Classification Code (SIC)
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				SECONDARY_SIC_CD_SFX
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (2)
			</td>
				<td>
				<span class="small">Column Description</span>
				Suffix to the SIC
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				PRIMARY_CANVASS_CD
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (20)
			</td>
				<td>
				<span class="small">Column Description</span>
				Canvass code associated with the primary
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				PRIMARY_CANVASS
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (20)
			</td>
				<td>
				<span class="small">Column Description</span>
				Unique code abbreviation for the primary
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				SECONDARY_CANVASS_CD
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (20)
			</td>
				<td>
				<span class="small">Column Description</span>
				Canvass code associated with the secondary
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				SECONDARY_CANVASS
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (20)
			</td>
				<td>
				<span class="small">Column Description</span>
				Unique code abbreviation for the secondary
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				CURRENT_103I
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (80)
			</td>
				<td>
				<span class="small">Column Description</span>
				This is the description of the Mine 103I Classification Code
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				CURRENT_103I_DT
			</th>
				 <td>
				 <span class="small">Data Type</span>
				 datetime
			</td>
				<td>
				<span class="small">Column Description</span>
				The date the mine entered the current 103I status
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				PORTABLE_OPERATION
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (1)
			</td>
				<td>
				<span class="small">Column Description</span>
				Indicates whether this is a portable mine or not
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				PORTABLE_FIPS_ST_CD
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (2)
			</td>
				<td>
				<span class="small">Column Description</span>
				FIPS state code if it is a portable mine
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				DAYS_PER_WEEK
			</th>
				<td>
				<span class="small">Data Type</span>
				float
			</td>
				<td>
				<span class="small">Column Description</span>
				Number of days per week
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				HOURS_PER_SHIFT
			</th>
				<td>
				<span class="small">Data Type</span>
				float
			</td>
				<td>
				<span class="small">Column Description</span>
				Number of hours per shift at the mine
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				PROD_SHIFTS_PER_DAY
			</th>
				<td>
				<span class="small">Data Type</span>
				float
			</td>
				<td>
				<span class="small">Column Description</span>
				Number of production shifts per 24-hour day
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				MAINT_SHIFTS_PER_DAY
			</th>
				<td>
				<span class="small">Data Type</span>
				float
			</td>
				<td>
				<span class="small">Column Description</span>
				Number of maintenance-only shifts per 24-hour day
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				NO_EMPLOYEES
			</th>
				<td>
				<span class="small">Data Type</span>
				float
			</td>
				<td>
				<span class="small">Column Description</span>
				Number of workers employed at the mine
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				PART48_TRAINING
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (1)
			</td>
				<td>
				<span class="small">Column Description</span>
				Indicates whether MSHA is restricted
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				LONGITUDE
			</th>
				<td>
				<span class="small">Data Type</span>
				float
			</td>
				<td>
				<span class="small">Column Description</span>
				Longitude denoting the mine location
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				LATITUDE
			</th>
				<td>
				<span class="small">Data Type</span>
				float
			</td>
				<td>
				<span class="small">Column Description</span>
				Latitude denoting the mine location
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				AVG_MINE_HEIGHT
			</th>
				<td>
				<span class="small">Data Type</span>
				float
			</td>
				<td>
				<span class="small">Column Description</span>
				Average mining height in inches
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				MINE_GAS_CATEGORY_CD
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (20)
			</td>
				<td>
				<span class="small">Column Description</span>
				This categorization is used by underground
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				METHANE_LIBERATION
			</th>
				<td>
				<span class="small">Data Type</span>
				float
			</td>
				<td>
				<span class="small">Column Description</span>
				Methane Liberation on Section (cubic feet each 24 hrs).
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				NO_PRODUCING_PITS
			</th>
				<td>
				<span class="small">Data Type</span>
				float
			</td>
				<td>
				<span class="small">Column Description</span>
				Number of pits that are actively producing
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				NO_NONPRODUCING_PITS
			</th>
				<td>
				<span class="small">Data Type</span>
				float
			</td>
				<td>
				<span class="small">Column Description</span>
				Number of pits that are not producing
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				NO_TAILING_PONDS
			</th>
				<td>
				<span class="small">Data Type</span>
				float
			</td>
				<td>
				<span class="small">Column Description</span>
				Number of tailing ponds (Metal/Non-Metal mines only).
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				PILLAR_RECOVERY_USED
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (1)
			</td>
				<td>
				<span class="small">Column Description</span>
				Indicator denoting whether or not a mine uses pillar
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				HIGHWALL_MINER_USED
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (1)
			</td>
				<td>
				<span class="small">Column Description</span>
				Indicator denoting whether or not a mine uses a highwall
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				MULTIPLE_PITS
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (1)
			</td>
				<td>
				<span class="small">Column Description</span>
				Indicates whether there are multiple pits
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				MINERS_REP_IND
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (1)
			</td>
				<td>
				<span class="small">Column Description</span>
				Indicates where there is a miners' representative
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				SAFETY_COMMITTEE_IND
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (1)
			</td>
				<td>
				<span class="small">Column Description</span>
				Values are 'Y' or 'N'.
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				MILES_FROM_OFFICE
			</th>
				<td>
				<span class="small">Data Type</span>
				float
			</td>
				<td>
				<span class="small">Column Description</span>
				Driving distance to the mine/mill
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				DIRECTIONS_TO_MINE
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (300)
			</td>
				<td>
				<span class="small">Column Description</span>
				Free-form description of directions
			</td>
				
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				NEAREST_TOWN
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (30)
			</td>
				<td>
				<span class="small">Column Description</span>
				Nearest town or city
			</td>
				
			</tr>
		</tbody>
	</table>
</div>

