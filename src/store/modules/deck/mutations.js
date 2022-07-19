/* ============
 * Mutations for the game module
 * ============
 *
 * The mutations that are available on the
 * game module.
 */

import { GET_DECK_LIST_BY_TURN } from './mutation-types';

/* eslint-disable no-param-reassign */
export default {
  [GET_DECK_LIST_BY_TURN](state, payload) {
    state.players = payload;
  },
};
