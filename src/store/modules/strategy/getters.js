/* ============
 * Getters for the auth module
 * ============
 *
 * The getters that are available on the
 * auth module.
 */

export default {
  getSlotInfo: (state) => (id) => state.board.filter((item) => item.id === id),
  getStrategyCondition: (state) => state.condition,
};
