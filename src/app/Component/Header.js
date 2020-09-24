import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className='nav-bar'>
        <NavLink exact to='/home' className='nav-link' activeClassName='active'>
          HOME
        </NavLink>
        <NavLink exact to='/calculator' className='nav-link' activeClassName='active'>
          在线计算器
        </NavLink>
        <NavLink exact to='/countdown' className='nav-link' activeClassName='active'>
          在线倒计时器
        </NavLink>
      </div>
    </nav>
  )
}

export default Header;