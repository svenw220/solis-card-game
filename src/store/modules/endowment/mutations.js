// eslint-disable-next-line object-curly-newline
import { SET_CURRENT_CARD, SET_ENDOWMENT_TIME, DECREASE, INCREASE, CLEAR_COUNT, FLOW_TURN, END_ENDOWMENT } from './mutation-types';

/* eslint-disable no-param-reassign */
export default {
  [SET_CURRENT_CARD](state, payload) {
    state.currentCard = payload;
  },
  [SET_ENDOWMENT_TIME](state, payload) {
    state.condition = payload;
  },
  [DECREASE](state) {
    state.count -= 1;
  },
  [INCREASE](state) {
    state.count += 1;
  },
  [CLEAR_COUNT](state) {
    state.count = 5;
  },
  [FLOW_TURN](state) {
    state.turn.push(true);
  },
  [END_ENDOWMENT](state) {
    state.condition = false;
  },
};
