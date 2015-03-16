---
layout: post
title: Public Workforce System
created: 1359580002
---

```
http://api.dol.gov/V1/Statistics/PWSD
```

<p>The PWSD is a dataset that can be used to answer questions about various public workforce system programs and how these programs fit in with the overall public workforce system and the economy. It was designed primarily to be used as a tool to understand what has been occurring in the Wagner-Peyser program and contains data from quarter 1 of 1995 through quarter 4 of 2008. Also, it was designed to understand the relationship and flow of participants as they go through the public workforce system. The PWSD can be used to analyze these programs both individually and in combination. The PWSD contains economic variables, Unemployment Insurance System data, and data on programs funded by the Workforce Investment Act and Employment Service. Economic variables included are labor force, employment, unemployment, unemployment rate, and gross domestic product data.</p>

<p>This complete dataset can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://explore.data.gov/Labor-Force-Employment-and-Earnings/Public-Workforce-System-Dataset-PWSD-/zrnt-3pme&amp;exitTitle=Public Workforce System Dataset&amp;fedpage=yes">http://explore.data.gov/Labor-Force-Employment-and-Earnings/Public-Workforce-System-Dataset-PWSD-/zrnt-3pme </a></p>


<a href ="http://api.dol.gov/V1/Statistics/PWSD/$metadata" class="button radius button_dataset">Dataset Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL Public Workforce System Dataset" class="button radius button_dataset">Dataset Sample</a>


### Dataset Tables:  
<h3>esFinal</h3>

<p>Employment service final.</p>

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
			<th>state</th>
			<td>State.</td>
			<td>varchar (3)</td>
		</tr>
		<tr>
			<th>fy</th>
			<td>Fiscal year.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>fyq</th>
			<td>Fiscal year quarter.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>cy</th>
			<td>Calendar year.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>cyq</th>
			<td>Calendar year quarter.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>esObligation</th>
			<td>Employment service obligation.</td>
			<td>float</td>
		</tr>
		<tr>
			<th>esExpenditure</th>
			<td>Employment service expenditure.</td>
			<td>float</td>
		</tr>
	</tbody>
</table>
<h3>model</h3>

<p>Model.</p>

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
			<th>state</th>
			<td>State.</td>
			<td>varchar (3)</td>
		</tr>
		<tr>
			<th>calendarYear</th>
			<td>Calendar year.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>calendarQuarter</th>
			<td>Calendar year quarter.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>fiscalYear</th>
			<td>Fiscal year.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>fiscalQuarter</th>
			<td>Fiscal year quarter.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>laborForce</th>
			<td>Labor force.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>employment</th>
			<td>Employment.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>unemployment</th>
			<td>Unemployment.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>unemploymentRate</th>
			<td>Unemployment rate.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>quarterGDP</th>
			<td>Quarter GDP.</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th>benefitsPaid</th>
			<td>Benefits paid.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>initialClaims</th>
			<td>Initial claims.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>firstPayments</th>
			<td>First payments.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>weeksClaimed</th>
			<td>Weeks claimed.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>weeksCompensated</th>
			<td>Weeks compensated.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>exhaustions</th>
			<td>Exhaustions.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>averageDuration</th>
			<td>Average duration.</td>
			<td>float</td>
		</tr>
		<tr>
			<th>exhaustionRate</th>
			<td>Exhaustion rate.</td>
			<td>varchar (16)</td>
		</tr>
		<tr>
			<th>ebBenefits</th>
			<td>EB benefits.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>ebFirstPayments</th>
			<td>EB first payments.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>ebWeeksClaimed</th>
			<td>EB weeks claimed.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>ebExhaustions</th>
			<td>EB exhaustions.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>ebWeeksCompensated</th>
			<td>EB weeks compensated.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>profiledClaimants</th>
			<td>Profiled claimants.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>poolProfiledClaimants</th>
			<td>Pool profiled claimants.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>referredProfiledClaimants</th>
			<td>Referred profiled claimants.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>exemptedProfiledClaimants</th>
			<td>Exempted profiled claimants.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>reportingToService</th>
			<td>Reporting to service.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>reportingToOrientationService</th>
			<td>Reporting to orientation service.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>reportingToAssessmentService</th>
			<td>Reporting to assessment service.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>reportingToCounselingService</th>
			<td>Reporting to counseling service.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>reportingToPlacementService</th>
			<td>Reporting to placement service.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>reportingToJSWServices</th>
			<td>Reporting to JSW services.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>reportingToTrainingServices</th>
			<td>Reporting to training services.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>reportingToSelfEmploymentService</th>
			<td>Reporting to self employment service.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>completingServices</th>
			<td>Completing services.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>completingOrientationService</th>
			<td>Completing orientation service.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>completingAssessmentService</th>
			<td>Completing assessment service.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>completingCounselingServices</th>
			<td>Completing counseling services.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>completingPlacementServices</th>
			<td>Completing placement services.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>completingJSWServices</th>
			<td>Completing JSW services.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>completingTrainingServices</th>
			<td>Completing training services.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>completingSelfEmploymentService</th>
			<td>Completing self employment service.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>totalWagnerPeyser</th>
			<td>Total Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>totalMaleWagnerPeyser</th>
			<td>Total male Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>totalUIEligibleWagnerPeyser</th>
			<td>Total UI eligible Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>totalEmployedWagnerPeyser</th>
			<td>Total employed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>totalUnemployedWagnerPeyser</th>
			<td>Total unemployed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>totalInSchoolWagnerPeyser</th>
			<td>Total in school Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>totalLessThanHighSchoolEducationWagnerPeyser</th>
			<td>Total less than high school education Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>totalHighSchoolEducationOrGedWagnerPeyser</th>
			<td>Total high school education or GED Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>totalPostSecondaryEducationWagnerPeyser</th>
			<td>Total post secondary education Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>totalYouthWagnerPeyser</th>
			<td>Total youth Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>totalAdult18To22WagnerPeyser</th>
			<td>Total adult 18 to 22 Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>totalAdult18To44WagnerPeyser</th>
			<td>Total adult 18 to 44 Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>totalAdult45To54WagnerPeyser</th>
			<td>Total adult 45 to 54 Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>totalAdult55PlusWagnerPeyser</th>
			<td>Total adult 55 and older Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>totalReferredToJtpaOrWiaWagnerPeyser</th>
			<td>Total referred to JTPA or WIA Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>totalReferredToSupportServicesWagnerPeyser</th>
			<td>Total referred to support services Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>totalJobSearchActivitiesWagnerPeyser</th>
			<td>Total job search activities Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>totalReferredToEmploymentWagnerPeyser</th>
			<td>Total referred to employment Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>totalServiceReceivedWagnerPeyser</th>
			<td>Total service received Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>totalCareerGuidanceWagnerPeyser</th>
			<td>Total career guidance Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>totalWorkforceInfoServicesReceivedWagnerPeyser</th>
			<td>Total workforce info services received Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>totalEnteredEmploymentWagnerPeyser</th>
			<td>Total entered employment Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>totalExitersWagnerPeyser</th>
			<td>Total exiters Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>totalEERateBaseDenominatorWagnerPeyser</th>
			<td>Total EE rate base denominator Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>totalEERateWagnerPeyser</th>
			<td>Total EE rate Wagner Peyser.</td>
			<td>varchar (16)</td>
		</tr>
		<tr>
			<th>totalEETotalApplicantsWagnerPeyser</th>
			<td>Total EE total applicants Wagner Peyser.</td>
			<td>float</td>
		</tr>
		<tr>
			<th>totalEEReceivedReportableServicesWagnerPeyser</th>
			<td>Total EE received reportable services Wagner Peyser.</td>
			<td>float</td>
		</tr>
		<tr>
			<th>totalReceivedReportableServicesApplicantsWagnerPeyser</th>
			<td>Total received reportable services applicants Wagner Peyser.</td>
			<td>float</td>
		</tr>
		<tr>
			<th>totalActiveAppsUnemploymentInsuranceEligibleWagnerPeyser</th>
			<td>Total active apps unemployment insurance eligible Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>maleUnemploymentInsuranceEligibleWagnerPeyser</th>
			<td>Male unemployment insurance eligible Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>youthUnemploymentInsuranceEligibleWagnerPeyser</th>
			<td>Youth unemployment insurance eligible Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>adult18To22UnemploymentInsuranceEligibleWagnerPeyser</th>
			<td>Adult 18 to 22 unemployment insurance eligible Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>adult18To44UnemploymentInsuranceEligibleWagnerPeyser</th>
			<td>Adult 18 to 44 unemployment insurance eligible Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>adult45To54UnemploymentInsuranceEligibleWagnerPeyser</th>
			<td>Adult 45 to 54 unemployment insurance eligible Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>adult55PlusUnemploymentInsuranceEligibleWagnerPeyser</th>
			<td>Adult 55 and older unemployment insurance eligible Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>referredToJtpaOrWiaUnemploymentInsuranceEligibleWagnerPeyser</th>
			<td>Referred toJTPA or WIA unemployment insurance eligible Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>referredToSupportUnemploymentInsuranceEligibleWagnerPeyser</th>
			<td>Referred to support unemployment insurance eligible Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>jobSearchActivitiesUnemploymentInsuranceEligibleWagnerPeyser</th>
			<td>Job search activities unemployment insurance eligible Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>referredToEmploymentUnemploymentInsuranceEligibleWagnerPeyser</th>
			<td>Referred to employment unemployment insurance eligible Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>receivedReportServiceUnemploymentInsuranceEligibleWagnerPeyser</th>
			<td>Received report service unemployment insurance eligible Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>careerGuidanceUnemploymentInsuranceEligibleWagnerPeyser</th>
			<td>Career guidance unemployment insurance eligible Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>receivedWorkforceInfoServicesUnemploymentInsuranceEligibeWagnerPeyser</th>
			<td>Received workforce info services unemployment insurance eligibe Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>enteredEmploymentUnemploymentInsuranceEligibleWagnerPeyser</th>
			<td>Entered employment unemployment insurance eligible Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>totalExitersUnemploymentInsuranceEligibleWagnerPeyser</th>
			<td>Total exiters unemployment insurance eligible Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>eeRateBaseDenominatorUnemploymentInsuranceEligibleWagnerPeyser</th>
			<td>EE rate base denominator unemployment insurance eligible Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>eeRateUnemploymentInsuranceEligibleWagnerPeyser</th>
			<td>EE rate unemployment insurance eligible Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>eeTotalApplicantsUnemploymentInsuranceEligibleWagnerPeyser</th>
			<td>EE total applicants unemployment insurance eligible Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>eeReceivedReportableServicesUnemploymentInsuranceWagnerPeyser</th>
			<td>EE received reportable services unemployment insurance Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>receivedReportableServicesTotalApplicantsUnemploymentWagnerPeyser</th>
			<td>Received reportable services total applicants unemployment Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>totalActiveAppsEmployedWagnerPeyser</th>
			<td>Total active apps employed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>maleEmployedWagnerPeyser</th>
			<td>Male employed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>youthEmployedWagnerPeyser</th>
			<td>Youth employed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>adult18To22EmployedWagnerPeyser</th>
			<td>Adult 18 to 22 employed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>adult18To44EmployedWagnerPeyser</th>
			<td>Adult 18 to 44 employed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>adult45To54EmployedWagnerPeyser</th>
			<td>Adult 45 to 54 employed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>adult55PlusEmployedWagnerPeyser</th>
			<td>Adult 55 and older employed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>referredToJtpaOrWiaEmployedWagnerPeyser</th>
			<td>Referred to JTPA orWIA employed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>referredToSupportServiceEmployedWagnerPeyser</th>
			<td>Referred to support service employed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>jobSearchActivitiesEmployedWagnerPeyser</th>
			<td>Job search activities employed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>referredToEmploymentEmployedWagnerPeyser</th>
			<td>Referred to employment employed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>receivedReportServiceEmployedWagnerPeyser</th>
			<td>Received report service employed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>careerGuidanceEmployedWagnerPeyser</th>
			<td>Career guidance employed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>receivedWorkforceInfoServicesEmployedWagnerPeyser</th>
			<td>Received workforce info services employed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>enteredEmploymentEmployedWagnerPeyser</th>
			<td>Entered employment employed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>totalExitersEmployedWagnerPeyser</th>
			<td>Total exiters employed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>eeRateBaseDenominatorEmployedWagnerPeyser</th>
			<td>EE rate base denominator employed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>eeRateEmployedWagnerPeyser</th>
			<td>EE rate employed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>totalActiveAppsUnemployedWagnerPeyser</th>
			<td>Total active apps unemployed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>maleUnemployedWagnerPeyser</th>
			<td>Male unemployed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>youthUnemployedWagnerPeyser</th>
			<td>Youth unemployed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>adult18To22UnemployedWagnerPeyser</th>
			<td>Adult 18 to 22 unemployed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>adult18To44UnemployedWagnerPeyser</th>
			<td>Adult 18 to 44 unemployed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>adult45To54UnemployedWagnerPeyser</th>
			<td>Adult 45 to 54 unemployed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>adult55UnemployedWagnerPeyser</th>
			<td>Adult 55 unemployed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>referredToJtpaOrWiaUnemployedWagnerPeyser</th>
			<td>Referred toJTPA or WIA unemployed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>referredToSupportServiceUnemployedWagnerPeyser</th>
			<td>Referred to support service unemployed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>jobSearchActivitiesUnemployedWagnerPeyser</th>
			<td>Job search activities unemployed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>referredToEmploymentUnemployedWagnerPeyser</th>
			<td>Referred to employment unemployed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>receivedReportServiceUnemployedWagnerPeyser</th>
			<td>Received report service unemployed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>careerGuidanceUnemployedWagnerPeyser</th>
			<td>Career guidance unemployed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>receivedWorkforceInfoServicesUnemployedWagnerPeyser</th>
			<td>Received workforce info services unemployed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>enteredEmploymentUnemployedWagnerPeyser</th>
			<td>Entered employment unemployed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>totalExitersUnemployedWagnerPeyser</th>
			<td>Total exiters unemployed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>eeRateBaseDenominatorUnemployedWagnerPeyser</th>
			<td>EE rate base denominator unemployed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>eeRateUnemployedWagnerPeyser</th>
			<td>EE rate unemployed Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>esObligation</th>
			<td>Employment service obligation.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>esExpenditure</th>
			<td>Employment service expenditure.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>totalAdult</th>
			<td>Total adult.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>male</th>
			<td>Male.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>female</th>
			<td>Female.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>age18To21</th>
			<td>Age 18 to 21.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>age22To44</th>
			<td>Age 22 to 44.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>age45To54</th>
			<td>Age 45 to 54.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>age55</th>
			<td>Age 55 and older.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>lowerThanhighschool</th>
			<td>Lower than high school.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>ged</th>
			<td>GED.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>hsgrad</th>
			<td>High school graduate.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>somecoll</th>
			<td>Some College.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>cert</th>
			<td>Certificate.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>assoc</th>
			<td>Associates degree.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>ba</th>
			<td>Bachelor's degree.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>beyondba</th>
			<td>Beyond Bachelor's degree.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>employed</th>
			<td>Employed.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>uiclaimant</th>
			<td>UI Claimant.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>uiexhaustee</th>
			<td>UI exhaustee.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>adult_l</th>
			<td>Adult l.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>adult_st</th>
			<td>Adult st.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>wagner</th>
			<td>Wagner Peyser.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>ss</th>
			<td>SS.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>selfcore</th>
			<td>Self Core.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>staffcore</th>
			<td>Staff Core.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>wis</th>
			<td>WIS.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>ita_trn</th>
			<td>ITA TRN.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>prevoc</th>
			<td>Prevoc.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>intserv</th>
			<td>Intserv.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>enttrain</th>
			<td>Enttrain.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>comptrain</th>
			<td>Comptrain.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>trn_ojt</th>
			<td>Training - on job training.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>trn_skillupg</th>
			<td>Training - skill upgrade.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>trn_entrep</th>
			<td>Training - entrep.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>trn_abe_esl</th>
			<td>Training - abe esl.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>trn_custom</th>
			<td>Training - Custom.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>trn_othoccskill</th>
			<td>Training - other CC Skills.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>emp_q1</th>
			<td>Employed quarter 1.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>emp_q2</th>
			<td>Employed quarter 2.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>emp_q3</th>
			<td>Employed quarter 3.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>emp_q4</th>
			<td>Employed quarter 4.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>type_uiwage_q1</th>
			<td>Type UI wage quarter 1.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>type_fedemp_q1</th>
			<td>Type Federally employed quarter 1.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>type_milemp_q1</th>
			<td>Type military employed quarter 1.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>type_othadm_q1</th>
			<td>Type other administrative employment quarter 1.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>type_supple_q1</th>
			<td>Type supplemental employment quarter 1.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>type_uiwage_q2</th>
			<td>Type UI wage quarter 2.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>type_fedemp_q2</th>
			<td>Type Federally employed quarter 2.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>type_milemp_q2</th>
			<td>Type mile employed quarter 2.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>type_othadm_q2</th>
			<td>Type other administrative employment quarter 2.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>type_supple_q2</th>
			<td>Type supplemental employment quarter 2.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>type_uiwage_q3</th>
			<td>Type UI wage quarter 3.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>type_fedemp_q3</th>
			<td>Type Federally employed quarter 3.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>type_milemp_q3</th>
			<td>Type military employed quarter 3.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>type_othadm_q3</th>
			<td>Type other administrative employment quarter 3.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>type_supple_q3</th>
			<td>Type supplemental employment quarter 3.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>type_uiwage_q4</th>
			<td>Type UI wage quarter 4.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>type_fedemp_q4</th>
			<td>Type Federally employed quarter 4.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>type_milemp_q4</th>
			<td>Type military employed quarter 4.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>type_othadm_q4</th>
			<td>Type other administrative employment quarter 4.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>type_supple_q4</th>
			<td>Type supplemental employment quarter 4.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>emp_trn</th>
			<td>Employment training.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>non_trad</th>
			<td>Non-traditional.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>empreg11</th>
			<td>Empreg11.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>empreg10</th>
			<td>Empreg10.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>empreg00</th>
			<td>Empreg00.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>empreg01</th>
			<td>Empreg01.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>attcred</th>
			<td>Attcred.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>performance</th>
			<td>Performance.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>adult_er</th>
			<td>Adult ER.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>d_adult_er</th>
			<td>D adult ER.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>adult_ret</th>
			<td>Adult ret.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>d_adult_ret</th>
			<td>D adult ret.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>adult_ret12</th>
			<td>Adult ret 12.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>d_adult_ret12</th>
			<td>D adult ret 12.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>emp_q5</th>
			<td>Emp q5.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>type_uiwage_q5</th>
			<td>Type UI wage q5.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>type_supple_q5</th>
			<td>Type supplemental q5.</td>
			<td>int</td>
		</tr>
		<tr>
			<th>type_othadm_q5</th>
			<td>Type other administrative q5</td>
			<td>int</td>
		</tr>
	</tbody>
</table>
<h3>recessionPeriods</h3>

<p>Recession periods.</p>

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
			<td>int</td>
		</tr>
		<tr>
			<th>year</th>
			<td>Year.</td>
			<td>float</td>
		</tr>
		<tr>
			<th>period</th>
			<td>Period.</td>
			<td>varchar (3)</td>
		</tr>
		<tr>
			<th>unemploymentRate</th>
			<td>Unemployment rate.</td>
			<td>float</td>
		</tr>
		<tr>
			<th>recession</th>
			<td>Recession.</td>
			<td>bool</td>
		</tr>
	</tbody>
</table>
