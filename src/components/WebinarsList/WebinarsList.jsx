import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Webinar from '../Webinar/Webinar';
import styles from './WebinarsList.css';

const WebinarsList = ({ webinars, webinarsPerPage }) => {
  const webinarsCount = webinars.length;

  if (webinarsCount === 0) {
    return null;
  }

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const page = Number(params.get('page'));
  const currentPage = page || 1;
  const webinarFirstIndex = currentPage === 1 ? 0 : webinarsPerPage * (currentPage - 1);
  const webinarLastIndex = webinarFirstIndex + webinarsPerPage;
  const currentWebinars = webinars.slice(webinarFirstIndex, webinarLastIndex);

  return (
    <ul className={styles.root}>
      {currentWebinars.map((webinar) => <Webinar key={webinar.id} webinar={webinar} />)}
    </ul>
  );
};

WebinarsList.propTypes = {
  webinars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    photo: PropTypes.string,
  })),
  webinarsPerPage: PropTypes.number,
};

WebinarsList.defaultProps = {
  webinars: [],
  webinarsPerPage: null,
};

export default WebinarsList;
