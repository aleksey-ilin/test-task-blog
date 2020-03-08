import React from 'react';
import PropTypes from 'prop-types';
import Webinar from '../Webinar/Webinar';
import styles from './WebinarsList.css';

const WebinarsList = ({ webinars }) => {
  if (webinars) {
    return (
      <ul className={styles.root}>
        {webinars.map((webinar) => <Webinar key={webinar.id} webinar={webinar} />)}
      </ul>
    );
  }
  return null;
};

WebinarsList.propTypes = {
  webinars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    photo: PropTypes.string,
  })),
};

WebinarsList.defaultProps = {
  webinars: [],
};

export default WebinarsList;
