/* ============
 * Getters for the auth module
 * ============
 *
 * The getters that are available on the
 * auth module.
 */

export default {
  getEndowmentState: (state) => state.condition,
  getCurrentCardInfo: (state) => state.currentCard,
};
