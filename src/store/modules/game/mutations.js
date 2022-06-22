/* ============
 * Mutations for the auth module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

import {
  SWAP_CARD,
  FROM_DECKLIST,
  FROM_ARENA,
  SET_MOVING_CARD,
  CLEAR_MOVING_CARD,
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
  [SET_MOVING_CARD](state, data) {
    state.movingCard = data;
  },
  [CLEAR_MOVING_CARD](state) {
    state.movingCard = '';
  },
};
