import React from 'react';
import Webinar from '../Webinar/Webinar';
import styles from './WebinarsList.css';

const webinars = [1, 2, 3, 4, 5];

const WebinarsList = () => (
  <ul className={styles.root}>
    {webinars.map((webinar) => <Webinar key={webinar} webinar={webinar} />)}
  </ul>
);

export default WebinarsList;
