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

export default {
  setTurn: ({ commit }) => {
    commit(types.SET_TURN, 'Oppo');
  },
  setMovingCard: ({ commit }) => {
    commit(types.SET_MOVING_CARD);
  },
  clearMovingCard: ({ commit }) => {
    commit(types.CLEAR_MOVING_CARD);
  },
  switchTurn: ({ commit }) => {
    commit(types.SWITCH_TURN);
  },
  putCardByTurn: ({ commit }, payload) => {
    commit(types.PUT_CARD_BY_TURN, payload);
  },
  setEndowmentTime: ({ commit }) => {
    commit(types.SET_ENDOWMENT_TIME);
  },
};
