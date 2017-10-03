---
layout: post
title: Wage and Hour Publications System
created: 1380292809
description: This dataset provides information regarding all of the publicly available and currently active publications.
---

## Dataset Tables  

<div>
	<ul>
		<li><a href="#publicationsview">PublicationsView</a></li>
		<li><a href="#documentsview">DocumentsView</a></li>
	</ul>
</div>

<div>
	<h3 id="publicationsview" tabindex="-1">PublicationsView Table</h3>
	<div class="force_wrap apiurl">
<p>https://data.dol.gov/get/publications_view</p>
</div>
	<table class="accessible responsive" summary="Publications View - Wage and Hour Publications System (WHPS)">
		<caption>Publications View</caption>
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
					PublicationId
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Unique publication id.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					Recommended
				</th>
				<td>
					<span class="small">Data Type</span>
					bit
				</td>
				<td>
					<span class="small">Column Description</span>
					A publication can be marked and visible as recommended/featured on the ordering interface. 1 - recommended publication, 0 - none recommended publication.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					RecommendedImage
				</th>
				<td>
					<span class="small">Data Type</span>
					VarBinary(max)
				</td>
				<td>
					<span class="small">Column Description</span>
					The image show to the publication it is recommended
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					Title
				</th>
				<td>
					<span class="small">Data Type</span>
					NVarChar(500)
				</td>
				<td>
					<span class="small">Column Description</span>
					Publication's title
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					PubNumber
				</th>
				<td>
					<span class="small">Data Type</span>
					NVarChar(100)
				</td>
				<td>
					<span class="small">Column Description</span>
					The publication number. (I am not sure what is the exact meaning of publication number in the real world.)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					HTMLLink
				</th>
				<td>
					<span class="small">Data Type</span>
					NVarChar(2000)
				</td>
				<td>
					<span class="small">Column Description</span>
					Contains a link the HTML version of the publication (if the publication has HTML version).
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					DocumentCounter
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					How many documents are connected to the publication
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					DocId01
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Id of the first attached document. If no documents are attached all the DocId fields will be null. If two documents are attached the fields from DocId03 to DocId10 will be null.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					DocId02
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Id of the first attached document. If no documents are attached all the DocId fields will be null. If two documents are attached the fields from DocId03 to DocId10 will be null.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					DocId03
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Id of the first attached document. If no documents are attached all the DocId fields will be null. If two documents are attached the fields from DocId03 to DocId10 will be null.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					DocId04
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Id of the first attached document. If no documents are attached all the DocId fields will be null. If two documents are attached the fields from DocId03 to DocId10 will be null.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					DocId05
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Id of the first attached document. If no documents are attached all the DocId fields will be null. If two documents are attached the fields from DocId03 to DocId10 will be null.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					DocId06
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Id of the first attached document. If no documents are attached all the DocId fields will be null. If two documents are attached the fields from DocId03 to DocId10 will be null.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					DocId07
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Id of the first attached document. If no documents are attached all the DocId fields will be null. If two documents are attached the fields from DocId03 to DocId10 will be null.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					DocId08
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Id of the first attached document. If no documents are attached all the DocId fields will be null. If two documents are attached the fields from DocId03 to DocId10 will be null.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					DocId09
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Id of the first attached document. If no documents are attached all the DocId fields will be null. If two documents are attached the fields from DocId03 to DocId10 will be null.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					DocId10
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Id of the first attached document. If no documents are attached all the DocId fields will be null. If two documents are attached the fields from DocId03 to DocId10 will be null.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					Language
				</th>
				<td>
					<span class="small">Data Type</span>
					NVarChar(50)
				</td>
				<td>
					<span class="small">Column Description</span>
					Publication's language. When empty it is usually English.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					StockStatus
				</th>
				<td>
					<span class="small">Data Type</span>
					NVarChar(50)
				</td>
				<td>
					<span class="small">Column Description</span>
					Currently the possible values are: AVAILABLE; BACK_ORDERED; NOT_AVAILABLE; or OUT_OF_PRINT
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="documentsview" tabindex="-1">DocumentsView Table</h3>
	<table class="accessible responsive" summary="Documents View - Wage and Hour Publications System (WHPS)">
		<caption>Documents View</caption>
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
					DocumentId
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Unique document id.
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					PublicationId
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Which publication this document is assigned to. This field is not unique!
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					DocumentType
				</th>
				<td>
					<span class="small">Data Type</span>
					NVarChar(50)
				</td>
				<td>
					<span class="small">Column Description</span>
					Document type. For example &lsquo;PDF&rsquo;
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					Name
				</th>
				<td>
					<span class="small">Data Type</span>
					NVarChar(200)
				</td>
				<td>
					<span class="small">Column Description</span>
					The file name before it was uploaded into the table
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					FileData
				</th>
				<td>
					<span class="small">Data Type</span>
					VarBinary(max)
				</td>
				<td>
					<span class="small">Column Description</span>
					The binary data of the file.
				</td>
			</tr>
		</tbody>
	</table>
</div>