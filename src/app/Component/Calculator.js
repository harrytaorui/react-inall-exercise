import React, {Component} from 'react';
import ButtonPanel from "./ButtonPanel";
import {Link} from "react-router-dom";

export default class Calculator extends Component {

  state = {
    display: '',
    result: 0,
    operated: false
  }

  calculate = () => {
    const equals = this.state.display.replace('x', '*');
    return (new Function(`return ${equals}`))();
  }

  handleClick = (event) => {
    const current = event.target.value;
    const operatorReg = /^[+|\-|x]$/
    const numberReg = /[0-9]/
    if (operatorReg.test(current)) {
      if (this.state.operated || this.state.display === '') {
        this.setState({
          display: '',
          result: 0,
          operated: false
        })
      } else {
        this.setState({
          display: this.state.display += current,
          operated: true
        })
      }
    } else if (numberReg.test(current)) {
      if (!this.checkZeroLegal(current)) {
        this.setState({
          display: this.state.display += current
        })
      }
    } else if (current === '=') {
      this.setState({
        result: this.calculate(),
        display: '',
        operated: false
      })
    } else {
      this.setState({
        result: 0,
        display: '',
        operated: false
      })
    }
  }

  checkZeroLegal = (current) => {
    const currentString = this.state.display;
    const operatorReg = /^[+|\-|x]$/
    return (current === '0' && (currentString === '' || operatorReg.test(currentString.charAt(currentString.length - 1))))
  }

  render() {
    return (
      <div className='calculator-page'>
        <h1>在线计算器</h1>
        <div className='calculator'>
          <div className='display'>{this.state.display === '' ? this.state.result : this.state.display}</div>
          <ButtonPanel handleClick={this.handleClick}/>
        </div>
        <Link to='/home'><h1>回到主页</h1></Link>
      </div>
    )
  }
}