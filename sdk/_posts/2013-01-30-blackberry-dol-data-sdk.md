---
layout: post
title: Blackberry DOL Data SDK
created: 1359552615
---

<h2>Adding the SDK to Your Project</h2>

<p><strong>Add SDK files to your project</strong></p>

<p><a href="/sites/default/files/BlackBerry_DOLDataSDK.zip">Extract the zipped SDK folder</a> or grab the <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=https://github.com/USDepartmentofLabor/BlackBerry_DOLDataSDK&amp;exitTitle=GitHub&amp;fedpage=no">Git repository</a>.<br />
Copy the contents of the SDK <strong>src</strong> folder to the <strong>src</strong> folder of your BlackBerry project.</p>

<h2>Using the SDK</h2>

<h3>Reference the DOL Data API in your source file</h3>

<p>In the source files that will make DOL Data requests add the following imports:</p>

<pre class="prettyprint">
import java.util.Hashtable;
import gov.dol.doldata.api.DOLDataContext;
import gov.dol.doldata.api.DOLDataRequest;
import gov.dol.doldata.api.DOLDataRequestCallback;
</pre>

<h3>Prepare your class for callbacks</h3>

<p>The DOL Data SDK processes requests asynchronously to prevent locking up the UI while the data is requested and processed. To achieve this the SDK makes use of callback methods. To successfully retrieve data it is required to implement the two <strong>DOLDataRequestCallback</strong>&nbsp; methods. The methods will be invoked when the results have been processed or when an error occurs.</p>

<ol>
	<li>Implement the <strong>DOLDataRequestCallback</strong> &nbsp;interface in the class that will receive and process the API responses<br />
	Example:
	<pre class="prettyprint">
public final class MyMainScreen extends MainScreen implements FieldChangeListener, DOLDataRequestCallback</pre>
	</li>
	<li>Add the interface methods to the class
	<pre class="prettyprint">
public void DOLDataResultsCallback(Vector results) {
	//TODO:  Add your code here
	//results  is a Vector of Hashtables
}

public void DOLDataErrorCallback(String error) {
	//TODO:  Add your code here
}</pre>
	</li>
</ol>

<h2>Making API Calls</h2>

<p>The <strong>DOLDataRequest</strong> class is used to make API calls. It requires a context object to be passed to its constructor in order to get the API key and URL information needed for the requests. The <strong>DOLDataContext</strong> is the context class used to hold this information.</p>

<p>You can pass arguments to the API call by adding them to a Hashtable as key/value pairs and passing it as the second parameter of the <strong>callAPIMethod</strong> method. They are defined later in this document.</p>

<p>In order to make requests:</p>

<ol>
	<li>Instantiate a <strong>DOLDataContext</strong> object</li>
	<li>Instantiate a <strong>DOLDataRequest</strong> object and pass the context and the callback object (usually <em>this</em>) as parameters.</li>
	<li>Create a <strong>Hashtable</strong> and store all the API arguments as key/value pairs.</li>
	<li>Call the <strong>callAPIMethod</strong> method, passing the API name and the arguments (or null if there are no arguments)</li>
</ol>

<p><u>Sample code to make requests for standard DOL API datasets:</u></p>

<pre class="prettyprint">
//Usually stored as instance variables
public final String API_KEY = "YOUR API KEY";
public final String SHARED_SECRET = "YOUR SHARED SECRET";
public final String API_HOST = "http://api.dol.gov/";
public final String API_URI = "/V1";
/////////////////////////////////////

//Instantiate DOL Data context object
//This object stores the API information required to make  requests
DOLDataContext context = new DOLDataContext(API_KEY, SHARED_SECRET, API_HOST, API_URI);

//Instantiate new request object. Pass the callback object (this) and
//context that contains all the API key info
DOLDataRequest request = new DOLDataRequest(this, context);

//API we want to fetch data from
String method = "FORMS/Agencies";

//Build Hashtable arguments
Hashtable args = new Hashtable();&nbsp; 
args.put("top", "2");
args.put("filter", "AgencyId eq 'OSHA'");

//Make API call
request.callAPIMethod(method, args);
</pre>

<p>&nbsp;</p>

<p>Sample code to make requests for DOL service operation:</p>

<p>&nbsp;</p>

<pre class="prettyprint">
//Usually stored as instance variables
public final String API_KEY = "YOUR API KEY";
public final String SHARED_SECRET = "YOUR SHARED SECRET";
public final String API_HOST = "http://api.dol.gov/";
public final String API_URI = "/V1";
/////////////////////////////////////

//Instantiate DOL Data context object
//This object stores the API information required to make  requests
DOLDataContext context = new DOLDataContext(API_KEY, SHARED_SECRET, API_HOST, API_URI);

//Instantiate new request object. Pass the callback object (this) and
//context that contains all the API key info
DOLDataRequest request = new DOLDataRequest(this, context);

//API we want to fetch data from
String method = "SummerJobs/getJobsListing";

//Build Hashtable arguments
Hashtable args = new Hashtable();&nbsp; 
args.put("format", "'json'");
args.put("query", "'farm");
args.put("region", "");
args.put("locality", "");
args.put("skipCount", "1");

//Make API call
request.callAPIMethod(method, args);
</pre>

<p>&nbsp;</p>

<p>The callAPIMethod triggers the SDK to process the request, add authorization headers and callback with the results or with an error message. Once the process has completed one of the two callback methods from the DOLDataRequestCallback&nbsp;&nbsp; interface will be called. If successful, the <strong>DOLDataResultsCallback</strong> method will be called and the results parameter will contain the data you requested.&nbsp; The results parameter contains a Vector of Hashtables. Each Hashtable is mapped to one record of the dataset. If the request failed for any reason, the <strong>DOLDataErrorCallback </strong>will be called and the error parameter will contain a description of the error.</p>

<p>&nbsp;</p>

<p>Sample code to make requests for standard DOL API datasets:</p>

<pre class="prettyprint">
public void DOLDataResultsCallback(Vector results) {
	//TODO:  Add your code here. Example:
	Hashtable record = (Hashtable)results.elementAt(0);
	String name = (String)record.get("AgencyName");
}
public void DOLDataErrorCallback(String error) {
	//TODO:  Add your code here
}</pre>

<p>&nbsp;</p>

<p>Sample code to make requests for DOL service operation:</p>

<p>&nbsp;</p>

<pre class="prettyprint">
public void DOLDataResultsCallback(Vector results) {
	//TODO:  Add your code here. Example:
	for (int i = 0; i &lt; results.size(); i++){
		Hashtable record = (Hashtable)results.elementAt(i);
		if(record.get("getJobsListing") !=null)
		{
			String jobs = record.get("getJobsListing").toString();
			JSONObject jsonObject = new JSONObject(jobs);
			JSONArray subArray = jsonObject.getJSONArray("items");
			for(int j=0; j&lt;subArray.length(); j++)
			{
				LabelField l = new LabelField(subArray.getJSONObject(j).
								getString("title"),FOCUSABLE);
				add(l);
			}
			
		}
}
public void DOLDataErrorCallback(String error) {
	//TODO:  Add your code here
}</pre>

<p>&nbsp;</p>

<h2>API Method Arguments</h2>

<p>&nbsp;</p>

<h3>Standard DOL API datasets</h3>

<h4>top</h4>

<p>The top argument is used to specify the number of records to be returned.</p>

<p>Example:</p>

<pre class="prettyprint">
//Return top 2 records
Hashtable args = new Hashtable();
args.put("top", "2");</pre>

<p>&nbsp;</p>

<h4>skip</h4>

<p>&nbsp;</p>

<p>The skip argument specifies that you want the service to skip a specified number of results. This argument in combination with top, serve as the basis to implement pagination.</p>

<p>Example:</p>

<pre class="prettyprint">
//Return records 21-30
Hashtable args = <strong>new</strong> Hashtable();
args.put("top", "10");
args.put("skip", "20");
</pre>

<p>&nbsp;</p>

<h4>select</h4>

<p>&nbsp;</p>

<p>The select argument allows you to specify the exact columns that you want the API to return. Separate them with commas if there is more than one.</p>

<p>In order to save bandwidth, it is always a good idea to add a select clause to most requests and retrieve the columns needed for a specific function. Some datasets can contain dozens of columns and the performance of your app can be impacted if you always return all of the columns. This is even more important in mobile applications because of device memory limitations, possible slow network speeds, and data usage caps imposed by carriers.</p>

<p>Example:</p>

<pre class="prettyprint">
//Select the AgencyId and AgencyFormNumber columns
Hashtable args = new Hashtable();
args.put("select", "AgencyId,AgencyFormNumber");</pre>

<p>&nbsp;</p>

<h4>orderby</h4>

<p>&nbsp;</p>

<p>Use the orderby argument to sort the data by one or more columns. Separate them with commas if there is more than one.</p>

<pre class="prettyprint">
//Order by the AgencyFormNumber column
Hashtable args = new Hashtable();
args.put("orderby", "AgencyFormNumber");</pre>

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
For example: <strong>(AgencyId eq ‘MSHA’) and (Title eq 'Legal Identity Report') </strong>retrieves the records where the value in the AgencyId column is equal to ‘MSHA’ and the value for the Title column is equal to 'Legal Identity Report'.</p>

<p>Example:</p>

<pre class="prettyprint">
//Filter columns
Hashtable args = new Hashtable();
args.put("filter", "(AgencyId eq  ‘MSHA’) and (Title eq 'Legal Identity Report')");</pre>

<p>&nbsp;</p>

<h3>DOL Service Operation for Summer Jobs Plus</h3>

<p>&nbsp;</p>

<p>To use the Service Operations API the Operation name and parameters need to be supplied using the data services format. Each String typed parameter must be surrounded in quotes in order to work correctly. These quotes are then Url encoded and passed to the Service Operation.</p>

<h4>format</h4>

<p>The format argument allows you to specify the format that the results string will be returned. If format argument is not passed with request then result will be returned in json format by default. Following are the supported format of results string.</p>

<p><label>Format Codes:</label><br />
json ( Default )<br />
xml<br />
atom</p>

<p>Example:</p>

<pre class="prettyprint">
// HashMap to store the arguments
Hashtable summerJobsArgs = <strong>new</strong> Hashtable();
summerJobsArgs.put("format", "'json'");
</pre>

<p>&nbsp;</p>

<h4>query</h4>

<p>&nbsp;</p>

<p>The query argument will be used to find matching job listings. This is required if region or locality are not provided.</p>

<p>Example:</p>

<pre class="prettyprint">
// HashMap to store the arguments
Hashtable summerJobsArgs = <strong>new</strong> Hashtable();
summerJobsArgs.put("format", "'json'");
summerJobsArgs.put("query", "'Farm'");
</pre>

<p>&nbsp;</p>

<h4>region</h4>

<p>&nbsp;</p>

<p>The region argument will be used to filter jobs listings by the state name or abbreviation. This is required if query or locality are not provided.</p>

<p>Example:</p>

<pre class="prettyprint">
// HashMap to store the arguments
Hashtable summerJobsArgs = <strong>new</strong> Hashtable();
summerJobsArgs.put("format", "'json'");
summerJobsArgs.put("query", "'Farm'");
summerJobsArgs.put("region", "");
</pre>

<p>&nbsp;</p>

<h4>locality</h4>

<p>&nbsp;</p>

<p>The region argument will be used to filter jobs listings by The city name. This is required if query or region are not provided.</p>

<p>Example:</p>

<pre class="prettyprint">
// HashMap to store the arguments
Hashtable summerJobsArgs = <strong>new</strong> Hashtable();
summerJobsArgs.put("format", "'json'");
summerJobsArgs.put("query", "'Farm'");
summerJobsArgs.put("region", "");
summerJobsArgs.put("locality", "");
</pre>

<p>&nbsp;</p>

<h4>skipCount</h4>

<p>&nbsp;</p>

<p>The skipCount argument will be used to specify the number of records to skip ahead from the first recor.Valid range of 1-99 and it required.</p>

<p>Example:</p>

<pre class="prettyprint">
// HashMap to store the arguments
Hashtable summerJobsArgs = <strong>new</strong> Hashtable();
summerJobsArgs.put("format", "'json'");
summerJobsArgs.put("query", "'Farm'");
summerJobsArgs.put("region", "");
summerJobsArgs.put("skipCount", "1");
</pre>

<p>&nbsp;</p>

<h2>Licenses</h2>

<p>&nbsp;</p>

<p>The DOLData classes (whose file names start with DOLData) are released to the Public Domain.<br />
This SDK makes use of other libraries that are licensed differently. Please read them carefully.</p>

<h3>org.json.me, org.json.me.util</h3>

<p>Copyright (c) 2002 JSON.org</p>

<p>Permission is hereby granted, free of charge, to any person obtaining a copy<br />
of this software and associated documentation files (the "Software"), to deal<br />
in the Software without restriction, including without limitation the rights<br />
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell<br />
copies of the Software, and to permit persons to whom the Software is<br />
furnished to do so, subject to the following conditions:</p>

<p>The above copyright notice and this permission notice shall be included in all<br />
copies or substantial portions of the Software.</p>

<p>The Software shall be used for Good, not Evil.</p>

<p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE<br />
SOFTWARE.</p>

<h3>HttpConecctionFactory.java</h3>

<p>Marcus Watkins (marcus@versatilemonkey.com)<br />
1.0 (June 24, 2009)<br />
http://www.versatilemonkey.com<br />
<br />
This code is public domain, do with it whatever you wish.</p>
