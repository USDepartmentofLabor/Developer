---
layout: post
title: 2010 Workforce Investment Act - United States Department of Labor Developer Portal
created: 1359574573
description: The evaluation employs administrative data from 12 states, covering approximately 160,000 WIA participants and nearly 3 million comparison group members.
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


<a href ="http://api.dol.gov/V1/Statistics/WIA/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL%20Workforce%20Investment%20Act" class="button radius button_dataset">Explore This Data</a>


## Dataset Tables

- [workforceInvestmentAct](#workforceInvestmentAct)
- [workforceInvestmentActUi](#workforceInvestmentActUi)
- [workforceInvestmentActWages](#workforceInvestmentActWages)
- [lookup codes](#lookup)

<div class="dsktp_tbl">
	<h3 id="workforceInvestmentAct">workforceInvestmentAct Table</h3>
	<table summary="Workforce Investment Act - 2010 Workforce Investment Act">
		<caption>Workforce Investment Act</caption>
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
				<td>Id - Primary Key</td>
				<td>bigint</td>
			</tr>
			<tr>
				<th scope="row">idIndividual</th>
				<td>Individual Identifier</td>
				<td>bigint</td>
			</tr>
			<tr>
				<th scope="row">dateOfProgramParticipationYear</th>
				<td>Date of Program Participation: year</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">dateOfProgramParticipationMonth</th>
				<td>Date of Program Participation: month</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">dateOfExitYear</th>
				<td>Date of Exit: year</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">dateOfExitMonth</th>
				<td>Date of Exit: month</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">adultLocalFormula</th>
				<td>Adult (local formula)</td>
				<td>varchar(1)</td>
			</tr>
			<tr>
				<th scope="row">dislocatedWorkerLocalFormula</th>
				<td>Dislocated Worker (local formula)</td>
				<td>varchar(1)</td>
			</tr>
			<tr>
				<th scope="row">dateOfFirstIntensiveServiceYear</th>
				<td>Date of First Intensive Service: year</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">dateOfFirstIntensiveServiceMonth</th>
				<td>Date of First Intensive Service: month</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">dateEnteredTrainingYear</th>
				<td>Date Entered Training: year</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">dateEnteredTrainingMonth</th>
				<td>Date Entered Training: month</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">dateOfActualQualifyingDislocationYear</th>
				<td>Date of Actual Qualifying Dislocation: year</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">dateOfActualQualifyingDislocationMonth</th>
				<td>Date of Actual Qualifying Dislocation: month</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">ageAtEvent</th>
				<td>Age at event</td>
				<td>decimal(10,3)</td>
			</tr>
			<tr>
				<th scope="row">gender</th>
				<td>Gender</td>
				<td>varchar(100)</td>
			</tr>
			<tr>
				<th scope="row">race</th>
				<td>Race</td>
				<td>varchar(1)</td>
			</tr>
			<tr>
				<th scope="row">ethnicityHispanicLatino</th>
				<td>Ethnicity Hispanic/Latino</td>
				<td>varchar(1)</td>
			</tr>
			<tr>
				<th scope="row">numOfYearsOfEducation</th>
				<td>Number of years of education</td>
				<td>varchar(1)</td>
			</tr>
			<tr>
				<th scope="row">individualWithDisability</th>
				<td>Individual with a Disability</td>
				<td>varchar(1)</td>
			</tr>
			<tr>
				<th scope="row">eligibleVeteranStatus</th>
				<td>Eligible Veteran Status</td>
				<td>varchar(1)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="workforceInvestmentActUi">workforceInvestmentActUi Table</h3>
	<table summary="UI - Workforce Investment Act - 2010 Workforce Investment Act">
		<caption>UI</caption>
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
				<td>Id - Primary Key</td>
				<td>bigint</td>
			</tr>
			<tr>
				<th scope="row">idIndividual</th>
				<td>Individual Identifier</td>
				<td>bigint</td>
			</tr>
			<tr>
				<th scope="row">dateFiledUiClaimYear</th>
				<td>Date filed UI claim: year</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">dateFiledUiClaimMonth</th>
				<td>Date filed UI claim: month</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">lastDateOfPaymentsYear</th>
				<td>Last Date of Payments: year</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">lastDateOfPaymentsMonth</th>
				<td>Last Date of Payments: month</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">endDateOfPriorJobYear</th>
				<td>End Date of Prior Job: year</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">endDateOfPriorJobMonth</th>
				<td>End Date of Prior Job: month</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">sumOfPaymentsUnderClaim</th>
				<td>Sum of Payments Under Claim</td>
				<td>bigint</td>
			</tr>
			<tr>
				<th scope="row">ageAtEvent</th>
				<td>Age at event</td>
				<td>decimal(10,3)</td>
			</tr>
			<tr>
				<th scope="row">gender</th>
				<td>Gender</td>
				<td>varchar(1)</td>
			</tr>
			<tr>
				<th scope="row">race</th>
				<td>Race</td>
				<td>varchar(1)</td>
			</tr>
			<tr>
				<th scope="row">ethnicityHispanicLatino</th>
				<td>Ethnicity Hispanic/Latino</td>
				<td>varchar(1)</td>
			</tr>
			<tr>
				<th scope="row">numOfYearsOfEducation</th>
				<td>Number of years of education</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">individualWithDisability</th>
				<td>Individual with a Disability</td>
				<td>varchar(1)</td>
			</tr>
			<tr>
				<th scope="row">eligibleVeteranStatus</th>
				<td>Eligible Veteran Status</td>
				<td>varchar(1)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="workforceInvestmentActWages">workforceInvestmentActWages Table</h3>
	<table summary="Wages - Workforce Investment Act - 2010 Workforce Investment Act">
		<caption>Wages</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">idIndividual</th>
				<td>Individual Identifier - Primary Key</td>
				<td>bigint</td>
			</tr>
			<tr>
				<th scope="row">year</th>
				<td>Year - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">quarter</th>
				<td>Quarter - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">wageAmount</th>
				<td>Wage Amount</td>
				<td>double</td>
			</tr>
			<tr>
				<th scope="row">industry</th>
				<td>Industry</td>
				<td>varchar(1)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h3 id="workforceInvestmentAct">workforceInvestmentAct Table</h3>
	<h4>Workforce Investment Act - 2010 Workforce Investment Act</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: id</p>
		<p><span class="mbl-strng">Column Description:</span> Id - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: idIndividual</p>
		<p><span class="mbl-strng">Column Description:</span> Individual Identifier</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: dateOfProgramParticipationYear</p>
		<p><span class="mbl-strng">Column Description:</span> Date of Program Participation: year</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: dateOfProgramParticipationMonth</p>
		<p><span class="mbl-strng">Column Description:</span> Date of Program Participation: month</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: dateOfExitYear</p>
		<p><span class="mbl-strng">Column Description:</span> Date of Exit: year</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: dateOfExitMonth</p>
		<p><span class="mbl-strng">Column Description:</span> Date of Exit: month</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: adultLocalFormula</p>
		<p><span class="mbl-strng">Column Description:</span> Adult (local formula)</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: dislocatedWorkerLocalFormula</p>
		<p><span class="mbl-strng">Column Description:</span> Dislocated Worker (local formula)</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: dateOfFirstIntensiveServiceYear</p>
		<p><span class="mbl-strng">Column Description:</span> Date of First Intensive Service: year</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: dateOfFirstIntensiveServiceMonth</p>
		<p><span class="mbl-strng">Column Description:</span> Date of First Intensive Service: month</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: dateEnteredTrainingYear</p>
		<p><span class="mbl-strng">Column Description:</span> Date Entered Training: year</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: dateEnteredTrainingMonth</p>
		<p><span class="mbl-strng">Column Description:</span> Date Entered Training: month</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: dateOfActualQualifyingDislocationYear</p>
		<p><span class="mbl-strng">Column Description:</span> Date of Actual Qualifying Dislocation: year</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: dateOfActualQualifyingDislocationMonth</p>
		<p><span class="mbl-strng">Column Description:</span> Date of Actual Qualifying Dislocation: month</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: ageAtEvent</p>
		<p><span class="mbl-strng">Column Description:</span> Age at event</p>
		<p><span class="mbl-strng">Data Type:</span> decimal(10,3)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: gender</p>
		<p><span class="mbl-strng">Column Description:</span> Gender</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(100)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: race</p>
		<p><span class="mbl-strng">Column Description:</span> Race</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: ethnicityHispanicLatino</p>
		<p><span class="mbl-strng">Column Description:</span> Ethnicity Hispanic/Latino</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: numOfYearsOfEducation</p>
		<p><span class="mbl-strng">Column Description:</span> Number of years of education</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: individualWithDisability</p>
		<p><span class="mbl-strng">Column Description:</span> Individual with a Disability</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: eligibleVeteranStatus</p>
		<p><span class="mbl-strng">Column Description:</span> Eligible Veteran Status</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>		
	</div>

	<hr />
	<h3 id="workforceInvestmentActUi">workforceInvestmentActUi Table</h3>
	<h4>UI - 2010 Workforce Investment Act</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: id</p>
		<p><span class="mbl-strng">Column Description:</span> Id - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: idIndividual</p>
		<p><span class="mbl-strng">Column Description:</span> Individual Identifier</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: dateFiledUiClaimYear</p>
		<p><span class="mbl-strng">Column Description:</span> Date filed UI claim: year</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: dateFiledUiClaimMonth</p>
		<p><span class="mbl-strng">Column Description:</span> Date filed UI claim: month</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: lastDateOfPaymentsYear</p>
		<p><span class="mbl-strng">Column Description:</span> Last Date of Payments: year</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: lastDateOfPaymentsMonth</p>
		<p><span class="mbl-strng">Column Description:</span> Last Date of Payments: month</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: endDateOfPriorJobYear</p>
		<p><span class="mbl-strng">Column Description:</span> End Date of Prior Job: year</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: endDateOfPriorJobMonth</p>
		<p><span class="mbl-strng">Column Description:</span> End Date of Prior Job: month 	</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: sumOfPaymentsUnderClaim</p>
		<p><span class="mbl-strng">Column Description:</span> Sum of Payments Under Claim 	</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: ageAtEvent</p>
		<p><span class="mbl-strng">Column Description:</span> Age at event</p>
		<p><span class="mbl-strng">Data Type:</span> decimal(10,3)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: gender</p>
		<p><span class="mbl-strng">Column Description:</span> Gender</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: race</p>
		<p><span class="mbl-strng">Column Description:</span> Race</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: ethnicityHispanicLatino</p>
		<p><span class="mbl-strng">Column Description:</span> Ethnicity Hispanic/Latino</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: numOfYearsOfEducation</p>
		<p><span class="mbl-strng">Column Description:</span> Number of years of education</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: individualWithDisability</p>
		<p><span class="mbl-strng">Column Description:</span> Individual with a Disability</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: eligibleVeteranStatus</p>
		<p><span class="mbl-strng">Column Description:</span> Eligible Veteran Status</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>		
	</div>

	<hr />
	<h3 id="workforceInvestmentActWages">workforceInvestmentActWages Table</h3>
	<h4>Wages - Workforce Investment Act - 2010 Workforce Investment Act</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: idIndividual</p>
		<p><span class="mbl-strng">Column Description:</span> Individual Identifier - Primary Key 	</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: year</p>
		<p><span class="mbl-strng">Column Description:</span> Year - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: quarter</p>
		<p><span class="mbl-strng">Column Description:</span> Quarter - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: wageAmount</p>
		<p><span class="mbl-strng">Column Description:</span> Wage Amount</p>
		<p><span class="mbl-strng">Data Type:</span> double</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: industry</p>
		<p><span class="mbl-strng">Column Description:</span> Industry</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(1)</p>		
	</div>
</div>

<h3 id="lookup">Lookup Codes</h3>
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
