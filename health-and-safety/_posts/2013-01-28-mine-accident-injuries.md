---
layout: post
title: Mine Accident Injuries
created: 1359406519
description: This dataset contains information on all accidents, injuries and illnesses reported by mine operators and contractors beginning with 1983.
---

<div class="force_wrap apiurl">
<p>http://api.dol.gov/V1/Safety/Accidents</p>
</div>

<p>This dataset contains information on all accidents, injuries and illnesses reported by mine operators and contractors beginning with 1983. The data in the table is obtained from the Mine Accident, Injury and Illness Report form (MSHA Form 7000-1). Document number is the unique key for this data. It provides information about the accident/injury/illness such as type, mine location, lost days and the degree of injury.</p>
<p>This complete dataset can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://explore.data.gov/Energy-and-Utilities/Accident-Injuries-Data-Set/qbck-cccw&amp;exitTitle=Accident Injuries Data Set&amp;fedpage=yes">http://explore.data.gov/Energy-and-Utilities/Accident-Injuries-Data-Set/qbck-cccw</a></p>

<a href ="http://api.dol.gov/V1/Safety/Accidents/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL%20Mine%20Accident%20Injuries%20Data%20Set" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables  

<div>
	<h3>mineAccidents </h3>
	<table class="accessible responsive" summary="Mine Accident, Injury and Illness Report">
		<caption>Mine Accident, Injury and Illness Report</caption>
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
					Record id. - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					mineId
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Mine Id.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					controllerId
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Controller Id.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					controllerName
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Controller name.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					operatorId
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Operator Id.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					operatorName
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Operator name.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					contractId
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Contract Id.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					documentNumber
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (50)
				</td>
				<td>
					<span class="small">Column Description</span>
					Document number.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					subUnitCode
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Sub unit code.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					subUnit
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (50)
				</td>
				<td>
					<span class="small">Column Description</span>
					Sub unit.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					accidentDate
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (50)
				</td>
				<td>
					<span class="small">Column Description</span>
					Accident date.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					calendarYear
					</th>
				<td>
					<span class="small">Data Type</span>
					smallint
				</td>
				<td>
					<span class="small">Column Description</span>
					Calendar year.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					calendarQuarter
				</th>
				<td>
					<span class="small">Data Type</span>
					smallint
				</td>
				<td>
					<span class="small">Column Description</span>
					Calendar quarter.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					fiscalQuarter
				</th>
				<td>
					<span class="small">Data Type</span>
					smallint
				</td>
				<td>
					<span class="small">Column Description</span>
					Fiscal quarter.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					accidentTime
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Accident time.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					degreeInjuryCode
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Degree injury code.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					degreeInjury
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (50)
				</td>
				<td>
					<span class="small">Column Description</span>
					Degree injury.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					fipsStateCode
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Fips state code.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					ugLocationCode
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (10)
				</td>
				<td>
					<span class="small">Column Description</span>
					UG locationc code.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					ugLocation
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					UG location.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					ugMiningMethodCode
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					UG mining method code.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					ugMiningMethod
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					UG mining method.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					miningEquipmentCode
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Mining equipment code.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					miningEquip
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Mining equipment.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					equipmentManufacturerCode
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Equipment manufacturer code.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					equipmentManufacturerName
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Equipment manufacturer name.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					equpmentModelNumber
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (50)
				</td>
				<td>
					<span class="small">Column Description</span>
					Equpment model number.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					shiftBeginTime
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (6)
				</td>
				<td>
					<span class="small">Column Description</span>
					Shift begin time.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					classificationCode
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Classification code.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					classification
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Classification.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					accidentTypeCode
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Accident type code.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					accidentType
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Accident type.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					noInjuries
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (10)
				</td>
				<td>
					<span class="small">Column Description</span>
					No injuries.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalExperience
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Total experience.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					mineExperience
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Mine experience.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					jobExperience
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Job experience.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					occupationCode
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Occupation code.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					occupation
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Occupation.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					activityCode
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Activity code.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					activity
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Activity.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					injurySourceCode
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Injury source code.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					injurySource
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (50)
				</td>
				<td>
					<span class="small">Column Description</span>
					Injury source.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					natureInjuryCode
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (50)
				</td>
				<td>
					<span class="small">Column Description</span>
					Nature injury code.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					natureInjury
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Nature injury.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					injuredBodyPartCode
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Injured body part code.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					injuredBodyPart
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Injured body part.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					scheduleCharge
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Schedule charge.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					daysRestrict
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Days restrict.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					daysLost
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Days lost.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					transTerm
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Trans term.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					returnToWorkDate
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (12)
				</td>
				<td>
					<span class="small">Column Description</span>
					Return to work date.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					immedNotifyCode
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Immed notify code.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					immedNotify
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (50)
				</td>
				<td>
					<span class="small">Column Description</span>
					Immed notify.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					investBeginDate
				</th>
				<td><span class="small">Data Type</span>
					
					varchar (12)
				</td>
				<td>
					<span class="small">Column Description</span>
					Invest begin date.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					narrative
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (4000)
				</td>
				<td>
					<span class="small">Column Description</span>
					Narrative.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					closedDocNumber
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (50)
				</td>
				<td>
					<span class="small">Column Description</span>
					Closed doc number.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					coalMetalInd
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Coal metal ind.
				</td>
			</tr>
		</tbody>
	</table>
</div>