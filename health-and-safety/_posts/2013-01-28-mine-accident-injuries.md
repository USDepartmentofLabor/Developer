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
<!--p>This complete dataset can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://explore.data.gov/Energy-and-Utilities/Accident-Injuries-Data-Set/qbck-cccw&amp;exitTitle=Accident Injuries Data Set&amp;fedpage=yes">http://explore.data.gov/Energy-and-Utilities/Accident-Injuries-Data-Set/qbck-cccw</a></p-->

<a href ="http://api.dol.gov/V1/Safety/Accidents/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL%20Mine%20Accident%20Injuries%20Data%20Set" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables  

<div class="dsktp_tbl">
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
				<td>Operator name.</td>
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
				<td>Mining equipment.</td>
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
</div>

<div class="mbl_tbl">
	<h3>mineAccidents </h3>
	<h4>Mine Accident, Injury and Illness Report</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: id</p>
		<p><span class="mbl-strng">Column Description:</span> Record id. - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: mineId</p>
		<p><span class="mbl-strng">Column Description:</span> Mine Id.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: controllerId</p>
		<p><span class="mbl-strng">Column Description:</span> Controller Id.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: controllerName</p>
		<p><span class="mbl-strng">Column Description:</span> Controller name.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (100)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: operatorId</p>
		<p><span class="mbl-strng">Column Description:</span> Operator Id.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: operatorName</p>
		<p><span class="mbl-strng">Column Description:</span> Operator name.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (100)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: contractId</p>
		<p><span class="mbl-strng">Column Description:</span> Contract Id.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: documentNumber</p>
		<p><span class="mbl-strng">Column Description:</span> Document number.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (50)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: subUnitCode</p>
		<p><span class="mbl-strng">Column Description:</span> Sub unit code.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: subUnit</p>
		<p><span class="mbl-strng">Column Description:</span> Sub unit.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (50)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: accidentDate</p>
		<p><span class="mbl-strng">Column Description:</span> Accident date.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (50)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: calendarYear</p>
		<p><span class="mbl-strng">Column Description:</span> Calendar year.</p>
		<p><span class="mbl-strng">Data Type:</span> smallint</p>		
	</div>
		<div class="odd_row">
		<p class="mbl-strng">Column Name: calendarQuarter</p>
		<p><span class="mbl-strng">Column Description:</span> Calendar quarter.</p>
		<p><span class="mbl-strng">Data Type:</span> smallint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: fiscalQuarter</p>
		<p><span class="mbl-strng">Column Description:</span> Fiscal quarter.</p>
		<p><span class="mbl-strng">Data Type:</span> smallint</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: accidentTime</p>
		<p><span class="mbl-strng">Column Description:</span> Accident time.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: degreeInjuryCode</p>
		<p><span class="mbl-strng">Column Description:</span> Degree injury code.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: degreeInjury</p>
		<p><span class="mbl-strng">Column Description:</span> Degree injury.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (50)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: fipsStateCode</p>
		<p><span class="mbl-strng">Column Description:</span> Fips state code.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: ugLocationCode</p>
		<p><span class="mbl-strng">Column Description:</span> UG locationc code.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: ugLocation</p>
		<p><span class="mbl-strng">Column Description:</span> UG location.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (100)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: ugMiningMethodCode</p>
		<p><span class="mbl-strng">Column Description:</span> UG mining method code.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (100)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: ugMiningMethod</p>
		<p><span class="mbl-strng">Column Description:</span> UG mining method.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (100)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: miningEquipmentCode</p>
		<p><span class="mbl-strng">Column Description:</span> Mining equipment code.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: miningEquip</p>
		<p><span class="mbl-strng">Column Description:</span> Mining equipment.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (100)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: equipmentManufacturerCode</p>
		<p><span class="mbl-strng">Column Description:</span> Equipment manufacturer code.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: equipmentManufacturerName</p>
		<p><span class="mbl-strng">Column Description:</span> Equipment manufacturer name.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (100)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: equpmentModelNumber</p>
		<p><span class="mbl-strng">Column Description:</span> Equpment model number.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (50)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: shiftBeginTime</p>
		<p><span class="mbl-strng">Column Description:</span> Shift begin time.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (6)</p>		
	</div>
		<div class="odd_row">
		<p class="mbl-strng">Column Name: classificationCode</p>
		<p><span class="mbl-strng">Column Description:</span> Classification code.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: classification</p>
		<p><span class="mbl-strng">Column Description:</span> Classification.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (100)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: accidentTypeCode</p>
		<p><span class="mbl-strng">Column Description:</span> Accident type code.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: accidentType</p>
		<p><span class="mbl-strng">Column Description:</span> Accident type.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (100)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: noInjuries</p>
		<p><span class="mbl-strng">Column Description:</span> No injuries.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: totalExperience</p>
		<p><span class="mbl-strng">Column Description:</span> Total experience.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: mineExperience</p>
		<p><span class="mbl-strng">Column Description:</span> Mine experience.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: jobExperience</p>
		<p><span class="mbl-strng">Column Description:</span> Job experience.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: occupationCode</p>
		<p><span class="mbl-strng">Column Description:</span> Occupation code.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: occupation</p>
		<p><span class="mbl-strng">Column Description:</span> Occupation.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (100)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: activityCode</p>
		<p><span class="mbl-strng">Column Description:</span> Activity code.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: activity</p>
		<p><span class="mbl-strng">Column Description:</span> Activity.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (100)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: injurySourceCode</p>
		<p><span class="mbl-strng">Column Description:</span> Injury source code.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: injurySource</p>
		<p><span class="mbl-strng">Column Description:</span> Injury source.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (50)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: natureInjuryCode</p>
		<p><span class="mbl-strng">Column Description:</span> Nature injury code.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (50)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: natureInjury</p>
		<p><span class="mbl-strng">Column Description:</span> Nature injury.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (100)</p>		
	</div>
		<div class="odd_row">
		<p class="mbl-strng">Column Name: injuredBodyPartCode</p>
		<p><span class="mbl-strng">Column Description:</span> Injured body part code.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: injuredBodyPart</p>
		<p><span class="mbl-strng">Column Description:</span> Injured body part.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (100)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: scheduleCharge</p>
		<p><span class="mbl-strng">Column Description:</span> Schedule charge.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: daysRestrict</p>
		<p><span class="mbl-strng">Column Description:</span> Days restrict.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: daysLost</p>
		<p><span class="mbl-strng">Column Description:</span> Days lost.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: transTerm</p>
		<p><span class="mbl-strng">Column Description:</span> Trans term.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: returnToWorkDate</p>
		<p><span class="mbl-strng">Column Description:</span> Return to work date.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (12)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: immedNotifyCode</p>
		<p><span class="mbl-strng">Column Description:</span> Immed notify code.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: immedNotify</p>
		<p><span class="mbl-strng">Column Description:</span> Immed notify.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (50)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: investBeginDate</p>
		<p><span class="mbl-strng">Column Description:</span> Invest begin date.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (12)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: narrative</p>
		<p><span class="mbl-strng">Column Description:</span> Narrative.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (4000)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: closedDocNumber</p>
		<p><span class="mbl-strng">Column Description:</span> Closed doc number.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (50)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: coalMetalInd</p>
		<p><span class="mbl-strng">Column Description:</span> Coal metal ind.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
</div>
