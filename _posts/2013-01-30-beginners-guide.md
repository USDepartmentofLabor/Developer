---
layout: page
title: Beginner's Guide
created: 1359565402
---


To use the API you must register at <a href="https://devtools.dol.gov/developer">https://devtools.dol.gov/developer</a> and request an API key for each application that will access the API. Registration and API keys are free.
<div class="guide_note">
    <strong>note:</strong> A separate API key is not necessary for each application, but if you reuse your key across multiple apps, <a href="http://developer.dol.gov/dataset/api-metrics-key">your apps' metrics</a> will be combined and of little value.
</div>

<h2>Registration process</h2>

<ul>
	<li>Visit <a href="https://devtools.dol.gov/developer">https://devtools.dol.gov/developer</a></li>
	<li>Click the Register link.</li>
	<li>Fill in the registration form and submit it.</li>
	<li>A confirmation email will be sent to the address you provided during registration.</li>
	<li>Click on the link in the email to activate your developer account.</li>
</ul>

<h2>API Key (Token) Creation Process</h2>

<ul>
	<li>Visit <a href="https://devtools.dol.gov/developer">https://devtools.dol.gov/developer</a></li>
	<li>Go to the login page and enter your username and password</li>
	<li>Click on the My Tokens link</li>
	<li>Click "Create New Token"</li>
	<li>Provide a Shared Secret, Application Name, and a Description</li>
	<li>The token value will be auto-generated and added to your tokens list.</li>
</ul>

<h2><a id="accessing" class="anchor">Accessing the API</a></h2>

<p>The API is exposed as an <a href="http://www.odata.org/">OData</a> producer, with the addition of request authorizations. We are providing SDK's for some platforms that abstract the OData and request signing process and provides you with an easy to use method call. Please visit the <a href="{{ site.baseurl }}/sdk/">SDKs Page</a> to learn more about the DOL Data SDKs.</p>

<strong>Example</strong>
Assume that you want to read data from the Agencies table found in the dataset named DOLAgency. The request URL is: 
```http://api.dol.gov/V1/DOLAgency/Agencies```.

Your API Key (Token) is d9c6c290-da4c-424e-a378-fb4bd027b58b
<div class="guide_note"><strong>note:</strong> This token is only an example.  It is not usable.</div>

Your direct link to Agency data using the input above is:

```
http://api.dol.gov/V1/DOLAgency/Agencies/?KEY=d9c6c290-da4c-424e-a378-fb4bd027b58b
```
<h2 class="subtitle">Result Format</h2>

By default, the DOL API's responses are in XML format.  To receive the data in JSON, send an "Accept" header with "application/json."

<h2 class="subtitle">Next Steps</h2>

Following the steps above will return the first 100 records.  To retrieve more or to be more selective in the data that is returned, <a href="{{ site.baseurl }}/accessing-the-apis-using-http-requests/">read on about accessing the API using HTTP requests</a>.
<p>&nbsp;</p>



<a href="{{ site.baseurl }}/accessing-the-apis-using-http-requests/" class="button radius button_wide">How to Customize Your Request</a>
