---
layout: post
title: iOS gov Data SDK
created: 1359487450
---

<h2>Add SDK files to your project</h2>

<p><a href="/sites/default/files/iOS_DOLDataSDK.zip">Extract the zipped SDK folder</a> or grab the <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=https://github.com/USDepartmentofLabor/DOLDataSDK-iOS&amp;exitTitle=GitHub&amp;fedpage=no">Git repository</a>.<br />
Copy the GOVDataSDK folder to your Xcode project.</p>

<h2>Add Required Frameworks</h2>

<p>Select your project and then select the project target in the middle pane. From the right pane select Build Phases. Expand the "Link Binary With Libraries" section. Add the required frameworks:</p>

<ul>
	<li>libz.dylib</li>
	<li>MobileCoreServices.framework</li>
	<li>CFNetwork.framework</li>
	<li>SystemConfiguration.framework</li>
</ul>

<p>Frameworks<br />
<img alt="screenshot of frameworks to add" src="/sites/default/files/opa.developer.sdk.ios.api-sample.jpg" style="width: 400px; height: 190px; " /></p>

<h2>Using the SDK</h2>

<h3>Reference the DOL Data API in your source file</h3>

<p>In the source files that will make DOL Data requests add the following imports:</p>

<pre class="prettyprint">
#import "GOVDataRequest.h"
#import "GOVDataContext.h"</pre>

<h2>Prepare your class for delegate callbacks</h2>

<p>The GOV Data SDK processes requests asynchronously to prevent locking up the UI while the data is requested and processed. To achieve this the SDK makes use of delegate methods. To successfully retrieve data it is required to implement the two <strong>GOVDataRequestDelegate </strong>methods and set your class as the delegate for the request. The methods will be invoked when the results have been processed or when an error occurs.</p>

<p>1. Implement the <strong>GOVDataRequestDelegate </strong>protocol<strong> </strong>to the class that will receive and process the API responses</p>

<p>Example:</p>

<pre class="prettyprint">
@interface RootViewController : UITableViewController&lt;GOVDataRequestDelegate&gt;</pre>

<p>2. Add the delegate methods to your class</p>

<pre class="prettyprint">
//Results  delegate
-(void)govDataRequest:(GOVDataRequest *)request didCompleteWithResults:(NSArray *)resultsArray {
     //for Standard DOL API datasets
	           //Add your code here
	           //resultsArray is an array of NSDictionaries
	           //One NSDictionary per table row 
    //for Standard DOL Data service - Summer job Plus,
	           //Add your code here
	           //resultsArray is an array of NSDictionaries
	           //Get the value of first key from NSDictionary in form of NSDictionaries.
		   //From NSDictionaries , look for "getJobsListing" which return the NSDictionary object.
		   //From getJobsListing object which is type of NSDictionaries , object using key "items" , result is an array , each element in array is job result.
			
}

-(void)govDataRequest:(GOVDataRequest *)request didCompleteWithDictionaryResults:(NSDictionary *)resultsDictionary {
    
    // for web services that are not processed by the SDK as an array. For example, the FCC's Public Inspection Files API
    // consult the API's documentation regarding data structure or use NSLog to inspect the data
}


//Error delegate  
-(void)govDataRequest:(GOVDataRequest *)request didCompleteWithError:(NSString *)error {
	//Add your code here to show  / handle error
}</pre>

<h3>Making API Calls</h3>

<p>The <strong>GOVDataRequest</strong> class is used to make API calls. It requires a context object to be passed to its constructor in order to get the API key and URL information needed for the requests. The <strong>GOVDataContext</strong> is the context class used to hold this information.</p>

<p>You can also pass arguments to the API call by adding them to a NSDictionary as key/value pairs and passing it as the second parameter of the <strong>callAPIMethod</strong> method. Valid arguments are defined later in this document</p>

<ul>
	<li>Instantiate a <strong>GOVDataContext</strong> object</li>
	<li>Instantiate a <strong>GOVDataRequest</strong> object and pass the context</li>
	<li>Set your class as the delegate for the <strong>GOVDataRequest</strong></li>
	<li>Create a <strong>NSDictionary</strong> and store all the API arguments as key/value pairs.</li>
	<li>Call the <strong>callAPIMethod</strong> method, passing the API name and the arguments (or null if there are no arguments)</li>
</ul>

<p><u>Sample code to make requests for standard DOL API datasets:</u></p>

<pre class="prettyprint">
//API  and URL constants
#define API_KEY @"YOUR API KEY" 
#define API_SECRET @"YOUR SHARED SECRET" 
#define  API_HOST @"http://api.dol.gov"
#define API_URL @"/V1"
/////////////////////////////////////

//Instantiate  Gov Data context object
//This  object stores the API information required to make requests
GOVDataContext *context = [[GOVDataContext alloc] initWithAPIKey:API_KEY Host:API_HOST SharedSecret:API_SECRET APIURL:API_URL]

//Instantiate  new request object. Pass the context that contains all the API key info.  This object is used even when there is no API key.
GOVDataRequest *dataRequest = [[GOVDataRequest alloc]initWithContext:context];

//Set  this class as the one that responds to the delegate methods 
dataRequest.delegate = self; 

//API  you want to fetch data from 
NSString *method = @"FORMS/Agencies"; 

//Build NSDictionary arguments
//Example to retrieve top 10 records and just get one field. 
NSDictionary *arguments = [NSDictionary dictionaryWithObjectsAndKeys:@"10", @"top", @"AgencyName", @"select", nil];

//Set the timeout.  Set this higher for long-loading APIs
int timeOut = 20;

//Make API call
[dataRequest callAPIMethod:method withArguments:arguments andTimeOut:timeOut];</pre>

<p>&nbsp;</p>

<p><u>Sample code to make requests for DOL Service Operation (e.g Summer Jobs Plus) :</u></p>

<p>&nbsp;</p>

<pre class="prettyprint lang-c">
//API  and URL constants
#define API_KEY @"YOUR API KEY" 
#define API_SECRET @"YOUR SHARED SECRET" 
#define  API_HOST @"http://api.dol.gov"
/////////////////////////////////////

//Instantiate  Gov Data context object
//This  object stores the API information required to make requests
GOVDataContext *context = [[GOVDataContext alloc] initWithAPIKey:API_KEY Host:API_HOST SharedSecret:API_SECRET APIURL:API_URL]

//Instantiate  new request object. Pass the context that contains all the API key info.  This object is used even when there is no API key.
GOVDataRequest *dataRequest = [[GOVDataRequest alloc]initWithContext:context];

//Set  this class as the one that responds to the delegate methods 
dataRequest.delegate = self; 

//API  you want to fetch data from 
NSString *method = @"SummerJobs/getJobsListing"; 

//Build NSDictionary arguments
//set value of format,query,region,locality and skipcount
//Please Note : Each String typed parameter must be surrounded in quotes in order to work correctly. 
//These quotes are then Url encoded and passed to the Service Operation.
//Each parameter that is assigned null should be left blank

//Please note:  the iOS SDK does not support the SummerJobs service at this time.

NSDictionary *arguments = [NSDictionary dictionaryWithObjectsAndKeys:@"'xml'", @"format", @"'farm'", @"query", @"", @"region", @"", @"locality", @"1", @"skipcount", nil];

//Set the timeout.  Set this higher for long-loading APIs
int timeOut = 20;

//Make API call
[dataRequest callAPIMethod:method withArguments:arguments andTimeOut:timeOut];</pre>

<p>&nbsp;</p>

<p>The callAPIMethod triggers the SDK to process the request, add authorization headers and invoke the delegate methods with the results or with an error message. Once the process has completed one of the three delegate methods from the GOVDataRequestDelegate&nbsp;&nbsp; protocol will be called. If successful, the <strong>didCompleteWithResults</strong> or <strong>didCompleteWithDictionaryResults</strong> method will be called and the resultsArray or resultsDictionary parameter, depending on the format of the data you received, will contain the data you requested. If the request failed for any reason, the <strong>didCompleteWithError</strong> will be called and the error parameter will contain a description of the error.</p>

<p>&nbsp;</p>

<pre class="prettyprint">
//Results  delegate
-(void)govDataRequest:(GOVDataRequest *)request didCompleteWithResults:(NSArray *)resultsArray {
     //for Standard DOL API datasets
	           //Add your code here
	           //resultsArray is an array of NSDictionaries
	           //One NSDictionary per table row 
    //for Standard DOL Data service - Summer job Plus,
	           //Add your code here
	           //resultsArray is an array of NSDictionaries
	           //Get the value of first key from NSDictionary in form of NSDictionaries.
		   //From NSDictionaries , look for "getJobsListing" which return the NSDictionary object.
		   //From getJobsListing object which is type of NSDictionaries , object using key "items" , result is an array , each element in array is job result.
			
}

-(void)govDataRequest:(GOVDataRequest *)request didCompleteWithDictionaryResults:(NSDictionary *)resultsDictionary {
    
    // for web services that are not processed by the SDK as an array. For example, the FCC's Public Inspection Files API
    // consult the API's documentation regarding data structure or use NSLog to inspect the data
}


//Error delegate  
-(void)govDataRequest:(GOVDataRequest *)request didCompleteWithError:(NSString *)error {
	//Add your code here to show  / handle error
}</pre>

<p>&nbsp;</p>

<h3>API Method Arguments</h3>

<p>&nbsp;</p>

<h3>Standard DOL API datasets</h3>

<p>The top argument is used to specify the number of records to be returned.</p>

<p>Example:</p>

<pre class="prettyprint">
NSDictionary *args = [NSDictionary dictionaryWithObject:@"2" forKey:@"top"];</pre>

<p>&nbsp;</p>

<h4>skip</h4>

<p>&nbsp;</p>

<p>The skip argument specifies that you want the service to skip a specified number of results. This argument in combination with top, serve as the basis to implement pagination.</p>

<p>Example:</p>

<pre class="prettyprint">
//Return records 21-30
NSDictionary  *arguments = [NSDictionary dictionaryWithObjectsAndKeys:@"10", @"top", @"20", @"skip", nil];</pre>

<p>&nbsp;</p>

<h4>select</h4>

<p>&nbsp;</p>

<p>The select argument allows you to specify the exact columns that you want the API to return. Separate them with commas if there is more than one.</p>

<p>In order to save bandwidth, it is always a good idea to add a select clause to most requests and retrieve the columns needed for a specific function. Some datasets can contain dozens of columns and the performance of your app can be impacted if you always return all of the columns. This is even more important in mobile applications because of device memory limitations, possible slow network speeds, and data usage caps imposed by carriers.</p>

<p>Example:</p>

<pre class="prettyprint">
//Select the AgencyId and AgencyFormNumber columns
NSDictionary *args = [NSDictionary dictionaryWithObject:@"AgencyId,AgencyFormNumber" forKey:@"select"];</pre>

<p>&nbsp;</p>

<h4>orderby</h4>

<p>&nbsp;</p>

<p>Use the orderby argument to sort the data by one or more columns. Separate them with commas if there is more than one.</p>

<pre class="prettyprint">
//Order by the AgencyFormNumber column
NSDictionary *args = [NSDictionary dictionaryWithObject:@"AgencyFormNumber" forKey:@"orderby"];</pre>

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
NSDictionary *args = [NSDictionary dictionaryWithObject: :@"(AgencyId eq  'MSHA') and (Title eq 'Legal Identity Report')" forKey:@"filter"];</pre>

<p>&nbsp;</p>

<h2>Licenses</h2>

<p>&nbsp;</p>

<p>The GOVData and DOLData classes (whose file names start with GOVData or DOLData) are released to the Public Domain.</p>

<p>This SDK makes use of other libraries that are licensed differently. Please read them carefully.</p>

<h3><a name="sbjson">SBJSON</a></h3>

<p><a name="sbjson"> </a></p>

<p><a name="sbjson">/*<br />
Copyright (C) 2009-2010 Stig Brautaset. All rights reserved.<br />
<br />
Redistribution and use in source and binary forms, with or without<br />
modification, are permitted provided that the following conditions are met:<br />
<br />
* Redistributions of source code must retain the above copyright notice, this<br />
list of conditions and the following disclaimer.<br />
<br />
* Redistributions in binary form must reproduce the above copyright notice,<br />
this list of conditions and the following disclaimer in the documentation<br />
and/or other materials provided with the distribution.<br />
<br />
* Neither the name of the author nor the names of its contributors may be used<br />
to endorse or promote products derived from this software without specific<br />
prior written permission.<br />
<br />
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"<br />
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE<br />
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE<br />
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE<br />
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL<br />
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR<br />
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER<br />
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,<br />
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE<br />
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.<br />
*/</a></p>

<h3><a name="sbjson"></a><a name="asihttp"></a>ASIHTTP</h3>

<p>* Copyright (c) 2007-2011, All-Seeing Interactive<br />
* All rights reserved.<br />
*<br />
* Redistribution and use in source and binary forms, with or without<br />
* modification, are permitted provided that the following conditions are met:<br />
*&nbsp;&nbsp;&nbsp;&nbsp; * Redistributions of source code must retain the above copyright<br />
*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; notice, this list of conditions and the following disclaimer.<br />
*&nbsp;&nbsp;&nbsp;&nbsp; * Redistributions in binary form must reproduce the above copyright<br />
*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; notice, this list of conditions and the following disclaimer in the<br />
*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; documentation and/or other materials provided with the distribution.<br />
*&nbsp;&nbsp;&nbsp;&nbsp; * Neither the name of the All-Seeing Interactive nor the<br />
*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; names of its contributors may be used to endorse or promote products<br />
*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; derived from this software without specific prior written permission.<br />
*<br />
* THIS SOFTWARE IS PROVIDED BY All-Seeing Interactive ''AS IS'' AND ANY<br />
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED<br />
* WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE<br />
* DISCLAIMED. IN NO EVENT SHALL All-Seeing Interactive BE LIABLE FOR ANY<br />
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES<br />
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;<br />
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND<br />
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT<br />
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS<br />
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.</p>

<p>A different license may apply to other software included in this package,<br />
including GHUnit and Andrew Donoho's Reachability class. Please consult their<br />
respective headers for the terms of their individual licenses.</p>

<h3><a name="reach"></a>Reachability</h3>

<p>Extensions Copyright (C) 2009 Donoho Design Group, LLC. All Rights Reserved.<br />
<br />
Redistribution and use in source and binary forms, with or without<br />
modification, are permitted provided that the following conditions are<br />
met:<br />
<br />
* Redistributions of source code must retain the above copyright notice,<br />
this list of conditions and the following disclaimer.<br />
<br />
* Redistributions in binary form must reproduce the above copyright<br />
notice, this list of conditions and the following disclaimer in the<br />
documentation and/or other materials provided with the distribution.<br />
<br />
* Neither the name of Andrew W. Donoho nor Donoho Design Group, L.L.C.<br />
may be used to endorse or promote products derived from this software<br />
without specific prior written permission.<br />
<br />
THIS SOFTWARE IS PROVIDED BY DONOHO DESIGN GROUP, L.L.C. "AS IS" AND ANY<br />
EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE<br />
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR<br />
PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR<br />
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,<br />
EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,<br />
PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR<br />
PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF<br />
LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING<br />
NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS<br />
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.<br />
<br />
*/</p>

<p>/*<br />
<br />
Apple's Original License on Reachability v2.0<br />
<br />
Disclaimer: IMPORTANT:&nbsp; This Apple software is supplied to you by Apple Inc.<br />
("Apple") in consideration of your agreement to the following terms, and your<br />
use, installation, modification or redistribution of this Apple software<br />
constitutes acceptance of these terms.&nbsp; If you do not agree with these terms,<br />
please do not use, install, modify or redistribute this Apple software.<br />
<br />
In consideration of your agreement to abide by the following terms, and subject<br />
to these terms, Apple grants you a personal, non-exclusive license, under<br />
Apple's copyrights in this original Apple software (the "Apple Software"), to<br />
use, reproduce, modify and redistribute the Apple Software, with or without<br />
modifications, in source and/or binary forms; provided that if you redistribute<br />
the Apple Software in its entirety and without modifications, you must retain<br />
this notice and the following text and disclaimers in all such redistributions<br />
of the Apple Software.<br />
<br />
Neither the name, trademarks, service marks or logos of Apple Inc. may be used<br />
to endorse or promote products derived from the Apple Software without specific<br />
prior written permission from Apple.&nbsp; Except as expressly stated in this notice,<br />
no other rights or licenses, express or implied, are granted by Apple herein,<br />
including but not limited to any patent rights that may be infringed by your<br />
derivative works or by other works in which the Apple Software may be<br />
incorporated.<br />
<br />
The Apple Software is provided by Apple on an "AS IS" basis.&nbsp; APPLE MAKES NO<br />
WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION THE IMPLIED<br />
WARRANTIES OF NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS FOR A PARTICULAR<br />
PURPOSE, REGARDING THE APPLE SOFTWARE OR ITS USE AND OPERATION ALONE OR IN<br />
COMBINATION WITH YOUR PRODUCTS.<br />
<br />
IN NO EVENT SHALL APPLE BE LIABLE FOR ANY SPECIAL, INDIRECT, INCIDENTAL OR<br />
CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE<br />
GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)<br />
ARISING IN ANY WAY OUT OF THE USE, REPRODUCTION, MODIFICATION AND/OR<br />
DISTRIBUTION OF THE APPLE SOFTWARE, HOWEVER CAUSED AND WHETHER UNDER THEORY OF<br />
CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY OR OTHERWISE, EVEN IF<br />
APPLE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.<br />
<br />
Copyright (C) 2009 Apple Inc. All Rights Reserved.<br />
<br />
*/</p>

<h3><a name="XMLReader"></a>XMLReader</h3>

<p>Permission is hereby granted, free of charge, to any person obtaining a copy<br />
of this software and associated documentation files (the "Software"), to deal<br />
in the Software without restriction, including without limitation the rights<br />
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell<br />
copies of the Software, and to permit persons to whom the Software is<br />
furnished to do so, subject to the following conditions:<br />
<br />
The above copyright notice and this permission notice shall be included in<br />
all copies or substantial portions of the Software.<br />
<br />
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR<br />
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,<br />
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE<br />
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER<br />
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,<br />
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN<br />
THE SOFTWARE.</p>
