---
layout: post
title: BLS Numbers Dataset
created: 1359483400
---

```
http://api.dol.gov/V1/statistics/BLS_Numbers
```

<p>This Dataset contains historic data (last 10 years) for the most common economic indicators. More information and details about the data provided can be found at <a href="http://www.dol.gov/cgi-bin/leave-dol.asp?exiturl=http://bls.gov&amp;exitTitle=BLS&amp;fedpage=yes">http://bls.gov</a></p>


### Dataset Metadata  
http://api.dol.gov/V1/statistics/BLS_Numbers/$metadata

[Sample the BLS Numbers Dataset](https://devtools.dol.gov/APISampler/Home/Index1?datasetName=BLS Numbers)  

### Dataset Tables:  
<p>&nbsp;<br />
&nbsp;<br />
&nbsp;<br />
&nbsp;<br />
&nbsp;<br />
&nbsp;<br>&nbsp;<br>&nbsp;<br>&nbsp;</p>

<h3>averageHourlyEarnings Table</h3>

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
<h3>consumerPriceIndex Table</h3>

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
<h3>employmentCostIndex Table</h3>

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
<h3>exportPriceIndex Table</h3>

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
<h3>importPriceIndex Table</h3>

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
<h3>payrollEmployment Table</h3>

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
<h3>producerPriceIndex Table</h3>

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
<h3>productivity Table</h3>

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
<h3>unemploymentRate Table</h3>

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
<h3>averageHourlyEarnings12MonthChange Table</h3>

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
<h3>averageHourlyEarnings1MonthChange Table</h3>

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
<h3>averageHourlyEarnings1MonthNetChange Table</h3>

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
<h3>consumerPriceIndex12MonthChange Table</h3>

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
<h3>consumerPriceIndex1MonthChange Table</h3>

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
<h3>exportPriceIndex12MonthChange Table</h3>

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
<h3>exportPriceIndex1MonthChange Table</h3>

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
<h3>importPriceIndex12MonthChange Table</h3>

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
<h3>importPriceIndex1MonthChange Table</h3>

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
<h3>payrollEmployment12MonthChange Table</h3>

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
<h3>payrollEmployment12MonthChange Table</h3>

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
<h3>payrollEmployment1MonthChange Table</h3>

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
<h3>payrollEmployment1MonthNetChange Table</h3>

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
<h3>producerPriceIndex12MonthChange Table</h3>

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
<h3>producerPriceIndex1MonthChange Table</h3>

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
<h3>unemploymentRate12MonthChange Table</h3>

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
<h3>unemploymentrate1monthchange</h3>

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
