---
layout: post
title: iOS DOL Data SDK Sample
created: 1359488467
---

<h2>Overview</h2>

<p>This sample will provide the steps to create a simple iOS app that can consume DOL Data. Following these steps in order will allow your app to operate correctly.&nbsp;<!-- | 
<a href="/Samples/opa.DolData.SDK.V2.Example.Iphone.zip">Download project for Service Operation.</a> --></p>

<p>You can also <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=https://github.com/USDepartmentofLabor/StrategyTrackeriPad&amp;exitTitle=GitHub&amp;fedpage=no">download</a> a sample application that uses non-DOL APIs owned by other federal government agencies.</p>

<h2>Create a New Project</h2>

<p>From the file menu in Xcode select New -&gt; New Project.<br />
<img alt="Create New Project in Xcode" src="/sites/default/files/opa.developer.sdk.ios.1.png" /><br />
Choose a template for your project. For this example we choose <strong>Master-Detail Application</strong>.<br />
<img alt="Select Template for Navigation based application" src="/sites/default/files/opa.developer.sdk.ios.newiosproject.png" /><br />
Provide a <strong>Product Name</strong> and <strong>Company Identifier</strong> and complete the New Project wizard.<br />
<img alt="Provide Product Name and Complete Wizard" src="/sites/default/files/opa.developer.sdk.ios.Newiosproject2.png" /></p>

<h2>Add Dependencies</h2>

<p>The DOL Data SDK has some library dependencies we must add to the project. From the left pane choose the project (top level in the list), then from the center pane select the target. From the right pane choose the <strong>Build Phases</strong> tab.<br />
<img alt="Go to Build Phases and library dependencies" src="/sites/default/files/opa.developer.sdk.ios.4.png" style="width: 95%; " /><br />
Expand the <strong>Link Binary with Libraries</strong> section. Click the + button to add the required frameworks. From the list that pops up choose:</p>

<ul>
	<li>libz.dylib</li>
	<li>MobileCoreServices.framework</li>
	<li>CFNetwork.framework</li>
	<li>SystemConfiguration.framework</li>
</ul>

<p>Tip: you can hold down the Command key to select multiple files.<br />
<img alt="Required Libraries are libz.dylib,MobileCoreServices.framework,CFNetwork.framework,SystemConfiguration.framework" src="/sites/default/files/opa.developer.sdk.ios.ioslibraries.png" /></p>

<p>&nbsp;</p>

<h2>Add the SDK to the Project</h2>

<p>Add the SDK to your project. You can get it by either extracting the <a href="/sites/default/files/iOS_DOLDataSDK.zip">zipped SDK folder</a> or by grabbing the <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=https://github.com/USDepartmentofLabor/DOLDataSDK-iOS&amp;exitTitle=GitHub&amp;fedpage=no">Git repository</a>. and drag-and-drop the <strong>DOLDataSDK</strong> folder to you project root (the first item on the left pane).<br />
<br />
<img alt="Add SDK to your project" src="/sites/default/files/opa.developer.sdk.ios.6.png" /><br />
From the option screen that pops up choose 'Copy items into destinations group folder' and 'Create groups for any added folders'.<br />
<img alt="Copy Items" src="/sites/default/files/opa.developer.sdk.ios.7.png" /><br />
Test that all the steps above have been done correctly by building the application. From the product menu, select Product -&gt; Build.<br />
<img alt="Build Project" src="/sites/default/files/opa.developer.sdk.ios.8.png" /><br />
The status area at the top center should display that the build succeeded with no issues.<br />
<img alt="Build Successful" src="/sites/default/files/opa.developer.sdk.ios.9.png" /></p>

<h2>Locate Dataset Path</h2>

<p>Each Dataset has a <strong>Dataset Location</strong> path that gives the URL that will be needed for the data request. This address is circled in red. (<a> http://api.dol.gov/V1/Compliance/WHD </a>)<br />
<img alt="Locate Dataset Path for DOl API Dataset Sample please use http://api.dol.gov/V1/Compliance/WHD" src="/sites/default/files/opa.developer.sdk.ios.WHDDataSource.png" /><br />
The data request will also need the location of the table you are pulling data from. The tables are listed under their datasets. This table's name is circled in red.<br />
<img alt="Table Name" src="/sites/default/files/opa.developer.sdk.ios.WHDFullTable.png" /></p>

<h2>Create the Master View Controller</h2>

<p>Open MasterViewController.h.</p>

<ul>
	<li>We must modify the class so that it can respond to the <strong>GOVDataRequest</strong> delegate methods. Do this by adding the <strong>&lt;GOVDataRequestDelegate&gt;</strong> protocol to the class.</li>
	<li>Add a <strong>NSArray</strong> ivar to store the results (*arrayOfResults).</li>
	<li>Add a <strong>GOVDataRequest</strong> ivar. This is how we will make requests to the API.</li>
	<li>Create properties for both ivars.</li>
</ul>

<pre class="prettyprint">
//	MasterViewController.h
//	SDK-Sample
//
 
#import <uikit uikit.h="">
#import "GOVDataRequest.h"
 
@interface MasterViewController : UITableViewController&lt;GOVDataRequestDelegate&gt; {
 
	// We will store the results here
	NSArray *arrayOfResults;
    NSDictionary *dictionaryOfResults;
 
	// API Request object
	GOVDataRequest *dataRequest;
}
 
@property(nonatomic, retain)NSArray *arrayOfResults;
@property(nonatomic, retain)GOVDataRequest *dataRequest;
@property (nonatomic, retain)NSDictionary *dictionaryOfResults;


-(void)govDataRequest:(GOVDataRequest *)request didCompleteWithError:(NSString *)error;
-(void)govDataRequest:(GOVDataRequest *)request didCompleteWithResults:(NSArray *)resultsArray;
-(void)govDataRequest:(GOVDataRequest *)request didCompleteWithDictionaryResults:(NSArray *)resultsDictionary;
 
@end</uikit></pre>

<p>&nbsp;</p>

<p>Open MasterViewController.m. Add <strong>#define</strong> constants for your <strong>API Key</strong>, <strong>Secret</strong> and <strong>Host</strong>. In a real production application, you may choose to store this information elsewhere (keychain, plist, etc).</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<pre class="prettyprint">
#import "MasterViewController.h"
 
//Set API key information
#define API_KEY @"YOUR API KEY"
#define API_SECRET @"YOUR KEY SECRET"
#define API_HOST @"http://api.dol.gov"
#define API_URL @"/V1"</pre>

<p>&nbsp;</p>

<p>&nbsp;</p>

<h3>Synthesize the two ivars we created earlier.</h3>

<p>&nbsp;</p>

<pre class="prettyprint">
@implementation MasterViewController
@synthesize dataRequest, arrayOfResults, dictionaryOfResults;</pre>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>In this example we make the API call as soon as the app launches.</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<ul>
	<li>Create a <strong>GOVDataContext</strong> object. This object stores the API key information and URL.</li>
	<li>Alloc init the <strong>GOVDataRequest</strong> ivar with the context object as parameter.</li>
	<li>Set self as the delegate. This ensures that this class' <strong>GOVDataRequestDelegate</strong> methods are called when the API call completes.</li>
	<li>Create an <strong>NSDictionary</strong> and store the arguments you want to send with the API call</li>
	<li>Call <strong>callAPIMethod:withArguments:</strong>, providing the <strong>Dataset Location</strong> path, table name, and arguments dictionary. This will execute asyncronously.</li>
</ul>

<pre class="prettyprint">
-(void)viewDidLoad
{
	[super viewDidLoad];
 
	self.title = @"SDK Sample";
 
	//Create Context object
	//This object will store the URL and authorization information
	GOVDataContext *context = [[GOVDataContext alloc] initWithAPIKey:API_KEY Host:API_HOST SharedSecret:API_SECRET APIURL:API_URL];
 
	//Instantiate a new request
	dataRequest = [[GOVDataRequest alloc] initWithContext:context];
	//Set self as a delegate
	dataRequest.delegate = self;
	
	//Define the method that will be called
	NSString *method = @"Compliance/WHD/full";
 
	//Create a dictionary of arguments
	//Top 20 records; Selected 3 columns.
	NSDictionary *arguments = [NSDictionary dictionaryWithObjectsAndKeys:@"20", @"top", @"trade_nm,city_nm,st_cd", @"select", nil];
 
	//Set the timeout.  Set this higher for long-loading APIs
	int timeOut = 20;

	//Call API method with the arguments
	//didCompleteWithResults or didCompleteWithError delegate method will be called
	//when results or errors are returned
	[dataRequest callAPIMethod:method withArguments:arguments andTimeOut:timeOut];
}</pre>

<p>&nbsp;</p>

<p>Implement the <strong>GOVDataRequestDelegate</strong> methods <strong>didCompleteWithResults</strong> and <strong>didCompleteWithDictionaryResults</strong>:</p>

<p>&nbsp;</p>

<ul>
	<li>Store results to the <strong>NSArray</strong> ivar. We need to retain the array because it is autoreleased. Otherwise the app will crash when the table refreshes.</li>
	<li>Reload the table view.</li>
</ul>

<pre class="prettyprint">
#pragma mark GOVDataRequest delegate methods
-(void)govDataRequest:(GOVDataRequest *)request didCompleteWithResults:(NSArray *)resultsArray {
	NSLog(@"Got results");
 
	//Save results in our local array instance
	self.arrayOfResults = [resultsArray retain];
 
	//Refresh the tableView
	[self.tableView reloadData];
}

-(void)govDataRequest:(GOVDataRequest *)request didCompleteWithDictionaryResults:(NSDictionary *)resultsDictionary {
    
    
    NSLog(@"Got a Dictionary");
	//Save results in our local dictionary instance
	self.dictionaryOfResults = [resultsDictionary retain];
    //    NSLog(@"%@", self.dictionaryOfResults);
	//Refresh the tableView
	//[self.tableView reloadData];
}</pre>

<p><br />
Implement the <strong>govDataRequestDelegate</strong> method <strong>didCompleteWithError:</strong>. In this example we chose to just show the error in an <strong>UIAlertView</strong>.</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<pre class="prettyprint">
-(void)GOVDataRequest:(GOVDataRequest *)request didCompleteWithError:(NSString *)error {
	UIAlertView *alert = [[UIAlertView alloc] initWithTitle:@"Error" message:error delegate:nil cancelButtonTitle:@"Dismiss" otherButtonTitles:nil];
 
	[alert show];
	[alert release];
}</pre>

<p>&nbsp;</p>

<p>&nbsp;</p>

<h3>Complete the table view requirements:</h3>

<p>&nbsp;</p>

<ul>
	<li>Return the count for the results array in the <strong>numberOfRowsInSection:</strong> method</li>
	<li>In the <strong>cellForRowAtIndexPath:</strong> method create an <strong>NSDictionary</strong> variable pointing to the object in the results <strong>NSArray</strong> whose index is equal to the row we are rendering.</li>
	<li>Now we can set the cells text labels to any property of the <strong>NSDictionary</strong>.</li>
	<li>The <strong>NSDictionary</strong> keys will be equal to the table column names.</li>
</ul>

<pre class="prettyprint">
//Customize the number of sections in the table view.
-(NSInteger)numberofSectionsInTableView:(UITableView *)tableView
{
	return 1;
}
 
-(NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section
{
	return [self.arrayOfResults count];
}
 
//Customize the appearance of table view cells.
-(UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
	static NSString *CellIdentifier = @"Cell";
 
	UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:CellIdentifier];
	if (cell == nil) {
		cell = [[[UITableViewCell alloc] initWithStyle:UITableViewCellStyleSubtitle reuseIdentifier:CellIdentifier] autorelease];
	}
 
	//arrayOfResults is an array of NSDictionaries
	//Get the record
	NSDictionary *result = (NSDictionary *)[arrayOfResults objectAtIndex:indexPath.row];
 
	// Configure the cell.
 
	//Set the cell text to trade_nm
	cell.textLabel.text = (NSString *)[result objectForKey:@"trade_nm"];
	//Set the cell small text to "city, state"
	cell.detailTextLabel.text = [NSString stringWithFormat:@"%@, %@", (NSString *)[result objectForKey:@"city_nm"], (NSString *)[result objectForKey:@"st_cd"]];
 
	return cell;
}</pre>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>Release any objects in the <strong>dealloc</strong> method.</p>

<p>&nbsp;</p>

<pre class="prettyprint">
-(void)dealloc
{
	[arrayOfResults release];
	[dictionaryOfResults release];
	[dataRequest release];
	[super dealloc];
}</pre>

<p>&nbsp;</p>

<p>&nbsp;</p>

<h2>View DOL Data</h2>

<p>&nbsp;</p>

<p>Build and run the application, and you should see something like the following:</p>

<p>&nbsp;</p>

<p>For DOL API datasets :<br />
<img alt="Completed App" src="/sites/default/files/opa.developer.sdk.ios.18.png" /><br />
&nbsp;</p>

<p>&nbsp;</p>
