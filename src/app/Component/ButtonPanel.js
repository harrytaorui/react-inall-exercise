import React, {Component} from 'react';

export default class ButtonPanel extends Component {

  render() {
    const {handleClick} = this.props;
    const allButtons = ['+', '-', 'x', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', 'clear', '=']
    return (
      <div className='button-panel'>
        {allButtons.map((button, index) => {
          return <button className='button' key={index} value={button} onClick={(e) => handleClick(e)}>{button}</button>
        })}
      </div>
    )
  }
}