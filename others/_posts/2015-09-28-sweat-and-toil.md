---
layout: post
title: Sweat & Toil
description: These datasets contain information on child labor and forced labor worldwide from ILAB’s three flagship reports and its Sweat and Toil app. There are 11 tables that contain data from the 2014 reporting cycle. 
---

These datasets contain information on child labor and forced labor worldwide from ILAB’s three flagship 
reports: <i>Findings on the Worst Forms of Child Labor</i>; <i>List of Goods Produced by Child Labor or Forced Labor</i>
; and <i>List of Products Produced by Forced or Indentured Child Labor</i>. There are 11 tables that contain data 
from the 2014 reporting cycle. This information is also available in ILAB’s new app, Sweat & Toil: Child Labor, 
Forced Labor, and Human Trafficking Around the World. For more information, see ILAB’s <a href="http://www.dol.gov/ilab/reports/child-labor/">International Child Labor and 
Forced Labor Reports page</a>.

<h2>Dataset Tables</h2>

<div class="dsktp_tbl">
    <ul>
        <li><a href="#region">childlabor_reg</a></li>
        <li><a href="#country">childlabor_cty</a></li>
        <li><a href="#advancement_level">childlabor_advlvl</a></li>
        <li><a href="#countrypro">childlabor_pro</a></li>
        <li><a href="#sector">childlabor_sec</a></li>
        <li><a href="#good">childlabor_goo</a></li>
        <li><a href="#country_goods">childlabor_cty_goo</a></li>
        <li><a href="#country_statistics">childlabor_sta</a></li>
        <li><a href="#country_master">childlabor_mas</a></li>
        <li><a href="#actionarea">childlabor_actionarea</a></li>
        <li><a href="#action">childlabor_action</a></li>
    </ul>
</div>

<div class="mbl_tbl">
    <ul>
        <li><a href="#region_mbl">childlabor_reg</a></li>
        <li><a href="#country_mbl">childlabor_cty</a></li>
        <li><a href="#advancement_level_mbl">childlabor_advlvl</a></li>
        <li><a href="#countrypro_mbl">childlabor_pro</a></li>
        <li><a href="#sector_mbl">childlabor_sec</a></li>
        <li><a href="#good_mbl">childlabor_goo</a></li>
        <li><a href="#country_goods_mbl">childlabor_cty_goo</a></li>
        <li><a href="#country_statistics_mbl">childlabor_sta</a></li>
        <li><a href="#country_master_mbl">childlabor_mas</a></li>
        <li><a href="#actionarea_mbl">childlabor_actionarea</a></li>
        <li><a href="#action_mbl">childlabor_action</a></li>
    </ul>
</div>

<div class="dsktp_tbl">

    <h3 id="region" tabindex="-1">Region Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/childlabor_reg</p>
    </div>
    <table summary="ILAB - region">
        <caption>childlabor_reg</caption>

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
                <td>varchar(30)</td>
            </tr>
        </tbody>
    </table>

    <h3 id="country" tabindex="-1">Country Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/childlabor_cty</p>
    </div>
    <table summary="ILAB - Country">
        <caption>childlabor_cty</caption>

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
            <td>varchar(80)</td>
        </tr>
        
        <tr>
            <th scope="row">region_id</th>
            <td>Unique Region Identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">iso2</th>
            <td>Two-letter country code established by the International Organization for Standardization</td>
            <td>varchar(2)</td>
        </tr>
        <tr>
            <th scope="row">iso3</th>
            <td>Three-letter country code established by the International Organization for Standardization</td>
            <td>varchar(3)</td>
        </tr>
        </tbody>
    </table>

    <h3 id="advancement_level" tabindex="-1">Advancement Level Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/childlabor_advlvl</p>
    </div>
    <table summary="ILAB - Advancement Level">
        <caption>childlabor_advlvl</caption>

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
            <th scope="row">advancement_name</th>
            <td>Advancement level (Significant, Moderate, Minimal, or No Advancement, or No Assessment)</td>
            <td>varchar(45)</td>
        </tr>
        </tbody>
    </table>

    <h3 id="countrypro" tabindex="-1">Country Profile Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/childlabor_pro</p>
    </div>
    <table summary="ILAB - Country Profile">
        <caption>childlabor_pro</caption>

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
            <td>Unique country profile identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">country_id</th>
            <td>Unique country identifier</td>
            <td>int</td>
        </tr>
        
        <tr>
            <th scope="row">profile_year</th>
            <td>Year of country profile</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">advancement_id</th>
            <td>Unique advancement level identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">description</th>
            <td>Country profile summary description</td>
            <td>text</td>
        </tr>
        </tbody>
    </table>

    <h3 id="sector" tabindex="-1">Sector Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/childlabor_sec</p>
    </div>
    <table summary="ILAB - Sector">
        <caption>childlabor_sec</caption>
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
            <td>Sector name of good (Agriculture, Manufacturing, Mining, and Other)</td>
            <td>varchar(15)</td>
        </tr>
        </tbody>
    </table>

    <h3 id="good" tabindex="-1">Good Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/childlabor_goo</p>
    </div>
    <table summary="ILAB - Good">
        <caption>childlabor_goo</caption>

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
            <th scope="row">name</th>
            <td>Name of good</td>
            <td>varchar(35)</td>
        </tr>
        <tr>
            <th scope="row">sector_id</th>
            <td>Unique sector identifier</td>
            <td>int</td>
        </tr>
        </tbody>
    </table>

    <h3 id="country_goods" tabindex="-1">Country Goods Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/childlabor_cty_goo</p>
    </div>
    <table summary="ILAB - Country Goods">
        <caption>childlabor_cty_goo</caption>

        <thead>
        <tr>
            <th scope="col">Column Name</th>
            <th scope="col">Column Description</th>
            <th scope="col">Data Type</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">country_profile_id</th>
            <td>Unique country identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">good_id</th>
            <td>Unique good identifier</td>
            <td>int</td>
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
    
       
    
	<h3 id="country_statistics" >Country Statistics Table</h3>
	<div class="force_wrap apiurl">
    <p>https://data.dol.gov/childlabor_sta</p>
    </div>
	<table summary="ILAB - Country Statistics">
		<caption>childlabor_sta</caption>
		<thead>
			<tr>
				<th scope="col">Column Name</th>
				<th scope="col">Column Description</th>
				<th scope="col">Data Type</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th scope="row">country_profile_id</th>
				<td>Unique Country Identifier</td>
				<td>int</td>
			</tr>
            <tr>
                <th scope="row">cws_age_range</th>
                <td>Age range of working children</td>
                <td>varchar(5)</td>
            </tr>
			<tr>
				<th scope="row">cws_total_percentage_of_workin</th>
				<td>Percent of working children</td>
				<td>decimal(3,1)</td>
			</tr>
			<tr>
				<th scope="row">cws_total_working_population</th>
				<td>Population of working children</td>
				<td>int</td>
			</tr>
            <tr>
				<th scope="row">cws_agriculture</th>
				<td>Percent of working children in agriculture</td>
				<td>decimal(3,1)</td>
			</tr>
			<tr>
				<th scope="row">cws_services</th>
				<td>Percent of working children in services</td>
				<td>decimal(3,1)</td>
			</tr>
        <tr>
                <th scope="row">cws_industry</th>
                <td>Percent of working children in industry</td>
                <td>decimal(3,1)</td>
            </tr>
			<tr>
				<th scope="row">esas_year</th>
				<td>Year of school attendance data</td>
				<td>varchar(11)</td>
			</tr>
			<tr>
				<th scope="row">esas_age_range</th>
				<td>Age range of children attending school</td>
				<td>varchar(5)</td>
			</tr>
            <tr>
                <th scope="row">esas_percentage</th>
                <td>Percent of children attending school</td>
                <td>decimal(3,1)</td>
            </tr>
			<tr>
				<th scope="row">cwas_year</th>
				<td>Year of data on children working and studying </td>
				<td>varchar(11)</td>
			</tr>
			<tr>
                <th scope="row">cwas_age_range</th>
                <td>Age range of children working and studying</td>
                <td>varchar(5)</td>
            </tr>
            <tr>
                <th scope="row">cwas_total</th>
                <td>Percent of children working and studying</td>
                <td>decimal(3,1)</td>
            </tr>
            <tr>
                <th scope="row">upcr_year</th>
                <td>Year of data on primary completion rate</td>
                <td>year(4)</td>
            </tr>
            <tr>
                <th scope="row">upcr_rate</th>
                <td>Primary completion rate</td>
                <td>decimal(4,1)</td>
            </tr>
        </tbody>
        </table>
    
    <h3 id="country_master" >Country Master Data Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/childlabor_mas</p>
    </div>
    <table summary="ILAB - Country Master Data">
        <caption>childlabor_mas</caption>
        <thead>
        <tr>
            <th scope="col">Column Name</th>
            <th scope="col">Column Description</th>
            <th scope="col">Data Type</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">country_profile_id</th>
            <td>Unique Country Identifier</td>
            <td>int</td>
        </tr>
        
            <tr>
				<th scope="row">c_138_ratified</th>
				<td>Status of country ratification of ILO Convention 138</td>
				<td>varchar(8)</td>
			</tr>
			<tr>
                <th scope="row">c_182_ratified</th>
                <td>Status of country ratification of ILO Convention 182</td>
                <td>varchar(8)</td>
            </tr>
            <tr>
                <th scope="row">convention_on_the_rights_of_th</th>
                <td>Status of country ratification of the UN Convention on the Rights of the Child</td>
                <td>varchar(8)</td>
            </tr>
            <tr>
                <th scope="row">crc_commercial_sexual_exploita</th>
                <td>Status of country ratification of the Optional Protocol to the Convention on
                 the Rights of the Child on the Sale of Children, Child Prostitution and Child Pornography</td>
                <td>varchar(8)</td>
            </tr>
            <tr>
                <th scope="row">crc_armed_conflict_ratified</th>
                <td>Status of country ratification of the Optional Protocol to the Convention on the Rights
                 of the Child on the Involvement of Children in Armed Conflict</td>
                <td>varchar(8)</td>
            </tr>
            <tr>
				<th scope="row">palermo_ratified</th>
				<td>Status of country ratification of the Protocol to Prevent, Suppress and Punish Trafficking in 
                    Persons, Especially Women and Children, supplementing the United Nations Convention Against
                    Transnational Organized Crime (Palermo Protocol)</td>
				<td>varchar(8)</td>
			</tr>
			<tr>
                <th scope="row">minimum_age_for_work_establish</th>
                <td>Status of establishment of a legal minimum age for work</td>
                <td>varchar(8)</td>
            </tr>
            <tr>
                <th scope="row">minimum_age_for_work</th>
                <td>Legal minimum age for work</td>
                <td>varchar(8)</td>
            </tr>
            <tr>
                <th scope="row">minimum_age_for_hazardous_work_established</th>
                <td>Status of establishment of a legal minimum age for hazardous work</td>
                <td>varchar(8)</td>
            </tr>
            <tr>
                <th scope="row">minimum_age_for_hazardous_work</th>
                <td>Legal minimum age for hazardous work</td>
                <td>varchar(8)</td>
            </tr>
            <tr>
                <th scope="row">compulsory_education_age_estab</th>
                <td>Status of establishment of age for completion of compulsory education</td>
                <td>varchar(8)</td>
            </tr>
            <tr>
                <th scope="row">minimum_age_for_compulsory_edu</th>
                <td>Legal age for completion of compulsory education</td>
                <td>varchar(8)</td>
            </tr>
            <tr>
                <th scope="row">free_public_education_establis</th>
                <td>Status of establishment of free public education</td>
                <td>varchar(8)</td>
            </tr>

		</tbody>
	</table>


    <h3 id="actionarea" tabindex="-1">Country Suggested Actions Area Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/childlabor_actionarea</p>
    </div>
    <table summary="ILAB - Country Suggested Actions Area">
        <caption>childlabor_actionarea</caption>

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
            <td>Unique country suggested actions area identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">name</th>
            <td>Suggested action area name (Legal Framework, Enforcement, Coordination,
                Government Policies, and Social Programs)</td>
            <td>varchar(50)</td>
        </tr>
        </tbody>
    </table>

    <h3 id="action" tabindex="-1">Country Suggested Actions Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/childlabor_action</p>
    </div>
    <table summary="ILAB - Country Suggested Actions">
        <caption>childlabor_action</caption>

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
            <td>Unique country suggested actions identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">country_profile_id</th>
            <td>Unique country identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">area_id</th>
            <td>Unique country suggested actions area identifier</td>
            <td>int</td>
        </tr>
        <tr>
            <th scope="row">name</th>
            <td>Suggested action</td>
            <td>text</td>
        </tr>
        <tr>
            <th scope="row">year</th>
            <td>Years suggested</td>
            <td>varchar(15)</td>
        </tr>
        </tbody>
    </table>

</div>

<div class="mbl_tbl">

	<h3 id="region_mbl" tabindex="-1">Region Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/childlabor_reg</p>
    </div>
	<h4>childlabor_reg</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: id</p>
		<p><span class="mbl-strng">Column Description:</span> Unique region identifier</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
		<p class="mbl-strng">Column Name: name</p>
		<p><span class="mbl-strng">Column Description:</span> Region name</p>
		<p><span class="mbl-strng">Data Type:</span> varchar(30)</p>
	</div>



	<hr />
    <h3 id="country_mbl" tabindex="-1">Country Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/childlabor_cty</p>
    </div>
    <h4>childlabor_cty</h4>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: id</p>
        <p><span class="mbl-strng">Column Description:</span> Unique country identifier</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: name</p>
        <p><span class="mbl-strng">Column Description:</span> Country name</p>
        <p><span class="mbl-strng">Data Type:</span> varchar(80)</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: region_id</p>
        <p><span class="mbl-strng">Column Description:</span> Unique region identifier</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: iso2</p>
        <p><span class="mbl-strng">Column Description:</span> Two-letter country code established by the International Organization for Standardization</p>
        <p><span class="mbl-strng">Data Type:</span> varchar(2)</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: iso3</p>
        <p><span class="mbl-strng">Column Description:</span> Three-letter country code established by the International Organization for Standardization</p>
        <p><span class="mbl-strng">Data Type:</span> varchar(3)</p>
    </div>



    <hr />
    <h3 id="advancement_level_mbl" tabindex="-1">Advancement Level</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/childlabor_advlvl</p>
    </div>
    <h4>childlabor_advlvl</h4>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: id</p>
        <p><span class="mbl-strng">Column Description:</span> Unique advancement level identifier</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: advancement_name</p>
        <p><span class="mbl-strng">Column Description:</span> Advancement level (Significant, Moderate, Minimal, or No Advancement, or No Assessment)</p>
        <p><span class="mbl-strng">Data Type:</span> varchar(45)</p>
    </div>


    <hr />
	<h3 id="countrypro_mbl" tabindex="-1">Country Profile Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/childlabor_pro</p>
    </div>
    <h4>childlabor_pro</h4>
	<div class="odd_row">
		<p class="mbl-strng">Column Name: id</p>
		<p><span class="mbl-strng">Column Description:</span> Unique country profile identifier</p>
		<p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
	<div class="even_row">
        <p class="mbl-strng">Column Name: country_id</p>
        <p><span class="mbl-strng">Column Description:</span> Unique country identifier</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
	</div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: profile_year</p>
        <p><span class="mbl-strng">Column Description:</span> Year of country profile</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: advancement_id</p>
        <p><span class="mbl-strng">Column Description:</span> Unique advancement level identifier</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: description</p>
        <p><span class="mbl-strng">Column Description:</span> Country profile summary description</p>
        <p><span class="mbl-strng">Data Type:</span> text</p>
    </div>
    


    <hr />
    <h3 id="sector_mbl" tabindex="-1">Sector Table</h3>
    <div class="force_wrap apiurl">
    <p>https://data.dol.gov/get/childlabor_sec</p>
</div>
    <h4>childlabor_sec</h4>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: id</p>
        <p><span class="mbl-strng">Column Description:</span> Unique sector identifier</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: name</p>
        <p><span class="mbl-strng">Column Description:</span> Sector name of good (Agriculture, Manufacturing, Mining, and Other)</p>
        <p><span class="mbl-strng">Data Type:</span> varchar(15)</p>
    </div>



    <hr />
    <h3 id="good_mbl" tabindex="-1">Good Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/childlabor_goo</p>
    </div>
    <h4>childlabor_goo</h4>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: id</p>
        <p><span class="mbl-strng">Column Description:</span> Unique good identifier</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: name</p>
        <p><span class="mbl-strng">Column Description:</span> Name of good</p>
        <p><span class="mbl-strng">Data Type:</span> varchar(35)</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: sector_id</p>
        <p><span class="mbl-strng">Column Description:</span> Unique sector identifier</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>

<hr />
<h3 id="country_goods_mbl" tabindex="-1">Country Goods Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/childlabor_cty_goo</p>
    </div>
    <h4>childlabor_cty_goo</h4>
<div class="odd_row">
    <p class="mbl-strng">Column Name: country_profile_id</p>
    <p><span class="mbl-strng">Column Description:</span> Unique country identifier</p>
    <p><span class="mbl-strng">Data Type:</span> int</p>
</div>
<div class="even_row">
    <p class="mbl-strng">Column Name: good_id</p>
    <p><span class="mbl-strng">Column Description:</span> Unique good identifier</p>
    <p><span class="mbl-strng">Data Type:</span> int</p>
</div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: child_labor</p>
        <p><span class="mbl-strng">Column Description:</span> Goods produced by child labor</p>
        <p><span class="mbl-strng">Data Type:</span> boolean</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: forced_labor</p>
        <p><span class="mbl-strng">Column Description:</span> Goods produced by forced labor</p>
        <p><span class="mbl-strng">Data Type:</span> boolean</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: forced_child_labor</p>
        <p><span class="mbl-strng">Column Description:</span> Goods produced by forced child labor</p>
        <p><span class="mbl-strng">Data Type:</span> boolean</p>
    </div>

    
    
    
<hr />
<h3 id="country_statistics_mbl" tabindex="-1">Country Statistics Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/childlabor_sta</p>
    </div>
<h4>childlabor_sta</h4>
<div class="odd_row">
    <p class="mbl-strng">Column Name: country_profile_id</p>
    <p><span class="mbl-strng">Column Description:</span> Unique Country Identifier</p>
    <p><span class="mbl-strng">Data Type:</span> int</p>
</div>
<div class="even_row">
    <p class="mbl-strng">Column Name: cws_age_range</p>
    <p><span class="mbl-strng">Column Description:</span> Age range of working children</p>
    <p><span class="mbl-strng">Data Type:</span> varchar(5)</p>
</div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: cws_total_percentage_of_workin</p>
        <p><span class="mbl-strng">Column Description:</span> Percent of working children	</p>
        <p><span class="mbl-strng">Data Type:</span> decimal(3,1)</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: cws_total_working_population</p>
        <p><span class="mbl-strng">Column Description:</span> Population of working children</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: cws_agriculture</p>
        <p><span class="mbl-strng">Column Description:</span> Percent of working children in agriculture</p>
        <p><span class="mbl-strng">Data Type:</span> decimal(3,1)</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: cws_services</p>
        <p><span class="mbl-strng">Column Description:</span> Percent of working children in services</p>
        <p><span class="mbl-strng">Data Type:</span> decimal(3,1)</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: cws_industry</p>
        <p><span class="mbl-strng">Column Description:</span> Percent of working children in industry</p>
        <p><span class="mbl-strng">Data Type:</span> decimal(3,1)</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: esas_year</p>
        <p><span class="mbl-strng">Column Description:</span> Year of school attendance data</p>
        <p><span class="mbl-strng">Data Type:</span> varchar(11)</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: esas_age_range</p>
        <p><span class="mbl-strng">Column Description:</span> Age range of children attending school</p>
        <p><span class="mbl-strng">Data Type:</span> varchar(5)</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: esas_percentage</p>
        <p><span class="mbl-strng">Column Description:</span> Percent of children attending school</p>
        <p><span class="mbl-strng">Data Type:</span> decimal(3,1)</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: cwas_year</p>
        <p><span class="mbl-strng">Column Description:</span> Year of data on children working and studying	</p>
        <p><span class="mbl-strng">Data Type:</span> varchar(11)</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: cwas_age_range</p>
        <p><span class="mbl-strng">Column Description:</span> Age range of children working and studying</p>
        <p><span class="mbl-strng">Data Type:</span> varchar(5)</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: cwas_total</p>
        <p><span class="mbl-strng">Column Description:</span> Percent of children working and studying</p>
        <p><span class="mbl-strng">Data Type:</span> decimal(3,1)</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: upcr_year</p>
        <p><span class="mbl-strng">Column Description:</span> Year of data on primary completion rate</p>
        <p><span class="mbl-strng">Data Type:</span> year(4)</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: upcr_rate</p>
        <p><span class="mbl-strng">Column Description:</span> Primary completion rate</p>
        <p><span class="mbl-strng">Data Type:</span> decimal(4,1)</p>
    </div>
    
    
    
    <hr />
    <h3 id="country_master_mbl" tabindex="-1">Country Master Data Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/childlabor_mas</p>
    </div>
    <h4>childlabor_mas</h4>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: country_profile_id</p>
        <p><span class="mbl-strng">Column Description:</span> Unique Country Identifier	</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: c_138_ratified</p>
        <p><span class="mbl-strng">Column Description:</span> Status of country ratification of ILO Convention 138	</p>
        <p><span class="mbl-strng">Data Type:</span> varchar(8)</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: c_182_ratified</p>
        <p><span class="mbl-strng">Column Description:</span> Status of country ratification of ILO Convention 182	</p>
        <p><span class="mbl-strng">Data Type:</span> varchar(8)</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: convention_on_the_rights_of_th</p>
        <p><span class="mbl-strng">Column Description:</span> Status of country ratification of the UN Convention on 
            the Rights of the Child	</p>
        <p><span class="mbl-strng">Data Type:</span> varchar(8)</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: crc_commercial_sexual_exploita</p>
        <p><span class="mbl-strng">Column Description:</span> Status of country ratification of the Optional Protocol 
            to the Convention on the Rights of the Child on the Sale of Children, Child Prostitution and Child Pornography	</p>
        <p><span class="mbl-strng">Data Type:</span> varchar(8)</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: crc_armed_conflict_ratified</p>
        <p><span class="mbl-strng">Column Description:</span> Status of country ratification of the Optional Protocol
            to the Convention on the Rights of the Child on the Involvement of Children in Armed Conflict	</p>
        <p><span class="mbl-strng">Data Type:</span> varchar(8)</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: palermo_ratified</p>
        <p><span class="mbl-strng">Column Description:</span> Status of country ratification of the Protocol to Prevent,
            Suppress and Punish Trafficking in Persons, Especially Women and Children, supplementing the
            United Nations Convention Against Transnational Organized Crime (Palermo Protocol)	</p>
        <p><span class="mbl-strng">Data Type:</span> varchar(8)</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: minimum_age_for_work_establish</p>
        <p><span class="mbl-strng">Column Description:</span> Status of establishment of a legal minimum age for work	</p>
        <p><span class="mbl-strng">Data Type:</span> varchar(8)</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: minimum_age_for_work</p>
        <p><span class="mbl-strng">Column Description:</span> Legal minimum age for work	</p>
        <p><span class="mbl-strng">Data Type:</span> varchar(8)</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: minimum_age_for_hazardous_work_established</p>
        <p><span class="mbl-strng">Column Description:</span> Status of establishment of a legal minimum age for hazardous work	</p>
        <p><span class="mbl-strng">Data Type:</span> varchar(8)</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: minimum_age_for_hazardous_work</p>
        <p><span class="mbl-strng">Column Description:</span> Legal minimum age for hazardous work	</p>
        <p><span class="mbl-strng">Data Type:</span> varchar(8)</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: compulsory_education_age_estab</p>
        <p><span class="mbl-strng">Column Description:</span> Status of establishment of age for completion of compulsory education	</p>
        <p><span class="mbl-strng">Data Type:</span> varchar(8)</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: minimum_age_for_compulsory_edu</p>
        <p><span class="mbl-strng">Column Description:</span> Legal age for completion of compulsory education	</p>
        <p><span class="mbl-strng">Data Type:</span> varchar(8)</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: free_public_education_establis</p>
        <p><span class="mbl-strng">Column Description:</span> Status of establishment of free public education	</p>
        <p><span class="mbl-strng">Data Type:</span> varchar(8)</p>
    </div>

    
    
    
    <hr />
    <h3 id="actionarea_mbl" tabindex="-1">Country Suggested Actions Area Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/childlabor_actionarea</p>
    </div>
    <h4>childlabor_actionarea</h4>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: id</p>
        <p><span class="mbl-strng">Column Description:</span> Unique country suggested actions area identifier</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: name</p>
        <p><span class="mbl-strng">Column Description:</span> Suggested action area name (Legal Framework, Enforcement, Coordination,
            Government Policies, and Social Programs)</p>
        <p><span class="mbl-strng">Data Type:</span> varchar(50)</p>
    </div>


    
    
    <hr />
    <h3 id="action_mbl" tabindex="-1">Country Suggested Actions Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/childlabor_action</p>
    </div>
    <h4>childlabor_action</h4>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: id</p>
        <p><span class="mbl-strng">Column Description:</span> Unique country suggested actions identifier</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: country_profile_id</p>
        <p><span class="mbl-strng">Column Description:</span> Unique country identifier</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: area_id</p>
        <p><span class="mbl-strng">Column Description:</span> Unique country suggested actions area identifier</p>
        <p><span class="mbl-strng">Data Type:</span> int</p>
    </div>
    <div class="even_row">
        <p class="mbl-strng">Column Name: name</p>
        <p><span class="mbl-strng">Column Description:</span> Suggested action</p>
        <p><span class="mbl-strng">Data Type:</span> text</p>
    </div>
    <div class="odd_row">
        <p class="mbl-strng">Column Name: year</p>
        <p><span class="mbl-strng">Column Description:</span> Years suggested</p>
        <p><span class="mbl-strng">Data Type:</span> varchar(15)</p>
    </div>


</div>
