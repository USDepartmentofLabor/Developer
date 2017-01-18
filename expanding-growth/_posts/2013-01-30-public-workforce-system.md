---
layout: post
title: Public Workforce System
created: 1359580002
description: The PWSD is a dataset that can be used to answer questions about various public workforce system programs and how these programs fit in with the overall public workforce system and the economy.
---

<div class="force_wrap apiurl">
<p>http://api.dol.gov/V1/Statistics/PWSD</p>
</div>

<p>The PWSD is a dataset that can be used to answer questions about various public workforce system programs and how these programs fit in with the overall public workforce system and the economy. It was designed primarily to be used as a tool to understand what has been occurring in the Wagner-Peyser program and contains data from quarter 1 of 1995 through quarter 4 of 2008. Also, it was designed to understand the relationship and flow of participants as they go through the public workforce system. The PWSD can be used to analyze these programs both individually and in combination. The PWSD contains economic variables, Unemployment Insurance System data, and data on programs funded by the Workforce Investment Act and Employment Service. Economic variables included are labor force, employment, unemployment, unemployment rate, and gross domestic product data.</p>

<p>This complete dataset can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://catalog.data.gov/dataset/public-workforce-system-dataset-pwsd&amp;exitTitle=Public Workforce System Dataset&amp;fedpage=yes">http://catalog.data.gov/dataset/public-workforce-system-dataset-pwsd</a></p>


<a href ="http://api.dol.gov/V1/Statistics/PWSD/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL%20Public%20Workforce%20System%20Dataset" class="button radius button_dataset">Explore This Data</a>


## Dataset Tables

<div>
	<ul>
		<li><a href="#esFinal">esFinal</a></li>
		<li><a href="#model">model</a></li>
		<li><a href="#recessionPeriods">recessionPeriods</a></li>
	</ul>
</div>

<div>
	<h3 id="esFinal" tabindex="-1">esFinal</h3>
	<table class="accessible responsive" summary="Employment Services - Public Workforce System Dataset (PWSD)">
		<caption>Employment Service</caption>
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
					state
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (3)
				</td>
				<td>
					<span class="small">Column Description</span>
					State.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					fy
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Fiscal year.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					fyq
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Fiscal year quarter.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					cy
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Calendar year.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					cyq
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Calendar year quarter.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					esObligation
				</th>
				<td>
					<span class="small">Data Type</span>
					float
				</td>
				<td>
					<span class="small">Column Description</span>
					Employment service obligation.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					esExpenditure
				</th>
				<td>
					<span class="small">Data Type</span>
					float
				</td>
				<td>
					<span class="small">Column Description</span>
					Employment service expenditure.
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="model" tabindex="-1">Model</h3>
	<table class="accessible responsive" summary="model - Public Workforce System Dataset (PWSD)">
		<caption>Model</caption>
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
					state
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (3)
				</td>
				<td>
					<span class="small">Column Description</span>
					State.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					calendarYear
				</th>
				<td>
					<span class="small">Data Type</span>
					int
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
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Calendar year quarter.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					fiscalYear
				</th>
				<td>
					<span class="small">Data Type</span>
					int
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
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Fiscal year quarter.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					laborForce
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Labor force.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					employment
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Employment.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					unemployment
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Unemployment.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					unemploymentRate
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Unemployment rate.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					quarterGDP
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Quarter GDP.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					benefitsPaid
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Benefits paid.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					initialClaims
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Initial claims.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					firstPayments
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					First payments.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					weeksClaimed
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Weeks claimed.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					weeksCompensated
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Weeks compensated.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					exhaustions
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Exhaustions.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					averageDuration
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Average duration.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					exhaustionRate
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (16)
				</td>
				<td>
					<span class="small">Column Description</span>
					Exhaustion rate.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					ebBenefits
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					EB benefits.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					ebFirstPayments
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					EB first payments.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					ebWeeksClaimed
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					EB weeks claimed.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					ebExhaustions
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					EB exhaustions.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					ebWeeksCompensated
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					EB weeks compensated.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					profiledClaimants
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Profiled claimants.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					poolProfiledClaimants
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Pool profiled claimants.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					referredProfiledClaimants
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Referred profiled claimants.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					exemptedProfiledClaimants
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Exempted profiled claimants.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					reportingToService
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Reporting to service.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					reportingToOrientationService
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Reporting to orientation service.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					reportingToAssessmentService
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Reporting to assessment service.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					reportingToCounselingService
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Reporting to counseling service.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					reportingToPlacementService
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Reporting to placement service.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					reportingToJSWServices
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Reporting to JSW services.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					reportingToTrainingServices
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Reporting to training services.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					reportingToSelfEmploymentService
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Reporting to self employment service.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					completingServices
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Completing services.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					completingOrientationService
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Completing orientation service.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					completingAssessmentService
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Completing assessment service.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					completingCounselingServices
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Completing counseling services.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					completingPlacementServices
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Completing placement services.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					completingJSWServices
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Completing JSW services.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					completingTrainingServices
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Completing training services.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					completingSelfEmploymentService
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Completing self employment service.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Total Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalMaleWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Total male Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalUIEligibleWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Total UI eligible Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalEmployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Total employed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalUnemployedWagnerPeyser
				</th>
				<td>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Total unemployed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalInSchoolWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Total in school Wagner Peyser.
				</td>
				</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalLessThanHighSchoolEducationWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Total less than high school education Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalHighSchoolEducationOrGedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Total high school education or GED Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalPostSecondaryEducationWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Total post secondary education Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalYouthWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Total youth Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalAdult18To22WagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Total adult 18 to 22 Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalAdult18To44WagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Total adult 18 to 44 Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalAdult45To54WagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Total adult 45 to 54 Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalAdult55PlusWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Total adult 55 and older Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalReferredToJtpaOrWiaWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Total referred to JTPA or WIA Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalReferredToSupportServicesWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Total referred to support services Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalJobSearchActivitiesWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Total job search activities Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalReferredToEmploymentWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Total referred to employment Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalServiceReceivedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Total service received Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalCareerGuidanceWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Total career guidance Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalWorkforceInfoServicesReceivedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Total workforce info services received Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalEnteredEmploymentWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Total entered employment Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalExitersWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Total exiters Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalEERateBaseDenominatorWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Total EE rate base denominator Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalEERateWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (16)
				</td>
				<td>
					<span class="small">Column Description</span>
					Total EE rate Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalEETotalApplicantsWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					float
				</td>
				<td>
					<span class="small">Column Description</span>
					Total EE total applicants Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalEEReceivedReportableServicesWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					float
				</td>
				<td>
					<span class="small">Column Description</span>
					Total EE received reportable services Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalReceivedReportableServicesApplicantsWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					float
				</td>
				<td>
					<span class="small">Column Description</span>
					Total received reportable services applicants Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalActiveAppsUnemploymentInsuranceEligibleWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Total active apps unemployment insurance eligible Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					maleUnemploymentInsuranceEligibleWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Male unemployment insurance eligible Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					youthUnemploymentInsuranceEligibleWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Youth unemployment insurance eligible Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					adult18To22UnemploymentInsuranceEligibleWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Adult 18 to 22 unemployment insurance eligible Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					adult18To44UnemploymentInsuranceEligibleWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Adult 18 to 44 unemployment insurance eligible Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					adult45To54UnemploymentInsuranceEligibleWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Adult 45 to 54 unemployment insurance eligible Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					adult55PlusUnemploymentInsuranceEligibleWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Adult 55 and older unemployment insurance eligible Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					referredToJtpaOrWiaUnemploymentInsuranceEligibleWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Referred to JTPA or WIA unemployment insurance eligible Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					referredToSupportUnemploymentInsuranceEligibleWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Referred to support unemployment insurance eligible Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					jobSearchActivitiesUnemploymentInsuranceEligibleWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Job search activities unemployment insurance eligible Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					referredToEmploymentUnemploymentInsuranceEligibleWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Referred to employment unemployment insurance eligible Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					receivedReportServiceUnemploymentInsuranceEligibleWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Received report service unemployment insurance eligible Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					careerGuidanceUnemploymentInsuranceEligibleWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Career guidance unemployment insurance eligible Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					receivedWorkforceInfoServicesUnemploymentInsuranceEligibeWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Received workforce info services unemployment insurance eligibe Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					enteredEmploymentUnemploymentInsuranceEligibleWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Entered employment unemployment insurance eligible Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalExitersUnemploymentInsuranceEligibleWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Total exiters unemployment insurance eligible Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					eeRateBaseDenominatorUnemploymentInsuranceEligibleWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					EE rate base denominator unemployment insurance eligible Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					eeRateUnemploymentInsuranceEligibleWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					EE rate unemployment insurance eligible Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					eeTotalApplicantsUnemploymentInsuranceEligibleWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					EE total applicants unemployment insurance eligible Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					eeReceivedReportableServicesUnemploymentInsuranceWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					EE received reportable services unemployment insurance Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					receivedReportableServicesTotalApplicantsUnemploymentWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Received reportable services total applicants unemployment Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalActiveAppsEmployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Total active apps employed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					maleEmployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Male employed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					youthEmployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Youth employed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					adult18To22EmployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Adult 18 to 22 employed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					adult18To44EmployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Adult 18 to 44 employed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					adult45To54EmployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Adult 45 to 54 employed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					adult55PlusEmployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Adult 55 and older employed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					referredToJtpaOrWiaEmployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Referred to JTPA or WIA employed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					referredToSupportServiceEmployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Referred to support service employed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					jobSearchActivitiesEmployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Job search activities employed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					referredToEmploymentEmployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Referred to employment employed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					receivedReportServiceEmployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Received report service employed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					careerGuidanceEmployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Career guidance employed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					receivedWorkforceInfoServicesEmployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Received workforce info services employed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					enteredEmploymentEmployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Entered employment employed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalExitersEmployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Total exiters employed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					eeRateBaseDenominatorEmployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					EE rate base denominator employed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					eeRateEmployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					EE rate employed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalActiveAppsUnemployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Total active apps unemployed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					maleUnemployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Male unemployed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					youthUnemployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Youth unemployed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					adult18To22UnemployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Adult 18 to 22 unemployed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					adult18To44UnemployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Adult 18 to 44 unemployed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					adult45To54UnemployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Adult 45 to 54 unemployed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					adult55UnemployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Adult 55 unemployed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					referredToJtpaOrWiaUnemployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Referred to JTPA or WIA unemployed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					referredToSupportServiceUnemployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Referred to support service unemployed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					jobSearchActivitiesUnemployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Job search activities unemployed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					referredToEmploymentUnemployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Referred to employment unemployed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					receivedReportServiceUnemployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Received report service unemployed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					careerGuidanceUnemployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Career guidance unemployed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					receivedWorkforceInfoServicesUnemployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Received workforce info services unemployed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					enteredEmploymentUnemployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Entered employment unemployed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalExitersUnemployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Total exiters unemployed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					eeRateBaseDenominatorUnemployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					EE rate base denominator unemployed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					eeRateUnemployedWagnerPeyser
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					EE rate unemployed Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					esObligation
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Employment service obligation.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					esExpenditure
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Employment service expenditure.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					totalAdult
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Total adult.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					male
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Male.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					female
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Female.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					age18To21
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Age 18 to 21.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					age22To44
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Age 22 to 44.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					age45To54
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Age 45 to 54.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					age55
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Age 55 and older.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					lowerThanhighschool
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Lower than high school.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					ged
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					GED.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					hsgrad
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					High school graduate.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					somecoll
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Some College.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					cert
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Certificate.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					assoc
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Associates degree.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					ba
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Bachelor's degree.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					beyondba
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Beyond Bachelor's degree.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					employed
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Employed.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					uiclaimant
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					UI Claimant.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					uiexhaustee
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					UI exhaustee.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					adult_l
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Adult l.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					adult_st
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Adult st.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					wagner
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Wagner Peyser.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					ss
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					SS.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					selfcore
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Self Core.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					staffcore
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Staff Core.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					wis
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					WIS.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					ita_trn
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					ITA TRN.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					prevoc
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Prevoc.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					intserv
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Intserv.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					enttrain
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Enttrain.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					comptrain
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Comptrain.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					trn_ojt
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Training - on job training.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					trn_skillupg
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Training - skill upgrade.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					trn_entrep
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Training - entrep.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					trn_abe_esl
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Training - abe esl.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					trn_custom
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Training - Custom.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					trn_othoccskill
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Training - other CC Skills.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>	
					emp_q1
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Employed quarter 1.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					emp_q2
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Employed quarter 2.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					emp_q3
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Employed quarter 3.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					emp_q4
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Employed quarter 4.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type_uiwage_q1
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Type UI wage quarter 1.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type_fedemp_q1
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Type Federally employed quarter 1.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type_milemp_q1
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Type military employed quarter 1.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type_othadm_q1
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Type other administrative employment quarter 1.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type_supple_q1
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Type supplemental employment quarter 1.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type_uiwage_q2
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Type UI wage quarter 2.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type_fedemp_q2
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Type Federally employed quarter 2.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type_milemp_q2
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Type military employed quarter 2.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type_othadm_q2
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Type other administrative employment quarter 2.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type_supple_q2
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Type supplemental employment quarter 2.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type_uiwage_q3
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Type UI wage quarter 3.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type_fedemp_q3
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Type Federally employed quarter 3.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type_milemp_q3
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Type military employed quarter 3.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type_othadm_q3
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Type other administrative employment quarter 3.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type_supple_q3
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Type supplemental employment quarter 3.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type_uiwage_q4
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Type UI wage quarter 4.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type_fedemp_q4
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Type Federally employed quarter 4.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type_milemp_q4
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Type military employed quarter 4.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type_othadm_q4
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Type other administrative employment quarter 4.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type_supple_q4
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Type supplemental employment quarter 4.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					emp_trn
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Employment training.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					non_trad
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Non-traditional.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					empreg11
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Empreg11.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					empreg10
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Empreg10.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					empreg00
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Empreg00.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					empreg01
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Empreg01.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					attcred
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Attcred.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					performance
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Performance.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					adult_er
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Adult ER.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					d_adult_er
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					D adult ER.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					adult_ret
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Adult ret.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					d_adult_ret
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					D adult ret.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					adult_ret12
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Adult ret 12.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					d_adult_ret12
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					D adult ret 12.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					emp_q5
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Emp q5.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type_uiwage_q5
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Type UI wage q5.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type_supple_q5
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Type supplemental q5.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type_othadm_q5
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Type other administrative q5
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="recessionPeriods" tabindex="-1">recessionPeriods</h3>
	<table class="accessible responsive" summary="Recession Periods - Public Workforce System Dataset (PWSD)">
		<caption>Recession Periods</caption>
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
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Record id. - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					year
				</th>
				<td>
					<span class="small">Data Type</span>
					float
				</td>
				<td>
					<span class="small">Column Description</span>
					Year.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					period
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (3)
				</td>
				<td>
					<span class="small">Column Description</span>
					Period.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					unemploymentRate
				</th>
				<td>
					<span class="small">Data Type</span>
					float
				</td>
				<td>
					<span class="small">Column Description</span>
					Unemployment rate.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					recession
				</th>
				<td>
					<span class="small">Data Type</span>
					bool
				</td>
				<td>
					<span class="small">Column Description</span>
					Recession.
				</td>
			</tr>
		</tbody>
	</table>
</div>