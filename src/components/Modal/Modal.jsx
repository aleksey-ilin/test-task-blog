import React, { useState } from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../assets/defaultImage.svg';
import styles from './Modal.css';

const Modal = ({ toggleShowModal }) => {
  const [photo, uploadPhoto] = useState(null);

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <button className={styles.close} type="button" onClick={() => toggleShowModal()}>×</button>
        <h2 className={styles.heading}>Add new</h2>
        <div className={styles.photo}>
          <input
            className={styles.photo__input}
            type="file"
            accept="image/*"
            onChange={(event) => uploadPhoto(event.target.files)}
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

Modal.propTypes = {
  toggleShowModal: PropTypes.func,
};

Modal.defaultProps = {
  toggleShowModal: () => null,
};

export default Modal;
