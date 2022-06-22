/* ============
 * Actions for the auth module
 * ============
 *
 * The actions that are available on the
 * auth module.
 */

// import Vue from 'vue';
// import store from '@/store';
import * as types from './mutation-types';

export const check = ({ commit }) => {
  commit('types.CHECK');
};

export const setTurn = ({ commit }) => {
  /*
   * Normally you would use a proxy to register the user:
   *
   * new Proxy()
   *  .register(payload)
   *  .then((response) => {
   *    commit(types.REGISTER, response);
   *  })
   *  .catch(() => {
   *    console.log('Request failed...');
   *  });
   */
  commit(types.SET_TURN, 'Oppo');
};

export const setMovingCard = ({ commit }) => {
  commit(types.SET_MOVING_CARD);
};

export const clearMovingCard = ({ commit }) => {
  commit(types.CLEAR_MOVING_CARD);
};
