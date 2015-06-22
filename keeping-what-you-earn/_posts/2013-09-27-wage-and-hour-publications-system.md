---
layout: post
title: Wage and Hour Publications System
created: 1380292809
description: This dataset provides information regarding all of the publicly available and currently active publications.
---

```
http://api.dol.gov/V1/WHPS
```

<p>This dataset provides information regarding all of the publicly available and currently active publications.</p>

<a href ="http://api.dol.gov/V1/WHPS/$metadata" class="button radius button_dataset">Browse Metadata</a>

## Dataset Tables  

- [PublicationsView](#publicationsview)
- [DocumentsView](#documentsview)

<div class="dsktp_tbl">
	<h3 id="publicationsview">PublicationsView Table</h3>
	<table summary="Publications View - Wage and Hour Publications System (WHPS)">
		<caption>Publications View</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">PublicationId</th>
				<td>Unique publication id.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">Recommended</th>
				<td>A publication can be marked and visible as recommended/featured on the ordering interface. 1 - recommended publication, 0 - none recommended publication.</td>
				<td>bit</td>
			</tr>
			<tr>
				<th scope="row">RecommendedImage</th>
				<td>The image show to the publication it is recommended</td>
				<td>VarBinary(max)</td>
			</tr>
			<tr>
				<th scope="row">Title</th>
				<td>Publication's title</td>
				<td>NVarChar(500)</td>
			</tr>
			<tr>
				<th scope="row">PubNumber</th>
				<td>The publication number. (I am not sure what is the exact meaning of publication number in the real world.)</td>
				<td>NVarChar(100)</td>
			</tr>
			<tr>
				<th scope="row">HTMLLink</th>
				<td>Contains a link the HTML version of the publication (if the publication has HTML version).</td>
				<td>NVarChar(2000)</td>
			</tr>
			<tr>
				<th scope="row">DocumentCounter</th>
				<td>How many documents are connected to the publication</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">DocId01</th>
				<td rowspan="10">Id of the first attached document. If no documents are attached all the DocId fields will be null. If two documents are attached the fields from DocId03 to DocId10 will be null.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">DocId02</th>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">DocId03</th>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">DocId04</th>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">DocId05</th>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">DocId06</th>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">DocId07</th>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">DocId08</th>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">DocId09</th>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">DocId10</th>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">Language</th>
				<td>Publication's language. When empty it is usually English.</td>
				<td>NVarChar(50)</td>
			</tr>
			<tr>
				<th scope="row">StockStatus</th>
				<td>Currently the possible values are: AVAILABLE; BACK_ORDERED; NOT_AVAILABLE; or OUT_OF_PRINT</td>
				<td>NVarChar(50)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="documentsview">DocumentsView Table</h3>
	<table summary="Documents View - Wage and Hour Publications System (WHPS)">
		<caption>Documents View</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">DocumentId</th>
				<td>Unique document id.</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">PublicationId</th>
				<td>Which publication this document is assigned to. This field is not unique!</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">DocumentType</th>
				<td>Document type. For example &lsquo;PDF&rsquo;</td>
				<td>NVarChar(50)</td>
			</tr>
			<tr>
				<th scope="row">Name</th>
				<td>The file name before it was uploaded into the table</td>
				<td>NVarChar(200)</td>
			</tr>
			<tr>
				<th scope="row">FileData</th>
				<td>The binary data of the file.</td>
				<td>VarBinary(max)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h3 id="publicationsview">PublicationsView Table</h3>
	<h4>Documents View - Wage and Hour Publications System (WHPS)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: PublicationId</p>
		<p><span class="mbl-strng">Column Description:</span> Unique publication id.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: Recommended</p>
		<p><span class="mbl-strng">Column Description:</span> A publication can be marked and visible as recommended/featured on the ordering interface. 1 - recommended publication, 0 - none recommended publication.</p>
		<p><span class="mbl-strng">Data Type:</span> bit</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: RecommendedImage</p>
		<p><span class="mbl-strng">Column Description:</span> The image show to the publication it is recommended</p>
		<p><span class="mbl-strng">Data Type:</span> VarBinary(max)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: Title</p>
		<p><span class="mbl-strng">Column Description:</span> Publication's title</p>
		<p><span class="mbl-strng">Data Type:</span> NVarChar(500)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: PubNumber</p>
		<p><span class="mbl-strng">Column Description:</span> The publication number. (I am not sure what is the exact meaning of publication number in the real world.)</p>
		<p><span class="mbl-strng">Data Type:</span> NVarChar(100)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: HTMLLink</p>
		<p><span class="mbl-strng">Column Description:</span> Contains a link the HTML version of the publication (if the publication has HTML version).</p>
		<p><span class="mbl-strng">Data Type:</span> NVarChar(2000)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: DocumentCounter</p>
		<p><span class="mbl-strng">Column Description:</span> How many documents are connected to the publication</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: DocId01</p>
		<p><span class="mbl-strng">Column Description:</span> Id of the first attached document. If no documents are attached all the DocId fields will be null. If two documents are attached the fields from DocId03 to DocId10 will be null.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: DocId02</p>
		<p><span class="mbl-strng">Column Description:</span> Id of the first attached document. If no documents are attached all the DocId fields will be null. If two documents are attached the fields from DocId03 to DocId10 will be null.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: DocId03</p>
		<p><span class="mbl-strng">Column Description:</span> Id of the first attached document. If no documents are attached all the DocId fields will be null. If two documents are attached the fields from DocId03 to DocId10 will be null.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: DocId04</p>
		<p><span class="mbl-strng">Column Description:</span> Id of the first attached document. If no documents are attached all the DocId fields will be null. If two documents are attached the fields from DocId03 to DocId10 will be null.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: DocId05</p>
		<p><span class="mbl-strng">Column Description:</span> Id of the first attached document. If no documents are attached all the DocId fields will be null. If two documents are attached the fields from DocId03 to DocId10 will be null.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: DocId06</p>
		<p><span class="mbl-strng">Column Description:</span> Id of the first attached document. If no documents are attached all the DocId fields will be null. If two documents are attached the fields from DocId03 to DocId10 will be null.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: DocId07</p>
		<p><span class="mbl-strng">Column Description:</span> Id of the first attached document. If no documents are attached all the DocId fields will be null. If two documents are attached the fields from DocId03 to DocId10 will be null.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: DocId08</p>
		<p><span class="mbl-strng">Column Description:</span> Id of the first attached document. If no documents are attached all the DocId fields will be null. If two documents are attached the fields from DocId03 to DocId10 will be null.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: DocId09</p>
		<p><span class="mbl-strng">Column Description:</span> Id of the first attached document. If no documents are attached all the DocId fields will be null. If two documents are attached the fields from DocId03 to DocId10 will be null.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: DocId10</p>
		<p><span class="mbl-strng">Column Description:</span> Id of the first attached document. If no documents are attached all the DocId fields will be null. If two documents are attached the fields from DocId03 to DocId10 will be null.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: Language</p>
		<p><span class="mbl-strng">Column Description:</span> Publication's language. When empty it is usually English.</p>
		<p><span class="mbl-strng">Data Type:</span> NVarChar(50)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: StockStatus</p>
		<p><span class="mbl-strng">Column Description:</span> Currently the possible values are: AVAILABLE; BACK_ORDERED; NOT_AVAILABLE; or OUT_OF_PRINT</p>
		<p><span class="mbl-strng">Data Type:</span> NVarChar(50)</p>		
	</div>

	<hr />
	<h3 id="documentsview">DocumentsView Table</h3>
	<h4>Documents View - Wage and Hour Publications System (WHPS)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: DocumentId</p>
		<p><span class="mbl-strng">Column Description:</span> Unique document id.</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: PublicationId</p>
		<p><span class="mbl-strng">Column Description:</span> Which publication this document is assigned to. This field is not unique!</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: DocumentType</p>
		<p><span class="mbl-strng">Column Description:</span> Document type. For example &lsquo;PDF&rsquo;</p>
		<p><span class="mbl-strng">Data Type:</span> NVarChar(50)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: Name</p>
		<p><span class="mbl-strng">Column Description:</span> The file name before it was uploaded into the table</p>
		<p><span class="mbl-strng">Data Type:</span> NVarChar(200)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: FileData</p>
		<p><span class="mbl-strng">Column Description:</span> The binary data of the file.</p>
		<p><span class="mbl-strng">Data Type:</span> VarBinary(max)</p>		
	</div>
</div>
