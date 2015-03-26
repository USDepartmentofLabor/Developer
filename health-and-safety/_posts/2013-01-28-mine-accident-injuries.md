---
layout: post
title: Mine Accident Injuries
created: 1359406519
description: This dataset contains information on all accidents, injuries and illnesses reported by mine operators and contractors beginning with 1983.
---

```
http://api.dol.gov/V1/Safety/Accidents
```

<p>This dataset contains information on all accidents, injuries and illnesses reported by mine operators and contractors beginning with 1983. The data in the table is obtained from the Mine Accident, Injury and Illness Report form (MSHA Form 7000-1). Document number is the unique key for this data. It provides information about the accident/injury/illness such as type, mine location, lost days and the degree of injury.</p>
<p>This complete dataset can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://explore.data.gov/Energy-and-Utilities/Accident-Injuries-Data-Set/qbck-cccw&amp;exitTitle=Accident Injuries Data Set&amp;fedpage=yes">http://explore.data.gov/Energy-and-Utilities/Accident-Injuries-Data-Set/qbck-cccw</a></p>

<a href ="http://api.dol.gov/V1/Safety/Accidents/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL%20Mine%20Accident%20Injuries%20Data%20Set" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables  

<h3>mineAccidents </h3>
<table summary="Mine Accident, Injury and Illness Report">
	<caption>Mine Accident, Injury and Illness Report</caption>
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
			<td>Record id. - Primary Key</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th scope="row">mineId</th>
			<td>Mine Id.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th scope="row">controllerId</th>
			<td>Controller Id.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th scope="row">controllerName</th>
			<td>Controller name.</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th scope="row">operatorId</th>
			<td>Operator Id.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th scope="row">operatorName</th>
			<td>operator name.</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th scope="row">contractId</th>
			<td>Contract Id.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th scope="row">documentNumber</th>
			<td>Document number.</td>
			<td>varchar (50)</td>
		</tr>
		<tr>
			<th scope="row">subUnitCode</th>
			<td>Sub unit code.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th scope="row">subUnit</th>
			<td>Sub unit.</td>
			<td>varchar (50)</td>
		</tr>
		<tr>
			<th scope="row">accidentDate</th>
			<td>Accident date.</td>
			<td>varchar (50)</td>
		</tr>
		<tr>
			<th scope="row">calendarYear</th>
			<td>Calendar year.</td>
			<td>smallint</td>
		</tr>
		<tr>
			<th scope="row">calendarQuarter</th>
			<td>Calendar quarter.</td>
			<td>smallint</td>
		</tr>
		<tr>
			<th scope="row">fiscalQuarter</th>
			<td>Fiscal quarter.</td>
			<td>smallint</td>
		</tr>
		<tr>
			<th scope="row">accidentTime</th>
			<td>Accident time.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th scope="row">degreeInjuryCode</th>
			<td>Degree injury code.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th scope="row">degreeInjury</th>
			<td>Degree injury.</td>
			<td>varchar (50)</td>
		</tr>
		<tr>
			<th scope="row">fipsStateCode</th>
			<td>Fips state code.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th scope="row">ugLocationCode</th>
			<td>UG locationc code.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th scope="row">ugLocation</th>
			<td>UG location.</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th scope="row">ugMiningMethodCode</th>
			<td>UG mining method code.</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th scope="row">ugMiningMethod</th>
			<td>UG mining method.</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th scope="row">miningEquipmentCode</th>
			<td>Mining equipment code.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th scope="row">miningEquip</th>
			<td>Mining equip.</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th scope="row">equipmentManufacturerCode</th>
			<td>Equipment manufacturer code.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th scope="row">equipmentManufacturerName</th>
			<td>Equipment manufacturer name.</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th scope="row">equpmentModelNumber</th>
			<td>Equpment model number.</td>
			<td>varchar (50)</td>
		</tr>
		<tr>
			<th scope="row">shiftBeginTime</th>
			<td>Shift begin time.</td>
			<td>varchar (6)</td>
		</tr>
		<tr>
			<th scope="row">classificationCode</th>
			<td>Classification code.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th scope="row">classification</th>
			<td>Classification.</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th scope="row">accidentTypeCode</th>
			<td>Accident type code.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th scope="row">accidentType</th>
			<td>Accident type.</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th scope="row">noInjuries</th>
			<td>No injuries.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th scope="row">totalExperience</th>
			<td>Total experience.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th scope="row">mineExperience</th>
			<td>Mine experience.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th scope="row">jobExperience</th>
			<td>Job experience.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th scope="row">occupationCode</th>
			<td>Occupation code.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th scope="row">occupation</th>
			<td>Occupation.</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th scope="row">activityCode</th>
			<td>Activity code.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th scope="row">activity</th>
			<td>Activity.</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th scope="row">injurySourceCode</th>
			<td>Injury source code.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th scope="row">injurySource</th>
			<td>Injury source.</td>
			<td>varchar (50)</td>
		</tr>
		<tr>
			<th scope="row">natureInjuryCode</th>
			<td>Nature injury code.</td>
			<td>varchar (50)</td>
		</tr>
		<tr>
			<th scope="row">natureInjury</th>
			<td>Nature injury.</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th scope="row">injuredBodyPartCode</th>
			<td>Injured body part code.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th scope="row">injuredBodyPart</th>
			<td>Injured body part.</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th scope="row">scheduleCharge</th>
			<td>Schedule charge.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th scope="row">daysRestrict</th>
			<td>Days restrict.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th scope="row">daysLost</th>
			<td>Days lost.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th scope="row">transTerm</th>
			<td>Trans term.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th scope="row">returnToWorkDate</th>
			<td>Return to work date.</td>
			<td>varchar (12)</td>
		</tr>
		<tr>
			<th scope="row">immedNotifyCode</th>
			<td>Immed notify code.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th scope="row">immedNotify</th>
			<td>Immed notify.</td>
			<td>varchar (50)</td>
		</tr>
		<tr>
			<th scope="row">investBeginDate</th>
			<td>Invest begin date.</td>
			<td>varchar (12)</td>
		</tr>
		<tr>
			<th scope="row">narrative</th>
			<td>Narrative.</td>
			<td>varchar (4000)</td>
		</tr>
		<tr>
			<th scope="row">closedDocNumber</th>
			<td>Closed doc number.</td>
			<td>varchar (50)</td>
		</tr>
		<tr>
			<th scope="row">coalMetalInd</th>
			<td>Coal metal ind.</td>
			<td>varchar (10)</td>
		</tr>
	</tbody>
</table>
