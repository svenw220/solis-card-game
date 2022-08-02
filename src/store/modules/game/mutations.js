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
  INCREASE_CARD_ABILITY,
  APPLY_ENDOWMENT,
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
    const [oppoCards, myCards] = state.battleCards;
    const { movingCard } = state;
    if (current) {
      oppoCards[payload] = movingCard;
    } else {
      myCards[payload] = movingCard;
    }
  },
  [SET_ENDOWMENT_TIME](state) {
    const {
      turn: { firstTurn },
    } = state;

    state.turn.current = !firstTurn;
    state.endowmentTime = !state.endowmentTime;
    state.endowment.state = !state.endowment.state;
  },
  [FULL_CARD_SETUP](state) {
    const { battleCards } = state;
    if (!battleCards.flat().includes(false)) {
      state.fullCardSetUp = true;
    }
  },
  [INCREASE_CARD_ABILITY](state, payload) {
    const { battleCards } = state;
    console.log(battleCards, payload);
    // battleCards.flat().map((card) => {
    // if(card.id === payload) card.
    // });
  },
  [APPLY_ENDOWMENT](state, payload) {
    const { id, result } = payload;
    const {
      turn: { current },
    } = state;
    const tmp = state.battleCards[Number(!current)].map((item) => {
      if (item.id === id) {
        item.ability = result;
      }
      return item;
    });
    state.battleCards[Number(current)] = tmp;
  },
};
