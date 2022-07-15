/* ============
 * Getters for the auth module
 * ============
 *
 * The getters that are available on the
 * auth module.
 */

export default {
  getCards: (state) => (id) => state.players.filter((item) => item.id === id),
};
