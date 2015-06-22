---
layout: post
title: Mine Violation
created: 1359571242
description: This dataset contains violations issued from 1/1/1978 to 1/1/2000 as a result of MSHA inspections.
---

```
http://api.dol.gov/V1/Mining/Violation
```

<p>This dataset contains violations issued from 1/1/1978 to 1/1/2000 as a result of MSHA inspections. Each inspection results in a unique Event Number that can be associated with many violations and is a direct link to the Inspections Data Set. The violator name at the time of the violation, the actual date the violation occurred and the date the violation was issued are in this file. This table contains details about the specific citation/order/safeguard issued, such as Section of the Act, relevant dates and the conditions or practices which caused and constituted a violation or an imminent danger. The data is captured from (MSHA form 7000-3).</p>

<a href ="http://api.dol.gov/V1/Mining/Violation/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL%20Violation%20Dataset" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables  

<div class="dsktp_tbl">
	<h3>MSHA_violations</h3>
	<table summary="Mine Violation contains violations issued from 1/1/1978 to 1/1/2000 as result of MSHA inspections">
		<caption>Mine Violation</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">ID</th>
				<td>Primary key - Primary Key</td>
				<td>bigint</td>
			</tr>
			<tr>
				<th scope="row">EVENT_NO</th>
				<td>A preassigned number used to identify each inspection, investigation, audit, survey, etc.  Use to join to the Inspections table.</td>
				<td>varchar (14)</td>
			</tr>
			<tr>
				<th scope="row">INSPECTION_BEGIN_DT</th>
				<td>Start date of the inspection (mm/dd/yyyy).</td>
				<td>varchar (50)</td>
			</tr>
			<tr>
				<th scope="row">INSPECTION_END_DT</th>
				<td>Inspection close out date (mm/dd/yyyy).</td>
				<td>varchar (50)</td>
			</tr>
			<tr>
				<th scope="row">VIOLATION_NO</th>
				<td>Citation/order number assigned to each citation written during an inspection.  This is a unique key to the file.</td>
				<td>varchar (60)</td>
			</tr>
			<tr>
				<th scope="row">CONTROLLER_ID</th>
				<td>Identification number assigned by MSHA Assessments for a Legal Entity acting as a controller of an operator at the time the violation was cited. May not contain data (null values) if this record pertains to a violation issued to a contractor.</td>
				<td>varchar (14)</td>
			</tr>
			<tr>
				<th scope="row">CONTROLLER_NAME</th>
				<td>Name of the controller active at the time the violation was cited.  May not contain data (null values) if this record pertains to a violation issued to a contractor.</td>
				<td>varchar (144)</td>
			</tr>
			<tr>
				<th scope="row">VIOLATOR_ID</th>
				<td>Identification number assigned by MSHA for a Legal Entity acting as an operator at a mine at the time the violation was cited.  May not contain data (null values) if this record pertains to a violation issued to a contractor.</td>
				<td>varchar (14)</td>
			</tr>
			<tr>
				<th scope="row">VIOLATOR_NAME</th>
				<td>Name of the operator active at the time the violation was cited.  May not contain data (null values) if this record pertains to a violation issued to a contractor.</td>
				<td>varchar (120)</td>
			</tr>
			<tr>
				<th scope="row">VIOLATOR_TYPE_CD</th>
				<td>Each Violator record represents an entity (Operator, Contractor, Agent or Miner) that has one or more violations at a mine.</td>
				<td>varchar (40)</td>
			</tr>
			<tr>
				<th scope="row">MINE_ID</th>
				<td>Mine id of the mine where the violation was issued.</td>
				<td>varchar (14)</td>
			</tr>
			<tr>
				<th scope="row">MINE_NAME</th>
				<td>Name of the mine where the violation was issued.</td>
				<td>varchar (100)</td>
			</tr>
			<tr>
				<th scope="row">MINE_TYPE</th>
				<td>Mine type of the mine where the violation has been issued: Facility, Surface or Underground.</td>
				<td>varchar (40)</td>
			</tr>
			<tr>
				<th scope="row">COAL_METAL_IND</th>
				<td>Identifies if the record is for a Coal or Metal/Non-Metal mine</td>
				<td>varchar (3)</td>
			</tr>
			<tr>
				<th scope="row">CONTRACTOR_ID</th>
				<td>Code identifying the contractor to whom the citation or order was issued.  May not contain data (null values) if the contractor was not cited.</td>
				<td>varchar (20)</td>
			</tr>
			<tr>
				<th scope="row">VIOLATION_ISSUE_DT</th>
				<td>Date the citation or order was issued by the MSHA inspector.</td>
				<td>varchar (50)</td>
			</tr>
			<tr>
				<th scope="row">VIOLATION_OCCUR_DT</th>
				<td>Actual date of occurrence of the violation.</td>
				<td>varchar (50)</td>
			</tr>
			<tr>
				<th scope="row">CAL_YR</th>
				<td>Calendar year during which the citation/order was issued by the MSHA inspector.</td>
				<td>bigint</td>
			</tr>
			<tr>
				<th scope="row">CAL_QTR</th>
				<td>Calendar Quarter of the date the citation or order was issued by the MSHA inspector</td>
				<td>bigint</td>
			</tr>
			<tr>
				<th scope="row">FISCAL_YR</th>
				<td>Fiscal Year of the date the citation or order was issued by the MSHA inspector.  MSHA's fiscal year begins October 1 and ends September 30</td>
				<td>bigint</td>
			</tr>
			<tr>
				<th scope="row">FISCAL_QTR</th>
				<td>Fiscal Quarter of the date the citation or order was issued by the MSHA inspector.</td>
				<td>bigint</td>
			</tr>
			<tr>
				<th scope="row">IOLATION_ISSUE_TIME</th>
				<td>Time (24 hour) the citation or order was issued by the MSHA inspector.</td>
				<td>varchar (8)</td>
			</tr>
			<tr>
				<th scope="row">SIG_SUB</th>
				<td>An indicator as to whether or not the gravity is determined by the inspector to be significant and substantial.  If this is 'Y', the inspector has indicated that based upon the particular facts surrounding the violation there exists a reasonable likelihood the hazard contributed to will result in an injury or illness of a reasonably serious nature.</td>
				<td>varchar (3)</td>
			</tr>
			<tr>
				<th scope="row">SECTION_OF_ACT</th>
				<td>Section of the Act under which the citation/order was issued.  May not contain data (null values).</td>
				<td>varchar (20)</td>
			</tr>
			<tr>
				<th scope="row">PART_SECTION</th>
				<td>Code of Federal Regulations: Part/section of Title 30 CFR violated in format PPSSSSSXXXX where (P) Part, (S) Section and (X) Suffix. Four-digit section numbers are expanded to five within one leading zero.  May not contain data (null values).</td>
				<td>varchar (40)</td>
			</tr>
			<tr>
				<th scope="row">SECTION_OF_ACT_1</th>
				<td>Primary Section of Act which gives the MSHA Inspector the authority to take the action specified by this Issuance. More than one type of action may be cited.</td>
				<td>varchar (40)</td>
			</tr>
			<tr>
				<th scope="row">SECTION_OF_ACT_2</th>
				<td>Secondary Section of Act which gives the MSHA Inspector the authority to take the action specified by this Issuance at Metal/Non-Metal mines only. More than one type of action may be cited.</td>
				<td>varchar (40)</td>
			</tr>
			<tr>
				<th scope="row">CIT_ORD_SAFE</th>
				<td>Specifies the type of Citation: Citation, Order, Safeguard, Written Notice or Notice</td>
				<td>varchar (40)</td>
			</tr>
			<tr>
				<th scope="row">ORIG_TERM_DUE_DT</th>
				<td>Original date by which the cited condition was to be abated.  Original time by which the cited condition was to be abated.</td>
				<td>varchar (50)</td>
			</tr>
			<tr>
				<th scope="row">ORIG_TERM_DUE_TIME</th>
				<td>Original time by which the cited condition was to be abated.</td>
				<td>varchar (8)</td>
			</tr>
			<tr>
				<th scope="row">LATEST_TERM_DUE_DT</th>
				<td>Date by which the conditions cited in the citation/order are to be abated. For Metal mines, this can be the termination due date to which the citation/order is extended.</td>
				<td>varchar (50)</td>
			</tr>
			<tr>
				<th scope="row">LATEST_TERM_DUE_TIME</th>
				<td>Time by which the conditions cited on the citation/order are to be abated.</td>
				<td>varchar (8)</td>
			</tr>
			<tr>
				<th scope="row">TERMINATION_DT</th>
				<td>Date on which the citation/order was terminated. May not contain data (null values) if citation has not yet been terminated.</td>
				<td>varchar (50)</td>
			</tr>
			<tr>
				<th scope="row">TERMINATION_TIME</th>
				<td>Time of day (24 hour) at which the citation/order was terminated. May not contain data (null values) if citation has not yet been terminated.</td>
				<td>varchar (10)</td>
			</tr>
			<tr>
				<th scope="row">TERMINATION_TYPE</th>
				<td>Code identifying the type of termination: Issued, ReplacedByOrder or Terminated.</td>
				<td>varchar (40)</td>
			</tr>
			<tr>
				<th scope="row">ACATE_DT</th>
				<td>Date on which the citation/order was vacated. May not contain data (null values) if the violation was not vacated.</td>
				<td>varchar (50)</td>
			</tr>
			<tr>
				<th scope="row">VACATE_TIME</th>
				<td>Time of day (24 hour) at which the citation/order was vacated. May not contain data (null values) if the violation was not vacated.</td>
				<td>varchar (10)</td>
			</tr>
			<tr>
				<th scope="row">INITIAL_VIOL_NO</th>
				<td>This is the preceding citation record when there is a need to relate a citation to a previous one. For example this would apply when an order follows a citation. This relationship is needed to calculate the good faith reduction penalty points. May not contain data (null values).</td>
				<td>varchar (60)</td>
			</tr>
			<tr>
				<th scope="row">REPLACED_BY_ORDER_NO</th>
				<td>Order number which replaced the original citation. May not contain data (null values) if situation does not apply.</td>
				<td>varchar (60)</td>
			</tr>
			<tr>
				<th scope="row">LIKELIHOOD</th>
				<td>This is a measure of the seriousness of the violation being cited as measured by the likelihood of the occurrence of an accident: Highly, NoLikelihood, Occurred, Reasonably or Unlikely. May not contain data (null values) if situation does not apply.</td>
				<td>varchar (40)</td>
			</tr>
			<tr>
				<th scope="row">INJ_ILLNESS</th>
				<td>Value assigned to a violation for gravity of injury. Measure of seriousness of violation being cited as measured by severity of the injury or illness to persons if accident were to occur due to the conditions of the violation: Fatal, LostDays, NoLostDays or Permanent.</td>
				<td>varchar (40)</td>
			</tr>
			<tr>
				<th scope="row">NO_AFFECTED</th>
				<td>This is a measure of the number of persons affected or potentially affected by the conditions at the Mine due to the violation. Can be zero.</td>
				<td>bigint</td>
			</tr>
			<tr>
				<th scope="row">NEGLIGENCE</th>
				<td>Codes representing the degree of negligence that the Inspector assigned to the violator due to the violation: HighNegligence, LowNegligence, ModNegligence, NoNegligence or Reckless.  A high degree of negligence is assigned when the operator was in a position to be aware of the condition that contributed to a dangerous situation and there were no mitigating circumstances, or if there are unique aggravating circumstances associated with the violation, such as repeated past violations of the same standard at the mine.</td>
				<td>varchar (40)</td>
			</tr>
			<tr>
				<th scope="row">WRITTEN_NOTICE</th>
				<td>Indicates if this citation is a result of a Miner or Agent notice of complaint to MSHA (written notice 103(g)):  ('Y'  or 'N'). May not contain data (null values).</td>
				<td>varchar (3)</td>
			</tr>
			<tr>
				<th scope="row">ENFORCEMENT_AREA</th>
				<td>Specifies the enforcement areas affected by the violating condition or practice constitute a health hazard, safety hazard, both or other type of hazard. May not contain data (null values).</td>
				<td>varchar (40)</td>
			</tr>
			<tr>
				<th scope="row">SPECIAL_ASSESS</th>
				<td>Specifies whether this citation has been designated for Special Assessment based on Special Assessment Review (Y or N).</td>
				<td>varchar (3)</td>
			</tr>
			<tr>
				<th scope="row">PRIMARY_OR_MILL</th>
				<td>A code indicating if the Violation was observed in the Primary Mine location or in an associated Mill (Metal/Non-Metal only). May not contain data (null values).</td>
				<td>varchar (40)</td>
			</tr>
			<tr>
				<th scope="row">RIGHT_TO_CONF_DT</th>
				<td>Date the operator was advised of his right to a conference (Metal/Non-Metal only). May not contain data (null values).</td>
				<td>varchar (50)</td>
			</tr>
			<tr>
				<th scope="row">ASMT_GENERATED_IND</th>
				<td>If the violator is an Operator or Contractor, the indicator is 'N'. If the violator is an Agent, the indicator is 'Y'. If the violator is a Miner, the indicator can be 'Y' or 'N'.  If none of the above, the indicator is '?'.</td>
				<td>varchar (3)</td>
			</tr>
			<tr>
				<th scope="row">FINAL_ORDER_ISSUE_DT</th>
				<td>Date that this assessment becomes a Final Order. This date is set when the Certified Return Receipt date (CRR) is set. Note that this can be a projected future date that is set as soon as the CRR is entered.</td>
				<td>varchar (50)</td>
			</tr>
			<tr>
				<th scope="row">PROPOSED_PENALTY</th>
				<td>The original dollar value of the proposed penalty prior to any modifications such as those possibly resulting from a decision on a contested case.</td>
				<td>bigint</td>
			</tr>
			<tr>
				<th scope="row">AMOUNT_DUE</th>
				<td>The current dollar value of the proposed assessment, reflecting any modifications that have been made since it was originally assessed</td>
				<td>bigint</td>
			</tr>
			<tr>
				<th scope="row">AMOUNT_PAID</th>
				<td>The total dollar value of all payments applied to this proposed assessment to date.</td>
				<td>bigint</td>
			</tr>
			<tr>
				<th scope="row">BILL_PRINT_DT</th>
				<td>Date the bill was printed. This date always represents the first time the bill was printed.</td>
				<td>varchar (50)</td>
			</tr>
			<tr>
				<th scope="row">LAST_ACTION_CD</th>
				<td>Last action taken against this violation such as 1stDemandPrinted, BillingReady, ApprovedforTreasury and Proposed.</td>
				<td>varchar (60)</td>
			</tr>
			<tr>
				<th scope="row">LAST_ACTION_DT</th>
				<td>Date the last action taken against this violation</td>
				<td>varchar (50)</td>
			</tr>
			<tr>
				<th scope="row">DOCKET_NO</th>
				<td>The Docket Number assigned by the Court to this group of Assessments being contested.</td>
				<td>varchar (40)</td>
			</tr>
			<tr>
				<th scope="row">DOCKET_STATUS_CD</th>
				<td>Denotes the current status of this docket: Approved (approved by the court) or Proposed (not yet been approved by the court).</td>
				<td>varchar (10)</td>
			</tr>
			<tr>
				<th scope="row">CONTESTED_IND</th>
				<td>Indicates if this violation has been assessed and is being contested (Y or N).</td>
				<td>varchar (3)</td>
			</tr>
			<tr>
				<th scope="row">CONTESTED_DT</th>
				<td>Date of the most recent docket status for this violation.</td>
				<td>varchar (50)</td>
			</tr>
			<tr>
				<th scope="row">VIOLATOR_VIOLATION_CNT</th>
				<td>Total number of assessed violations for this violator at this time during the violation history period. Used in penalty calculation. Applies to an Operator or a Contractor. Calculation for VPID is Violator Violation Count / Violator Inspection Day Count.</td>
				<td>bigint</td>
			</tr>
			<tr>
				<th scope="row">VIOLATOR_INSPECTION_DAY_CNT</th>
				<td>Total number of inspections for this Operator at a mine during the violation history period. Used in penalty calculation. Does not apply to Contractor. Calculation for VPID is Violator Violation Count / Violator Inspection Day Count.</td>
				<td>bigint</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h3>MSHA_violations</h3>
	<h4>Mine Violation contains violations issued from 1/1/1978 to 1/1/2000 as result of MSHA inspections</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: ID</p>
		<p><span class="mbl-strng">Column Description:</span> Primary key - Primary Key.</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: EVENT_NO</p>
		<p><span class="mbl-strng">Column Description:</span> A preassigned number used to identify each inspection, investigation, audit, survey, etc. Use to join to the Inspections table.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (14)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: INSPECTION_BEGIN_DT</p>
		<p><span class="mbl-strng">Column Description:</span> Start date of the inspection (mm/dd/yyyy).</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (50)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: INSPECTION_END_DT</p>
		<p><span class="mbl-strng">Column Description:</span> Inspection close out date (mm/dd/yyyy).</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (50)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: VIOLATION_NO</p>
		<p><span class="mbl-strng">Column Description:</span> Citation/order number assigned to each citation written during an inspection. This is a unique key to the file.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (60)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: CONTROLLER_ID</p>
		<p><span class="mbl-strng">Column Description:</span> Identification number assigned by MSHA Assessments for a Legal Entity acting as a controller of an operator at the time the violation was cited. May not contain data (null values) if this record pertains to a violation issued to a contractor.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (14)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: CONTROLLER_NAME</p>
		<p><span class="mbl-strng">Column Description:</span> Name of the controller active at the time the violation was cited. May not contain data (null values) if this record pertains to a violation issued to a contractor.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (144)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: VIOLATOR_ID</p>
		<p><span class="mbl-strng">Column Description:</span> Identification number assigned by MSHA for a Legal Entity acting as an operator at a mine at the time the violation was cited. May not contain data (null values) if this record pertains to a violation issued to a contractor.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (14)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: VIOLATOR_NAME</p>
		<p><span class="mbl-strng">Column Description:</span> Name of the operator active at the time the violation was cited. May not contain data (null values) if this record pertains to a violation issued to a contractor.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (120)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: VIOLATOR_TYPE_CD</p>
		<p><span class="mbl-strng">Column Description:</span> Each Violator record represents an entity (Operator, Contractor, Agent or Miner) that has one or more violations at a mine.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (40)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: MINE_ID</p>
		<p><span class="mbl-strng">Column Description:</span> Mine id of the mine where the violation was issued.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (14)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: MINE_NAME</p>
		<p><span class="mbl-strng">Column Description:</span> Name of the mine where the violation was issued.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (100)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: MINE_TYPE</p>
		<p><span class="mbl-strng">Column Description:</span> Mine type of the mine where the violation has been issued: Facility, Surface or Underground.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (40)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: COAL_METAL_IND</p>
		<p><span class="mbl-strng">Column Description:</span> Identifies if the record is for a Coal or Metal/Non-Metal mine.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (3)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: CONTRACTOR_ID</p>
		<p><span class="mbl-strng">Column Description:</span> Code identifying the contractor to whom the citation or order was issued. May not contain data (null values) if the contractor was not cited.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (20)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: VIOLATION_ISSUE_DT</p>
		<p><span class="mbl-strng">Column Description:</span> Date the citation or order was issued by the MSHA inspector.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (50)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: VIOLATION_OCCUR_DT</p>
		<p><span class="mbl-strng">Column Description:</span> Actual date of occurrence of the violation.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (50)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: CAL_YR</p>
		<p><span class="mbl-strng">Column Description:</span> Calendar year during which the citation/order was issued by the MSHA inspector.</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: CAL_QTR</p>
		<p><span class="mbl-strng">Column Description:</span> Calendar Quarter of the date the citation or order was issued by the MSHA inspector.</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: FISCAL_YR</p>
		<p><span class="mbl-strng">Column Description:</span> Fiscal Year of the date the citation or order was issued by the MSHA inspector. MSHA's fiscal year begins October 1 and ends September 30.</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: FISCAL_QTR</p>
		<p><span class="mbl-strng">Column Description:</span> Fiscal Quarter of the date the citation or order was issued by the MSHA inspector.</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: IOLATION_ISSUE_TIME</p>
		<p><span class="mbl-strng">Column Description:</span> Time (24 hour) the citation or order was issued by the MSHA inspector.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (8)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: SIG_SUB</p>
		<p><span class="mbl-strng">Column Description:</span> An indicator as to whether or not the gravity is determined by the inspector to be significant and substantial. If this is 'Y', the inspector has indicated that based upon the particular facts surrounding the violation there exists a reasonable likelihood the hazard contributed to will result in an injury or illness of a reasonably serious nature.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (3)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: SECTION_OF_ACT</p>
		<p><span class="mbl-strng">Column Description:</span> Section of the Act under which the citation/order was issued. May not contain data (null values).</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (20)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: PART_SECTION</p>
		<p><span class="mbl-strng">Column Description:</span> Code of Federal Regulations: Part/section of Title 30 CFR violated in format PPSSSSSXXXX where (P) Part, (S) Section and (X) Suffix. Four-digit section numbers are expanded to five within one leading zero. May not contain data (null values).</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (40)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: SECTION_OF_ACT_1</p>
		<p><span class="mbl-strng">Column Description:</span> Primary Section of Act which gives the MSHA Inspector the authority to take the action specified by this Issuance. More than one type of action may be cited.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (40)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: SECTION_OF_ACT_2</p>
		<p><span class="mbl-strng">Column Description:</span> Secondary Section of Act which gives the MSHA Inspector the authority to take the action specified by this Issuance at Metal/Non-Metal mines only. More than one type of action may be cited.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (40)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: CIT_ORD_SAFE</p>
		<p><span class="mbl-strng">Column Description:</span> Specifies the type of Citation: Citation, Order, Safeguard, Written Notice or Notice.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (40)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: ORIG_TERM_DUE_DT</p>
		<p><span class="mbl-strng">Column Description:</span> Original date by which the cited condition was to be abated. Original time by which the cited condition was to be abated.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (50)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: ORIG_TERM_DUE_TIME</p>
		<p><span class="mbl-strng">Column Description:</span> Original time by which the cited condition was to be abated.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (8)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: LATEST_TERM_DUE_DT</p>
		<p><span class="mbl-strng">Column Description:</span> Date by which the conditions cited in the citation/order are to be abated. For Metal mines, this can be the termination due date to which the citation/order is extended.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (50)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: LATEST_TERM_DUE_TIME</p>
		<p><span class="mbl-strng">Column Description:</span> Time by which the conditions cited on the citation/order are to be abated.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (8)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: TERMINATION_DT</p>
		<p><span class="mbl-strng">Column Description:</span> Date on which the citation/order was terminated. May not contain data (null values) if citation has not yet been terminated.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (50)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: TERMINATION_TIME</p>
		<p><span class="mbl-strng">Column Description:</span> Time of day (24 hour) at which the citation/order was terminated. May not contain data (null values) if citation has not yet been terminated.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: TERMINATION_TYPE</p>
		<p><span class="mbl-strng">Column Description:</span> Code identifying the type of termination: Issued, ReplacedByOrder or Terminated.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (40)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: ACATE_DT</p>
		<p><span class="mbl-strng">Column Description:</span> Date on which the citation/order was vacated. May not contain data (null values) if the violation was not vacated.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (50)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: VACATE_TIME</p>
		<p><span class="mbl-strng">Column Description:</span> Time of day (24 hour) at which the citation/order was vacated. May not contain data (null values) if the violation was not vacated.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: INITIAL_VIOL_NO</p>
		<p><span class="mbl-strng">Column Description:</span> This is the preceding citation record when there is a need to relate a citation to a previous one. For example this would apply when an order follows a citation. This relationship is needed to calculate the good faith reduction penalty points. May not contain data (null values).</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (60)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: REPLACED_BY_ORDER_NO</p>
		<p><span class="mbl-strng">Column Description:</span> Order number which replaced the original citation. May not contain data (null values) if situation does not apply.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (60)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: LIKELIHOOD</p>
		<p><span class="mbl-strng">Column Description:</span> This is a measure of the seriousness of the violation being cited as measured by the likelihood of the occurrence of an accident: Highly, NoLikelihood, Occurred, Reasonably or Unlikely. May not contain data (null values) if situation does not apply.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (40)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: INJ_ILLNESS</p>
		<p><span class="mbl-strng">Column Description:</span> Value assigned to a violation for gravity of injury. Measure of seriousness of violation being cited as measured by severity of the injury or illness to persons if accident were to occur due to the conditions of the violation: Fatal, LostDays, NoLostDays or Permanent.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (40)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: NO_AFFECTED</p>
		<p><span class="mbl-strng">Column Description:</span> This is a measure of the number of persons affected or potentially affected by the conditions at the Mine due to the violation. Can be zero.</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: NEGLIGENCE</p>
		<p><span class="mbl-strng">Column Description:</span> Codes representing the degree of negligence that the Inspector assigned to the violator due to the violation: HighNegligence, LowNegligence, ModNegligence, NoNegligence or Reckless. A high degree of negligence is assigned when the operator was in a position to be aware of the condition that contributed to a dangerous situation and there were no mitigating circumstances, or if there are unique aggravating circumstances associated with the violation, such as repeated past violations of the same standard at the mine.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (40)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: WRITTEN_NOTICE</p>
		<p><span class="mbl-strng">Column Description:</span> Indicates if this citation is a result of a Miner or Agent notice of complaint to MSHA (written notice 103(g)): ('Y' or 'N'). May not contain data (null values).</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (3)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: ENFORCEMENT_AREA</p>
		<p><span class="mbl-strng">Column Description:</span> Specifies the enforcement areas affected by the violating condition or practice constitute a health hazard, safety hazard, both or other type of hazard. May not contain data (null values).</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (40)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: SPECIAL_ASSESS</p>
		<p><span class="mbl-strng">Column Description:</span> Specifies whether this citation has been designated for Special Assessment based on Special Assessment Review (Y or N).</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (3)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: PRIMARY_OR_MILL</p>
		<p><span class="mbl-strng">Column Description:</span> A code indicating if the Violation was observed in the Primary Mine location or in an associated Mill (Metal/Non-Metal only). May not contain data (null values).</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (40)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: RIGHT_TO_CONF_DT</p>
		<p><span class="mbl-strng">Column Description:</span> Date the operator was advised of his right to a conference (Metal/Non-Metal only). May not contain data (null values).</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (50)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: ASMT_GENERATED_IND</p>
		<p><span class="mbl-strng">Column Description:</span> If the violator is an Operator or Contractor, the indicator is 'N'. If the violator is an Agent, the indicator is 'Y'. If the violator is a Miner, the indicator can be 'Y' or 'N'. If none of the above, the indicator is '?'.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (3)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: FINAL_ORDER_ISSUE_DT</p>
		<p><span class="mbl-strng">Column Description:</span> Date that this assessment becomes a Final Order. This date is set when the Certified Return Receipt date (CRR) is set. Note that this can be a projected future date that is set as soon as the CRR is entered.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (50)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: PROPOSED_PENALTY</p>
		<p><span class="mbl-strng">Column Description:</span> The original dollar value of the proposed penalty prior to any modifications such as those possibly resulting from a decision on a contested case.</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: AMOUNT_DUE</p>
		<p><span class="mbl-strng">Column Description:</span> The current dollar value of the proposed assessment, reflecting any modifications that have been made since it was originally assessed.</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: AMOUNT_PAID</p>
		<p><span class="mbl-strng">Column Description:</span> The total dollar value of all payments applied to this proposed assessment to date.</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: BILL_PRINT_DT</p>
		<p><span class="mbl-strng">Column Description:</span> Date the bill was printed. This date always represents the first time the bill was printed.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (50)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: LAST_ACTION_CD</p>
		<p><span class="mbl-strng">Column Description:</span> Last action taken against this violation such as 1stDemandPrinted, BillingReady, ApprovedforTreasury and Proposed.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (60)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: LAST_ACTION_DT</p>
		<p><span class="mbl-strng">Column Description:</span> Date the last action taken against this violation.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (50)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: DOCKET_NO</p>
		<p><span class="mbl-strng">Column Description:</span> The Docket Number assigned by the Court to this group of Assessments being contested.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (40)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: DOCKET_STATUS_CD</p>
		<p><span class="mbl-strng">Column Description:</span> Denotes the current status of this docket: Approved (approved by the court) or Proposed (not yet been approved by the court).</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: CONTESTED_IND</p>
		<p><span class="mbl-strng">Column Description:</span> Indicates if this violation has been assessed and is being contested (Y or N).</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (3)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: CONTESTED_DT</p>
		<p><span class="mbl-strng">Column Description:</span> Date of the most recent docket status for this violation.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (50)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: VIOLATOR_VIOLATION_CNT</p>
		<p><span class="mbl-strng">Column Description:</span> Total number of assessed violations for this violator at this time during the violation history period. Used in penalty calculation. Applies to an Operator or a Contractor. Calculation for VPID is Violator Violation Count / Violator Inspection Day Count.</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: VIOLATOR_INSPECTION_DAY_CNT</p>
		<p><span class="mbl-strng">Column Description:</span> Total number of inspections for this Operator at a mine during the violation history period. Used in penalty calculation. Does not apply to Contractor. Calculation for VPID is Violator Violation Count / Violator Inspection Day Count.</p>
		<p><span class="mbl-strng">Data Type:</span> bigint</p>		
	</div>
</div>
