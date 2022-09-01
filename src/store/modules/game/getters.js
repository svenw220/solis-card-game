export default {
  getTurn: (state) => state.turn.current,
  getFirstTurn: (state) => state.turn.firstTurn,
  getMovingCard: (state) => state.movingCard,

  getEndowmentState: (state) => state.endowment,
  getEndowmentCondition: (state) => state.endowment.state,
  getCardsByTurn: (state) => (turn) => {
    const { battleCards } = state;
    const [oppoCards, myCards] = battleCards;
    return turn ? oppoCards : myCards;
  },
  getCardSetUpState: (state) => state.fullCardSetUp,
  getCardPosById: (state) => (id) => {
    let pos = false;
    const { battleCards } = state;
    battleCards.map((cards, index) => {
      const target = cards.filter((item) => item.id === id);
      if (target.length) pos = Boolean(index);
      return true;
    });
    return !pos;
  },
  getBattleCards: (state) => state.battleCards,
};
