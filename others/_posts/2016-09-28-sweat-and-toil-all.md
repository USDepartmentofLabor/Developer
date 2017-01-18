---
layout: post
title: Sweat & Toil - All
description: These datasets contain information on child labor and forced labor worldwide from ILAB’s three flagship reports and its Sweat and Toil app. There are 14 tables that contain data from the 2015 reporting cycle. 
redirect_from: "/child-labor/"
---

These datasets contain information on child labor and forced labor worldwide from ILAB’s three flagship 
reports: <i>Findings on the Worst Forms of Child Labor</i>; <i>List of Goods Produced by Child Labor or Forced Labor</i>
; and <i>List of Products Produced by Forced or Indentured Child Labor</i>. There are 11 tables containing data from the 2014 and 2015 reporting cycle, and 3 tables with additional data from the 2015 reporting cycle. This information is also available in ILAB’s new app, Sweat & Toil: Child Labor, 
Forced Labor, and Human Trafficking Around the World. For more information, see ILAB’s <a href="http://www.dol.gov/ilab/reports/child-labor/">International Child Labor and 
Forced Labor Reports page</a>.

<h2>Dataset Tables</h2>
<div>
    <ul>
        <li><a href="#region">SweatToilAll_Regions</a></li>
        <li><a href="#country">SweatToilAll_Countries</a></li>
        <li><a href="#territory">SweatToilAll_Territories</a></li>
        <li><a href="#advancement_level">SweatToilAll_AdvancementLevels</a></li>
        <li><a href="#assessments">SweatToilAll_Assessments</a></li>
        <li><a href="#sector">SweatToilAll_Sectors</a></li>
        <li><a href="#good">SweatToilAll_Goods</a></li>
        <li><a href="#country_goods">SweatToilAll_CountryGoods</a></li>
        <li><a href="#country_statistics">SweatToilAll_Statistics</a></li>
        <li><a href="#conventions">SweatToilAll_Conventions</a></li>
        <li><a href="#suggested_actions">SweatToilAll_SuggestedActions</a></li>
        <li><a href="#legal_standards">SweatToilAll_LegalStandards</a></li>
        <li><a href="#enforcements">SweatToilAll_Enforcements</a></li>
        <li><a href="#mechanisms">SweatToil_Mechanisms</a></li>
    </ul>
</div>

<div>
    <h3 id="region" tabindex="-1">Regions Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToilAll_Regions</p>
    </div>
    <table class="accessible responsive" summary="ILAB - regions">
        <caption>SweatToilAll_Regions</caption>
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
					id
				</th>
                <td>
					<span class="small">Data Type</span>
					int
				</td>
                <td>
					<span class="small">Column Description</span>
					Unique region identifier
				</td>
            </tr>
            <tr>
                <th scope="row">
					<span class="small">Column Name</span>
					name
				</th>
                <td>
					<span class="small">Data Type</span>
					varchar
				</td>
                <td>
					<span class="small">Column Description</span>
					Region name
				</td>
            </tr>
        </tbody>
    </table>

    <h3 id="country" tabindex="-1">Countries Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToilAll_Countries</p>
    </div>
    <table class="accessible responsive" summary="ILAB - Countries">
        <caption>SweatToilAll_Countries</caption>
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
				id
			</th>
            <td>
				<span class="small">Data Type</span>
				int
			</td>
            <td>
				<span class="small">Column Description</span>
				Unique country identifier
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				name
			</th>
            <td>
				<span class="small">Data Type</span>
				varchar
			</td>
            <td>
				<span class="small">Column Description</span>
				Country name
			</td>
        </tr>
        
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				region_id
			</th>
            <td>
				<span class="small">Data Type</span>
				int
			</td>
            <td>
				<span class="small">Column Description</span>
				Unique Region Identifier
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				region
			</th>
            <td>
				<span class="small">Data Type</span>
				varchar
			</td>
            <td>
				<span class="small">Column Description</span>
				Region Name
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				num_territories
			</th>
            <td>
				<span class="small">Data Type</span>
				int
			</td>
            <td>
				<span class="small">Column Description</span>
				Number of territories within country
			</td>
        </tr>
        </tbody>
    </table>

    <h3 id="territory" tabindex="-1">Territories Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToilAll_Territories</p>
    </div>
    <table class="accessible responsive" summary="ILAB - Territories">
        <caption>SweatToilAll_Territories</caption>
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
				id
			</th>
            <td>
				<span class="small">Data Type</span>
				int
			</td>
            <td>
				<span class="small">Column Description</span>
				Unique identifier
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				name
			</th>
            <td>
				<span class="small">Data Type</span>
				varchar
			</td>
            <td>
				<span class="small">Column Description</span>
				Territory name
			</td>
        </tr>
        
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				abbreviation
			</th>
            <td>
				<span class="small">Data Type</span>
				varchar
			</td>
            <td>
				<span class="small">Column Description</span>
				Territory Abbreviation
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				country_id
			</th>
            <td>
				<span class="small">Data Type</span>
				\int
			</td>
            <td>
				<span class="small">Column Description</span>
				Country Identifier
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				country
			</th>
            <td>
				<span class="small">Data Type</span>
				varchar
			</td>
            <td>
				<span class="small">Column Description</span>
				Country Name
			</td>
        </tr>
        </tbody>
    </table>

    <h3 id="advancement_level" tabindex="-1">Advancement Levels Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToilAll_AdvancementLevels</p>
    </div>
    <table class="accessible responsive" summary="ILAB - Advancement Levels">
        <caption>SweatToilAll_AdvancementLevels</caption>
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
				id
			</th>
            <td>
				<span class="small">Data Type</span>
				int
			</td>
            <td>
				<span class="small">Column Description</span>
				Unique advancement level identifier
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				name
			</th>
            <td>
				<span class="small">Data Type</span>
				varchar
			</td>
            <td>
				<span class="small">Column Description</span>
				Advancement level (e.g. Significant, Moderate, Minimal, or No Advancement, etc.)
			</td>
        </tr>
        </tbody>
    </table>

    <h3 id="assessments" tabindex="-1">Assessments Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToilAll_Assessments</p>
    </div>
    <table class="accessible responsive" summary="ILAB - Assessments">
        <caption>SweatToilAll_Assessments</caption>
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
				id
			</th>
            <td>
				<span class="small">Data Type</span>
				int
			</td>
            <td>
				<span class="small">Column Description</span>
				Unique identifier
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				country_id
			</th>
            <td>
				<span class="small">Data Type</span>
				int
			</td>
            <td>
				<span class="small">Column Description</span>
				Unique country identifier
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				country_name
			</th>
            <td>
				<span class="small">Data Type</span>
				varchar
			</td>
            <td>
				<span class="small">Column Description</span>
				Country name
			</td>
        </tr>
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
				Year
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				advancement_level_id
			</th>
            <td>
				<span class="small">Data Type</span>
				int
			</td>
            <td>
				<span class="small">Column Description</span>
				Advancement level identifier
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				advancement_level
			</th>
            <td>
				<span class="small">Data Type</span>
				varchar
			</td>
            <td>
				<span class="small">Column Description</span>
				Advancement level
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				description
			</th>
            <td>
				<span class="small">Data Type</span>
				text
			</td>
            <td>
				<span class="small">Column Description</span>
				Country assessment summary description
			</td>
        </tr>
        </tbody>
    </table>

    <h3 id="sector" tabindex="-1">Sectors Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToilAll_Sectors</p>
    </div>
    <table class="accessible responsive" summary="ILAB - Sector">
        <caption>SweatToilAll_Sectors</caption>
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
				id
			</th>
           <td>
				<span class="small">Data Type</span>
				int
			</td> 
			<td>
				<span class="small">Column Description</span>
				Unique sector identifier
			</td>
		</tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				name
			</th>
            <td>
				<span class="small">Data Type</span>
				varchar
			</td>
            <td>
				<span class="small">Column Description</span>
				Sector name
			</td>
        </tr>
        </tbody>
    </table>

    <h3 id="good" tabindex="-1">Goods Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToilAll_Goods</p>
    </div>
    <table class="accessible responsive" summary="ILAB - Goods">
        <caption>SweatToilAll_Goods</caption>
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
				id
			</th>
            <td>
				<span class="small">Data Type</span>
				int
			</td>
            <td>
				<span class="small">Column Description</span>
				Unique good identifier
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				sector_id
			</th>
            <td>
				<span class="small">Data Type</span>
				int
			</td>
            <td>
				<span class="small">Column Description</span>
				Unique sector identifier
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				sector
			</th>
            <td>
				<span class="small">Data Type</span>
				varchar
			</td>
            <td>
				<span class="small">Column Description</span>
				Sector name
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				name
			</th>
            <td>
				<span class="small">Data Type</span>
				varchar
			</td>
            <td>
				<span class="small">Column Description</span>
				Name of good
			</td>
        </tr>
        </tbody>
    </table>

    <h3 id="country_goods" tabindex="-1">Country Goods Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToilAll_CountryGoods</p>
    </div>
    <table class="accessible responsive" summary="ILAB - Country Goods">
        <caption>SweatToilAll_CountryGoods</caption>
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
				id
			</th>
            <td>
				<span class="small">Data Type</span>
				int
			</td>
            <td>
				<span class="small">Column Description</span>
				Unique identifier
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				assessment_id
			</th>
            <td>
				<span class="small">Data Type</span>
				int
			</td>
            <td>
				<span class="small">Column Description</span>
				Assessment identifier
			</td>
        </tr>
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
				Assessment year
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				country_id
			</th>
            <td>
				<span class="small">Data Type</span>
				int
			</td>
            <td>
				<span class="small">Column Description</span>
				Country identifier
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				country
			</th>
            <td>
				<span class="small">Data Type</span>
				varchar
			</td>
            <td>
				<span class="small">Column Description</span>
				Country name
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				good_id
			</th>
            <td>
				<span class="small">Data Type</span>
				int
			</td>
            <td>
				<span class="small">Column Description</span>
				Good identifier
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				good
			</th>
            <td>
				<span class="small">Data Type</span>
				varchar
			</td>
            <td>
				<span class="small">Column Description</span>
				Good name
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				child_labor
			</th>
            <td>
				<span class="small">Data Type</span>
				boolean
			</td>
            <td>
				<span class="small">Column Description</span>
				Goods produced by child labor
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				forced_labor
			</th>
            <td>
				<span class="small">Data Type</span>
				boolean
			</td>
            <td>
				<span class="small">Column Description</span>
				Goods produced by forced labor
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				forced_child_labor
			</th>
            <td>
				<span class="small">Data Type</span>
				boolean
			</td>
            <td>
				<span class="small">Column Description</span>
				Goods produced by forced child labor
			</td>
        </tr>
        </tbody>
    </table>

	<h3 id="country_statistics" >Statistics Table</h3>
	<div class="force_wrap apiurl">
    <p>https://data.dol.gov/SweatToilAll_Statistics</p>
    </div>
	<table class="accessible responsive" summary="ILAB - Statistics">
		<caption>SweatToilAll_Statistics</caption>
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
					id
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Unique Identifier
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					assessment_id
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Assessment Identifier
				</td>
			</tr>
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
					Assessment year
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					country_id
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Country Identifier
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					country
				</th>
				<td>	
					<span class="small">Data Type</span>
					varchar
				</td>
				<td>
					<span class="small">Column Description</span>
					Country Name
				</td>
			</tr>
            <tr>
                <th scope="row">
					<span class="small">Column Name</span>
					age_range_of_working_children
				</th>
                <td>
					<span class="small">Data Type</span>
					varchar
				</td>
                <td>
					<span class="small">Column Description</span>
					Age range of working children
				</td>
            </tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					percent_of_working_children
				</th>
				<td>
					<span class="small">Data Type</span>
					decimal
				</td>
				<td>
					<span class="small">Column Description</span>
					Percent of working children
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					population_of_working_children
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>	
					<span class="small">Column Description</span>
					Population of working children
				</td>
			</tr>
            <tr>
				<th scope="row">
					<span class="small">Column Name</span>
					percent_of_working_children_agriculture
				</th>
				<td>
					<span class="small">Data Type</span>
					decimal(3,1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Percent of working children in agriculture
				</td>
			</tr>
	        <tr>
                <th scope="row">
					<span class="small">Column Name</span>
					percent_of_working_children_industry
				</th>
                <td>
					<span class="small">Data Type</span>
					decimal
				</td>
                <td>
					<span class="small">Column Description</span>
					Percent of working children in industry
				</td>
            </tr>
	        <tr>
                <th scope="row">
					<span class="small">Column Name</span>
					percent_of_working_children_services
				</th>
                <td>
					<span class="small">Data Type</span>
					decimal
				</td>
                <td>
					<span class="small">Column Description</span>
					Percent of working children in services
				</td>
            </tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					age_range_of_children_attending_school
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar
				</td>
				<td>	
					<span class="small">Column Description</span>
					Age range of children attending school
				</td>
			</tr>
            <tr>
                <th scope="row">
					<span class="small">Column Name</span>
					percentage_of_children_attending_school
				</th>
                <td>
					<span class="small">Data Type</span>
					decimal
				</td>
                <td>
					<span class="small">Column Description</span>
					Percent of children attending school
				</td>
            </tr>
			<tr>
                <th scope="row">
					<span class="small">Column Name</span>
					age_range_of_children_working_and_studying
				</th>
                <td>	
					<span class="small">Data Type</span>
					varchar
				</td>
                <td>	
					<span class="small">Column Description</span>
					Age range of children working and studying
				</td>
            </tr>
            <tr>
                <th scope="row">
					<span class="small">Column Name</span>
					percent_of_children_working_and_studying
				</th>
                <td>
					<span class="small">Data Type</span>
					decimal
				</td>
                <td>
					<span class="small">Column Description</span>
					Percent of children working and studying
				</td>
            </tr>
            <tr>
                <th scope="row">
					<span class="small">Column Name</span>
					primary_completion_rate
				</th>
                <td>
					<span class="small">Data Type</span>
					decimal
				</td>
                <td>
					<span class="small">Column Description</span>
					Percent of children who complete primary education
				</td>
            </tr>
        </tbody>
        </table>
    
    <h3 id="conventions" >Conventions Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/SweatToilAll_Conventions</p>
    </div>
    <table class="accessible responsive" summary="ILAB - Country Master Data">
        <caption>SweatToilAll_Conventions</caption>
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
					id
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Unique Identifier
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					assessment_id
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Assessment Identifier
				</td>
			</tr>
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
					Assessment Year
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					country_id
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Country Identifier
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					country
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar
				</td>
				<td>
					<span class="small">Column Description</span>
					Country name
				</td>
			</tr>
            <tr>
				<th scope="row">
					<span class="small">Column Name</span>
					c_138_ratified
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar
				</td>
				<td>
					<span class="small">Column Description</span>
					Status of country ratification of ILO Convention 138
				</td>
			</tr>
			<tr>
                <th scope="row">
					<span class="small">Column Name</span>
					c_182_ratified
				</th>
                <td>
					<span class="small">Data Type</span>
					varchar
				</td>
                <td>
					<span class="small">Column Description</span>
					Status of country ratification of ILO Convention 182
				</td>
            </tr>
            <tr>
                <th scope="row">
					<span class="small">Column Name</span>
					crc_ratified
				</th>
                <td>
					<span class="small">Data Type</span>
					varchar
				</td>
                <td>
					<span class="small">Column Description</span>
					Status of country ratification of the UN Convention on the Rights of the Child
				</td>
            </tr>
            <tr>
                <th scope="row">
					<span class="small">Column Name</span>
					crc_csec_ratified
				</th>
                <td>
					<span class="small">Data Type</span>
					varchar
				</td>
                <td>
					<span class="small">Column Description</span>
					Status of country ratification of the Optional Protocol to the Convention on the Rights of the Child on the Sale of Children, Child Prostitution and Child Pornography
				</td>
            </tr>
            <tr>
                <th scope="row">
					<span class="small">Column Name</span>
					crc_ac_ratified
				</th>
                <td>
					<span class="small">Data Type</span>
					varchar
				</td>
                <td>
					<span class="small">Column Description</span>
					Status of country ratification of the Optional Protocol to the Convention on the Rights of the Child on the Involvement of Children in Armed Conflict
				</td>
            </tr>
            <tr>
				<th scope="row">
					<span class="small">Column Name</span>
					palermo_ratified
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar
				</td>
				<td>
					<span class="small">Column Description</span>
					Status of country ratification of the Protocol to Prevent, Suppress and Punish Trafficking in Persons, Especially Women and Children, supplementing the United Nations Convention Against Transnational Organized Crime (Palermo Protocol)
				</td>
			</tr>
		</tbody>
	</table>

    <h3 id="suggested_actions" tabindex="-1">Suggested Actions Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToilAll_SuggestedActions</p>
    </div>
    <table class="accessible responsive" summary="ILAB - Suggested Actions">
        <caption>SweatToilAll_SuggestedActions</caption>
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
					id
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Unique identifier
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					assessment_id
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Assessment identifier
				</td>
			</tr>
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
					Years suggested
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					country_id
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Country identifier
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					country
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar
				</td>
				<td>
					<span class="small">Column Description</span>
					Country name
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					area
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar
				</td>
				<td>
					<span class="small">Column Description</span>
					Suggested action area
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					action
				</th>
				<td>
					<span class="small">Data Type</span>
					text
				</td>
				<td>
					<span class="small">Column Description</span>
					Suggested action
				</td>
			</tr>
        </tbody>
    </table>

  <h3 id="legal_standards" tabindex="-1">Legal Standards Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToilAll_LegalStandards</p>
    </div>
    <table class="accessible responsive" summary="ILAB - Legal Standards">
        <caption>SweatToilAll_LegalStandards</caption>
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
				id
			</th>
            <td>
				<span class="small">Data Type</span>
				int
			</td>
            <td>
				<span class="small">Column Description</span>
				Unique identifier
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				assessment_id
			</th>
            <td>
				<span class="small">Data Type</span>
				int
			</td>
            <td>
				<span class="small">Column Description</span>
				Assessment identifier
			</td>
        </tr>
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
				Assessment year
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				country_id
			</th>
            <td>
				<span class="small">Data Type</span>
				int
			</td>
            <td>
				<span class="small">Column Description</span>
				Country identifier
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				country
			</th>
            <td>
				<span class="small">Data Type</span>
				varchar
			</td>
            <td>
				<span class="small">Column Description</span>
				Country name
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				name
			</th>
            <td>
				<span class="small">Data Type</span>
				varchar
			</td>
            <td>
				<span class="small">Column Description</span>
				Name of legal standard
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				standard
			</th>
            <td>
				<span class="small">Data Type</span>
				varchar
			</td>
            <td>
				<span class="small">Column Description</span>
				Legal standard value
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				is_calculated_age
			</th>
            <td>
				<span class="small">Data Type</span>
				boolean
			</td>
            <td>
				<span class="small">Column Description</span>
				Identifies age calculated based on available information
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				conforms_standard
			</th>
            <td>
				<span class="small">Data Type</span>
				boolean
			</td>
            <td>
				<span class="small">Column Description</span>
				Identifies there are gaps in the legal framework, as articulated in the chapter report
			</td>
        </tr>
        </tbody>
    </table>

  <h3 id="enforcements" tabindex="-1">Enforcements Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToilAll_Enforcements</p>
    </div>
    <table class="accessible responsive" summary="ILAB - Enforcements">
        <caption>SweatToilAll_Enforcements</caption>
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
				id
			</th>
            <td>
				<span class="small">Data Type</span>
				int
			</td>
            <td>
				<span class="small">Column Description</span>
				Unique identifier
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				assessment_id
			</th>
            <td>
				<span class="small">Data Type</span>
				int
			</td>
            <td>
				<span class="small">Column Description</span>
				Assessment identifier
			</td>
        </tr>
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
				Assessment year
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				country_id
			</th>
            <td>
				<span class="small">Data Type</span>
				int
			</td>
            <td>
				<span class="small">Column Description</span>
				Country identifier
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				country
			</th>
            <td>
				<span class="small">Data Type</span>
				varchar
			</td>
            <td>
				<span class="small">Column Description</span>
				Country name
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				type
			</th>
            <td>
				<span class="small">Data Type</span>
				varchar
			</td>
            <td>
				<span class="small">Column Description</span>
				Enforcement type
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				name
			</th>
            <td>
				<span class="small">Data Type</span>
				varchar
			</td>
            <td>
				<span class="small">Column Description</span>
				Name of enforcement
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				enforcement
			</th>
            <td>
				<span class="small">Data Type</span>
				varchar
			</td>
            <td>
				<span class="small">Column Description</span>
				Enforcement value
			</td>
        </tr>
        </tbody>
    </table>

  <h3 id="mechanisms" tabindex="-1">Mechanisms Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToil_Mechanisms</p>
    </div>
    <table class="accessible responsive" summary="ILAB - Mechanisms">
        <caption>SweatToil_Mechanisms</caption>
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
				id
			</th>
            <td>
				<span class="small">Data Type</span>
				int
			</td>
            <td>
				<span class="small">Column Description</span>
				Unique identifier
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				assessment_id
			</th>
            <td>
				<span class="small">Data Type</span>
				int
			</td>
            <td>
				<span class="small">Column Description</span>
				Assessment identifier
			</td>
        </tr>
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
				Assessment year
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				country_id
			</th>
            <td>
				<span class="small">Data Type</span>
				int
			</td>
            <td>
				<span class="small">Column Description</span>
				Country identifier
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				country
			</th>
            <td>
				<span class="small">Data Type</span>
				varchar
			</td>
            <td>
				<span class="small">Column Description</span>
				Country name
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				coordination
			</th>
            <td>	
				<span class="small">Data Type</span>
				varchar
			</td>
            <td>
				<span class="small">Column Description</span>
				Country has coordination mechanism
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				program
			</th>
            <td>
				<span class="small">Data Type</span>
				varchar
			</td>
            <td>
				<span class="small">Column Description</span>
				Country has program mechanism
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				policy
			</th>
            <td>
				<span class="small">Data Type</span>
				varchar
			</td>
            <td>
				<span class="small">Column Description</span>
				Country has a policy mechanism
			</td>
        </tr>
        </tbody>
    </table>
</div>