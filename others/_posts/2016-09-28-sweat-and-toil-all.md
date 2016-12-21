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

<div class="dsktp_tbl">
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
    <!-- ! -->    <li><a href="#suggested_actions">SweatToilAll_SuggestedActions</a></li>
        <li><a href="#legal_standards">SweatToilAll_LegalStandards</a></li>
        <li><a href="#enforcements">SweatToilAll_Enforcements</a></li>
        <li><a href="#mechanisms">SweatToil_Mechanisms</a></li>
    </ul>
</div>

<div class="mbl_tbl">
    <ul>
        <li><a href="#region_mbl">SweatToilAll_Regions</a></li>
        <li><a href="#country_mbl">SweatToilAll_Countries</a></li>
        <li><a href="#territory_mbl">SweatToilAll_Territories</a></li>
        <li><a href="#advancement_level_mbl">SweatToilAll_AdvancementLevels</a></li>
        <li><a href="#assessments_mbl">SweatToilAll_Assessments</a></li>
        <li><a href="#sector_mbl">SweatToilAll_Sectors</a></li>
        <li><a href="#good_mbl">SweatToilAll_Goods</a></li>
        <li><a href="#country_goods_mbl">SweatToilAll_CountryGoods</a></li>
        <li><a href="#country_statistics_mbl">SweatToilAll_Statistics</a></li>
        <li><a href="#conventions_mbl">SweatToilAll_Conventions</a></li>
        <li><a href="#suggested_actions_mbl">SweatToilAll_SuggestedActions</a></li>
        <li><a href="#legal_standards_mbl">SweatToilAll_LegalStandards</a></li>
        <li><a href="#enforcements_mbl">SweatToilAll_Enforcements</a></li>
        <li><a href="#mechanisms_mbl">SweatToil_Mechanisms</a></li>
    </ul>
</div>

<div class="dsktp_tbl">

    <h3 id="region" tabindex="-1">Regions Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToilAll_Regions</p>
    </div>
    <table summary="ILAB - regions">
        <caption>SweatToilAll_Regions</caption>

        <thead>
        <tr>
            <th scope="col">Column Name</th>
            <th scope="col">Column Description</th>
            <th scope="col">Data Type</th>
        </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">id</th>
                <td>Unique region identifier</td>
                <td>int</td>
            </tr>
            <tr>
                <th scope="row">name</th>
                <td>Region name</td>
                <td>varchar</td>
            </tr>
        </tbody>
    </table>

    <h3 id="country" tabindex="-1">Countries Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToilAll_Countries</p>
    </div>
    <table summary="ILAB - Countries">
        <caption>SweatToilAll_Countries</caption>

        <thead>
        <tr>
            <th scope="col">Column Name</th>
            <th scope="col">Column Description</th>
            <th scope="col">Data Type</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">id</th>
            <td>Unique country identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">name</th>
            <td>Country name</td>
            <td>varchar</td>
        </tr>
        
        <tr>
            <th scope="row">region_id</th>
            <td>Unique Region Identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">region</th>
            <td>Region Name</td>
            <td>varchar</td>
        </tr>
        <tr>
            <th scope="row">num_territories</th>
            <td>Number of territories within country</td>
            <td>int</td>
        </tr>
        </tbody>
    </table>

    <h3 id="territory" tabindex="-1">Territories Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToilAll_Territories</p>
    </div>
    <table summary="ILAB - Territories">
        <caption>SweatToilAll_Territories</caption>

        <thead>
        <tr>
            <th scope="col">Column Name</th>
            <th scope="col">Column Description</th>
            <th scope="col">Data Type</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">id</th>
            <td>Unique identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">name</th>
            <td>Territory name</td>
            <td>varchar</td>
        </tr>
        
        <tr>
            <th scope="row">abbreviation</th>
            <td>Territory Abbreviation</td>
            <td>varchar</td>
        </tr>
        <tr>
            <th scope="row">country_id</th>
            <td>Country Identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">country</th>
            <td>Country Name</td>
            <td>varchar</td>
        </tr>
        </tbody>
    </table>

    <h3 id="advancement_level" tabindex="-1">Advancement Levels Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToilAll_AdvancementLevels</p>
    </div>
    <table summary="ILAB - Advancement Levels">
        <caption>SweatToilAll_AdvancementLevels</caption>

        <thead>
        <tr>
            <th scope="col">Column Name</th>
            <th scope="col">Column Description</th>
            <th scope="col">Data Type</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">id</th>
            <td>Unique advancement level identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">name</th>
            <td>Advancement level (e.g. Significant, Moderate, Minimal, or No Advancement, etc.)</td>
            <td>varchar</td>
        </tr>
        </tbody>
    </table>

    <h3 id="assessments" tabindex="-1">Assessments Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToilAll_Assessments</p>
    </div>
    <table summary="ILAB - Assessments">
        <caption>SweatToilAll_Assessments</caption>

        <thead>
        <tr>
            <th scope="col">Column Name</th>
            <th scope="col">Column Description</th>
            <th scope="col">Data Type</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">id</th>
            <td>Unique identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">country_id</th>
            <td>Unique country identifier</td>
            <td>int</td>
        </tr>
        
        <tr>
            <th scope="row">country_name</th>
            <td>Country name</td>
            <td>varchar</td>
        </tr>
        <tr>
            <th scope="row">year</th>
            <td>Year</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">advancement_level_id</th>
            <td>Advancement level identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">advancement_level</th>
            <td>Advancement level</td>
            <td>varchar</td>
        </tr>
        <tr>
            <th scope="row">description</th>
            <td>Country assessment summary description</td>
            <td>text</td>
        </tr>
        </tbody>
    </table>

    <h3 id="sector" tabindex="-1">Sectors Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToilAll_Sectors</p>
    </div>
    <table summary="ILAB - Sector">
        <caption>SweatToilAll_Sectors</caption>
        <thead>
        <tr>
            <th scope="col">Column Name</th>
            <th scope="col">Column Description</th>
            <th scope="col">Data Type</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">id</th>
            <td>Unique sector identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">name</th>
            <td>Sector name</td>
            <td>varchar</td>
        </tr>
        </tbody>
    </table>

    <h3 id="good" tabindex="-1">Goods Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToilAll_Goods</p>
    </div>
    <table summary="ILAB - Goods">
        <caption>SweatToilAll_Goods</caption>

        <thead>
        <tr>
            <th scope="col">Column Name</th>
            <th scope="col">Column Description</th>
            <th scope="col">Data Type</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">id</th>
            <td>Unique good identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">sector_id</th>
            <td>Unique sector identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">sector</th>
            <td>Sector name</td>
            <td>varchar</td>
        </tr>
        <tr>
            <th scope="row">name</th>
            <td>Name of good</td>
            <td>varchar</td>
        </tr>
        </tbody>
    </table>

    <h3 id="country_goods" tabindex="-1">Country Goods Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToilAll_CountryGoods</p>
    </div>
    <table summary="ILAB - Country Goods">
        <caption>SweatToilAll_CountryGoods</caption>

        <thead>
        <tr>
            <th scope="col">Column Name</th>
            <th scope="col">Column Description</th>
            <th scope="col">Data Type</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">id</th>
            <td>Unique identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">assessment_id</th>
            <td>Assessment identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">year</th>
            <td>Assessment year</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">country_id</th>
            <td>Country identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">country</th>
            <td>Country name</td>
            <td>varchar</td>
        </tr>
        <tr>
            <th scope="row">good_id</th>
            <td>Good identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">good</th>
            <td>Good name</td>
            <td>varchar</td>
        </tr>
        <tr>
            <th scope="row">child_labor</th>
            <td>Goods produced by child labor</td>
            <td>boolean</td>
        </tr>
        <tr>
            <th scope="row">forced_labor</th>
            <td>Goods produced by forced labor</td>
            <td>boolean</td>
        </tr>
        <tr>
            <th scope="row">forced_child_labor</th>
            <td>Goods produced by forced child labor</td>
            <td>boolean</td>
        </tr>
        </tbody>
    </table>
    
       
    
	<h3 id="country_statistics" >Statistics Table</h3>
	<div class="force_wrap apiurl">
    <p>https://data.dol.gov/SweatToilAll_Statistics</p>
    </div>
	<table summary="ILAB - Statistics">
		<caption>SweatToilAll_Statistics</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">id</th>
				<td>Unique Identifier</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">assessment_id</th>
				<td>Assessment Identifier</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">year</th>
				<td>Assessment year</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">country_id</th>
				<td>Country Identifier</td>
				<td>int</td>
			</tr>
			<tr>
				<th scope="row">country</th>
				<td>Country Name</td>
				<td>varchar</td>
			</tr>
            <tr>
                <th scope="row">age_range_of_working_children</th>
                <td>Age range of working children</td>
                <td>varchar</td>
            </tr>
			<tr>
				<th scope="row">percent_of_working_children</th>
				<td>Percent of working children</td>
				<td>decimal</td>
			</tr>
			<tr>
				<th scope="row">population_of_working_children</th>
				<td>Population of working children</td>
				<td>int</td>
			</tr>
            <tr>
				<th scope="row">percent_of_working_children_agriculture</th>
				<td>Percent of working children in agriculture</td>
				<td>decimal(3,1)</td>
			</tr>
	        <tr>
                <th scope="row">percent_of_working_children_industry</th>
                <td>Percent of working children in industry</td>
                <td>decimal</td>
            </tr>
	        <tr>
                <th scope="row">percent_of_working_children_services</th>
                <td>Percent of working children in services</td>
                <td>decimal</td>
            </tr>
			<tr>
				<th scope="row">age_range_of_children_attending_school</th>
				<td>Age range of children attending school</td>
				<td>varchar</td>
			</tr>
            <tr>
                <th scope="row">percentage_of_children_attending_school</th>
                <td>Percent of children attending school</td>
                <td>decimal</td>
            </tr>
			<tr>
                <th scope="row">age_range_of_children_working_and_studying</th>
                <td>Age range of children working and studying</td>
                <td>varchar</td>
            </tr>
            <tr>
                <th scope="row">percent_of_children_working_and_studying</th>
                <td>Percent of children working and studying</td>
                <td>decimal</td>
            </tr>
            <tr>
                <th scope="row">primary_completion_rate</th>
                <td>Percent of children who complete primary education</td>
                <td>decimal</td>
            </tr>
        </tbody>
        </table>
    
    <h3 id="conventions" >Conventions Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/SweatToilAll_Conventions</p>
    </div>
    <table summary="ILAB - Country Master Data">
        <caption>SweatToilAll_Conventions</caption>
        <thead>
        <tr>
            <th scope="col">Column Name</th>
            <th scope="col">Column Description</th>
            <th scope="col">Data Type</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">id</th>
            <td>Unique Identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">assessment_id</th>
            <td>Assessment Identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">year</th>
            <td>Assessment Year</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">country_id</th>
            <td>Country Identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">country</th>
            <td>Country name</td>
            <td>varchar</td>
        </tr>
        
            <tr>
				<th scope="row">c_138_ratified</th>
				<td>Status of country ratification of ILO Convention 138</td>
				<td>varchar</td>
			</tr>
			<tr>
                <th scope="row">c_182_ratified</th>
                <td>Status of country ratification of ILO Convention 182</td>
                <td>varchar</td>
            </tr>
            <tr>
                <th scope="row">crc_ratified</th>
                <td>Status of country ratification of the UN Convention on the Rights of the Child</td>
                <td>varchar</td>
            </tr>
            <tr>
                <th scope="row">crc_csec_ratified</th>
                <td>Status of country ratification of the Optional Protocol to the Convention on
                 the Rights of the Child on the Sale of Children, Child Prostitution and Child Pornography</td>
                <td>varchar</td>
            </tr>
            <tr>
                <th scope="row">crc_ac_ratified</th>
                <td>Status of country ratification of the Optional Protocol to the Convention on the Rights
                 of the Child on the Involvement of Children in Armed Conflict</td>
                <td>varchar</td>
            </tr>
            <tr>
				<th scope="row">palermo_ratified</th>
				<td>Status of country ratification of the Protocol to Prevent, Suppress and Punish Trafficking in 
                    Persons, Especially Women and Children, supplementing the United Nations Convention Against
                    Transnational Organized Crime (Palermo Protocol)</td>
				<td>varchar</td>
			</tr>
		</tbody>
	</table>


  

    <h3 id="suggested_actions" tabindex="-1">Suggested Actions Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToilAll_SuggestedActions</p>
    </div>
    <table summary="ILAB - Suggested Actions">
        <caption>SweatToilAll_SuggestedActions</caption>

        <thead>
        <tr>
            <th scope="col">Column Name</th>
            <th scope="col">Column Description</th>
            <th scope="col">Data Type</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">id</th>
            <td>Unique identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">assessment_id</th>
            <td>Assessment identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">year</th>
            <td>Years suggested</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">country_id</th>
            <td>Country identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">country</th>
            <td>Country name</td>
            <td>varchar</td>
        </tr>
        <tr>
            <th scope="row">area</th>
            <td>Suggested action area</td>
            <td>varchar</td>
        </tr>
        <tr>
            <th scope="row">action</th>
            <td>Suggested action</td>
            <td>text</td>
        </tr>
        </tbody>
    </table>

  <h3 id="legal_standards" tabindex="-1">Legal Standards Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToilAll_LegalStandards</p>
    </div>
    <table summary="ILAB - Legal Standards">
        <caption>SweatToilAll_LegalStandards</caption>

        <thead>
        <tr>
            <th scope="col">Column Name</th>
            <th scope="col">Column Description</th>
            <th scope="col">Data Type</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">id</th>
            <td>Unique identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">assessment_id</th>
            <td>Assessment identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">year</th>
            <td>Assessment year</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">country_id</th>
            <td>Country identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">country</th>
            <td>Country name</td>
            <td>varchar</td>
        </tr>
        <tr>
            <th scope="row">name</th>
            <td>Name of legal standard</td>
            <td>varchar</td>
        </tr>
        <tr>
            <th scope="row">standard</th>
            <td>Legal standard value</td>
            <td>varchar</td>
        </tr>
        <tr>
            <th scope="row">is_calculated_age</th>
            <td>Identifies age calculated based on available information</td>
            <td>boolean</td>
        </tr>
        <tr>
            <th scope="row">conforms_standard</th>
            <td>Identifies there are gaps in the legal framework, as articulated in the chapter report</td>
            <td>boolean</td>
        </tr>
        </tbody>
    </table>


  <h3 id="enforcements" tabindex="-1">Enforcements Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToilAll_Enforcements</p>
    </div>
    <table summary="ILAB - Enforcements">
        <caption>SweatToilAll_Enforcements</caption>

        <thead>
        <tr>
            <th scope="col">Column Name</th>
            <th scope="col">Column Description</th>
            <th scope="col">Data Type</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">id</th>
            <td>Unique identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">assessment_id</th>
            <td>Assessment identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">year</th>
            <td>Assessment year</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">country_id</th>
            <td>Country identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">country</th>
            <td>Country name</td>
            <td>varchar</td>
        </tr>
        <tr>
            <th scope="row">type</th>
            <td>Enforcement type</td>
            <td>varchar</td>
        </tr>
        <tr>
            <th scope="row">name</th>
            <td>Name of enforcement</td>
            <td>varchar</td>
        </tr>
        <tr>
            <th scope="row">enforcement</th>
            <td>Enforcement value</td>
            <td>varchar</td>
        </tr>
        </tbody>
    </table>

  <h3 id="mechanisms" tabindex="-1">Mechanisms Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToil_Mechanisms</p>
    </div>
    <table summary="ILAB - Mechanisms">
        <caption>SweatToil_Mechanisms</caption>

        <thead>
        <tr>
            <th scope="col">Column Name</th>
            <th scope="col">Column Description</th>
            <th scope="col">Data Type</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">id</th>
            <td>Unique identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">assessment_id</th>
            <td>Assessment identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">year</th>
            <td>Assessment year</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">country_id</th>
            <td>Country identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">country</th>
            <td>Country name</td>
            <td>varchar</td>
        </tr>
        <tr>
            <th scope="row">coordination</th>
            <td>Country has coordination mechanism</td>
            <td>varchar</td>
        </tr>
        <tr>
            <th scope="row">program</th>
            <td>Country has program mechanism</td>
            <td>varchar</td>
        </tr>
        <tr>
            <th scope="row">policy</th>
            <td>Country has a policy mechanism</td>
            <td>varchar</td>
        </tr>
        </tbody>
    </table>
</div>

<!-- start mobile -->

<div class="mbl_tbl">

	<h3 id="region_mbl" tabindex="-1">Regions Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToilAll_Regions</p>
    </div>
	<h4>SweatToilAll_Regions</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: id</p>
		<p><span class="mbl-strng">Column Description:</span> Unique region identifier</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: name</p>
		<p><span class="mbl-strng">Column Description:</span> Region name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar</p>
	</div>



	<hr />
    <h3 id="country_mbl" tabindex="-1">Countries Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToilAll_Countries</p>
    </div>
    <h4>SweatToilAll_Countries</h4>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: id</p>
        <p><span class="mbl-strng">Column Description:</span> Unique country identifier</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: name</p>
        <p><span class="mbl-strng">Column Description:</span> Country name</p>
        <p><span class="mbl-strng">Data Type:</span> varchar</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: region_id</p>
        <p><span class="mbl-strng">Column Description:</span> Unique region identifier</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: region</p>
        <p><span class="mbl-strng">Column Description:</span> Region name</p>
        <p><span class="mbl-strng">Data Type:</span> varchar</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: num_territories</p>
        <p><span class="mbl-strng">Number of territories within country</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>


	<hr />
    <h3 id="territory_mbl" tabindex="-1">Territories Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToilAll_Territories</p>
    </div>
    <h4>SweatToilAll_Territories</h4>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: id</p>
        <p><span class="mbl-strng">Column Description:</span> Unique identifier</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: name</p>
        <p><span class="mbl-strng">Column Description:</span> Country name</p>
        <p><span class="mbl-strng">Data Type:</span> varchar</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: abbreviation</p>
        <p><span class="mbl-strng">Column Description:</span> Territory Abbreviation</p>
        <p><span class="mbl-strng">Data Type:</span> varchar</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: country_id</p>
        <p><span class="mbl-strng">Column Description:</span> Country identifier</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: country</p>
        <p><span class="mbl-strng">Column Description:</span> Country name</p>
        <p><span class="mbl-strng">Data Type:</span> varchar</p>
    </div>



    <hr />
    <h3 id="advancement_level_mbl" tabindex="-1">Advancement Level</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToilAll_AdvancementLevels</p>
    </div>
    <h4>SweatToilAll_AdvancementLevels</h4>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: id</p>
        <p><span class="mbl-strng">Column Description:</span> Unique advancement level identifier</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: name</p>
        <p><span class="mbl-strng">Column Description:</span> Advancement level (Significant, Moderate, Minimal, or No Advancement, etc.)</p>
        <p><span class="mbl-strng">Data Type:</span> varchar</p>
    </div>


    <hr />
	<h3 id="assessments_mbl" tabindex="-1">Assessments Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToilAll_Assessments</p>
    </div>
    <h4>SweatToilAll_Assessments</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: id</p>
		<p><span class="mbl-strng">Column Description:</span> Unique identifier</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
        <p class="mbl-strng">Column Name: country_id</p>
        <p><span class="mbl-strng">Column Description:</span> Unique country identifier</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: country_name</p>
        <p><span class="mbl-strng">Column Description:</span> Country name</p>
        <p><span class="mbl-strng">Data Type:</span> varchar</p>
    </div>
	<div class="even_row">
        <p class="mbl-strng">Column Name: year</p>
        <p><span class="mbl-strng">Column Description:</span> Year</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: advancement_level_id</p>
        <p><span class="mbl-strng">Column Description:</span> Advancement level identifier</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: advancement_level</p>
        <p><span class="mbl-strng">Column Description:</span> Advancement level</p>
        <p><span class="mbl-strng">Data Type:</span> varchar</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: description</p>
        <p><span class="mbl-strng">Column Description:</span> Country assessment summary description</p>
        <p><span class="mbl-strng">Data Type:</span> text</p>
    </div>
    


    <hr />
    <h3 id="sector_mbl" tabindex="-1">Sectors Table</h3>
    <div class="force_wrap apiurl">
    <p>https://data.dol.gov/get/SweatToilAll_Sectors</p>
</div>
    <h4>SweatToilAll_Sectors</h4>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: id</p>
        <p><span class="mbl-strng">Column Description:</span> Unique sector identifier</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: name</p>
        <p><span class="mbl-strng">Column Description:</span> Sector name</p>
        <p><span class="mbl-strng">Data Type:</span> varchar</p>
    </div>



    <hr />
    <h3 id="good_mbl" tabindex="-1">Goods Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToilAll_Goods</p>
    </div>
    <h4>SweatToilAll_Goods</h4>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: id</p>
        <p><span class="mbl-strng">Column Description:</span> Unique good identifier</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: sector_id</p>
        <p><span class="mbl-strng">Column Description:</span> Sector identifier</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: sector</p>
        <p><span class="mbl-strng">Column Description:</span> Sector name</p>
        <p><span class="mbl-strng">Data Type:</span> varchar</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: name</p>
        <p><span class="mbl-strng">Column Description:</span> Name of good</p>
        <p><span class="mbl-strng">Data Type:</span> varchar</p>
    </div>

<hr />
<h3 id="country_goods_mbl" tabindex="-1">Country Goods Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToilAll_CountryGoods</p>
    </div>
    <h4>SweatToilAll_CountryGoods</h4>
<div class="odd_row">
    <p class="mbl-strng">Column Name: id</p>
    <p><span class="mbl-strng">Column Description:</span> Unique  identifier</p>
    <p><span class="mbl-strng">Data Type:</span> int</p>
</div>
<div class="even_row">
    <p class="mbl-strng">Column Name: assessment_id</p>
    <p><span class="mbl-strng">Column Description:</span> Assessment  identifier</p>
    <p><span class="mbl-strng">Data Type:</span> int</p>
</div>
<div class="odd_row">
    <p class="mbl-strng">Column Name: year</p>
    <p><span class="mbl-strng">Column Description:</span> Assessment year</p>
    <p><span class="mbl-strng">Data Type:</span> int</p>
</div>
<div class="even_row">
    <p class="mbl-strng">Column Name: country_id</p>
    <p><span class="mbl-strng">Column Description:</span> Country  identifier</p>
    <p><span class="mbl-strng">Data Type:</span> int</p>
</div>
<div class="odd_row">
    <p class="mbl-strng">Column Name: country</p>
    <p><span class="mbl-strng">Column Description:</span> Country name</p>
    <p><span class="mbl-strng">Data Type:</span> varchar</p>
</div>
<div class="even_row">
    <p class="mbl-strng">Column Name: good_id</p>
    <p><span class="mbl-strng">Column Description:</span> Good identifier</p>
    <p><span class="mbl-strng">Data Type:</span> int</p>
</div>
<div class="odd_row">
    <p class="mbl-strng">Column Name: good</p>
    <p><span class="mbl-strng">Column Description:</span> Good name</p>
    <p><span class="mbl-strng">Data Type:</span> varchar</p>
</div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: child_labor</p>
        <p><span class="mbl-strng">Column Description:</span> Goods produced by child labor</p>
        <p><span class="mbl-strng">Data Type:</span> boolean</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: forced_labor</p>
        <p><span class="mbl-strng">Column Description:</span> Goods produced by forced labor</p>
        <p><span class="mbl-strng">Data Type:</span> boolean</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: forced_child_labor</p>
        <p><span class="mbl-strng">Column Description:</span> Goods produced by forced child labor</p>
        <p><span class="mbl-strng">Data Type:</span> boolean</p>
    </div>

    
    
    
<hr />
<h3 id="country_statistics_mbl" tabindex="-1">Statistics Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/SweatToilAll_Statistics</p>
    </div>
<h4>SweatToilAll_Statistics</h4>
<div class="odd_row">
    <p class="mbl-strng">Column Name: id</p>
    <p><span class="mbl-strng">Column Description:</span> Unique Identifier</p>
    <p><span class="mbl-strng">Data Type:</span> int</p>
</div>
<div class="even_row">
    <p class="mbl-strng">Column Name: assessment_id</p>
    <p><span class="mbl-strng">Column Description:</span> Assessment Identifier</p>
    <p><span class="mbl-strng">Data Type:</span> int</p>
</div>
<div class="odd_row">
    <p class="mbl-strng">Column Name: year</p>
    <p><span class="mbl-strng">Column Description:</span> Year</p>
    <p><span class="mbl-strng">Data Type:</span> int</p>
</div>
<div class="even_row">
    <p class="mbl-strng">Column Name: country_id</p>
    <p><span class="mbl-strng">Column Description:</span> Country Identifier</p>
    <p><span class="mbl-strng">Data Type:</span> int</p>
</div>
<div class="odd_row">
    <p class="mbl-strng">Column Name: country</p>
    <p><span class="mbl-strng">Column Description:</span> Country name</p>
    <p><span class="mbl-strng">Data Type:</span> varchar</p>
</div>
<div class="even_row">
    <p class="mbl-strng">Column Name: age_range_of_working_children</p>
    <p><span class="mbl-strng">Column Description:</span> Age range of working children</p>
    <p><span class="mbl-strng">Data Type:</span> varchar</p>
</div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: percent_of_working_children</p>
        <p><span class="mbl-strng">Column Description:</span> Percent of working children	</p>
        <p><span class="mbl-strng">Data Type:</span> decimal</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: population_of_working_children</p>
        <p><span class="mbl-strng">Column Description:</span> Population of working children</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: percent_of_working_children_agriculture</p>
        <p><span class="mbl-strng">Column Description:</span> Percent of working children in agriculture</p>
        <p><span class="mbl-strng">Data Type:</span> decimal</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: percent_of_working_children_industry</p>
        <p><span class="mbl-strng">Column Description:</span> Percent of working children in industry</p>
        <p><span class="mbl-strng">Data Type:</span> decimal</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: percent_of_working_children_services</p>
        <p><span class="mbl-strng">Column Description:</span> Percent of working children in services</p>
        <p><span class="mbl-strng">Data Type:</span> decimal</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: age_range_of_children_attending_school</p>
        <p><span class="mbl-strng">Column Description:</span> Age range of children attending school</p>
        <p><span class="mbl-strng">Data Type:</span> varchar</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: percentage_of_children_attending_school</p>
        <p><span class="mbl-strng">Column Description:</span> Percent of children attending school</p>
        <p><span class="mbl-strng">Data Type:</span> decimal</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: age_range_of_children_working_and_studying</p>
        <p><span class="mbl-strng">Column Description:</span> Age range of children working and studying</p>
        <p><span class="mbl-strng">Data Type:</span> varchar</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: percent_of_children_working_and_studying</p>
        <p><span class="mbl-strng">Column Description:</span> Percent of children working and studying</p>
        <p><span class="mbl-strng">Data Type:</span> decimal</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: primary_completion_rate</p>
        <p><span class="mbl-strng">Column Description:</span> Percent of children who complete primary education</p>
        <p><span class="mbl-strng">Data Type:</span> decimal</p>
    </div>
    
    
    
    <hr />
    <h3 id="conventions_mbl" tabindex="-1">Conventions Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/SweatToilAll_Conventions</p>
    </div>
    <h4>SweatToilAll_Conventions</h4>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: id</p>
        <p><span class="mbl-strng">Column Description:</span> Unique Identifier	</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: assessment_id</p>
        <p><span class="mbl-strng">Column Description:</span> Assessment Identifier	</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: year</p>
        <p><span class="mbl-strng">Column Description:</span> Year	</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: country_id</p>
        <p><span class="mbl-strng">Column Description:</span> Country Identifier	</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: country</p>
        <p><span class="mbl-strng">Column Description:</span> Country	</p>
        <p><span class="mbl-strng">Data Type:</span> varchar</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: c_138_ratified</p>
        <p><span class="mbl-strng">Column Description:</span> Status of country ratification of ILO Convention 138	</p>
        <p><span class="mbl-strng">Data Type:</span> varchar</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: c_182_ratified</p>
        <p><span class="mbl-strng">Column Description:</span> Status of country ratification of ILO Convention 182	</p>
        <p><span class="mbl-strng">Data Type:</span> varchar</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: crc_ratified</p>
        <p><span class="mbl-strng">Column Description:</span> Status of country ratification of the UN Convention on 
            the Rights of the Child	</p>
        <p><span class="mbl-strng">Data Type:</span> varchar</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: crc_csec_ratified</p>
        <p><span class="mbl-strng">Column Description:</span> Status of country ratification of the Optional Protocol 
            to the Convention on the Rights of the Child on the Sale of Children, Child Prostitution and Child Pornography	</p>
        <p><span class="mbl-strng">Data Type:</span> varchar</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: crc_ac_ratified</p>
        <p><span class="mbl-strng">Column Description:</span> Status of country ratification of the Optional Protocol
            to the Convention on the Rights of the Child on the Involvement of Children in Armed Conflict	</p>
        <p><span class="mbl-strng">Data Type:</span> varchar</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: palermo_ratified</p>
        <p><span class="mbl-strng">Column Description:</span> Status of country ratification of the Protocol to Prevent,
            Suppress and Punish Trafficking in Persons, Especially Women and Children, supplementing the
            United Nations Convention Against Transnational Organized Crime (Palermo Protocol)	</p>
        <p><span class="mbl-strng">Data Type:</span> varchar</p>
    </div>

    
    


    
    
    <hr />
    <h3 id="suggested_actions_mbl" tabindex="-1">Suggested Actions Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToilAll_SuggestedActions</p>
    </div>
    <h4>SweatToilAll_SuggestedActions</h4>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: id</p>
        <p><span class="mbl-strng">Column Description:</span> Unique identifier</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: assessment_id</p>
        <p><span class="mbl-strng">Column Description:</span> Assessment identifier</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: year</p>
        <p><span class="mbl-strng">Column Description:</span> Year</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: country_id</p>
        <p><span class="mbl-strng">Column Description:</span> Country identifier</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: country</p>
        <p><span class="mbl-strng">Column Description:</span> Country name</p>
        <p><span class="mbl-strng">Data Type:</span> varchar</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: area</p>
        <p><span class="mbl-strng">Column Description:</span> Suggested action area</p>
        <p><span class="mbl-strng">Data Type:</span> varchar</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: action</p>
        <p><span class="mbl-strng">Column Description:</span> Suggested action</p>
        <p><span class="mbl-strng">Data Type:</span> text</p>
    </div>

    
    <hr />
    <h3 id="legal_standards_mbl" tabindex="-1">Legal Standards Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToilAll_LegalStandards</p>
    </div>
    <h4>SweatToilAll_LegalStandards</h4>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: id</p>
        <p><span class="mbl-strng">Column Description:</span> Unique identifier</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: assessment_id</p>
        <p><span class="mbl-strng">Column Description:</span> Assessment identifier</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: year</p>
        <p><span class="mbl-strng">Column Description:</span> Year</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: country_id</p>
        <p><span class="mbl-strng">Column Description:</span> Country identifier</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: country</p>
        <p><span class="mbl-strng">Column Description:</span> Country name</p>
        <p><span class="mbl-strng">Data Type:</span> varchar</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: name</p>
        <p><span class="mbl-strng">Column Description:</span> Name of legal standard</p>
        <p><span class="mbl-strng">Data Type:</span> varchar</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: standard</p>
        <p><span class="mbl-strng">Column Description:</span> Legal standard value</p>
        <p><span class="mbl-strng">Data Type:</span> varchar</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: is_calculated_age</p>
        <p><span class="mbl-strng">Column Description:</span> Identifies age calculated based on available information</p>
        <p><span class="mbl-strng">Data Type:</span> boolean</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: conforms_standard</p>
        <p><span class="mbl-strng">Column Description:</span> Identifies there are gaps in the legal framework, as articulated in the chapter report</p>
        <p><span class="mbl-strng">Data Type:</span> boolean</p>
    </div>

    
    <hr />
    <h3 id="enforcements_mbl" tabindex="-1">Enforcements Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToilAll_Enforcements</p>
    </div>
    <h4>SweatToilAll_Enforcements</h4>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: id</p>
        <p><span class="mbl-strng">Column Description:</span> Unique identifier</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: assessment_id</p>
        <p><span class="mbl-strng">Column Description:</span> Assessment identifier</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: year</p>
        <p><span class="mbl-strng">Column Description:</span> Year</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: country_id</p>
        <p><span class="mbl-strng">Column Description:</span> Country identifier</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: country</p>
        <p><span class="mbl-strng">Column Description:</span> Country name</p>
        <p><span class="mbl-strng">Data Type:</span> varchar</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: type</p>
        <p><span class="mbl-strng">Column Description:</span> Enforcement type</p>
        <p><span class="mbl-strng">Data Type:</span> varchar</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: name</p>
        <p><span class="mbl-strng">Column Description:</span> Name of enforcement</p>
        <p><span class="mbl-strng">Data Type:</span> varchar</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: enforcement</p>
        <p><span class="mbl-strng">Column Description:</span> Enforcement value</p>
        <p><span class="mbl-strng">Data Type:</span> varchar</p>
    </div>
   
    <hr />
    <h3 id="mechanisms_mbl" tabindex="-1">Mechanisms Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/SweatToil_Mechanisms</p>
    </div>
    <h4>SweatToil_Mechanisms</h4>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: id</p>
        <p><span class="mbl-strng">Column Description:</span> Unique identifier</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: assessment_id</p>
        <p><span class="mbl-strng">Column Description:</span> Assessment identifier</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: year</p>
        <p><span class="mbl-strng">Column Description:</span> Year</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: country_id</p>
        <p><span class="mbl-strng">Column Description:</span> Country identifier</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: country</p>
        <p><span class="mbl-strng">Column Description:</span> Country name</p>
        <p><span class="mbl-strng">Data Type:</span> varchar</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: coordinatin</p>
        <p><span class="mbl-strng">Column Description:</span> Country has coordination mechanism</p>
        <p><span class="mbl-strng">Data Type:</span> varchar</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: program</p>
        <p><span class="mbl-strng">Column Description:</span> Country has program mechanism</p>
        <p><span class="mbl-strng">Data Type:</span> varchar</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: policy</p>
        <p><span class="mbl-strng">Column Description:</span> Country has a policy mechanism</p>
        <p><span class="mbl-strng">Data Type:</span> varchar</p>
    </div>

</div>
