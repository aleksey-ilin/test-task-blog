import React from 'react';
import logo from '../../assets/logo.svg';
import styles from './Header.css';

const Header = () => (
  <header className={styles.root}>
    <img src={logo} alt="logo" />
  </header>
);

export default Header;
