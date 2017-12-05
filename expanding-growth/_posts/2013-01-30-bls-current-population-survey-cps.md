---
layout: post
title: Current Population Survey (CPS)
created: 1359579396
version: V1
description: The Current Population Survey (CPS) is a monthly survey of households conducted by the Bureau of Census for the Bureau of Labor Statistics.
---

<div class="force_wrap apiurl">
<p>http://api.dol.gov/V1/Statistics/CPS</p>
</div>

<p>The Current Population Survey (CPS) is a monthly survey of households conducted by the Bureau of Census for the Bureau of Labor Statistics. It provides a comprehensive body of data on the <a href="http://www.bls.gov/cps/lfcharacteristics.htm#laborforce">labor force</a>, <a href="http://www.bls.gov/cps/lfcharacteristics.htm#emp">employment</a>, <a href="http://www.bls.gov/cps/lfcharacteristics.htm#unemp">unemployment</a>, persons <a href="http://www.bls.gov/cps/lfcharacteristics.htm#nlf">not in the labor force</a>, <a href="http://www.bls.gov/cps/lfcharacteristics.htm#hours">hours of work</a>, <a href="http://www.bls.gov/cps/earnings.htm">earnings</a>, and other <a href="http://www.bls.gov/cps/demographics.htm">demographic</a> and <a href="http://www.bls.gov/cps/lfcharacteristics.htm">labor force characteristics</a>.</p>

<p>More information and details about the data provided can be found at <a href="http://www.bls.gov/cps">http://www.bls.gov/cps</a></p>


<a href ="http://api.dol.gov/V1/Statistics/CPS/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=BLS%20Customer%20Population%20Survey%20(CPS)" class="button radius button_dataset">Explore This Data</a>


## Dataset Tables  

<div>
	<ul>
		<li><a href="#LE_AGES">LE_AGES</a></li>
		<li><a href="#LE_BORN">LE_BORN</a></li>
		<li><a href="#LE_CLASS">LE_CLASS</a></li>
		<li><a href="#LE_DATA_PUB">LE_DATA_PUB</a></li>
		<li><a href="#LE_EARN">LE_EARN</a></li>
		<li><a href="#LE_EDUCATION">LE_EDUCATION</a></li>
		<li><a href="#LE_FIPS">LE_FIPS</a></li>
		<li><a href="#LE_FOOTNOTE">LE_FOOTNOTE</a></li>
		<li><a href="#LE_INDY">LE_INDY</a></li>
		<li><a href="#LE_LFST">LE_LFST</a></li>
		<li><a href="#LE_OCCUPATION">LE_OCCUPATION</a></li>
		<li><a href="#LE_ORIG">LE_ORIG</a></li>
		<li><a href="#LE_PCTS">LE_PCTS</a></li>
		<li><a href="#LE_RACE">LE_RACE</a></li>
		<li><a href="#LE_SEASONAL">LE_SEASONAL</a></li>
		<li><a href="#LE_SERIES">LE_SERIES</a></li>
		<li><a href="#LE_SEXS">LE_SEXS</a></li>
		<li><a href="#LE_TDATA">LE_TDATA</a></li>
		<li><a href="#LE_UNIN">LE_UNIN</a></li>
	</ul>
</div>

<div>
	<h3 id="LE_AGES" tabindex="-1">LE_AGES</h3>
	<table class="accessible responsive" summary="Ages - Current Population Survey (CPS)">
		<caption>Ages</caption>
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
					AGES_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Age Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					AGES_TEXT
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Age Code Description
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="LE_BORN" tabindex="-1">LE_BORN</h3>
	<table class="accessible responsive" summary="Born - Current Population Survey (CPS)">
		<caption>Born</caption>
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
					BORN_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Foreign Born Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					BORN_TEXT
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Foreign Born Code Description
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					DISPLAY_LEVEL
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Display Indent Level For Query Tool
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					SELECTABLE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Code To Allow/Disallow Query Tool Selection
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					SORT_SEQUENCE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (5)
				</td>
				<td>
					<span class="small">Column Description</span>
					Data Query Tool Widget Sorting
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="LE_CLASS" tabindex="-1">LE_CLASS</h3>
	<table class="accessible responsive" summary="Class - Current Population Survey (CPS)">
		<caption>Class</caption>
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
					CLASS_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Class of Worker Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					CLASS_TEXT
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Class of Worker Description
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					DISPLAY_LEVEL
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Display Indent Level For Query Tool
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					SELECTABLE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Code To Allow/Disallow Query Tool Selection
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					SORT_SEQUENCE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (5)
				</td>
				<td>
					<span class="small">Column Description</span>
					Data Query Tool Widget Sorting
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="LE_DATA_PUB" tabindex="-1">LE_DATA_PUB</h3>
	<table class="accessible responsive" summary="Data Pub - Current Population Survey (CPS)">
		<caption>Data Pub</caption>
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
					SERIES_ID
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (17)
				</td>
				<td>
					<span class="small">Column Description</span>
					Series Identifier Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					YEAR
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (4)
				</td>
				<td>
					<span class="small">Column Description</span>
					Data Observation Year
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					PERIOD
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (3)
				</td>
				<td>
					<span class="small">Column Description</span>
					Data Observation Period (Month, Quarter, Semi-Annual, Annual)
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					VALUE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (12)
				</td>
				<td>
					<span class="small">Column Description</span>
					Data Observation/Estimate
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					FOOTNOTE_CODES
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Footnote Codes
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="LE_EARN" tabindex="-1">LE_EARN</h3>
	<table class="accessible responsive" summary="Earn - Current Population Survey (CPS)">
		<caption>Earn</caption>
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
					EARN_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Earnings Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					EARN_TEXT
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Earnings Code Description
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="LE_EDUCATION" tabindex="-1">LE_EDUCATION</h3>
	<table class="accessible responsive" summary="Education - Current Population Survey (CPS)">
		<caption>Education</caption>
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
					EDUCATION_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Education Level Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					EDUCATION_TEXT
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Education Level Code Description
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="LE_FIPS" tabindex="-1">LE_FIPS</h3>
	<table class="accessible responsive" summary="FIPS - Current Population Survey (CPS)">
		<caption>FIPS</caption>
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
					FIPS_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					FIPS Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					FIPS_TEXT
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					FIPS Code Description
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="LE_FOOTNOTE" tabindex="-1">LE_FOOTNOTE</h3>
	<table class="accessible responsive" summary="Footnote - Current Population Survey (CPS)">
		<caption>Footnote</caption>
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
					FOOTNOTE_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Footnote Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					FOOTNOTE_TEXT
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (150)
				</td>
				<td>
					<span class="small">Column Description</span>
					Footnote Code Description
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="LE_INDY" tabindex="-1">LE_INDY</h3>
	<table class="accessible responsive" summary="Indy - Current Population Survey (CPS)">
		<caption>Indy</caption>
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
					INDY_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (4)
				</td>
				<td>
					<span class="small">Column Description</span>
					Industry Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					INDY_TEXT
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Industry Code Description
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="LE_LFST" tabindex="-1">LE_LFST</h3>
	<table class="accessible responsive" summary="Labor Force Status - Current Population Survey (CPS)">
		<caption>Labor Force Status</caption>
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
					LFST_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					
					<span class="small">Column Description</span>Labor Force Status Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					LFST_TEXT
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (150)
				</td>
				<td>
					<span class="small">Column Description</span>
					Labor Force Status Code Description
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="LE_OCCUPATION" tabindex="-1">LE_OCCUPATION</h3>
	<table class="accessible responsive" summary="Occupation - Current Population Survey (CPS)">
		<caption>Occupation</caption>
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
					OCCUPATION_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (4)
				</td>
				<td>
					<span class="small">Column Description</span>
					Occupation Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					OCCUPATION_TEXT
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Occupation Code Description
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="LE_ORIG" tabindex="-1">LE_ORIG</h3>
	<table class="accessible responsive" summary="Origin - Current Population Survey (CPS)">
		<caption>Origin</caption>
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
					ORIG_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Ethhic Origin Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					ORIG_TEXT
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Ethnic Origin Code Description
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="LE_PCTS" tabindex="-1">LE_PCTS</h3>
	<table class="accessible responsive" summary="Percents - Current Population Survey (CPS)">
		<caption>Percents</caption>
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
					PCTS_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Type of Percent Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					PCTS_TEXT
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Type of Percent Code Description
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="LE_RACE" tabindex="-1">LE_RACE</h3>
	<table class="accessible responsive" summary="Race - Current Population Survey (CPS)">
		<caption>Race</caption>
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
					RACE_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Race Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					RACE_TEXT
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Race Code Description
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="LE_SEASONAL" tabindex="-1">LE_SEASONAL</h3>
	<table class="accessible responsive" summary="Seasonal - Current Population Survey (CPS)">
		<caption>Seasonal</caption>
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
					SEASONAL
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Seasonal Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					SEASONAL_TEXT
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (30)
				</td>
				<td>
					<span class="small">Column Description</span>
					Seasonal Code Text
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="LE_SERIES" tabindex="-1">LE_SERIES</h3>
	<table class="accessible responsive" summary="Series - Current Population Survey (CPS)">
		<caption>Series</caption>
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
					SERIES_ID
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (17)
				</td>
				<td>
					<span class="small">Column Description</span>
					Series Identifier Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					LFST_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Labor Force Status Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					FIPS_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					FIPS Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					SERIES_DESCRIPTION
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (200)
				</td>
				<td>
					<span class="small">Column Description</span>
					Series Identifier Code Description
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					TDATA_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Type of Data Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					PCTS_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Type of Percent Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					EARN_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Data Type, Primarily Earnings Type Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					CLASS_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Class of Worker Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					UNIN_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Union Membership Code
				</td>
			</tr>
			<tr>
				<th scope="row">	
					<span class="small">Column Name</span>
					INDY_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (4)
				</td>
				<td>
					<span class="small">Column Description</span>
					Industry Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					OCCUPATION_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (4)
				</td>
				<td>
					<span class="small">Column Description</span>
					Occupation Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					EDUCATION_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Education Level Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					AGES_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Age Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					RACE_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Race Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					ORIG_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Ethnic Origin Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					SEXS_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Gender Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					BORN_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Foreign Born Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					SEASONAL
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Seasonality Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					FOOTNOTE_CODES
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (10)
				</td>
				<td>
					<span class="small">Column Description</span>
					Footnote Codes
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					BEGIN_YEAR
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (4)
				</td>
				<td>
					<span class="small">Column Description</span>
					Begin Year of Series
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					BEGIN_PERIOD
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (3)
				</td>
				<td>
					<span class="small">Column Description</span>
					Begin Period of Series
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					END_YEAR
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (4)
				</td>
				<td>
					<span class="small">Column Description</span>
					End Year of Series
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					END_PERIOD
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (3)
				</td>
				<td>
					<span class="small">Column Description</span>
					End Period of Series
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="LE_SEXS" tabindex="-1">LE_SEXS</h3>
	<table class="accessible responsive" summary="Sexes - Current Population Survey (CPS)">
		<caption>Sexes</caption>
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
					SEXS_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Gender Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					SEXS_TEXT
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Gender Code Description
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="LE_TDATA" tabindex="-1">LE_TDATA</h3>
	<table class="accessible responsive" summary="Type of Data - Current Population Survey (CPS)">
		<caption>Type of Data</caption>
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
					TDATA_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (2)
				</td>
				<td>
					<span class="small">Column Description</span>
					Type of Data Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					TDATA_TEXT
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Type of Data Code Description
				</td>
			</tr>
		</tbody>
	</table>

	<h3 id="LE_UNIN" tabindex="-1">LE_UNIN</h3>
	<table class="accessible responsive" summary="Union - Current Population Survey (CPS)">
		<caption>Union</caption>
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
					UNIN_CODE
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Union Membership Code
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					UNIN_TEXT
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar (100)
				</td>
				<td>
					<span class="small">Column Description</span>
					Union Membership Code Description
				</td>
			</tr>
		</tbody>
	</table>
</div>