/* ============
 * State of the auth module
 * ============
 *
 * The initial state of the auth module.
 */

const initialCardState = ['dashed_board', 'dashed_board', 'dashed_board'];

export default {
  turn: 'mine',
  timeRemaining: 0,
  from: '',
  movingCard: '',
  battleCards: {
    mine: initialCardState,
    oppo: initialCardState,
  },
};
