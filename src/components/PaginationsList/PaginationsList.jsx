import React from 'react';
import Pagination from '../Pagination/Pagination';
import styles from './PaginationsList.css';

const paginations = [1, 2, 3, 4];

const PaginationsList = () => {
  const webinars = JSON.parse(localStorage.getItem('webinars'));

  if (webinars) {
    return (
      <ul className={styles.root}>
        {paginations.map((pagination) => <Pagination key={pagination} pagination={pagination} />)}
      </ul>
    );
  }
  return null;
};

export default PaginationsList;
