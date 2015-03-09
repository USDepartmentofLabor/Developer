---
layout: post
title: Mine Accident Injuries Dataset
created: 1359406519
---

```
http://api.dol.gov/V1/Safety/Accidents
```

<p>This dataset contains information on all accidents, injuries and illnesses reported by mine operators and contractors beginning with 1983. The data in the table is obtained from the Mine Accident, Injury and Illness Report form (MSHA Form 7000-1). Document number is the unique key for this data. It provides information about the accident/injury/illness such as type, mine location, lost days and the degree of injury.</p>

<p>This complete dataset can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://explore.data.gov/Energy-and-Utilities/Accident-Injuries-Data-Set/qbck-cccw&amp;exitTitle=Accident Injuries Data Set&amp;fedpage=yes">http://explore.data.gov/Energy-and-Utilities/Accident-Injuries-Data-Set/qbck-cccw</a></p>


### Dataset Metadata  
https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL%20Mine%20Accident%20Injuries%20Data%20Set

[Sample the Mine Accident Injuries Dataset](https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL Mine Accident Injuries Data Set)  

### Dataset Tables:  
<h3>mineAccidents </h3>
<p>Mine Accident, Injury and Illness Report</p>
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
			<td>Record id. - Primary Key</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th>mineId</th>
			<td>Mine Id.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>controllerId</th>
			<td>Controller Id.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>controllerName</th>
			<td>Controller name.</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th>operatorId</th>
			<td>Operator Id.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>operatorName</th>
			<td>operator name.</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th>contractId</th>
			<td>Contract Id.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>documentNumber</th>
			<td>Document number.</td>
			<td>varchar (50)</td>
		</tr>
		<tr>
			<th>subUnitCode</th>
			<td>Sub unit code.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>subUnit</th>
			<td>Sub unit.</td>
			<td>varchar (50)</td>
		</tr>
		<tr>
			<th>accidentDate</th>
			<td>Accident date.</td>
			<td>varchar (50)</td>
		</tr>
		<tr>
			<th>calendarYear</th>
			<td>Calendar year.</td>
			<td>smallint</td>
		</tr>
		<tr>
			<th>calendarQuarter</th>
			<td>Calendar quarter.</td>
			<td>smallint</td>
		</tr>
		<tr>
			<th>fiscalQuarter</th>
			<td>Fiscal quarter.</td>
			<td>smallint</td>
		</tr>
		<tr>
			<th>accidentTime</th>
			<td>Accident time.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>degreeInjuryCode</th>
			<td>Degree injury code.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>degreeInjury</th>
			<td>Degree injury.</td>
			<td>varchar (50)</td>
		</tr>
		<tr>
			<th>fipsStateCode</th>
			<td>Fips state code.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>ugLocationCode</th>
			<td>UG locationc code.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>ugLocation</th>
			<td>UG location.</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th>ugMiningMethodCode</th>
			<td>UG mining method code.</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th>ugMiningMethod</th>
			<td>UG mining method.</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th>miningEquipmentCode</th>
			<td>Mining equipment code.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>miningEquip</th>
			<td>Mining equip.</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th>equipmentManufacturerCode</th>
			<td>Equipment manufacturer code.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>equipmentManufacturerName</th>
			<td>Equipment manufacturer name.</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th>equpmentModelNumber</th>
			<td>Equpment model number.</td>
			<td>varchar (50)</td>
		</tr>
		<tr>
			<th>shiftBeginTime</th>
			<td>Shift begin time.</td>
			<td>varchar (6)</td>
		</tr>
		<tr>
			<th>classificationCode</th>
			<td>Classification code.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>classification</th>
			<td>Classification.</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th>accidentTypeCode</th>
			<td>Accident type code.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>accidentType</th>
			<td>Accident type.</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th>noInjuries</th>
			<td>No injuries.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>totalExperience</th>
			<td>Total experience.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>mineExperience</th>
			<td>Mine experience.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>jobExperience</th>
			<td>Job experience.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>occupationCode</th>
			<td>Occupation code.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>occupation</th>
			<td>Occupation.</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th>activityCode</th>
			<td>Activity code.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>activity</th>
			<td>Activity.</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th>injurySourceCode</th>
			<td>Injury source code.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>injurySource</th>
			<td>Injury source.</td>
			<td>varchar (50)</td>
		</tr>
		<tr>
			<th>natureInjuryCode</th>
			<td>Nature injury code.</td>
			<td>varchar (50)</td>
		</tr>
		<tr>
			<th>natureInjury</th>
			<td>Nature injury.</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th>injuredBodyPartCode</th>
			<td>Injured body part code.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>injuredBodyPart</th>
			<td>Injured body part.</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th>scheduleCharge</th>
			<td>Schedule charge.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>daysRestrict</th>
			<td>Days restrict.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>daysLost</th>
			<td>Days lost.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>transTerm</th>
			<td>Trans term.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>returnToWorkDate</th>
			<td>Return to work date.</td>
			<td>varchar (12)</td>
		</tr>
		<tr>
			<th>immedNotifyCode</th>
			<td>Immed notify code.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>immedNotify</th>
			<td>Immed notify.</td>
			<td>varchar (50)</td>
		</tr>
		<tr>
			<th>investBeginDate</th>
			<td>Invest begin date.</td>
			<td>varchar (12)</td>
		</tr>
		<tr>
			<th>narrative</th>
			<td>Narrative.</td>
			<td>varchar (4000)</td>
		</tr>
		<tr>
			<th>closedDocNumber</th>
			<td>Closed doc number.</td>
			<td>varchar (50)</td>
		</tr>
		<tr>
			<th>coalMetalInd</th>
			<td>Coal metal ind.</td>
			<td>varchar (10)</td>
		</tr>
	</tbody>
</table>
