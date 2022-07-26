/* ============
 * Mutations for the game module
 * ============
 *
 * The mutations that are available on the
 * game module.
 */

import {
  SWAP_CARD,
  FROM_DECKLIST,
  FROM_ARENA,
  SET_MOVING_CARD,
  CLEAR_MOVING_CARD,
  SWITCH_TURN,
  PUT_CARD_BY_TURN,
  SET_ENDOWMENT_TIME,
  FULL_CARD_SETUP,
} from './mutation-types';

/* eslint-disable no-param-reassign */
export default {
  [FROM_ARENA](state) {
    console.log(state);
  },
  [SWAP_CARD](state) {
    console.log(state);
  },
  [FROM_DECKLIST](state) {
    console.log(state);
  },
  [SET_MOVING_CARD](state, payload) {
    state.movingCard = payload;
  },
  [CLEAR_MOVING_CARD](state) {
    state.movingCard = 0;
  },
  [SWITCH_TURN](state) {
    state.turn.current = !state.turn.current;
  },
  [PUT_CARD_BY_TURN](state, payload) {
    const {
      turn: { current },
    } = state;
    const [myCards, oppoCards] = state.battleCards;
    const { movingCard } = state;
    if (current) {
      myCards[payload] = movingCard;
    } else {
      oppoCards[payload] = movingCard;
    }
  },
  [SET_ENDOWMENT_TIME](state) {
    state.endowmentTime = !state.endowmentTime;
  },
  [FULL_CARD_SETUP](state) {
    const { battleCards } = state;
    if (!battleCards.flat().includes(false)) {
      state.fullCardSetUp = true;
    }
  },
};
