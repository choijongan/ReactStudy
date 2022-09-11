import React, { Component } from 'react'

export default class BoxClass extends Component {
  render() {
    return (
      <div>
         Box{this.props.num}</div> //props를 만들때도 무조건 this.
    )
  }
}
