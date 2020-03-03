import React from 'react';
import WebinarsList from '../WebinarsList/WebinarsList';
import PaginationsList from '../PaginationsList/PaginationsList';
import styles from './Main.css';

const Main = () => (
  <main className={styles.root}>
    <header className={styles.header}>
      <h1 className={styles.header__title}>Webinars</h1>
      <p className={styles.header__description}>
        Here you can register and take part in educational
        webinars conducted by the best digital marketing experts.
      </p>
      <button type="button" className={styles.header__button}>Add new</button>
    </header>
    <WebinarsList />
    <PaginationsList />
  </main>
);

export default Main;
