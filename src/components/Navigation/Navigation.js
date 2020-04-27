import React from 'react';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';

import styles from './Navigation.module.scss';

function Navigation() {
  return (
    <div className={styles.navigation}>
      <a className={styles.link} href='/'><HomeOutlinedIcon /></a>
      <a className={styles.link} href='/about'><InfoOutlinedIcon /></a>
      <a className={styles.link} href='/project'><AppsOutlinedIcon /></a>
      <a className={styles.link} href='/contact'><ContactMailOutlinedIcon /></a>
    </div>
  );
}

export default Navigation;
