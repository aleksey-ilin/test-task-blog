import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import Main from '../containers/Main';
import Modal from '../containers/Modal';
import styles from './App.css';

const App = ({ isShowModal }) => (
  <div className={styles.app}>
    <Header />
    <Main />
    {isShowModal && <Modal />}
  </div>
);

App.propTypes = {
  isShowModal: PropTypes.bool,
};

App.defaultProps = {
  isShowModal: false,
};

export default connect((store) => ({ isShowModal: store.isShowModal }))(App);
