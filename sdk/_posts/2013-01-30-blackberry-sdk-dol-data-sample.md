---
layout: post
title: Blackberry SDK DOL Data Sample
created: 1359558333
---

<h2>Overview</h2>

<p>This sample will provide the steps to create a simple BlackBerry application that can consume DOL Data. Following these steps in order will allow your application to operate correctly.&nbsp;</p>

<p>This solution was built using:</p>

<ul>
	<li>Eclipse JEE Helio SR2 windows 32</li>
	<li><a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://www.oracle.com/technetwork/java/javase/downloads/index.html&amp;exitTitle=JDK&amp;fedpage=no">JDK</a></li>
	<li><a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://us.blackberry.com/developers/javaappdev/javaupdate.jsp&amp;exitTitle=BlackBerry SDK&amp;fedpage=no">BlackBerry SDK</a></li>
	<li>BlackBerry JRE 5.0.0 - The BlackBerry JRE is included in the BlackBerry SDK. This is the JRE version this application will need to build correctly.</li>
</ul>

<p>&nbsp;</p>

<h2>Download BlackBerry SDK</h2>

<p>&nbsp;</p>

<p>Installation instructions are provided in detail <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://us.blackberry.com/developers/javaappdev/javaupdate.jsp&amp;exitTitle=BlackBerry Installation Guide&amp;fedpage=no">here</a> to setup a BlackBerry development environment. After installation it is important to follow the steps for installing plug-in updates and additional components. This page will be visible in the Eclipse startup screen.<br />
<br />
<img alt="Select Workspace" src="/sites/default/files/opa.developer.sdk.rim.AddDeviceSDK.png" /></p>

<h2>Create a New Project</h2>

<p>For this sample we are going to create a new BlackBerry application that will consume and list Agency data.</p>

<p>Start by creating a new workspace or selecting a workspace of your choice.</p>

<p>Then open a new project by Clicking <strong>File &gt; New Project &gt; BlackBerry Project</strong>.</p>

<p><img alt="New Project" src="/sites/default/files/opa.developer.sdk.rim.NewProject.png" /></p>

<p>You will need to provide information in order to proceed.</p>

<ul>
	<li>Choose a <strong>project name</strong>; this will be displayed as the root item in your project.</li>
</ul>

<p>For this project, BlackBerry JRE 5.0.0 platform has been used.<br />
<strong>Currently BlackBerry JRE 6.0.0 and 7.0.0 are not supported.</strong></p>

<p><img alt="Create BlackBerrt Project " src="/sites/default/files/opa.developer.sdk.rim.ProjectDetails.png" style="width: 60%; " /></p>

<h2>Add SDK to Project</h2>

<p>All requests require account credentials to be submitted along with the request. This SDK contains a few classes needed to process service requests. This package needs to be imported into your project. You can <a href="/sites/default/files/BlackBerry_DOLDataSDK.zip">extract the zipped SDK folder</a> or grab the <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=https://github.com/USDepartmentofLabor/BlackBerry_DOLDataSDK&amp;exitTitle=GitHub&amp;fedpage=no">Git repository</a>.</p>

<p><img alt="Add SDK File,Import SDK files into Project" src="/sites/default/files/opa.developer.sdk.rim.AddSdk.png" /></p>

<p>Import the BlackBerry_DOLDataSDK into your project using the <strong>General &gt; File System</strong> option.</p>

<p><img alt="Import SDK using General &gt; File System option " src="/sites/default/files/opa.developer.sdk.rim.AddSdk2.png" /></p>

<p>Choose the root path and click ok.</p>

<p><img alt="Choose root path" src="/sites/default/files/opa.developer.sdk.rim.AddSdk3.png" /></p>

<h2>Locate the Dataset Path</h2>

<p>Each Dataset has a Dataset Location path that gives the URL that will be needed to reach the Dataset on the API. For this sample please see the one circled in red.</p>

<p><img alt="Add Service Reference" src="/sites/default/files/opa.developer.sdk.rim.DatasetLocation.png" style="width: 60%; " /></p>

<p>For the DOL Service Operation sample please use <a>http://api.dol.gov/V1/SummerJobs</a></p>

<p><img alt="Locate Dataset Location path from Dataset, for Summer Job Plus Sample please use http://api.dol.gov/V1/SummerJobs " src="/sites/default/files/opa.developer.sdk.rim.ServicePath.png" /></p>

<h2>Define the User Interface</h2>

<p>BlackBerry allows developers to add UI Components to the main screen programmatically. By Creating a <strong>ButtonField</strong> member variable in this application, users will be able to invoke a call to the DOL Data API. We will implement the FieldChangeListener to handle the button click events. We will also implement the DOLDataRequestCallBack to handle request made to the DOL Data API.</p>

<pre class="prettyprint">
public final class DolDataMainScreen extends MainScreen implements FieldChangeListener, DOLDataRequestCallBack</pre>

<p>Implementation for initializing this button is placed in the class constructor to be executed only once.</p>

<pre class="prettyprint">
//DOL Data Context object
private DOLDataContext context;

private ButtonField submitButton;
 
public DolDataMainScreen()
{
	//Instantiate DOL Data context object
	//This object stores the API information required to make requests
	context = new DOLDataContext(API_KEY, SHARED_SECRET, API_HOST, API_URI);
 
	// Set the displayed title of the screen
	setTitle(“Events”);
 
	//Create the search button. Add click event. Center it.
	submitButton = new ButtonField(“Call API”,ButtonField.CONSUME_CLICK | ButtonField.FIELD_CENTER);
	//Set delegate for button presses to be the same class (this)
	//It will trigger “public void vieldChanged(Field field, int context” when pressed
	submitButton.setChangeListener(this);
 
	//Add the search button
	add(submitButton);
}</pre>

<h2>Implementing the DOL Data Request</h2>

<p>DOL Data Request logic has been placed in the <strong>fieldChanged</strong> method to respond to the button's click event. The <strong>String method</strong> variable represents the Dataset and the table portion of the Data location path.</p>

<p>-Format( Dateset/Table) i.e. "DOLAgency/Agencies", "FORMS/AgencyFormsTable", "FAQ/Topics", "FAQ/SubTopics".</p>

<p><sup>*</sup>Please Note: these paths are <strong>case sensitive</strong>, please refer to the corresponding Datasets for the correct formats.</p>

<p>For DOL API dataset :</p>

<pre class="prettyprint">
public void fieldChanged(Field arg0, int arg1) {
	//Update the status field to give user feedback of what is occurring (searching)
	LabelField status = new LabelField(“Searching...”,LabelField.ELLIPSIS | LabelField.USE_ALL_WIDTH);
	setStatus(status);
 
	//Catch any exceptions
	try
	{
		//Instantiate new request object. Pass the context ivar that contains all the API key info
		DOLDataRequest request = new DOLDataRequest(this, context);
		String method = “DolAgency/Agencies”;
 
		Hashtable args = new Hashtable(2);
 
		args.put(“top”, “20”);
		//args.put(“filter”, “CURRENT_MINE_NAME eq ‘Rockwood Mine’”);
 
		request.callAPIMethod(method, args);
	}
	catch (Exception e) {
		//Alert the user that an error occurred
		Dialog.alert(e.getMessage());
		//Clear status bar
		setStatus(null);
	}
}</pre>

<p>For DOL service operation :</p>

<pre class="prettyprint">
public void fieldChanged(Field arg0, int arg1) {
	//Update the status field to give user feedback of what is occurring (searching)
	LabelField status = new LabelField("Searching...",LabelField.ELLIPSIS | LabelField.USE_ALL_WIDTH);
	setStatus(status);
	//Cacth any exceptions
	try
	{
		//Instantiate new request object. Pass the context ivar that contains all the API key info
		DOLDataRequest request = new DOLDataRequest(this, context);
		String method = "SummerJobs/getJobsListing";
		
		Hashtable args = new Hashtable(7);
		
		args.put("format", "'json'");
		args.put("query", "'farm'");
		args.put("region", "");
		args.put("locality", "");
		args.put("skipCount", "1");
		
		request.callAPIMethod(method, args);
	}
	catch (Exception e) {
		//Alert the user that an error has occurred
		Dialog.alert(e.getMessage());
		//Clear status bar
		setStatus(null);
	}
}</pre>

<p>The results from the request are implemented in the <strong>DOLDataResultsCallBack</strong> method. The request results of the DOL Data API are iterated through and a label is created for each item in the list.</p>

<p>For DOL API dataset :</p>

<pre class="prettyprint">
public void DOLDataResultsCallback(Vector results) {
	for (int i = 0; i &lt; results.size(); i++) {
		Hashtable record = (Hashtable)results.elementAt(i);
		LabelField l = new LabelField(record.get(“Agency”)+” - “+record.get(“AgencyFullName”),FOCUSABLE);
		add(l);
	}
 
	//Clear status bar
	setStatus(null);
}</pre>

<p>For DOL service operation:</p>

<pre class="prettyprint">
public void DOLDataResultsCallback(Vector results) {
	//Create JSON object and JSONArray to store the data from DOL service operation
	JSONObject jsonObject = null;
	JSONArray subArray = null;
	//Iterate through list of results.  Add each field to the display list.
	for (int i = 0; i &lt; results.size(); i++) {
		try {
			if(null != results.elementAt(i))
			{
				Hashtable record = (Hashtable)results.elementAt(i);
				//Look for value of getJobsListing property.
				if(record.get("getJobsListing") != null)
				{
					String jobs = record.get("getJobsListing").toString();
					//Cleanup json result
					jobs = replaceAll(jobs, "\\n", "");
					jobs = replaceAll(jobs, "\\\", "\"");
					jobs = replaceAll(jobs, "\"{", "{");
					jobs = replaceAll(jobs, "}\"", "}");
					//convert jString to the jObject
					//start extracting the content from jObject
					jsonObject = new JSONObject(jobs);
					if(null!=jsonObject)
					{
						//Look for an array of "item"
						subArray = jsonObject.getJSONArray("items");
						if(null!=subArray)
						{
							//Let's loop through each job
							for(int j=0; j &lt; subArray.length(); j++)
							{
								//get the job title
								String str = subArray.getJSONObject(j).getString("title");
								LabelField l = new LabelField(subArray.getJSONObject(j).getString("title"),FOCUSABLE);
								add(l);
							}
						}
					}
				}
			}
		} catch (JSONException e) {
			e.printStackTrace();
		}
	}
	setStatus(null);
}</pre>

<p>Requests resulting in error, are sent to the <strong>DOLDataErrorCallBack</strong> method with information pertaining to the error.</p>

<pre class="prettyprint">
public void(DOLDataErrorCallback(String error) {
	Dialog.alert(error);
	//Clear status bar
	setStatus(null);
}</pre>

<h2>Configure Security</h2>

<p>Secure logins are provided using the following code; we will need to modify both the <strong>ApiKey</strong> and the <strong>SharedSecret</strong> members of the <strong>DolDataMainScreen</strong> class.<br />
Add members to the <strong>DolDataMainScreen</strong> class within the <strong>DolDataMainScreen.java</strong> file.</p>

<ul>
	<li>The <strong>ApiKey</strong> corresponds to the <strong>Token</strong> identifier in your token list.</li>
	<li>The <strong>SharedSecret</strong> created during setup is the same value that is used in the DOLDataUtil class.</li>
</ul>

<pre class="prettyprint">
public final String API_KEY = "";
public final String SHARED_SECRET = "";</pre>

<h2>Run the Application</h2>

<p>If you are not using a BlackBerry device, you will need to run this application in the Simulator. Press <strong>F11</strong> or <strong>Run &gt; Debug</strong> to run this application in debug mode. You will be prompted to choose either a BlackBerry Device or Simulator. When the Simulator is fully active, goto the <strong>Downloads icon</strong> in the menu and click on the application to run. A list of Agencies should be displayed on the screen.</p>

<p>For DOL API dataset :</p>

<p><img alt="Run application and screen should display list of Agencies" src="/sites/default/files/opa.developer.sdk.rim.Data.png" /></p>

<p>For DOL service operation :</p>

<p><img alt="Run application and screen should display list of jobs" src="/sites/default/files/opa.developer.sdk.rim.summer_jobs_blackberry_result.png" /></p>
