import React from 'react';
import logo from '../../assets/logo.svg';
import styles from './Webinar.css';

const Webinar = () => (
  <li className={styles.webinar}>
    <img className={styles.image} src={logo} alt="img" />
    <h2 className={styles.title}>HTTPS & SSL Does Not Mean You Have a Secure Website</h2>
    <p className={styles.description}>
      Having an SSL certificate does not mean you have a secure website,
      and with the new European GDPR regulations
    </p>
  </li>
);

export default Webinar;
