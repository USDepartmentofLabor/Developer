---
layout: post
title: Summer Jobs Service Beta
created: 1359481108
description: The Summer Jobs Plus Bank is a new search tool designed to help connect job seekers with employers.
---

```
http://api.dol.gov/V1/SummerJobs
```

<p>The Summer Jobs Plus Bank is a new search tool designed to help connect job seekers with employers. Summer Jobs Plus allows sites to search job postings using a widget that provides a single window into the myriad job boards, social&nbsp;media platforms, and corporate employment sites that are currently spread across the Internet.</p>
<p>The search widget is powered by a new open Web standard, the JobPosting schema, designed by a voluntary network of job search and technology companies and supported by schema.org—a collaboration among Bing, Google, and Yahoo to make structured data on the Web easier to find.</p>
<p>Interested in adding the widget as a feature on your website? <a href="http://www.dol.gov/summerjobs/Widget.htm">Instructions are found here to learn how to add Summer Jobs Plus widget to your web site</a>.</p>
<p>For employers committed to hiring, "tagging" job listings in the JobPosting schema ensures that those listings will be discoverable through the Summer Jobs Plus Bank.</p>
<p>Read our <a href="http://www.dol.gov/summerjobs/Employers.htm">guide for tagging job posts for the Summer Jobs Plus search</a>.</p>

<h2>Service Operations Details</h2>
<p>The Summer Jobs Plus API is supported using Service Operations. Service Operations provide users the ability to call other services, perform specific tasks, or retrieve data that is not found in the standard API datasets. To use the Summer Jobs Plus API the Operation name and parameters need to be supplied using the data services format. For summer jobs query and skip parameter are required.<br />
Each request to the DOL API also requires the standard authorization header.  <a href="http://developer.dol.gov/req-auth.htm">View the authorization specification here.</a> ​</p>
<p><b>Summer Jobs Signature</b><br />
getJobsListing(string query, string employmentType, string region, string locality, string zip, int skipCount)</p>

<h3>Parameter Encoding</h3>
<h4>Strings</h4>
<p>Each String typed parameter must be surrounded in quotes in order to work correctly. These quotes are then Url encoded and passed to the Service Operation.</p>
<p>' = %27</p>
<p>For example: 'Nurse' Becomes %27Nurse%27</p>
<h4>Int</h4>
<p>Each integer typed parameter must be entered without quotes in order to work correctly.</p>
<h4>Null Parameter</h4>
<p>Each parameter that is assigned null should be left blank</p>
<p>For example: ?region=&amp;locality=</p>

<h3>Service Operation Examples</h3>

<p>The following queries are examples of requests that can be made to the API to call the Summer Jobs API. Each SDK will require different usages of these forms. <span style="COLOR: #f00">The Summer Jobs API requires either the query parameter to be filled out or, either the region or locality field to be filed out.</span></p>

- http://api.dol.gov/V1/SummerJobs/getJobsListing?format=%27json%27&amp;query=%27Nurse%27&amp;region=&amp;locality=&amp;skipCount=1
- http://api.dol.gov/V1/SummerJobs/getJobsListing?format=%27xml%27&amp;query=&amp;region=%27FL%27&amp;locality=&amp;skipCount=99
- http://api.dol.gov/V1/SummerJobs/getJobsListing?format=%27xml%27&amp;query=&amp;region=&amp;locality=%27Tampa%27&amp;skipCount=99
- http://api.dol.gov/V1/SummerJobs/getJobsListing?format=%27atom%27&amp;query=%27Nurse%27&amp;region=%27New York%27&amp;locality=%27New York%27&amp;skipCount=1

<a href ="http://api.dol.gov/V1/SummerJobs/$metadata" class="button radius button_dataset">Browse Metadata</a>

## Dataset Tables  

<h3>getJobsListing Operation</h3>
<p>- <strong>Returns</strong> a json, xml, or atom formatted string.</p>

<div class="dsktp_tbl">
	<table summary="List of Service Operations - Summer Jobs Service Beta">
		<caption>List of Service Operations</caption>
		<tbody>
			<tr>
				<th scope="col">Parameter Name</th>
				<th scope="col">Parameter Description</th>
				<th scope="col">Data Type</th>
			</tr>
			<tr>
				<th scope="row">format</th>
				<td>The format that the results string will be returned. <a href="#formatcodes">See below for list of format codes.</a></td>
				<td>String</td>
			</tr>
			<tr>
				<th scope="row">query</th>
				<td>The keywords that will be used to find matching job listings. This is required if region or locality are not provided.</td>
				<td>String(Required)</td>
			</tr>
			<tr>
				<th scope="row">region</th>
				<td>The state name or abbreviation used to filter jobs listings. This is required if query or locality are not provided.</td>
				<td>String</td>
			</tr>
			<tr>
				<th scope="row">locality</th>
				<td>The city name used to filter job listings. This is required if query or region are not provided.</td>
				<td>String</td>
			</tr>
			<tr>
				<th scope="row">skipCount</th>
				<td>The number of records to skip ahead from the first record. Valid range of 1-99.</td>
				<td>int (Required)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h3>List of Service Operations</h3>
	<h4>Summer Jobs Service Beta</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: format</p>
		<p><span class="mbl-strng">Column Description:</span> The format that the results string will be returned. <a href="#formatcodes">See below for list of format codes.</a></p>
		<p><span class="mbl-strng">Data Type:</span> String</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: query</p>
		<p><span class="mbl-strng">Column Description:</span> The keywords that will be used to find matching job listings. This is required if region or locality are not provided.</p>
		<p><span class="mbl-strng">Data Type:</span> String(Required)</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: region</p>
		<p><span class="mbl-strng">Column Description:</span> The state name or abbreviation used to filter jobs listings. This is required if query or locality are not provided.</p>
		<p><span class="mbl-strng">Data Type:</span> String</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: locality</p>
		<p><span class="mbl-strng">Column Description:</span> The city name used to filter job listings. This is required if query or region are not provided.</p>
		<p><span class="mbl-strng">Data Type:</span> String</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: skipCount</p>
		<p><span class="mbl-strng">Column Description:</span> The number of records to skip ahead from the first record. Valid range of 1-99.</p>
		<p><span class="mbl-strng">Data Type:</span> int (Required)</p>		
	</div>
</div>

<h3>Lookup Codes</h3>
<p id="formatcodes">Format Codes:</p>
- json ( Default )
- xml
- atom
