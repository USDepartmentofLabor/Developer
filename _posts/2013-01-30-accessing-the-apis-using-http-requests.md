---
layout: page
title: Accessing the APIs Using HTTP Requests
created: 1359565589
---

- [Requesting Dataset Metadata](#requesting)
- [Reading a table](#reading)
- [Limit the number of results returned](#limit)
- [Skip a Number of Results](#skip)
- [Data Pagination by Combining Top and Skip](#pagination)
- [Selecting Specific Columns](#select)
- [Sorting Data](#sort)
- [Filtering Data - Single Filter](#filter_single)
- [Filtering Data - Multiple Filters](#filter_multi)

<div class="post_content_dataset">
	<h2 class="anchorlinks" id="requesting">Requesting Dataset Metadata</h2>
	<h3>Authentication</h3>
	<p>This method does not require authentication.  An API key is <strong>not</strong> required.</p>
	<h3>Arguments</h3>
	<p>$metadata (required)</p>
	<h3>Example URL</h3>
	<p>Read the metadata for the FORMS dataset</p>
	<pre><code>http://api.dol.gov/V1/FORMS/$metadata</code></pre>
	<h3>HTTP Error Codes</h3>
	<table summary="Requesting Dataset Metadata - Accessing the APIs Using HTTP Requests">
		<caption>Requesting Dataset Metadata - HTTP Error Codes</caption>
		<thead>
			<tr>
				<th scope="col">Error Code</th>
				<th scope="col">Error Text</th>
				<th scope="col">Comments</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>404</td>
				<td>Resource not found</td>
				<td>The dataset name or table name is invalid</td>
			</tr>
		</tbody>
	</table>
	<h3>Comments</h3>
	None
</div>
<hr>
<div class='post_content_dataset'>
    <div class='col12 pad1y'>
        <h2 class="anchorlinks" id="reading">Reading a table</h2>
        <h3>Authentication</h3>
        <p>This method does not require authentication.</p>
        <h3>Arguments</h3>
        <p>None</p>
        <h3>Example URL</h3>
        <p>Read Agencies table from the FORMS dataset</p>
        <pre><code>http://api.dol.gov/V1/FORMS/Agencies</code></pre>
        <h3>HTTP Error Codes</h3>
        <table summary="Reading a table - Accessing the APIs Using HTTP Requests">
			<caption>Reading a Table - HTTP Error Codes</caption>
           <thead>
				<tr>
					<th scope="col">Error Code</th>
					<th scope="col">Error Text</th>
					<th scope="col">Comments</th>
				</tr>
            </thead>
            <tbody>
				<tr>
					<td>404</td>
					<td>Resource not found</td>
					<td>The dataset name or table name is invalid</td>
				</tr>
            </tbody>
        </table>
        <h3>Comments</h3>
        A maximum of 100 records will be returned
    </div>
</div>
<hr>
<div class='post_content_dataset'>
    <div class='col12 pad2y'>
        <h2 class="anchorlinks" id="limit">Limit the number of results returned</h2>
        <h3>Authentication</h3>
        <p>This method does not require authentication.</p>
        <h3>Arguments</h3>
        <p>$top (required)</p>
        <h3>Example URL</h3>
        <p>Read the first 10 records of the Agencies table from the FORMS dataset</p>
        <pre><code>http://api.dol.gov/V1/FORMS/Agencies?$top=10</code></pre>
        <h3>HTTP Error Codes</h3>
        <table summary="Limit the number of results returned - Accessing the APIs Using HTTP Requests">
			<caption>Limit the Number of Results Returned - HTTP Error Codes</caption>
			<thead>
				<tr>
					<th scope="col">Error Code</th>
					<th scope="col">Error Text</th>
					<th scope="col">Comments</th>
				</tr>
            </thead>
            <tbody>
				<tr>
					<td>400</td>
					<td>Bad Request</td>
					<td>The query contains an error. Read returned value for specific error.</td>
				</tr>
				<tr>
					<td>404</td>
					<td>Resource not found</td>
					<td>The dataset name or table name is invalid</td>
				</tr>
            </tbody>
        </table>
        <h3>Comments</h3>
        A maximum of 100 records will be returned
    </div>
</div>
<hr>
<div class='post_content_dataset'>
    <div class='col12 pad1y'>
        <h2 class="anchorlinks" id="skip">Skip a Number of Results</h2>
        <h3>Authentication</h3>
        <p>This method does not require authentication</p>
        <h3>Arguments</h3>
        <p>$skip (required)</p>
        <h3>Example URL</h3>
        <p>Read the Agencies table from the FORMS dataset, skipping the first 5 results</p>
        <pre><code>http://api.dol.gov/V1/FORMS/Agencies?$skip=5</code></pre>
        <h3>HTTP Error Codes</h3>
        <table summary="Skip a Number of Results - Accessing the APIs Using HTTP Requests">
			<caption>Skip a Number of Results - HTTP Error Codes</caption>
			<thead>
				<tr>
					<th scope="col">Error Code</th>
					<th scope="col">Error Text</th>
					<th scope="col">Comments</th>
				</tr>
            </thead>
            <tbody>
				<tr>
					<td>400</td>
					<td>Bad Request</td>
					<td>The query contains an error. Read returned value for specific error.</td>
				</tr>
				<tr>
					<td>404</td>
					<td>Resource not found</td>
					<td>The dataset name or table name is invalid</td>
				</tr>
            </tbody>
        </table>
        <h3>Comments</h3>
        A maximum of 100 records will be returned
    </div>
</div>
<hr>
<div class='post_content_dataset'>
    <div class='col12 pad1y'>
        <h2 class="anchorlinks" id="pagination">Data Pagination by Combining Top and Skip</h2>
        <h3>Authentication</h3>
        <p>This method does not require authentication</p>
        <h3>Arguments</h3>
        <p>$top (required)</p>
        <p>$skip (required)</p>
        <h3>Example URL</h3>
        <p>Read records 21-30 from the Agencies table in FORMS dataset</p>
        <pre><code>http://api.dol.gov/V1/FORMS/Agencies?$skip=20&amp;$top=10</code></pre>
        <h3>HTTP Error Codes</h3>
        <table summary="Data Pagination by Combining Top and Skip - Accessing the APIs Using HTTP Requests">
			<caption>Data Pagination by Combining Top and Skip - HTTP Error Codes</caption>
			<thead>
				<tr>
					<th scope="col">Error Code</th>
					<th scope="col">Error Text</th>
					<th scope="col">Comments</th>
				</tr>
            </thead>
            <tbody>
				<tr>
					<td>400</td>
					<td>Bad Request</td>
					<td>The query contains an error. Read returned value for specific error.</td>
				</tr>
				<tr>
					<td>404</td>
					<td>Resource not found</td>
					<td>The dataset name or table name is invalid</td>
				</tr>
            </tbody>
        </table>
        <h3>Comments</h3>
        A maximum of 100 records will be returned
    </div>
</div>
<hr>
<div class='post_content_dataset'>
    <div class='col12 pad1y'>
        <h2 class="anchorlinks" id="select">Selecting Specific Columns</h2>
        <h3>Authentication</h3>
        <p>This method does not require authentication</p>
        <h3>Arguments</h3>
        <p>$select</p>
        <h3>Example URL</h3>
        <p>Read records from the AgencyForms table in FORMS dataset, returning only the FormNumber and Title columns.</p>
        <pre><code>http://api.dol.gov/V1/FORMS/AgencyForms?$select=FormNumber,Title</code></pre>
        <h3>HTTP Error Codes</h3>
        <table summary="Selecting Specific Columns - Accessing the APIs Using HTTP Requests">
			<caption>Selecting Specific Columns - HTTP Error Codes</caption>
			<thead>
				<tr>
					<th scope="col">Error Code</th>
					<th scope="col">Error Text</th>
					<th scope="col">Comments</th>
				</tr>
            </thead>
            <tbody>
				<tr>
					<td>400</td>
					<td>Bad Request</td>
					<td>The query contains an error. Read returned value for specific error.</td>
				</tr>
				<tr>
					<td>404</td>
					<td>Resource not found</td>
					<td>The dataset name or table name is invalid</td>
				</tr>
            </tbody>
        </table>
        <h3>Comments</h3>
        A maximum of 100 records will be returned
    </div>
</div>
<hr>
<div class='post_content_dataset'>
    <div class='col12 pad1y'>
        <h2 class="anchorlinks" id="sort">Sorting Data</h2>
        <h3>Authentication</h3>
        <p>This method does not require authentication</p>
        <h3>Arguments</h3>
        <p>$orderby</p>
        <h3>Example URLs</h3>
        <p>Read records from the AgencyForms table in FORMS dataset, sorting by the FormNumber column.</p>
        <pre><code>http://api.dol.gov/V1/FORMS/AgencyForms?$orderby=FormNumber</code></pre>
        <p>To sort the column by desc order, add desc after the column name </p>
        <pre><code>http://api.dol.gov/V1/FORMS/AgencyForms?$orderby=FormNumber desc</code></pre>
        <h3>HTTP Error Codes</h3>
        <table summary="Sorting Data - Accessing the APIs Using HTTP Requests">
			<caption>Sorting Data - HTTP Error Codes</caption>
			<thead>
				<tr>
					<th scope="col">Error Code</th>
					<th scope="col">Error Text</th>
					<th scope="col">Comments</th>
				</tr>
            </thead>
            <tbody>
				<tr>
					<td>400</td>
					<td>Bad Request</td>
					<td>The query contains an error. Read returned value for specific error.</td>
				</tr>
				<tr>
					<td>404</td>
					<td>Resource not found</td>
					<td>The dataset name or table name is invalid</td>
				</tr>
            </tbody>
        </table>
        <h3>Comments</h3>
        <ul>
            <li>Ascending is the default order.</li>
            <li>A maximum of 100 records will be returned</li>
            <li>More than one column can be specified. Separate column names with commas.</li>
        </ul>
    </div>
</div>
<hr>
<div class='post_content_dataset'>
    <div class='col12 pad1y'>
        <h2 class="anchorlinks" id="filter_single">Filtering Data - Single Filter</h2>
        <h3>Authentication</h3>
        <p>This method does not require authentication</p>
        <h3>Arguments</h3>
        <p>$filter</p>
        <h3>Comparison Keywords</h3>
		<ul>
			<p>eq – Equal to</li>
			<p>ne – Not Equal to</li>
			<p>gt – Greater than</li>
			<p>lt – Less than</li>
			<p>ge – Greater than or equal to</li>
			<p>le – Less than or equal to</li>
		</ul>	
        <h3>Example URL</h3>
        <p>Read records from the AgencyForms table in FORMS dataset, returning only the records where the AgencyId is equal to 'MSHA'.</p>
        <pre><code>http://api.dol.gov/V1/FORMS/AgencyForms?$filter=AgencyId eq 'MSHA'</code></pre>
        <h3>Example Response</h3>
        <p>[response]</p>
        <h3>HTTP Error Codes</h3>
        <table summary="Filtering Data - Single Filter - Accessing the APIs Using HTTP Requests">
			<caption>Filtering Data - Single Filter - HTTP Error Codes</caption>
			<thead>
				<tr>
					<th scope="col">Error Code</th>
					<th scope="col">Error Text</th>
					<th scope="col">Comments</th>
				</tr>
            </thead>
            <tbody>
				<tr>
					<td>400</td>
					<td>Bad Request</td>
					<td>The query contains an error. Read returned value for specific error.</td>
				</tr>
				<tr>
					<td>404</td>
					<td>Resource not found</td>
					<td>The dataset name or table name is invalid</td>
				</tr>
            </tbody>
        </table>
        <h3>Comments</h3>
        A maximum of 100 records will be returned
    </div>
</div>
<hr>
<div class='post_content_dataset'>
    <div class='col12 pad1y'>
        <h2 class="anchorlinks" id="filter_multi">Filtering Data - Multiple Filters</h2>
        <h3>Authentication</h3>
        </p>This method does not require authentication</p>
        <h3>Arguments</h3>
		<ul>
			<li>$filter (required)</li>
			<li>and</li>
			<li>or</lip>
		</ul>	
        <h3>Comparison Keywords</h3>
		<ul>
			<li>eq – Equal to</li>
			<li>ne – Not Equal to</li>
			<li>gt – Greater than</li>
			<li>lt – Less than</li>
			<li>ge – Greater than or equal to</li>
			<li>le – Less than or equal to</li>
		</ul>	
        <h3>Example URL</h3>
        <p>Read records from the AgencyForms table in FORMS dataset where the AgencyId is equal to MSHA and the Title is equal to 'Legal Identity Report'.</p>
        <pre><code>http://api.dol.gov/V1/FORMS/AgencyForms?$filter=(AgencyId eq 'MSHA') and (Title eq 'Legal Identity Report')</code></pre>
        <h3>HTTP Error Codes</h3>
        <table summary="Filtering Data - Multiple Filters - Accessing the APIs Using HTTP Requests">
			<caption>Filtering Data - Multiple Filters - HTTP Error Codes</caption>
			<thead>
				<tr>
					<th scope="col">Error Code</th>
					<th scope="col">Error Text</th>
					<th scope="col">Comments</th>
				</tr>
            </thead>
            <tbody>
				<tr>
					<td>400</td>
					<td>Bad Request</td>
					<td>The query contains an error. Read returned value for specific error.</td>
				</tr>
				<tr>
					<td>404</td>
					<td>Resource not found</td>
					<td>The dataset name or table name is invalid</td>
				</tr>
            </tbody>
        </table>
        <h3>Comments</h3>
        <p>A maximum of 100 records will be returned</p>
    </div>
</div>