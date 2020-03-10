import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import addImage from '../../assets/addImage.svg';
import photoDelete from '../../assets/photoDelete.svg';
import styles from './CreateWebinar.css';

const cx = classNames.bind(styles);

const CreateWebinar = ({ toggleShowModal, addWebinar, webinars }) => {
  const [photo, uploadPhoto] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const getImage = () => {
    const reader = new FileReader();
    reader.readAsDataURL(photo);
    const image = new Promise((resolve) => {
      reader.onloadend = () => resolve(reader.result);
    });
    return image;
  };

  const save = async () => {
    const newWebinarId = webinars.length;
    const newWebinarPhoto = photo && await getImage();
    const newWebinar = {
      id: newWebinarId,
      title,
      description,
      photo: newWebinarPhoto,
    };
    const updatedWebinars = [...webinars, newWebinar];

    addWebinar(newWebinar);
    localStorage.setItem('webinars', JSON.stringify(updatedWebinars));
    toggleShowModal();
  };

  const photoUrl = photo && URL.createObjectURL(photo);

  return (
    <div className={styles.container} data-testid="create-webinar">
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
            src={photo ? photoUrl : addImage}
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
          <input
            className={styles.title__field}
            type="text"
            id="title"
            placeholder="Enter title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <label className={styles.description} htmlFor="description">
          Description
          <textarea
            className={styles.description__field}
            id="description"
            placeholder="Enter description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <button className={styles.button} type="button" onClick={save}>Save</button>
      </div>
    </div>
  );
};

CreateWebinar.propTypes = {
  toggleShowModal: PropTypes.func,
  addWebinar: PropTypes.func,
  webinars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    photo: PropTypes.string,
  })),
};

CreateWebinar.defaultProps = {
  toggleShowModal: () => null,
  addWebinar: () => null,
  webinars: [],
};

export default CreateWebinar;
