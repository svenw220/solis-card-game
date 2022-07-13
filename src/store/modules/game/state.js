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
    ['dashed_board', 'dashed_board', 'dashed_board'],
    ['dashed_board', 'dashed_board', 'dashed_board'],
  ],
  endowmentTime: false,
  endowment: {
    state: false,
    mile: 5,
    oppo: 5,
  },
  turn: {
    current: true,
    firstTurn: true,
  },
  fullCardSetUp: false,
};
