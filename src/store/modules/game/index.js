/* ============
 * Game Module
 * ============
 */

import { timer } from '@/plugins/timer';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';

export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
  plugins: [timer],
};
