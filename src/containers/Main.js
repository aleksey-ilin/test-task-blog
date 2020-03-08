import { connect } from 'react-redux';
import Component from '../components/Main/Main';
import * as actionCreators from '../actions';

const Container = connect(null, actionCreators)(Component);

export default Container;
