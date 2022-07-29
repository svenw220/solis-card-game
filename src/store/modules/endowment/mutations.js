import { SET_CURRENT_CARD, SET_ENDOWMENT_TIME } from './mutation-types';

/* eslint-disable no-param-reassign */
export default {
  [SET_CURRENT_CARD](state, payload) {
    state.currentCard = payload;
  },
  [SET_ENDOWMENT_TIME](state, payload) {
    console.log(payload);
    state.condition = payload;
  },
};
