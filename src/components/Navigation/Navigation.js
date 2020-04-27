import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';

import './Navigation.scss';

function Navigation() {
  return (
    <div className="navigation">
      <NavLink className='link' to='/'><HomeOutlinedIcon /></NavLink>
      <NavLink className='link' to='/about'><InfoOutlinedIcon /></NavLink>
      <NavLink className='link' to='/project'><AppsOutlinedIcon /></NavLink>
      <NavLink className='link' to='/contact'><ContactMailOutlinedIcon /></NavLink>
    </div>
  );
}

export default Navigation;
