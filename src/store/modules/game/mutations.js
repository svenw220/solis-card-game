/* ============
 * Mutations for the game module
 * ============
 *
 * The mutations that are available on the
 * game module.
 */

import {
  SWAP_CARD,
  FROM_DECKLIST,
  FROM_ARENA,
  SET_MOVING_CARD,
  CLEAR_MOVING_CARD,
  SWITCH_TURN,
  PUT_CARD_BY_TURN,
  SET_ENDOWMENT_TIME,
} from './mutation-types';

/* eslint-disable no-param-reassign */
export default {
  [FROM_ARENA](state) {
    console.log(state);
  },
  [SWAP_CARD](state) {
    console.log(state);
  },
  [FROM_DECKLIST](state) {
    console.log(state);
  },
  [SET_MOVING_CARD](state, payload) {
    state.movingCard = payload;
  },
  [CLEAR_MOVING_CARD](state) {
    state.movingCard = '';
  },
  [SWITCH_TURN](state) {
    state.turn = 'oppo';
  },
  [PUT_CARD_BY_TURN](state, payload) {
    const { turn } = state;
    state.battleCards[turn][payload] = state.movingCard;
  },
  [SET_ENDOWMENT_TIME](state) {
    state.endowmentTime = !state.endowmentTime;
  },
};
