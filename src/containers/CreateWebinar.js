import { connect } from 'react-redux';
import Component from '../components/CreateWebinar/CreateWebinar';
import * as actionCreators from '../actions';

const Container = connect((state) => ({ webinars: state.webinars }), actionCreators)(Component);

export default Container;
