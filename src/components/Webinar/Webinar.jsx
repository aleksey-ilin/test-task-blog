import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../assets/defaultImage.jpg';
import styles from './Webinar.css';

const Webinar = ({ webinar }) => (
  <li className={styles.root}>
    <img className={styles.image} src={webinar.photo || defaultImage} alt="img" />
    <h2 className={styles.title}>{webinar.title || 'No title'}</h2>
    <p className={styles.description}>{webinar.description || 'No description'}</p>
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
