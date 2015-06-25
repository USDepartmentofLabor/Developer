---
layout: post
title: Research And Evaluation Inventory
created: 1359480254
description: This inventory is the first phase in the development of a single repository of all completed and planned research and evaluation projects that have or will be conducted by DOL in the upcoming calendar year.
---

<div class="force_wrap apiurl">
<p>http://api.dol.gov/V1/Statistics/REI</p>
</div>

<p>This inventory is the first phase in the development of a single repository of all completed and planned research and evaluation projects that have or will be conducted by DOL in the upcoming calendar year. This data set includes: a title and description of each project; the date the project began; the date the project was published with a link to completed research and evaluation project outcomes as these become available; and, information on Contract or Grant resources, if applicable. The database will be updated on a monthly basis to add more agency information and to links to completed projects.</p>
<p>This complete dataset can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://explore.data.gov/Labor-Force-Employment-and-Earnings/Department-of-Labor-Research-and-Evaluation-Invent/zy4n-wgdb&amp;exitTitle=Research%20and%20Evaluation&amp;fedpage=yes">http://explore.data.gov/Labor-Force-Employment-and-Earnings/Department-of-Labor-Research-and-Evaluation-Invent/zy4n-wgdb</a></p>

<a href ="http://api.dol.gov/V1/Statistics/REI/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL%20Research%20and%20Evaluation%20Inventory%20Dataset" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables  

<div class="dsktp_tbl">
	<h3>researchEvaluationInventory</h3>
	<table summary="Research and evaluation inventory">
		<caption>Research and evaluation inventory.</caption>
		<tbody>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
			<tr>
				<th scope="row">id</th>
				<td>Record Id. - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">dolAgency</th>
				<td>Department of Labor Agency.</td>
				<td>varchar (50)</td>
			</tr>
			<tr>
				<th scope="row">description</th>
				<td>Title and narrative description.</td>
				<td>varchar (1500)</td>
			</tr>
			<tr>
				<th scope="row">status</th>
				<td>Status.</td>
				<td>varchar (150)</td>
			</tr>
			<tr>
				<th scope="row">beginDate</th>
				<td>Begin Date.</td>
				<td>varchar (400)</td>
			</tr>
			<tr>
				<th scope="row">datePublished</th>
				<td>Date published.</td>
				<td>varchar (500)</td>
			</tr>
			<tr>
				<th scope="row">congressionalMandate</th>
				<td>Congressional mandate.</td>
				<td>varchar (200)</td>
			</tr>
			<tr>
				<th scope="row">contractorGrantee</th>
				<td>Contractor or grantee.</td>
				<td>varchar (200)</td>
			</tr>
			<tr>
				<th scope="row">amountExpected</th>
				<td>Amount expected to be obligated for the entire project.</td>
				<td>varchar (150)</td>
			</tr>
			<tr>
				<th scope="row">PublicationsLinks</th>
				<td>Links to publications.</td>
				<td>varchar (200)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h3>researchEvaluationInventory</h3>
	<h4>Research and Evaluation Inventory</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: id</p>
		<p><span class="mbl-strng">Column Description:</span> Record Id. - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: dolAgency</p>
		<p><span class="mbl-strng">Column Description:</span> Department of Labor Agency.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (50)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: description</p>
		<p><span class="mbl-strng">Column Description:</span> Title and narrative description.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1500)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: status</p>
		<p><span class="mbl-strng">Column Description:</span> Status.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (150)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: beginDate</p>
		<p><span class="mbl-strng">Column Description:</span> Begin Date.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (400)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: datePublished</p>
		<p><span class="mbl-strng">Column Description:</span> Date published.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (500)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: congressionalMandate</p>
		<p><span class="mbl-strng">Column Description:</span> Congressional mandate.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (200)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: contractorGrantee</p>
		<p><span class="mbl-strng">Column Description:</span> Contractor or grantee.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (200)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: amountExpected</p>
		<p><span class="mbl-strng">Column Description:</span> Amount expected to be obligated for the entire project.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (150)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: PublicationsLinks</p>
		<p><span class="mbl-strng">Column Description:</span> Links to publications.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (200)</p>		
	</div>
</div>
