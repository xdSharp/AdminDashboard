import React from 'react';
import { useDispatch } from 'react-redux';
import {NavLink, useHistory} from 'react-router-dom';
import { ReactComponent as ArrowLeftIcon } from '../../../../assets/images/leftarrow.svg';
import './LogOut.css';
import blogIcon from "../../../../assets/images/blog.svg";

export const LogOut = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logOut());
    history.push('/login');


  }

  return (
    <section className='sidebarBottom'>
      <NavLink exact to='/login' activeClassName='active'>
        <span>LogOut</span>
      </NavLink>
    </section>
  );
};
