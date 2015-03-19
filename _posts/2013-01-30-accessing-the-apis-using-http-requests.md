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
<h2><a name="requesting">Requesting Dataset Metadata</a></h2>
<h3>Authentication</h3>
This method does not require authentication.  An API key is <strong>not</strong> required.
<h3>Arguments</h3>
$metadata (required)
<h3 >Example URL</h3>
<p>Read the metadata for the FORMS dataset</p>
<pre><code>http://api.dol.gov/V1/FORMS/$metadata</code></pre>
<h3 >HTTP Error Codes</h3>
<table>
    <thead>
    <tr>
        <th>Error Code</th>
        <th>Error Text</th>
        <th>Comments</th>
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
<h3 >Comments</h3>
None
</div>
<hr>
<div class='post_content_dataset'>
    <div class='col12 pad1y'>
        <h2 ><a name="reading">Reading a table</a></h2>
        <h3 >Authentication</h3>
        This method does not require authentication.
        <h3 >Arguments</h3>
        None
        <h3 >Example URL</h3>
        <p>Read Agencies table from the FORMS dataset</p>
        <pre><code>http://api.dol.gov/V1/FORMS/Agencies</code></pre>
        <h3 >HTTP Error Codes</h3>
        <table>
            <thead>
            <tr>
                <th>Error Code</th>
                <th>Error Text</th>
                <th>Comments</th>
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
        <h3 >Comments</h3>
        A maximum of 100 records will be returned
    </div>
</div>
<hr>
<div class='post_content_dataset'>
    <div class='col12 pad2y'>
        <h2 ><a name="limit">Limit the number of results returned</a></h2>
        <h3 >Authentication</h3>
        This method does not require authentication.
        <h3 >Arguments</h3>
        $top (required)
        <h3 >Example URL</h3>
        <p>Read the first 10 records of the Agencies table from the FORMS dataset</p>
        <pre><code>http://api.dol.gov/V1/FORMS/Agencies?$top=10</code></pre>
        <h3 >HTTP Error Codes</h3>
        <table>
            <thead>
            <tr>
                <th>Error Code</th>
                <th>Error Text</th>
                <th>Comments</th>
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
        <h3 >Comments</h3>
        A maximum of 100 records will be returned
    </div>
</div>
<hr>
<div class='post_content_dataset'>
    <div class='col12 pad1y'>
        <h2 ><a name="skip">Skip a Number of Results</a></h2>
        <h3 >Authentication</h3>
        This method does not require authentication
        <h3 >Arguments</h3>
        $skip (required)
        <h3 >Example URL</h3>
        <p>Read the Agencies table from the FORMS dataset, skipping the first 5 results</p>
        <pre><code>http://api.dol.gov/V1/FORMS/Agencies?$skip=5</code></pre>
        <h3 >HTTP Error Codes</h3>
        <table>
            <thead>
            <tr>
                <th>Error Code</th>
                <th>Error Text</th>
                <th>Comments</th>
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
        <h3 >Comments</h3>
        A maximum of 100 records will be returned
    </div>
</div>
<hr>
<div class='post_content_dataset'>
    <div class='col12 pad1y'>
        <h2 ><a name="pagination">Data Pagination by Combining Top and Skip</a></h2>
        <h3 >Authentication</h3>
        This method does not require authentication
        <h3 >Arguments</h3>
        $top (required)<br />
        $skip (required)
        <h3 >Example URL</h3>
        <p>Read records 21-30 from the Agencies table in FORMS dataset</p>
        <pre><code>http://api.dol.gov/V1/FORMS/Agencies?$skip=20&amp;$top=10</code></pre>
        <h3 >HTTP Error Codes</h3>
        <table>
            <thead>
            <tr>
                <th>Error Code</th>
                <th>Error Text</th>
                <th>Comments</th>
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
        <h3 >Comments</h3>
        A maximum of 100 records will be returned
    </div>
</div>
<hr>
<div class='post_content_dataset'>
    <div class='col12 pad1y'>
        <h2 ><a name="select">Selecting Specific Columns</a></h2>
        <h3 >Authentication</h3>
        This method does not require authentication
        <h3 >Arguments</h3>
        $select
        <h3 >Example URL</h3>
        <p>Read records from the AgencyForms table in FORMS dataset, returning only the FormNumber and Title columns.</p>
        <pre><code>http://api.dol.gov/V1/FORMS/AgencyForms?$select=FormNumber,Title</code></pre>
        <h3 >HTTP Error Codes</h3>
        <table>
            <thead>
            <tr>
                <th>Error Code</th>
                <th>Error Text</th>
                <th>Comments</th>
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
        <h3 >Comments</h3>
        A maximum of 100 records will be returned
    </div>
</div>
<hr>
<div class='post_content_dataset'>
    <div class='col12 pad1y'>
        <h2 ><a name="sort">Sorting Data</a></h2>
        <h3 >Authentication</h3>
        This method does not require authentication
        <h3 >Arguments</h3>
        $orderby
        <h3 >Example URLs</h3>
        <p>Read records from the AgencyForms table in FORMS dataset, sorting by the FormNumber column.</p>
        <pre><code>http://api.dol.gov/V1/FORMS/AgencyForms?$orderby=FormNumber</code></pre>
        <p>To sort the column by desc order, add desc after the column name </p>
        <pre><code>http://api.dol.gov/V1/FORMS/AgencyForms?$orderby=FormNumber desc</code></pre>
        <h3 >HTTP Error Codes</h3>
        <table>
            <thead>
            <tr>
                <th>Error Code</th>
                <th>Error Text</th>
                <th>Comments</th>
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
        <h3 >Comments</h3>
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
        <h2 ><a name="filter_single">Filtering Data - Single Filter</a></h2>
        <h3 >Authentication</h3>
        This method does not require authentication
        <h3 >Arguments</h3>
        $filter
        <h3 >Comparison Keywords</h3>
        eq – Equal to<br />
        ne – Not Equal to<br />
        gt – Greater than<br />
        lt – Less than<br />
        ge – Greater than or equal to<br />
        le – Less than or equal to
        <h3 >Example URL</h3>
        <p>Read records from the AgencyForms table in FORMS dataset, returning only the records where the AgencyId is equal to 'MSHA'.</p>
        <pre><code>http://api.dol.gov/V1/FORMS/AgencyForms?$filter=AgencyId eq 'MSHA'</code></pre>
        <h3 >Example Response</h3>
        [response]
        <h3 >HTTP Error Codes</h3>
        <table>
            <thead>
            <tr>
                <th>Error Code</th>
                <th>Error Text</th>
                <th>Comments</th>
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
        <h3 >Comments</h3>
        A maximum of 100 records will be returned
    </div>
</div>
<hr>
<div class='post_content_dataset'>
    <div class='col12 pad1y'>
        <h2 ><a name="filter_multi">Filtering Data - Multiple Filters</a></h2>
        <h3 >Authentication</h3>
        This method does not require authentication
        <h3 >Arguments</h3>
        $filter (required)<br />
        and<br />
        or
        <h3 >Comparison Keywords</h3>
        eq – Equal to<br />
        ne – Not Equal to<br />
        gt – Greater than<br />
        lt – Less than<br />
        ge – Greater than or equal to<br />
        le – Less than or equal to
        <h3 >Example URL</h3>
        <p>Read records from the AgencyForms table in FORMS dataset where the AgencyId is equal to MSHA and the Title is equal to 'Legal Identity Report'.</p>
        <pre><code>http://api.dol.gov/V1/FORMS/AgencyForms?$filter=(AgencyId eq 'MSHA') and (Title eq 'Legal Identity Report')</code></pre>
        <h3 >HTTP Error Codes</h3>
        <table>
            <thead>
            <tr>
                <th>Error Code</th>
                <th>Error Text</th>
                <th>Comments</th>
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
        <h3 >Comments</h3>
        A maximum of 100 records will be returned
    </div>
</div>