---
layout: post
title: API Metadata
created: 1359471075
---

```
http://api.dol.gov/V1/APIMetadata
```

<p>The API Metadata provides a list of available datasets that the Department of Labor supplies as a service.</p>


<a href ="http://api.dol.gov/V1/APIMetadata/$metadata" class="button radius button_dataset">Browse Metadata</a>


## Dataset Tables  
<h3>APIMetadata</h3>

<p>Lists datasets' narrative, path, and documentation location information for available sources.</p>

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
			<td>Record Id. - Primary Key</td>
			<td>smallint</td>
		</tr>
		<tr>
			<th>name</th>
			<td>Dataset name.</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th>description</th>
			<td>Dataset description.</td>
			<td>varchar (500)</td>
		</tr>
		<tr>
			<th>datasetPath</th>
			<td>The datasets base path.</td>
			<td>varchar (150)</td>
		</tr>
		<tr>
			<th>documentationPath</th>
			<td>Path to the corresponding dataset documentation.</td>
			<td>varchar (150)</td>
		</tr>
	</tbody>
</table>
