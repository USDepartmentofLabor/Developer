---
layout: post
title: API Metadata
created: 1359471075
version: V1
description: The API Metadata provides a list of available datasets that the Department of Labor supplies as a service.
---

<div class="force_wrap apiurl">
<p>https://api.dol.gov/V1/APIMetadata</p>
</div>

<p>The API Metadata provides a list of available datasets that the Department of Labor supplies as a service.</p>

<a href ="http://api.dol.gov/V1/APIMetadata/$metadata" class="button radius button_dataset">Browse Metadata</a>

## Dataset Tables  

<div>
	<h3>APIMetadatas</h3>
	<table class="accessible responsive" summary="Lists datasets' narrative, path, and documentation location information for available sources.">
		<caption>Lists datasets' narrative, path, and documentation location information for available sources.</caption>
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
					smallint
				</td>
				<td>
					<span class="small">Column Description</span>
					Record Id. - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					name
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Dataset name.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					description
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (500)
				</td>
				<td>
					<span class="small">Column Description</span>
					Dataset description.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					datasetPath
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (150)
				</td>
				<td>
					<span class="small">Column Description</span>
					The datasets base path.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					documentationPath
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (150)
				</td>
				<td>
					<span class="small">Column Description</span>
					Path to the corresponding dataset documentation.
				</td>
			</tr>
		</tbody>
	</table>
</div>