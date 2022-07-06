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

  getCardsByTurn: (state) => (turn) => {
    if (turn === 'oppo') {
      return state.battleCards[1];
    }

    return state.battleCards[0];
  },
};
