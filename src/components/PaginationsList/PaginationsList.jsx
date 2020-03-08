import React from 'react';
import PropTypes from 'prop-types';
import Pagination from '../Pagination/Pagination';
import styles from './PaginationsList.css';

const PaginationsList = ({ webinars, webinarsPerPage }) => {
  const webinarsCount = webinars.length;
  const pagesCount = Math.round(webinarsCount / webinarsPerPage);

  if (webinarsCount > webinarsPerPage && pagesCount >= 1) {
    return (
      <ul className={styles.root}>
        {[...Array(pagesCount).keys()]
          .map((pagination) => <Pagination key={pagination} pageNum={pagination + 1} />)}
      </ul>
    );
  }
  return null;
};

PaginationsList.propTypes = {
  webinars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    photo: PropTypes.string,
  })),
  webinarsPerPage: PropTypes.number,
};

PaginationsList.defaultProps = {
  webinars: [],
  webinarsPerPage: null,
};

export default PaginationsList;
