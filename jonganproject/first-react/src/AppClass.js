import React, { Component } from 'react'
import BoxClass from './component/BoxClass';

export default class AppClass extends Component {

//constructor:lifecycle함수, 생성자:컴포넌트가 실행되자 마자 호출이 되는 함수
    constructor(props) {  
        super(props)
        this.state={  //state라는 객체를 하나 만듦
            counter2:0,     //그 안에 원하는 값을 넣으면 됨.
            num:1,
            value:0
        };
    }

    increase = () => {
        this.setState({
            counter2:this.state.counter2 + 1, 
            value:this.state.value + 1,
        });
    };

  render() {
    //앞에 매번 this를 무조건 써줘야됨.+(index.js에서 APP을 AppClass로 변경)
    return (
      <div>
        <div>state:{this.state.counter2}</div> 
        <button onClick={this.increase}>클릭</button> 
        <BoxClass num={this.state.value}/>
      </div>
    )
  }
}
