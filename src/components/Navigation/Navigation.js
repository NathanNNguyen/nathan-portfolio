import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo.js';
import logo from '../../assets/images/favicon-32x32.png';

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

const networks = [
  {
    icon: 'fab fa-linkedin-in',
    link: 'https://www.linkedin.com/in/nathannnguyen/',
    text: 'LinkedIn'
  },
  {
    icon: 'fab fa-github',
    link: 'https://github.com/NathanNNguyen/',
    text: 'Github'
  }
]

const Navigation = () => {

  const links = navigationItems.map(item => {
    return (
      <NavLink to={item.route} className={styles.link} key={item.icon}>
        <i className={item.icon} />
        <span>{item.text}</span>
      </NavLink>
    )
  })

  const network = networks.map(item => {
    return (
      <a href={item.link} target="_blank" rel="noopener noreferrer" key={item.icon} className={styles.network}>
        <i className={item.icon} />
        <span>{item.text}</span>
      </a>
    )
  })


  return (
    <div className={styles.navigation}>
      <Logo imgSrc={logo} text='Nathan' />
      <span>{links}</span>
      <span>{network}</span>
    </div>
  );
}

export default Navigation;
