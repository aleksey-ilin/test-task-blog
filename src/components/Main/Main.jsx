import React from 'react';
import PropTypes from 'prop-types';
import WebinarsList from '../../containers/WebinarsList';
import PaginationsList from '../../containers/PaginationsList';
import styles from './Main.css';

const Main = ({ toggleShowModal }) => (
  <main className={styles.root}>
    <header className={styles.header}>
      <h1 className={styles.header__title}>Webinars</h1>
      <p className={styles.header__description}>
        Here you can register and take part in educational
        webinars conducted by the best digital marketing experts.
      </p>
      <button
        type="button"
        className={styles.header__button}
        onClick={() => toggleShowModal()}
      >
        Add new
      </button>
    </header>
    <WebinarsList />
    <PaginationsList />
  </main>
);

Main.propTypes = {
  toggleShowModal: PropTypes.func,
};

Main.defaultProps = {
  toggleShowModal: () => null,
};

export default Main;
