---
layout: post
title: API Metrics (per key)
created: 1373908167
description: Find here a list of DOL API Metric queries.  For these queries,a specially-configured filter method is REQUIRED.
---

```
http://api.dol.gov/V1/ApiMetrics/PerKey
```

<p>Find here a list of DOL API Metric queries.&nbsp; For these queries,a specially-configured $filter method is <strong>REQUIRED</strong>. For example, you would add the following to your URL:</p>

<blockquote>
<p>$filter=TOKEN eq guid'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'</p>
</blockquote>


<a href ="http://api.dol.gov/V1/ApiMetrics/PerKey/$metadata" class="button radius button_dataset">Browse Metadata</a>


## Dataset Tables

- [NumberOfRequestsPerKeys](#NumberOfRequestsPerKeys)
- [NumberOfRequestsPerDayByKeys](#NumberOfRequestsPerDayByKeys)
- [NumberOfRequestsPerMonthByKeys](#NumberOfRequestsPerMonthByKeys)
- [NumberOfRequestsPerYearByKeys](#NumberOfRequestsPerYearByKeys)
- [NumberOfRequestsPerYearByWeeks](#NumberOfRequestsPerYearByWeeks)
- [TopDatasetsPerKeys](#TopDatasetsPerKeys)
- [TopDatasetsPerYearPerKeys](#TopDatasetsPerYearPerKeys)
- [TopDatasetsPerMonthPerKeys](#TopDatasetsPerMonthPerKeys)
- [TopDatasetsPerWeekPerKeys](#TopDatasetsPerWeekPerKeys)
- [TopDatasetsPerDayPerKeys](#TopDatasetsPerDayPerKeys)
- [TopDataTablesPerKeys](#TopDataTablesPerKeys)
- [TopDataTablesPerKeyDays](#TopDataTablesPerKeyDays)
- [TopDataTablesPerKeyMonths](#TopDataTablesPerKeyMonths)
- [TopDataTablesPerKeyWeeks](#TopDataTablesPerKeyWeeks)
- [TopDataTablesPerKeyYears](#TopDataTablesPerKeyYears)

<h3><a id="NumberOfRequestsPerKeys">NumberOfRequestsPerKeys</a></h3>

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
			<th>TOKEN</th>
			<td>API Key</td>
			<td>GUID</td>
		</tr>
		<tr>
			<th>RequestCount</th>
			<td>Number of Requests</td>
			<td>Integer</td>
		</tr>
	</tbody>
</table>
<h3><a id="NumberOfRequestsPerDayByKeys">NumberOfRequestsPerDayByKeys</a></h3>

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
			<th>TOKEN</th>
			<td>API Key</td>
			<td>GUID</td>
		</tr>
		<tr>
			<th>RequestDate</th>
			<td>Date</td>
			<td>DateTime</td>
		</tr>
		<tr>
			<th>RequestCount</th>
			<td>Number of Requests</td>
			<td>Integer</td>
		</tr>
	</tbody>
</table>
<h3><a id="NumberOfRequestsPerMonthByKeys">NumberOfRequestsPerMonthByKeys</a></h3>

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
			<th>TOKEN</th>
			<td>API Key</td>
			<td>GUID</td>
		</tr>
		<tr>
			<th>RequestDate</th>
			<td>Date</td>
			<td>DateTime</td>
		</tr>
		<tr>
			<th>RequestCount</th>
			<td>Number of Requests</td>
			<td>Integer</td>
		</tr>
	</tbody>
</table>
<h3><a id="NumberOfRequestsPerYearByKeys">NumberOfRequestsPerYearByKeys</a></h3>

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
			<th>TOKEN</th>
			<td>API Key</td>
			<td>GUID</td>
		</tr>
		<tr>
			<th>RequestYear</th>
			<td>Year</td>
			<td>int</td>
		</tr>
		<tr>
			<th>RequestCount</th>
			<td>Number of Requests</td>
			<td>Integer</td>
		</tr>
	</tbody>
</table>
<h3><a id="NumberOfRequestsPerYearByWeeks">NumberOfRequestsPerYearByWeeks</a></h3>

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
			<th>TOKEN</th>
			<td>API Key</td>
			<td>GUID</td>
		</tr>
		<tr>
			<th>RequestWeek</th>
			<td>Week in the year</td>
			<td>int</td>
		</tr>
		<tr>
			<th>RequestYear</th>
			<td>Year</td>
			<td>int</td>
		</tr>
		<tr>
			<th>RequestCount</th>
			<td>Number of Requests</td>
			<td>Integer</td>
		</tr>
	</tbody>
</table>
<h3><a id="TopDatasetsPerKeys">TopDatasetsPerKeys</a></h3>

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
			<th>TOKEN</th>
			<td>API Key</td>
			<td>GUID</td>
		</tr>
		<tr>
			<th>ShortCall</th>
			<td>Dataset path</td>
			<td>string</td>
		</tr>
		<tr>
			<th>Calls</th>
			<td>Number of requests</td>
			<td>int</td>
		</tr>
	</tbody>
</table>
<h3><a id="TopDatasetsPerYearPerKeys">TopDatasetsPerYearPerKeys</a></h3>

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
			<th>TOKEN</th>
			<td>API Key</td>
			<td>GUID</td>
		</tr>
		<tr>
			<th>ShortCall</th>
			<td>Dataset path</td>
			<td>string</td>
		</tr>
		<tr>
			<th>Calls</th>
			<td>Number of requests</td>
			<td>int</td>
		</tr>
	</tbody>
</table>
<h3><a id="TopDatasetsPerMonthPerKeys">TopDatasetsPerMonthPerKeys</a></h3>

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
			<th>TOKEN</th>
			<td>API Key</td>
			<td>GUID</td>
		</tr>
		<tr>
			<th>ShortCall</th>
			<td>Dataset path</td>
			<td>string</td>
		</tr>
		<tr>
			<th>Calls</th>
			<td>Number of requests</td>
			<td>int</td>
		</tr>
	</tbody>
</table>
<h3><a id="TopDatasetsPerWeekPerKeys">TopDatasetsPerWeekPerKeys</a></h3>

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
			<th>TOKEN</th>
			<td>API Key</td>
			<td>GUID</td>
		</tr>
		<tr>
			<th>ShortCall</th>
			<td>Dataset path</td>
			<td>string</td>
		</tr>
		<tr>
			<th>Calls</th>
			<td>Number of requests</td>
			<td>int</td>
		</tr>
	</tbody>
</table>
<h3><a id="TopDatasetsPerDayPerKeys">TopDatasetsPerDayPerKeys</a></h3>

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
			<th>TOKEN</th>
			<td>API Key</td>
			<td>GUID</td>
		</tr>
		<tr>
			<th>ShortCall</th>
			<td>Dataset path</td>
			<td>string</td>
		</tr>
		<tr>
			<th>Calls</th>
			<td>Number of requests</td>
			<td>int</td>
		</tr>
	</tbody>
</table>
<h3><a id="TopDataTablesPerKeys">TopDataTablesPerKeys</a></h3>

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
			<th>TOKEN</th>
			<td>API Key</td>
			<td>GUID</td>
		</tr>
		<tr>
			<th>ShortCall</th>
			<td>Data table path</td>
			<td>string</td>
		</tr>
		<tr>
			<th>Calls</th>
			<td>Number of requests</td>
			<td>int</td>
		</tr>
	</tbody>
</table>
<h3><a id="TopDataTablesPerKeyDays">TopDataTablesPerKeyDays</a></h3>

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
			<th>TOKEN</th>
			<td>API Key</td>
			<td>GUID</td>
		</tr>
		<tr>
			<th>ShortCall</th>
			<td>Data table path</td>
			<td>string</td>
		</tr>
		<tr>
			<th>Calls</th>
			<td>Number of requests</td>
			<td>int</td>
		</tr>
	</tbody>
</table>
<h3><a id="TopDataTablesPerKeyMonths">TopDataTablesPerKeyMonths</a></h3>

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
			<th>TOKEN</th>
			<td>API Key</td>
			<td>GUID</td>
		</tr>
		<tr>
			<th>ShortCall</th>
			<td>Data table path</td>
			<td>string</td>
		</tr>
		<tr>
			<th>Calls</th>
			<td>Number of requests</td>
			<td>int</td>
		</tr>
	</tbody>
</table>
<h3><a id="TopDataTablesPerKeyWeeks">TopDataTablesPerKeyWeeks</a></h3>

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
			<th>TOKEN</th>
			<td>API Key</td>
			<td>GUID</td>
		</tr>
		<tr>
			<th>ShortCall</th>
			<td>Data table path</td>
			<td>string</td>
		</tr>
		<tr>
			<th>Calls</th>
			<td>Number of requests</td>
			<td>int</td>
		</tr>
	</tbody>
</table>
<h3><a id="TopDataTablesPerKeyYears">TopDataTablesPerKeyYears</a></h3>

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
			<th>TOKEN</th>
			<td>API Key</td>
			<td>GUID</td>
		</tr>
		<tr>
			<th>ShortCall</th>
			<td>Data table path</td>
			<td>string</td>
		</tr>
		<tr>
			<th>Calls</th>
			<td>Number of requests</td>
			<td>int</td>
		</tr>
	</tbody>
</table>
