/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */
import FirebaesService from '@/firebase';
import * as types from './mutation-types';

const { getPlayersInfo } = FirebaesService;

export default {
  setCardInfo: ({ commit }, payload) => {
    commit(types.SET_PLAYERS_CARD_INFO, payload);
  },
  getCardInfo: ({ commit }) => {
    const payload = getPlayersInfo();
    commit(types.SET_PLAYERS_CARD_INFO, payload);
  },
};
