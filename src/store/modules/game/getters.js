export default {
  getTurn: (state) => state.turn.current,

  getMovingCard: (state) => state.movingCard,

  getEndowmentState: (state) => state.endowment,

  getCardsByTurn: (state) => (turn) => {
    const { battleCards } = state;
    const [myCards, oppoCards] = battleCards;
    return turn ? myCards : oppoCards;
  },
  getCardSetUpState: (state) => state.fullCardSetUp,
};
