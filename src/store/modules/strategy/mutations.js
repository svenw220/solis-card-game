/* ============
 * Mutations for the strategy module
 * ============
 *
 * The mutations that are available on the
 * strategy module.
 */

import { SET_PLAYERS_CARD_INFO } from './mutation-types';

/* eslint-disable no-param-reassign */
export default {
  [SET_PLAYERS_CARD_INFO](state, payload) {
    state.players = payload;
  },
};
