import { createReducer } from '@reduxjs/toolkit';
import { toggleShowModal } from '../actions/index';

const initialState = { isShowModal: false };

const reducer = createReducer(initialState, {
  [toggleShowModal]: (prevState) => {
    const state = prevState;
    state.isShowModal = !state.isShowModal;
  },
});

export default reducer;
