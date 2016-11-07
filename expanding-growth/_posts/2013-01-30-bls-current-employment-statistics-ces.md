---
layout: post
title: Current Employment Statistics (CES)
created: 1359575092
description: Each month the Current Employment Statistics (CES) program surveys about 141,000 businesses and government agencies, representing approximately 486,000 individual worksites, in order to provide detailed industry data on employment, hours, and earnings of workers on nonfarm payrolls.
---

<div class="force_wrap apiurl">
<p>http://api.dol.gov/V1/Statistics/CES</p>
</div>

<p>Each month the Current Employment Statistics (CES) program surveys about 141,000 businesses and government agencies, representing approximately 486,000 individual worksites, in order to provide detailed industry data on employment, hours, and earnings of workers on nonfarm payrolls.</p>

<p>More information and details about the data provided can be found at <a href="http://www.bls.gov/ces">http://www.bls.gov/ces</a></p>


<a href ="http://api.dol.gov/V1/Statistics/CES/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=BLS%20Current%20Employment%20Statistics%20Survey%20(CES)" class="button radius button_dataset">Explore This Data</a>


## Dataset Tables 
 
<div class="dsktp_tbl"> 
	<ul>
		<li><a href="#CE_DATA_PUB">CE_DATA_PUB</a></li>
		<li><a href="#CE_DATATYYPE">CE_DATATYYPE</a></li>
		<li><a href="#CE_FOOTNOTE">CE_FOOTNOTE</a></li>
		<li><a href="#CE_INDUSTRY">CE_INDUSTRY</a></li>
		<li><a href="#CE_SEASONAL">CE_SEASONAL</a></li>
		<li><a href="#CE_SERIES">CE_SERIES</a></li>
		<li><a href="#CE_SUPERSECTOR">CE_SUPERSECTOR</a></li>
	</ul>
</div>

<div class="mbl_tbl">
	<ul>
		<li><a href="#CE_DATA_PUB_mbl">CE_DATA_PUB</a></li>
		<li><a href="#CE_DATATYYPE_mbl">CE_DATATYYPE</a></li>
		<li><a href="#CE_FOOTNOTE_mbl">CE_FOOTNOTE</a></li>
		<li><a href="#CE_INDUSTRY_mbl">CE_INDUSTRY</a></li>
		<li><a href="#CE_SEASONAL_mbl">CE_SEASONAL</a></li>
		<li><a href="#CE_SERIES_mbl">CE_SERIES</a></li>
		<li><a href="#CE_SUPERSECTOR_mbl">CE_SUPERSECTOR</a></li>
	</ul>
</div>

<div class="dsktp_tbl">
	<h3 id="CE_DATA_PUB" tabindex="-1">CU_DATA_PUB Table</h3>
	<table summary="Data Pub - Current Employment Statistics (CES)">
		<caption>Data Pub</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">SERIES_ID</th>
				<td>Series Identifier Code</td>
				<td>varchar (17)</td>
			</tr>
			<tr>
				<th scope="row">YEAR</th>
				<td>Data Observation Year</td>
				<td>varchar (4)</td>
			</tr>
			<tr>
				<th scope="row">PERIOD</th>
				<td>Data Observation Period (Month, Quarter, Semi-Annual, Annual)</td>
				<td>varchar (3)</td>
			</tr>
			<tr>
				<th scope="row">VALUE</th>
				<td>Data Observation/Estimate</td>
				<td>varchar (12)</td>
			</tr>
			<tr>
				<th scope="row">FOOTNOTE_CODES</th>
				<td>Footnote Codes</td>
				<td>varchar (10)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="CE_DATATYYPE" tabindex="-1">CE_DATATYYPE Table</h3>
	<table summary="Data Type - Current Employment Statistics (CES)">
		<caption>Data Type</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">DATA_TYPE_CODE</th>
				<td>Datatype Code</td>
				<td>varchar (2)</td>
			</tr>
			<tr>
				<th scope="row">DATA_TYPE_TEXT</th>
				<td>Datatype Description</td>
				<td>varchar (100)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="CE_FOOTNOTE" tabindex="-1">CE_FOOTNOTE Table</h3>
	<table summary="Footnote - Current Employment Statistics (CES)">
		<caption>Footnote</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">FOOTNOTE_CODE</th>
				<td>Footnote Code</td>
				<td>varchar (1)</td>
			</tr>
			<tr>
				<th scope="row">FOOTNOTE_TEXT</th>
				<td>Footnote Code Description</td>
				<td>varchar (100)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="CE_INDUSTRY" tabindex="-1">CE_INDUSTRY Table</h3>
	<table summary="Industry - Current Employment Statistics (CES)">
		<caption>Industry</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">INDUSTRY_CODE</th>
				<td>Industry Code</td>
				<td>varchar (8)</td>
			</tr>
			<tr>
				<th scope="row">NAICS_CODE</th>
				<td>NAICS Code</td>
				<td>varchar (13)</td>
			</tr>
			<tr>
				<th scope="row">PUBLISHING_STATUS</th>
				<td>Publishing Status</td>
				<td>varchar (2)</td>
			</tr>
			<tr>
				<th scope="row">INDUSTRY_NAME</th>
				<td>Industry Name</td>
				<td>varchar (150)</td>
			</tr>
			<tr>
				<th scope="row">DISPLAY_LEVEL</th>
				<td>Display Indent Level For Query Tool</td>
				<td>varchar (2)</td>
			</tr>
			<tr>
				<th scope="row">SELECTABLE</th>
				<td>Code To Allow/Disallow Query Tool Selection</td>
				<td>varchar (1)</td>
			</tr>
			<tr>
				<th scope="row">SORT_SEQUENCE</th>
				<td>Data Query Tool Widget Sorting</td>
				<td>varchar (5)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="CE_SEASONAL" tabindex="-1">CE_SEASONAL Table</h3>
	<table summary="Seasonal - Current Employment Statistics (CES)">
		<caption>Seasonal</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">SEASONAL</th>
				<td>Seasonally adjusted code (S, U)</td>
				<td>varchar (1)</td>
			</tr>
			<tr>
				<th scope="row">SEASONAL_TEXT</th>
				<td>Seasonal Description</td>
				<td>varchar (30)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="CE_SERIES" tabindex="-1">CE_SERIES Table</h3>
	<table summary="Series - Current Employment Statistics (CES)">
		<caption>Series</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">SERIES_ID</th>
				<td>Series Identifier Code</td>
				<td>varchar (17)</td>
			</tr>
			<tr>
				<th scope="row">SUPERSECTOR_CODE</th>
				<td>Supersector Code</td>
				<td>varchar (2)</td>
			</tr>
			<tr>
				<th scope="row">INDUSTRY_CODE</th>
				<td>Industry Code</td>
				<td>varchar (8)</td>
			</tr>
			<tr>
				<th scope="row">DATA_TYPE_CODE</th>
				<td>Datatype Code</td>
				<td>varchar (2)</td>
			</tr>
			<tr>
				<th scope="row">SEASONAL</th>
				<td>Seasonal Code</td>
				<td>varchar (1)</td>
			</tr>
			<tr>
				<th scope="row">FOOTNOTE_CODES</th>
				<td>Footnote Code</td>
				<td>varchar (10)</td>
			</tr>
			<tr>
				<th scope="row">BEGIN_YEAR</th>
				<td>Begin Year Of Series</td>
				<td>varchar (4)</td>
			</tr>
			<tr>
				<th scope="row">BEGIN_PERIOD</th>
				<td>Begin Period Of Series</td>
				<td>varchar (3)</td>
			</tr>
			<tr>
				<th scope="row">END_YEAR</th>
				<td>End Year Of Series</td>
				<td>varchar (4)</td>
			</tr>
			<tr>
				<th scope="row">END_PERIOD</th>
				<td>End Period Of Series</td>
				<td>varchar (3)</td>
			</tr>
		</tbody>
	</table>

	<h3 id="CE_SUPERSECTOR" tabindex="-1">CE_SUPERSECTOR Table</h3>
	<table summary="Super sector - Current Employment Statistics (CES)">
		<caption>Supersector</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">SUPERSECTOR_CODE</th>
				<td>Supersector Code</td>
				<td>varchar (2)</td>
			</tr>
			<tr>
				<th scope="row">SUPERSECTOR_NAME</th>
				<td>Supersector Description</td>
				<td>varchar (100)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h3 id="CE_DATA_PUB_mbl" tabindex="-1">CE_DATA_PUB Table</h3>
	<h4>Data Pub - Current Employment Statistics (CES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: SERIES_ID</p>
		<p><span class="mbl-strng">Column Description:</span> Series Identifier Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (17)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: YEAR</p>
		<p><span class="mbl-strng">Column Description:</span> Data Observation Year</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (4)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: PERIOD</p>
		<p><span class="mbl-strng">Column Description:</span> Data Observation Period (Month, Quarter, Semi-Annual, Annual)</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (3)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: VALUE</p>
		<p><span class="mbl-strng">Column Description:</span> Data Observation/Estimate</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (12)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: FOOTNOTE_CODES</p>
		<p><span class="mbl-strng">Column Description:</span> Footnote Codes</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>

	<hr />
	<h3 id="CE_DATATYYPE_mbl" tabindex="-1">CE_DATATYYPE Table</h3>
	<h4>Data Type - Current Employment Statistics (CES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: DATA_TYPE_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Datatype Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (2)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: DATA_TYPE_TEXT</p>
		<p><span class="mbl-strng">Column Description:</span> Datatype Description</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (100)</p>		
	</div>

	<hr />
	<h3 id="CE_FOOTNOTE_mbl" tabindex="-1">CE_FOOTNOTE Table</h3>
	<h4>Footnote - Current Employment Statistics (CES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: FOOTNOTE_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Footnote  Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: FOOTNOTE_TEXT</p>
		<p><span class="mbl-strng">Column Description:</span> Footnote Code Description</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (100)</p>		
	</div>

	<hr />
	<h3 id="CE_INDUSTRY_mbl" tabindex="-1">CE_INDUSTRY Table</h3>
	<h4>Industry - Current Employment Statistics (CES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: INDUSTRY_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Industry Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (8)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: NAICS_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> NAICS Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (13)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: PUBLISHING_STATUS</p>
		<p><span class="mbl-strng">Column Description:</span> Publishing Status</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (2)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: INDUSTRY_NAME</p>
		<p><span class="mbl-strng">Column Description:</span> Industry Name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (150)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: DISPLAY_LEVEL</p>
		<p><span class="mbl-strng">Column Description:</span> Display Indent Level For Query Tool</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (2)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: SELECTABLE</p>
		<p><span class="mbl-strng">Column Description:</span> Code To Allow/Disallow Query Tool Selection</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: SORT_SEQUENCE</p>
		<p><span class="mbl-strng">Column Description:</span> Data Query Tool Widget Sorting</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (5)</p>		
	</div>

	<hr />
	<h3 id="CE_SEASONAL_mbl" tabindex="-1">CE_SEASONAL Table</h3>
	<h4>Seasonal - Current Employment Statistics (CES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: SEASONAL</p>
		<p><span class="mbl-strng">Column Description:</span> Seasonally adjusted code (S, U)</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: SEASONAL_TEXT</p>
		<p><span class="mbl-strng">Column Description:</span> Seasonal Description</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (30)</p>		
	</div>

	<hr />
	<h3 id="CE_SERIES_mbl" tabindex="-1">CE_SERIES Table</h3>
	<h4>Series - Current Employment Statistics (CES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: SERIES_ID</p>
		<p><span class="mbl-strng">Column Description:</span> Series Identifier Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (17)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: SUPERSECTOR_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Supersector Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (2)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: INDUSTRY_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Industry Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (8)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: DATA_TYPE_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Datatype Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (2)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: SEASONAL</p>
		<p><span class="mbl-strng">Column Description:</span> Seasonal Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (1)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: FOOTNOTE_CODES</p>
		<p><span class="mbl-strng">Column Description:</span> Footnote Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (10)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: BEGIN_YEAR</p>
		<p><span class="mbl-strng">Column Description:</span> Begin Year Of Series</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (4)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: BEGIN_PERIOD</p>
		<p><span class="mbl-strng">Column Description:</span> Begin Period Of Series</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (3)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: END_YEAR</p>
		<p><span class="mbl-strng">Column Description:</span> End Year Of Series</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (4)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: END_PERIOD</p>
		<p><span class="mbl-strng">Column Description:</span> End Period Of Series</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (3)</p>		
	</div>

	<hr />
	<h3 id="CE_SUPERSECTOR_mbl" tabindex="-1">CE_SUPERSECTOR Table</h3>
	<h4>Supersector - Current Employment Statistics (CES)</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: SUPERSECTOR_CODE</p>
		<p><span class="mbl-strng">Column Description:</span> Supersector Code</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (2)</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: SUPERSECTOR_NAME</p>
		<p><span class="mbl-strng">Column Description:</span> Supersector Description</p>
		<p><span class="mbl-strng">Data Type:</span> varchar (100)</p>		
	</div>
</div>
