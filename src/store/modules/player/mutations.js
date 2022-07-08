/* ============
 * Mutations for the game module
 * ============
 *
 * The mutations that are available on the
 * game module.
 */

import { SET_PLAYERS_CARD_INFO } from './mutation-types';

/* eslint-disable no-param-reassign */
export default {
  [SET_PLAYERS_CARD_INFO](state, payload) {
    state.players = payload;
    console.log(state.players);
  },
};
