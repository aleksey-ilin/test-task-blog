import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Pagination.css';

const Pagination = ({ pageNum }) => (
  <li className={styles.root}>
    <Link to={`/?page=${pageNum}`} className={styles.button}>{pageNum}</Link>
  </li>
);

Pagination.propTypes = {
  pageNum: PropTypes.number,
};

Pagination.defaultProps = {
  pageNum: [],
};

export default Pagination;
