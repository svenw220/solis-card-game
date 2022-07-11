/* ============
 * State of the game module
 * ============
 *
 * The initial state of the game module.
 */

export default {
  // turn: 'mine',
  timeRemaining: 0,
  from: '',
  movingCard: '',
  battleCards: [
    ['dashed_board', 'dashed_board', 'dashed_board'],
    ['dashed_board', 'dashed_board', 'dashed_board'],
  ],
  endowmentTime: false,
  endowment: {
    time: false,
    mile: 5,
    oppo: 5,
  },
  turn: {
    current: true,
    firstTurn: true,
  },
  cardStetUp: false,
};
