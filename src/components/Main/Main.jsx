import React from 'react';
import styles from './Main.css';

const Main = () => (
  <main className={styles.root}>
    <footer>
      <h1 className={styles.title}>Webinars</h1>
      <p className={styles.description}>
        Here you can register and take part in educational
        webinars conducted by the best digital marketing experts.
      </p>
      <button type="button">Add new</button>
    </footer>
  </main>
);

export default Main;
