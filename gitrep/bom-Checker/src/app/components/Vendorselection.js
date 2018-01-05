import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { Row, Col, Layout , Steps , Upload, Button, Menu, Dropdown, Icon  } from 'antd';
import CommonHeader from "./Header"
import ToggleDisplay from 'react-toggle-display';
var Global = require('react-global');
import { NavLink } from 'react-router-dom'

export default class Vendorselection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			vendorNames: [],
			active : ''
		}
	}
    
	componentDidMount() {
        fetch('http://localhost:3001/api/getVendorDetails')
            .then( (response) => {
                return response.json() })   
                    .then( (json) => {
                        this.setState({vendorNames: json});
                    });
    };
	
	vendorSelection(name) {
		window.vendorName = name;
		this.setState({ active: name })
		if(window.vendorName != ''){
			this.setState({
				show: true,
            });
        }
	}
	render(){
		return(
		<div>
		<CommonHeader/>
				<div className="steps">
				<div className="step-item-cover">
					<div className="steps-item">
						<div className="steps-small steps-item-process">
							<span className="steps-icon">1</span>
						</div>
						<div className="steps-item-content">
							<div className="steps-item-title item-content-process">Select vendor</div>
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
						<div className="steps-small">
							<span className="steps-icon">3</span>
						</div>
						<div className="steps-item-content">
							<div className="steps-item-title">Validate BOM</div>
						</div>
					</div>
				</div>
			</div>
			<div className="page-content-wrapper">
				<div className="vendor-selection-content">
					<div className="vendor-selection-btn">
						{this.state.vendorNames.map(i => {
							return(
								<Button type="primary" key={ i.vendorid } className={this.state.active === i.vendorname ? 'active' : ''} onClick={() => this.vendorSelection(i.vendorname)} >{i.vendorname}</Button>
							)}
						)}
					</div>
				</div>
				<ToggleDisplay show={this.state.show}>
					<div className="vendor-bom-import-content">
						<div className="vendor-bom-import-upload">
							<Upload>
								<Button type="primary"><Icon type="upload" />Upload Files</Button>
							</Upload>
						</div>
					
						<div className="vendor-bom-import-add-manually">
							<Button type="primary"><Icon type="plus" /> <Link to="/importbom">Add Components Manually </Link> </Button>
						</div>
					</div>
				 </ToggleDisplay>
			</div>
		</div>	
		);
	}
}

