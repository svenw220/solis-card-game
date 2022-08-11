/* ============
 * Getters for the auth module
 * ============
 *
 * The getters that are available on the
 * auth module.
 */

export default {
  getSlotInfo: (state) => (id) => state.board.filter((item) => item.id === id),
  getStrategyInfoByTurn: state => turn => state.board.filter((item) => turn ? item),
};
