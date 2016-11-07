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

<p>This complete dataset can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://explore.data.gov/Labor-Force-Employment-and-Earnings/Public-Workforce-System-Dataset-PWSD-/zrnt-3pme&amp;exitTitle=Public Workforce System Dataset&amp;fedpage=yes">http://explore.data.gov/Labor-Force-Employment-and-Earnings/Public-Workforce-System-Dataset-PWSD-/zrnt-3pme</a></p>


<a href ="http://api.dol.gov/V1/Statistics/PWSD/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL%20Public%20Workforce%20System%20Dataset" class="button radius button_dataset">Explore This Data</a>


## Dataset Tables

<div class="dsktp_tbl">
	<ul>
		<li><a href="#esFinal">esFinal</a></li>
		<li><a href="#model">model</a></li>
		<li><a href="#recessionPeriods">recessionPeriods</a></li>
	</ul>
</div>

<div class="mbl_tbl">
	<ul>
		<li><a href="#esFinal_mbl">esFinal</a></li>
		<li><a href="#model_mbl">model</a></li>
		<li><a href="#recessionPeriods_mbl">recessionPeriods</a></li>
	</ul>
</div>

<div class="dsktp_tbl">
	<h3 id="esFinal" tabindex="-1">esFinal</h3>
	<table summary="Employment Services - Public Workforce System Dataset (PWSD)">
		<caption>Employment Service</caption>
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
				<th scope="row">state</th>
				<td>State.</td>
				<td>varchar (3)</td>
			</tr>
			<tr>
				<th scope="row">fy</th>
				<td>Fiscal year.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">fyq</th>
				<td>Fiscal year quarter.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">cy</th>
				<td>Calendar year.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">cyq</th>
				<td>Calendar year quarter.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">esObligation</th>
				<td>Employment service obligation.</td>
				<td>float</td>
			</tr>
			<tr>
				<th scope="row">esExpenditure</th>
				<td>Employment service expenditure.</td>
				<td>float</td>
			</tr>
		</tbody>
	</table>

	<h3 id="model" tabindex="-1">Model</h3>
	<table summary="model - Public Workforce System Dataset (PWSD)">
		<caption>Model</caption>
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
				<th scope="row">state</th>
				<td>State.</td>
				<td>varchar (3)</td>
			</tr>
			<tr>
				<th scope="row">calendarYear</th>
				<td>Calendar year.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">calendarQuarter</th>
				<td>Calendar year quarter.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">fiscalYear</th>
				<td>Fiscal year.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">fiscalQuarter</th>
				<td>Fiscal year quarter.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">laborForce</th>
				<td>Labor force.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">employment</th>
				<td>Employment.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">unemployment</th>
				<td>Unemployment.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">unemploymentRate</th>
				<td>Unemployment rate.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">quarterGDP</th>
				<td>Quarter GDP.</td>
				<td>varchar (10)</td>
			</tr>
			<tr>
				<th scope="row">benefitsPaid</th>
				<td>Benefits paid.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">initialClaims</th>
				<td>Initial claims.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">firstPayments</th>
				<td>First payments.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">weeksClaimed</th>
				<td>Weeks claimed.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">weeksCompensated</th>
				<td>Weeks compensated.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">exhaustions</th>
				<td>Exhaustions.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">averageDuration</th>
				<td>Average duration.</td>
				<td>float</td>
			</tr>
			<tr>
				<th scope="row">exhaustionRate</th>
				<td>Exhaustion rate.</td>
				<td>varchar (16)</td>
			</tr>
			<tr>
				<th scope="row">ebBenefits</th>
				<td>EB benefits.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">ebFirstPayments</th>
				<td>EB first payments.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">ebWeeksClaimed</th>
				<td>EB weeks claimed.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">ebExhaustions</th>
				<td>EB exhaustions.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">ebWeeksCompensated</th>
				<td>EB weeks compensated.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">profiledClaimants</th>
				<td>Profiled claimants.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">poolProfiledClaimants</th>
				<td>Pool profiled claimants.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">referredProfiledClaimants</th>
				<td>Referred profiled claimants.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">exemptedProfiledClaimants</th>
				<td>Exempted profiled claimants.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">reportingToService</th>
				<td>Reporting to service.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">reportingToOrientationService</th>
				<td>Reporting to orientation service.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">reportingToAssessmentService</th>
				<td>Reporting to assessment service.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">reportingToCounselingService</th>
				<td>Reporting to counseling service.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">reportingToPlacementService</th>
				<td>Reporting to placement service.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">reportingToJSWServices</th>
				<td>Reporting to JSW services.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">reportingToTrainingServices</th>
				<td>Reporting to training services.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">reportingToSelfEmploymentService</th>
				<td>Reporting to self employment service.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">completingServices</th>
				<td>Completing services.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">completingOrientationService</th>
				<td>Completing orientation service.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">completingAssessmentService</th>
				<td>Completing assessment service.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">completingCounselingServices</th>
				<td>Completing counseling services.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">completingPlacementServices</th>
				<td>Completing placement services.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">completingJSWServices</th>
				<td>Completing JSW services.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">completingTrainingServices</th>
				<td>Completing training services.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">completingSelfEmploymentService</th>
				<td>Completing self employment service.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">totalWagnerPeyser</th>
				<td>Total Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">totalMaleWagnerPeyser</th>
				<td>Total male Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">totalUIEligibleWagnerPeyser</th>
				<td>Total UI eligible Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">totalEmployedWagnerPeyser</th>
				<td>Total employed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">totalUnemployedWagnerPeyser</th>
				<td>Total unemployed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">totalInSchoolWagnerPeyser</th>
				<td>Total in school Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">totalLessThanHighSchoolEducationWagnerPeyser</th>
				<td>Total less than high school education Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">totalHighSchoolEducationOrGedWagnerPeyser</th>
				<td>Total high school education or GED Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">totalPostSecondaryEducationWagnerPeyser</th>
				<td>Total post secondary education Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">totalYouthWagnerPeyser</th>
				<td>Total youth Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">totalAdult18To22WagnerPeyser</th>
				<td>Total adult 18 to 22 Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">totalAdult18To44WagnerPeyser</th>
				<td>Total adult 18 to 44 Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">totalAdult45To54WagnerPeyser</th>
				<td>Total adult 45 to 54 Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">totalAdult55PlusWagnerPeyser</th>
				<td>Total adult 55 and older Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">totalReferredToJtpaOrWiaWagnerPeyser</th>
				<td>Total referred to JTPA or WIA Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">totalReferredToSupportServicesWagnerPeyser</th>
				<td>Total referred to support services Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">totalJobSearchActivitiesWagnerPeyser</th>
				<td>Total job search activities Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">totalReferredToEmploymentWagnerPeyser</th>
				<td>Total referred to employment Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">totalServiceReceivedWagnerPeyser</th>
				<td>Total service received Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">totalCareerGuidanceWagnerPeyser</th>
				<td>Total career guidance Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">totalWorkforceInfoServicesReceivedWagnerPeyser</th>
				<td>Total workforce info services received Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">totalEnteredEmploymentWagnerPeyser</th>
				<td>Total entered employment Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">totalExitersWagnerPeyser</th>
				<td>Total exiters Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">totalEERateBaseDenominatorWagnerPeyser</th>
				<td>Total EE rate base denominator Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">totalEERateWagnerPeyser</th>
				<td>Total EE rate Wagner Peyser.</td>
				<td>varchar (16)</td>
			</tr>
			<tr>
				<th scope="row">totalEETotalApplicantsWagnerPeyser</th>
				<td>Total EE total applicants Wagner Peyser.</td>
				<td>float</td>
			</tr>
			<tr>
				<th scope="row">totalEEReceivedReportableServicesWagnerPeyser</th>
				<td>Total EE received reportable services Wagner Peyser.</td>
				<td>float</td>
			</tr>
			<tr>
				<th scope="row">totalReceivedReportableServicesApplicantsWagnerPeyser</th>
				<td>Total received reportable services applicants Wagner Peyser.</td>
				<td>float</td>
			</tr>
			<tr>
				<th scope="row">totalActiveAppsUnemploymentInsuranceEligibleWagnerPeyser</th>
				<td>Total active apps unemployment insurance eligible Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">maleUnemploymentInsuranceEligibleWagnerPeyser</th>
				<td>Male unemployment insurance eligible Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">youthUnemploymentInsuranceEligibleWagnerPeyser</th>
				<td>Youth unemployment insurance eligible Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">adult18To22UnemploymentInsuranceEligibleWagnerPeyser</th>
				<td>Adult 18 to 22 unemployment insurance eligible Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">adult18To44UnemploymentInsuranceEligibleWagnerPeyser</th>
				<td>Adult 18 to 44 unemployment insurance eligible Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">adult45To54UnemploymentInsuranceEligibleWagnerPeyser</th>
				<td>Adult 45 to 54 unemployment insurance eligible Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">adult55PlusUnemploymentInsuranceEligibleWagnerPeyser</th>
				<td>Adult 55 and older unemployment insurance eligible Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">referredToJtpaOrWiaUnemploymentInsuranceEligibleWagnerPeyser</th>
				<td>Referred to JTPA or WIA unemployment insurance eligible Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">referredToSupportUnemploymentInsuranceEligibleWagnerPeyser</th>
				<td>Referred to support unemployment insurance eligible Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">jobSearchActivitiesUnemploymentInsuranceEligibleWagnerPeyser</th>
				<td>Job search activities unemployment insurance eligible Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">referredToEmploymentUnemploymentInsuranceEligibleWagnerPeyser</th>
				<td>Referred to employment unemployment insurance eligible Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">receivedReportServiceUnemploymentInsuranceEligibleWagnerPeyser</th>
				<td>Received report service unemployment insurance eligible Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">careerGuidanceUnemploymentInsuranceEligibleWagnerPeyser</th>
				<td>Career guidance unemployment insurance eligible Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">receivedWorkforceInfoServicesUnemploymentInsuranceEligibeWagnerPeyser</th>
				<td>Received workforce info services unemployment insurance eligibe Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">enteredEmploymentUnemploymentInsuranceEligibleWagnerPeyser</th>
				<td>Entered employment unemployment insurance eligible Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">totalExitersUnemploymentInsuranceEligibleWagnerPeyser</th>
				<td>Total exiters unemployment insurance eligible Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">eeRateBaseDenominatorUnemploymentInsuranceEligibleWagnerPeyser</th>
				<td>EE rate base denominator unemployment insurance eligible Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">eeRateUnemploymentInsuranceEligibleWagnerPeyser</th>
				<td>EE rate unemployment insurance eligible Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">eeTotalApplicantsUnemploymentInsuranceEligibleWagnerPeyser</th>
				<td>EE total applicants unemployment insurance eligible Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">eeReceivedReportableServicesUnemploymentInsuranceWagnerPeyser</th>
				<td>EE received reportable services unemployment insurance Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">receivedReportableServicesTotalApplicantsUnemploymentWagnerPeyser</th>
				<td>Received reportable services total applicants unemployment Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">totalActiveAppsEmployedWagnerPeyser</th>
				<td>Total active apps employed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">maleEmployedWagnerPeyser</th>
				<td>Male employed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">youthEmployedWagnerPeyser</th>
				<td>Youth employed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">adult18To22EmployedWagnerPeyser</th>
				<td>Adult 18 to 22 employed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">adult18To44EmployedWagnerPeyser</th>
				<td>Adult 18 to 44 employed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">adult45To54EmployedWagnerPeyser</th>
				<td>Adult 45 to 54 employed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">adult55PlusEmployedWagnerPeyser</th>
				<td>Adult 55 and older employed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">referredToJtpaOrWiaEmployedWagnerPeyser</th>
				<td>Referred to JTPA or WIA employed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">referredToSupportServiceEmployedWagnerPeyser</th>
				<td>Referred to support service employed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">jobSearchActivitiesEmployedWagnerPeyser</th>
				<td>Job search activities employed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">referredToEmploymentEmployedWagnerPeyser</th>
				<td>Referred to employment employed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">receivedReportServiceEmployedWagnerPeyser</th>
				<td>Received report service employed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">careerGuidanceEmployedWagnerPeyser</th>
				<td>Career guidance employed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">receivedWorkforceInfoServicesEmployedWagnerPeyser</th>
				<td>Received workforce info services employed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">enteredEmploymentEmployedWagnerPeyser</th>
				<td>Entered employment employed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">totalExitersEmployedWagnerPeyser</th>
				<td>Total exiters employed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">eeRateBaseDenominatorEmployedWagnerPeyser</th>
				<td>EE rate base denominator employed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">eeRateEmployedWagnerPeyser</th>
				<td>EE rate employed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">totalActiveAppsUnemployedWagnerPeyser</th>
				<td>Total active apps unemployed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">maleUnemployedWagnerPeyser</th>
				<td>Male unemployed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">youthUnemployedWagnerPeyser</th>
				<td>Youth unemployed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">adult18To22UnemployedWagnerPeyser</th>
				<td>Adult 18 to 22 unemployed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">adult18To44UnemployedWagnerPeyser</th>
				<td>Adult 18 to 44 unemployed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">adult45To54UnemployedWagnerPeyser</th>
				<td>Adult 45 to 54 unemployed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">adult55UnemployedWagnerPeyser</th>
				<td>Adult 55 unemployed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">referredToJtpaOrWiaUnemployedWagnerPeyser</th>
				<td>Referred to JTPA or WIA unemployed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">referredToSupportServiceUnemployedWagnerPeyser</th>
				<td>Referred to support service unemployed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">jobSearchActivitiesUnemployedWagnerPeyser</th>
				<td>Job search activities unemployed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">referredToEmploymentUnemployedWagnerPeyser</th>
				<td>Referred to employment unemployed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">receivedReportServiceUnemployedWagnerPeyser</th>
				<td>Received report service unemployed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">careerGuidanceUnemployedWagnerPeyser</th>
				<td>Career guidance unemployed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">receivedWorkforceInfoServicesUnemployedWagnerPeyser</th>
				<td>Received workforce info services unemployed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">enteredEmploymentUnemployedWagnerPeyser</th>
				<td>Entered employment unemployed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">totalExitersUnemployedWagnerPeyser</th>
				<td>Total exiters unemployed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">eeRateBaseDenominatorUnemployedWagnerPeyser</th>
				<td>EE rate base denominator unemployed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">eeRateUnemployedWagnerPeyser</th>
				<td>EE rate unemployed Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">esObligation</th>
				<td>Employment service obligation.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">esExpenditure</th>
				<td>Employment service expenditure.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">totalAdult</th>
				<td>Total adult.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">male</th>
				<td>Male.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">female</th>
				<td>Female.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">age18To21</th>
				<td>Age 18 to 21.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">age22To44</th>
				<td>Age 22 to 44.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">age45To54</th>
				<td>Age 45 to 54.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">age55</th>
				<td>Age 55 and older.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">lowerThanhighschool</th>
				<td>Lower than high school.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">ged</th>
				<td>GED.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">hsgrad</th>
				<td>High school graduate.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">somecoll</th>
				<td>Some College.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">cert</th>
				<td>Certificate.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">assoc</th>
				<td>Associates degree.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">ba</th>
				<td>Bachelor's degree.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">beyondba</th>
				<td>Beyond Bachelor's degree.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">employed</th>
				<td>Employed.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">uiclaimant</th>
				<td>UI Claimant.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">uiexhaustee</th>
				<td>UI exhaustee.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">adult_l</th>
				<td>Adult l.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">adult_st</th>
				<td>Adult st.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">wagner</th>
				<td>Wagner Peyser.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">ss</th>
				<td>SS.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">selfcore</th>
				<td>Self Core.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">staffcore</th>
				<td>Staff Core.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">wis</th>
				<td>WIS.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">ita_trn</th>
				<td>ITA TRN.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">prevoc</th>
				<td>Prevoc.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">intserv</th>
				<td>Intserv.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">enttrain</th>
				<td>Enttrain.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">comptrain</th>
				<td>Comptrain.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">trn_ojt</th>
				<td>Training - on job training.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">trn_skillupg</th>
				<td>Training - skill upgrade.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">trn_entrep</th>
				<td>Training - entrep.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">trn_abe_esl</th>
				<td>Training - abe esl.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">trn_custom</th>
				<td>Training - Custom.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">trn_othoccskill</th>
				<td>Training - other CC Skills.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">emp_q1</th>
				<td>Employed quarter 1.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">emp_q2</th>
				<td>Employed quarter 2.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">emp_q3</th>
				<td>Employed quarter 3.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">emp_q4</th>
				<td>Employed quarter 4.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">type_uiwage_q1</th>
				<td>Type UI wage quarter 1.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">type_fedemp_q1</th>
				<td>Type Federally employed quarter 1.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">type_milemp_q1</th>
				<td>Type military employed quarter 1.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">type_othadm_q1</th>
				<td>Type other administrative employment quarter 1.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">type_supple_q1</th>
				<td>Type supplemental employment quarter 1.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">type_uiwage_q2</th>
				<td>Type UI wage quarter 2.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">type_fedemp_q2</th>
				<td>Type Federally employed quarter 2.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">type_milemp_q2</th>
				<td>Type military employed quarter 2.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">type_othadm_q2</th>
				<td>Type other administrative employment quarter 2.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">type_supple_q2</th>
				<td>Type supplemental employment quarter 2.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">type_uiwage_q3</th>
				<td>Type UI wage quarter 3.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">type_fedemp_q3</th>
				<td>Type Federally employed quarter 3.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">type_milemp_q3</th>
				<td>Type military employed quarter 3.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">type_othadm_q3</th>
				<td>Type other administrative employment quarter 3.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">type_supple_q3</th>
				<td>Type supplemental employment quarter 3.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">type_uiwage_q4</th>
				<td>Type UI wage quarter 4.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">type_fedemp_q4</th>
				<td>Type Federally employed quarter 4.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">type_milemp_q4</th>
				<td>Type military employed quarter 4.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">type_othadm_q4</th>
				<td>Type other administrative employment quarter 4.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">type_supple_q4</th>
				<td>Type supplemental employment quarter 4.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">emp_trn</th>
				<td>Employment training.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">non_trad</th>
				<td>Non-traditional.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">empreg11</th>
				<td>Empreg11.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">empreg10</th>
				<td>Empreg10.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">empreg00</th>
				<td>Empreg00.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">empreg01</th>
				<td>Empreg01.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">attcred</th>
				<td>Attcred.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">performance</th>
				<td>Performance.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">adult_er</th>
				<td>Adult ER.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">d_adult_er</th>
				<td>D adult ER.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">adult_ret</th>
				<td>Adult ret.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">d_adult_ret</th>
				<td>D adult ret.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">adult_ret12</th>
				<td>Adult ret 12.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">d_adult_ret12</th>
				<td>D adult ret 12.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">emp_q5</th>
				<td>Emp q5.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">type_uiwage_q5</th>
				<td>Type UI wage q5.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">type_supple_q5</th>
				<td>Type supplemental q5.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">type_othadm_q5</th>
				<td>Type other administrative q5</td>
				<td>int</td>
			</tr>
		</tbody>
	</table>

	<h3 id="recessionPeriods" tabindex="-1">recessionPeriods</h3>
	<table summary="Recession Periods - Public Workforce System Dataset (PWSD)">
		<caption>Recession Periods</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="row">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="col">id</th>
				<td>Record id. - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">year</th>
				<td>Year.</td>
				<td>float</td>
			</tr>
			<tr>
				<th scope="row">period</th>
				<td>Period.</td>
				<td>varchar (3)</td>
			</tr>
			<tr>
				<th scope="row">unemploymentRate</th>
				<td>Unemployment rate.</td>
				<td>float</td>
			</tr>
			<tr>
				<th scope="row">recession</th>
				<td>Recession.</td>
				<td>bool</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h3 id="esFinal_mbl" tabindex="-1">esFinal</h3>
	<h4>Employment Services - Public Workforce System Dataset (PWSD)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: id</p>
		<p><span class="mbl-strng">Column Description:</span> Record id. - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: state</p>
		<p><span class="mbl-strng">Column Description:</span> State.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (3)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: fy</p>
		<p><span class="mbl-strng">Column Description:</span> Fiscal year.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: fyq</p>
		<p><span class="mbl-strng">Column Description:</span> Fiscal year quarter.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: cy</p>
		<p><span class="mbl-strng">Column Description:</span> Calendar year.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: cyq</p>
		<p><span class="mbl-strng">Column Description:</span> Calendar year quarter.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: esObligation</p>
		<p><span class="mbl-strng">Column Description:</span> Employment service obligation.</p>
		<p><span class="mbl-strng">Data Type:</span> float</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: esExpenditure</p>
		<p><span class="mbl-strng">Column Description:</span> Employment service expenditure</p>
		<p><span class="mbl-strng">Data Type:</span> float</p>
	</div>

	<hr />
	<h3 id="model_mbl" tabindex="-1">Model</h3>
	<h4>Model - Public Workforce System Dataset (PWSD)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: id</p>
		<p><span class="mbl-strng">Column Description:</span> Record id. - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: state</p>
		<p><span class="mbl-strng">Column Description:</span> State.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (3)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: calendarYear</p>
		<p><span class="mbl-strng">Column Description:</span> Calendar year.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: calendarQuarter</p>
		<p><span class="mbl-strng">Column Description:</span> Calendar year quarter.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: fiscalYear</p>
		<p><span class="mbl-strng">Column Description:</span> Fiscal year.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: fiscalQuarter</p>
		<p><span class="mbl-strng">Column Description:</span> Fiscal year quarter.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: laborForce</p>
		<p><span class="mbl-strng">Column Description:</span> Labor force.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: employment</p>
		<p><span class="mbl-strng">Column Description:</span> Employment.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: unemployment</p>
		<p><span class="mbl-strng">Column Description:</span> Unemployment.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: unemploymentRate</p>
		<p><span class="mbl-strng">Column Description:</span> Unemployment rate.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: quarterGDP</p>
		<p><span class="mbl-strng">Column Description:</span> Quarter GDP.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: benefitsPaid</p>
		<p><span class="mbl-strng">Column Description:</span> Benefits paid.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: initialClaims</p>
		<p><span class="mbl-strng">Column Description:</span> Initial claims.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: firstPayments</p>
		<p><span class="mbl-strng">Column Description:</span> First payments.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: weeksClaimed</p>
		<p><span class="mbl-strng">Column Description:</span> Weeks claimed.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: weeksCompensated</p>
		<p><span class="mbl-strng">Column Description:</span> Weeks compensated.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: exhaustions</p>
		<p><span class="mbl-strng">Column Description:</span> Exhaustions.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: averageDuration</p>
		<p><span class="mbl-strng">Column Description:</span> Average duration.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: exhaustionRate</p>
		<p><span class="mbl-strng">Column Description:</span> Exhaustion rate.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (16)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: ebBenefits</p>
		<p><span class="mbl-strng">Column Description:</span> EB benefits.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: ebFirstPayments</p>
		<p><span class="mbl-strng">Column Description:</span> EB first payments.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: ebWeeksClaimed</p>
		<p><span class="mbl-strng">Column Description:</span> EB weeks claimed.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: ebExhaustions</p>
		<p><span class="mbl-strng">Column Description:</span> EB exhaustions.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: ebWeeksCompensated</p>
		<p><span class="mbl-strng">Column Description:</span> EB weeks compensated.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: profiledClaimants</p>
		<p><span class="mbl-strng">Column Description:</span> Profiled claimants.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: poolProfiledClaimants</p>
		<p><span class="mbl-strng">Column Description:</span> Pool profiled claimants.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: referredProfiledClaimants</p>
		<p><span class="mbl-strng">Column Description:</span> Referred profiled claimants.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: exemptedProfiledClaimants</p>
		<p><span class="mbl-strng">Column Description:</span> Exempted profiled claimants.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: reportingToService</p>
		<p><span class="mbl-strng">Column Description:</span> Reporting to service.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: reportingToOrientationService</p>
		<p><span class="mbl-strng">Column Description:</span> Reporting to orientation service.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: reportingToAssessmentService</p>
		<p><span class="mbl-strng">Column Description:</span> Reporting to assessment service.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: reportingToCounselingService</p>
		<p><span class="mbl-strng">Column Description:</span> Reporting to counseling service.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: reportingToPlacementService</p>
		<p><span class="mbl-strng">Column Description:</span> Reporting to placement service.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: reportingToJSWServices</p>
		<p><span class="mbl-strng">Column Description:</span> Reporting to JSW services.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: reportingToTrainingServices</p>
		<p><span class="mbl-strng">Column Description:</span> Reporting to training services.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: reportingToSelfEmploymentService</p>
		<p><span class="mbl-strng">Column Description:</span> Reporting to self employment service.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: completingServices</p>
		<p><span class="mbl-strng">Column Description:</span> Completing services.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: completingOrientationService</p>
		<p><span class="mbl-strng">Column Description:</span> Completing orientation service.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: completingAssessmentService</p>
		<p><span class="mbl-strng">Column Description:</span> Completing assessment service.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: completingCounselingServices</p>
		<p><span class="mbl-strng">Column Description:</span> Completing counseling services.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: completingPlacementServices</p>
		<p><span class="mbl-strng">Column Description:</span> Completing placement services.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: completingJSWServices</p>
		<p><span class="mbl-strng">Column Description:</span> Completing JSW services.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: completingTrainingServices</p>
		<p><span class="mbl-strng">Column Description:</span> Completing training services.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: completingSelfEmploymentService</p>
		<p><span class="mbl-strng">Column Description:</span> Completing self employment service.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: totalWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Total Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: totalMaleWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Total male Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: totalUIEligibleWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Total UI eligible Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: totalEmployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Total employed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: totalUnemployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Total unemployed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: totalInSchoolWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Total in school Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: totalLessThanHighSchoolEducationWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Total less than high school education Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: totalHighSchoolEducationOrGedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Total high school education or GED Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: totalPostSecondaryEducationWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Total post secondary education Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: totalYouthWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Total youth Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: totalAdult18To22WagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Total adult 18 to 22 Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: totalAdult18To44WagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Total adult 18 to 44 Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: totalAdult45To54WagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Total adult 45 to 54 Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: totalAdult55PlusWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Total adult 55 and older Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: totalReferredToJtpaOrWiaWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Total referred to JTPA or WIA Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: totalReferredToSupportServicesWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Total referred to support services Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: totalJobSearchActivitiesWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Total job search activities Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: totalReferredToEmploymentWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Total referred to employment Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: totalServiceReceivedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Total service received Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: totalCareerGuidanceWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Total career guidance Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: totalWorkforceInfoServicesReceivedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Total workforce info services received Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: totalEnteredEmploymentWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Total entered employment Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: totalExitersWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Total exiters Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: totalEERateBaseDenominatorWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Total EE rate base denominator Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: totalEERateWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Total EE rate Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (16)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: totalEETotalApplicantsWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Total EE total applicants Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> float</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: totalEEReceivedReportableServicesWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Total EE received reportable services Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> float</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: totalReceivedReportableServicesApplicantsWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Total received reportable services applicants Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> float</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: totalActiveAppsUnemploymentInsuranceEligibleWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Total active apps unemployment insurance eligible Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: maleUnemploymentInsuranceEligibleWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Male unemployment insurance eligible Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: youthUnemploymentInsuranceEligibleWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Youth unemployment insurance eligible Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: adult18To22UnemploymentInsuranceEligibleWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Adult 18 to 22 unemployment insurance eligible Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: adult18To44UnemploymentInsuranceEligibleWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Adult 18 to 44 unemployment insurance eligible Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: adult45To54UnemploymentInsuranceEligibleWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Adult 45 to 54 unemployment insurance eligible Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: adult55PlusUnemploymentInsuranceEligibleWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Adult 55 and older unemployment insurance eligible Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: referredToJtpaOrWiaUnemploymentInsuranceEligibleWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Referred to JTPA or WIA unemployment insurance eligible Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: referredToSupportUnemploymentInsuranceEligibleWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Referred to support unemployment insurance eligible Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: jobSearchActivitiesUnemploymentInsuranceEligibleWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Job search activities unemployment insurance eligible Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: referredToEmploymentUnemploymentInsuranceEligibleWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Referred to employment unemployment insurance eligible Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: receivedReportServiceUnemploymentInsuranceEligibleWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Received report service unemployment insurance eligible Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: careerGuidanceUnemploymentInsuranceEligibleWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Career guidance unemployment insurance eligible Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: receivedWorkforceInfoServicesUnemploymentInsuranceEligibeWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Received workforce info services unemployment insurance eligibe Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: enteredEmploymentUnemploymentInsuranceEligibleWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Entered employment unemployment insurance eligible Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: totalExitersUnemploymentInsuranceEligibleWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Total exiters unemployment insurance eligible Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: eeRateBaseDenominatorUnemploymentInsuranceEligibleWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> EE rate base denominator unemployment insurance eligible Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: eeRateUnemploymentInsuranceEligibleWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> EE rate unemployment insurance eligible Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: eeTotalApplicantsUnemploymentInsuranceEligibleWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> EE total applicants unemployment insurance eligible Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: eeReceivedReportableServicesUnemploymentInsuranceWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> EE received reportable services unemployment insurance Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: receivedReportableServicesTotalApplicantsUnemploymentWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Received reportable services total applicants unemployment Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: totalActiveAppsEmployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Total active apps employed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: maleEmployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Male employed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: youthEmployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Youth employed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: adult18To22EmployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Adult 18 to 22 employed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: adult18To44EmployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Adult 18 to 44 employed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: adult45To54EmployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Adult 45 to 54 employed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: adult55PlusEmployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Adult 55 and older employed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: referredToJtpaOrWiaEmployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Referred to JTPA or WIA employed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: referredToSupportServiceEmployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Referred to support service employed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: jobSearchActivitiesEmployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Job search activities employed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: referredToEmploymentEmployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Referred to employment employed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: receivedReportServiceEmployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Received report service employed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: careerGuidanceEmployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Career guidance employed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: receivedWorkforceInfoServicesEmployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Received workforce info services employed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: enteredEmploymentEmployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Entered employment employed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: totalExitersEmployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Total exiters employed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: eeRateBaseDenominatorEmployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> EE rate base denominator employed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: eeRateEmployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> EE rate employed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: totalActiveAppsUnemployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Total active apps unemployed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: maleUnemployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Male unemployed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: youthUnemployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Youth unemployed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: adult18To22UnemployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Adult 18 to 22 unemployed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: adult18To44UnemployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Adult 18 to 44 unemployed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: adult45To54UnemployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Adult 45 to 54 unemployed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: adult55UnemployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Adult 55 unemployed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: referredToJtpaOrWiaUnemployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Referred to JTPA or WIA unemployed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: referredToSupportServiceUnemployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Referred to support service unemployed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: jobSearchActivitiesUnemployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Job search activities unemployed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: referredToEmploymentUnemployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Referred to employment unemployed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: receivedReportServiceUnemployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Received report service unemployed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: careerGuidanceUnemployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Career guidance unemployed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: receivedWorkforceInfoServicesUnemployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Received workforce info services unemployed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: enteredEmploymentUnemployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Entered employment unemployed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: totalExitersUnemployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> Total exiters unemployed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: eeRateBaseDenominatorUnemployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> EE rate base denominator unemployed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: eeRateUnemployedWagnerPeyser</p>
		<p><span class="mbl-strng">Column Description:</span> EE rate unemployed Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: esObligation</p>
		<p><span class="mbl-strng">Column Description:</span> Employment service obligation.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: esExpenditure</p>
		<p><span class="mbl-strng">Column Description:</span> Employment service expenditure.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: totalAdult</p>
		<p><span class="mbl-strng">Column Description:</span> Total adult.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: male</p>
		<p><span class="mbl-strng">Column Description:</span> Male.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: female</p>
		<p><span class="mbl-strng">Column Description:</span> Female.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: age18To21</p>
		<p><span class="mbl-strng">Column Description:</span> Age 18 to 21.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: age22To44</p>
		<p><span class="mbl-strng">Column Description:</span> Age 22 to 44.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: age45To54</p>
		<p><span class="mbl-strng">Column Description:</span> Age 45 to 54.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: age55</p>
		<p><span class="mbl-strng">Column Description:</span> Age 55 and older.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: lowerThanhighschool</p>
		<p><span class="mbl-strng">Column Description:</span> Lower than high school.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: ged</p>
		<p><span class="mbl-strng">Column Description:</span> GED.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: hsgrad</p>
		<p><span class="mbl-strng">Column Description:</span> High school graduate.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: somecoll</p>
		<p><span class="mbl-strng">Column Description:</span> Some College.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: cert</p>
		<p><span class="mbl-strng">Column Description:</span> Certificate.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: assoc</p>
		<p><span class="mbl-strng">Column Description:</span> Associates degree.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: ba</p>
		<p><span class="mbl-strng">Column Description:</span> Bachelor's degree.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: beyondba</p>
		<p><span class="mbl-strng">Column Description:</span> Beyond Bachelor's degree.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: employed</p>
		<p><span class="mbl-strng">Column Description:</span> Employed.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: uiclaimant</p>
		<p><span class="mbl-strng">Column Description:</span> UI Claimant.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: uiexhaustee</p>
		<p><span class="mbl-strng">Column Description:</span> UI exhaustee.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: adult_l</p>
		<p><span class="mbl-strng">Column Description:</span> Adult l.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: adult_st</p>
		<p><span class="mbl-strng">Column Description:</span> Adult st.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: wagner</p>
		<p><span class="mbl-strng">Column Description:</span> Wagner Peyser.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: ss</p>
		<p><span class="mbl-strng">Column Description:</span> SS.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: selfcore</p>
		<p><span class="mbl-strng">Column Description:</span> Self Core.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: staffcore</p>
		<p><span class="mbl-strng">Column Description:</span> Staff Core.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: wis</p>
		<p><span class="mbl-strng">Column Description:</span> WIS.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: ita_trn</p>
		<p><span class="mbl-strng">Column Description:</span> ITA TRN.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: prevoc</p>
		<p><span class="mbl-strng">Column Description:</span> Prevoc.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: intserv</p>
		<p><span class="mbl-strng">Column Description:</span> Intserv.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: enttrain</p>
		<p><span class="mbl-strng">Column Description:</span> Enttrain.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: comptrain</p>
		<p><span class="mbl-strng">Column Description:</span> Comptrain.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: trn_ojt</p>
		<p><span class="mbl-strng">Column Description:</span> Training - on job training.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: trn_skillupg</p>
		<p><span class="mbl-strng">Column Description:</span> Training - skill upgrade.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: trn_entrep</p>
		<p><span class="mbl-strng">Column Description:</span> Training - entrep.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: trn_abe_esl</p>
		<p><span class="mbl-strng">Column Description:</span> Training - abe esl.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: trn_custom</p>
		<p><span class="mbl-strng">Column Description:</span> Training - Custom.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: trn_othoccskill</p>
		<p><span class="mbl-strng">Column Description:</span> Training - other CC Skills.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: emp_q1</p>
		<p><span class="mbl-strng">Column Description:</span> Employed quarter 1.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: emp_q2</p>
		<p><span class="mbl-strng">Column Description:</span> Employed quarter 2.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: emp_q3</p>
		<p><span class="mbl-strng">Column Description:</span> Employed quarter 3.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: emp_q4</p>
		<p><span class="mbl-strng">Column Description:</span> Employed quarter 4.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type_uiwage_q1</p>
		<p><span class="mbl-strng">Column Description:</span> Type UI wage quarter 1.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: type_fedemp_q1</p>
		<p><span class="mbl-strng">Column Description:</span> Type Federally employed quarter 1.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type_milemp_q1</p>
		<p><span class="mbl-strng">Column Description:</span> Type military employed quarter 1.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: type_othadm_q1</p>
		<p><span class="mbl-strng">Column Description:</span> Type other administrative employment quarter 1.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type_supple_q1</p>
		<p><span class="mbl-strng">Column Description:</span> Type supplemental employment quarter 1.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: type_uiwage_q2</p>
		<p><span class="mbl-strng">Column Description:</span> Type UI wage quarter 2.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type_fedemp_q2</p>
		<p><span class="mbl-strng">Column Description:</span> Type Federally employed quarter 2.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: type_milemp_q2</p>
		<p><span class="mbl-strng">Column Description:</span> Type military employed quarter 2.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type_othadm_q2</p>
		<p><span class="mbl-strng">Column Description:</span> Type other administrative employment quarter 2.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: type_supple_q2</p>
		<p><span class="mbl-strng">Column Description:</span> Type supplemental employment quarter 2.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type_uiwage_q3</p>
		<p><span class="mbl-strng">Column Description:</span> Type UI wage quarter 3.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: type_fedemp_q3</p>
		<p><span class="mbl-strng">Column Description:</span> Type Federally employed quarter 3.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type_milemp_q3</p>
		<p><span class="mbl-strng">Column Description:</span> Type military employed quarter 3.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: type_othadm_q3</p>
		<p><span class="mbl-strng">Column Description:</span> Type other administrative employment quarter 3.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type_supple_q3</p>
		<p><span class="mbl-strng">Column Description:</span> Type supplemental employment quarter 3.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: type_uiwage_q4</p>
		<p><span class="mbl-strng">Column Description:</span> Type UI wage quarter 4.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type_fedemp_q4</p>
		<p><span class="mbl-strng">Column Description:</span> Type Federally employed quarter 4.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: type_milemp_q4</p>
		<p><span class="mbl-strng">Column Description:</span> Type military employed quarter 4.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type_othadm_q4</p>
		<p><span class="mbl-strng">Column Description:</span> Type other administrative employment quarter 4.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: type_supple_q4</p>
		<p><span class="mbl-strng">Column Description:</span> Type supplemental employment quarter 4.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: emp_trn</p>
		<p><span class="mbl-strng">Column Description:</span> Employment training.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: non_trad</p>
		<p><span class="mbl-strng">Column Description:</span> Non-traditional.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: empreg11</p>
		<p><span class="mbl-strng">Column Description:</span> Empreg11.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: empreg10</p>
		<p><span class="mbl-strng">Column Description:</span> Empreg10.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: empreg00</p>
		<p><span class="mbl-strng">Column Description:</span> Empreg00.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: empreg01</p>
		<p><span class="mbl-strng">Column Description:</span> Empreg01.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: attcred</p>
		<p><span class="mbl-strng">Column Description:</span> Attcred.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: performance</p>
		<p><span class="mbl-strng">Column Description:</span> Performance.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: adult_er</p>
		<p><span class="mbl-strng">Column Description:</span> Adult ER.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: d_adult_er</p>
		<p><span class="mbl-strng">Column Description:</span> D adult ER.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: adult_ret</p>
		<p><span class="mbl-strng">Column Description:</span> Adult ret.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: d_adult_ret</p>
		<p><span class="mbl-strng">Column Description:</span> D adult ret.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: adult_ret12</p>
		<p><span class="mbl-strng">Column Description:</span> Adult ret 12.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>	
	<div class="odd_row">
		<p class="mbl-strng">Column Name: d_adult_ret12</p>
		<p><span class="mbl-strng">Column Description:</span> D adult ret 12.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: emp_q5</p>
		<p><span class="mbl-strng">Column Description:</span> Emp q5.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: type_uiwage_q5</p>
		<p><span class="mbl-strng">Column Description:</span> Type UI wage q5.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type_supple_q5</p>
		<p><span class="mbl-strng">Column Description:</span> Type supplemental q5.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: type_othadm_q5</p>
		<p><span class="mbl-strng">Column Description:</span> Type other administrative q5</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>

	<hr />
	<h3 id="recessionPeriods_mbl" tabindex="-1">recessionPeriods</h3>
	<h4>Recession Periods - Public Workforce System Dataset (PWSD)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: id</p>
		<p><span class="mbl-strng">Column Description:</span> Record id. - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: year</p>
		<p><span class="mbl-strng">Column Description:</span> Year.</p>
		<p><span class="mbl-strng">Data Type:</span> float</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: period</p>
		<p><span class="mbl-strng">Column Description:</span> Period.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (3)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: unemploymentRate</p>
		<p><span class="mbl-strng">Column Description:</span> Unemployment rate.</p>
		<p><span class="mbl-strng">Data Type:</span> float</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: recession</p>
		<p><span class="mbl-strng">Column Description:</span> Recession.</p>
		<p><span class="mbl-strng">Data Type:</span> float</p>
	</div>
</div>
