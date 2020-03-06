import { connect } from 'react-redux';
import Component from '../components/Main/Main';
import * as actionCreators from '../actions';

const Container = connect(
  (state) => ({ isShowModal: state.isShowModal }),
  actionCreators,
)(Component);

export default Container;
