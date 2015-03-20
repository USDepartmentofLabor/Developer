---
layout: post
title: BLS Numbers
created: 1359483400
description: This Dataset contains historic data (last 10 years) for the most common economic indicators.
---

```
http://api.dol.gov/V1/statistics/BLS_Numbers
```

<p>This Dataset contains historic data (last 10 years) for the most common economic indicators. More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://bls.gov&amp;exitTitle=BLS&amp;fedpage=yes">http://bls.gov</a></p>


<a href ="http://api.dol.gov/V1/statistics/BLS_Numbers/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=BLS Numbers" class="button radius button_dataset">Explore This Data</a>


## Dataset Tables  
- [averageHourlyEarnings](#averageHourlyEarnings)
- [consumerPriceIndex](#consumerPriceIndex)
- [employmentCostIndex](#employmentCostIndex)
- [exportPriceIndex](#exportPriceIndex)
- [importPriceIndex](#importPriceIndex)
- [payrollEmployment](#payrollEmployment)
- [producerPriceIndex](#producerPriceIndex)
- [productivity](#productivity)
- [unemploymentRate](#unemploymentRate)
- [averageHourlyEarnings12MonthChange](#averageHourlyEarnings12MonthChange)
- [averageHourlyEarnings1MonthChange](#averageHourlyEarnings1MonthChange)
- [averageHourlyEarnings1MonthNetChange](#averageHourlyEarnings1MonthNetChange)
- [consumerPriceIndex12MonthChange](#consumerPriceIndex12MonthChange)
- [consumerPriceIndex1MonthChange](#consumerPriceIndex1MonthChange)
- [exportPriceIndex12MonthChange](#exportPriceIndex12MonthChange)
- [exportPriceIndex1MonthChange](#exportPriceIndex1MonthChange)
- [importPriceIndex12MonthChange](#importPriceIndex12MonthChange)
- [importPriceIndex1MonthChange](#importPriceIndex1MonthChange)
- [payrollEmployment12MonthChange](#payrollEmployment12MonthChange)
- [payrollEmployment12MonthNetChange](#payrollEmployment12MonthNetChange)
- [payrollEmployment1MonthChange](#payrollEmployment1MonthChange)
- [payrollEmployment1MonthNetChange](#payrollEmployment1MonthNetChange)
- [producerPriceIndex12MonthChange](#producerPriceIndex12MonthChange)
- [producerPriceIndex1MonthChange](#producerPriceIndex1MonthChange)
- [unemploymentrate12monthchange](#unemploymentrate12monthchange)
- [unemploymentrate1monthchange](#unemploymentrate1monthchange)



<h3><a href="averageHourlyEarnings">averageHourlyEarnings Table</a></h3>

<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CES0500000003?output_view=net_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CES0500000003?output_view=net_1mth</a></p>

<table>
	<thead>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>year</th>
			<td>Year - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>period</th>
			<td>Period - Months - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>value</th>
			<td>Value</td>
			<td>numeric(8,3)</td>
		</tr>
		<tr>
			<th>type</th>
			<td>Type - Preliminary(p), Revised(r), Final(F)</td>
			<td>char(1)</td>
		</tr>
	</tbody>
</table>
<h3><a id="consumerPriceIndex">consumerPriceIndex Table</a></h3>

<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CUSR0000SA0?output_view=pct_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CUSR0000SA0?output_view=pct_1mth</a></p>

<table>
	<thead>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>year</th>
			<td>Year - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>period</th>
			<td>Period - Months - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>value</th>
			<td>Value</td>
			<td>numeric(8,3)</td>
		</tr>
		<tr>
			<th>type</th>
			<td>Type - Preliminary(p), Revised(r), Final(F)</td>
			<td>char(1)</td>
		</tr>
	</tbody>
</table>
<h3><a id="employmentCostIndex">employmentCostIndex Table</a></h3>

<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CIS1010000000000Q&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CIS1010000000000Q</a></p>

<table>
	<thead>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>year</th>
			<td>Year - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>period</th>
			<td>Period - Quarters - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>value</th>
			<td>Value</td>
			<td>numeric(8,3)</td>
		</tr>
		<tr>
			<th>type</th>
			<td>Type - Preliminary(p), Revised(r), Final(F)</td>
			<td>char(1)</td>
		</tr>
	</tbody>
</table>
<h3><a id="exportPriceIndex">exportPriceIndex Table</a></h3>

<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/EIUIQ?output_view=pct_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/EIUIQ?output_view=pct_1mth</a></p>

<table>
	<thead>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>year</th>
			<td>Year - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>period</th>
			<td>Period - Months - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>value</th>
			<td>Value</td>
			<td>numeric(8,3)</td>
		</tr>
		<tr>
			<th>type</th>
			<td>Type - Preliminary(p), Revised(r), Final(F)</td>
			<td>char(1)</td>
		</tr>
	</tbody>
</table>
<h3><a id="importPriceIndex">importPriceIndex Table</a></h3>

<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/EIUIR?output_view=pct_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/EIUIR?output_view=pct_1mth</a></p>

<table>
	<thead>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>year</th>
			<td>Year - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>period</th>
			<td>Period - Months - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>value</th>
			<td>Value</td>
			<td>numeric(8,3)</td>
		</tr>
		<tr>
			<th>type</th>
			<td>Type - Preliminary(p), Revised(r), Final(F)</td>
			<td>char(1)</td>
		</tr>
	</tbody>
</table>
<h3><a id="payrollEmployment">payrollEmployment Table</a></h3>

<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CES0000000001?output_view=net_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CES0000000001?output_view=net_1mth</a></p>

<table>
	<thead>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>year</th>
			<td>Year - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>period</th>
			<td>Period - Months - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>value</th>
			<td>Value</td>
			<td>numeric(8,0)</td>
		</tr>
		<tr>
			<th>type</th>
			<td>Type - Preliminary(p), Revised(r), Final(F)</td>
			<td>char(1)</td>
		</tr>
	</tbody>
</table>
<h3><a id="producerPriceIndex">producerPriceIndex Table</a></h3>

<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/WPSSOP3000?output_view=pct_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/WPSSOP3000?output_view=pct_1mth</a></p>

<table>
	<thead>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>year</th>
			<td>Year - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>period</th>
			<td>Period - Months - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>value</th>
			<td>Value</td>
			<td>numeric(8,3)</td>
		</tr>
		<tr>
			<th>type</th>
			<td>Type - Preliminary(p), Revised(r), Final(F)</td>
			<td>char(1)</td>
		</tr>
	</tbody>
</table>
<h3><a id="productivity">productivity Table</a></h3>

<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/PRS85006092&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/PRS85006092</a></p>

<table>
	<thead>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>year</th>
			<td>Year - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>period</th>
			<td>Period - (A)Annual and (Q)Quarters - Primary Key</td>
			<td>varchar(5)</td>
		</tr>
		<tr>
			<th>value</th>
			<td>Value</td>
			<td>numeric(8,3)</td>
		</tr>
		<tr>
			<th>type</th>
			<td>Type - Preliminary(p), Revised(r), Final(F)</td>
			<td>char(1)</td>
		</tr>
	</tbody>
</table>
<h3><a id="unemploymentRate">unemploymentRate Table</a></h3>

<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/LNS14000000&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/LNS14000000</a></p>

<table>
	<thead>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>year</th>
			<td>Year - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>period</th>
			<td>Period - Months - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>value</th>
			<td>Value</td>
			<td>numeric(8,3)</td>
		</tr>
		<tr>
			<th>type</th>
			<td>Type - Preliminary(p), Revised(r), Final(F)</td>
			<td>char(1)</td>
		</tr>
	</tbody>
</table>
<h3><a id="averageHourlyEarnings12MonthChange">averageHourlyEarnings12MonthChange Table</a></h3>

<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CES0500000003?output_view=net_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CES0500000003?output_view=net_1mth</a></p>

<table>
	<thead>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>year</th>
			<td>Year - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>period</th>
			<td>Period - Months - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>value</th>
			<td>Value</td>
			<td>numeric(8,3)</td>
		</tr>
		<tr>
			<th>type</th>
			<td>Type - Preliminary(p), Revised(r), Final(F)</td>
			<td>char(1)</td>
		</tr>
	</tbody>
</table>
<h3><a id="averageHourlyEarnings1MonthChange">averageHourlyEarnings1MonthChange Table</a></h3>

<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CES0500000003?output_view=net_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CES0500000003?output_view=net_1mth</a></p>

<table>
	<thead>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>year</th>
			<td>Year - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>period</th>
			<td>Period - Months - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>value</th>
			<td>Value</td>
			<td>numeric(8,3)</td>
		</tr>
		<tr>
			<th>type</th>
			<td>Type - Preliminary(p), Revised(r), Final(F)</td>
			<td>char(1)</td>
		</tr>
	</tbody>
</table>
<h3><a id="averageHourlyEarnings1MonthNetChange">averageHourlyEarnings1MonthNetChange Table</a></h3>

<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CES0500000003?output_view=net_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CES0500000003?output_view=net_1mth</a></p>

<table>
	<thead>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>year</th>
			<td>Year - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>period</th>
			<td>Period - Months - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>value</th>
			<td>Value</td>
			<td>numeric(8,3)</td>
		</tr>
		<tr>
			<th>type</th>
			<td>Type - Preliminary(p), Revised(r), Final(F)</td>
			<td>char(1)</td>
		</tr>
	</tbody>
</table>
<h3><a id="consumerPriceIndex12MonthChange">consumerPriceIndex12MonthChange Table</a></h3>

<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CUSR0000SA0?output_view=pct_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CUSR0000SA0?output_view=pct_1mth</a></p>

<table>
	<thead>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>year</th>
			<td>Year - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>period</th>
			<td>Period - Months - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>value</th>
			<td>Value</td>
			<td>numeric(8,3)</td>
		</tr>
		<tr>
			<th>type</th>
			<td>Type - Preliminary(p), Revised(r), Final(F)</td>
			<td>char(1)</td>
		</tr>
	</tbody>
</table>
<h3><a id="consumerPriceIndex1MonthChange">consumerPriceIndex1MonthChange Table</a></h3>

<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CUSR0000SA0?output_view=pct_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CUSR0000SA0?output_view=pct_1mth</a></p>

<table>
	<thead>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>year</th>
			<td>Year - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>period</th>
			<td>Period - Months - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>value</th>
			<td>Value</td>
			<td>numeric(8,3)</td>
		</tr>
		<tr>
			<th>type</th>
			<td>Type - Preliminary(p), Revised(r), Final(F)</td>
			<td>char(1)</td>
		</tr>
	</tbody>
</table>
<h3><a id="exportPriceIndex12MonthChange">exportPriceIndex12MonthChange Table</a></h3>

<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/EIUIQ?output_view=pct_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/EIUIQ?output_view=pct_1mth</a></p>

<table>
	<thead>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>year</th>
			<td>Year - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>period</th>
			<td>Period - Months - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>value</th>
			<td>Value</td>
			<td>numeric(8,3)</td>
		</tr>
		<tr>
			<th>type</th>
			<td>Type - Preliminary(p), Revised(r), Final(F)</td>
			<td>char(1)</td>
		</tr>
	</tbody>
</table>
<h3><a id="exportPriceIndex1MonthChange">exportPriceIndex1MonthChange Table</a></h3>

<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/EIUIQ?output_view=pct_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/EIUIQ?output_view=pct_1mth</a></p>

<table>
	<thead>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>year</th>
			<td>Year - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>period</th>
			<td>Period - Months - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>value</th>
			<td>Value</td>
			<td>numeric(8,3)</td>
		</tr>
		<tr>
			<th>type</th>
			<td>Type - Preliminary(p), Revised(r), Final(F)</td>
			<td>char(1)</td>
		</tr>
	</tbody>
</table>
<h3><a id="importPriceIndex12MonthChange">importPriceIndex12MonthChange Table</a></h3>

<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/EIUIR?output_view=pct_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/EIUIR?output_view=pct_1mth</a></p>

<table>
	<thead>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>year</th>
			<td>Year - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>period</th>
			<td>Period - Months - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>value</th>
			<td>Value</td>
			<td>numeric(8,3)</td>
		</tr>
		<tr>
			<th>type</th>
			<td>Type - Preliminary(p), Revised(r), Final(F)</td>
			<td>char(1)</td>
		</tr>
	</tbody>
</table>
<h3><a id="importPriceIndex1MonthChange">importPriceIndex1MonthChange Table</a></h3>

<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/EIUIR?output_view=pct_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/EIUIR?output_view=pct_1mth</a></p>

<table>
	<thead>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>year</th>
			<td>Year - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>period</th>
			<td>Period - Months - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>value</th>
			<td>Value</td>
			<td>numeric(8,3)</td>
		</tr>
		<tr>
			<th>type</th>
			<td>Type - Preliminary(p), Revised(r), Final(F)</td>
			<td>char(1)</td>
		</tr>
	</tbody>
</table>
<h3><a id="payrollEmployment12MonthChange">payrollEmployment12MonthChange Table</a></h3>

<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CES0000000001?output_view=net_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CES0000000001?output_view=net_1mth</a></p>

<table>
	<thead>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>year</th>
			<td>Year - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>period</th>
			<td>Period - Months - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>value</th>
			<td>Value</td>
			<td>numeric(8,3)</td>
		</tr>
		<tr>
			<th>type</th>
			<td>Type - Preliminary(p), Revised(r), Final(F)</td>
			<td>char(1)</td>
		</tr>
	</tbody>
</table>
<h3><a id="payrollEmployment12MonthNetChange">payrollEmployment12MonthNetChange Table</a></h3>

<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CES0000000001?output_view=net_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CES0000000001?output_view=net_1mth</a></p>

<table>
	<thead>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>year</th>
			<td>Year - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>period</th>
			<td>Period - Months - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>value</th>
			<td>Value</td>
			<td>numeric(8,3)</td>
		</tr>
		<tr>
			<th>type</th>
			<td>Type - Preliminary(p), Revised(r), Final(F)</td>
			<td>char(1)</td>
		</tr>
	</tbody>
</table>
<h3><a id="payrollEmployment1MonthChange">payrollEmployment1MonthChange Table</a></h3>

<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CES0000000001?output_view=net_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CES0000000001?output_view=net_1mth</a></p>

<table>
	<thead>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>year</th>
			<td>Year - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>period</th>
			<td>Period - Months - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>value</th>
			<td>Value</td>
			<td>numeric(8,3)</td>
		</tr>
		<tr>
			<th>type</th>
			<td>Type - Preliminary(p), Revised(r), Final(F)</td>
			<td>char(1)</td>
		</tr>
	</tbody>
</table>
<h3><a id="payrollEmployment1MonthNetChange">payrollEmployment1MonthNetChange Table</a></h3>

<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/CES0000000001?output_view=net_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/CES0000000001?output_view=net_1mth</a></p>

<table>
	<thead>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>year</th>
			<td>Year - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>period</th>
			<td>Period - Months - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>value</th>
			<td>Value (in thousands)</td>
			<td>numeric(8,3)</td>
		</tr>
		<tr>
			<th>type</th>
			<td>Type - Preliminary(p), Revised(r), Final(F)</td>
			<td>char(1)</td>
		</tr>
	</tbody>
</table>
<h3><a id="producerPriceIndex12MonthChange">producerPriceIndex12MonthChange Table</a></h3>

<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/WPSSOP3000?output_view=pct_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/WPSSOP3000?output_view=pct_1mth</a></p>

<table>
	<thead>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>year</th>
			<td>Year - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>period</th>
			<td>Period - Months - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>value</th>
			<td>Value</td>
			<td>numeric(8,3)</td>
		</tr>
		<tr>
			<th>type</th>
			<td>Type - Preliminary(p), Revised(r), Final(F)</td>
			<td>char(1)</td>
		</tr>
	</tbody>
</table>
<h3><a id="producerPriceIndex1MonthChange">producerPriceIndex1MonthChange Table</a></h3>

<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/WPSSOP3000?output_view=pct_1mth&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/WPSSOP3000?output_view=pct_1mth</a></p>

<table>
	<thead>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>year</th>
			<td>Year - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>period</th>
			<td>Period - Months - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>value</th>
			<td>Value</td>
			<td>numeric(8,3)</td>
		</tr>
		<tr>
			<th>type</th>
			<td>Type - Preliminary(p), Revised(r), Final(F)</td>
			<td>char(1)</td>
		</tr>
	</tbody>
</table>
<h3><a id="unemploymentRate12MonthChange">unemploymentRate12MonthChange Table</a></h3>

<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/LNS14000000&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/LNS14000000</a></p>

<table>
	<thead>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>year</th>
			<td>Year - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>period</th>
			<td>Period - Months - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>value</th>
			<td>Value</td>
			<td>numeric(8,3)</td>
		</tr>
		<tr>
			<th>type</th>
			<td>Type - Preliminary(p), Revised(r), Final(F)</td>
			<td>char(1)</td>
		</tr>
	</tbody>
</table>
<h3><a id="unemploymentrate1monthchange">unemploymentrate1monthchange Table</a></h3>

<p>More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://data.bls.gov/timeseries/LNS14000000&amp;exitTitle=BLS&amp;fedpage=yes">http://data.bls.gov/timeseries/LNS14000000</a></p>

<table>
	<thead>
		<tr>
			<th>Column Name</th>
			<th>Column Description</th>
			<th>Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>year</th>
			<td>Year - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>period</th>
			<td>Period - Months - Primary Key</td>
			<td>int</td>
		</tr>
		<tr>
			<th>value</th>
			<td>Value</td>
			<td>numeric(8,3)</td>
		</tr>
		<tr>
			<th>type</th>
			<td>Type - Preliminary(p), Revised(r), Final(F)</td>
			<td>char(1)</td>
		</tr>
	</tbody>
</table>
