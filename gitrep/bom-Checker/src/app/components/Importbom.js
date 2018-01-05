import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Layout , Steps , Upload, Button, Menu, Dropdown, Icon, Table, Divider, Input } from 'antd';
import CommonHeader from "./Header"
import { NavLink } from 'react-router-dom'

export default class Importbom extends React.Component {
	render(){
		return(
			<div>
			<CommonHeader/>
				<div className="steps">
					<div className="step-item-cover">
						<div className="steps-item">
							<div className="steps-small">
								<span className="steps-icon">1</span>
							</div>
							<div className="steps-item-content">
								<div className="steps-item-title">Select vendor</div>
							</div>
						</div>
						<div className="steps-item">
							<div className="steps-small steps-item-process">
								<span className="steps-icon">2</span>
							</div>
							<div className="steps-item-content">
								<div className="steps-item-title item-content-process">Provide BOM</div>
							</div>
						</div>
						<div className="steps-item">
							<div className="steps-small">
								<span className="steps-icon">3</span>
							</div>
							<div className="steps-item-content">
								<div className="steps-item-title">Validate BOM</div>
							</div>
						</div>
					</div>
				</div>
				<div className="import-table-content">
					<div className="import-table-content-all">
						<div className="import-table-content-txt">
							Components<span className="import-table-txt-add-comp"><a><Icon type="plus" />Add Components</a></span>
						</div>
						<table id="bom-report">
							<tbody>
								<tr>
									<th className="bom-col-sku">SKU</th>
									<th className="bom-col-description">Description</th>
									<th className="bom-col-quanity">Quanity</th>
									<th className="bom-col-action th-last-cl">Action</th>
								</tr>
								<tr>
									<td><Input placeholder="SKU"/></td>
									<td><Input placeholder="Description"/></td>
									<td><Input className="number-right-align" placeholder="Quanity"/></td>
									<td><a>Delete</a></td>
								</tr>
								<tr>
									<td><Input placeholder="SKU" /></td>
									<td><Input placeholder="Description" /></td>
									<td><Input className="number-right-align" placeholder="Quanity" /></td>
									<td><a>Delete</a></td>
								</tr>
								<tr className="tr-last-cl">
									<td><Input placeholder="SKU" /></td>
									<td><Input placeholder="Description" /></td>
									<td><Input className="number-right-align" placeholder="Quanity" /></td>
									<td><a>Delete</a></td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="page-button-cnt">
						<div className="page-button-cnt-left">
							<Button><Link to="/"><Icon type="left" />Back</Link></Button>
						</div>
						<div className="page-button-cnt-right">
							<Button type="primary">Reset</Button>
							<Button type="primary"><Link to="/reportbom">Validate BOM</Link></Button>
						</div>
					</div>
				</div>
				
			</div>
		);
	}
}

