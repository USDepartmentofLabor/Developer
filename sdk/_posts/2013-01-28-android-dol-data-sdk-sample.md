---
layout: post
title: Android DOL Data SDK Sample
created: 1359401083
---

<h2>Overview</h2>

<p>This sample will provide the steps to create a simple Android application that can consume DOL Data. Following these steps in order will allow your application to operate correctly.</p>

<p>This solution was built using:</p>

<ul>
	<li>Eclipse JEE Helio SR2 windows 32</li>
	<li><a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://www.oracle.com/technetwork/java/javase/downloads/index.html&amp;exitTitle=JDK&amp;fedpage=no">JDK</a></li>
	<li><a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://developer.android.com/sdk/index.html&amp;exitTitle=Android SDK&amp;fedpage=no">Android SDK</a></li>
	<li>ADT plug-in. You can install it using the Eclipse IDE(Help Menu=&gt; Install New Software).</li>
</ul>

<h2>Download Android SDK</h2>

<p>Installation instructions are provided in detail <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://developer.android.com/sdk/installing.html&amp;exitTitle=Android SDK Installation Instructions&amp;fedpage=no">here</a> to setup an android development environment. After installation it is important to follow the steps for installing ADT plug-in and additional components.</p>

<p><small><sup>*</sup>Note: Save the SDK in a location where there are no spaces in the directory path. The Android emulator may behave incorrectly if this path has spaces.</small></p>

<h2>Create a New Project</h2>

<p>For this sample we are going to create a new Android application that will consume and list Agency data.</p>

<p>Start by creating a new workspace or selecting a workspace of your choice.</p>

<p><img alt="" src="/sites/default/files/Workspace.PNG" style="width: 635px; height: 292px;" /></p>

<p>For new workspaces Click <strong>Window &gt; Preferences</strong> a window will be displayed, at this time select <strong>Android</strong>. Select the installation location of your android SDK.</p>

<p><img alt="" src="/sites/default/files/WorkspaceSetup.png" style="width: 658px; height: 554px; " /></p>

<p>Then open a new project by Clicking <strong>File &gt; New Android Project</strong>.</p>

<p><img alt="" src="/sites/default/files/NewProject.png" style="width: 206px; height: 76px; " /></p>

<p>You will need to provide information in order to proceed.</p>

<ul>
	<li>Choose a <strong>project name</strong>; this will be display as the root item in your project.</li>
	<li>Choose a <strong>Build Target</strong>; this will determine what components will be available to your application. It will also set a list of minimum requirements for the android device.</li>
	<li>Choose an <strong>Application Name</strong>; this will be used through your application and resources.</li>
	<li>Choose a <strong>Package name</strong>; this is where Eclipse will set you Java Package for this application.</li>
	<li>Finally, choose the <strong>Activity name</strong>; this is the main entry form for the Android application.</li>
</ul>

<p>For this project Android 2.2 platform has been used to cover a wider target.</p>

<p><img alt="" src="/sites/default/files/ProjectDetails2.png" style="width: 505px; height: 744px; " /></p>

<h2>Add SDK to Project</h2>

<p>All requests require account credentials to be submitted along with the request.</p>

<p>This SDK contains a few classes needed to process service requests.</p>

<p>This package needs to be imported into your project. You can <a href="/sites/default/files/Android_DOLDataSDK.zip">extract the zipped SDK folder</a> or grab the <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=https://github.com/USDepartmentofLabor/Android_DOLDataSDK&amp;exitTitle=GitHub&amp;fedpage=no">Git repository</a>.</p>

<p><img alt="" src="/sites/default/files/AddSdk.png" style="width: 352px; height: 373px; " /></p>

<p>Import the Android_DOLDataSDK into your project using the <strong>General &gt; File System</strong> option.</p>

<p><img alt="" src="/sites/default/files/AddSdk2.png" style="width: 264px; height: 216px; " /></p>

<p>Choose the root path and click ok.</p>

<p><img alt="" src="/sites/default/files/AddSdk3.png" style="width: 335px; height: 366px; " /></p>

<h2>Locate the Dataset Path</h2>

<p>Each Dataset has a Dataset Location path that gives the URL that will be needed to reach the Dataset on the API. For this sample please see the one circled in red. For the standard DOL Agency dataset sample please use <a>http://api.dol.gov/V1/DOLAgency</a></p>

<p>&nbsp;</p>

<p><img alt="" src="/sites/default/files/opa.developer.sdk.android.DatasetLocation.png" style="width: 714px; height: 402px; " /></p>

<p>For the DOL Service Operation sample please use <a>http://api.dol.gov/V1/SummerJobs</a></p>

<p><img alt="" src="/sites/default/files/opa.developer.sdk.android.ServicePath.png" style="width: 304px; height: 52px; " /></p>

<h2>Define the User Interface</h2>

<p>Add a new Layout to your project by navigating to <strong>res &gt; layout</strong> folder and click the right mouse button to get a menu. Select <strong>New</strong> then select <strong>Android XML File</strong>. In this window you choose the following options.</p>

<ul>
	<li>File name - the name of the file, for this project, we will use list_item for the name. This name will be reference later in the code and is case sensitive.</li>
	<li>Resource Type - We are going to create a new <strong>Layout</strong> to display our results.</li>
	<li>Root Element - We are going to choose a TextView to be our root element to display.</li>
</ul>

<p><img alt="" src="/sites/default/files/opa.developer.sdk.android.AddLayout.png" style="width: 672px; height: 591px; " /></p>

<p>Adding a few lines to this file in the XML view will allow us to customize its appearance.</p>

<p>&nbsp;</p>

<pre class="prettyprint">
&lt;?xml version=”1.0” encoding=”utf-8”?&gt;
&lt;TextView
	xmlns:android=”http://schemas.android.com/apk/res/android”
		android:layout_width=”fill_parent”
		android:layout_height=”fill_parent”
		android:padding=”10dp”
		android:textSize=”16sp” &gt;
&lt;/TextView&gt;</pre>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<h2>Implementing the DOL Data Request</h2>

<p>&nbsp;</p>

<p>The DOLDataAPI.java file handles the behavior of the layout form that we created earlier. This file is found under <strong>src &gt; gov.dol.SDK.sample</strong>. The SDK classes need to be accessible from here so we add them with java import statements.</p>

<pre class="prettyprint">
import gov.dol.doldata.api.DOLDataContext;
import gov.dol.doldata.api.DOLDataRequest;
import gov.dol.doldata.api.DOLDataRequestCallback;</pre>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>Additionally, we are going to add a few more utility classes that will help us provide functionality not found in the SDK.</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<pre class="prettyprint">
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
 
import android.app.AlertDialog;
import android.app.ListActivity;
import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.ListView;</pre>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>For DOL Service Operation (e.g. Summer Job Plus) please import additional json package to parse the json result text.</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<pre class="prettyprint">
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;</pre>

<p>&nbsp;</p>

<p>We will modify the basic <strong>DOLDataAPI Activity</strong> and use a <strong>ListActivity</strong> instead to handle multiple items. We also inherited functionality from the <strong>DOLDataRequestCallback</strong> interface to handle the results of the service call.</p>

<p>&nbsp;</p>

<pre class="prettyprint">
public class DOLDataAPI extends ListActivity implements DOLDataRequestCallback  {
	/** Called when the activity is first created. */
 
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
	}
 
	// Callback method called when error occurs
	public void DOLDataErrorCallback(String error) {
	}
 
	//Callback method called when results are returned and parsed
	public void DOLDataResultsCallback(List&lt;Map&lt;String, String&gt;&gt; results) {
	}
}</pre>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>Adding implementation to the <strong>onCreate</strong> method will setup the request to the DOL Data service.</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<h3>For DOL API dataset :</h3>

<p>The <strong>String method</strong> variable represents the Dataset and the table portion of the Data location path.<br />
<br />
-Format( Dateset/Table) i.e. "DOLAgency/Agencies", "FORMS/AgencyFormsTable", "FAQ/Topics", "FAQ/SubTopics".<br />
<br />
<sup>*</sup>Please Note: these paths are <strong>case sensitive</strong>, please refer to the corresponding Datasets for the correct formats.</p>

<pre class="prettyprint">
@Override
public void onCreate(Bundle savedInstanceState)  {
	super.onCreate(savedInstanceState);
 
	// Instantiate context object
	DOLDataContext context = new DOLDataContext(API_KEY, SHARED_SECRET, API_HOST, API_URI);
 
	//Instantiate new request object. Pass the context var that contains all the API key info
	//Set this as the callback responder
	DOLDataRequest request = new DOLDataRequest(this, context);
 
	// API method to call
	String method = “DOLAgency/Agencies”;
 
	// Hashmap to store the arguments
	HashMap&lt;String, String&gt; args = new HashMap&lt;String, String&gt;(3);
 
	// Populate the args into the HashMap
	args.put(“top”, “20”);
	args.put(“select”, “Agency,AgencyFullName”);
	//args.put(“skip”, “30”);
 
	// Call the API method
	request.callAPIMethod(method, args);
}</pre>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<h3>For DOL service operations:</h3>

<p>The <strong>String method</strong> variable represents the service method.<br />
<br />
<sup>*</sup>Please Note: Each String typed parameter of service request must be surrounded in quotes in order to work correctly. These quotes are then Url encoded and passed to the Service Operation.<br />
&nbsp;</p>

<pre class="prettyprint">
@Override
public void onCreate(Bundle savedInstanceState) {
	super.onCreate(SavedInstanceState);
	
	String methodname;
	
	// Instantiate context object
	DOLDataContext context = new DOLDataContext(API_KEY, SHARED_SECRET, API_HOST, API_URI);
	
	// Instantiate new requst object. Pass the context var that contains all the API key info
	// Set this as the callback responder
	DOLDataRequest request = new DOLDataRequest(this, context);
	
	// HashMap to store the arguments
	HashMap&lt;String, String&gt; summerJobsArgs = new HashMap&lt;String, String&gt;(7);
	
	// API method to call
	methodname = "SummerJobs/getJobsListing";
	// Populate the args into the HashMap
	summerJobsArgs.put("format", "'json'");
	summerJobsArgs.put("query", "'Farm'");
	summerJobsArgs.put("region", "''");
	summerJobsArgs.put("locality", "''");
	summerJobsArgs.put("skipCount", "'8'");
	
	request.callAPIMethod(methodname, summerJobsArgs);
}
</pre>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>Adding implementation to the <strong>DOLDataErrorCallback</strong> method will provide feedback for errors that occur during the request.</p>

<pre class="prettyprint">
// Callback method called when error occurs
public void DOLDataErrorCallback(String error) {
	//Show error on dialog
	AlertDialog alertDialog;
	alertDialog = new AlertDialog.Builder(this).create();
	alertDialog.setTitle(“Error”);
	alertDialog.setMessage(error);
	alertDialog.show();
}</pre>

<p>&nbsp;</p>

<p>&nbsp;</p>

<h3>For DOL API dataset :</h3>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>Finally, adding implementation to the <strong>DOLDataResultsCallback</strong> method will provide access to the results in the form of List of Map objects.</p>

<pre class="prettyprint">
// Callback method called when results are returned and parsed
public void DOLDataResultsCallback(List&lt;Map&lt;String, String&gt;&gt; results) {
	// Create List of strings to populate the listview items
	List&lt;String&gt; display = new ArrayList&lt;String&gt;();
 
	// Iterate through list of results. Add each field to the display list
	for (Map&lt;String, String&gt; m : results) {
		display.add(m.get(“Agency”));
	}
 
	// Set list adapter.
	setListAdapter(new ArrayAdapter&lt;String&gt;(this,R.layout.list_item,display));
 
	// Enable text filtering
	ListView lv = getListView();
	lv.setTextFilterEnabled(true);
}</pre>

<p>&nbsp;</p>

<p>&nbsp;</p>

<h3>For DOL service operations:</h3>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>Finally, adding implementation to the <strong>DOLDataResultsCallback</strong> method will provide access to the results in the form of List of Map objects. Developer has to clean the json response text to get the clean json object from service response. SomeTime search result may have special charcter which cause to thrown an error during JSON serialization.</p>

<pre class="prettyprint">
// Callback method called when results are returned and parsed
public void DOLDataResultsCallback(List&lt;Map&amp;String, String&gt;&gt; results) {
	// Create List of strings to populate the listview items
	List&lt;String&gt; display = new ArrayList&lt;String&gt;();
	// Create JSON Object and JSONArray to store the data from DOLService operation.
	JSONObject jsonObject = null;
	JSONArray subArray = null;
	// Iterate through list of results. Add each field to the display list
	for (Map&lt;String, String&gt; m : results) {
		try {
			// Look for value of getJobsListing property.
			if(null != m.get("getJobsListing"))
			{
				String jobs = m.get("getJobsListing");
				// convert jString to the jObject
				jobs = jobs.replaceAll("\\\\n", "");
				jobs = jobs.replaceAll("\\\\\"", "\"");
				jobs = jobs.replaceAll("\"\\{", "\\{");
				jobs = jobs.replaceAll("\\}\"", "\\}");
				// start extracting the content from jObject
				jsonObject = new JSONObject(jobs);
				if(null!=jsonObject)
				{
					// Look for an array of "item."
					subArray = jsonObject.getJSONArray("items");
					if(null!= subArray)
					{
						// Let's loop through each job
						for(int i=0; i&lt;subArray.length(); i++)
						{
							// Get the job title.
							display.add(subArray.getJSONObject(i).getString("title"));
						}
					}
				}
			}
		} catch (JSONException e) {
			e.printStackTrace();
		}
	}
	// Set the list adapter
	setListAdapter(new ArrayAdapter&lt;String&gt;(this,R.layout.list_item,display));
	// Enable text filtering
	ListView lv = getListView();
	lv.setTextFilterEnabled(true);
}
</pre>

<h2>Configure Android Security</h2>

<p>Android gives its users the ability to grant application access to features they choose. This requires our application to list the permissions this application needs in order for features to work correctly. This is done by adding the uses-permission tag to the <strong>AndroidManifest.xml</strong> file.</p>

<pre class="prettyprint">
&lt;uses-permission android:name=”android.permission.INTERNET”&gt;&lt;/uses-permission&gt;</pre>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<h2>Configure Security</h2>

<p>&nbsp;</p>

<p>Secure logins are provided using the following code; we will need to modify both the <strong>ApiKey</strong> and the <strong>SharedSecret</strong> variable of this method to access DOL Data.<br />
Add members to the <strong>DOLDataAPI ListActivity class</strong> within the <strong>DOLDataAPI.java</strong> file.</p>

<ul>
	<li>The <strong>ApiKey</strong> corresponds to the <strong>Token</strong> identifier in your token list.</li>
	<li>The <strong>SharedSecret</strong> created during setup is the same value that is used in the DOLDataUtil class.</li>
</ul>

<p>&nbsp;</p>

<pre class="prettyprint">
public final String API_KEY = “”;
public final String SHARED_SECRET = “”;</pre>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<h2>Run the Application</h2>

<p>In order to run this application the emulator debug settings and the emulator need to be set up. Press <strong>F11</strong> or <strong>Run &gt; Debug</strong> and a warning message will be displayed if an emulator has not been configured.<br />
<br />
<img alt="Press F11 to Run the Application" src="/sites/default/files/opa.developer.sdk.android.NewEmulator.png" /><br />
<br />
Continue to the next screen and add a new emulator.<br />
<br />
<img alt="Add a new emulatore" src="/sites/default/files/opa.developer.sdk.android.NewEmulator2.png" /><br />
<br />
Give the emulator instance a name and configure the memory to your needs.<br />
<br />
<img alt="Give emulator instance a name and configure the memory " src="/sites/default/files/opa.developer.sdk.android.NewEmulator3.png" /><br />
<br />
Later you can setup Debug properties for you application as needed.<br />
<br />
<img alt="Setup Debug properties" src="/sites/default/files/opa.developer.sdk.android.DebugSetup.png" /><br />
&nbsp;</p>

<h3>For DOL API dataset :</h3>

<p>Run the application and you should see a list of Agencies in the grid.<br />
<br />
<img alt="Run the application and you should see a list of Agencies in the grid" src="/sites/default/files/opa.developer.sdk.android.Data.png" /></p>

<h3>For DOL service operations:</h3>

<p>Run the application and you should see a list of jobs in the grid.</p>

<p><img alt="" src="/sites/default/files/opa.developer.sdk.android.summer_job_result_farm.png" style="width: 493px; height: 801px; " /></p>
