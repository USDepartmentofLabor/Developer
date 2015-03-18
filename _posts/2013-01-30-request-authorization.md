---
layout: page
title: Request Authorization
created: 1359565490
---

<h2>API Key Registration</h2>

<p>To make requests to the API service you must register at <a href="https://devtools.dol.gov/developer">https://devtools.dol.gov/developer</a> and create an API key for each application that will access the API. As part of the key generation process you must assign a shared secret to each key in order to sign every API request.</p>

<h2>Request Authorization</h2>

<p>All requests must include an authorization header to authorize the request.</p>

<p>You must add a request header named <strong>Authorization </strong>that contains a timestamp, your API Key and a signature. Each individual item is created as follows:</p>

<h2>Timestamp</h2>

<p>The timestamp format shall be ISO 8601. Each date and time value has a fixed number of digits that must be padded with leading zeros. The timestamp shall be provided using the UTC time zone. The date format shall be <em>yyyy-MM-ddThh:mm:ssZ</em></p>

<p>yyyy =&nbsp; four digit year (e.g. 2011)<br />
MM = two digit month, padded if less than 10 (e.g. 04)<br />
dd = two digit day, padded if less than 10 (e.g. 09)<br />
T = Time separator (always T)<br />
hh = two digit hour, in 24hr format, padded if less than 10 (e.g. 18)<br />
mm = two digit minute, padded if less than 10 ( e.g. 09 )<br />
ss = two digit second, padded if less than 10 ( e.g. 00 )<br />
Z = timezone (always T which means UTC)</p>

<h3>Example</h3>

<p>Request from a client to the service on March 9th, 2011 at 6:09:00 PM. Local time zone is ADT (or UTC -4).<br />
To create a valid time stamp you shall:</p>

<ol>
	<li>Convert time to UTC – Results in March 9th, 2011 at 10:09 PM</li>
	<li>Apply the &nbsp;<em>yyyy-MM-ddThh:mm:ssZ </em>format –</li>
</ol>

<p>Results in 2011-03-09T22:09:00Z</p>

<p><em>*Note: To accommodate for small differences on clocks and prevent request forgery there is a 15-minute window for valid timestamps to be accepted by the server.</em></p>

<h2>API Key</h2>

<p>The API key is provided to identify an application that requests data from the DOL Data API. You must register at [Registration URL] and create an API key for each application that accesses the API. This key must be provided with every request as part of the authorization header. The API keys are auto-generated in a standard GUID format. An example API key is <em>21EC2020-3AEA-1069-A2DD-08002B30309D</em></p>

<h2>Signature</h2>

<p>Each request must contain a signature to authenticate that the owner of the API key is the one making the request. The signature is computed using the HMAC-SHA1 algorithm providing the API key's Shared Secret as the secret key and the Authorization header as the input.</p>

<h3>Example</h3>

<p>You want to read data from table <em>Agencies</em> in the dataset named <em>FORMS</em>.</p>

<p>The request URL is: <a>http://api.dol.gov/V1/FORMS/Agencies</a> (P.S. Request URL pattern may be different for each technology/platform,please see documentation and samples)<br />
Your API Key is <span class="style1">d9c6c290-da4c-424e-a378-fb4bd027b58b</span><br />
Your shared secret is <span class="style1">mysecret11111111111</span><br />
Local time is <span class="style1">March 9th, 2011 at 6:09:00 PM UTC-4</span></p>

<h3>Steps</h3>

<ol>
	<li>Calculate timestamp (see timestamp section):<span class="style1"> 2011-03-09T22:09:00Z</span></li>
	<li>Build an authorization string using the request URI and appending the timestamp and API Key values. The URI must not include the top-level domain. Field names must be labeled Timestamp and ApiKey respectively and must be appended by the "&amp;" character. This string is case sensitive.<br />
	<br />
	Resulting Authorization String:<br />
	<span class="style1">/V1/FORMS/Agencies&amp;Timestamp=2011-03-09T22:09:00Z&amp;ApiKey=d9c6c290-da4c-424e-a378-fb4bd027b58b</span></li>
	<li>Pass the string through the HMAC-SHA1 algorithm using the shared secret as a key. Signature = HMAC-SHA1(<em>Authorization String</em>) using key <span class="style1">mysecret11111111111</span><br />
	<br />
	Signature = <span class="style1">CALCULATED SIGNATURE</span></li>
</ol>

<h2>Authorization Header</h2>

<p>The Authorization header must be supplied with every request. It is composed of the Timestamp, ApiKey, and Signature values as specified in this document.</p>

<p>The "Authorization" header must be set to <span class="style1">Timestamp={0}&amp;ApiKey={1}&amp;Signature={2}</span> where {0}, {1}, and {2} are the values for Timestamp, API Key, and Signature respectively. The values must be calculated as specified in this document.</p>

<h3>Example</h3>

<p>You want to read data from table <em>Agencies</em> in the dataset named <em>FORMS</em>.</p>

<p>The request URL is: <a>http://api.dol.gov/V1/FORMS/Agencies</a> (P.S. Request URL pattern may be different for each technology/platform,please see documentation and samples)<br />
Your API Key is <span class="style1">d9c6c290-da4c-424e-a378-fb4bd027b58b</span><br />
Your shared secret is <span class="style1">mysecret11111111111</span><br />
Local time is <span class="style1">March 9th, 2011 at 6:09:00 PM UTC-4</span></p>

<h3>Steps</h3>

<ol>
	<li>Calculate timestamp (see timestamp section): <span class="style1">2011-03-09T22:09:00Z</span></li>
	<li>Calculate signature (see signature section): <span class="style1">CALCULATED SIGNATURE</span></li>
	<li>Create Authorization header:<br />
	<span class="style1">Timestamp=2011-03-09T22:09:00Z&amp;ApiKey=d9c6c290-da4c-424e-a378-fb4bd027b58b &amp;Signature=CALCULATED SIGNATURE</span></li>
	<li>Append a header to the request named "Authorization" and set its value to the calculated result. The service will validate your request using a similar process and respond with the data requested.</li>
</ol>

<h2>Response Formats - XML and JSON</h2>

<p>The API is capable of returning results in both XML and JSON formats. XML is the default type returned if a type is not specified. To request results in JSON format you must modify the "Accept" header of the request and set it to <span class="style1">application/json</span>. If the Accept header is not present XML data will be returned.</p>
