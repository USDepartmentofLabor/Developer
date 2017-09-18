---
layout: post
title: Sweat & Toil - 2014
description: These datasets contain information on child labor and forced labor worldwide from ILAB’s three flagship reports and its Sweat and Toil app. There are 11 tables that contain data from the 2014 reporting cycle. 
redirect_from: "/child-labor/"
---

<p><b>NOTICE:  This dataset is deprecated.</b> Because these tables are now included in the <a href="/others/sweat-and-toil-all">Sweat & Toil - All</a> dataset, this dataset will be disabled as of September 30, 2017. <br></p>

<p>These datasets contain information on child labor and forced labor worldwide from ILAB's three flagship 
reports: <i>Findings on the Worst Forms of Child Labor</i>; <i>List of Goods Produced by Child Labor or Forced Labor</i>
; and <i>List of Products Produced by Forced or Indentured Child Labor</i>. There are 11 tables that contain data 
from the 2014 reporting cycle. This information is also available in ILAB's new app, Sweat & Toil: Child Labor, 
Forced Labor, and Human Trafficking Around the World. For more information, see ILAB's <a href="http://www.dol.gov/ilab/reports/child-labor/">International Child Labor and 
Forced Labor Reports page</a>.
</p>

<h2>Dataset Tables</h2>

<div>
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

<div>
    <h3 id="region" tabindex="-1">Region Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/childlabor_reg</p>
    </div>
    <table class="accessible responsive" summary="ILAB - region">
        <caption>childlabor_reg</caption>
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
					varchar(30)
				</td>
                <td>
					<span class="small">Column Description</span>
					Region name
				</td>
            </tr>
        </tbody>
    </table>

    <h3 id="country" tabindex="-1">Country Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/childlabor_cty</p>
    </div>
    <table class="accessible responsive" summary="ILAB - Country">
        <caption>childlabor_cty</caption>
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
				varchar(80)
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
				iso2
			</th>
            <td>
				<span class="small">Data Type</span>
				varchar(2)
			</td>
            <td>
				<span class="small">Column Description</span>
				Two-letter country code established by the International Organization for Standardization
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				iso3
			</th>
            <td>
				<span class="small">Data Type</span>
				varchar(3)
			</td>
            <td>
				<span class="small">Column Description</span>
				Three-letter country code established by the International Organization for Standardization
			</td>
        </tr>
        </tbody>
    </table>

    <h3 id="advancement_level" tabindex="-1">Advancement Level Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/childlabor_advlvl</p>
    </div>
    <table class="accessible responsive" summary="ILAB - Advancement Level">
        <caption>childlabor_advlvl</caption>
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
				advancement_name
			</th>
            <td>
				<span class="small">Data Type</span>
				varchar(45)
			</td>
            <td>
				<span class="small">Column Description</span>
				Advancement level (Significant, Moderate, Minimal, or No Advancement, or No Assessment)
			</td>
        </tr>
        </tbody>
    </table>

    <h3 id="countrypro" tabindex="-1">Country Profile Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/childlabor_pro</p>
    </div>
    <table class="accessible responsive" summary="ILAB - Country Profile">
        <caption>childlabor_pro</caption>
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
				Unique country profile identifier
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
				profile_year
			</th>
            <td>
				<span class="small">Data Type</span>
				int
			</td>
            <td>
				<span class="small">Column Description</span>
				Year of country profile
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				advancement_id
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
				description
			</th>
            <td>
				<span class="small">Data Type</span>
				text
			</td>
            <td>
				<span class="small">Column Description</span>
				Country profile summary description
			</td>
        </tr>
        </tbody>
    </table>

    <h3 id="sector" tabindex="-1">Sector Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/childlabor_sec</p>
    </div>
    <table class="accessible responsive" summary="ILAB - Sector">
        <caption>childlabor_sec</caption>
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
				varchar(15)
			</td>
            <td>
				<span class="small">Column Description</span>
				Sector name of good (Agriculture, Manufacturing, Mining, and Other)
			</td>
        </tr>
        </tbody>
    </table>

    <h3 id="good" tabindex="-1">Good Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/childlabor_goo</p>
    </div>
    <table class="accessible responsive" summary="ILAB - Good">
        <caption>childlabor_goo</caption>
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
				name
			</th>
            <td>
				<span class="small">Data Type</span>
				varchar(35)
			</td>
            <td>
				<span class="small">Column Description</span>
				Name of good
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
        </tbody>
    </table>

    <h3 id="country_goods" tabindex="-1">Country Goods Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/childlabor_cty_goo</p>
    </div>
    <table class="accessible responsive" summary="ILAB - Country Goods">
        <caption>childlabor_cty_goo</caption>
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
				country_profile_id
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
				good_id
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

	<h3 id="country_statistics" >Country Statistics Table</h3>
	<div class="force_wrap apiurl">
    <p>https://data.dol.gov/childlabor_sta</p>
    </div>
	<table class="accessible responsive" summary="ILAB - Country Statistics">
		<caption>childlabor_sta</caption>
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
					country_profile_id
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Unique Country Identifier
				</td>
			</tr>
            <tr>
                <th scope="row">
					<span class="small">Column Name</span>
					cws_age_range
				</th>
                <td>
					<span class="small">Data Type</span>
					varchar(5)
				</td>
                <td>
					<span class="small">Column Description</span>
					Age range of working children
				</td>
            </tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					cws_total_percentage_of_workin
				</th>
				<td>
					<span class="small">Data Type</span>
					decimal(3,1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Percent of working children
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					cws_total_working_population
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
					cws_agriculture
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
					cws_services
				</th>
				<td>
					<span class="small">Data Type</span>
					decimal(3,1)
				</td>
				<td>
					<span class="small">Column Description</span>
					Percent of working children in services
				</td>
			</tr>
			<tr>
                <th scope="row">
					<span class="small">Column Name</span>
					cws_industry
				</th>
                <td>
					<span class="small">Data Type</span>
					decimal(3,1)
				</td>
                <td>
					<span class="small">Column Description</span>
					Percent of working children in industry
				</td>
            </tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					esas_year
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(11)
				</td>
				<td>
					<span class="small">Column Description</span>
					Year of school attendance data
				</td>
			</tr>
			<tr>
				<th scope="row">
					<span class="small">Column Name</span>
					esas_age_range
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(5)
				</td>
				<td>
					<span class="small">Column Description</span>
					Age range of children attending school
				</td>
			</tr>
            <tr>
                <th scope="row">
					<span class="small">Column Name</span>
					esas_percentage
				</th>
                <td>
					<span class="small">Data Type</span>
					decimal(3,1)
				</td>
                <td>
					<span class="small">Column Description</span>
					Percent of children attending school
				</td>
            </tr>
			<tr>
				<th scope="row">	
					<span class="small">Column Name</span>
					cwas_year
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(11)
				</td>
				<td>
					<span class="small">Column Description</span>
					Year of data on children working and studying
				</td>
			</tr>
			<tr>
                <th scope="row">
					<span class="small">Column Name</span>
					cwas_age_range
				</th>
                <td>
					<span class="small">Data Type</span>
					varchar(5)
				</td>
                <td>
					<span class="small">Column Description</span>
					Age range of children working and studying
				</td>
            </tr>
            <tr>
                <th scope="row">
					<span class="small">Column Name</span>
					cwas_total
				</th>
                <td>
					<span class="small">Data Type</span>
					decimal(3,1)
				</td>
                <td>
					<span class="small">Column Description</span>
					Percent of children working and studying
				</td>
            </tr>
            <tr>
                <th scope="row">
					<span class="small">Column Name</span>
					upcr_year
				</th>
                <td>
					<span class="small">Data Type</span>
					year(4)
				</td>
                <td>
					<span class="small">Column Description</span>
					Year of data on primary completion rate
				</td>
            </tr>
            <tr>
                <th scope="row">
					<span class="small">Column Name</span>
					upcr_rate
				</th>
                <td>
					<span class="small">Data Type</span>
					decimal(4,1)
				</td>
                <td>
					<span class="small">Column Description</span>
					Primary completion rate
				</td>
            </tr>
        </tbody>
        </table>
    
    <h3 id="country_master" >Country Master Data Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/childlabor_mas</p>
    </div>
    <table class="accessible responsive" summary="ILAB - Country Master Data">
        <caption>childlabor_mas</caption>
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
					country_profile_id
				</th>
				<td>
					<span class="small">Data Type</span>
					int
				</td>
				<td>
					<span class="small">Column Description</span>
					Unique Country Identifier
				</td>
			</tr>
            <tr>
				<th scope="row">
					<span class="small">Column Name</span>
					c_138_ratified
				</th>
				<td>
					<span class="small">Data Type</span>
					varchar(8)
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
					varchar(8)
				</td>
                <td>
					<span class="small">Column Description</span>
					Status of country ratification of ILO Convention 182
				</td>
            </tr>
            <tr>
                <th scope="row">
					<span class="small">Column Name</span>
					convention_on_the_rights_of_th
				</th>
                <td>
					<span class="small">Data Type</span>
					varchar(8)
				</td>
                <td>
					<span class="small">Column Description</span>
					Status of country ratification of the UN Convention on the Rights of the Child
				</td>
            </tr>
            <tr>
                <th scope="row">
					<span class="small">Column Name</span>
					crc_commercial_sexual_exploita
				</th>
                <td>
					<span class="small">Data Type</span>
					varchar(8)
				</td>
                <td>
					<span class="small">Column Description</span>
					Status of country ratification of the Optional Protocol to the Convention on the Rights of the Child on the Sale of Children, Child Prostitution and Child Pornography
				</td>
            </tr>
            <tr>
                <th scope="row">
					<span class="small">Column Name</span>
					crc_armed_conflict_ratified
				</th>
                <td>
					<span class="small">Data Type</span>
					varchar(8)
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
					varchar(8)
				</td>
				<td>
					<span class="small">Column Description</span>
					Status of country ratification of the Protocol to Prevent, Suppress and Punish Trafficking in Persons, Especially Women and Children, supplementing the United Nations Convention Against Transnational Organized Crime (Palermo Protocol)
				</td>
			</tr>
			<tr>
                <th scope="row">
					<span class="small">Column Name</span>
					minimum_age_for_work_establish
				</th>
                <td>
					<span class="small">Data Type</span>
					varchar(8)
				</td>
                <td>
					<span class="small">Column Description</span>
					Status of establishment of a legal minimum age for work
				</td>
            </tr>
            <tr>
                <th scope="row">
					<span class="small">Column Name</span>
					minimum_age_for_work
				</th>
                <td>
					<span class="small">Data Type</span>
					varchar(8)
				</td>
                <td>
					<span class="small">Column Description</span>
					Legal minimum age for work
				</td>
            </tr>
            <tr>
                <th scope="row">
					<span class="small">Column Name</span>
					minimum_age_for_hazardous_work_established
				</th>
                <td>
					<span class="small">Data Type</span>
					varchar(8)
				</td>
                <td>
					<span class="small">Column Description</span>
					Status of establishment of a legal minimum age for hazardous work
				</td>

            </tr>
            <tr>
                <th scope="row">
					<span class="small">Column Name</span>
					minimum_age_for_hazardous_work
				</th>
                <td>
					<span class="small">Data Type</span>
					varchar(8)
				</td>
                <td>
					<span class="small">Column Description</span>
					Legal minimum age for hazardous work
				</td>
            </tr>
            <tr>
                <th scope="row">
					<span class="small">Column Name</span>
					compulsory_education_age_estab
				</th>
                <td>
					<span class="small">Data Type</span>
					varchar(8)
				</td>
                <td>
					<span class="small">Column Description</span>
					Status of establishment of age for completion of compulsory education
				</td>
            </tr>
            <tr>
                <th scope="row">
					<span class="small">Column Name</span>
					minimum_age_for_compulsory_edu
				</th>
                <td>
					<span class="small">Data Type</span>
					varchar(8)
				</td>
                <td>
					<span class="small">Column Description</span>
					Legal age for completion of compulsory education
				</td>
            </tr>
            <tr>
                <th scope="row">
					<span class="small">Column Name</span>
					free_public_education_establis
				</th>
                <td>
					<span class="small">Data Type</span>
					varchar(8)
				</td>
                <td>
					<span class="small">Column Description</span>
					Status of establishment of free public education
				</td>
            </tr>
		</tbody>
	</table>

    <h3 id="actionarea" tabindex="-1">Country Suggested Actions Area Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/childlabor_actionarea</p>
    </div>
    <table class="accessible responsive" summary="ILAB - Country Suggested Actions Area">
        <caption>childlabor_actionarea</caption>
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
				Unique country suggested actions area identifier
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				name
			</th>
            <td>
				<span class="small">Data Type</span>
				varchar(50)
			</td>
            <td>
				<span class="small">Column Description</span>
				Suggested action area name (Legal Framework, Enforcement, Coordination, Government Policies, and Social Programs)
			</td>
        </tr>
        </tbody>
    </table>

    <h3 id="action" tabindex="-1">Country Suggested Actions Table</h3>
    <div class="force_wrap apiurl">
        <p>https://data.dol.gov/get/childlabor_action</p>
    </div>
    <table class="accessible responsive" summary="ILAB - Country Suggested Actions">
        <caption>childlabor_action</caption>
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
				Unique country suggested actions identifier
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				country_profile_id
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
				area_id
			</th>
            <td>
				<span class="small">Data Type</span>
				int
			</td>
            <td>
				<span class="small">Column Description</span>
				Unique country suggested actions area identifier
			</td>
        </tr>
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				name
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
        <tr>
            <th scope="row">
				<span class="small">Column Name</span>
				year
			</th>
            <td>
				<span class="small">Data Type</span>
				varchar(15)
			</td>
            <td>
				<span class="small">Column Description</span>
				Years suggested
			</td>
        </tr>
        </tbody>
    </table>
</div>