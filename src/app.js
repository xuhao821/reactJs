import React, {Component} from "react"
import ReactDOM, {render}  from 'react-dom';
import Layout from './components/layout/layout'
import SideBar from './components/layout/SideBar'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Content from "./components/layout/content";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


const App = () => (
    <MuiThemeProvider>
        <Router>
            <div>
                <div>
                    <Layout/>
                </div>
                <div style={{width: '100%'}}>
                    <SideBar/>
                    <Content/>
                </div>
            </div>
        </Router>
    </MuiThemeProvider>
);



ReactDOM.render(
    <App/>,
    document.getElementById('app')
);