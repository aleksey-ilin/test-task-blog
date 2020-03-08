import { connect } from 'react-redux';
import Component from '../components/PaginationsList/PaginationsList';

const Container = connect(
  (state) => ({ webinars: state.webinars, webinarsPerPage: state.webinarsPerPage }),
  null,
)(Component);

export default Container;
