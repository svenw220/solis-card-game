/* ============
 * Mutations for the game module
 * ============
 *
 * The mutations that are available on the
 * game module.
 */

import { GET_DECK_LIST_BY_TURN, UPDATE_DECK_LIST } from './mutation-types';

/* eslint-disable no-param-reassign */
export default {
  [GET_DECK_LIST_BY_TURN](state, payload) {
    state.players = payload;
  },
  [UPDATE_DECK_LIST](state, payload) {
    const { decks: { myDecks, oppoDecks } } = state;
    state.decks.myDecks = myDecks.filter((deck) => deck.id !== payload);
    state.decks.oppoDecks = oppoDecks.filter((deck) => deck.id !== payload);
  },
};
