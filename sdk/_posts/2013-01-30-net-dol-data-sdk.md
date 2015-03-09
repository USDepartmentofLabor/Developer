---
layout: post
title: ".Net DOL Data SDK"
created: 1359560059
---

<h2>Add SDK files to your project</h2>

<p><a href="/sites/default/files/DotNet_DOLDataSDK.zip">Extract the zipped SDK folder</a> or grab the <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=https://github.com/USDepartmentofLabor/DotNet_DOLDataSDK&amp;exitTitle=GitHub&amp;fedpage=no">Git repository</a>. Add the DOLDataUtil.cs file folder to your project.</p>

<h2>Using the SDK</h2>

<h3>Reference the DOL Data API in your source file</h3>

<p>In the source files that will make DOL Data requests add the following import:</p>

<p>using gov.dol.doldata.util;</p>

<h2>Add service references to the DOL Data API</h2>

<p>Use the Add Service Reference wizard to add a reference to the dataset(s) you want to connect to. This will generate a proxy class with strongly typed entities.</p>

<p><img alt="screen shot of add service reference menu" src="/sites/default/files/opa.developer.sdk.dotnet.add-reference-wizard.jpg" style="width: 325px; height: 190px; " /></p>

<h2>Making API Calls</h2>

<p>The API is accessed via a service reference proxy class.&nbsp; The DOLData API is a standard WFC Data Service (OData) producer, but requires an authorization header to be added to every request. The class included in this SDK provides the authorization handling for you.</p>

<p>In order to make requests:</p>

<ol>
	<li>Define you API Key and Shared Secret in DOLDataUtil.cs
	<pre class="prettyprint">
//Define API Key and Shared Secret in DOLDataUtil.cs 
private const string ApiKey =  "YOUR API KEY";
private const string  SharedSecret = "SHARED SECRET";
</pre>
	</li>
	<li>Instantiate a ServiceReference Entity object
	<pre class="prettyprint">
// FormsServiceReference is a proxy class created by the "Add  Service Reference" // tool. Create new instance.
FormsServiceReference.FormsEntities fe = new  FormsServiceReference.FormsEntities (new Uri("http://api.dol.gov/V1/FORMS"));
</pre>
	</li>
	<li>Add an event handler to SendingRequest pointing to DOLDataUtil.service_SendingRequest
	<pre class="prettyprint">
//Attach event handler to the SendingRequest event
//This will take care of adding the authorization header
fe.SendingRequest  += new EventHandler&lt;SendingRequestEventArgs&gt;(DOLDataUtil.service_SendingRequest);
</pre>
	</li>
	<li>Use Linq to query the data.
	<pre class="prettyprint">
//Use Linq to query the data
//Example: Get top 10 agencies and output to console
foreach (var form in  fe.Agency.Take(10))	
{
&nbsp;    &nbsp;    &nbsp;Console.WriteLine(form.AgencyName);
}
</pre>
	</li>
	<li>For service calls like SummerJobs, use proxy to execute call.
	<p>Pass the Service Operation name and paramters to the execute method.</p>

	<pre class="prettyprint">
string jsonData = fe.Execute&lt;string&gt;(new Uri("getJobsListing?format=json&amp;region=&amp;locality=&amp;zip=&amp;employmentType=%27Any%27&amp;skipCount=1&amp;query=%27Nurse%27", UriKind.Relative)).FirstOrDefault().Replace("\\n", "").Replace("\\\"", "\"").Trim('\"');
</pre>
	</li>
</ol>
