import React from 'react';
import styles from './Pagination.css';

const Pagination = ({ pagination }) => (
  <li className={styles.pagination}>
    <button type="button" className={styles.button}>{pagination}</button>
  </li>
);

export default Pagination;
