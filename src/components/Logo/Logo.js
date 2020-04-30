import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Logo.module.scss';

const Logo = props => {
  return (
    <Link to='/' className={styles.logo}>
      <img src={props.imgSrc} alt="Logo" />
      <span>{props.text}</span>
    </Link>
  )
}

export default Logo;