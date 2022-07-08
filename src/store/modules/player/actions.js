/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

import * as types from './mutation-types';

export default {
  setCardInfo: ({ commit }) => {
    commit(types.SET_PLAYERS_CARD_INFO);
  },
};
