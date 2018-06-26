---
layout: post
title: BLS Numbers
created: 1359483400
version: V1
description: This Dataset contains historic data (last 10 years) for the most common economic indicators.
---


<p class="guide_note">
	<strong>Depreciation Notice:</strong> The BLS Numbers datasets will be upgraded to APIv2 from APIv1 shortly.<br><br>
	You will need to convert your application by 07/13/2018.<br><br>
	<a href="/accessing-the-apis-using-http-requests/">Here is the documentation on how you can get your application to use the APIv2- data.dol.gov (V2).</a>
</p>
<div class="force_wrap apiurl">
<p>https://api.dol.gov/V1/statistics/BLS_Numbers</p>
</div>
<p>This Dataset contains historic data (last 10 years) for the most common economic indicators. For more information and details about the data provided can be found by looking for <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://www.bls.gov/data/&amp;exitTitle=BLS Inflation and Prices Information&amp;fedpage=yes">Inflation &amp; Prices</a> information or <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://www.bls.gov/data/&amp;exitTitle=BLS Employment Information&amp;fedpage=yes">Employment</a> information.</p>

<a href ="http://api.dol.gov/V1/statistics/BLS_Numbers/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=BLS%20Numbers" class="button radius button_dataset">Explore This Data</a>

## Dataset Tables  

<ul>
	<li><a href="#averageHourlyEarnings">averageHourlyEarnings</a></li>
	<li><a href="#consumerPriceIndex">consumerPriceIndex</a></li>
	<li><a href="#employmentCostIndex">employmentCostIndex</a></li>
	<li><a href="#exportPriceIndex">exportPriceIndex</a></li>
	<li><a href="#importPriceIndex">importPriceIndex</a></li>
	<li><a href="#payrollEmployment">payrollEmployment</a></li>
	<li><a href="#producerPriceIndex">producerPriceIndex</a></li>
	<li><a href="#productivity">productivity</a></li>
	<li><a href="#unemploymentRate">unemploymentRate</a></li>
	<li><a href="#averageHourlyEarnings12MonthChange">averageHourlyEarnings12MonthChange</a></li>
	<li><a href="#averageHourlyEarnings1MonthChange">averageHourlyEarnings1MonthChange</a></li>
	<li><a href="#averageHourlyEarnings1MonthNetChange">averageHourlyEarnings1MonthNetChange</a></li>
	<li><a href="#consumerPriceIndex12MonthChange">consumerPriceIndex12MonthChange</a></li>
	<li><a href="#consumerPriceIndex1MonthChange">consumerPriceIndex1MonthChange</a></li>
	<li><a href="#exportPriceIndex12MonthChange">exportPriceIndex12MonthChange</a></li>
	<li><a href="#exportPriceIndex1MonthChange">exportPriceIndex1MonthChange</a></li>
	<li><a href="#importPriceIndex12MonthChange">importPriceIndex12MonthChange</a></li>
	<li><a href="#importPriceIndex1MonthChange">importPriceIndex1MonthChange</a></li>
	<li><a href="#payrollEmployment12MonthChange">payrollEmployment12MonthChange</a></li>
	<li><a href="#payrollEmployment12MonthNetChange">payrollEmployment12MonthNetChange</a></li>
	<li><a href="#payrollEmployment1MonthChange">payrollEmployment1MonthChange</a></li>
	<li><a href="#payrollEmployment1MonthNetChange">payrollEmployment1MonthNetChange</a></li>
	<li><a href="#producerPriceIndex12MonthChange">producerPriceIndex12MonthChange</a></li>
	<li><a href="#producerPriceIndex1MonthChange">producerPriceIndex1MonthChange</a></li>
	<li><a href="#unemploymentRate12MonthChange">unemploymentRate12MonthChange</a></li>
	<li><a href="#unemploymentRate1MonthChange">unemploymentRate1MonthChange</a></li>
</ul>

<h3 id="averageHourlyEarnings" tabindex="-1">averageHourlyEarnings Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CES0500000003?output_view=net_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CES0500000003?output_view=net_1mth</a></p>

<div>
	<table class="accessible responsive" summary="Average Hourly Earnings - BLS Numbers">
		<caption>Average Hourly Earnings</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					year
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Year - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					period
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Period - Months - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					value
				</th>
				<td>
					<span class="small">Data Type</span>
					numeric(8,3)
				</td>
				<td>
					<span class="small">Column Description</span>
					Value
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type
				</th>
				<td>
					<span class="small">Data Type</span>
					char(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Type - Preliminary(p), Revised(r), Final(F)
				</td>
			</tr>
		</tbody>
	</table>
</div>

<h3 id="consumerPriceIndex" tabindex="-1">consumerPriceIndex Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CUSR0000SA0?output_view=pct_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CUSR0000SA0?output_view=pct_1mth</a></p>

<div>
	<table class="accessible responsive" summary="Consumer Price Index - BLS Numbers">
		<caption>Consumer Price Index</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					year
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Year - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					period
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Period - Months - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					value
				</th>
				<td>
					<span class="small">Data Type</span>
					numeric(8,3)
				</td>
				<td>
					<span class="small">Column Description</span>
					Value
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type
				</th>
				<td>
					<span class="small">Data Type</span>
					char(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Type - Preliminary(p), Revised(r), Final(F)
				</td>
			</tr>
		</tbody>
	</table>
</div>

<h3 id="employmentCostIndex" tabindex="-1">employmentCostIndex Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CIS1010000000000Q&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CIS1010000000000Q</a></p>

<div>
	<table class="accessible responsive" summary="Employment Cost Index - BLS Numbers">
		<caption>Employment Cost Index</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					year
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Year - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					period
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Period - Quarters - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					value
				</th>
				<td>
					<span class="small">Data Type</span>
					numeric(8,3)
				</td>
				<td>
					<span class="small">Column Description</span>
					Value
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type
				</th>
				<td>
					<span class="small">Data Type</span>
					char(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Type - Preliminary(p), Revised(r), Final(F)
				</td>
			</tr>
		</tbody>
	</table>
</div>

<h3 id="exportPriceIndex" tabindex="-1">exportPriceIndex Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/EIUIQ?output_view=pct_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/EIUIQ?output_view=pct_1mth</a></p>

<div>	
	<table class="accessible responsive" summary="Export Price Index - BLS Numbers">
		<caption>Export Price Index</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					year
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Year - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					period
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Period - Months - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					value
				</th>
				<td>
					<span class="small">Data Type</span>
					numeric(8,3)
				</td>
				<td>
					<span class="small">Column Description</span>
					Value
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type
				</th>
				<td>
					<span class="small">Data Type</span>
					char(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Type - Preliminary(p), Revised(r), Final(F)
				</td>
			</tr>
		</tbody>
	</table>
</div>

<h3 id="importPriceIndex" tabindex="-1">importPriceIndex Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/EIUIR?output_view=pct_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/EIUIR?output_view=pct_1mth</a></p>

<div>
	<table class="accessible responsive" summary="Import Price Index - BLS Numbers">
		<caption>Import Price Index</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					year
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Year - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					period
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Period - Months - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					value
				</th>
				<td>
					<span class="small">Data Type</span>
					numeric(8,3)
				</td>
				<td>
					<span class="small">Column Description</span>
					Value
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type
				</th>
				<td>
					<span class="small">Data Type</span>
					char(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Type - Preliminary(p), Revised(r), Final(F)
				</td>
			</tr>
		</tbody>
	</table>
</div>

<h3 id="payrollEmployment" tabindex="-1">payrollEmployment Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CES0000000001?output_view=net_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CES0000000001?output_view=net_1mth</a></p>

<div>	
	<table class="accessible responsive" summary="Payroll Employment - BLS Numbers">
		<caption>Payroll Employment</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					year
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Year - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					period
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Period - Months - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					value
				</th>
				<td>
					<span class="small">Data Type</span>
					numeric(8,0)
				</td>
				<td>
					<span class="small">Column Description</span>
					Value
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type
				</th>
				<td>
					<span class="small">Data Type</span>
					char(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Type - Preliminary(p), Revised(r), Final(F)
				</td>
			</tr>
		</tbody>
	</table>
</div>

<h3 id="producerPriceIndex" tabindex="-1">producerPriceIndex Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://www.bls.gov/data/&amp;exitTitle=BLS&amp;fedpage=yes">http://www.bls.gov/data/</a></p>

<div>
	<table class="accessible responsive" summary="Producer Price Index - BLS Numbers">
		<caption>Producer Price Index</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					year
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Year - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					period
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Period - Months - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					value
				</th>
				<td>
					<span class="small">Data Type</span>
					numeric(8,3)
				</td>
				<td>
					<span class="small">Column Description</span>
					Value
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type
				</th>
				<td>
					<span class="small">Data Type</span>
					char(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Type - Preliminary(p), Revised(r), Final(F)
				</td>
			</tr>
		</tbody>
	</table>
</div>

<h3 id="productivity" tabindex="-1">productivity Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/PRS85006092&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/PRS85006092</a></p>

<div>	
	<table class="accessible responsive" summary="Productivity - BLS Numbers">
		<caption>Productivity</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					year
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Year - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					period
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(5)
				</td>
				<td>
					<span class="small">Column Description</span>
					Period - (A)Annual and (Q)Quarters - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					value
				</th>
				<td>
					<span class="small">Data Type</span>
					numeric(8,3)
				</td>
				<td>
					<span class="small">Column Description</span>
					Value
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type
				</th>
				<td>
					<span class="small">Data Type</span>
					char(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Type - Preliminary(p), Revised(r), Final(F)
				</td>
			</tr>
		</tbody>
	</table>
</div>

<h3 id="unemploymentRate" tabindex="-1">unemploymentRate Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/LNS14000000&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/LNS14000000</a></p>

<div>	
	<table class="accessible responsive" summary="Unemployment Rate - BLS Numbers">
		<caption>Unemployment Rate</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					year
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Year - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					period
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Period - Months - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					value
				</th>
				<td>
					<span class="small">Data Type</span>
					numeric(8,3)
				</td>
				<td>
					<span class="small">Column Description</span>
					Value
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type
				</th>
				<td>
					<span class="small">Data Type</span>
					char(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Type - Preliminary(p), Revised(r), Final(F)
				</td>
			</tr>
		</tbody>
	</table>
</div>

<h3 id="averageHourlyEarnings12MonthChange" tabindex="-1">averageHourlyEarnings12MonthChange Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CES0500000003?output_view=net_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CES0500000003?output_view=net_1mth</a></p>

<div>
	<table class="accessible responsive" summary="Average Hourly Earnings 12 Month Change - BLS Numbers">
		<caption>Average Hourly Earnings 12 Month Change</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					year
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Year - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					period
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Period - Months - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					value
				</th>
				<td>
					<span class="small">Data Type</span>
					numeric(8,3)
				</td>
				<td>
					<span class="small">Column Description</span>
					Value
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type
				</th>
				<td>
					<span class="small">Data Type</span>
					char(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Type - Preliminary(p), Revised(r), Final(F)
				</td>
			</tr>
		</tbody>
	</table>
</div>

<h3 id="averageHourlyEarnings1MonthChange" tabindex="-1">averageHourlyEarnings1MonthChange Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CES0500000003?output_view=net_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CES0500000003?output_view=net_1mth</a></p>

<div>	
	<table class="accessible responsive" summary="Average Hourly Earnings One Month Change - BLS Numbers">
		<caption>Average Hourly Earnings One Month Change</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					year
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Year - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					period
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Period - Months - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					value
				</th>
				<td>
					<span class="small">Data Type</span>
					numeric(8,3)
				</td>
				<td>
					<span class="small">Column Description</span>
					Value
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type
				</th>
				<td>
					<span class="small">Data Type</span>
					char(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Type - Preliminary(p), Revised(r), Final(F)
				</td>
			</tr>
		</tbody>
	</table>
</div>

<h3 id="averageHourlyEarnings1MonthNetChange" tabindex="-1">averageHourlyEarnings1MonthNetChange Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CES0500000003?output_view=net_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CES0500000003?output_view=net_1mth</a></p>

<div>	
	<table class="accessible responsive" summary="Average Hourly Earnings One Month Net Change - BLS Numbers">
		<caption>Average Hourly Earnings One Month Net Change</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					year
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Year - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					period
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Period - Months - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					value
				</th>
				<td>
					<span class="small">Data Type</span>
					numeric(8,3)
				</td>
				<td>
					<span class="small">Column Description</span>
					Value
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type
				</th>
				<td>
					<span class="small">Data Type</span>
					char(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Type - Preliminary(p), Revised(r), Final(F)
				</td>
			</tr>
		</tbody>
	</table>
</div>

<h3 id="consumerPriceIndex12MonthChange" tabindex="-1">consumerPriceIndex12MonthChange Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CUSR0000SA0?output_view=pct_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CUSR0000SA0?output_view=pct_1mth</a></p>

<div>
	<table class="accessible responsive" summary="Consumer Price Index 12 Month Change - BLS Numbers">
		<caption>Consumer Price Index 12 Month Change</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					year
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Year - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					period
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Period - Months - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					value
				</th>
				<td>
					<span class="small">Data Type</span>
					numeric(8,3)
				</td>
				<td>
					<span class="small">Column Description</span>
					Value
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type
				</th>
				<td>
					<span class="small">Data Type</span>
					char(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Type - Preliminary(p), Revised(r), Final(F)
				</td>
			</tr>
		</tbody>
	</table>
</div>

<h3 id="consumerPriceIndex1MonthChange" tabindex="-1">consumerPriceIndex1MonthChange Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CUSR0000SA0?output_view=pct_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CUSR0000SA0?output_view=pct_1mth</a></p>

<div>	
	<table class="accessible responsive" summary="Consumer Price Index One Month Change - BLS Numbers">
		<caption>Consumer Price Index One Month Change</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					year
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Year - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					period
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Period - Months - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					value
				</th>
				<td>
					<span class="small">Data Type</span>
					numeric(8,3)
				</td>
				<td>
					<span class="small">Column Description</span>
					Value
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type
				</th>
				<td>
					<span class="small">Data Type</span>
					char(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Type - Preliminary(p), Revised(r), Final(F)
				</td>
			</tr>
		</tbody>
	</table>
</div>

<h3 id="exportPriceIndex12MonthChange" tabindex="-1">exportPriceIndex12MonthChange Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/EIUIQ?output_view=pct_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/EIUIQ?output_view=pct_1mth</a></p>

<div>	
	<table class="accessible responsive" summary="Export Price Index 12 Month Change - BLS Numbers">
		<caption>Export Price Index 12 Month Change</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					year
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Year - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					period
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Period - Months - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					value
				</th>
				<td>
					<span class="small">Data Type</span>
					numeric(8,3)
				</td>
				<td>
					<span class="small">Column Description</span>
					Value
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type
				</th>
				<td>
					<span class="small">Data Type</span>
					char(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Type - Preliminary(p), Revised(r), Final(F)
				</td>
			</tr>
		</tbody>
	</table>
</div>

<h3 id="exportPriceIndex1MonthChange" tabindex="-1">exportPriceIndex1MonthChange Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/EIUIQ?output_view=pct_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/EIUIQ?output_view=pct_1mth</a></p>

<div>	
	<table class="accessible responsive" summary="Export Price Index One Month Change - BLS Numbers">
		<caption>Export Price Index One Month Change</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					year
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Year - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					period
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Period - Months - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					value
				</th>
				<td>
					<span class="small">Data Type</span>
					numeric(8,3)
				</td>
				<td>
					<span class="small">Column Description</span>
					Value
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type
				</th>
				<td>
					<span class="small">Data Type</span>
					char(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Type - Preliminary(p), Revised(r), Final(F)
				</td>
			</tr>
		</tbody>
	</table>
</div>

<h3 id="importPriceIndex12MonthChange" tabindex="-1">importPriceIndex12MonthChange Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/EIUIR?output_view=pct_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/EIUIR?output_view=pct_1mth</a></p>

<div>	
	<table class="accessible responsive" summary="Import Price Index 12 Month Change - BLS Numbers">
		<caption>Import Price Index 12 Month Change</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					year
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Year - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					period
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Period - Months - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					value
				</th>
				<td>
					<span class="small">Data Type</span>
					numeric(8,3)
				</td>
				<td>
					<span class="small">Column Description</span>
					Value
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type
				</th>
				<td>
					<span class="small">Data Type</span>
					char(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Type - Preliminary(p), Revised(r), Final(F)
				</td>
			</tr>
		</tbody>
	</table>
</div>

<h3 id="importPriceIndex1MonthChange" tabindex="-1">importPriceIndex1MonthChange Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/EIUIR?output_view=pct_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/EIUIR?output_view=pct_1mth</a></p>

<div>	
	<table class="accessible responsive" summary="Import Price Index One Month Change - BLS Numbers">
		<caption>Import Price Index One Month Change</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					year
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Year - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					period
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Period - Months - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					value
				</th>
				<td>
					<span class="small">Data Type</span>
					numeric(8,3)
				</td>
				<td>
					<span class="small">Column Description</span>
					Value
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type
				</th>
				<td>
					<span class="small">Data Type</span>
					char(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Type - Preliminary(p), Revised(r), Final(F)
				</td>
			</tr>
		</tbody>
	</table>
</div>

<h3 id="payrollEmployment12MonthChange" tabindex="-1">payrollEmployment12MonthChange Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CES0000000001?output_view=net_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CES0000000001?output_view=net_1mth</a></p>

<div>	
	<table class="accessible responsive" summary="Payroll Employment 12 Month Change - BLS Numbers">
		<caption>Payroll Employment 12 Month Change</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					year
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Year - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					period
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Period - Months - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					value
				</th>
				<td>
					<span class="small">Data Type</span>
					numeric(8,3)
				</td>
				<td>
					<span class="small">Column Description</span>
					Value
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type
				</th>
				<td>
					<span class="small">Data Type</span>
					char(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Type - Preliminary(p), Revised(r), Final(F)
				</td>
			</tr>
		</tbody>
	</table>
</div>

<h3 id="payrollEmployment12MonthNetChange" tabindex="-1">payrollEmployment12MonthNetChange Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CES0000000001?output_view=net_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CES0000000001?output_view=net_1mth</a></p>

<div>	
	<table class="accessible responsive" summary="Payroll Employment 12 Month Net Change - BLS Numbers">
		<caption>Payroll Employment 12 Month Net Change</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					year
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Year - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					period
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Period - Months - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					value
				</th>
				<td>
					<span class="small">Data Type</span>
					numeric(8,3)
				</td>
				<td>
					<span class="small">Column Description</span>
					Value
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type
				</th>
				<td>
					<span class="small">Data Type</span>
					char(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Type - Preliminary(p), Revised(r), Final(F)
				</td>
			</tr>
		</tbody>
	</table>
</div>

<h3 id="payrollEmployment1MonthChange" tabindex="-1">payrollEmployment1MonthChange Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CES0000000001?output_view=net_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CES0000000001?output_view=net_1mth</a></p>

<div>
	<table class="accessible responsive" summary="Payroll Employment One Month Change - BLS Numbers">
		<caption>Payroll Employment One Month Change</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					year
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Year - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					period
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Period - Months - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					value
				</th>
				<td>
					<span class="small">Data Type</span>
					numeric(8,3)
				</td>
				<td>
					<span class="small">Column Description</span>
					Value
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type
				</th>
				<td>
					<span class="small">Data Type</span>
					char(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Type - Preliminary(p), Revised(r), Final(F)
				</td>
			</tr>
		</tbody>
	</table>
</div>

<h3 id="payrollEmployment1MonthNetChange" tabindex="-1">payrollEmployment1MonthNetChange Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CES0000000001?output_view=net_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CES0000000001?output_view=net_1mth</a></p>

<div>	
	<table class="accessible responsive" summary="Payroll Employment One Month Net Change - BLS Numbers">
		<caption>Payroll Employment One Month Net Change</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					year
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Year - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					period
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Period - Months - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					value
				</th>
				<td>
					<span class="small">Data Type</span>
					numeric(8,3)
				</td>
				<td>
					<span class="small">Column Description</span>
					Value (in thousands)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type
				</th>
				<td>
					<span class="small">Data Type</span>
					char(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Type - Preliminary(p), Revised(r), Final(F)
				</td>
			</tr>
		</tbody>
	</table>
</div>

<h3 id="producerPriceIndex12MonthChange" tabindex="-1">producerPriceIndex12MonthChange Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://www.bls.gov/data/&amp;exitTitle=BLS&amp;fedpage=yes">http://www.bls.gov/data/</a></p>

<div>	
	<table class="accessible responsive" summary="Producer Price Index 12 Month Change - BLS Numbers">
		<caption>Producer Price Index 12 Month Change</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					year
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Year - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					period
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Period - Months - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					value
				</th>
				<td>
					<span class="small">Data Type</span>
					numeric(8,3)
				</td>
				<td>
					<span class="small">Column Description</span>
					Value
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type
				</th>
				<td>
					<span class="small">Data Type</span>
					char(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Type - Preliminary(p), Revised(r), Final(F)
				</td>
			</tr>
		</tbody>
	</table>
</div>

<h3 id="producerPriceIndex1MonthChange" tabindex="-1">producerPriceIndex1MonthChange Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://www.bls.gov/data/&amp;exitTitle=BLS&amp;fedpage=yes">http://www.bls.gov/data/</a></p>

<div>	
	<table class="accessible responsive" summary="Producer Price Index One Month Change - BLS Numbers">
		<caption>Producer Price Index One Month Change</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					year
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Year - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					period
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Period - Months - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					value
				</th>
				<td>
					<span class="small">Data Type</span>
					numeric(8,3)
				</td>
				<td>
					<span class="small">Column Description</span>
					Value
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type
				</th>
				<td>
					<span class="small">Data Type</span>
					char(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Type - Preliminary(p), Revised(r), Final(F)
				</td>
			</tr>
		</tbody>
	</table>
</div>

<h3 id="unemploymentRate12MonthChange" tabindex="-1">unemploymentRate12MonthChange Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/LNS14000000&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/LNS14000000</a></p>

<div>	
	<table class="accessible responsive" summary="Unemployment Rate 12 Month Change - BLS Numbers">
		<caption>Unemployment Rate 12 Month Change</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					year
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Year - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					period
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Period - Months - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					value
				</th>
				<td>
					<span class="small">Data Type</span>
					numeric(8,3)
				</td>
				<td>
					<span class="small">Column Description</span>
					Value
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type
				</th>
				<td>
					<span class="small">Data Type</span>
					char(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Type - Preliminary(p), Revised(r), Final(F)
				</td>
			</tr>
		</tbody>
	</table>
</div>

<h3 id="unemploymentRate1MonthChange" tabindex="-1">unemploymentRate1MonthChange Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/LNS14000000&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/LNS14000000</a></p>

<div>	
	<table class="accessible responsive" summary="Unemployment Rate One Month Change - BLS Numbers">
		<caption>Unemployment Rate One Month Change</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Data Type</th>
				<th scope="col">Column Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					year
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Year - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					period
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Period - Months - Primary Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					value
				</th>
				<td>
					<span class="small">Data Type</span>
					numeric(8,3)
				</td>
				<td>
					<span class="small">Column Description</span>
					Value
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					type
				</th>
				<td>
					<span class="small">Data Type</span>
					char(1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Type - Preliminary(p), Revised(r), Final(F)
				</td>
			</tr>
		</tbody>
	</table>
</div>