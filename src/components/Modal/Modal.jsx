import React, { useState } from 'react';
import defaultImage from '../../assets/defaultImage.svg';
import styles from './Modal.css';

const Modal = () => {
  const [photos, uploadPhotos] = useState([]);

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <button className={styles.close} type="button">×</button>
        <h2 className={styles.heading}>Add new</h2>
        <div className={styles.photo}>
          <input
            className={styles.photo__input}
            type="file"
            accept="image/*"
            multiple
            onChange={(event) => uploadPhotos([...photos, ...event.target.files])}
          />
          <img src={defaultImage} alt="upload" />
          <p className={styles.photo__description}>
            select an image file to upload or drag it here
          </p>
        </div>
        <label className={styles.title} htmlFor="title">
          Title
          <input className={styles.title__field} type="text" id="title" placeholder="Enter title" />
        </label>
        <label className={styles.description} htmlFor="description">
          Description
          <textarea className={styles.description__field} id="description" placeholder="Enter description" />
        </label>
        <button className={styles.button} type="button">Save</button>
      </div>
    </div>
  );
};

export default Modal;
