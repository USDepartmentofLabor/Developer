---
layout: post
title: Public Workforce System
created: 1359580002
description: The PWSD is a dataset that can be used to answer questions about various public workforce system programs and how these programs fit in with the overall public workforce system and the economy.
---

```
http://api.dol.gov/V1/Statistics/PWSD
```

<p>The PWSD is a dataset that can be used to answer questions about various public workforce system programs and how these programs fit in with the overall public workforce system and the economy. It was designed primarily to be used as a tool to understand what has been occurring in the Wagner-Peyser program and contains data from quarter 1 of 1995 through quarter 4 of 2008. Also, it was designed to understand the relationship and flow of participants as they go through the public workforce system. The PWSD can be used to analyze these programs both individually and in combination. The PWSD contains economic variables, Unemployment Insurance System data, and data on programs funded by the Workforce Investment Act and Employment Service. Economic variables included are labor force, employment, unemployment, unemployment rate, and gross domestic product data.</p>

<p>This complete dataset can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://explore.data.gov/Labor-Force-Employment-and-Earnings/Public-Workforce-System-Dataset-PWSD-/zrnt-3pme&amp;exitTitle=Public Workforce System Dataset&amp;fedpage=yes">http://explore.data.gov/Labor-Force-Employment-and-Earnings/Public-Workforce-System-Dataset-PWSD-/zrnt-3pme </a></p>


<a href ="http://api.dol.gov/V1/Statistics/PWSD/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL%20Public%20Workforce%20System%20Dataset" class="button radius button_dataset">Explore This Data</a>


## Dataset Tables  

- [esFinal](#esFinal)
- [model](#model)
- [recessionPeriods](#recessionPeriods)

<h3 id="esFinal">esFinal</h3>
<table summary="Employment services">
	<caption>Employment Service Final</caption>
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

<h3 id="model">Model</h3>
<table summary="model">
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
			<td>Referred toJTPA or WIA unemployment insurance eligible Wagner Peyser.</td>
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
			<td>Referred to JTPA orWIA employed Wagner Peyser.</td>
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
			<td>Referred toJTPA or WIA unemployed Wagner Peyser.</td>
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
			<td>Type mile employed quarter 2.</td>
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

<h3 id="recessionPeriods">recessionPeriods</h3>
<table summary="Recession Periods">
	<caption>Recession periods</caption>
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
