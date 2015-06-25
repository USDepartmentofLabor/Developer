---
layout: post
title: BLS Numbers
created: 1359483400
description: This Dataset contains historic data (last 10 years) for the most common economic indicators.
---

<div class="force_wrap apiurl">
<p>http://api.dol.gov/V1/statistics/BLS_Numbers</p>
</div>

<p>This Dataset contains historic data (last 10 years) for the most common economic indicators. More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://bls.gov&amp;exitTitle=BLS&amp;fedpage=yes">http://bls.gov</a></p>

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

<h3 id="averageHourlyEarnings">averageHourlyEarnings Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CES0500000003?output_view=net_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CES0500000003?output_view=net_1mth</a></p>

<div class="dsktp_tbl">
	<table summary="Average Hourly Earnings - BLS Numbers">
		<caption>Average Hourly Earnings</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">year</th>
				<td>Year - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">period</th>
				<td>Period - Months - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">value</th>
				<td>Value</td>
				<td>numeric(8,3)</td>
			</tr>
			<tr>
				<th scope="row">type</th>
				<td>Type - Preliminary(p), Revised(r), Final(F)</td>
				<td>char(1)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h4>Average Hourly Earnings - BLS Numbers</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: year</p>
		<p><span class="mbl-strng">Column Description:</span> Year - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: period</p>
		<p><span class="mbl-strng">Column Description:</span> Period - Months - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: value</p>
		<p><span class="mbl-strng">Column Description:</span> Value</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(8,3)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type</p>
		<p><span class="mbl-strng">Column Description:</span> Type - Preliminary(p), Revised(r), Final(F)</p>
		<p><span class="mbl-strng">Data Type:</span> char(1)</p>
	</div>
	<hr />
</div>

<h3 id="consumerPriceIndex">consumerPriceIndex Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CUSR0000SA0?output_view=pct_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CUSR0000SA0?output_view=pct_1mth</a></p>

<div class="dsktp_tbl">
	<table summary="Consumer Price Index - BLS Numbers">
		<caption>Consumer Price Index</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">year</th>
				<td>Year - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">period</th>
				<td>Period - Months - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">value</th>
				<td>Value</td>
				<td>numeric(8,3)</td>
			</tr>
			<tr>
				<th scope="row">type</th>
				<td>Type - Preliminary(p), Revised(r), Final(F)</td>
				<td>char(1)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h4>Consumer Price Index - BLS Numbers</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: year</p>
		<p><span class="mbl-strng">Column Description:</span> Year - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: period</p>
		<p><span class="mbl-strng">Column Description:</span> Period - Months - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: value</p>
		<p><span class="mbl-strng">Column Description:</span> Value</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(8,3)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type</p>
		<p><span class="mbl-strng">Column Description:</span> Type - Preliminary(p), Revised(r), Final(F)</p>
		<p><span class="mbl-strng">Data Type:</span> char(1)</p>
	</div>
	<hr />
</div>

<h3 id="employmentCostIndex">employmentCostIndex Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CIS1010000000000Q&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CIS1010000000000Q</a></p>

<div class="dsktp_tbl">
	<table summary="Employment Cost Index - BLS Numbers">
		<caption>Employment Cost Index</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">year</th>
				<td>Year - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">period</th>
				<td>Period - Quarters - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">value</th>
				<td>Value</td>
				<td>numeric(8,3)</td>
			</tr>
			<tr>
				<th scope="row">type</th>
				<td>Type - Preliminary(p), Revised(r), Final(F)</td>
				<td>char(1)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h4>Employment Cost Index - BLS Numbers</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: year</p>
		<p><span class="mbl-strng">Column Description:</span> Year - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: period</p>
		<p><span class="mbl-strng">Column Description:</span> Period - Months - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: value</p>
		<p><span class="mbl-strng">Column Description:</span> Value</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(8,3)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type</p>
		<p><span class="mbl-strng">Column Description:</span> Type - Preliminary(p), Revised(r), Final(F)</p>
		<p><span class="mbl-strng">Data Type:</span> char(1)</p>
	</div>
	<hr />
</div>

<h3 id="exportPriceIndex">exportPriceIndex Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/EIUIQ?output_view=pct_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/EIUIQ?output_view=pct_1mth</a></p>

<div class="dsktp_tbl">	
	<table summary="Export Price Index - BLS Numbers">
		<caption>Export Price Index</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">year</th>
				<td>Year - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">period</th>
				<td>Period - Months - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">value</th>
				<td>Value</td>
				<td>numeric(8,3)</td>
			</tr>
			<tr>
				<th scope="row">type</th>
				<td>Type - Preliminary(p), Revised(r), Final(F)</td>
				<td>char(1)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h4>Export Price Index - BLS Numbers</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: year</p>
		<p><span class="mbl-strng">Column Description:</span> Year - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: period</p>
		<p><span class="mbl-strng">Column Description:</span> Period - Months - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: value</p>
		<p><span class="mbl-strng">Column Description:</span> Value</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(8,3)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type</p>
		<p><span class="mbl-strng">Column Description:</span> Type - Preliminary(p), Revised(r), Final(F)</p>
		<p><span class="mbl-strng">Data Type:</span> char(1)</p>
	</div>
	<hr />
</div>

<h3 id="importPriceIndex">importPriceIndex Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/EIUIR?output_view=pct_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/EIUIR?output_view=pct_1mth</a></p>

<div class="dsktp_tbl">
	<table summary="Import Price Index - BLS Numbers">
		<caption>Import Price Index</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">year</th>
				<td>Year - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">period</th>
				<td>Period - Months - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">value</th>
				<td>Value</td>
				<td>numeric(8,3)</td>
			</tr>
			<tr>
				<th scope="row">type</th>
				<td>Type - Preliminary(p), Revised(r), Final(F)</td>
				<td>char(1)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h4>Import Price Index - BLS Numbers</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: year</p>
		<p><span class="mbl-strng">Column Description:</span> Year - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: period</p>
		<p><span class="mbl-strng">Column Description:</span> Period - Months - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: value</p>
		<p><span class="mbl-strng">Column Description:</span> Value</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(8,3)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type</p>
		<p><span class="mbl-strng">Column Description:</span> Type - Preliminary(p), Revised(r), Final(F)</p>
		<p><span class="mbl-strng">Data Type:</span> char(1)</p>
	</div>
	<hr />
</div>

<h3 id="payrollEmployment">payrollEmployment Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CES0000000001?output_view=net_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CES0000000001?output_view=net_1mth</a></p>

<div class="dsktp_tbl">	
	<table summary="Payroll Employment - BLS Numbers">
		<caption>Payroll Employment</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">year</th>
				<td>Year - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">period</th>
				<td>Period - Months - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">value</th>
				<td>Value</td>
				<td>numeric(8,0)</td>
			</tr>
			<tr>
				<th scope="row">type</th>
				<td>Type - Preliminary(p), Revised(r), Final(F)</td>
				<td>char(1)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h4>Payroll Employment - BLS Numbers</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: year</p>
		<p><span class="mbl-strng">Column Description:</span> Year - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: period</p>
		<p><span class="mbl-strng">Column Description:</span> Period - Months - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: value</p>
		<p><span class="mbl-strng">Column Description:</span> Value</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(8,0)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type</p>
		<p><span class="mbl-strng">Column Description:</span> Type - Preliminary(p), Revised(r), Final(F)</p>
		<p><span class="mbl-strng">Data Type:</span> char(1)</p>
	</div>
	<hr />
</div>

<h3 id="producerPriceIndex">producerPriceIndex Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/WPSSOP3000?output_view=pct_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/WPSSOP3000?output_view=pct_1mth</a></p>

<div class="dsktp_tbl">
	<table summary="Producer Price Index - BLS Numbers">
		<caption>Producer Price Index</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">year</th>
				<td>Year - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">period</th>
				<td>Period - Months - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">value</th>
				<td>Value</td>
				<td>numeric(8,3)</td>
			</tr>
			<tr>
				<th scope="row">type</th>
				<td>Type - Preliminary(p), Revised(r), Final(F)</td>
				<td>char(1)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h4>Producer Price Index - BLS Numbers</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: year</p>
		<p><span class="mbl-strng">Column Description:</span> Year - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: period</p>
		<p><span class="mbl-strng">Column Description:</span> Period - Months - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: value</p>
		<p><span class="mbl-strng">Column Description:</span> Value</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(8,3)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type</p>
		<p><span class="mbl-strng">Column Description:</span> Type - Preliminary(p), Revised(r), Final(F)</p>
		<p><span class="mbl-strng">Data Type:</span> char(1)</p>
	</div>
	<hr />
</div>

<h3 id="productivity">productivity Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/PRS85006092&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/PRS85006092</a></p>

<div class="dsktp_tbl">	
	<table summary="Productivity - BLS Numbers">
		<caption>Productivity</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">year</th>
				<td>Year - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">period</th>
				<td>Period - (A)Annual and (Q)Quarters - Primary Key</td>
				<td>varchar(5)</td>
			</tr>
			<tr>
				<th scope="row">value</th>
				<td>Value</td>
				<td>numeric(8,3)</td>
			</tr>
			<tr>
				<th scope="row">type</th>
				<td>Type - Preliminary(p), Revised(r), Final(F)</td>
				<td>char(1)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h4>Productivity - BLS Numbers</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: year</p>
		<p><span class="mbl-strng">Column Description:</span> Year - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: period</p>
		<p><span class="mbl-strng">Column Description:</span> Period - (A)Annual and (Q)Quarters - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(5)</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: value</p>
		<p><span class="mbl-strng">Column Description:</span> Value</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(8,3)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type</p>
		<p><span class="mbl-strng">Column Description:</span> Type - Preliminary(p), Revised(r), Final(F)</p>
		<p><span class="mbl-strng">Data Type:</span> char(1)</p>
	</div>
	<hr />
</div>

<h3 id="unemploymentRate">unemploymentRate Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/LNS14000000&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/LNS14000000</a></p>

<div class="dsktp_tbl">	
	<table summary="Unemployment Rate - BLS Numbers">
		<caption>Unemployment Rate</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">year</th>
				<td>Year - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">period</th>
				<td>Period - Months - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">value</th>
				<td>Value</td>
				<td>numeric(8,3)</td>
			</tr>
			<tr>
				<th scope="row">type</th>
				<td>Type - Preliminary(p), Revised(r), Final(F)</td>
				<td>char(1)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h4>Unemployment Rate - BLS Numbers</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: year</p>
		<p><span class="mbl-strng">Column Description:</span> Year - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: period</p>
		<p><span class="mbl-strng">Column Description:</span> Period - Months - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: value</p>
		<p><span class="mbl-strng">Column Description:</span> Value</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(8,3)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type</p>
		<p><span class="mbl-strng">Column Description:</span> Type - Preliminary(p), Revised(r), Final(F)</p>
		<p><span class="mbl-strng">Data Type:</span> char(1)</p>
	</div>
	<hr />
</div>

<h3 id="averageHourlyEarnings12MonthChange">averageHourlyEarnings12MonthChange Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CES0500000003?output_view=net_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CES0500000003?output_view=net_1mth</a></p>

<div class="dsktp_tbl">
	<table summary="Average Hourly Earnings 12 Month Change - BLS Numbers">
		<caption>Average Hourly Earnings 12 Month Change</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">year</th>
				<td>Year - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">period</th>
				<td>Period - Months - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">value</th>
				<td>Value</td>
				<td>numeric(8,3)</td>
			</tr>
			<tr>
				<th scope="row">type</th>
				<td>Type - Preliminary(p), Revised(r), Final(F)</td>
				<td>char(1)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h4>Average Hourly Earnings 12 Month Change - BLS Numbers</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: year</p>
		<p><span class="mbl-strng">Column Description:</span> Year - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: period</p>
		<p><span class="mbl-strng">Column Description:</span> Period - Months - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: value</p>
		<p><span class="mbl-strng">Column Description:</span> Value</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(8,3)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type</p>
		<p><span class="mbl-strng">Column Description:</span> Type - Preliminary(p), Revised(r), Final(F)</p>
		<p><span class="mbl-strng">Data Type:</span> char(1)</p>
	</div>
	<hr />
</div>

<h3 id="averageHourlyEarnings1MonthChange">averageHourlyEarnings1MonthChange Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CES0500000003?output_view=net_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CES0500000003?output_view=net_1mth</a></p>

<div class="dsktp_tbl">	
	<table summary="Average Hourly Earnings One Month Change - BLS Numbers">
		<caption>Average Hourly Earnings One Month Change</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">year</th>
				<td>Year - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">period</th>
				<td>Period - Months - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">value</th>
				<td>Value</td>
				<td>numeric(8,3)</td>
			</tr>
			<tr>
				<th scope="row">type</th>
				<td>Type - Preliminary(p), Revised(r), Final(F)</td>
				<td>char(1)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h4>Average Hourly Earnings One Month Change - BLS Numbers</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: year</p>
		<p><span class="mbl-strng">Column Description:</span> Year - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: period</p>
		<p><span class="mbl-strng">Column Description:</span> Period - Months - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: value</p>
		<p><span class="mbl-strng">Column Description:</span> Value</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(8,3)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type</p>
		<p><span class="mbl-strng">Column Description:</span> Type - Preliminary(p), Revised(r), Final(F)</p>
		<p><span class="mbl-strng">Data Type:</span> char(1)</p>
	</div>
	<hr />
</div>

<h3 id="averageHourlyEarnings1MonthNetChange">averageHourlyEarnings1MonthNetChange Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CES0500000003?output_view=net_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CES0500000003?output_view=net_1mth</a></p>

<div class="dsktp_tbl">	
	<table summary="Average Hourly Earnings One Month Net Change - BLS Numbers">
		<caption>Average Hourly Earnings One Month Net Change</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">year</th>
				<td>Year - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">period</th>
				<td>Period - Months - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">value</th>
				<td>Value</td>
				<td>numeric(8,3)</td>
			</tr>
			<tr>
				<th scope="row">type</th>
				<td>Type - Preliminary(p), Revised(r), Final(F)</td>
				<td>char(1)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h4>Average Hourly Earnings One Month Net Change - BLS Numbers</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: year</p>
		<p><span class="mbl-strng">Column Description:</span> Year - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: period</p>
		<p><span class="mbl-strng">Column Description:</span> Period - Months - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: value</p>
		<p><span class="mbl-strng">Column Description:</span> Value</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(8,3)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type</p>
		<p><span class="mbl-strng">Column Description:</span> Type - Preliminary(p), Revised(r), Final(F)</p>
		<p><span class="mbl-strng">Data Type:</span> char(1)</p>
	</div>
	<hr />
</div>

<h3 id="consumerPriceIndex12MonthChange">consumerPriceIndex12MonthChange Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CUSR0000SA0?output_view=pct_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CUSR0000SA0?output_view=pct_1mth</a></p>

<div class="dsktp_tbl">
	<table summary="Consumer Price Index 12 Month Change - BLS Numbers">
		<caption>Consumer Price Index 12 Month Change</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">year</th>
				<td>Year - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">period</th>
				<td>Period - Months - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">value</th>
				<td>Value</td>
				<td>numeric(8,3)</td>
			</tr>
			<tr>
				<th scope="row">type</th>
				<td>Type - Preliminary(p), Revised(r), Final(F)</td>
				<td>char(1)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h4>Consumer Price Index 12 Month Change - BLS Numbers</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: year</p>
		<p><span class="mbl-strng">Column Description:</span> Year - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: period</p>
		<p><span class="mbl-strng">Column Description:</span> Period - Months - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: value</p>
		<p><span class="mbl-strng">Column Description:</span> Value</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(8,3)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type</p>
		<p><span class="mbl-strng">Column Description:</span> Type - Preliminary(p), Revised(r), Final(F)</p>
		<p><span class="mbl-strng">Data Type:</span> char(1)</p>
	</div>
	<hr />
</div>

<h3 id="consumerPriceIndex1MonthChange">consumerPriceIndex1MonthChange Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CUSR0000SA0?output_view=pct_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CUSR0000SA0?output_view=pct_1mth</a></p>

<div class="dsktp_tbl">	
	<table summary="Consumer Price Index One Month Change - BLS Numbers">
		<caption>Consumer Price Index One Month Change</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">year</th>
				<td>Year - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">period</th>
				<td>Period - Months - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">value</th>
				<td>Value</td>
				<td>numeric(8,3)</td>
			</tr>
			<tr>
				<th scope="row">type</th>
				<td>Type - Preliminary(p), Revised(r), Final(F)</td>
				<td>char(1)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h4>Consumer Price Index One Month Change - BLS Numbers</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: year</p>
		<p><span class="mbl-strng">Column Description:</span> Year - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: period</p>
		<p><span class="mbl-strng">Column Description:</span> Period - Months - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: value</p>
		<p><span class="mbl-strng">Column Description:</span> Value</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(8,3)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type</p>
		<p><span class="mbl-strng">Column Description:</span> Type - Preliminary(p), Revised(r), Final(F)</p>
		<p><span class="mbl-strng">Data Type:</span> char(1)</p>
	</div>
	<hr />
</div>

<h3 id="exportPriceIndex12MonthChange">exportPriceIndex12MonthChange Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/EIUIQ?output_view=pct_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/EIUIQ?output_view=pct_1mth</a></p>

<div class="dsktp_tbl">	
	<table summary="Export Price Index 12 Month Change - BLS Numbers">
		<caption>Export Price Index 12 Month Change</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">year</th>
				<td>Year - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">period</th>
				<td>Period - Months - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">value</th>
				<td>Value</td>
				<td>numeric(8,3)</td>
			</tr>
			<tr>
				<th scope="row">type</th>
				<td>Type - Preliminary(p), Revised(r), Final(F)</td>
				<td>char(1)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h4>Export Price Index 12 Month Change - BLS Numbers</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: year</p>
		<p><span class="mbl-strng">Column Description:</span> Year - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: period</p>
		<p><span class="mbl-strng">Column Description:</span> Period - Months - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: value</p>
		<p><span class="mbl-strng">Column Description:</span> Value</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(8,3)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type</p>
		<p><span class="mbl-strng">Column Description:</span> Type - Preliminary(p), Revised(r), Final(F)</p>
		<p><span class="mbl-strng">Data Type:</span> char(1)</p>
	</div>
	<hr />
</div>

<h3 id="exportPriceIndex1MonthChange">exportPriceIndex1MonthChange Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/EIUIQ?output_view=pct_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/EIUIQ?output_view=pct_1mth</a></p>

<div class="dsktp_tbl">	
	<table summary="Export Price Index One Month Change - BLS Numbers">
		<caption>Export Price Index One Month Change</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">year</th>
				<td>Year - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">period</th>
				<td>Period - Months - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">value</th>
				<td>Value</td>
				<td>numeric(8,3)</td>
			</tr>
			<tr>
				<th scope="row">type</th>
				<td>Type - Preliminary(p), Revised(r), Final(F)</td>
				<td>char(1)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h4>Export Price Index One Month Change - BLS Numbers</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: year</p>
		<p><span class="mbl-strng">Column Description:</span> Year - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: period</p>
		<p><span class="mbl-strng">Column Description:</span> Period - Months - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: value</p>
		<p><span class="mbl-strng">Column Description:</span> Value</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(8,3)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type</p>
		<p><span class="mbl-strng">Column Description:</span> Type - Preliminary(p), Revised(r), Final(F)</p>
		<p><span class="mbl-strng">Data Type:</span> char(1)</p>
	</div>
	<hr />
</div>

<h3 id="importPriceIndex12MonthChange">importPriceIndex12MonthChange Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/EIUIR?output_view=pct_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/EIUIR?output_view=pct_1mth</a></p>

<div class="dsktp_tbl">	
	<table summary="Import Price Index 12 Month Change - BLS Numbers">
		<caption>Import Price Index 12 Month Change</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">year</th>
				<td>Year - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">period</th>
				<td>Period - Months - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">value</th>
				<td>Value</td>
				<td>numeric(8,3)</td>
			</tr>
			<tr>
				<th scope="row">type</th>
				<td>Type - Preliminary(p), Revised(r), Final(F)</td>
				<td>char(1)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h4>Import Price Index 12 Month Change - BLS Numbers</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: year</p>
		<p><span class="mbl-strng">Column Description:</span> Year - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: period</p>
		<p><span class="mbl-strng">Column Description:</span> Period - Months - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: value</p>
		<p><span class="mbl-strng">Column Description:</span> Value</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(8,3)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type</p>
		<p><span class="mbl-strng">Column Description:</span> Type - Preliminary(p), Revised(r), Final(F)</p>
		<p><span class="mbl-strng">Data Type:</span> char(1)</p>
	</div>
	<hr />
</div>

<h3 id="importPriceIndex1MonthChange">importPriceIndex1MonthChange Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/EIUIR?output_view=pct_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/EIUIR?output_view=pct_1mth</a></p>

<div class="dsktp_tbl">	
	<table summary="Import Price Index One Month Change - BLS Numbers">
		<caption>Import Price Index One Month Change</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">year</th>
				<td>Year - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">period</th>
				<td>Period - Months - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">value</th>
				<td>Value</td>
				<td>numeric(8,3)</td>
			</tr>
			<tr>
				<th scope="row">type</th>
				<td>Type - Preliminary(p), Revised(r), Final(F)</td>
				<td>char(1)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h4>Import Price Index One Month Change - BLS Numbers</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: year</p>
		<p><span class="mbl-strng">Column Description:</span> Year - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: period</p>
		<p><span class="mbl-strng">Column Description:</span> Period - Months - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: value</p>
		<p><span class="mbl-strng">Column Description:</span> Value</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(8,3)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type</p>
		<p><span class="mbl-strng">Column Description:</span> Type - Preliminary(p), Revised(r), Final(F)</p>
		<p><span class="mbl-strng">Data Type:</span> char(1)</p>
	</div>
	<hr />
</div>

<h3 id="payrollEmployment12MonthChange">payrollEmployment12MonthChange Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CES0000000001?output_view=net_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CES0000000001?output_view=net_1mth</a></p>

<div class="dsktp_tbl">	
	<table summary="Payroll Employment 12 Month Change - BLS Numbers">
		<caption>Payroll Employment 12 Month Change</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">year</th>
				<td>Year - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">period</th>
				<td>Period - Months - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">value</th>
				<td>Value</td>
				<td>numeric(8,3)</td>
			</tr>
			<tr>
				<th scope="row">type</th>
				<td>Type - Preliminary(p), Revised(r), Final(F)</td>
				<td>char(1)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h4>Payroll Employment 12 Month Change - BLS Numbers</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: year</p>
		<p><span class="mbl-strng">Column Description:</span> Year - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: period</p>
		<p><span class="mbl-strng">Column Description:</span> Period - Months - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: value</p>
		<p><span class="mbl-strng">Column Description:</span> Value</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(8,3)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type</p>
		<p><span class="mbl-strng">Column Description:</span> Type - Preliminary(p), Revised(r), Final(F)</p>
		<p><span class="mbl-strng">Data Type:</span> char(1)</p>
	</div>
	<hr />
</div>

<h3 id="payrollEmployment12MonthNetChange">payrollEmployment12MonthNetChange Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CES0000000001?output_view=net_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CES0000000001?output_view=net_1mth</a></p>

<div class="dsktp_tbl">	
	<table summary="Payroll Employment 12 Month Net Change - BLS Numbers">
		<caption>Payroll Employment 12 Month Net Change</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">year</th>
				<td>Year - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">period</th>
				<td>Period - Months - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">value</th>
				<td>Value</td>
				<td>numeric(8,3)</td>
			</tr>
			<tr>
				<th scope="row">type</th>
				<td>Type - Preliminary(p), Revised(r), Final(F)</td>
				<td>char(1)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h4>Payroll Employment 12 Month Net Change - BLS Numbers</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: year</p>
		<p><span class="mbl-strng">Column Description:</span> Year - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: period</p>
		<p><span class="mbl-strng">Column Description:</span> Period - Months - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: value</p>
		<p><span class="mbl-strng">Column Description:</span> Value</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(8,3)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type</p>
		<p><span class="mbl-strng">Column Description:</span> Type - Preliminary(p), Revised(r), Final(F)</p>
		<p><span class="mbl-strng">Data Type:</span> char(1)</p>
	</div>
	<hr />
</div>

<h3 id="payrollEmployment1MonthChange">payrollEmployment1MonthChange Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CES0000000001?output_view=net_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CES0000000001?output_view=net_1mth</a></p>

<div class="dsktp_tbl">
	<table summary="Payroll Employment One Month Change - BLS Numbers">
		<caption>Payroll Employment One Month Change</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">year</th>
				<td>Year - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">period</th>
				<td>Period - Months - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">value</th>
				<td>Value</td>
				<td>numeric(8,3)</td>
			</tr>
			<tr>
				<th scope="row">type</th>
				<td>Type - Preliminary(p), Revised(r), Final(F)</td>
				<td>char(1)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h4>Payroll Employment One Month Change - BLS Numbers</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: year</p>
		<p><span class="mbl-strng">Column Description:</span> Year - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: period</p>
		<p><span class="mbl-strng">Column Description:</span> Period - Months - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: value</p>
		<p><span class="mbl-strng">Column Description:</span> Value</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(8,3)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type</p>
		<p><span class="mbl-strng">Column Description:</span> Type - Preliminary(p), Revised(r), Final(F)</p>
		<p><span class="mbl-strng">Data Type:</span> char(1)</p>
	</div>
	<hr />
</div>

<h3 id="payrollEmployment1MonthNetChange">payrollEmployment1MonthNetChange Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CES0000000001?output_view=net_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CES0000000001?output_view=net_1mth</a></p>

<div class="dsktp_tbl">	
	<table summary="Payroll Employment One Month Net Change - BLS Numbers">
		<caption>Payroll Employment One Month Net Change</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">year</th>
				<td>Year - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">period</th>
				<td>Period - Months - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">value</th>
				<td>Value (in thousands)</td>
				<td>numeric(8,3)</td>
			</tr>
			<tr>
				<th scope="row">type</th>
				<td>Type - Preliminary(p), Revised(r), Final(F)</td>
				<td>char(1)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h4>Payroll Employment One Month Net Change - BLS Numbers</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: year</p>
		<p><span class="mbl-strng">Column Description:</span> Year - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: period</p>
		<p><span class="mbl-strng">Column Description:</span> Period - Months - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: value</p>
		<p><span class="mbl-strng">Column Description:</span> Value</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(8,3)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type</p>
		<p><span class="mbl-strng">Column Description:</span> Type - Preliminary(p), Revised(r), Final(F)</p>
		<p><span class="mbl-strng">Data Type:</span> char(1)</p>
	</div>
	<hr />
</div>

<h3 id="producerPriceIndex12MonthChange">producerPriceIndex12MonthChange Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/WPSSOP3000?output_view=pct_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/WPSSOP3000?output_view=pct_1mth</a></p>

<div class="dsktp_tbl">	
	<table summary="Producer Price Index 12 Month Change - BLS Numbers">
		<caption>Producer Price Index 12 Month Change</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">year</th>
				<td>Year - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">period</th>
				<td>Period - Months - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">value</th>
				<td>Value</td>
				<td>numeric(8,3)</td>
			</tr>
			<tr>
				<th scope="row">type</th>
				<td>Type - Preliminary(p), Revised(r), Final(F)</td>
				<td>char(1)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h4>Producer Price Index 12 Month Change - BLS Numbers</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: year</p>
		<p><span class="mbl-strng">Column Description:</span> Year - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: period</p>
		<p><span class="mbl-strng">Column Description:</span> Period - Months - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: value</p>
		<p><span class="mbl-strng">Column Description:</span> Value</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(8,3)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type</p>
		<p><span class="mbl-strng">Column Description:</span> Type - Preliminary(p), Revised(r), Final(F)</p>
		<p><span class="mbl-strng">Data Type:</span> char(1)</p>
	</div>
	<hr />
</div>

<h3 id="producerPriceIndex1MonthChange">producerPriceIndex1MonthChange Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/WPSSOP3000?output_view=pct_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/WPSSOP3000?output_view=pct_1mth</a></p>

<div class="dsktp_tbl">	
	<table summary="Producer Price Index One Month Change - BLS Numbers">
		<caption>Producer Price Index One Month Change</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">year</th>
				<td>Year - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">period</th>
				<td>Period - Months - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">value</th>
				<td>Value</td>
				<td>numeric(8,3)</td>
			</tr>
			<tr>
				<th scope="row">type</th>
				<td>Type - Preliminary(p), Revised(r), Final(F)</td>
				<td>char(1)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h4>Producer Price Index One Month Change - BLS Numbers</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: year</p>
		<p><span class="mbl-strng">Column Description:</span> Year - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: period</p>
		<p><span class="mbl-strng">Column Description:</span> Period - Months - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: value</p>
		<p><span class="mbl-strng">Column Description:</span> Value</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(8,3)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type</p>
		<p><span class="mbl-strng">Column Description:</span> Type - Preliminary(p), Revised(r), Final(F)</p>
		<p><span class="mbl-strng">Data Type:</span> char(1)</p>
	</div>
	<hr />
</div>

<h3 id="unemploymentRate12MonthChange">unemploymentRate12MonthChange Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/LNS14000000&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/LNS14000000</a></p>

<div class="dsktp_tbl">	
	<table summary="Unemployment Rate 12 Month Change - BLS Numbers">
		<caption>Unemployment Rate 12 Month Change</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">year</th>
				<td>Year - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">period</th>
				<td>Period - Months - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">value</th>
				<td>Value</td>
				<td>numeric(8,3)</td>
			</tr>
			<tr>
				<th scope="row">type</th>
				<td>Type - Preliminary(p), Revised(r), Final(F)</td>
				<td>char(1)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h4>Unemployment Rate 12 Month Change - BLS Numbers</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: year</p>
		<p><span class="mbl-strng">Column Description:</span> Year - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: period</p>
		<p><span class="mbl-strng">Column Description:</span> Period - Months - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: value</p>
		<p><span class="mbl-strng">Column Description:</span> Value</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(8,3)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type</p>
		<p><span class="mbl-strng">Column Description:</span> Type - Preliminary(p), Revised(r), Final(F)</p>
		<p><span class="mbl-strng">Data Type:</span> char(1)</p>
	</div>
	<hr />
</div>

<h3 id="unemploymentRate1MonthChange">unemploymentRate1MonthChange Table</h3>
<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/LNS14000000&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/LNS14000000</a></p>

<div class="dsktp_tbl">	
	<table summary="Unemployment Rate One Month Change - BLS Numbers">
		<caption>Unemployment Rate One Month Change</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">year</th>
				<td>Year - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">period</th>
				<td>Period - Months - Primary Key</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">value</th>
				<td>Value</td>
				<td>numeric(8,3)</td>
			</tr>
			<tr>
				<th scope="row">type</th>
				<td>Type - Preliminary(p), Revised(r), Final(F)</td>
				<td>char(1)</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h4>Unemployment Rate One Month Change - BLS Numbers</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: year</p>
		<p><span class="mbl-strng">Column Description:</span> Year - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: period</p>
		<p><span class="mbl-strng">Column Description:</span> Period - Months - Primary Key</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: value</p>
		<p><span class="mbl-strng">Column Description:</span> Value</p>
		<p><span class="mbl-strng">Data Type:</span> numeric(8,3)</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: type</p>
		<p><span class="mbl-strng">Column Description:</span> Type - Preliminary(p), Revised(r), Final(F)</p>
		<p><span class="mbl-strng">Data Type:</span> char(1)</p>
	</div>
</div>
