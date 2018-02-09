import './layout.less'
import React, {Component} from 'react'
import Avatar from 'material-ui/Avatar'
import Badge from 'material-ui/Badge'

import MenuItem from 'material-ui/MenuItem';
// import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';

import RaisedButton from 'material-ui/RaisedButton';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';

export default class Layout extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
          <div className='app-nav'>
              <nav>
                  <NavLogo></NavLogo>
                  <MenuToggle></MenuToggle>
                  <NavLinkRight></NavLinkRight>
              </nav>
          </div>
        );
    }
}

/**
 * logo显示
 */
class NavLogo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logoText: 'KAdmin'
        }
        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick(e){
    //     e.preventDefault()
    // }

    render(){
        return(
            <div className='nav-logo'>
                <a id='logo' href='#' >
                    <span className='logo-text'>{this.state.logoText}</span>
                </a>
            </div>
        );
    }
}

/**
 * toggle 按钮
 */
class MenuToggle extends Component{
    constructor(props){
        super(props);
        this.state = {
            toggleStatus: true
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState(prevState => ({
            toggleStatus: !prevState.toggleStatus
        }));
    }
    render(){
        return (
           <div>
               <a  className='nav-toggle' href='#' onClick={this.handleClick}>
                   <i className="fa fa-bars"></i>
               </a>
               <NavSearch></NavSearch>
           </div>
        );
    }
}

/**
 * 搜索框
 */
class NavSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchTxt: ''
        }
    }
    handleChange(event){
        this.setState({
            searchTxt: event.target.value
        })
    }
    handleSubmit(event){
        console.log(event)
        console.log('提交查询： searchTxt = ', this.state.searchTxt)
    }
    render(){
        return (
            <div className='nav-search'>
                <div className='search'>
                    <a  href="#"  onClick={(event) => this.handleSubmit(event)}><i className="fa fa-search" ></i></a>
                </div>
                <div className='search'>
                    <input type="text" value={this.state.searchTxt} placeholder='Search here...' onChange={(event) => this.handleChange(event)}/>
                </div>
            </div>
        );
    }
}

class NavLinkRight extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <ul className='nav-link'>
                <li>
                    <Badge
                        badgeContent={6}
                        secondary={true}
                        className = 'badge'
                        style={{padding: '12px 10px 10px 10px'}}
                        badgeStyle = {{top: 5, right: 18,fontWeight: '100', fontSize: '12px', width: '18px', height: '18px', backgroundColor: '#488C6C'}}
                    >
                        <i className="fa fa-bell" aria-hidden="true" ></i>
                    </Badge>
                </li>
                <li>
                    <Badge
                        badgeContent={8}
                        secondary={true}
                        badgeStyle = {{top: 5, right: 18,fontWeight: '100', fontSize: '12px', width: '18px', height: '18px', backgroundColor: '#E9662C'}}
                        className = 'badge'
                        style={{padding: '12px 10px 10px 10px'}}
                    >
                        <i className="fa fa-envelope" aria-hidden="true" ></i>
                    </Badge>
                </li>
                <li>
                    <Badge
                        badgeContent={1}
                        secondary={true}
                        badgeStyle = {{top: 5, right: 18,fontWeight: '100', fontSize: '12px', width: '18px', height: '18px', backgroundColor: '#F2994B'}}
                        className = 'badge'
                        style={{padding: '12px 10px 10px 10px'}}
                    >
                        <i className="fa fa-server" aria-hidden="true" ></i>
                    </Badge>
                </li>
                <li style={{width: '180px'}}>
                   <IconUser></IconUser>

                </li>
                <li>
                    <Badge
                        badgeContent={1}
                        secondary={true}
                        badgeStyle = {{top: 5, right: 18,fontWeight: '100', fontSize: '12px', width: '18px', height: '18px', backgroundColor: '#5BC0DE'}}
                        className = 'badge'
                        style={{padding: '12px 10px 10px 10px'}}
                    >
                        <i className="fa fa-comments" aria-hidden="true" ></i>
                    </Badge>
                </li>
            </ul>
        );
    }
}

class IconUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    handleClick(event){
        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    }

    handleRequestClose(){
        this.setState({
            open: false,
        });
    };

    render(){
        return (
          <div className='user-show' onClick={(event) => this.handleClick(event)}>
              <Avatar  className='avatar-head' size={23} src="http://ol-images.liqucn.com/ol_zhuanqu/uploads/images/20150825/09423010386575.jpg" ></Avatar>
              <span className='userTxt'>Robert John</span>
              <i className="fa fa-caret-down "  style={{marginTop:'18px', fontSize: '13px'}} aria-hidden="true" ></i>
              <Popover
                  open={this.state.open}
                  anchorEl={this.state.anchorEl}
                  anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                  targetOrigin={{horizontal: 'left', vertical: 'top'}}
                  onRequestClose={() => this.handleRequestClose()}
                  animation={PopoverAnimationVertical}
              >
                  <Menu>
                      <MenuItem style={{color: '#9a9a9a',fontSize: '16px'}} innerDivStyle={{paddingLeft: '50px'}} primaryText="我的帐户" leftIcon={<i className="fa fa-user" style={{marginTop: '15px'}} aria-hidden="true"></i>} />
                      <MenuItem style={{color: '#9a9a9a',fontSize: '16px'}} innerDivStyle={{paddingLeft: '50px',paddingRight: '40px'}} primaryText="我的邮件"
                                leftIcon={<i className="fa fa-envelope" style={{marginTop: '15px'}} aria-hidden="true"></i>} rightIcon={ <Badge badgeContent={4}  primary={true}  style={{padding: '0'}}></Badge>}/>
                      <MenuItem style={{color: '#9a9a9a',fontSize: '16px'}} innerDivStyle={{paddingLeft: '50px',paddingRight: '40px'}} primaryText="我的任务"
                                leftIcon={<i className="fa fa-tasks" style={{marginTop: '15px'}} aria-hidden="true"></i>} rightIcon={ <Badge badgeContent={4}  primary={true}  style={{padding: '0'}}></Badge>}/>
                      <Divider/>
                      <MenuItem style={{color: '#9a9a9a',fontSize: '16px'}} innerDivStyle={{paddingLeft: '50px'}} primaryText="锁屏" leftIcon={<i className="fa fa-lock" style={{marginTop: '15px'}} aria-hidden="true"></i>} />
                      <MenuItem style={{color: '#9a9a9a',fontSize: '16px'}} innerDivStyle={{paddingLeft: '50px'}} primaryText="退出" leftIcon={<i className="fa fa-sign-out" style={{marginTop: '15px'}} aria-hidden="true"></i>} />
                  </Menu>
              </Popover>
          </div>
        );
    }
}



class PopoverExampleAnimation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    handleClick(event){
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose(){
        this.setState({
            open: false,
        });
    };

    render() {
        return (
            <div>
                <RaisedButton
                    onClick={(event) => this.handleClick(event)}
                    label="Click me"
                />
                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={this.handleRequestClose}
                    animation={PopoverAnimationVertical}
                >
                    <Menu>
                        <MenuItem primaryText="Refresh"/>
                        <MenuItem primaryText="Help &amp; feedback"/>
                        <MenuItem primaryText="Settings"/>
                        <MenuItem primaryText="Sign out"/>
                    </Menu>
                </Popover>
            </div>
        );
    }
}
