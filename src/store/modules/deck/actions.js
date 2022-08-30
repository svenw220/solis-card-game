/* ============
 * Actions for the deck module
 * ============
 *
 * The actions that are available on the
 * deck module.
 */

// import { onValue } from 'firebase/database';
// import db from '@/firebase';
import * as types from './mutation-types';

export const setCardInfo = ({ commit }, payload) => {
  commit(types.SET_PLAYERS_CARD_INFO, payload);
};

export const updateDeckList = ({ commit }, payload) => {
  commit(types.UPDATE_DECK_LIST, payload);
};

export default {
  setCardInfo,
  updateDeckList,
};
