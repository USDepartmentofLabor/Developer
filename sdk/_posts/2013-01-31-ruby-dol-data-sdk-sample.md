---
layout: post
title: Ruby DOL Data SDK Sample
created: 1359638881
---

<h2>Overview</h2>

<p>This sample will provide the steps to create a simple Ruby application that can consume DOL Data. Following these steps in order will allow your application to operate correctly.&nbsp;</p>

<p>This solution was built using:</p>

<ul>
	<li><a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://www.ruby-lang.org/en&amp;exitTitle=Ruby&amp;fedpage=no">Ruby</a></li>
</ul>

<h2>Create a New Project</h2>

<p>Create a project folder for this sample.<br />
<br />
Create a new text document using any text editor and save it as <strong>Sample.rb</strong> in the project folder.<br />
&nbsp;</p>

<h2>Add SDK to Project</h2>

<p>Copy the SDK file into the project folder. You can get this from one of these two locations:</p>

<ul>
	<li><a href="/sites/default/files/Ruby_DOLDataSDK.zip">Zip file download</a></li>
	<li><a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=https://github.com/USDepartmentofLabor/Ruby_DOLDataSDK&amp;exitTitle=GitHub&amp;fedpage=no">GitHub Repository</a></li>
</ul>

<p><br />
Ensure that you have installed the <strong> <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://rubygems.org/gems/json&amp;exitTitle=json&amp;fedpage=no">json</a></strong> and <strong><a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://rubygems.org/gems/ruby-hmac&amp;exitTitle=ruby-hmac&amp;fedpage=no">ruby-hmac</a></strong> gems.</p>

<pre class="prettyprint">
MACHINE:~ user$ gem install json
MACHINE:~ user$ gem install ruby-hmac</pre>

<h2>Locate the Dataset Path</h2>

<p>Each Dataset has a Dataset Location path that gives the URL that will be needed to reach the Dataset on the API. For this sample please see the one circled in red.<br />
<br />
<img alt="Add Service Reference" src="/sites/default/files/opa.developer.sdk.dotnet.DatasetLocation.png" style="width: 60%; " /><br />
<br />
For the DOL Service Operation sample please use <a>http://api.dol.gov/V1/SummerJobs</a><br />
<br />
<img alt="Locate Dataset Location path from Dataset, for Summer Job Plus Sample please use http://api.dol.gov/V1/SummerJobs " src="/sites/default/files/opa.developer.sdk.dotnet.ServicePath.png" /></p>

<h2>Implementing the DOL Data Request</h2>

<p>The <strong><a href="/sites/default/files/Ruby_DOLDataSDK.zip">DOLDataSDK.rb</a></strong> file handles everything required for submitting data requests to the DOL API. We will need the SDK classes in that file so we add them to <strong>Sample.rb</strong> with a require statement.<br />
&nbsp;</p>

<pre class="prettyprint">
require './DOLDataSDK'</pre>

<p>In order to submit data requests, we will need to create two objects; an instance of <strong>DOL::DataContext</strong>, to hold various information about our data request, and an instance of <strong>DOL::DataRequest</strong>, to handle the submission of the request.<br />
&nbsp;</p>

<pre class="prettyprint">
context = DOL::DataContext.new ‘http://api.dol.gov’, ‘your-token’, ‘your-shared-secret’
request = DOL::DataRequest.new context</pre>

<p>Next, we need to call <strong>DOL::DataRequest#call_api</strong> on the newly created <strong>DOL::DataRequest</strong> instance. This method submits the request to the DOL API. The method argument represents the Dataset and table portion of the Data location path. The arguments argument represents additional information sent to the API to narrow down the data you wish to recieve.<br />
<br />
For Standard DOL API datasets<br />
&nbsp;</p>

<pre class="prettyprint">
request.call_api ‘DOLAgency/Agencies’, :select =&gt; ‘Agency,AgencyFullName’, :orderby =&gt; ‘AgencyFullName’</pre>

<p>For DOL Service Operation (e.g. Summer Job Plus)<br />
&nbsp;</p>

<pre class="prettyprint">
#Each String type parameter must be surrounded in quotes in order to work correctly.
#These quotes are tehn Url encoded and passed to the Service Operation.
#Each parameter that is assigned null should be left blank
request.call_api 'SummerJobs/getJobsListing',	:format =&gt; '\'json\'', :query =&gt; '\'farm\'', 
						:region =&gt; '', :locality =&gt; '', 
						:skipcount =&gt; '1' do |results, error|</pre>

<p>Additionally, we need to provide <strong>#call_api</strong> with a block to execute after the DOL API returns the data we requested.<br />
<br />
For Standard DOL API datasets<br />
&nbsp;</p>

<pre class="prettyprint">
request.call_api ‘DOLAgency/Agencies’, :select =&gt; ‘Agency,AgencyFullName’, :orderby =&gt; ‘AgencyFullName’ do |results, error|
	if error
		puts error
	else
		results.each do |n|
			puts “#{n[‘Agency’]} - #{n[‘AgencyFullName’]}”
		end
	end
end</pre>

<p>For DOL Service Operation (e.g. Summer Job Plus)</p>

<pre class="prettyprint">
#Each String type parameter must be surrounded in quotes in order to work correctly.
#These quotes are tehn Url encoded and passed to the Service Operation.
#Each parameter that is assigned null should be left blank
request.call_api 'SummerJobs/getJobsListing',	:format =&gt; '\'json\'', :query =&gt; '\'farm\'', 
						:region =&gt; '', :locality =&gt; '', 
						:skipcount =&gt; '1' do |results, error|
						
	if error
		puts error
	else
	
		Jobs = results['getJobsListing']
		JobsListing = Jobs['items']
		# results
		JobsListing.each do |n|
			puts "#{n['title']} - #{n['snippet']}"
		end
		
	end
end</pre>

<p>Finally, we need to tell Ruby to wait until the request finishes before closing. We do this by calling <strong>DOL::DataRequest#wait_until_finished</strong> on the <strong>DOL::DataRequest</strong> instance.<br />
&nbsp;</p>

<pre class="prettyprint">
request.wait_until_finished</pre>

<p>The finished code should look like this:<br />
<br />
For Standard DOL API datasets :<br />
&nbsp;</p>

<pre class="prettyprint">
#Each String type parameter must be surrounded in quotes in order to work correctly.
#These quotes are tehn Url encoded and passed to the Service Operation.
#Each parameter that is assigned null should be left blank
request.call_api 'SummerJobs/getJobsListing',	:format =&gt; '\'json\'', :query =&gt; '\'farm\'', 
						:region =&gt; '', :locality =&gt; '', 
						:skipcount =&gt; '1' do |results, error|</pre>

<p>Additionally, we need to provide <strong>#call_api</strong> with a block to execute after the DOL API returns the data we requested.<br />
<br />
For Standard DOL API datasets<br />
&nbsp;</p>

<pre class="prettyprint">
request.call_api ‘DOLAgency/Agencies’, :select =&gt; ‘Agency,AgencyFullName’, :orderby =&gt; ‘AgencyFullName’ do |results, error|
	if error
		puts error
	else
		results.each do |n|
			puts “#{n[‘Agency’]} - #{n[‘AgencyFullName’]}”
		end
	end
end

request.wait_until_finished</pre>

<p>For DOL Service Operation (e.g. Summer Job Plus) :<br />
&nbsp;</p>

<pre class="prettyprint">
#Each String type parameter must be surrounded in quotes in order to work correctly.
#These quotes are tehn Url encoded and passed to the Service Operation.
#Each parameter that is assigned null should be left blank
request.call_api 'SummerJobs/getJobsListing',	:format =&gt; '\'json\'', :query =&gt; '\'farm\'', 
						:region =&gt; '', :locality =&gt; '', 
						:skipcount =&gt; '1' do |results, error|
						
	if error
		puts error
	else
	
		Jobs = results['getJobsListing']
		JobsListing = Jobs['items']
		# results
		JobsListing.each do |n|
			puts "#{n['title']} - #{n['snippet']}"
		end
		
	end
end

request.wait_until_finished</pre>

<h2>Configure Security</h2>

<p>Secure logins are provided using the following code; we will need to insure that the <strong>DOL::DataContext</strong> instance is initialied with both an <strong>ApiKey</strong> and a <strong>SharedSecret</strong>. Replace "your-token" and "your-shared-secret" in <strong>DOL::DataContext.new</strong> with your Token and SharedSecret.</p>

<ul>
	<li>The <strong>ApiKey</strong> corresponds to the <strong>Token</strong> identifier in your token list.</li>
	<li>The <strong>SharedSecret</strong> that is associated with that token.</li>
</ul>

<pre class="prettyprint">
context = DOL::DataContext.new ‘http://api.dol.gov’, ‘your-token’, ‘your-shared-secret’
request = DOL::DataRequest.new context</pre>

<h2>Run the Application</h2>

<p>In order to run this application you will need to open a terminal window and navigate into your project folder.<br />
<br />
<img alt="Enter Project Folder" src="/sites/default/files/opa.developer.sdk.ruby.Terminal.png" /><br />
<br />
Run the program with <strong>ruby Sample.rb</strong> and you should see a list of Agencies printed to the terminal.<br />
<br />
For Standard DOL API datasets :<br />
<br />
<img alt="Run the appliation to see a list of Agencies printed to the terminal" src="/sites/default/files/opa.developer.sdk.ruby.Data.png" /><br />
<br />
For DOL Service Operation (e.g. Summer Job Plus) :<br />
<br />
<img alt="Run the appliation to see a list of jobs printed to the terminal" src="/sites/default/files/opa.developer.sdk.ruby.summer_job_result.png" /><br />
&nbsp;</p>
