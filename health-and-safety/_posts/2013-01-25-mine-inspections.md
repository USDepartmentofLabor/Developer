---
layout: post
title: Mine Inspections
created: 1359127523
description: The Mine Inspections dataset lists every mine inspection conducted by MSHA dating back to 1/1/1978.
---

```
http://api.dol.gov/V1/Compliance/MineInspection
```

<p>The Mine Inspections dataset lists every mine inspection conducted by MSHA dating back to 1/1/1978. The data includes the name of the mine inspected, MSHA's internal inspection number (event number), the type of inspection and the start and end dates of the inspection. Event Number is the unique key for this dataset. It also includes the Mine ID associated with the inspections which can be used to relate it to the Mines Data Set.</p>
<p>This complete dataset can be found at https://explore.data.gov/Energy-and-Utilities/Mine-Inspections/wt25-mkey</p>

<a href ="http://api.dol.gov/V1/Compliance/MineInspection/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL%20Mine%20Inspections%20Dataset" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables

<h3>mineInspections</h3>
<table summary="Mine Inspections - lists every mine inspection conducted by MSHA dating back to 1/1/1978">
	<caption>Mine Inspections</caption>
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
			<td>Record Id. - Primary Key</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th scope="row">eventNumber</th>
			<td>Event number.</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th scope="row">mineId</th>
			<td>Mine Id.</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th scope="row">inspectionBeginDate</th>
			<td>Inspection begin date.</td>
			<td>datetime</td>
		</tr>
		<tr>
			<th scope="row">inspectionEndDate</th>
			<td>Inspection end date.</td>
			<td>datetime</td>
		</tr>
		<tr>
			<th scope="row">controllerId</th>
			<td>Controller Id.</td>
			<td>varchar (20)</td>
		</tr>
		<tr>
			<th scope="row">controllerName</th>
			<td>Controller name.</td>
			<td>varchar (200)</td>
		</tr>
		<tr>
			<th scope="row">operatorId</th>
			<td>Operator Id.</td>
			<td>varchar (20)</td>
		</tr>
		<tr>
			<th scope="row">operatorName</th>
			<td>Operator name.</td>
			<td>varchar (200)</td>
		</tr>
		<tr>
			<th scope="row">calendarYear</th>
			<td>Calendar year.</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th scope="row">calendarQuarter</th>
			<td>Calendar quarter.</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th scope="row">fiscalYear</th>
			<td>Fiscal year.</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th scope="row">fiscalQuarter</th>
			<td>Fiscal quarter.</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th scope="row">inspectionOfficeCode</th>
			<td>Inspection office code.</td>
			<td>varchar (5)</td>
		</tr>
		<tr>
			<th scope="row">activityCode</th>
			<td>Activity code.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th scope="row">activity</th>
			<td>Activity.</td>
			<td>varchar (200)</td>
		</tr>
		<tr>
			<th scope="row">activitySections</th>
			<td>Activity sections.</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th scope="row">idleSections</th>
			<td>Idle sections.</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th scope="row">shaftSlopeSink</th>
			<td>Shaft slope sink.</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th scope="row">impoundConstr</th>
			<td>Impound constr.</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th scope="row">buildingConstrSites</th>
			<td>Building constr sites.</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th scope="row">draglines</th>
			<td>Draglines.</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th scope="row">unclassifiedConstr</th>
			<td>Unclassified constr.</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th scope="row">coRecords</th>
			<td>CO records.</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th scope="row">surfUgMine</th>
			<td>Surf UG mine.</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th scope="row">surfFacilityMine</th>
			<td>Surf facility mine.</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th scope="row">refusePile</th>
			<td>Refuse pile.</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th scope="row">explosiveStorage</th>
			<td>Explosive storage.</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th scope="row">outbyArea</th>
			<td>Out by area.</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th scope="row">majorConst</th>
			<td>Major const.</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th scope="row">shaftsSlopes</th>
			<td>Shafts slopes.</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th scope="row">impoundments</th>
			<td>Impoundments.</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th scope="row">miscArea</th>
			<td>Misc area.</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th scope="row">programArea</th>
			<td>Program area.</td>
			<td>varchar (200)</td>
		</tr>
		<tr>
			<th scope="row">sumOfSampleCntAir</th>
			<td>Sum of sample cnt air.</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th scope="row">sumOfSampleCntDustspot</th>
			<td>Sum of sample cnt dust spot.</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th scope="row">sumOfSampleCntDustSurvey</th>
			<td>Sum of sample cnt dust survey.</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th scope="row">sumOfSampleCntRespDust</th>
			<td>Sum of sample cnt resp dust.</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th scope="row">sumOfSampleCntNoise</th>
			<td>Sum of sample cnt noise.</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th scope="row">sumOfSampleCntOther</th>
			<td>Sum of sample cnt other.</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th scope="row">nbrInspector</th>
			<td>Number inspector.</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th scope="row">sumOfTotalInspHours</th>
			<td>Sum of total insp hours.</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th scope="row">sumOfTotalOnSiteHours</th>
			<td>Sum of total on site hours.</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th scope="row">coalMetalInd</th>
			<td>Coal metal ind</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th scope="row">sumOfTotalInspHrsSpvrTrainee</th>
			<td>Sum of total insp hrs spvr trainee.</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th scope="row">sumOfTotalOnSiteHrsSpvrTrainee</th>
			<td>&nbsp;</td>
			<td>bigint</td>
		</tr>
	</tbody>
</table>
