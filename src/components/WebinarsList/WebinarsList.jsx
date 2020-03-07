import React from 'react';
import Webinar from '../Webinar/Webinar';
import styles from './WebinarsList.css';

const WebinarsList = () => {
  const webinars = JSON.parse(localStorage.getItem('webinars'));

  if (webinars) {
    return (
      <ul className={styles.root}>
        {webinars.map((webinar) => <Webinar key={webinar.id} webinar={webinar} />)}
      </ul>
    );
  }
  return null;
};

export default WebinarsList;
