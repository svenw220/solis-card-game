export default {
  getSlotInfo: (state) => (id) => state.board.filter((item) => item.id === id),
  getStrategyCondition: (state) => state.condition,
  getFullStrategyState: (state) => state.info.flat().length === 6,
};
