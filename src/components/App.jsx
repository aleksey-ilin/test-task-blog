import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header/Header';
import Main from '../containers/Main';
import Modal from '../containers/CreateWebinar';
import styles from './App.css';

const App = ({ isShowModal }) => (
  <Router>
    <Switch>
      <Route exact path="/">
        <div className={styles.root}>
          <Header />
          <Main />
          {isShowModal && <Modal />}
        </div>
      </Route>
    </Switch>
  </Router>
);

App.propTypes = {
  isShowModal: PropTypes.bool,
};

App.defaultProps = {
  isShowModal: false,
};

export default App;
