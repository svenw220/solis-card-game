import { SET_CURRENT_CARD } from './mutation-types';

/* eslint-disable no-param-reassign */
export default {
  [SET_CURRENT_CARD](state, payload) {
    console.log(payload);
    state.currentCard = payload;
  },
};
