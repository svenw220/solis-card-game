/* ============
 * State of the game module
 * ============
 *
 * The initial state of the game module.
 */

export default {
  timeRemaining: 0,
  from: '',
  movingCard: '',
  battleCards: [
    [false, false, false],
    [false, false, false],
  ],
  endowmentTime: false,
  endowment: {
    state: false,
    mine: 5,
    oppo: 5,
  },
  turn: {
    current: true,
    firstTurn: true,
  },
  fullCardSetUp: false,
};
