---
layout: post
title: PHP DOL Data SDK Sample
created: 1359577295
---

<h2>Overview</h2>

<p>This sample will provide the steps to create a simple PHP application that can consume DOL Data. Following these steps in order will allow your application to operate correctly.&nbsp;</p>

<p>&nbsp;</p>

<h2>Create a New Project</h2>

<p>&nbsp;</p>

<p>For this sample we are going to create a web site that will consume and list Agency data.<br />
Create a project folder for this sample.<br />
Create a new text document using any text editor and save it as Sample.php in the project folder.</p>

<h2>Requirements</h2>

<p>The DOL Data SDK has some library dependencies. Ensure that your version of PHP was compiled with support for cURL functions.</p>

<h2>Add SDK to Project</h2>

<p>Copy the SDK file into the project folder. You can get this from one of these two locations:</p>

<ul>
	<li><a href="/sites/default/files/PHP_DOLDataSDK.zip">Zip file download</a></li>
	<li><a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=https://github.com/USDepartmentofLabor/PHP_DOLDataSDK&amp;exitTitle=GitHub&amp;fedpage=no">GitHub Repository</a></li>
</ul>

<p>&nbsp;</p>

<h2>Locate Dataset Path</h2>

<p>EEach Dataset has a Dataset Location path that gives the URL that will be needed to reach the Dataset on the API. For the standard DOL Agency dataset sample please use <A>http://api.dol.gov/V1/DOLAgency</A><br />
<br />
<img alt="Add Service Reference" src="/sites/default/files/opa.developer.sdk.dotnet.DatasetLocation.png" style="width: 60%; " /><br />
&nbsp;</p>

<p>For the DOL Service Operation sample please use <a>http://api.dol.gov/V1/SummerJobs</a><br />
<br />
<img alt="Add Service Reference" src="/sites/default/files/opa.developer.sdk.dotnet.ServicePath.png" /></p>

<h2>Define the User Interface</h2>

<p>Create the function <strong>resultsTable()</strong>; which will take the results returned by the data request and display them in a simple table.<br />
&nbsp;</p>

<pre class="prettyprint">
function resultsTable($results) {
	$string = ‘’;
	$string .= “&lt;table border=’1’ cellspacing=’0’&gt;&lt;tr&gt;&lt;th&gt;Agency&lt;/th&gt;&lt;th&gt;Agency Full Name&lt;/th&gt;&lt;/tr&gt;\n”;
	foreach ($results as $object) {
		$string .= “&lt;tr&gt;&lt;td&gt;{$object-&gt;Agency}&lt;/td&gt;&lt;td&gt;{$object-&gt;AgencyFullName}&lt;/td&gt;&lt;/tr&gt;\n”;
	}
	return $string . “&lt;/table&gt;\n”;
}</pre>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>For DOL Service Operation (Beta Version).</p>

<pre class="prettyprint">
&lt;HTML&gt;
&lt;head&gt;&lt;script src="jquery-1.5.1.min.js" type="text/javascript"&gt;&lt;/script&gt;&lt;/head&gt;
&lt;BODY&gt;</pre>

<p>&nbsp;</p>

<pre class="prettyprint">
&lt;?php
function resultsTable($results) {
	$string = '';
	$string .= "&lt;script type=\"text/javascript\"&gt;l;\n";
	foreach ($results as $object) {
		$object = str_replace('\\n', '', $object);
		$object = str_replace('\"', '"', $object);
		$object = trim($object, '\"');
		$string .= "var jsonData = {$object};\n";
	}
	$string .= "&lt;/script&gt;\n";
	return $string;
}</pre>

<ul>
	<li>Include a JavaScript file in page , this javascript file has required jquery function to parse the json response.</li>
	<li>Create the function <strong>resultsTable()</strong> for DOL Service Operation (Beta Version).</li>
</ul>

<h2>Implementing the DOL Data Request</h2>

<p>The DOLDataSDK.php file handles everything required for submitting data requests to the DOL API, so we need to add them to <strong>Sample.php</strong> with an include statement.<br />
&nbsp;</p>

<pre class="prettyprint">
include "DOLDataSDK.php";</pre>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>In order to submit data requests, we will need to create two objects; an instance of <strong>DOLDataContext</strong>, to hold various information about our data request, and an instance of <strong>DOLDataRequest</strong>, to handle the submission of the request.<br />
&nbsp;</p>

<pre class="prettyprint">
$context = new DOLDATAContext('<A>http://api.dol.gov</A>', 'your-token', 'your-shared-secret');
$request = new DOLDataRequest($context);</pre>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>Next, we need to call <strong>callAPI()</strong> on our <strong>DOLDataRequest</strong>. This method takes two arguments: the Dataset Location path to the table we are requesting data from, and an <strong>Array</strong> of arguments to pass to the data request.<br />
For Standard DOL API datasets :<br />
&nbsp;</p>

<pre class="prettyprint">
$results = $request-&gt;callAPI('DOLAgency/Agencies', Array('top' =&gt; '10', 'orderby' =&gt; 'Agency'));</pre>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>For DOL Service Operation for Summer Jobs Plus:<br />
&nbsp;</p>

<pre class="prettyprint">
$results = $request-&gt;callAPI('SummerJobs/getJobsListing', Array('format' =&gt; '\'json\'', 'query' =&gt; '\'farm\'', 'region' =&gt; '', 'locality' =&gt; '',
		'skipCount' =&gt; '1'));</pre>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>If <strong>callAPI()</strong> returns a string, an error occurred while sending the request. Otherwise, <strong>callAPI()</strong> returns an <strong>Array</strong> of <strong>stdClass</strong> instances. In this sample, we will handle an error by echoing it to the screen. Otherwise, we will pass the results to our <strong>resultsTable()</strong> function.<br />
&nbsp;</p>

<p>&nbsp;</p>

<pre class="prettyprint">
if (is_string($results)) {
	echo $results . “\n”;
} else {
	echo resultsTable($results);
}</pre>

<p>&nbsp;</p>

<p><br />
The finished code should look like this:</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<pre class="prettyprint">
&lt;HTML&gt;
&lt;BODY&gt;
&lt;?php
include “DOLDataSDK.php”;
 
function resultsTable($results) {
	$string = ‘’;
	$string .= “&lt;table border=’1’ cellspacing=’0’&gt;&lt;tr&gt;&lt;th&gt;Agency&lt;/th&gt;&lt;th&gt;Agency Full Name&lt;/th&gt;&lt;/tr&gt;\n”;
	foreach ($results as $object) {
		$string .= “&lt;tr&gt;&lt;td&gt;{$object-&gt;Agency}&lt;/td&gt;&lt;td&gt;{$object-&gt;AgencyFullName}&lt;/td&gt;&lt;/tr&gt;\n”;
	}
	return $string . “&lt;/table&gt;\n”;
}
 
$context = new DOLDataContext(‘<A>http://api.dol.gov</A>’, ‘your-token’, ‘your-shared-secret’);
$request = new DOLDataRequest($context);
 
$results = $request-&gt;callAPI(‘DOLAgency/Agencies’, Array(‘top’ =&gt; ’10’, ‘orderby’ =&gt; ‘Agency’));
 
if (is_string($results)) {
	echo $results . “\n”;
} else {
	echo resultsTable($results);
}
?&gt;
&lt;/BODY&gt;
&lt;/HTML&gt;</pre>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<h2>Implementing the DOL Service Operation Request (Beta Version)</h2>

<p>Please follow all above steps from Implementing the DOL Data Request section for DOL Service Operation Request and also add following javascript code to parse the json response using Jquery.<br />
&nbsp;</p>

<pre class="prettyprint">
&lt;script type="text/javascript"&gt;
$(document).ready(function () {
	var builder = [];
	for (var i = 0; i &lt; jsonData.items.length; i++) {
		builder.push("&lt;span&gt;" + " " + jsonData.items[i].title + "&lt;/span&gt;&lt;br/&gt;");
	}
	
	$('p').html(builder.join(''));
	
});</pre>

<p>&nbsp;</p>

<p><br />
The finished code should look like this:</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<pre class="prettyprint">
&lt;?php
function resultsTable($results) {
	$string = '';
	$string .= "&lt;script type=\"text/javascript\"&gt;l;\n";
	foreach ($results as $object) {
		$object = str_replace('\\n', '', $object);
		$object = str_replace('\"', '"', $object);
		$object = trim($object, '\"');
		$string .= "var jsonData = {$object};\n";
	}
	$string .= "&lt;/script&gt;\n";
	return $string;
}

$context = new DOLDATAContext('<A>http://api.dol.gov</A>', 'your-token', 'your-shared-secret');
$request = new DOLDataRequest($context);

$results = $request-&gt;callAPI('SummerJobs/getJobsListing', Array('format' =&gt; '\'json\'', 'query' =&gt; '\'farm\'', 'region' =&gt; '', 'locality' =&gt; '',
		'skipCount' =&gt; '1'));
		
if (is_string($results)) {
	echo $results . “\n”;
} else {
	echo resultsTable($results);
}

?&gt;

&lt;script type="text/javascript"&gt;
$(document).ready(function () {
	var builder = [];
	for (var i = 0; i &lt; jsonData.items.length; i++) {
		builder.push("&lt;span&gt;" + " " + jsonData.items[i].title + "&lt;/span&gt;&lt;br/&gt;");
	}
	
	$('p').html(builder.join(''));
	
});
&lt;/script&gt;</pre>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<h2>Configure Security</h2>

<p>Secure logins are provided using the following code; we will need to insure that the <strong>DOLDataContext</strong> instance is initialized with both an <strong>ApiKey</strong> and a <strong>SharedSecret</strong>. Replace "your-token" and "your-shared-secret" in <strong>new DOLDataContext()</strong> with your Token and SharedSecret.</p>

<ul>
	<li>The <strong>ApiKey</strong> corresponds to the <strong>Token</strong> identifier in your token list.</li>
	<li>The <strong>SharedSecret</strong> that is associated with that token.</li>
</ul>

<p>&nbsp;</p>

<pre class="prettyprint">
$context = new DOLDATAContext('<A>http://api.dol.gov</A>', 'your-token', 'your-shared-secret');
$request = new DOLDataRequest($context);</pre>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<h2>View DOL Data</h2>

<p>Build and run the application, and you should see something like the following:<br />
<br />
<img alt="Data" src="/sites/default/files/opa.developer.sdk.php.Data.png.txt" style="width: 629px; height: 267px; " /><br />
<br />
Result of DOL Service Operation Request (Beta Version):<br />
<br />
<img alt="Data" src="/sites/default/files/opa.developer.sdk.php.service_operation_result_table.png.txt" /><br />
&nbsp;</p>
