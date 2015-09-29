---
layout: post
title: Mine Inspections
created: 1359127523
description: The Mine Inspections dataset lists every mine inspection conducted by MSHA dating back to 1/1/1978.
categories: [health-and-safety, dataset]
---

<div class="force_wrap apiurl">
<p>http://api.dol.gov/V1/Compliance/MineInspection</p>
</div>

<p>The Mine Inspections dataset lists every mine inspection conducted by MSHA dating back to 1/1/1978. The data includes the name of the mine inspected, MSHA's internal inspection number (event number), the type of inspection and the start and end dates of the inspection. Event Number is the unique key for this dataset. It also includes the Mine ID associated with the inspections which can be used to relate it to the Mines Data Set.</p>
<p>This complete dataset can be found at https://explore.data.gov/Energy-and-Utilities/Mine-Inspections/wt25-mkey</p>

<a href ="http://api.dol.gov/V1/Compliance/MineInspection/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL%20Mine%20Inspections%20Dataset" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables

<div class="dsktp_tbl">
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
				<td>Sum of total on site hrs spvr trainee</td>
				<td>bigint</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h3>mineInspections</h3>
	<h4>Mine Inspections - lists every mine inspection conducted by MSHA dating back to 1/1/1978</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: id</p>
		<p><span class="mbl-strng">Column Description:</span> Record Id. - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: eventNumber</p>
		<p><span class="mbl-strng">Column Description:</span> Event number.</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: mineId</p>
		<p><span class="mbl-strng">Column Description:</span> Mine Id.</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: inspectionBeginDate</p>
		<p><span class="mbl-strng">Column Description:</span> Inspection begin date.</p>
		<p><span class="mbl-strng">Data Type:</span> datetime</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: inspectionEndDate</p>
		<p><span class="mbl-strng">Column Description:</span> Inspection end date.</p>
		<p><span class="mbl-strng">Data Type:</span> datetime</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: controllerId</p>
		<p><span class="mbl-strng">Column Description:</span> Controller Id.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (20)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: controllerName</p>
		<p><span class="mbl-strng">Column Description:</span> Controller name.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (200)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: operatorId</p>
		<p><span class="mbl-strng">Column Description:</span> Operator Id.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (20)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: operatorName</p>
		<p><span class="mbl-strng">Column Description:</span> Operator name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (200)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: calendarYear</p>
		<p><span class="mbl-strng">Column Description:</span> Calendar year.</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: calendarQuarter</p>
		<p><span class="mbl-strng">Column Description:</span> Calendar quarter.</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: fiscalYear</p>
		<p><span class="mbl-strng">Column Description:</span> Fiscal year.</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: fiscalQuarter</p>
		<p><span class="mbl-strng">Column Description:</span> Fiscal quarter.</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: inspectionOfficeCode</p>
		<p><span class="mbl-strng">Column Description:</span> Inspection office code.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (5)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: activityCode</p>
		<p><span class="mbl-strng">Column Description:</span> Activity code.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: activity</p>
		<p><span class="mbl-strng">Column Description:</span> Activity.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (200)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: activitySections</p>
		<p><span class="mbl-strng">Column Description:</span> Activity sections.</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: idleSections</p>
		<p><span class="mbl-strng">Column Description:</span> Idle sections.</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: shaftSlopeSink</p>
		<p><span class="mbl-strng">Column Description:</span> Shaft slope sink.</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: impoundConstr</p>
		<p><span class="mbl-strng">Column Description:</span> Impound constr.</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: buildingConstrSites</p>
		<p><span class="mbl-strng">Column Description:</span> Building constr sites.</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: draglines</p>
		<p><span class="mbl-strng">Column Description:</span> Draglines.</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: unclassifiedConstr</p>
		<p><span class="mbl-strng">Column Description:</span> Unclassified constr.</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: coRecords</p>
		<p><span class="mbl-strng">Column Description:</span> CO records.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: surfUgMine</p>
		<p><span class="mbl-strng">Column Description:</span> Surf UG mine.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: surfFacilityMine</p>
		<p><span class="mbl-strng">Column Description:</span> Surf facility mine.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: refusePile</p>
		<p><span class="mbl-strng">Column Description:</span> Refuse pile.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: explosiveStorage</p>
		<p><span class="mbl-strng">Column Description:</span> Explosive storage.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: outbyArea</p>
		<p><span class="mbl-strng">Column Description:</span> Out by area.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: majorConst</p>
		<p><span class="mbl-strng">Column Description:</span> Major const.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: shaftsSlopes</p>
		<p><span class="mbl-strng">Column Description:</span> Shafts slopes.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: impoundments</p>
		<p><span class="mbl-strng">Column Description:</span> Impoundments.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: miscArea</p>
		<p><span class="mbl-strng">Column Description:</span> Misc area.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: programArea</p>
		<p><span class="mbl-strng">Column Description:</span> Program area.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (200)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: sumOfSampleCntAir</p>
		<p><span class="mbl-strng">Column Description:</span> Sum of sample cnt air.</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: sumOfSampleCntDustspot</p>
		<p><span class="mbl-strng">Column Description:</span> Sum of sample cnt dust spot.</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: sumOfSampleCntDustSurvey</p>
		<p><span class="mbl-strng">Column Description:</span> Sum of sample cnt dust survey.</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: sumOfSampleCntRespDust</p>
		<p><span class="mbl-strng">Column Description:</span> Sum of sample cnt resp dust.</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: sumOfSampleCntNoise</p>
		<p><span class="mbl-strng">Column Description:</span> Sum of sample cnt noise.</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: sumOfSampleCntOther</p>
		<p><span class="mbl-strng">Column Description:</span> Sum of sample cnt other.</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: nbrInspector</p>
		<p><span class="mbl-strng">Column Description:</span> Number inspector.</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: sumOfTotalInspHours</p>
		<p><span class="mbl-strng">Column Description:</span> Sum of total insp hours.</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: sumOfTotalOnSiteHours</p>
		<p><span class="mbl-strng">Column Description:</span> Sum of total on site hours.</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: coalMetalInd</p>
		<p><span class="mbl-strng">Column Description:</span> Coal metal ind</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: sumOfTotalInspHrsSpvrTrainee</p>
		<p><span class="mbl-strng">Column Description:</span> Sum of total insp hrs spvr trainee</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: sumOfTotalOnSiteHrsSpvrTrainee</p>
		<p><span class="mbl-strng">Column Description:</span> Sum of total on site hrs spvr trainee</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
</div>
