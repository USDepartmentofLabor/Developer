---
layout: post
title: Research And Evaluation Inventory
created: 1359480254
description: This inventory is the first phase in the development of a single repository of all completed and planned research and evaluation projects that have or will be conducted by DOL in the upcoming calendar year.
---

```
http://api.dol.gov/V1/Statistics/REI
```

<p>This inventory is the first phase in the development of a single repository of all completed and planned research and evaluation projects that have or will be conducted by DOL in the upcoming calendar year. This data set includes: a title and description of each project; the date the project began; the date the project was published with a link to completed research and evaluation project outcomes as these become available; and, information on Contract or Grant resources, if applicable. The database will be updated on a monthly basis to add more agency information and to links to completed projects.</p>

<p>This complete dataset can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://explore.data.gov/Labor-Force-Employment-and-Earnings/Department-of-Labor-Research-and-Evaluation-Invent/zy4n-wgdb&amp;exitTitle=Research%20and%20Evaluation&amp;fedpage=yes">http://explore.data.gov/Labor-Force-Employment-and-Earnings/Department-of-Labor-Research-and-Evaluation-Invent/zy4n-wgdb</a></p>


<a href ="http://api.dol.gov/V1/Statistics/REI/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL%20Research%20and%20Evaluation%20Inventory%20Dataset" class="button radius button_dataset">Explore This Data</a>


## Dataset Tables  
<h3>researchEvaluationInventory</h3>

<p>Research and evaluation inventory.</p>

<table>
	<tbody>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
		<tr>
			<th>id</th>
			<td>Record Id. - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>dolAgency</th>
			<td>Department of Labor Agency.</td>
			<td>varchar (50)</td>
		</tr>
		<tr>
			<th>description</th>
			<td>Title and narrative description.</td>
			<td>varchar (1500)</td>
		</tr>
		<tr>
			<th>status</th>
			<td>Status.</td>
			<td>varchar (150)</td>
		</tr>
		<tr>
			<th>beginDate</th>
			<td>Begin Date.</td>
			<td>varchar (400)</td>
		</tr>
		<tr>
			<th>datePublished</th>
			<td>Date published.</td>
			<td>varchar (500)</td>
		</tr>
		<tr>
			<th>congressionalMandate</th>
			<td>Congressional mandate.</td>
			<td>varchar (200)</td>
		</tr>
		<tr>
			<th>contractorGrantee</th>
			<td>Contractor or grantee.</td>
			<td>varchar (200)</td>
		</tr>
		<tr>
			<th>amountExpected</th>
			<td>Amount expected to be obligated for the entire project.</td>
			<td>varchar (150)</td>
		</tr>
		<tr>
			<th>PublicationsLinks</th>
			<td>Links to publications.</td>
			<td>varchar (200)</td>
		</tr>
	</tbody>
</table>
