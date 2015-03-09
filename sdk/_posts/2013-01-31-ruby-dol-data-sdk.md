---
layout: post
title: Ruby DOL Data SDK
created: 1359638074
---

<h2>Adding the SDK to Your Project</h2>

<h3>Add SDK files to your project</h3>

<p><a href="/sites/default/files/Ruby_DOLDataSDK.zip">Extract the zipped SDK folder</a> or grab the <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=https://github.com/USDepartmentofLabor/Ruby_DOLDataSDK&amp;exitTitle=GitHub&amp;fedpage=no">Git repository</a>.<br />
Copy the DOLDataSDK.rb file into your project.</p>

<h3>Install Required Gems</h3>

<p>Install the required gems:</p>

<ul>
	<li><a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://rubygems.org/gems/json&amp;exitTitle=json&amp;fedpage=no">json</a></li>
	<li><a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://rubygems.org/gems/ruby-hmac&amp;exitTitle=ruby-hmac&amp;fedpage=no">ruby-hmac</a></li>
</ul>

<h2>Using the SDK</h2>

<h3>Reference the DOL Data API in your source file</h3>

<p>In the source files that will make DOL Data requests add the following require:</p>

<pre class="prettyprint">
require "./DOLDataSDK"</pre>

<h3>Making API Calls</h3>

<p>The <strong>DOL::DataRequest</strong> class is used to make API calls. It requires a context object to be passed to its constructor in order to get the API key and URL information needed for the requests. The <strong>DOL::DataContext</strong> is the context class used to hold this information.</p>

<p>You can also pass arguments to the API call by adding them to a <strong>Hash</strong> as key/value pairs and passing it as the second argument of the <strong>#call_api</strong> method. Valid arguments are defined later in this document.</p>

<p>In order to make requests:</p>

<ul>
	<li>Instantiate a <strong>DOL::DataContext</strong> object</li>
	<li>Instantiate a <strong>DOL::DataRequest</strong> object and initialize it with the context</li>
	<li>Create a <strong>Hash</strong> and store all the API arguments as key/value pairs.</li>
	<li>Call the <strong>#call_api</strong> method, passing the API name and the arguments (leave off the arguments if there are no arguments)</li>
	<li>Provide <strong>#call_api</strong> with a block to be executed when the results have been processed.</li>
</ul>

<p>Sample code to make requests for standard DOL API datasets:</p>

<pre class="prettyprint">
require "./DOLDataSDK"

#Instantiate  DOL Data context object
#This  object stores the API information required to make requests
context = DOL::DataContext.new "http://api.dol.gov", "your-api-key", "your-shared-secret"

#Instantiate  new request object. Pass the context that contains all the API key info
request = DOL::DataRequest.new context

#API  you want to fetch data from
method = "FORMS/Agencies"

#Build Hash arguments
#Example to retrieve top 10 records and just get one field. 
arguments = { :top =&gt; 10, :select =&gt; "AgencyName" }

#Make API call
request.call_api method, arguments do |results, error|
    if error
        #handle error
    else
        #handle success
    end
end</pre>

<p>Sample code to make requests for DOL Service Operation (e.g Summer Jobs Plus) :</p>

<pre class="prettyprint">
require "./DOLDataSDK"

#Instantiate  DOL Data context object
#This  object stores the API information required to make requests
context = DOL::DataContext.new "http://api.dol.gov", "your-api-key", "your-shared-secret"

#Instantiate  new request object. Pass the context that contains all the API key info
request = DOL::DataRequest.new context

#API  you want to fetch data from
method = "SummerJobs/getJobsListing"

#Build Hash arguments
#Example to retrieve top 10 records and just get one field. 
arguments = { :format =&gt; '\'json\'', :query =&gt; '\'farm\'', :region =&gt; '', :locality =&gt; '', :skipCount =&gt; '1' }

#Make API call
request.call_api method, arguments do |results, error|
    if error
        #handle error
    else
        #handle success
    end
end</pre>

<p>The <strong>#call_api</strong> triggers the SDK to process the request, add authorization headers and execute the block with the results or with an error message. This occurs in a seperate thread, so as not to block the main thread. The <strong>DOL::DataRequest#wait_until_finished</strong> method should be called if the program needs to be halted until the request processes.<br />
&nbsp;</p>

<h2>API Method Arguments</h2>

<h3>Standard DOL API datasets</h3>

<h4>top</h4>

<p>The top argument is used to specify the number of records to be returned.</p>

<p>Example:</p>

<pre class="prettyprint">
args = { :top =&gt; 2 }</pre>

<h4>skip</h4>

<p>The skip argument specifies that you want the service to skip a specified number of results. This argument in combination with top, serve as the basis to implement pagination.</p>

<p>Example:</p>

<pre class="prettyprint">
#Return records 21-30
args = { :top =&gt; 10, :skip =&gt; 20 }</pre>

<h4>select</h4>

<p>The select argument allows you to specify the exact columns that you want the API to return. Separate them with commas if there is more than one.</p>

<p>In order to save bandwidth, it is always a good idea to add a select clause to most requests and retrieve the columns needed for a specific function. Some datasets can contain dozens of columns and the performance of your app can be impacted if you always return all of the columns. This is even more important in mobile applications because of device memory limitations, possible slow network speeds, and data usage caps imposed by carriers.</p>

<p>Example:</p>

<pre class="prettyprint">
#Select the AgencyId and AgencyFormNumber columns
args = { :select =&gt; "AgencyId,AgencyFormNumber" }</pre>

<h4>orderby</h4>

<p>Use the orderby argument to sort the data by one or more columns. Separate them with commas if there is more than one.</p>

<pre class="prettyprint">
#Order by the AgencyFormNumber column
args = { :orderby =&gt; "AgencyFormNumber" }</pre>

<h4>filter</h4>

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
args = { :filter =&gt; "(AgencyId eq 'MSHA') and (Title eq 'Legal Identity Report')" }</pre>

<h3>DOL Service Operation for Summer Jobs Plus</h3>

<p>To use the Service Operations API the Operation name and parameters need to be supplied using the data services format. Each String typed parameter must be surrounded in quotes in order to work correctly. These quotes are then Url encoded and passed to the Service Operation. Each integer typed parameter must be entered without quotes in order to work correctly.Each parameter that is assigned null should be left blank.</p>

<h4>format</h4>

<p>The format argument allows you to specify the format that the results string will be returned. If format argument is not passed with request then result will be returned in json format by default. Following are the supported format of results string.</p>

<p><label><a name="formatcodes"></a>Format Codes:</label><br />
json ( Default )<br />
xml<br />
atom</p>

<p>Example:</p>

<pre class="prettyprint">
args = { '\'json\'' };
</pre>

<h4>query</h4>

<p>The query argument will be used to find matching job listings. This is required if region or locality are not provided.</p>

<p>Example:</p>

<pre class="prettyprint">
args = { '\'json\'',:query =&gt; '\'farm\'' };
</pre>

<h4>region</h4>

<p>The region argument will be used to filter jobs listings by the state name or abbreviation. This is required if query or locality are not provided.</p>

<p>Example:</p>

<pre class="prettyprint">
args = { '\'json\'',:query =&gt; '\'farm\'',:region =&gt; ''};
</pre>

<h4>locality</h4>

<p>The region argument will be used to filter jobs listings by The city name. This is required if query or region are not provided.</p>

<p>Example:</p>

<pre class="prettyprint">
args = { '\'json\'',:query =&gt; '\'farm\'',:region =&gt; '', :locality=&gt; '' };
</pre>

<h4>skipCount</h4>

<p>The skipCount argument will be used to specify the number of records to skip ahead from the first recor.Valid range of 1-99 and it required.</p>

<p>Example:</p>

<pre class="prettyprint">
args = { '\'json\'',:query =&gt; '\'farm\'',:region =&gt; '', :locality=&gt; '' ,:skipCount =&gt; '1'};
</pre>

<h2>Licenses</h2>

<p>The DOLData classes (the classes within the DOL module) are released to the Public Domain.</p>

<p>This SDK makes use of other libraries that are licensed differently. Please read them carefully.</p>

<h3>json gem</h3>

<p><a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://www.ruby-lang.org/en/LICENSE.txt&amp;exitTitle=Ruby License&amp;fedpage=no">Ruby License</a></p>

<h3>ruby-hmac gem</h3>

<p>(The MIT License)<br />
<br />
Copyright © 2007 Daiki Ueno<br />
<br />
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:<br />
<br />
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.<br />
<br />
THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
