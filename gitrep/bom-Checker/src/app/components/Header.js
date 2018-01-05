import React , { Component }  from "react";
import { Link } from "react-router";
import { Row, Col, Menu, Dropdown, Icon, Button } from 'antd';
import logo from '../images/logo-n.png';
import { NavLink } from 'react-router-dom'

export default class CommonHeader extends React.Component {
	render(){
		return(
			<header>
				<div className="header-logo-icon">
					<div className="header-logo-icon-img"><img src={logo}/></div>
					<a className="header-logo-title"><span>BOM Checker</span></a>
					<a className="ant-dropdown-link header-logo-user">
						Nutanix User <Icon type="down"/>
					</a>
				</div>
			</header>
		);
	}
}

