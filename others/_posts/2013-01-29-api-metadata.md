---
layout: post
title: API Metadata
created: 1359471075
description: The API Metadata provides a list of available datasets that the Department of Labor supplies as a service.
---

```
http://api.dol.gov/V1/APIMetadata
```

<p>The API Metadata provides a list of available datasets that the Department of Labor supplies as a service.</p>

<a href ="http://api.dol.gov/V1/APIMetadata/$metadata" class="button radius button_dataset">Browse Metadata</a>

## Dataset Tables  

<div class="dsktp_tbl">
	<h3>APIMetadata</h3>
	<table summary="Lists datasets' narrative, path, and documentation location information for available sources.">
		<caption>Lists datasets' narrative, path, and documentation location information for available sources.</caption>
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
				<td>Record Id. - Primary Key</td>
				<td>smallint</td>
			</tr>
			<tr>
				<th scope="row">name</th>
				<td>Dataset name.</td>
				<td>varchar (100)</td>
			</tr>
			<tr>
				<th scope="row">description</th>
				<td>Dataset description.</td>
				<td>varchar (500)</td>
			</tr>
			<tr>
				<th scope="row">datasetPath</th>
				<td>The datasets base path.</td>
				<td>varchar (150)</td>
			</tr>
			<tr>
				<th scope="row">documentationPath</th>
				<td>Path to the corresponding dataset documentation.</td>
				<td>varchar (150)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h3>APIMetadata</h3>
	<h4>Lists datasets' narrative, path, and documentation location information for available sources.</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: id</p>
		<p><span class="mbl-strng">Column Description:</span> Record Id. - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> smallint</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: name</p>
		<p><span class="mbl-strng">Column Description:</span> Dataset name.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (100)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: description</p>
		<p><span class="mbl-strng">Column Description:</span> Dataset description.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (500)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: datasetPath</p>
		<p><span class="mbl-strng">Column Description:</span> The datasets base path.</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (150)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: documentationPath</p>
		<p><span class="mbl-strng">Column Description:</span> Path to the corresponding dataset documentation</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (150)</p>		
	</div>
</div>
