---
layout: post
title: 2010 Workforce Investment Act
created: 1359574573
version: V1
description: The evaluation employs administrative data from 12 states, covering approximately 160,000 WIA participants and nearly 3 million comparison group members.
---

<div class="force_wrap apiurl">
<p>http://api.dol.gov/V1/Statistics/WIA</p>
</div>

<p>The evaluation employs administrative data from 12 states, covering approximately 160,000 WIA participants and nearly 3 million comparison group members. Focusing on participants who entered WIA programs between July 2003 and June 2005, the evaluation considers the impact for all those in the program, the impact for those receiving only Core or Intensive Services, and the incremental impact of Training Services. This dataset contains all of the information used to conduct the non-experimental evaluation estimates for the</p>

<ol>
	<li>WIA Client Treatment Group and</li>
	<li>The Unemployment Insurance and Employment Service Client comparison group.</li>
</ol>

<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://catalog.data.gov/dataset/workforce-investment-act-wia-net-impact-evaluation-dataset&amp;exitTitle=Workforce Investment Act&amp;fedpage=yes">http://catalog.data.gov/dataset/workforce-investment-act-wia-net-impact-evaluation-dataset</a></p>


<a href ="http://api.dol.gov/V1/Statistics/WIA/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL%20Workforce%20Investment%20Act" class="button radius button_dataset">Explore This Data</a>


## Dataset Tables

<div>
	<ul>
		<li><a href="#workforceInvestmentAct">workforceInvestmentAct</a></li>
		<li><a href="#workforceInvestmentActUi">workforceInvestmentActUi</a></li>
		<li><a href="#workforceInvestmentActWages">workforceInvestmentActWages</a></li>
		<li><a href="#lookup">lookup codes</a></li>
	</ul>
</div>

<div>
	<h3 id="workforceInvestmentAct" tabindex="-1">workforceInvestmentAct Table</h3>
	<table class="accessible responsive" summary="Workforce Investment Act - 2010 Workforce Investment Act">
		<caption>Workforce Investment Act</caption>
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
					Id - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					idIndividual
				</th>
				<td>
					<span class="small">Data Type</span>
					bigint
				</td>
				<td>
					<span class="small">Column Description</span>
					Individual Identifier
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					dateOfProgramParticipationYear
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Date of Program Participation: year
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					dateOfProgramParticipationMonth
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Date of Program Participation: month
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					dateOfExitYear
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Date of Exit: year
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					dateOfExitMonth
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Date of Exit: month
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					adultLocalFormula
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Adult (local formula)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					dislocatedWorkerLocalFormula
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Dislocated Worker (local formula)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					dateOfFirstIntensiveServiceYear
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Date of First Intensive Service: year
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					dateOfFirstIntensiveServiceMonth
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Date of First Intensive Service: month
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					dateEnteredTrainingYear
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Date Entered Training: year
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					dateEnteredTrainingMonth
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Date Entered Training: month
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					dateOfActualQualifyingDislocationYear
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Date of Actual Qualifying Dislocation: year
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					dateOfActualQualifyingDislocationMonth
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Date of Actual Qualifying Dislocation: month
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					ageAtEvent
				</th>
				<td>
					<span class="small">Data Type</span>
					decimal(10,3)
				</td>
				<td>
					<span class="small">Column Description</span>
					Age at event
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					gender
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Gender
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					race
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Race
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					ethnicityHispanicLatino
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Ethnicity Hispanic/Latino
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					numOfYearsOfEducation
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Number of years of education
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					individualWithDisability
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Individual with a Disability
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					eligibleVeteranStatus
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Eligible Veteran Status
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="workforceInvestmentActUi" tabindex="-1">workforceInvestmentActUi Table</h3>
	<table class="accessible responsive" summary="UI - Workforce Investment Act - 2010 Workforce Investment Act">
		<caption>UI</caption>
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
					Id - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					idIndividual
				</th>
				<td>
					<span class="small">Data Type</span>
					bigint
				</td>
				<td>
					<span class="small">Column Description</span>
					Individual Identifier
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					dateFiledUiClaimYear
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Date filed UI claim: year
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					dateFiledUiClaimMonth
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Date filed UI claim: month
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					lastDateOfPaymentsYear
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Last Date of Payments: year
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					lastDateOfPaymentsMonth
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Last Date of Payments: month
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					endDateOfPriorJobYear
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					End Date of Prior Job: year
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					endDateOfPriorJobMonth
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					End Date of Prior Job: month
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					sumOfPaymentsUnderClaim
				</th>
				<td>
					<span class="small">Data Type</span>
					bigint
				</td>
				<td>
					<span class="small">Column Description</span>
					Sum of Payments Under Claim
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					ageAtEvent
				</th>
				<td>
					<span class="small">Data Type</span>
					decimal(10,3)
				</td>
				<td>
					<span class="small">Column Description</span>
					Age at event
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					gender
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Gender
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					race
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Race
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					ethnicityHispanicLatino
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Ethnicity Hispanic/Latino
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					numOfYearsOfEducation
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Number of years of education
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					individualWithDisability
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Individual with a Disability
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					eligibleVeteranStatus
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Eligible Veteran Status
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="workforceInvestmentActWages" tabindex="-1">workforceInvestmentActWages Table</h3>
	<table class="accessible responsive" summary="Wages - Workforce Investment Act - 2010 Workforce Investment Act">
		<caption>Wages</caption>
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
					idIndividual
				</th>
				<td>
					<span class="small">Data Type</span>
					bigint
				</td>
				<td>
					<span class="small">Column Description</span>
					Individual Identifier - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					year
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Year - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					quarter
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Quarter - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					wageAmount
				</th>
				<td>
					<span class="small">Data Type</span>
					double
				</td>
				<td>
					<span class="small">Column Description</span>
					Wage Amount
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					industry
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Industry
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="lookup" tabindex="-1">Lookup Codes</h3>
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
</div>