---
layout: post
title: Windows Phone 7 DOL Data Sample
created: 1359575727
---

<h2>Overview</h2>

<p>This sample will provide the steps to create a simple Windows Phone 7 application that can consume DOL Data. A windows Phone 7 SDK doesn't currently exist, however one will be provided in the future. We will use the OData Client tool to generate a proxy class to access the API. Following these steps in order will allow your application to operate correctly.&nbsp;</p>

<p>This solution was built using:</p>

<ul>
	<li>Microsoft's Visual Studio 2010</li>
	<li><a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://www.microsoft.com/download/en/details.aspx?id=17851&amp;exitTitle=.Net Framework 4.0&amp;fedpage=no">.Net Framework 4.0</a></li>
	<li><a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://www.microsoft.com/en-us/download/details.aspx?id=27570&amp;exitTitle=Windows Phone 7 SDK&amp;fedpage=no">Windows Phone 7 SDK</a></li>
	<li>WCF OData Client Tool Version 5.0 is already included in this project, you can download it as well from <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://s.dol.gov/HI&amp;exitTitle=WCF OData Client&amp;fedpage=no">here</a></li>
	<li>JSON.NET framework is already included in this project, you can download it as well from <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://json.codeplex.com/&amp;exitTitle=JSON.Net framework">here</a></li>
</ul>

<p>&nbsp;</p>

<h2>Download the Windows Phone 7 SDK</h2>

<p>&nbsp;</p>

<p>You will need a Windows Phone 7 SDK in order to run this sample and can be downloaded at one of these two locations:</p>

<ul>
	<li><a href="http://developer.dol.gov/sdks/DotNet_DOLDataSDK.zip">Zip file download</a></li>
	<li><a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=https://github.com/USDepartmentofLabor/DotNet_DOLDataSDK&amp;exitTitle=GitHub&amp;fedpage=no">GitHub Repository</a></li>
</ul>

<p><img alt="Download SDK File" src="/sites/default/files/opa.developer.sdk.dotnet.Win7SDK.png" /></p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<h2>Create a New Project</h2>

<p>For this sample we are going to create a new Windows Phone 7 application that will consume and list Occupation Employment Statistics data.<br />
<br />
<img alt="New Project" src="/sites/default/files/opa.developer.sdk.dotnet.wp7NewProject.png" style="width: 60%; " /><br />
<br />
Select the default Windows Phone 7 application and confirm project details in the project setup page. This project is built using <strong>Windows Phone 7.0</strong> runtime.<br />
<br />
<img alt="Project Details" src="/sites/default/files/opa.developer.sdk.dotnet.ProjectDetails.png" style="width: 690px; height: 464px; " /><br />
&nbsp;</p>

<h2>Add SDK to Project</h2>

<p>All requests require account credentials to be submitted along with the request. This SDK contains a few classes needed to process service requests. These files need to be imported into your project.<br />
<br />
<img alt="Add SDK File" src="/sites/default/files/opa.developer.sdk.dotnet.AddSdk1.png" /><br />
&nbsp;</p>

<h2>Locate the Dataset Path</h2>

<p>Each Dataset has a Dataset Location path that gives the URL that will be needed to create the proxy class to reach the Dataset on the API. For this sample please see the one circled on red.<br />
<br />
<img alt="Add Service Reference" src="/sites/default/files/opa.developer.sdk.dotnet.DatasetLocation.png" style="width: 60%; " /><br />
<br />
For the DOL Service Operation sample please use <a>http://api.dol.gov/V1/SummerJobs</a><br />
<br />
<img alt="Locate Dataset Location path from Dataset, for Summer Job Plus Sample please use http://api.dol.gov/V1/SummerJobs " src="/sites/default/files/opa.developer.sdk.dotnet.ServicePath.png" /></p>

<h2>Generate Proxy Class Code</h2>

<p>The WCF OData Client Tool Version 5.0 is included in this project, and can be downloaded <a href="http://odata.codeplex.com/releases/view/54698#DownloadId=161862">here</a>. Using the DataSvcUtil.exe tool, create a class file for the Dataset you intend to use. For this sample Occupation Employment Statistics data path,<a>http://api.dol.gov/V1/Statistics/OES2010</a>, is used to produce the Occupation proxy Class(Occupation.cs).<br />
<sup>*</sup> It is important to note, use <strong>Version:2.0</strong> and <strong>/DataServiceCollection</strong> options when using tool.<br />
<sup>*</sup> It is important to note, proxy class generation is only required for standard DOP API dataset, for DOL service operation ,steps are defined later in this document.<br />
<br />
<img alt="Generate Proxy File Screen" src="/sites/default/files/opa.developer.sdk.dotnet.Generate.png" /><br />
&nbsp;</p>

<h2>Include Occupation Employment Statistics Proxy Class in Project</h2>

<p>The Occupation Employment Statistics data can be accessed using the <strong>OES2010Entities</strong> class which is in <strong>Occupation.cs</strong>. This file needs to be included into your solution.<br />
<br />
<img alt="Include Proxy File Screen" src="/sites/default/files/opa.developer.sdk.dotnet.wp7AddSdk.png" /><br />
&nbsp;</p>

<h2>Define the User Interface</h2>

<p>For standard DOL API datasets:</p>

<p>Add a simple <strong>ListBox</strong> to the <strong>MainPage.xaml</strong> file. This markup should be placed in the Grid named <strong>ContentPanel</strong>.<br />
&nbsp;</p>

<pre class="prettyprint">
&lt;!--ContentPanel - place additional content here--&gt;
&lt;Grid x:Name="ContentPanel" Grid.Row="1" Margin="12,0,12,0"&gt;
	&lt;ListBox Height="546" HorizontalAlignment="Left" Margin="12,15,0,0" Name="1st" VerticalAlignment="Top" Width="438" ItemsSource=" {Binding}"&gt;
		&lt;ListBox.ItemTemplate&gt;
			&lt;DataTemplate&gt;
				&lt;StackPanel Margin="0,0,0,17" Width="432"&gt;
					&lt;TextBlock Text="{Binding occupation_name}" TextWrapping="Wrap" Margin="12,-6,12,0" Style="{StaticResource PhoneTextExtraLargeStyle}" FontSize="20"/&gt;
					&lt;TextBlock Text="{Binding occupation_code}" TextWrapping="Wrap" Margin="12,-6,12,0" Style="{StaticResource PhoneTextExtraLargeStyle}" FontSize="18"/&gt;
				&lt;/StackPanel&gt;
			&lt;/DataTemplate&gt;
		&lt;/ListBox.ItemTemplate&gt;
	&lt;/ListBox&gt;
&lt;/Grid&gt;</pre>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p>For standard DOL Service Operation:</p>

<p>Add a simple <strong>ListBox</strong> to the <strong>MainPage.xaml</strong> file. This markup should be placed in the Grid named <strong>ContentPanel</strong>.<br />
&nbsp;</p>

<pre class="prettyprint">
&lt;!--ContentPanel - place additional content here--&gt;
&lt;Grid x:Name="ContentPanel" Grid.Row="1" Margin="12,0,12,0"&gt;
	&lt;ListBox Height="546" HorizontalAlignment="Left" Margin="12,15,0,0" Name="1st" VerticalAlignment="Top" Width="438" ItemsSource=" {Binding}"&gt;
		&lt;ListBox.ItemTemplate&gt;
			&lt;DataTemplate&gt;
				&lt;StackPanel Margin="0,0,0,17" Width="432"&gt;
					&lt;TextBlock Text="{Binding Title}" TextWrapping="Wrap" Margin="12,-6,12,0" Style="{StaticResource PhoneTextExtraLargeStyle}" FontSize="20"/&gt;
				&lt;/StackPanel&gt;
			&lt;/DataTemplate&gt;
		&lt;/ListBox.ItemTemplate&gt;
	&lt;/ListBox&gt;
&lt;/Grid&gt;</pre>

<p>&nbsp;</p>

<h2>Implementing the DOL Data Request</h2>

<p>Include Using statements to reference the appropriate classes. These statements will allow your project to access <strong>OES2010Entities</strong> classes and OData Classes. This project will also need to include the <strong>gov.dol.doldata.util</strong> namespace to reference the SDK.<br />
&nbsp;</p>

<pre class="prettyprint">
using OES2010Model;
using System.Collections;
using System.Data.Services.Client;
using gov.dol.doldata.util; </pre>

<p>&nbsp;</p>

<p><br />
Create an event handler to execute when the page has been loaded.</p>

<p>&nbsp;</p>

<pre class="prettyprint">
// Constructor
public MainPage()
{
	InitializeComponent();
	this.Loaded += new RoutedEventHandler(MainPage_Loaded);
}</pre>

<p>&nbsp;</p>

<p>Sample code for standard DOL API datasets:<br />
<br />
Using the <strong>OES2010Entities</strong> Class assign the Occupation Employment Statistics Dataset path to reflect <strong> <a>http://api.dol.gov/V1/Statistics/OES2010/</a></strong> url. The <strong>LoadAsync</strong> method takes two parameters. The API query and a callback method that will be executed when the results have been returned. Currently the Windows Phone 7 environment doesn't support Linq queries to make API calls.<br />
&nbsp;</p>

<pre class="prettyprint">
/// &lt;summary&gt;
/// Load the data when the app is invoked
/// &lt;/summary&gt;
/// &lt;param name="sender"&gt;&lt;/param&gt;
/// &lt;param name="e"&gt;&lt;/param&gt;
void MainPage_Loaded(object sender, RoutedEventArgs e)
{
	//Context creation referencing the URI
	var ctx = new OES2010Entities(new Uri("<a>http://api.dol.gov/V1/Statistics/OES2010/</a>"));
 
	//Get SDK ready to request entities for each additional request.
	DOLDataUtil sdk = new DOLDataUtil(ctx);
 
	//We can call the API with additional filter parameters as needed or call the full list
	//coll = DOLDataUtil.LoadAsync&lt;occupation&gt;(/occupation?$select=occupation_name,occupation_code&amp;$filter=display_level eq '1'", coll_LoadCompleted);
	//currently, the Windows Phone 7 environment doesn't support Linq to make queries.
	coll = sdk.LoadAsync&lt;occupation&gt;("/occupation", coll_LoadCompleted);
 
}</pre>

<p>&nbsp;</p>

<p>Sample code for DOL Service operation:<br />
<br />
Using class DOLDataUtil which is part of SDK , we are going to invoke DOL service operation.The <strong>LoadServiceRequest</strong> method takes three parameters. The API Dataset Location path ,API query and a callback method that will be executed when the results have been returned. Each String typed parameter must be surrounded in quotes in order to work correctly. These quotes are then Url encoded and passed to the Service Operation. Currently the Windows Phone 7 environment doesn't support Linq queries to make API calls.<br />
<br />
&nbsp;</p>

<pre class="prettyprint">
void MainPage_Loaded(object sender, RoutedEventArgs e)
{
	DOLDataUtil sdk = new DOLDataUtil();
	var _baseUri = "<a>http://api.dol.gov/V1/SummerJobs/</a>";
	var query = "getJobsListing?format=%27json%27&amp;query=%27Farm%27&amp;region=&amp;locality=&amp;zip=&amp;employmentType=%27Any%27&amp;skipCount=1";
	sdk.LoadServiceRequest(_baseUri, query, proxy_DownloadStringCompleted);
}
</pre>

<p>&nbsp;</p>

<p><br />
We need to implement the callback method that will be fired when the API has responded to our request. We will bind the results to our UI.<br />
<br />
Sample code for standard DOL API datasets:</p>

<p>&nbsp;</p>

<pre class="prettyprint">
/// &lt;summary&gt;
/// Validate
/// &lt;/summary&gt;
/// &lt;param name="sender"&gt;&lt;/param&gt;
/// &lt;param name="e"&gt;&lt;/param&gt;
void coll_LoadCompleted(object sender, LoadCompletedEventArgs e)
{
	if (e.Error != null)
	{
		MessageBox.Show(e.Error.Message);
		return;
	}
	//we can execute linq here if needed.
	//lst.ItemsSource = from job in coll where job.display_level == "1" select job;
	lst.ItemsSource = coll;
}</pre>

<p>&nbsp;</p>

<p><br />
Sample code for standard DOL Service operation: We will get json result from DOL API for service operation , which needs to cleanup and then should be parse using Json.NET Library. Json.NET high-performance JSON framework for .NET and it also supports .NET 2, .NET 3.5, .NET 4, Silverlight, Windows Phone and Windows 8 Metro. Create Class Job with one property called "Titile" of string data type. We will create the list of Job class and set as datasource to Listbox.List of jobs will be filled from json result.</p>

<p>&nbsp;</p>

<pre class="prettyprint">
public class Job
{
	public string Title {get; set;}
}

void proxy_DownloadStringCompleted(object sender, DownloadStringCompletedEventArgs e)
{
	// if error occurred then display the error message on screen
	if (e.Error != null)
	{
		MessageBox.Show(e.Error.Message);
		return;
	}
	else
	{
		try
		{
			// get the result into local variable
			var result = e.Result;
			// Clean up the json result
			result = result.Replace("\\n", "").Replace("\\\"", "\"").Trim('\"')
					.Replace("\\","").Replace("\"\"{","{").Replace("}\"","}");
			// Let's create the list of jobs to populate the ListBox
			List&lt;Job&gt; jobs = new List&lt;Job&gt;();
			// Parse the json result.
			JObject o = JObject.Parse(result);
			// Get the Json wrapper
			o = (JObject)o["d"];
			// Get the JobListing object from wrapper object
			o = (JObject)o["getJobsListing"];
			// get the items array from job listing object
			JArray sizes = (JArray)o["items"];
			// Now loop through each item to get the job title and other information.
			for(int i=0; i &lt; sizes.Count(); i++)
			{
				Job jb = new Job();
				jb.Title = sizes[i]["title"].ToString();
				jobs.Add(jb);
			}
			lst.ItemsSource = jobs;
		}
		catch (System.Xml.XmlException ex)
		{
			MessageBox.Show(e.Error.Message);
			return;
		}
	}
}</pre>

<p>&nbsp;</p>

<h2>Configure Security</h2>

<p>Once the SDK has been added to the project, we will need to modify both the <strong>ApiKey</strong> and the <strong>SharedSecret</strong> members of this class to access DOL Data.<br />
Edit the <strong>DOLDataUtil class</strong> within the <strong>DOLDataUtil.cs</strong> file.</p>

<ul>
	<li>The <strong>ApiKey</strong> corresponds to the <strong>Token</strong> identifier in your token list.</li>
	<li>The <strong>SharedSecret</strong> created during setup is the same value that is used in the DOLDataUtil class.</li>
	<li><sup>*</sup>Note: <strong>DOLDataUtil Class</strong> may be inaccessable due to its current access specifier. Precede with public keyword to resolve this problem.</li>
</ul>

<p>&nbsp;</p>

<pre class="prettyprint">
namespace gov.dol.doldata.util
{
	class DOLDataUtil
	{
		// Define API Key and Shared Secret
		private const string ApiKey = "";
		private const string SharedSecret = "";</pre>

<p>&nbsp;</p>

<p>&nbsp;</p>

<h2>Run the Application</h2>

<p>&nbsp;</p>

<p>Run the application and you should see a list of occupations in the grid.<br />
<br />
Sample code for standard DOL API datasets:<br />
<br />
<a href="javascript::void();" onclick="window.open ('/sites/default/files/styles/DataFull.png', 'WindowPhone7Screen','location=0,status=0,menubar=0,toolbar=0,scrollbar=0,height=709,width=384');"><img alt="Run Application" src="/sites/default/files/opa.developer.sdk.dotnet.wp7Data.png" style="width: 29%; " /> </a><br />
<br />
Sample code for DOL Service operation:<br />
<br />
<a href="javascript::void();" onclick="window.open ('/sites/default/files/opa.developer.sdk.dotnet.summer_jobs_plus_window_phone_7_result.png', 'WindowPhone7Screen','location=0,status=0,menubar=0,toolbar=0,scrollbar=0,height=709,width=384');"><img alt="Run Application to see the result of DOL service operation." src="/sites/default/files/opa.developer.sdk.dotnet.summer_jobs_plus_window_phone_7_result.png" style="width: 29%; " /> </a></p>
