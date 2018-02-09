import './SideBar.less'
import React, {Component} from 'react'
import {Route, Link, browserHistory} from 'react-router-dom'

const menuItems = [{
            'iconClass':'fa fa-tachometer',
            'menuName': '系统主页',
            'linkPath': '/',
            'component': ''
        },{
            'iconClass':'fa fa-pencil-square-o',
            'menuName': '表单',
            'linkPath': '/forms'
        },{
            'iconClass':'fa fa-th-list',
            'menuName': '表格',
            'linkPath': '/tables'
        }]

export default class SideBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            menuItemStyle: {
                width: '250px',
                background: 'linear-gradient(#F3F7F8, #D9DDe6 50%, #F3F7F8)',
                margin: '0',
                borderBottom: '1px solid #BDC1C2',
            },
            menuStyle: {
                padding: '0',
                zIndex: 0,

            }
        }
    }


    render(){
        const sideBarItems = menuItems.map((menuItem,index) =>
            <SideBarItem key={index} icon = {<i className={menuItem.iconClass}></i>} linkName={menuItem.menuName}  path={menuItem.linkPath}/>
        )
        return (
            <div className='app-side'>
                {sideBarItems}
            </div>
        );
    }
}

class SideBarItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            // menuItemStyle: props.menuItemStyle,
            icon: props.icon,
            linkName: props.linkName,
            path: props.path
        }
    }

    render(){
        return (
            <div className='menuItem'>
                <Link to={this.state.path} className='link'><li>{this.state.icon}<span>{this.state.linkName}</span></li></Link>
            </div>
        );
    }
}