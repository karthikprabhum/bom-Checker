import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Layout , Steps , Upload, Button, Menu, Dropdown, Icon, Table, Divider, Input, Tooltip } from 'antd';
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
							<div className="steps-small">
								<span className="steps-icon">2</span>
							</div>
							<div className="steps-item-content">
								<div className="steps-item-title">Provide BOM</div>
							</div>
						</div>
						<div className="steps-item">
							<div className="steps-small steps-item-process">
								<span className="steps-icon">3</span>
							</div>
							<div className="steps-item-content">
								<div className="steps-item-title item-content-process">Validate BOM</div>
							</div>
						</div>
					</div>
				</div>
				<div className="report-table-content">
					<div className="report-table-content-all">
						<div className="report-status-bar">
							<div className="report_status-txt">Validation Failed. Refer <a>Nutanix HCL</a> for more details.</div>
							<div className="report_status-close-icon">
								<Icon type="close" />
							</div>
						</div>
						<div className="report-table-content-txt">
							BOM Report:
						</div>
						<table id="bom-report">
							<tbody>
								<tr>
									<th>SKU</th>
									<th>Description</th>
									<th>Quanity</th>
									<th className="th-last-cl">Remarks</th>
								</tr>
								<tr className="bom-report-error">
									<td><span><Tooltip title="Error! reason for the error"><Icon type="exclamation-circle" style={{ color: '#F45555' }}  /></Tooltip></span>719064-B21</td>
									<td>HPE ProLiant DL380 Gen9 8SFF Configure-to-order Server</td>
									<td className="number-right-align">1</td>
									<td>Error! reason for the error</td>
								</tr>
								<tr>
									<td>835563-B21  0D1</td>
									<td>Factory Integrated</td>
									<td className="number-right-align">2</td>
									<td>Warning</td>
								</tr>
								<tr className="tr-last-cl">
									<td>719064-B21  ABA</td>
									<td>HP ProLiant DL380 Gen9 8SFF US-English Localization Configure-to-order Server</td>
									<td className="number-right-align">3</td>
									<td>Success</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="page-button-cnt">
						<div className="page-button-cnt-left">
							<Button><Link to="/importbom"><Icon type="left" />Back</Link></Button>
						</div>
						<div className="page-button-cnt-right">
							<Button type="primary">Export To PDF</Button>
						</div>
					</div>
				</div>
				
			</div>
		);
	}
}

