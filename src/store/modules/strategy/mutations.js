/* ============
 * Mutations for the strategy module
 * ============
 *
 * The mutations that are available on the
 * strategy module.
 */

import { SET_PLAYERS_CARD_INFO, SET_STRATEGY_TIME } from './mutation-types';

/* eslint-disable no-param-reassign */
export default {
  [SET_PLAYERS_CARD_INFO](state, payload) {
    state.players = payload;
  },
  [SET_STRATEGY_TIME](state, payload) {
    state.condition = payload;
  },
};
