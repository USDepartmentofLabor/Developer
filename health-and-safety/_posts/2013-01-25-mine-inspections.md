---
layout: post
title: Mine Inspections
created: 1359127523
version: V1
description: The Mine Inspections dataset lists every mine inspection conducted by MSHA dating back to 1/1/1978.
---

<div class="force_wrap apiurl">
<p>https://api.dol.gov/V1/Compliance/MineInspection</p>
</div>

<p>The Mine Inspections dataset lists every mine inspection conducted by MSHA dating back to 1/1/1978. The data includes the name of the mine inspected, MSHA's internal inspection number (event number), the type of inspection and the start and end dates of the inspection. Event Number is the unique key for this dataset. It also includes the Mine ID associated with the inspections which can be used to relate it to the Mines Data Set.</p>
<p>This complete dataset can be found at https://explore.data.gov/Energy-and-Utilities/Mine-Inspections/wt25-mkey</p>

<a href ="http://api.dol.gov/V1/Compliance/MineInspection/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL%20Mine%20Inspections%20Dataset" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables

<div>
	<h3>mineInspections</h3>
	<table class="accessible responsive" summary="Mine Inspections - lists every mine inspection conducted by MSHA dating back to 1/1/1978">
		<caption>Mine Inspections</caption>
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
					Record Id. - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					eventNumber
				</th>
				<td>
					<span class="small">Data Type</span>
					bigint
				</td>
				<td>
					<span class="small">Column Description</span>
					Event number.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					mineId
				</th>
				<td>
					<span class="small">Data Type</span>
					bigint
				</td>
				<td>
					<span class="small">Column Description</span>
					Mine Id.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					inspectionBeginDate
				</th>
				<td>
					<span class="small">Data Type</span>
					datetime
				</td>
				<td>
					<span class="small">Column Description</span>
					Inspection begin date.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					inspectionEndDate
				</th>
				<td>
					<span class="small">Data Type</span>
					datetime
				</td>
				<td>
					<span class="small">Column Description</span>
					Inspection end date.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					controllerId
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (20)
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
					varchar (200)
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
					varchar (20)
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
					varchar (200)
				</td>
				<td>
					<span class="small">Column Description</span>
					Operator name.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					calendarYear
				</th>
				<td>
					<span class="small">Data Type</span>
					bigint
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
					bigint
				</td>
				<td>
					<span class="small">Column Description</span>
					Calendar quarter.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					fiscalYear
				</th>
				<td>
					<span class="small">Data Type</span>
					bigint
				</td>
				<td>
					<span class="small">Column Description</span>
					Fiscal year.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					fiscalQuarter
				</th>
				<td>
					<span class="small">Data Type</span>
					bigint
				</td>
				<td>
					<span class="small">Column Description</span>
					Fiscal quarter.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					inspectionOfficeCode
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (5)
				</td>
				<td>
					<span class="small">Column Description</span>
					Inspection office code.
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
					varchar (200)
				</td>
				<td>
					<span class="small">Column Description</span>
					Activity.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					activitySections
				</th>
				<td>
					<span class="small">Data Type</span>
					bigint
				</td>
				<td>
					<span class="small">Column Description</span>
					Activity sections.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					idleSections
				</th>
				<td>
					<span class="small">Data Type</span>
					bigint
				</td>
				<td>
					<span class="small">Column Description</span>
					Idle sections.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					shaftSlopeSink
				</th>
				<td>
					<span class="small">Data Type</span>
					bigint
				</td>
				<td>
					<span class="small">Column Description</span>
					Shaft slope sink.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					impoundConstr
				</th>
				<td>
					<span class="small">Data Type</span>
					bigint
				</td>
				<td>
					<span class="small">Column Description</span>
					Impound constr.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					buildingConstrSites
				</th>
				<td>
					<span class="small">Data Type</span>
					bigint
				</td>
				<td>
					<span class="small">Column Description</span>
					Building constr sites.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					draglines
				</th>
				<td>
					<span class="small">Data Type</span>
					bigint
				</td>
				<td>
					<span class="small">Column Description</span>
					Draglines.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					unclassifiedConstr
				</th>
				<td>
					<span class="small">Data Type</span>
					bigint
				</td>
				<td>
					<span class="small">Column Description</span>
					Unclassified constr.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					coRecords
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					CO records.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					surfUgMine
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Surf UG mine.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					surfFacilityMine
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Surf facility mine.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					refusePile
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Refuse pile.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					explosiveStorage
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Explosive storage.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					outbyArea
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Out by area.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					majorConst
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Major const.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					shaftsSlopes
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Shafts slopes.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					impoundments
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Impoundments.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					miscArea
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Misc area.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					programArea
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (200)
				</td>
				<td>
					<span class="small">Column Description</span>
					Program area.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					sumOfSampleCntAir
				</th>
				<td>
					<span class="small">Data Type</span>
					bigint
				</td>
				<td>
					<span class="small">Column Description</span>
					Sum of sample cnt air.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					sumOfSampleCntDustspot
				</th>
				<td>
					<span class="small">Data Type</span>
					bigint
				</td>
				<td>
					<span class="small">Column Description</span>
					Sum of sample cnt dust spot.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					sumOfSampleCntDustSurvey
				</th>
				<td>
					<span class="small">Data Type</span>
					bigint
				</td>
				<td>
					<span class="small">Column Description</span>
					Sum of sample cnt dust survey.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					sumOfSampleCntRespDust
				</th>
				<td>
					<span class="small">Data Type</span>
					bigint
				</td>
				<td>
					<span class="small">Column Description</span>
					Sum of sample cnt resp dust.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					sumOfSampleCntNoise
				</th>
				<td>
					<span class="small">Data Type</span>
					bigint
				</td>
				<td>
					<span class="small">Column Description</span>
					Sum of sample cnt noise.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					sumOfSampleCntOther
				</th>
				<td>
					<span class="small">Data Type</span>
					bigint
				</td>
				<td>
					<span class="small">Column Description</span>
					Sum of sample cnt other.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					nbrInspector
				</th>
				<td>
					<span class="small">Data Type</span>
					bigint
				</td>
				<td>
					<span class="small">Column Description</span>
					Number inspector.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					sumOfTotalInspHours
				</th>
				<td>
					<span class="small">Data Type</span>
					bigint
				</td>
				<td>
					<span class="small">Column Description</span>
					Sum of total insp hours.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					sumOfTotalOnSiteHours
				</th>
				<td>
					<span class="small">Data Type</span>
					bigint
				</td>
				<td>
					<span class="small">Column Description</span>
					Sum of total on site hours.
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
					Coal metal ind
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					sumOfTotalInspHrsSpvrTrainee
				</th>
				<td>
					<span class="small">Data Type</span>
					bigint
				</td>
				<td>
					<span class="small">Column Description</span>
					Sum of total insp hrs spvr trainee.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					sumOfTotalOnSiteHrsSpvrTrainee
				</th>
				<td>
					<span class="small">Data Type</span>
					bigint
				</td>
				<td>
					<span class="small">Column Description</span>
					Sum of total on site hrs spvr trainee
				</td>
			</tr>
		</tbody>
	</table>
</div>