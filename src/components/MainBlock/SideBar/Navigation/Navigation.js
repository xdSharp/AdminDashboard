import React from 'react';
import './Navigation.css';

import blogIcon from '../../../../assets/images/blog.svg';
import startIcon from '../../../../assets/images/star.svg';
import settingsIcon from '../../../../assets/images/settings.svg';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className='nav'>
      <NavLink exact to='/blog' activeClassName='active'>
        <img src={blogIcon} alt='Blog' />
        <span>Tables</span>
      </NavLink>
      <NavLink exact to='/favourite' activeClassName='active'>
        <img src={startIcon} alt='Star' />
        <span>None</span>
      </NavLink>
      <NavLink exact to='/settings' activeClassName='active'>
        <img src={settingsIcon} alt='Settings' />
        <span>Settings</span>
      </NavLink>
    </nav>
  );
};
