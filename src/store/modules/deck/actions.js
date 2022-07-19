/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */
// import { onValue } from 'firebase/database';
// import db from '@/firebase';
import * as types from './mutation-types';

export default {
  setCardInfo: ({ commit }, payload) => {
    commit(types.SET_PLAYERS_CARD_INFO, payload);
  },
  // getPlayersCardInfo: ({ commit }) => {
  //   onValue(db.playersRef, (snapshot) => {
  //     const draft = Object.entries(snapshot.val());
  //     const payload = draft.map(([player, info]) => ({
  //       id: player,
  //       info,
  //     }));
  //     commit(types.SET_PLAYERS_CARD_INFO, payload);
  //   });
  // },
};
