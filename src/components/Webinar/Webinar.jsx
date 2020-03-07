import React from 'react';
import PropTypes from 'prop-types';
import styles from './Webinar.css';

const Webinar = ({ webinar }) => (
  <li className={styles.root}>
    <img className={styles.image} src={webinar.photo} alt="img" />
    <h2 className={styles.title}>{webinar.title}</h2>
    <p className={styles.description}>{webinar.description}</p>
  </li>
);

Webinar.propTypes = {
  webinar: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    photo: PropTypes.string,
  }),
};

Webinar.defaultProps = {
  webinar: {
    title: 'Title is not defined',
    description: 'Description is not defined',
    photo: 'no photo',
  },
};

export default Webinar;
