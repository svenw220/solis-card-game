/* ============
 * Getters for the auth module
 * ============
 *
 * The getters that are available on the
 * auth module.
 */

export default {
  getDeckListByTurn: (state) => (id) => {
    const {
      decks: { myDecks, oppoDecks },
    } = state;
    return id ? oppoDecks : myDecks;
  },
};
