import './content.less'
import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import SumBoxes from "../main/sumBox";
// import AddNum from '../main/sumBox'

export default class Content extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className='app-content'>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </div>
        );
    }
}

const Home = () => (
    <div>
        <SumBoxes/>
    </div>
)
const About = () => (
    <div>
        <h2>关于</h2>
        {/*<AddNum></AddNum>*/}
    </div>
)
