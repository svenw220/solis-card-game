export default {
  getTurn: (state) => state.turn.current,

  getMovingCard: (state) => state.movingCard,

  getEndowmentState: (state) => state.endowment,
  getEndowmentCondition: (state) => state.endowment.state,
  getCardsByTurn: (state) => (turn) => {
    const { battleCards } = state;
    const [oppoCards, myCards] = battleCards;
    return turn ? oppoCards : myCards;
  },
  getCardSetUpState: (state) => state.fullCardSetUp,
};
