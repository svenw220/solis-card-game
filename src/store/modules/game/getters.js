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

  getEndowmentState: (state) => state.endowment,

  getCardsByTurn: (state) => (turn) => {
    const { battleCards } = state;
    const myCards = battleCards[0];
    const oppoCards = battleCards[1];
    if (turn) return myCards;

    return oppoCards;
  },
  getCardSetUpState: (state) => state.fullCardSetUp,
};
