---
layout: post
title: DOL 2010 Workforce Investment Act Dataset
created: 1359574573
---

```
http://api.dol.gov/V1/Statistics/WIA
```

<p>The evaluation employs administrative data from 12 states, covering approximately 160,000 WIA participants and nearly 3 million comparison group members. Focusing on participants who entered WIA programs between July 2003 and June 2005, the evaluation considers the impact for all those in the program, the impact for those receiving only Core or Intensive Services, and the incremental impact of Training Services. This dataset contains all of the information used to conduct the non-experimental evaluation estimates for the</p>

<ol>
	<li>WIA Client Treatment Group and</li>
	<li>The Unemployment Insurance and Employment Service Client comparison group.</li>
</ol>

<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://explore.data.gov/Labor-Force-Employment-and-Earnings/Workforce-Investment-Act-WIA-Net-Impact-Evaluation/m6mr-quje&amp;exitTitle=Workforce Investment Act&amp;fedpage=yes">http://explore.data.gov/Labor-Force-Employment-and-Earnings/Workforce-Investment-Act-WIA-Net-Impact-Evaluation/m6mr-quje</a></p>


### Dataset Metadata  
http://api.dol.gov/V1/Statistics/WIA/$metadata

[Sample the DOL 2010 Workforce Investment Act Dataset](https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL Workforce Investment Act)  

### Dataset Tables:  
<h3>workforceInvestmentAct Table</h3>

<p>Describes Workforce Investment Act data.</p>

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
			<td>Id - Primary Key</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th>idIndividual</th>
			<td>Individual Identifier</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th>dateOfProgramParticipationYear</th>
			<td>Date of Program Participation: year</td>
			<td>int</td>
		</tr>
		<tr>
			<th>dateOfProgramParticipationMonth</th>
			<td>Date of Program Participation: month</td>
			<td>int</td>
		</tr>
		<tr>
			<th>dateOfExitYear</th>
			<td>Date of Exit: year</td>
			<td>int</td>
		</tr>
		<tr>
			<th>dateOfExitMonth</th>
			<td>Date of Exit: month</td>
			<td>int</td>
		</tr>
		<tr>
			<th>adultLocalFormula</th>
			<td>Adult (local formula)</td>
			<td>varchar(1)</td>
		</tr>
		<tr>
			<th>dislocatedWorkerLocalFormula</th>
			<td>Dislocated Worker (local formula)</td>
			<td>varchar(1)</td>
		</tr>
		<tr>
			<th>dateOfFirstIntensiveServiceYear</th>
			<td>Date of First Intensive Service: year</td>
			<td>int</td>
		</tr>
		<tr>
			<th>dateOfFirstIntensiveServiceMonth</th>
			<td>Date of First Intensive Service: month</td>
			<td>int</td>
		</tr>
		<tr>
			<th>dateEnteredTrainingYear</th>
			<td>Date Entered Training: year</td>
			<td>int</td>
		</tr>
		<tr>
			<th>dateEnteredTrainingMonth</th>
			<td>Date Entered Training: month</td>
			<td>int</td>
		</tr>
		<tr>
			<th>dateOfActualQualifyingDislocationYear</th>
			<td>Date of Actual Qualifying Dislocation: year</td>
			<td>int</td>
		</tr>
		<tr>
			<th>dateOfActualQualifyingDislocationMonth</th>
			<td>Date of Actual Qualifying Dislocation: month</td>
			<td>int</td>
		</tr>
		<tr>
			<th>ageAtEvent</th>
			<td>Age at event</td>
			<td>decimal(10,3)</td>
		</tr>
		<tr>
			<th>gender</th>
			<td>Gender</td>
			<td>varchar(100)</td>
		</tr>
		<tr>
			<th>race</th>
			<td>Race</td>
			<td>varchar(1)</td>
		</tr>
		<tr>
			<th>ethnicityHispanicLatino</th>
			<td>Ethnicity Hispanic/Latino</td>
			<td>varchar(1)</td>
		</tr>
		<tr>
			<th>numOfYearsOfEducation</th>
			<td># of years of education</td>
			<td>varchar(1)</td>
		</tr>
		<tr>
			<th>individualWithDisability</th>
			<td>Individual with a Disability</td>
			<td>varchar(1)</td>
		</tr>
		<tr>
			<th>eligibleVeteranStatus</th>
			<td>Eligible Veteran Status</td>
			<td>varchar(1)</td>
		</tr>
	</tbody>
</table>
<h3>workforceInvestmentActUi Table</h3>

<p>Describes Workforce Investment Act UI data.</p>

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
			<td>Id - Primary Key</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th>idIndividual</th>
			<td>Individual Identifier</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th>dateFiledUiClaimYear</th>
			<td>Date filed UI claim: year</td>
			<td>int</td>
		</tr>
		<tr>
			<th>dateFiledUiClaimMonth</th>
			<td>Date filed UI claim: month</td>
			<td>int</td>
		</tr>
		<tr>
			<th>lastDateOfPaymentsYear</th>
			<td>Last Date of Payments: year</td>
			<td>int</td>
		</tr>
		<tr>
			<th>lastDateOfPaymentsMonth</th>
			<td>Last Date of Payments: month</td>
			<td>int</td>
		</tr>
		<tr>
			<th>endDateOfPriorJobYear</th>
			<td>End Date of Prior Job: year</td>
			<td>int)</td>
		</tr>
		<tr>
			<th>endDateOfPriorJobMonth</th>
			<td>End Date of Prior Job: month</td>
			<td>int</td>
		</tr>
		<tr>
			<th>sumOfPaymentsUnderClaim</th>
			<td>Sum of Payments Under Claim</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th>ageAtEvent</th>
			<td>Age at event</td>
			<td>decimal(10,3)</td>
		</tr>
		<tr>
			<th>gender</th>
			<td>Gender</td>
			<td>varchar(1)</td>
		</tr>
		<tr>
			<th>race</th>
			<td>Race</td>
			<td>varchar(1)</td>
		</tr>
		<tr>
			<th>ethnicityHispanicLatino</th>
			<td>Ethnicity Hispanic/Latino</td>
			<td>varchar(1)</td>
		</tr>
		<tr>
			<th>numOfYearsOfEducation</th>
			<td># of years of education</td>
			<td>int</td>
		</tr>
		<tr>
			<th>individualWithDisability</th>
			<td>Individual with a Disability</td>
			<td>varchar(1)</td>
		</tr>
		<tr>
			<th>eligibleVeteranStatus</th>
			<td>Eligible Veteran Status</td>
			<td>varchar(1)</td>
		</tr>
	</tbody>
</table>
<h3>workforceInvestmentActWages Table</h3>

<p>Describes Workforce Investment Act wages data.</p>

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
			<th>idIndividual</th>
			<td>Individual Identifier - Primary Key</td>
			<td>bigint</td>
		</tr>
		<tr>
			<th>year</th>
			<td>Year - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>quarter</th>
			<td>Quarter - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>wageAmount</th>
			<td>Wage Amount</td>
			<td>double</td>
		</tr>
		<tr>
			<th>industry</th>
			<td>Industry</td>
			<td>varchar(1)</td>
		</tr>
	</tbody>
</table>
<h3>Lookup Codes</h3>

<h4>Industry Codes:</h4>

<ul>
	<li>1 = Manufacturing</li>
	<li>2 = Services</li>
	<li>3 = Trade</li>
	<li>4 = Construction</li>
	<li>5 = Other</li>
	<li>6 = Missing</li>
</ul>

<h4>Adult Codes:</h4>

<ul>
	<li>0 = No</li>
	<li>1 = Yes</li>
	<li>Dislocated Work Local Codes:</li>
	<li>0 = No</li>
	<li>1 = Yes</li>
</ul>

<h4>Gender Codes:</h4>

<ul>
	<li>1 = Male</li>
	<li>2 = Female</li>
</ul>

<h4>Race Codes:</h4>

<ul>
	<li>1 = White only</li>
	<li>2 = Black (including black and any other racial category)</li>
	<li>3 = Other (any other specified racial category)</li>
	<li>4 = No racial category identified</li>
</ul>

<h4>Hispanic Codes:</h4>

<ul>
	<li>0 = No</li>
	<li>1 = Yes</li>
</ul>

<h4>Disable Codes:</h4>

<ul>
	<li>0 = No</li>
	<li>1 = Yes</li>
</ul>

<h4>Veteran Status Codes:</h4>

<ul>
	<li>0 = No</li>
	<li>1 = Yes</li>
</ul>
