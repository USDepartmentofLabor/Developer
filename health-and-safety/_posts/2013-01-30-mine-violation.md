---
layout: post
title: Mine Violation
version: V1
created: 1359571242
description: This dataset contains violations issued from 1/1/1978 to 1/1/2000 as a result of MSHA inspections.
---

<div class="force_wrap apiurl">
<p>https://api.dol.gov/V1/Mining/Violation</p>
</div>

<p>This dataset contains violations issued from 1/1/1978 to 1/1/2000 as a result of MSHA inspections. Each inspection results in a unique Event Number that can be associated with many violations and is a direct link to the Inspections Data Set. The violator name at the time of the violation, the actual date the violation occurred and the date the violation was issued are in this file. This table contains details about the specific citation/order/safeguard issued, such as Section of the Act, relevant dates and the conditions or practices which caused and constituted a violation or an imminent danger. The data is captured from (MSHA form 7000-3).</p>

<a href ="http://api.dol.gov/V1/Mining/Violation/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL%20Violation%20Dataset" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables  

<div class>
	<h3>MSHA_violations</h3>
	<table class="accessible responsive" summary="MSHA_violations">
	<caption>Mine Violation</caption>
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
				ID
			</th>
				<td>
				<span class="small">Data Type</span>
				bigint 
			</td>
				<td>
				<span class="small">Column Description</span>
				 Primary key - Primary Key
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
			     EVENT_NO
			  </th>
				<td>
				<span class="small">Data Type</span>
				varchar (14)
			</td>
				<td>
				<span class="small">Column Description</span>
				 A preassigned number used to identify each inspection, investigation, audit, survey, etc.  Use to join to the Inspections table.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				INSPECTION_BEGIN_DT
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (50)
			</td>
				<td>
				<span class="small">Column Description</span>
			      Start date of the inspection (mm/dd/yyyy).
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
			    INSPECTION_END_DT
			   </th>
				<td>
				<span class="small">Data Type</span>
			      varchar (50)
			 </td>
				<td>
				<span class="small">Column Description</span>
			     Inspection close out date (mm/dd/yyyy).
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 VIOLATION_NO
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (60)
			</td>
				<td>
				<span class="small">Column Description</span>
				Citation/order number assigned to each citation written during an inspection.  This is a unique key to the file.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				CONTROLLER_ID
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar (14)
			</td>
				<td>
				<span class="small">Column Description</span>
				Identification number assigned by MSHA Assessments for a Legal Entity acting as a controller of an operator at the time the violation was cited. May not contain data (null values) if this record pertains to a violation issued to a contractor.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 CONTROLLER_NAME
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar (144)
			</td>
				<td>
				<span class="small">Column Description</span>
				Name of the controller active at the time the violation was cited.  May not contain data (null values) if this record pertains to a violation issued to a contractor.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 VIOLATOR_ID
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar (14)
			</td>
				<td>
				<span class="small">Column Description</span>
				 Identification number assigned by MSHA for a Legal Entity acting as an operator at a mine at the time the violation was cited.  May not contain data (null values) if this record pertains to a violation issued to a contractor.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 VIOLATOR_NAME
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar (120)
			</td>
				<td>
				<span class="small">Column Description</span>
				 Name of the operator active at the time the violation was cited.  May not contain data (null values) if this record pertains to a violation issued to a contractor.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 VIOLATOR_TYPE_CD
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar (40)
			</td>
				<td>
				<span class="small">Column Description</span>
			     Each Violator record represents an entity (Operator, Contractor, Agent or Miner) that has one or more violations at a mine.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				  MINE_ID
			</th>
				<td>
				<span class="small">Data Type</span>
				  varchar (14)
			</td>
				<td>
				<span class="small">Column Description</span>
				 Mine id of the mine where the violation was issued.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 MINE_NAME
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar (100)
			</td>
				<td>
				<span class="small">Column Description</span>
				 Name of the mine where the violation was issued.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 MINE_TYPE
			</th>
				<td>
				<span class="small">Data Type</span>
				  varchar (40)
			</td>
				<td>
				<span class="small">Column Description</span>
				Mine type of the mine where the violation has been issued: Facility, Surface or Underground.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 COAL_METAL_IND
			</th>
				<td>
				<span class="small">Data Type</span>
				  varchar (3)
			</td>
				<td>
				<span class="small">Column Description</span>
				Identifies if the record is for a Coal or Metal/Non-Metal mine
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 CONTRACTOR_ID
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar (20)
			</td>
				<td>
				<span class="small">Column Description</span>
				Code identifying the contractor to whom the citation or order was issued.  May not contain data (null values) if the contractor was not cited.
				</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
			     VIOLATION_ISSUE_DT
		</th>
				<td>
				<span class="small">Data Type</span>
				 varchar (50)
			</td>
				<td>
				<span class="small">Column Description</span>
				Date the citation or order was issued by the MSHA inspector.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 VIOLATION_OCCUR_DT
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar (50)
			</td>
				<td>
				<span class="small">Column Description</span>
			     Actual date of occurrence of the violation.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				  CAL_YR
			</th>
				<td>
				<span class="small">Data Type</span>
				 bigint
			</td>
				<td>
				<span class="small">Column Description</span>
				Calendar year during which the citation/order was issued by the MSHA inspector.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 CAL_QTR
			</th>
				<td>
				<span class="small">Data Type</span>
				 bigint 
			</td>
				<td>
				<span class="small">Column Description</span>
				Calendar Quarter of the date the citation or order was issued by the MSHA inspector
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 FISCAL_YR
			</th>
				<td>
				<span class="small">Data Type</span>
				 bigint
			</td>
				<td>
				<span class="small">Column Description</span>
				 Fiscal Year of the date the citation or order was issued by the MSHA inspector.  MSHA's fiscal year begins October 1 and ends September 30
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 FISCAL_QTR
			</th>
				<td>
				<span class="small">Data Type</span>
				 bigint 
			</td>
				<td>
				<span class="small">Column Description</span>
				 Fiscal Quarter of the date the citation or order was issued by the MSHA inspector.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 IOLATION_ISSUE_TIME
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar (8)
			</td>
				<td>
				<span class="small">Column Description</span>
				 Time (24 hour) the citation or order was issued by the MSHA inspector.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 SIG_SUB
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar (3)  
			</td>
				<td>
				<span class="small">Column Description</span>
				An indicator as to whether or not the gravity is determined by the inspector to be significant and substantial.If this is 'Y', the inspector has indicated that based upon the particular facts surrounding the violation there exists a reasonable likelihood the hazard contributed to will result in an injury or illness of a reasonably serious nature.
				</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 SECTION_OF_ACT
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar (20)
			</td>
				<td>
				<span class="small">Column Description</span>
				Section of the Act under which the citation/order was issued.  May not contain data (null values).
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 PART_SECTION
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar (40)
			</td>
				<td>
				<span class="small">ColumnDescription</span>
				 Code of Federal Regulations: Part/section of Title 30 CFR violated in format PPSSSSSXXXX where (P) Part, (S) Section and (X) Suffix. Four-digit section numbers are expanded to five within one leading zero.  May not contain data (null values).
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 SECTION_OF_ACT_1
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar (40)
			</td>
				<td>
				<span class="small">Column Description</span>
				 Primary Section of Act which gives the MSHA Inspector the authority to take the action specified by this Issuance. More than one type of action may be cited.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 SECTION_OF_ACT_2
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar (40)
			</td>
				<td>
				<span class="small">Column Description</span>
				 Secondary Section of Act which gives the MSHA Inspector the authority to take the action specified by this Issuance at Metal/Non-Metal mines only. More than one type of action may be cited.
				</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 CIT_ORD_SAFE
			</th>
				<td>
				<span class="small">Data type</span>
				varchar (40)
			</td>
				<td>
				<span class="small">Column Description</span>
				Specifies the type of Citation: Citation, Order, Safeguard, Written Notice or Notice
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 ORIG_TERM_DUE_DT
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar (50)
			</td>
				<td>
				<span class="small">Column Description</span>
				Original date by which the cited condition was to be abated.  Original time by which the cited condition was to be abated.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 ORIG_TERM_DUE_TIME
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar (8)
			</td>
				<td>
				<span class="small">Column Description</span>
				Original time by which the cited condition was to be abated.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 LATEST_TERM_DUE_DT
			</th>
				<td>
				<span class="small">Data type</span>
				 varchar (50)
			</td>
				<td>
				<span class="small">Column Description</span>
				Date by which the conditions cited in the citation/order are to be abated. For Metal mines, this can be the termination due date to which the citation/order is extended.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 LATEST_TERM_DUE_TIME
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar (8)
			</td>
				<td>
				<span class="small">Column Description</span>
				Time by which the conditions cited on the citation/order are to be abated.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 TERMINATION_DT
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar (50)
			</td>
				<td>
				<span class="small">Column Description</span>
				Date on which the citation/order was terminated. May not contain data (null values) if citation has not yet been terminated.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 TERMINATION_TIME
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar (10)
				<td>
				<span class="small">Column Description</span>
				 Time of day (24 hour) at which the citation/order was terminated. May not contain data (null values) if citation has not yet been terminated.
			</td>
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 TERMINATION_TYPE
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar (40)
			</td>
				<td>
				<span class="small">Column Descrpition</span>
			    Code identifying the type of termination: Issued, ReplacedByOrder or Terminated.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
			     ACATE_DT
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar(50)
			</td>
				<td>
				<span class="small">Column Description</span>
			    Date on which the citation/order was vacated. May not contain data (null values) if the violation was not vacated. 
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 VACATE_TIME
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar (10)
			</td>
				<td>
				<span class="small">Column Description</span>
				Time of day (24 hour) at which the citation/order was vacated. May not contain data (null values) if the violation was not vacated.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				INITIAL_VIOL_NO
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar(60)
			</td>
				<td>
				<span class="small">Column Description</span>
				This is the preceding citation record when there is a need to relate a citation to a previous one. For example this would apply when an order follows a citation. This relationship is needed to calculate the good faith reduction penalty points. May not contain data (null values).
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 REPLACED_BY_ORDER_NO
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (60)
			</td>
				<td>
				<span class="small">Column Description</span>
				Order number which replaced the original citation. May not contain data (null values) if situation does not apply.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 LIKELIHOOD
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar(40)
			</td>
				<td>
				<span class="small">Column Description</span>
			    This is a measure of the seriousness of the violation being cited as measured by the likelihood of the occurrence of an accident: Highly, NoLikelihood, Occurred, Reasonably or Unlikely. May not contain data (null values) if situation does not apply.
				</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 INJ_ILLNESS
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar(40)
			</td>
				<td>
				<span class="small">Column Description</span>
				 Value assigned to a violation for gravity of injury. Measure of seriousness of violation being cited as measured by severity of the injury or illness to persons if accident were to occur due to the conditions of the violation: Fatal, LostDays, NoLostDays or Permanent.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
			     NO_AFFECTED
			   </th>
				<td>
				<span class="small">Data Type</span>
				 bigint 
			</td>
				<td>
				<span class="small">Column Description</span>
		       This is a measure of the number of persons affected or potentially affected by the conditions at the Mine due to the violation. Can be zero.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 NEGLIGENCE
			</th>
				<td>
				<span class="small">Data Type</span>
			      varchar(40)
				<td>
				<span class="small">Column Description</span>
				Codes representing the degree of negligence that the Inspector assigned to the violator due to the violation: HighNegligence, LowNegligence, ModNegligence, NoNegligence or Reckless.  A high degree of negligence is assigned when the operator was in a position to be aware of the condition that contributed to a dangerous situation and there were no mitigating circumstances, or if there are unique aggravating circumstances associated with the violation, such as repeated past violations of the same standard at the mine.
			 </td>
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
			     WRITTEN_NOTICE
			    </th>
				<td>
				<span class="small">Data Type</span>
			     varchar(3)	
			</td>
				<td>
				<span class="small">Column Description</span>
				Indicates if this citation is a result of a Miner or Agent notice of complaint to MSHA (written notice 103(g)):  ('Y'  or 'N'). May not contain data (null values).
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 ENFORCEMENT_AREA
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar (40)
			</td>
				<td>
				<span class="small">Column Description</span>
				Specifies the enforcement areas affected by the violating condition or practice constitute a health hazard, safety hazard, both or other type of hazard. May not contain data (null values).
				</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 SPECIAL_ASSESS
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar (3)
			</td>
				<td>
				<span class="small">Column Description</span>
				Specifies whether this citation has been designated for Special Assessment based on Special Assessment Review (Y or N).
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 PRIMARY_OR_MILL
			</th>
				<td>
				<span class="small">Data Type</span>
				   varchar (40)
			</td>
				<td>
				<span class="small">Column Description</span>
				A code indicating if the Violation was observed in the Primary Mine location or in an associated Mill (Metal/Non-Metal only). May not contain data (null values).
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 RIGHT_TO_CONF_DT
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar (50)
			</td>
				<td>
				<span class="small">Column Description</span>
				Date the operator was advised of his right to a conference (Metal/Non-Metal only). May not contain data (null values).
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 ASMT_GENERATED_IND
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar(3)
			</td>
				<td>
				<span class="small">Column Description</span>
			    If the violator is an Operator or Contractor, the indicator is 'N'. If the violator is an Agent, the indicator is 'Y'. If the violator is a Miner, the indicator can be 'Y' or 'N'.  If none of the above, the indicator is '?'.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 FINAL_ORDER_ISSUE_DT
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar (50)
			</td>
				<td>
				<span class="small">Column Description</span>
				Date that this assessment becomes a Final Order. This date is set when the Certified Return Receipt date (CRR) is set. Note that this can be a projected future date that is set as soon as the CRR is entered.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 PROPOSED_PENALTY
			</th>
				<td>
				<span class="small">Data Type</span>
				 bigint
			</td>
				<td>
				<span class="small">Column Description</span>
			     The original dollar value of the proposed penalty prior to any modifications such as those possibly resulting from a decision on a contested case.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 AMOUNT_DUE
			</th>
				<td>
				<span class="small">Data Type</span>
				bigint
			</td>
				<td>
				<span class="small">Column Description</span>
				The current dollar value of the proposed assessment, reflecting any modifications that have been made since it was originally assessed
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 AMOUNT_PAID
			</th>
				<td>
				<span class="small">Data Type</span>
				 bigint
			</td>
				<td>
				<span class="small">Column Description</span>
				The total dollar value of all payments applied to this proposed assessment to date.
				</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				  BILL_PRINT_DT
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar(50)
			</td>
				<td>
				<span class="small">Column Description</span>
				 Date the bill was printed. This date always represents the first time the bill was printed
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 LAST_ACTION_CD
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar(60)
			</td>
				<td>
				<span class="small">Column Description</span>
				 Last action taken against this violation such as 1stDemandPrinted, BillingReady, ApprovedforTreasury and Proposed.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				LAST_ACTION_DT
			</th>
				<td>
				<span class="small">Data Type</span>
				varchar (50)
			</td>
				<td>
				<span class="small">Column Description</span>
				Date the last action taken against this violation
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				DOCKET_NO
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar (40)
			</td>
				<td>
				<span class="small">Column Description</span>
			     The Docket Number assigned by the Court to this group of Assessments being contested.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 DOCKET_STATUS_CD
			</th>
				<td>
				<span class="small">Data Type</span>
				    varchar (10)
			</td>
				<td>
				<span class="small">Column Description</span>
				 Denotes the current status of this docket: Approved (approved by the court) or Proposed (not yet been approved by the court).
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				CONTESTED_IND
			</th>
				<td>
				<span class="small">Data Type</span>
				  varchar (3)
			</td>
				<td>
				<span class="small">Column Description</span>
			    Indicates if this violation has been assessed and is being contested (Y or N).
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				 CONTESTED_DT
			</th>
				<td>
				<span class="small">Data Type</span>
				 varchar (50)
			</td>
				<td>
				<span class="small">Column Description</span>
			     Date of the most recent docket status for this violation.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
			      VIOLATOR_VIOLATION_CNT
		</th>
				<td>
				<span class="small">Data Type</span>
				 bigint
			</td>
				<td>
				<span class="small">Column Description</span>
			    Total number of assessed violations for this violator at this time during the violation history period. Used in penalty calculation. Applies to an Operator or a Contractor. Calculation for VPID is Violator Violation Count / Violator Inspection Day Count.
			</td>
			</tr>
			<tr>
				<th scope="row">
				<span class="small">Column Name</span>
				  VIOLATOR_INSPECTION_DAY_CNT
			</th>
				<td>
				<span class="small">Data Type</span>
				 bigint
			</td>
				<td>
				<span class="small">Column Description</span>
				 Total number of inspections for this Operator at a mine during the violation history period. Used in penalty calculation. Does not apply to Contractor. Calculation for VPID is Violator Violation Count / Violator Inspection Day Count.
			</td>
			</tr>
		</tbody>
	</table>
</div>

