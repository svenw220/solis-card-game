import * as types from './mutation-types';

// const timer = new Promise((resolve) => setTimeout(resolve, 2000));

export const putCardByTurn = async ({ commit }, payload) => {
  commit(types.PUT_CARD_BY_TURN, payload);
  commit(types.FULL_CARD_SETUP);
};

export const switchTurn = ({ commit }) => commit(types.SWITCH_TURN);

export default {
  putCardByTurn,
  switchTurn,
};
