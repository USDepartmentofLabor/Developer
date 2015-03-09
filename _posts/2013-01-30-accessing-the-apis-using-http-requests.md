---
layout: post
title: Accessing the APIs Using HTTP Requests
created: 1359565589
---

<h2>Requesting Dataset Metadata</h2>

<h3>Authentication</h3>

<p>This method does not require authentication</p>

<h3>Arguments</h3>

<p>$metadata (required)</p>

<h3>Example URL</h3>

<p><a>http://api.dol.gov/V1/FORMS/<strong>$metadata</strong></a><br />
Read the metadata for the FORMS dataset</p>

<h3>HTTP Error Codes</h3>

<p>404: Resource not found<br />
The dataset name is invalid.</p>

<h3>Comments</h3>

<p>None</p>

<h2>Reading a table</h2>

<h3>Authentication</h3>

<p>This method requires authentication. Please refer to <a href="/sdk-documentation/request-authorization">Request Authorization</a>.</p>

<h3>Arguments</h3>

<p>None</p>

<h3>Example URL</h3>

<p><a>http://api.dol.gov/V1/FORMS/Agencies</a><br />
Read Agencies table from the FORMS dataset</p>

<h3>HTTP Error Codes</h3>

<p>401: Request not authorized<br />
An authorization request header was not supplied or was invalid<br />
404: Resource not found<br />
The dataset name or table name is invalid.</p>

<h3>Comments</h3>

<p>A maximum of 100 records will be returned</p>

<h2>Limit the number of results returned</h2>

<h3>Authentication</h3>

<p>This method requires authentication. Please refer to <a href="/sdk-documentation/request-authorization">Request Authorization</a>.</p>

<h3>Arguments</h3>

<p>$top (required)</p>

<h3>Example URL</h3>

<p><a>http://api.dol.gov/V1/FORMS/Agencies?<strong>$top=10</strong></a><br />
Read the first 10 records of the Agencies table from the FORMS dataset</p>

<h3>HTTP Error Codes</h3>

<p>400: Bad Request<br />
The query contains an error. Read returned value for specific error.<br />
401: Request not authorized<br />
An authorization request header was not supplied or was invalid<br />
404: Resource not found<br />
The dataset name or table name is invalid.</p>

<h3>Comments</h3>

<p>A maximum of 100 records will be returned</p>

<h2>Skip a Number of Results</h2>

<h3>Authentication</h3>

<p>This method requires authentication. Please refer to <a href="/sdk-documentation/request-authorization">Request Authorization</a>.</p>

<h3>Arguments</h3>

<p>$skip (required)</p>

<h3>Example URL</h3>

<p><a>http://api.dol.gov/V1/FORMS/Agencies?<strong>$skip=5</strong></a><br />
Read the Agencies table from the FORMS dataset, skipping the first 5 results</p>

<h3>HTTP Error Codes</h3>

<p>400: Bad Request<br />
The query contains an error. Read returned value for specific error.<br />
401: Request not authorized<br />
An authorization request header was not supplied or was invalid<br />
404: Resource not found<br />
The dataset name or table name is invalid.</p>

<h3>Comments</h3>

<p>A maximum of 100 records will be returned</p>

<h2>Data Pagination by Combining Top and Skip</h2>

<h3>Authentication</h3>

<p>This method requires authentication. Please refer to <a href="/sdk-documentation/request-authorization">Request Authorization</a>.</p>

<h3>Arguments</h3>

<p>$top (required)<br />
$skip (required)</p>

<h3>Example URL</h3>

<p><a>http://api.dol.gov/V1/FORMS/Agencies?<strong>$skip=20&amp;$top=10</strong></a><br />
Read records 21-30 from the Agencies table in FORMS dataset</p>

<h3>HTTP Error Codes</h3>

<p>400: Bad Request<br />
The query contains an error. Read returned value for specific error.<br />
401: Request not authorized<br />
An authorization request header was not supplied or was invalid<br />
404: Resource not found<br />
The dataset name or table name is invalid.</p>

<h3>Comments</h3>

<p>A maximum of 100 records will be returned</p>

<h2>Selecting Specific Columns</h2>

<h3>Authentication</h3>

<p>This method requires authentication. Please refer to <a href="/sdk-documentation/request-authorization">Request Authorization</a>.</p>

<h3>Arguments</h3>

<p>$select</p>

<h3>Example URL</h3>

<p><a>http://api.dol.gov/V1/FORMS/AgencyForms?<strong>$select=FormNumber,Title</strong></a><br />
Read records from the AgencyForms table in FORMS dataset, returning only the FormNumber and Title columns.</p>

<h3>HTTP Error Codes</h3>

<p>400: Bad Request<br />
The query contains an error. Read returned value for specific error.<br />
401: Request not authorized<br />
An authorization request header was not supplied or was invalid<br />
404: Resource not found<br />
The dataset name or table name is invalid.</p>

<h3>Comments</h3>

<p>A maximum of 100 records will be returned</p>

<h2>Sorting Data</h2>

<h3>Authentication</h3>

<p>This method requires authentication. Please refer to <a href="/sdk-documentation/request-authorization">Request Authorization</a>.</p>

<h3>Arguments</h3>

<p>$orderby</p>

<h3>Example URL</h3>

<p><a>http://api.dol.gov/V1/FORMS/AgencyForms?<strong>$orderby=FormNumber</strong></a><br />
Read records from the AgencyForms table in FORMS dataset, sorting by the FormNumber column.</p>

<p><strong>To sort the column by desc order, add desc after the column name </strong></p>

<h3>Example URL</h3>

<p><a>http://api.dol.gov/V1/FORMS/AgencyForms?<strong>$orderby=FormNumber desc</strong></a><br />
Ascending is the default order.</p>

<h3>HTTP Error Codes</h3>

<p>400: Bad Request<br />
The query contains an error. Read returned value for specific error.<br />
401: Request not authorized<br />
An authorization request header was not supplied or was invalid<br />
404: Resource not found<br />
The dataset name or table name is invalid.</p>

<h3>Comments</h3>

<p>A maximum of 100 records will be returned<br />
More than one column can be specified. Separate column names with commas.</p>

<h2>Filtering Data – Single Filter</h2>

<h3>Authentication</h3>

<p>This method requires authentication. Please refer to <a href="/sdk-documentation/request-authorization">Request Authorization</a>.</p>

<h3>Arguments</h3>

<p>$filter</p>

<h3>Comparison Keywords</h3>

<p>eq – Equal to<br />
ne – Not Equal to<br />
gt – Greater than<br />
lt – Less than<br />
ge – Greater than or equal to<br />
le – Less than or equal to</p>

<h3>Example URL</h3>

<p><a>http://api.dol.gov/V1/FORMS/AgencyForms?<strong>$filter=AgencyId eq 'MSHA'</strong></a><br />
Read records from the AgencyForms table in FORMS dataset, returning only the records where the AgencyId is equal to 'MSHA'.</p>

<h3>Example Response</h3>

<p>[response]</p>

<h3>HTTP Error Codes</h3>

<p>400: Bad Request<br />
The query contains an error. Read returned value for specific error.<br />
401: Request not authorized<br />
An authorization request header was not supplied or was invalid<br />
404: Resource not found<br />
The dataset name or table name is invalid.</p>

<h3>Comments</h3>

<p>A maximum of 100 records will be returned<br />
More than one filter can be specified. See [link] article for details.</p>

<h2>Filtering Data – Multiple Filters</h2>

<h3>Authentication</h3>

<p>This method requires authentication. Please refer to <a href="/sdk-documentation/request-authorization">Request Authorization</a>.</p>

<h3>Arguments</h3>

<p>$filter (required)<br />
and<br />
or</p>

<h3>Comparison Keywords</h3>

<p>eq – Equal to<br />
ne – Not Equal to<br />
gt – Greater than<br />
lt – Less than<br />
ge – Greater than or equal to<br />
le – Less than or equal to</p>

<h3>Example URL</h3>

<p><a>http://api.dol.gov/V1/FORMS/AgencyForms?<strong>$filter=(AgencyId eq 'MSHA') and (Title eq 'Legal Identity Report')</strong></a><br />
Read records from the AgencyForms table in FORMS dataset where the AgencyId is equal to MSHA and the Title is equal to 'Legal Identity Report'.</p>

<h3>HTTP Error Codes</h3>

<p>400: Bad Request<br />
The query contains an error. Read returned value for specific error.<br />
401: Request not authorized<br />
An authorization request header was not supplied or was invalid<br />
404: Resource not found<br />
The dataset name or table name is invalid.</p>

<h3>Comments</h3>

<p>A maximum of 100 records will be returned</p>
