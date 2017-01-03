---
layout: post
title: API Metrics (per key)
created: 1373908167
description: Find here a list of DOL API Metric queries.  For these queries,a specially-configured filter method is REQUIRED.
---

<div class="force_wrap apiurl">
<p>http://api.dol.gov/V1/ApiMetrics/PerKey</p>
</div>

<p>Find here a list of DOL API Metric queries.&nbsp; For these queries,a specially-configured $filter method is <strong>REQUIRED</strong>. For example, you would add the following to your URL:</p>

<blockquote>
<p>$filter=TOKEN eq guid'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'</p>
</blockquote>

<a href ="http://api.dol.gov/V1/ApiMetrics/PerKey/$metadata" class="button radius button_dataset">Browse Metadata</a>

## Dataset Tables

<div>
	<ul>
		<li><a href="#NumberOfRequestsPerKeys">NumberOfRequestsPerKeys</a></li>
		<li><a href="#NumberOfRequestsPerDayByKeys">NumberOfRequestsPerDayByKeys</a></li>
		<li><a href="#NumberOfRequestsPerMonthByKeys">NumberOfRequestsPerMonthByKeys</a></li>
		<li><a href="#NumberOfRequestsPerYearByKeys">NumberOfRequestsPerYearByKeys</a></li>
		<li><a href="#NumberOfRequestsPerYearByWeeks">NumberOfRequestsPerYearByWeeks</a></li>
		<li><a href="#TopDatasetsPerKeys">TopDatasetsPerKeys</a></li>
		<li><a href="#TopDatasetsPerYearPerKeys">TopDatasetsPerYearPerKeys</a></li>
		<li><a href="#TopDatasetsPerMonthPerKeys">TopDatasetsPerMonthPerKeys</a></li>
		<li><a href="#TopDatasetsPerWeekPerKeys">TopDatasetsPerWeekPerKeys</a></li>
		<li><a href="#TopDatasetsPerDayPerKeys">TopDatasetsPerDayPerKeys</a></li>
		<li><a href="#TopDataTablesPerKeys">TopDataTablesPerKeys</a></li>
		<li><a href="#TopDataTablesPerKeyDays">TopDataTablesPerKeyDays</a></li>
		<li><a href="#TopDataTablesPerKeyMonths">TopDataTablesPerKeyMonths</a></li>
		<li><a href="#TopDataTablesPerKeyWeeks">TopDataTablesPerKeyWeeks</a></li>
		<li><a href="#TopDataTablesPerKeyYears">TopDataTablesPerKeyYears</a></li>
	</ul>
</div>
<div>
	<h3 id="NumberOfRequestsPerKeys" tabindex="-1">NumberOfRequestsPerKeys</h3>
	<table class="accessible responsive" summary="Number of Requests Per Keys - API Metrics (per key)">
		<caption>Number of Requests Per Keys</caption>
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
					TOKEN
				</th>
				<td>
					<span class="small">Data Type</span>
					GUID
				</td>
				<td>
					<span class="small">Column Description</span>
					API Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					RequestCount
				</th>
				<td>
					<span class="small">Data Type</span>
					Integer
				</td>
				<td>
					<span class="small">Column Description</span>
					Number of Requests
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="NumberOfRequestsPerDayByKeys" tabindex="-1">NumberOfRequestsPerDayByKeys</h3>
	<table class="accessible responsive" summary="Number of Requests Per Day By Keys - API Metrics (per key)">
		<caption>Number of Requests Per Day By Keys</caption>
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
					TOKEN
				</th>
				<td>
					<span class="small">Data Type</span>
					GUID
				</td>
				<td>
					<span class="small">Column Description</span>
					API Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					RequestDate
				</th>
				<td>
					<span class="small">Data Type</span>
					DateTime
				</td>
				<td>
					<span class="small">Column Description</span>
					Date
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					RequestCount
				</th>
				<td>
					<span class="small">Data Type</span>
					Integer
				</td>
				<td>
					<span class="small">Column Description</span>
					Number of Requests
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="NumberOfRequestsPerMonthByKeys" tabindex="-1">NumberOfRequestsPerMonthByKeys</h3>
	<table class="accessible responsive" summary="Number of Requests Per Month By Keys - API Metrics (per key)">
		<caption>Number of Requests Per Month By Keys</caption>
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
					TOKEN
				</th>
				<td>
					<span class="small">Data Type</span>
					GUID
				</td>
				<td>
					<span class="small">Column Description</span>
					API Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					RequestDate
				</th>
				<td>
					<span class="small">Data Type</span>
					DateTime
				</td>
				<td>
					<span class="small">Column Description</span>
					Date
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					RequestCount
				</th>
				<td>
					<span class="small">Data Type</span>
					Integer
				</td>
				<td>
					<span class="small">Column Description</span>
					Number of Requests
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="NumberOfRequestsPerYearByKeys" tabindex="-1">NumberOfRequestsPerYearByKeys</h3>
	<table class="accessible responsive" summary="Number of Requests Per Year By Keys - API Metrics (per key)">
		<caption>Number of Requests Per Year By Keys</caption>
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
					TOKEN
				</th>
				<td>
					<span class="small">Data Type</span>
					GUID
				</td>
				<td>
					<span class="small">Column Description</span>
					API Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					RequestYear
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Year
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					RequestCount
				</th>
				<td>
					<span class="small">Data Type</span>
					Integer
				</td>
				<td>
					<span class="small">Column Description</span>
					Number of Requests
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="NumberOfRequestsPerYearByWeeks" tabindex="-1">NumberOfRequestsPerYearByWeeks</h3>
	<table class="accessible responsive" summary="Number of Requests Per Year By Weeks - API Metrics (per key)">
		<caption>Number of Requests Per Year By Weeks</caption>
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
					TOKEN
				</th>
				<td>
					<span class="small">Data Type</span>
					GUID
				</td>
				<td>
					<span class="small">Column Description</span>
					API Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					RequestWeek
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Week in the year
				</td>
			</tr>
			<tr>
				<th scope="row">
					
					RequestYear
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Year
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					RequestCount
				</th>
				<td>
					<span class="small">Data Type</span>
					Integer
				</td>
				<td>
					<span class="small">Column Description</span>
					Number of Requests
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="TopDatasetsPerKeys" tabindex="-1">TopDatasetsPerKeys</h3>
	<table class="accessible responsive" summary="Top Datasets Per Keys - API Metrics (per key)">
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
				<th scope="row">
					<span class="small">Column Name</span>
					TOKEN
				</th>
				<td>
					<span class="small">Data Type</span>
					API Key
				</td>
				<td>
					<span class="small">Column Description</span>
					GUID
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					ShortCall
				</th>
				<td>
					<span class="small">Data Type</span>
					string
				</td>
				<td>
					<span class="small">Column Description</span>
					Dataset path
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					Calls
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Number of requests
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="TopDatasetsPerYearPerKeys" tabindex="-1">TopDatasetsPerYearPerKeys</h3>
	<table class="accessible responsive" summary="Top Datasets Per Year Per Keys - API Metrics (per key)">
		<caption>Top Datasets Per Year Per Keys</caption>
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
					TOKEN
				</th>
				<td>
					<span class="small">Data Type</span>
					GUID
				</td>
				<td>
					<span class="small">Column Description</span>
					API Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					ShortCall
				</th>
				<td>
					<span class="small">Data Type</span>
					string
				</td>
				<td>
					<span class="small">Column Description</span>
					Dataset path
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					Calls
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Number of requests
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="TopDatasetsPerMonthPerKeys" tabindex="-1">TopDatasetsPerMonthPerKeys</h3>
	<table class="accessible responsive" summary="Top Datasets Per Month Per Keys - API Metrics (per key)">
		<caption>Top Datasets Per Month Per Keys</caption>
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
					TOKEN
				</th>
				<td>
					<span class="small">Data Type</span>
					GUID
				</td>
				<td>
					<span class="small">Column Description</span>
					API Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					ShortCall
				</th>
				<td>
					<span class="small">Data Type</span>
					string
				</td>
				<td>
					<span class="small">Column Description</span>
					Dataset path
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					Calls
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Number of requests
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="TopDatasetsPerWeekPerKeys" tabindex="-1">TopDatasetsPerWeekPerKeys</h3>
	<table class="accessible responsive" summary="Top Datasets Per Week Per Keys - API Metrics (per key)">
		<caption>Top Datasets Per Week Per Keys</caption>
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
					TOKEN
				</th>
				<td>
					<span class="small">Data Type</span>
					GUID
				</td>
				<td>
					<span class="small">Column Description</span>
					API Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					ShortCall
				</th>
				<td>
					<span class="small">Data Type</span>
					string
				</td>
				<td>
					<span class="small">Column Description</span>
					Dataset path
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					Calls
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Number of requests
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="TopDatasetsPerDayPerKeys" tabindex="-1">TopDatasetsPerDayPerKeys</h3>
	<table class="accessible responsive" summary="Top Datasets Per Day Per Keys - API Metrics (per key)">
		<caption>Top Datasets Per Day Per Keys</caption>
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
					TOKEN
				</th>
				<td>
					<span class="small">Data Type</span>
					GUID
				</td>
				<td>
					<span class="small">Column Description</span>
					API Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					ShortCall
				</th>
				<td>
					<span class="small">Data Type</span>
					string
				</td>
				<td>
					<span class="small">Column Description</span>
					Dataset path
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					Calls
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Number of requests
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="TopDataTablesPerKeys" tabindex="-1">TopDataTablesPerKeys</h3>
	<table class="accessible responsive" summary="Top Data Tables Per Keys - API Metrics (per key)">
		<caption>Top Data Tables Per Keys</caption>
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
					TOKEN
				</th>
				<td>
					<span class="small">Data Type</span>
					GUID
				</td>
				<td>
					<span class="small">Column Description</span>
					API Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					ShortCall
				</th>
				<td>
					<span class="small">Data Type</span>
					string
				</td>
				<td>
					<span class="small">Column Description</span>
					Data table path
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					Calls
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Number of requests
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="TopDataTablesPerKeyDays" tabindex="-1">TopDataTablesPerKeyDays</h3>
	<table class="accessible responsive" summary="Top Data Tables Per Key Days - API Metrics (per key)">
		<caption>Top Data Tables Per Key Days</caption>
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
					TOKEN
				</th>
				<td>
					<span class="small">Data Type</span>
					GUID
				</td>
				<td>
					<span class="small">Column Description</span>
					API Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					ShortCall
				</th>
				<td>
					<span class="small">Data Type</span>
					string
				</td>
				<td>
					<span class="small">Column Description</span>
					Data table path
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					Calls
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Number of requests
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="TopDataTablesPerKeyMonths" tabindex="-1">TopDataTablesPerKeyMonths</h3>
	<table class="accessible responsive" summary="Top Data Tables Per Key Months - API Metrics (per key)">
		<caption>Top Data Tables Per Key Months</caption>
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
					TOKEN
				</th>
				<td>
					<span class="small">Data Type</span>
					GUID
				</td>
				<td>
					<span class="small">Column Description</span>
					API Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					ShortCall
				</th>
				<td>
					<span class="small">Data Type</span>
					string
				</td>
				<td>
					<span class="small">Column Description</span>
					Data table path
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					Calls
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Number of requests
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="TopDataTablesPerKeyWeeks" tabindex="-1">TopDataTablesPerKeyWeeks</h3>
	<table class="accessible responsive" summary="Top Data Tables Per Key Weeks - API Metrics (per key)">
		<caption>Top Data Tables Per Key Weeks</caption>
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
					TOKEN
				</th>
				<td>
					<span class="small">Data Type</span>
					GUID
				</td>
				<td>
					<span class="small">Column Description</span>
					API Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					ShortCall
				</th>
				<td>
					<span class="small">Data Type</span>
					string
				</td>
				<td>
					<span class="small">Column Description</span>
					Data table path
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					Calls
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Number of requests
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="TopDataTablesPerKeyYears" tabindex="-1">TopDataTablesPerKeyYears</h3>
	<table class="accessible responsive" summary="Top Data Tables Per Key Years - API Metrics (per key)">
		<caption>Top Data Tables Per Key Years</caption>
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
					TOKEN
				</th>
				<td>
					<span class="small">Data Type</span>
					GUID
				</td>
				<td>
					<span class="small">Column Description</span>
					API Key
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					ShortCall
				</th>
				<td>
					<span class="small">Data Type</span>
					string
				</td>
				<td>
					<span class="small">Column Description</span>
					Data table path
				</td>
			</tr>
			<tr>
				<th scope="row">	
					<span class="small">Column Name</span>
					Calls
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Number of requests
				</td>
			</tr>
		</tbody>
	</table>
</div>