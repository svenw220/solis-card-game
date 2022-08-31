/* ============
 * Mutations for the strategy module
 * ============
 *
 * The mutations that are available on the
 * strategy module.
 */

import {
  SET_PLAYERS_CARD_INFO,
  SET_STRATEGY_TIME,
  SET_ACTIVE_CARD,
  TAP_OPPO_CARD,
} from './mutation-types';

/* eslint-disable no-param-reassign */
export default {
  [SET_PLAYERS_CARD_INFO](state, payload) {
    state.players = payload;
  },
  [SET_STRATEGY_TIME](state, payload) {
    state.condition = payload;
  },
  [SET_ACTIVE_CARD](state, payload) {
    state.activeCardId = payload;
  },
  [TAP_OPPO_CARD](state, payload) {
    const strategy = [state.activeCardId, payload];
    state.info[0].push(strategy);
    state.count -= 1;
    state.activeCardId = 0;
  },
};
