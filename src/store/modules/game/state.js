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
  battleCards: {
    mine: ['dashed_board', 'dashed_board', 'dashed_board'],
    oppo: ['dashed_board', 'dashed_board', 'dashed_board'],
  },
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
};
