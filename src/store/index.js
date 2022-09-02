/* ============
 * Vuex Store
 * ============
 *
 * The store of the application.
 *
 * http://vuex.vuejs.org/en/index.html
 */

import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

// Middlewares
import { timer } from '@/plugins/timer';
import { attack } from '@/plugins/attack';

// Modules
import game from './modules/game';
import player from './modules/player';
import deck from './modules/deck';
import endowment from './modules/endowment';
import strategy from './modules/strategy';

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  /**
   * Assign the modules to the store.
   */
  modules: {
    game,
    player,
    deck,
    endowment,
    strategy,
  },

  /**
   * If strict mode should be enabled.
   */
  strict: debug,

  /**
   * Plugins used in the store.
   */
  plugins: debug ? [createLogger(), timer(), attack()] : [],
});
