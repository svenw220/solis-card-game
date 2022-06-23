/* ============
 * State of the auth module
 * ============
 *
 * The initial state of the auth module.
 */

export default {
  turn: 'mine',
  timeRemaining: 0,
  from: '',
  movingCard: '',
  battleCards: {
    mine: ['dashed_board', 'dashed_board', 'dashed_board'],
    oppo: ['dashed_board', 'dashed_board', 'dashed_board'],
  },
};
