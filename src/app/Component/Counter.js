import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Counter extends Component {

  state = {
    startTime: 0,
    status: 'Start'
  }

  handleInit = (event) => {
    this.setState({
      startTime: event.target.value
    })
  }

  handleStart = () => {
    let countDown = this.state.startTime;
    this.myInterval = setInterval(() => {
      if (countDown > 0) {
        this.setState({
          status: `${countDown} Seconds`
        })
        countDown -= 1;
      } else if (countDown === 0) {
        clearInterval(this.myInterval);
        this.setState({
          status: 'End'
        })
      }
    }, 1000)
  }

  render() {
    return (
      <div className="counter-page">
        <h1>在线倒计时器</h1>
        <div className="counter-content">
          <div className="counter-start">
            <div className="counter-set">
              <p>设置时间</p>
              <input type="text" className="counter-input" value={this.state.startTime}
                     onChange={this.handleInit}/>
            </div>
            <input type="submit"
                   value="Start"
                   className="counter-start-btn"
                   onClick={this.handleStart}
                   disabled={this.state.status !== 'Start' && this.state.status !== 'End'}/>
          </div>
          <div className="counter-show">
            <p>{this.state.status}</p>
          </div>
        </div>
        <Link to="/home" className="return-home">回到主页</Link>
        <div className='placeholder'></div>
      </div>
    );
  }
}

export default Counter;