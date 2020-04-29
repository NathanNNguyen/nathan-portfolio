import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.scss';

const navigationItems = [
  {
    icon: 'fas fa-home',
    text: 'Home',
    route: '/'
  },
  {
    icon: 'fas fa-user',
    text: 'About',
    route: '/about'
  },
  {
    icon: 'fas fa-fire',
    text: 'Projects',
    route: '/project'
  },
  {
    icon: 'fas fa-envelope',
    text: 'Contact',
    route: '/contact'
  }
];

const Navigation = () => {

  const links = navigationItems.map(item => {
    return (
      <NavLink to={item.route} className={styles.link}>
        <i className={item.icon} />
        <span>{item.text}</span>
      </NavLink>
    )
  })
  return (
    <div className={styles.navigation}>
      <span>{links}</span>
    </div>
  );
}



export default Navigation;
