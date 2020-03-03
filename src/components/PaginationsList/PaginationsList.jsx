import React from 'react';
import Pagination from '../Pagination/Pagination';
import styles from './PaginationsList.css';

const paginations = [1, 2, 3, 4, 5];

const PaginationsList = () => (
  <ul className={styles.paginationsList}>
    {paginations.map((pagination) => <Pagination key={pagination} pagination={pagination} />)}
  </ul>
);

export default PaginationsList;
