---
layout: post
title: Current Population Survey (CPS)
created: 1359579396
description: The Current Population Survey (CPS) is a monthly survey of households conducted by the Bureau of Census for the Bureau of Labor Statistics.
---

```
http://api.dol.gov/V1/Statistics/CPS
```

<p>The Current Population Survey (CPS) is a monthly survey of households conducted by the Bureau of Census for the Bureau of Labor Statistics. It provides a comprehensive body of data on the <a href="http://www.bls.gov/cps/lfcharacteristics.htm#laborforce">labor force</a>, <a href="http://www.bls.gov/cps/lfcharacteristics.htm#emp">employment</a>, <a href="http://www.bls.gov/cps/lfcharacteristics.htm#unemp">unemployment</a>, persons <a href="http://www.bls.gov/cps/lfcharacteristics.htm#nlf">not in the labor force</a>, <a href="http://www.bls.gov/cps/lfcharacteristics.htm#hours">hours of work</a>, <a href="http://www.bls.gov/cps/earnings.htm">earnings</a>, and other <a href="http://www.bls.gov/cps/demographics.htm">demographic</a> and <a href="http://www.bls.gov/cps/lfcharacteristics.htm">labor force characteristics</a>.</p>

<p>More information and details about the data provided can be found at <a href="http://www.bls.gov/cps">http://www.bls.gov/cps</a></p>


<a href ="http://api.dol.gov/V1/Statistics/CPS/$metadata" class="button radius button_dataset">Browse Metadata</a>
<a href ="https://devtools.dol.gov/APISampler/Home/Index1?datasetName=BLS%20Customer%20Population%20Survey%20(CPS)" class="button radius button_dataset">Explore This Data</a>


## Dataset Tables  

- [LE_AGES](#LE_AGES)
- [LE_BORN](#LE_BORN)
- [LE_CLASS](#LE_CLASS)
- [LE_DATA_PUB](#LE_DATA_PUB)
- [LE_EARN](#LE_EARN)
- [LE_EDUCATION](#LE_EDUCATION)
- [LE_FIPS](#LE_FIPS)
- [LE_FOOTNOTE](#LE_FOOTNOTE)
- [LE_INDY](#LE_INDY)
- [LE_LFST](#LE_LFST)
- [LE_OCCUPATION](#LE_OCCUPATION)
- [LE_ORIG](#LE_ORIG)
- [LE_PCTS](#LE_PCTS)
- [LE_RACE](#LE_RACE)
- [LE_SEASONAL](#LE_SEASONAL)
- [LE_SERIES](#LE_SERIES)
- [LE_SEXS](#LE_SEXS)
- [LE_TDATA](#LE_TDATA)
- [LE_UNIN](#LE_UNIN)

<h3 id="LE_AGES">LE_AGES</a></h3>
<table summary="Ages - Current Population Survey (CPS)">
	<caption>Ages</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">AGES_CODE</th>
			<td>Age Code</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">AGES_TEXT</th>
			<td>Age Code Description</td>
			<td>varchar (100)</td>
		</tr>
	</tbody>
</table>

<h3 id="LE_BORN">LE_BORN</a></h3>
<table summary="Born - Current Population Survey (CPS)">
	<caption>Born</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">BORN_CODE</th>
			<td>Foreign Born Code</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">BORN_TEXT</th>
			<td>Foreign Born Code Description</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th scope="row">DISPLAY_LEVEL</th>
			<td>Display Indent Level For Query Tool</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">SELECTABLE</th>
			<td>Code To Allow/Disallow Query Tool Selection</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th scope="row">SORT_SEQUENCE</th>
			<td>Data Query Tool Widget Sorting</td>
			<td>varchar (5)</td>
		</tr>
	</tbody>
</table>

<h3 id="LE_CLASS">LE_CLASS</a></h3>
<table summary="Class - Current Population Survey (CPS)">
	<caption>Class</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">CLASS_CODE</th>
			<td>Class Of Worker Code</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">CLASS_TEXT</th>
			<td>Class Of Worker Description</td>
			<td>varchar (100)</td>
		</tr>
		<tr>
			<th scope="row">DISPLAY_LEVEL</th>
			<td>Display Indent Level For Query Tool</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">SELECTABLE</th>
			<td>Code To Allow/Disallow Query Tool Selection</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th scope="row">SORT_SEQUENCE</th>
			<td>Data Query Tool Widget Sorting</td>
			<td>varchar (5)</td>
		</tr>
	</tbody>
</table>

<h3 id="LE_DATA_PUB">LE_DATA_PUB</a></h3>
<table summary="Data Pub - Current Population Survey (CPS)">
	<caption>Data Pub</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">SERIES_ID</th>
			<td>Series Identifier Code</td>
			<td>varchar (17)</td>
		</tr>
		<tr>
			<th scope="row">YEAR</th>
			<td>Data Observation Year</td>
			<td>varchar (4)</td>
		</tr>
		<tr>
			<th scope="row">PERIOD</th>
			<td>Data Observation Period (Month, Quarter, Semi-Annual, Annual)</td>
			<td>varchar (3)</td>
		</tr>
		<tr>
			<th scope="row">VALUE</th>
			<td>Data Observation/Estimate</td>
			<td>varchar (12)</td>
		</tr>
		<tr>
			<th scope="row">FOOTNOTE_CODES</th>
			<td>Footnote Codes</td>
			<td>varchar (10)</td>
		</tr>
	</tbody>
</table>

<h3 id="LE_EARN">LE_EARN</a></h3>
<table summary="Earn - Current Population Survey (CPS)">
	<caption>Earn</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">EARN_CODE</th>
			<td>Earnings Code</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">EARN_TEXT</th>
			<td>Earnings Code Description</td>
			<td>varchar (100)</td>
		</tr>
	</tbody>
</table>

<h3 id="LE_EDUCATION">LE_EDUCATION</a></h3>
<table summary="Education - Current Population Survey (CPS)">
	<caption>Education</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">EDUCATION_CODE</th>
			<td>Education Level Code</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">EDUCATION_TEXT</th>
			<td>Education Level Code Description</td>
			<td>varchar (100)</td>
		</tr>
	</tbody>
</table>

<h3 id="LE_FIPS">LE_FIPS</a></h3>
<table summary="FIPS - Current Population Survey (CPS)">
	<caption>FIPS</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">FIPS_CODE</th>
			<td>FIPS Code</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">FIPS_TEXT</th>
			<td>FIPS Code Description</td>
			<td>varchar (100)</td>
		</tr>
	</tbody>
</table>

<h3 id="LE_FOOTNOTE">LE_FOOTNOTE</a></h3>
<table summary="Footnote - Current Population Survey (CPS)">
	<caption>Footnote</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">FOOTNOTE_CODE</th>
			<td>Footnote Code</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">FOOTNOTE_TEXT</th>
			<td>Footnote Code Description</td>
			<td>varchar (150)</td>
		</tr>
	</tbody>
</table>

<h3 id="LE_INDY">LE_INDY</a></h3>
<table summary="Indy - Current Population Survey (CPS)">
	<caption>Indy</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">INDY_CODE</th>
			<td>Industry Code</td>
			<td>varchar (4)</td>
		</tr>
		<tr>
			<th scope="row">INDY_TEXT</th>
			<td>Industry Code Description</td>
			<td>varchar (100)</td>
		</tr>
	</tbody>
</table>

<h3 id="LE_LFST">LE_LFST</a></h3>
<table summary="Labor Force Status - Current Population Survey (CPS)">
	<caption>Labor Force Status</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">LFST_CODE</th>
			<td>Labor Force Status Code</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">LFST_TEXT</th>
			<td>Labor Force Status Code Description</td>
			<td>varchar (150)</td>
		</tr>
	</tbody>
</table>

<h3 id="LE_OCCUPATION">LE_OCCUPATION</a></h3>
<table summary="Occupation - Current Population Survey (CPS)">
	<caption>Occupation</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">OCCUPATION_CODE</th>
			<td>Occupation Code</td>
			<td>varchar (4)</td>
		</tr>
		<tr>
			<th scope="row">OCCUPATION_TEXT</th>
			<td>Occupation Code Description</td>
			<td>varchar (100)</td>
		</tr>
	</tbody>
</table>

<h3 id="LE_ORIG">LE_ORIG</a></h3>
<table summary="Origin - Current Population Survey (CPS)">
	<caption>Origin</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">ORIG_CODE</th>
			<td>Ethhic Origin Code</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">ORIG_TEXT</th>
			<td>Ethnic Origin Code Description</td>
			<td>varchar (100)</td>
		</tr>
	</tbody>
</table>

<h3 id="LE_PCTS">LE_PCTS</a></h3>
<table summary="Percents - Current Population Survey (CPS)">
	<caption>Percents</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">PCTS_CODE</th>
			<td>Type Of Percent Code</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">PCTS_TEXT</th>
			<td>Type Of Percent Code Description</td>
			<td>varchar (100)</td>
		</tr>
	</tbody>
</table>

<h3 id="LE_RACE">LE_RACE</a></h3>
<table summary="Race - Current Population Survey (CPS)">
	<caption>Race</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">RACE_CODE</th>
			<td>Race Code</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">RACE_TEXT</th>
			<td>Race Code Description</td>
			<td>varchar (100)</td>
		</tr>
	</tbody>
</table>

<h3 id="LE_SEASONAL">LE_SEASONAL</a></h3>
<table summary="Seasonal - Current Population Survey (CPS)">
	<caption>Seasonal</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">SEASONAL</th>
			<td>Seasonal Code</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th scope="row">SEASONAL_TEXT</th>
			<td>Seasonal Code Text</td>
			<td>varchar (30)</td>
		</tr>
	</tbody>
</table>

<h3 id="LE_SERIES">LE_SERIES</a></h3>
<table summary="Series - Current Population Survey (CPS)">
	<caption>Series</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">SERIES_ID</th>
			<td>Series Identifier Code</td>
			<td>varchar (17)</td>
		</tr>
		<tr>
			<th scope="row">LFST_CODE</th>
			<td>Labor Force Status Code</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">FIPS_CODE</th>
			<td>FIPS Code</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">SERIES_DESCRIPTION</th>
			<td>Series Identifier Code Description</td>
			<td>varchar (200)</td>
		</tr>
		<tr>
			<th scope="row">TDATA_CODE</th>
			<td>Type Of Data Code</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">PCTS_CODE</th>
			<td>Type Of Percent Code</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">EARN_CODE</th>
			<td>Data Type, Primarily Earnings Type Code</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">CLASS_CODE</th>
			<td>Class Of Worker Code</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">UNIN_CODE</th>
			<td>Union Membership Code</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th scope="row">INDY_CODE</th>
			<td>Industry Code</td>
			<td>varchar (4)</td>
		</tr>
		<tr>
			<th scope="row">OCCUPATION_CODE</th>
			<td>Occupation Code</td>
			<td>varchar (4)</td>
		</tr>
		<tr>
			<th scope="row">EDUCATION_CODE</th>
			<td>Education Level Code</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">AGES_CODE</th>
			<td>Age Code</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">RACE_CODE</th>
			<td>Race Code</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">ORIG_CODE</th>
			<td>Ethnic Origin Code</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">SEXS_CODE</th>
			<td>Gender Code</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th scope="row">BORN_CODE</th>
			<td>Foreign Born Code</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">SEASONAL</th>
			<td>Seasonality Code</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th scope="row">FOOTNOTE_CODES</th>
			<td>Footnote Codes</td>
			<td>varchar (10)</td>
		</tr>
		<tr>
			<th scope="row">BEGIN_YEAR</th>
			<td>Begin Year Of Series</td>
			<td>varchar (4)</td>
		</tr>
		<tr>
			<th scope="row">BEGIN_PERIOD</th>
			<td>Begin Period Of Series</td>
			<td>varchar (3)</td>
		</tr>
		<tr>
			<th scope="row">END_YEAR</th>
			<td>End Year Of Series</td>
			<td>varchar (4)</td>
		</tr>
		<tr>
			<th scope="row">END_PERIOD</th>
			<td>End Period Of Series</td>
			<td>varchar (3)</td>
		</tr>
	</tbody>
</table>

<h3 id="LE_SEXS">LE_SEXS</a></h3>
<table summary="Sexes - Current Population Survey (CPS)">
	<caption>Sexes</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">SEXS_CODE</th>
			<td>Gender Code</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th scope="row">SEXS_TEXT</th>
			<td>Gender Code Description</td>
			<td>varchar (100)</td>
		</tr>
	</tbody>
</table>

<h3 id="LE_TDATA">LE_TDATA</a></h3>
<table summary="Type Of Data - Current Population Survey (CPS)">
	<caption>Type Of Data</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">TDATA_CODE</th>
			<td>Type Of Data Code</td>
			<td>varchar (2)</td>
		</tr>
		<tr>
			<th scope="row">TDATA_TEXT</th>
			<td>Type Of Data Code Description</td>
			<td>varchar (100)</td>
		</tr>
	</tbody>
</table>

<h3 id="LE_UNIN">LE_UNIN</a></h3>
<table summary="Union - Current Population Survey (CPS)">
	<caption>Union</caption>
	<thead>
		<tr>
			<th scope="col">Column Name</th>
			<th scope="col">Column Description</th>
			<th scope="col">Data Type</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">UNIN_CODE</th>
			<td>Union Membership Code</td>
			<td>varchar (1)</td>
		</tr>
		<tr>
			<th scope="row">UNIN_TEXT</th>
			<td>Union Membership Code Description</td>
			<td>varchar (100)</td>
		</tr>
	</tbody>
</table>
