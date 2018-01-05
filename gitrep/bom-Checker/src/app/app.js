import React , { Component }  from "react";
import { render } from "react-dom";
import { HashRouter as Router, Route } from 'react-router-dom';
import {Switch} from 'react-router'; 

import "./styles/main.less";

import CommonHeader from "./components/Header";
import Vendorselection from "./components/Vendorselection";
import Importbom from "./components/Importbom";
import Reportbom from "./components/Reportbom";

render((
  <Router>
		<Switch>
			<Route exact path="/" component={Vendorselection} />
            <Route path="/importbom" component={Importbom} />
             <Route path="/reportbom" component={Reportbom} />
		</Switch>
  </Router> ),
document.getElementById('app'));
