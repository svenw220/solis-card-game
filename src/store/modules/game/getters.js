/* ============
 * Getters for the auth module
 * ============
 *
 * The getters that are available on the
 * auth module.
 */

export default {
  getTurn: (state) => state.turn,

  getMovingCard: (state) => state.movingCard,

  getCardsByTurn: (state) => (turn) => state.battleCards[turn],
};
