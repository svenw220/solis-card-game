/* ============
 * Getters for the auth module
 * ============
 *
 * The getters that are available on the
 * auth module.
 */

export default {
  getTurn: (state) => state.turn.current,

  getMovingCard: (state) => state.movingCard,

  getEndowmentState: (state) => state.endowmentTime,

  getCardsByTurn: (state) => (turn) => state.battleCards[turn],
};
