---
layout: page
title: Beginners Guide
created: 1359565402
---

<p>To use the API you must register at <a href="https://devtools.dol.gov/developer">https://devtools.dol.gov/developer</a> and request an API key for each application that will access the API. Registration and API keys are free. The API keys are used to digitally sign every request to the API.</p>

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

<h2><a name="accessing">Accessing the API</a></h2>

<p>The API is exposed as an <a href="http://www.odata.org/">OData</a> producer, with the addition of request authorizations. We are providing SDK's for some platforms that abstract the OData and request signing process and provides you with an easy to use method call. Please visit the <a href="{{ site.baseurl }}/sdk/">SDKs Page</a> to learn more about the DOL Data SDKs.</p>

<p>Additionally, you may use the SDKs provided by <a href="http://www.odata.org/">OData.org</a>. If you choose to use these SDK's you must extend the code to include a signed "Authorization" header. To make API calls you must sign your requests and include an Authorization header with every request. Please refer to <a href="{{ site.baseurl }}/request-authorization/">Request Authorization</a> document to learn how to create the authorization header. In the DOL SDK's the signature and header requirements are taken care of. You just need to provide your API Token and the Shared secret to the method that calls the API.</p>

<h3><a href="{{ site.baseurl }}/accessing-the-apis-using-http-requests/">Accessing the APIs Using HTTP Requests</a>
