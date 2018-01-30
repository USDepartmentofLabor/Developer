---
layout: post
title: Research And Evaluation Inventory
created: 1359480254
version: V1
description: This inventory is the first phase in the development of a single repository of all completed and planned research and evaluation projects that have or will be conducted by DOL in the upcoming calendar year.
---

<div class="force_wrap apiurl">
<p>https://api.dol.gov/V1/Statistics/REI</p>
</div>

<p>This inventory is the first phase in the development of a single repository of all completed and planned research and evaluation projects that have or will be conducted by DOL in the upcoming calendar year. This data set includes: a title and description of each project; the date the project began; the date the project was published with a link to completed research and evaluation project outcomes as these become available; and, information on Contract or Grant resources, if applicable. The database will be updated on a monthly basis to add more agency information and to links to completed projects.</p>
<p>This complete dataset can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=https://catalog.data.gov/dataset/research-and-evaluation-inventory&amp;exitTitle=Research%20and%20Evaluation&amp;fedpage=yes">https://catalog.data.gov/dataset/research-and-evaluation-inventory</a></p>

<a href ="http://api.dol.gov/V1/Statistics/REI/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=DOL%20Research%20and%20Evaluation%20Inventory%20Dataset" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables  

<div>
	<h3>researchEvaluationInventory</h3>
	<table class="accessible responsive" summary="Research and evaluation inventory">
		<caption>Research and evaluation inventory.</caption>
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
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Record Id. - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					dolAgency
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (50)
				</td>
				<td>
					<span class="small">Column Description</span>
					Department of Labor Agency.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					description
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1500)
				</td>
				<td>
					<span class="small">Column Description</span>
					Title and narrative description.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					status
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (150)
				</td>
				<td>
					<span class="small">Column Description</span>
					Status.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					beginDate
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (400)
				</td>
				<td>
					<span class="small">Column Description</span>
					Begin Date.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					datePublished
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (500)
				</td>
				<td>
					<span class="small">Column Description</span>
					Date published.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					congressionalMandate
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (200)
				</td>
				<td>
					<span class="small">Column Description</span>
					Congressional mandate.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					contractorGrantee
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (200)
				</td>
				<td>
					<span class="small">Column Description</span>
					Contractor or grantee.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					amountExpected
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (150)
				</td>
				<td>
					<span class="small">Column Description</span>
					Amount expected to be obligated for the entire project.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					PublicationsLinks
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (200)
				</td>
				<td>
					<span class="small">Column Description</span>
					Links to publications.
				</td>
			</tr>
		</tbody>
	</table>
</div>