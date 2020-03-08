import { createReducer } from '@reduxjs/toolkit';
import { toggleShowModal, addWebinar } from '../actions/index';

const initialState = {
  isShowModal: false,
  webinars: JSON.parse(localStorage.getItem('webinars')) || [],
};

const reducer = createReducer(initialState, {
  [toggleShowModal]: (state) => {
    const prevState = state;
    prevState.isShowModal = !prevState.isShowModal;
  },
  [addWebinar]: (state, action) => {
    const prevState = state;
    prevState.webinars = [...prevState.webinars, action.payload];
  },
});

export default reducer;
