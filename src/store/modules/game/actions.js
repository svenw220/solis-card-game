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
  commit(types.SET_TURN, 'Oppo');
};

export const setMovingCard = ({ commit }) => {
  commit(types.SET_MOVING_CARD);
};

export const clearMovingCard = ({ commit }) => {
  commit(types.CLEAR_MOVING_CARD);
};

export const switchTurn = ({ commit }) => {
  commit(types.SWITCH_TURN);
};
