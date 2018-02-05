import React, {Component} from "react"
import ReactDOM from 'react-dom';


function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Ian',
    lastName: 'Hao'
}

const element = (
    <h1>
        Hello, {formatName(user)}
    </h1>
);

function Welcome(props) {
    return <h1>Hello , {props.name}</h1>
}



function App() {
    return (
        <div>
            <Welcome name = "sara"/>
            <Welcome name = "bar"/>
            <Welcome name = "car"/>
        </div>
    );
}

// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {props.date.toLocaleTimeString()}</h2>
//         </div>
//     );
// }

// function tick() {
//     ReactDOM.render(
//         <Clock date={new Date()} />,
//         document.getElementById('app')
//     );
// }

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        this.timerID = setInterval(() => this.tick())
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    render(){
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is { this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.state = {isToggleOn:true};
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(){
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render(){
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON':'OFF'}
            </button>
        );
    }
}

class LogginButton extends React.Component {
    handleClick(){
        console.log("this is", this)
    }

    render(){
        return (
            <button onClick={(e) => this.handleClick(e)}>
                Click Me!
            </button>
        );
    }
}

function MailBox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello</h1>
            {unreadMessages.length > 0 &&
            <h2>
                You have {unreadMessages.length} unread messages.
            </h2>
            }
        </div>
    );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];

const numbers = [1,2,3,4,5];

const listItems = numbers.map((number) =>
        <li>{number * 2}</li>
);

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>{number}</li>
    )
    return (
        <ul>{listItems}</ul>
    )
}


function BoilingVerdict(props) {
    if(props.celsius >= 100){
        return <p>水会烧开</p>;
    }
    return <p>水不会开</p>;

}

class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            temperature: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            temperature: e.target.value
        });
    }
    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>输入一个摄氏温度</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange} />

                <BoilingVerdict
                    celsius={parseFloat(temperature)} />

            </fieldset>
        );
    }
}

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                       onChange={this.handleChange} />
            </fieldset>
        );
    }
}

class Calculator1 extends React.Component {
    render() {
        return (
            <div>
                <TemperatureInput scale="c" />
                <TemperatureInput scale="f" />
            </div>
        );
    }
}

// const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <Calculator1 />,
    document.getElementById('app')
);