---
layout: post
title: Gulf Oil Spill - United States Department of Labor Developer Portal
created: 1359646744
description: Following its sampling plan, OSHA industrial hygienists are monitoring workers engaged in the oil spill clean up in the Gulf of Mexico for exposure to hazardous chemicals and conditions.
---

```
http://api.dol.gov/V1/Safety/GulfOilSpill
```

<p>Following its sampling plan, OSHA industrial hygienists are monitoring workers engaged in the oil spill clean up in the Gulf of Mexico for exposure to hazardous chemicals and conditions. These data tables provide sample results for chemicals, noise, and heat stress index measurements. Samples to assess airborne concentrations of oil, weathered oil, oil dispersants, cleaning agents and other materials as identified are taken. When evaluating worker exposure, direct reading instruments and shift-long sampling is performed in the actual breathing zone of workers. OSHA has also sampled areas that are periodically frequented by workers but the samples are not taken from the breathing zone of workers. Finally, OSHA has sampled directly over tar balls, inside bags containing contaminated materials, and other locations that do not represent worker exposure but provide information on the types of chemicals that may be coming off contaminated materials.</p>

<a href ="http://api.dol.gov/V1/Safety/GulfOilSpill/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=Gulf%20Oil%20Spill" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables 
- [OSHA_Direct_Read_Sampling](#OSHA_Direct_Read_Sampling)
- [OSHA_NOISE_REPORT](#OSHA_NOISE_REPORT) 
 
<div class="dsktp_tbl">
	<h3 id="OSHA_Direct_Read_Sampling">OSHA_Direct_Read_Sampling Table</h3>
	<table summary="OSHA Direct Read Sampling - Gulf Oil Spill">
		<caption>OSHA Direct Read Sampling</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">ESTAB_STATE</th>
				<td>Establish State Name</td>
				<td>varchar (255)</td>
			</tr>
			<tr>
				<th scope="row">ESTAB_SITE_NAME</th>
				<td>Establish Site Name</td>
				<td>varchar (255)</td>
			</tr>
			<tr>
				<th scope="row">ESTAB_SITE_NAME_OTHER</th>
				<td>Establish Site Name Other Details</td>
				<td>varchar (255)</td>
			</tr>
			<tr>
				<th scope="row">SAMP_DATE</th>
				<td>Sample Date</td>
				<td>DateTime</td>
			</tr>
			<tr>
				<th scope="row">SAMP_NO</th>
				<td>Sample Number</td>
				<td>Int 32</td>
			</tr>
			<tr>
				<th scope="row">OCC_CODE</th>
				<td>OCC Code</td>
				<td>varchar (255)</td>
			</tr>
			<tr>
				<th scope="row">DES_SITU_ENCOUNTERED</th>
				<td>DES Situation Encountered</td>
				<td>varchar (255)</td>
			</tr>
			<tr>
				<th scope="row">INSTRU_1</th>
				<td>Instru 1</td>
				<td>varchar (255)</td>
			</tr>
			<tr>
				<th scope="row">SUBSTANCE_AGENT</th>
				<td>Substance Agent</td>
				<td>varchar (255)</td>
			</tr>
			<tr>
				<th scope="row">READING</th>
				<td>Reading</td>
				<td>varchar (255)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="OSHA_NOISE_REPORT">OSHA_NOISE_REPORT Table</h3>
	<table summary="Noise Report - Gulf Oil Spill">
		<caption>Noise Report</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">ESTABLISHMENT_STATE</th>
				<td>Establishment State</td>
				<td>varchar (255)</td>
			</tr>
			<tr>
				<th scope="row">ESTABLISHMENT_NAME</th>
				<td>Establishment Name</td>
				<td>varchar (255)</td>
			</tr>
			<tr>
				<th scope="row">SAMPLING_DATE</th>
				<td>Sampling Date</td>
				<td>DateTime</td>
			</tr>
			<tr>
				<th scope="row">SAMPLING_NO</th>
				<td>Sampling Number</td>
				<td>Int 32</td>
			</tr>
			<tr>
				<th scope="row">EMPLOYEE_OCCUPATION</th>
				<td>Employee Occupation</td>
				<td>varchar (255)</td>
			</tr>
			<tr>
				<th scope="row">EMPLOYEE_OCCUPATION_SPECIFY</th>
				<td>Employee Occupation Specify</td>
				<td>varchar (255)</td>
			</tr>
			<tr>
				<th scope="row">DES_SITU_ENCOUNTERED</th>
				<td>DES Situation Encountered</td>
				<td>varchar (255)</td>
			</tr>
			<tr>
				<th scope="row">SAMPLE_TYPE</th>
				<td>Sample Type</td>
				<td>varchar (255)</td>
			</tr>
			<tr>
				<th scope="row">TOTAL_TIME</th>
				<td>Total Time</td>
				<td>DateTime</td>
			</tr>
			<tr>
				<th scope="row">EXPOSURE_LEVEL</th>
				<td>Exposure Level</td>
				<td>Double</td>
			</tr>
			<tr>
				<th scope="row">PEL</th>
				<td>PEL</td>
				<td>varchar (255)</td>
			</tr>
			<tr>
				<th scope="row">OSHA_HC_LAVG</th>
				<td>OSHA HC LAVG</td>
				<td>Double</td>
			</tr>
			<tr>
				<th scope="row">OSHA_HC_TWA</th>
				<td>OSHA HC TWA</td>
				<td>Double</td>
			</tr>
			<tr>
				<th scope="row">OSHA_PEL_LAVG</th>
				<td>OSHA PEL LAVG</td>
				<td>Double</td>
			</tr>
			<tr>
				<th scope="row">OSHA_PEL_TWA</th>
				<td>OSHA PEL TWA</td>
				<td>Double</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h3 id="OSHA_Direct_Read_Sampling">OSHA_Direct_Read_Sampling Table</h3>
	<h4>OSHA Direct Read Sampling</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: ESTAB_STATE</p>
		<p><span class="mbl-strng">Column Description:</span> Establish State Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (255)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: ESTAB_SITE_NAME</p>
		<p><span class="mbl-strng">Column Description:</span> Establish Site Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (255)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: ESTAB_SITE_NAME_OTHER</p>
		<p><span class="mbl-strng">Column Description:</span> Establish Site Name Other Details</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (255)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: SAMP_DATE</p>
		<p><span class="mbl-strng">Column Description:</span> Sample Date</p>
		<p><span class="mbl-strng">Data Type:</span> DateTime</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: SAMP_NO</p>
		<p><span class="mbl-strng">Column Description:</span> Sample Number</p>
		<p><span class="mbl-strng">Data Type:</span> Int 32</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: OCC_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> OCC Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (255)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: DES_SITU_ENCOUNTERED</p>
		<p><span class="mbl-strng">Column Description:</span> DES Situation Encountered</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (255)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: INSTRU_1</p>
		<p><span class="mbl-strng">Column Description:</span> Instru 1</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (255)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: SUBSTANCE_AGENT</p>
		<p><span class="mbl-strng">Column Description:</span> Substance Agent</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (255)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: READING</p>
		<p><span class="mbl-strng">Column Description:</span> Reading</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (255)</p>		
	</div>

	<hr />
	<h3 id="OSHA_NOISE_REPOR">OSHA_NOISE_REPORT Table</h3>
	<h4>OSHA Noise Report</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: ESTABLISHMENT_STATE</p>
		<p><span class="mbl-strng">Column Description:</span> Establishment State</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (255)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: ESTABLISHMENT_NAME</p>
		<p><span class="mbl-strng">Column Description:</span> Establishment Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (255)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: SAMPLING_DATE</p>
		<p><span class="mbl-strng">Column Description:</span> Sampling Date</p>
		<p><span class="mbl-strng">Data Type:</span> DateTime</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: SAMPLING_NO</p>
		<p><span class="mbl-strng">Column Description:</span> Sampling Number</p>
		<p><span class="mbl-strng">Data Type:</span> Int 32</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: EMPLOYEE_OCCUPATION</p>
		<p><span class="mbl-strng">Column Description:</span> Employee Occupation</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (255</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: EMPLOYEE_OCCUPATION_SPECIFY</p>
		<p><span class="mbl-strng">Column Description:</span> Employee Occupation Specify 	</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (255</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: DES_SITU_ENCOUNTERED</p>
		<p><span class="mbl-strng">Column Description:</span> DES Situation Encountered</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (255</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: SAMPLE_TYPE</p>
		<p><span class="mbl-strng">Column Description:</span> Sample Type</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (255</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: TOTAL_TIME</p>
		<p><span class="mbl-strng">Column Description:</span> Total Time</p>
		<p><span class="mbl-strng">Data Type:</span> DateTime</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: EXPOSURE_LEVEL</p>
		<p><span class="mbl-strng">Column Description:</span> Exposure Level</p>
		<p><span class="mbl-strng">Data Type:</span> Double</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: PEL</p>
		<p><span class="mbl-strng">Column Description:</span> PEL</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (255)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: OSHA_HC_LAVG</p>
		<p><span class="mbl-strng">Column Description:</span> OSHA HC LAVG</p>
		<p><span class="mbl-strng">Data Type:</span> Double</p>		
	</div>
		<div class="odd_row">
		<p class="mbl-strng">Column Name: OSHA_HC_TWA</p>
		<p><span class="mbl-strng">Column Description:</span> OSHA HC TWA</p>
		<p><span class="mbl-strng">Data Type:</span> Double</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: OSHA_PEL_LAVG</p>
		<p><span class="mbl-strng">Column Description:</span> OSHA PEL LAVG</p>
		<p><span class="mbl-strng">Data Type:</span> Double</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: OSHA_PEL_TWA</p>
		<p><span class="mbl-strng">Column Description:</span> OSHA PEL TWA</p>
		<p><span class="mbl-strng">Data Type:</span> Double</p>		
	</div>
</div>
