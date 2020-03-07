import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import defaultImage from '../../assets/defaultImage.svg';
import photoDelete from '../../assets/photoDelete.svg';
import styles from './Modal.css';

const cx = classNames.bind(styles);

const Modal = ({ toggleShowModal }) => {
  const [photo, uploadPhoto] = useState(null);
  const photoUrl = photo && URL.createObjectURL(photo);

  return (
    <div className={styles.container}>
      <div className={styles.root}>
        <button className={styles.close} type="button" onClick={() => toggleShowModal()}>×</button>
        <h2 className={styles.heading}>Add new</h2>
        <div className={cx({ photo: true, photoDefault: !photo })}>
          <input
            className={styles.photo__input}
            type="file"
            accept="image/*"
            onChange={(event) => uploadPhoto(event.target.files[0])}
          />
          {photo && (
            <button
              type="button"
              className={styles.photo__delete}
              onClick={() => uploadPhoto(null)}
            >
              <img src={photoDelete} alt="delete" />
            </button>
          )}
          <img
            className={photo && styles.photo__webinarPhoto}
            src={photo ? photoUrl : defaultImage}
            alt="upload"
          />
          {!!photo || (
            <p className={styles.photo__description}>
              select an image file to upload or drag it here
            </p>
          )}
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
