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

<div class="dsktp_tbl">
	<h3 id="NumberOfRequestsPerKeys">NumberOfRequestsPerKeys</h3>
	<table summary="Number of Requests Per Keys - API Metrics (per key)">
		<caption>Number of Requests Per Keys</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">TOKEN</th>
				<td>API Key</td>
				<td>GUID</td>
			</tr>
			<tr>
				<th scope="row">RequestCount</th>
				<td>Number of Requests</td>
				<td>Integer</td>
			</tr>
		</tbody>
	</table>

	<h3 id="NumberOfRequestsPerDayByKeys">NumberOfRequestsPerDayByKeys</h3>
	<table summary="Number of Requests Per Day By Keys - API Metrics (per key)">
		<caption>Number of Requests Per Day By Keys</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">TOKEN</th>
				<td>API Key</td>
				<td>GUID</td>
			</tr>
			<tr>
				<th scope="row">RequestDate</th>
				<td>Date</td>
				<td>DateTime</td>
			</tr>
			<tr>
				<th scope="row">RequestCount</th>
				<td>Number of Requests</td>
				<td>Integer</td>
			</tr>
		</tbody>
	</table>

	<h3 id="NumberOfRequestsPerMonthByKeys">NumberOfRequestsPerMonthByKeys</h3>
	<table summary="Number of Requests Per Month By Keys - API Metrics (per key)">
		<caption>Number of Requests Per Month By Keys</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">TOKEN</th>
				<td>API Key</td>
				<td>GUID</td>
			</tr>
			<tr>
				<th scope="row">RequestDate</th>
				<td>Date</td>
				<td>DateTime</td>
			</tr>
			<tr>
				<th scope="row">RequestCount</th>
				<td>Number of Requests</td>
				<td>Integer</td>
			</tr>
		</tbody>
	</table>

	<h3 id="NumberOfRequestsPerYearByKeys">NumberOfRequestsPerYearByKeys</h3>
	<table summary="Number of Requests Per Year By Keys - API Metrics (per key)">
		<caption>Number of Requests Per Year By Keys</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">TOKEN</th>
				<td>API Key</td>
				<td>GUID</td>
			</tr>
			<tr>
				<th scope="row">RequestYear</th>
				<td>Year</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">RequestCount</th>
				<td>Number of Requests</td>
				<td>Integer</td>
			</tr>
		</tbody>
	</table>

	<h3 id="NumberOfRequestsPerYearByWeeks">NumberOfRequestsPerYearByWeeks</h3>
	<table summary="Number of Requests Per Year By Weeks - API Metrics (per key)">
		<caption>Number of Requests Per Year By Weeks</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">TOKEN</th>
				<td>API Key</td>
				<td>GUID</td>
			</tr>
			<tr>
				<th scope="row">RequestWeek</th>
				<td>Week in the year</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">RequestYear</th>
				<td>Year</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">RequestCount</th>
				<td>Number of Requests</td>
				<td>Integer</td>
			</tr>
		</tbody>
	</table>

	<h3 id="TopDatasetsPerKeys">TopDatasetsPerKeys</h3>
	<table summary="Top Datasets Per Keys - API Metrics (per key)">
		<caption>Top Datasets Per Keys</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">TOKEN</th>
				<td>API Key</td>
				<td>GUID</td>
			</tr>
			<tr>
				<th scope="row">ShortCall</th>
				<td>Dataset path</td>
				<td>string</td>
			</tr>
			<tr>
				<th scope="row">Calls</th>
				<td>Number of requests</td>
				<td>int</td>
			</tr>
		</tbody>
	</table>

	<h3 id="TopDatasetsPerYearPerKeys">TopDatasetsPerYearPerKeys</h3>
	<table summary="Top Datasets Per Year Per Keys - API Metrics (per key)">
		<caption>Top Datasets Per Year Per Keys</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">TOKEN</th>
				<td>API Key</td>
				<td>GUID</td>
			</tr>
			<tr>
				<th scope="row">ShortCall</th>
				<td>Dataset path</td>
				<td>string</td>
			</tr>
			<tr>
				<th scope="row">Calls</th>
				<td>Number of requests</td>
				<td>int</td>
			</tr>
		</tbody>
	</table>

	<h3 id="TopDatasetsPerMonthPerKeys">TopDatasetsPerMonthPerKeys</h3>
	<table summary="Top Datasets Per Month Per Keys - API Metrics (per key)">
		<caption>Top Datasets Per Month Per Keys</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">TOKEN</th>
				<td>API Key</td>
				<td>GUID</td>
			</tr>
			<tr>
				<th scope="row">ShortCall</th>
				<td>Dataset path</td>
				<td>string</td>
			</tr>
			<tr>
				<th scope="row">Calls</th>
				<td>Number of requests</td>
				<td>int</td>
			</tr>
		</tbody>
	</table>

	<h3 id="TopDatasetsPerWeekPerKeys">TopDatasetsPerWeekPerKeys</h3>
	<table summary="Top Datasets Per Week Per Keys - API Metrics (per key)">
		<caption>Top Datasets Per Week Per Keys</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">TOKEN</th>
				<td>API Key</td>
				<td>GUID</td>
			</tr>
			<tr>
				<th scope="row">ShortCall</th>
				<td>Dataset path</td>
				<td>string</td>
			</tr>
			<tr>
				<th scope="row">Calls</th>
				<td>Number of requests</td>
				<td>int</td>
			</tr>
		</tbody>
	</table>

	<h3 id="TopDatasetsPerDayPerKeys">TopDatasetsPerDayPerKeys</h3>
	<table summary="Top Datasets Per Day Per Keys - API Metrics (per key)">
		<caption>Top Datasets Per Day Per Keys</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">TOKEN</th>
				<td>API Key</td>
				<td>GUID</td>
			</tr>
			<tr>
				<th scope="row">ShortCall</th>
				<td>Dataset path</td>
				<td>string</td>
			</tr>
			<tr>
				<th scope="row">Calls</th>
				<td>Number of requests</td>
				<td>int</td>
			</tr>
		</tbody>
	</table>

	<h3 id="TopDataTablesPerKeys">TopDataTablesPerKeys</h3>
	<table summary="Top Data Tables Per Keys - API Metrics (per key)">
		<caption>Top Data Tables Per Keys</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">TOKEN</th>
				<td>API Key</td>
				<td>GUID</td>
			</tr>
			<tr>
				<th scope="row">ShortCall</th>
				<td>Data table path</td>
				<td>string</td>
			</tr>
			<tr>
				<th scope="row">Calls</th>
				<td>Number of requests</td>
				<td>int</td>
			</tr>
		</tbody>
	</table>

	<h3 id="TopDataTablesPerKeyDays">TopDataTablesPerKeyDays</h3>
	<table summary="Top Data Tables Per Key Days - API Metrics (per key)">
		<caption>Top Data Tables Per Key Days</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">TOKEN</th>
				<td>API Key</td>
				<td>GUID</td>
			</tr>
			<tr>
				<th scope="row">ShortCall</th>
				<td>Data table path</td>
				<td>string</td>
			</tr>
			<tr>
				<th scope="row">Calls</th>
				<td>Number of requests</td>
				<td>int</td>
			</tr>
		</tbody>
	</table>

	<h3 id="TopDataTablesPerKeyMonths">TopDataTablesPerKeyMonths</h3>
	<table summary="Top Data Tables Per Key Months - API Metrics (per key)">
		<caption>Top Data Tables Per Key Months</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">TOKEN</th>
				<td>API Key</td>
				<td>GUID</td>
			</tr>
			<tr>
				<th scope="row">ShortCall</th>
				<td>Data table path</td>
				<td>string</td>
			</tr>
			<tr>
				<th scope="row">Calls</th>
				<td>Number of requests</td>
				<td>int</td>
			</tr>
		</tbody>
	</table>

	<h3 id="TopDataTablesPerKeyWeeks">TopDataTablesPerKeyWeeks</h3>
	<table summary="Top Data Tables Per Key Weeks - API Metrics (per key)">
		<caption>Top Data Tables Per Key Weeks</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">TOKEN</th>
				<td>API Key</td>
				<td>GUID</td>
			</tr>
			<tr>
				<th scope="row">ShortCall</th>
				<td>Data table path</td>
				<td>string</td>
			</tr>
			<tr>
				<th scope="row">Calls</th>
				<td>Number of requests</td>
				<td>int</td>
			</tr>
		</tbody>
	</table>

	<h3 id="TopDataTablesPerKeyYears">TopDataTablesPerKeyYears</h3>
	<table summary="Top Data Tables Per Key Years - API Metrics (per key)">
		<caption>Top Data Tables Per Key Years</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">TOKEN</th>
				<td>API Key</td>
				<td>GUID</td>
			</tr>
			<tr>
				<th scope="row">ShortCall</th>
				<td>Data table path</td>
				<td>string</td>
			</tr>
			<tr>
				<th scope="row">Calls</th>
				<td>Number of requests</td>
				<td>int</td>
			</tr>
		</tbody>
	</table>
</div>

<div class="mbl_tbl">
	<h3 id="NumberOfRequestsPerKeys">NumberOfRequestsPerKeys</h3>
	<h4>Number of Requests Per Keys</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: TOKEN</p>
		<p><span class="mbl-strng">Column Description:</span> API Key</p>
		<p><span class="mbl-strng">Data Type:</span> GUID</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: RequestCount</p>
		<p><span class="mbl-strng">Column Description:</span> Number of Requests</p>
		<p><span class="mbl-strng">Data Type:</span> Integer</p>		
	</div>

	<hr />
	<h3 id="NumberOfRequestsPerDayByKeys">NumberOfRequestsPerDayByKeys</h3>
	<h4>Number of Requests Per Day By Keys</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: TOKEN</p>
		<p><span class="mbl-strng">Column Description:</span> API Key</p>
		<p><span class="mbl-strng">Data Type:</span> GUID</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: RequestDate</p>
		<p><span class="mbl-strng">Column Description:</span> Date</p>
		<p><span class="mbl-strng">Data Type:</span> DateTime</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: RequestCount</p>
		<p><span class="mbl-strng">Column Description:</span> Number of Requests 	</p>
		<p><span class="mbl-strng">Data Type:</span> Integer</p>		
	</div>

	<hr />
	<h3 id="NumberOfRequestsPerMonthByKeys">NumberOfRequestsPerMonthByKeys</h3>
	<h4>Number of Requests Per Month By Keys</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: TOKEN</p>
		<p><span class="mbl-strng">Column Description:</span> API Key</p>
		<p><span class="mbl-strng">Data Type:</span> GUID</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: RequestDate</p>
		<p><span class="mbl-strng">Column Description:</span> Date</p>
		<p><span class="mbl-strng">Data Type:</span> DateTime</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: RequestCount</p>
		<p><span class="mbl-strng">Column Description:</span> Number of Requests 	</p>
		<p><span class="mbl-strng">Data Type:</span> Integer</p>		
	</div>

	<hr />
	<h3 id="NumberOfRequestsPerYearByKeys">NumberOfRequestsPerYearByKeys</h3>
	<h4>Number of Requests Per Year By Keys</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: TOKEN</p>
		<p><span class="mbl-strng">Column Description:</span> API Key</p>
		<p><span class="mbl-strng">Data Type:</span> GUID</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: RequestYear</p>
		<p><span class="mbl-strng">Column Description:</span> Year</p>
		<p><span class="mbl-strng">Data Type:</span> DateTime</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: RequestCount</p>
		<p><span class="mbl-strng">Column Description:</span> Number of Requests 	</p>
		<p><span class="mbl-strng">Data Type:</span> Integer</p>		
	</div>

	<hr />
	<h3 id="NumberOfRequestsPerYearByWeeks">NumberOfRequestsPerYearByWeeks</h3>
	<h4>Number of Requests Per Year By Weeks </h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: TOKEN</p>
		<p><span class="mbl-strng">Column Description:</span> API Key</p>
		<p><span class="mbl-strng">Data Type:</span> GUID</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: RequestWeek</p>
		<p><span class="mbl-strng">Column Description:</span> Week in the year</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: RequestYear</p>
		<p><span class="mbl-strng">Column Description:</span> Year</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: RequestCount</p>
		<p><span class="mbl-strng">Column Description:</span> Number of Requests</p>
		<p><span class="mbl-strng">Data Type:</span> Integer</p>		
	</div>

	<hr />
	<h3 id="TopDatasetsPerKeys">TopDatasetsPerKeys</h3>
	<h4>Top Datasets Per Keys</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: TOKEN</p>
		<p><span class="mbl-strng">Column Description:</span> API Key</p>
		<p><span class="mbl-strng">Data Type:</span> GUID</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: ShortCall</p>
		<p><span class="mbl-strng">Column Description:</span> Dataset path</p>
		<p><span class="mbl-strng">Data Type:</span> string</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: Calls</p>
		<p><span class="mbl-strng">Column Description:</span> Number of requests</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>

	<hr />
	<h3 id="TopDatasetsPerYearPerKeys">TopDatasetsPerYearPerKeys</h3>
	<h4>Top Datasets Per Year Per Keys</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: TOKEN</p>
		<p><span class="mbl-strng">Column Description:</span> API Key</p>
		<p><span class="mbl-strng">Data Type:</span> GUID</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: ShortCall</p>
		<p><span class="mbl-strng">Column Description:</span> Dataset path</p>
		<p><span class="mbl-strng">Data Type:</span> string</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: Calls</p>
		<p><span class="mbl-strng">Column Description:</span> Number of requests</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>

	<hr />
	<h3 id="TopDatasetsPerMonthPerKeys">TopDatasetsPerMonthPerKeys</h3>
	<h4>Top Datasets Per Month Per Keys</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: TOKEN</p>
		<p><span class="mbl-strng">Column Description:</span> API Key</p>
		<p><span class="mbl-strng">Data Type:</span> GUID</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: ShortCall</p>
		<p><span class="mbl-strng">Column Description:</span> Dataset path</p>
		<p><span class="mbl-strng">Data Type:</span> string</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: Calls</p>
		<p><span class="mbl-strng">Column Description:</span> Number of requests</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>

	<hr />
	<h3 id="TopDatasetsPerWeekPerKeys">TopDatasetsPerWeekPerKeys</h3>
	<h4>Top Datasets Per Week Per Keys</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: TOKEN</p>
		<p><span class="mbl-strng">Column Description:</span> API Key</p>
		<p><span class="mbl-strng">Data Type:</span> GUID</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: ShortCall</p>
		<p><span class="mbl-strng">Column Description:</span> Dataset path</p>
		<p><span class="mbl-strng">Data Type:</span> string</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: Calls</p>
		<p><span class="mbl-strng">Column Description:</span> Number of requests</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>

	<hr />
	<h3 id="TopDatasetsPerDayPerKeys">TopDatasetsPerDayPerKeys</h3>
	<h4>Top Datasets Per Day Per Keys</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: TOKEN</p>
		<p><span class="mbl-strng">Column Description:</span> API Key</p>
		<p><span class="mbl-strng">Data Type:</span> GUID</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: ShortCall</p>
		<p><span class="mbl-strng">Column Description:</span> Dataset path</p>
		<p><span class="mbl-strng">Data Type:</span> string</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: Calls</p>
		<p><span class="mbl-strng">Column Description:</span> Number of requests</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>

	<hr />
	<h3 id="TopDataTablesPerKeys">TopDataTablesPerKeys</h3>
	<h4>Top Data Tables Per Keys</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: TOKEN</p>
		<p><span class="mbl-strng">Column Description:</span> API Key</p>
		<p><span class="mbl-strng">Data Type:</span> GUID</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: ShortCall</p>
		<p><span class="mbl-strng">Column Description:</span> Dataset path</p>
		<p><span class="mbl-strng">Data Type:</span> string</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: Calls</p>
		<p><span class="mbl-strng">Column Description:</span> Number of requests</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>

	<hr />
	<h3 id="TopDataTablesPerKeyDays">TopDataTablesPerKeyDays</h3>
	<h4>Top Data Tables Per Key Days</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: TOKEN</p>
		<p><span class="mbl-strng">Column Description:</span> API Key</p>
		<p><span class="mbl-strng">Data Type:</span> GUID</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: ShortCall</p>
		<p><span class="mbl-strng">Column Description:</span> Dataset path</p>
		<p><span class="mbl-strng">Data Type:</span> string</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: Calls</p>
		<p><span class="mbl-strng">Column Description:</span> Number of requests</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>

	<hr />
	<h3 id="TopDataTablesPerKeyMonths">TopDataTablesPerKeyMonths</h3>
	<h4>Top Data Tables Per Key Months</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: TOKEN</p>
		<p><span class="mbl-strng">Column Description:</span> API Key</p>
		<p><span class="mbl-strng">Data Type:</span> GUID</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: ShortCall</p>
		<p><span class="mbl-strng">Column Description:</span> Dataset path</p>
		<p><span class="mbl-strng">Data Type:</span> string</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: Calls</p>
		<p><span class="mbl-strng">Column Description:</span> Number of requests</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>

	<hr />
	<h3 id="TopDataTablesPerKeyWeeks">TopDataTablesPerKeyWeeks</h3>
	<h4>Top Data Tables Per Key Weeks</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: TOKEN</p>
		<p><span class="mbl-strng">Column Description:</span> API Key</p>
		<p><span class="mbl-strng">Data Type:</span> GUID</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: ShortCall</p>
		<p><span class="mbl-strng">Column Description:</span> Dataset path</p>
		<p><span class="mbl-strng">Data Type:</span> string</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: Calls</p>
		<p><span class="mbl-strng">Column Description:</span> Number of requests</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>

	<hr />
	<h3 id="TopDataTablesPerKeyYears">TopDataTablesPerKeyYears</h3>
	<h4>Top Data Tables Per Key Years</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: TOKEN</p>
		<p><span class="mbl-strng">Column Description:</span> API Key</p>
		<p><span class="mbl-strng">Data Type:</span> GUID</p>		
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: ShortCall</p>
		<p><span class="mbl-strng">Column Description:</span> Dataset path</p>
		<p><span class="mbl-strng">Data Type:</span> string</p>		
	</div>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: Calls</p>
		<p><span class="mbl-strng">Column Description:</span> Number of requests</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>		
	</div>
</div>
