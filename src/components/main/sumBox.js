import './sumBox.less'
import React, {Component} from 'react'

export default class SumBoxes extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className='app-sum-box'>
                <SumBox maxNum='120'/>
            </div>
        );
    }
}

class SumBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            maxNum: props.maxNum,
            icon: null,
            desc:''
        }
    }
    render(){
        return (
            <div className='sum-box'>
                <div style={{float:'left'}}>
                    <AddNum maxNum={this.state.maxNum}></AddNum>
                    <p>asdfasdfaasdf</p>
                </div>
                <div style={{float:'right'}}>
                    asdfasd
                </div>

            </div>
        );
    }
}


class AddNum extends Component{
    constructor(props){
        super(props);
        this.state = {
            maxNum: props.maxNum,
            currentNum: 0
        }
    }
    componentDidMount(){
        if (this.state.maxNum > 100){
            this.setState({
                currentNum: this.state.maxNum - 100
            });
        }
        this.timerID = setInterval(() => {
            this.timerNum();
            if (this.state.currentNum >= this.state.maxNum){
                clearInterval(this.timerID)
            }
        },50)
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    timerNum(){
        console.log(this.state.currentNum)
        this.setState({
            currentNum: ++ this.state.currentNum
        });
    }
    render(){
        return (
            <p style={{margin: '10px 20px 0px 0px'}}>
                {this.state.currentNum}
            </p>
        );
    }
}