import { connect } from 'react-redux';
import Component from '../components/App';

const Container = connect((state) => ({ isShowModal: state.isShowModal }), null)(Component);

export default Container;
