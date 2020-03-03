import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pagination.css';

const Pagination = ({ pagination }) => (
  <li className={styles.pagination}>
    <button type="button" className={styles.button}>{pagination}</button>
  </li>
);

Pagination.propTypes = {
  pagination: PropTypes.number,
};

Pagination.defaultProps = {
  pagination: [],
};

export default Pagination;
