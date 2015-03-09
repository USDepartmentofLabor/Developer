---
layout: post
title: PHP DOL Data SDK
created: 1359577134
---

<h2>Adding the SDK to Your Project</h2>

<h3>Add SDK files to your project</h3>

<p><a href="/sites/default/files/PHP_DOLDataSDK.zip">Extract the zipped SDK folder</a> or grab the <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=https://github.com/USDepartmentofLabor/PHP_DOLDataSDK&amp;exitTitle=GitHub&amp;fedpage=no">Git repository</a>.<br />
Copy the DOLDataSDK.php file into your project.</p>

<h3>Requirements</h3>

<p>This SDK makes use of PHP's cURL functions.</p>

<h2>Using the SDK</h2>

<h3>Reference the DOL Data API in your source file</h3>

<p>In the source files that will make DOL Data requests add the following include or require:</p>

<pre class="prettyprint">
include "DOLDataSDK.php";</pre>

<p>&nbsp;</p>

<h3>Making API Calls</h3>

<p>&nbsp;</p>

<p>The <strong>DOLDataRequest</strong> class is used to make API calls. It requires a context object to be passed to its constructor in order to get the API key and URL information needed for the requests. The <strong>DOLDataContext</strong> is the context class used to hold this information.</p>

<p>You can also pass arguments to the API call by adding them to an <strong>Array</strong> as key/value pairs and passing it as the second argument of the <strong>callAPI()</strong> method. Valid arguments include <em>top</em>, <em>select</em>, <em>filter</em>, <em>orderby</em>, and <em>skip. </em>They are defined later in this document.</p>

<p>In order to make requests:</p>

<ul>
	<li>Instantiate a <strong>DOLDataContext</strong> object</li>
	<li>Instantiate a <strong>DOLDataRequest</strong> object and initialize it with the context</li>
	<li>Create an <strong>Array</strong> and store all the API arguments as key/value pairs.</li>
	<li>Call the <strong>callAPI()</strong> method, passing the API name and the arguments (leave off the arguments if there are no arguments)</li>
</ul>

<p><u>Sample code to make requests for standard DOL API datasets:</u></p>

<pre class="prettyprint">
&lt;?php
include "DOLDataSDK.php";

//Instantiate  DOL Data context object
//This  object stores the API information required to make requests
$context = new DOLDataContext("http://api.dol.gov", "your-api-key", "your-shared-secret");

//Instantiate  new request object. Pass the context that contains all the API key info
$request = new DOLDataRequest $context;

//API  you want to fetch data from
$method = "FORMS/Agencies";

//Build Array arguments
//Example to retrieve top 10 records and just get one field. 
$arguments = Array('top' =&gt; '10', 'select' =&gt; 'AgencyName');

//Make API call
$results = $request-&gt;callAPI($method, $arguments);
if (is_string($results)) {
	//handle error
} else {
	//handle success
}
?&gt;</pre>

<p>&nbsp;</p>

<p><u>Sample code to make requests for DOL Service Operation (e.g Summer Jobs Plus) :</u></p>

<p>&nbsp;</p>

<pre class="prettyprint">
&lt;?php
include "DOLDataSDK.php";

//Instantiate  DOL Data context object
//This  object stores the API information required to make requests
$context = new DOLDataContext("http://api.dol.gov", "your-api-key", "your-shared-secret");

//Instantiate  new request object. Pass the context that contains all the API key info
$request = new DOLDataRequest $context;

//API  you want to fetch data from
$method = "SummerJobs/getJobsListing";

//Build Array arguments
//Example to retrieve top 10 records and just get one field. 
$arguments =  Array('format' =&gt; '\'json\'', 
					'query' =&gt; '\'Farm\'',
					'region' =&gt; '',
					'locality' =&gt; '', 
					'skipCount' =&gt; '1');


//Make API call
$results = $request-&gt;callAPI($method, $arguments);
if (is_string($results)) {
	//handle error
} else {
	//handle success
}
?&gt;</pre>

<p>&nbsp;</p>

<p>The <strong>callAPI()</strong> triggers the SDK to process the request, add authorization headers and returns either an <strong>Array</strong> with the results or a <strong>String</strong> with an error message.</p>

<p>&nbsp;</p>

<h2>API Method Arguments</h2>

<h3>Standard DOL API datasets</h3>

<h4>top</h4>

<p>The top argument is used to specify the number of records to be returned.</p>

<p>Example:</p>

<pre class="prettyprint">
$args = Array('top' =&gt; '2');</pre>

<p>&nbsp;</p>

<h4>skip</h4>

<p>&nbsp;</p>

<p>The skip argument specifies that you want the service to skip a specified number of results. This argument in combination with top, serve as the basis to implement pagination.</p>

<p>Example:</p>

<pre class="prettyprint">
//Return records 21-30
$args = Array('top' =&gt; '10', 'skip' =&gt; '20');</pre>

<p>&nbsp;</p>

<h4>select</h4>

<p>&nbsp;</p>

<p>The select argument allows you to specify the exact columns that you want the API to return. Separate them with commas if there is more than one.</p>

<p>In order to save bandwidth, it is always a good idea to add a select clause to most requests and retrieve the columns needed for a specific function. Some datasets can contain dozens of columns and the performance of your app can be impacted if you always return all of the columns. This is even more important in mobile applications because of device memory limitations, possible slow network speeds, and data usage caps imposed by carriers.</p>

<p>Example:</p>

<pre class="prettyprint">
//Select the AgencyId and AgencyFormNumber columns
$args = Array('select' =&gt; 'AgencyId,AgencyFormNumber');</pre>

<p>&nbsp;</p>

<h4>orderby</h4>

<p>&nbsp;</p>

<p>Use the orderby argument to sort the data by one or more columns. Separate them with commas if there is more than one.</p>

<pre class="prettyprint">
//Order by the AgencyFormNumber column
$args = Array('orderby' =&gt; 'AgencyFormNumber');</pre>

<p>&nbsp;</p>

<h4>filter</h4>

<p>&nbsp;</p>

<p>The filter argument is used to add filters to the API query. For example, you can filter results where a specific column is equal to a string provided.</p>

<p>The API recognizes the following comparison keywords:<br />
<strong>eq</strong> – Equal to<br />
<strong>ne</strong> – Not Equal to<br />
<strong>gt</strong> – Greater than<br />
<strong>lt</strong> – Less than<br />
<strong>ge</strong> – Greater than or equal to<br />
<strong>le</strong> – Less than or equal to</p>

<p>For string comparisons enclose any multiple word string in single quotes. For example: <strong>'Legal Identity Report'</strong></p>

<p>More than one filter can be specified by joining them with the <strong>and</strong>/<strong>or</strong> keywords. Separate filters with parenthesis.<br />
For example: <strong>(AgencyId eq 'MSHA') and (Title eq 'Legal Identity Report') </strong>retrieves the records where the value in the AgencyId column is equal to 'MSHA' and the value for the Title column is equal to 'Legal Identity Report'.</p>

<p>Example:</p>

<pre class="prettyprint">
$args = Array('filter' =&gt; "(AgencyId eq 'MSHA') and (Title eq 'Legal Identity Report')");</pre>

<p>&nbsp;</p>

<h3>DOL Service Operation for Summer Jobs Plus</h3>

<p>&nbsp;</p>

<p>To use the Service Operations API the Operation name and parameters need to be supplied using the data services format. Each String typed parameter must be surrounded in quotes in order to work correctly. These quotes are then Url encoded and passed to the Service Operation.</p>

<h4>format</h4>

<p>The format argument allows you to specify the format that the results string will be returned. If format argument is not passed with request then result will be returned in json format by default. Following are the supported format of results string.</p>

<p><label><a name="formatcodes"></a>Format Codes:</label><br />
json ( Default )<br />
xml<br />
atom</p>

<p>Example:</p>

<pre class="prettyprint">
$arguments =  Array('format' =&gt; '\'json\'');</pre>

<p>&nbsp;</p>

<h4>query</h4>

<p>&nbsp;</p>

<p>The query argument will be used to find matching job listings. This is required if region or locality are not provided.</p>

<p>Example:</p>

<pre class="prettyprint">
$arguments =  Array('query' =&gt; '\'Farm\'');</pre>

<p>&nbsp;</p>

<h4>region</h4>

<p>&nbsp;</p>

<p>The region argument will be used to filter jobs listings by the state name or abbreviation. This is required if query or locality are not provided.</p>

<p>Example:</p>

<pre class="prettyprint">
$arguments =  Array('region' =&gt; '\'VA\'');</pre>

<p>&nbsp;</p>

<h4>locality</h4>

<p>&nbsp;</p>

<p>The region argument will be used to filter jobs listings by The city name. This is required if query or region are not provided.</p>

<p>Example:</p>

<pre class="prettyprint">
$arguments =  Array('locality' =&gt; '\'Alexandria\'');</pre>

<p>&nbsp;</p>

<h4>skipCount</h4>

<p>&nbsp;</p>

<p>The skipCount argument will be used to specify the number of records to skip ahead from the first recor.Valid range of 1-99 and it required.</p>

<p>Example:</p>

<pre class="prettyprint">
$arguments =  Array('skipCount' =&gt; '1');</pre>

<p>&nbsp;</p>
