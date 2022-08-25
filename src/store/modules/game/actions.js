import * as types from './mutation-types';

// const timer = new Promise((resolve) => setTimeout(resolve, 2000));

export const putCardByTurn = async ({ commit }, payload) => {
  commit(types.PUT_CARD_BY_TURN, payload);
};

export const switchTurn = ({ commit }) => commit(types.SWITCH_TURN);
export const fullCardSetup = ({ commit }) => commit(types.FULL_CARD_SETUP);

export default {
  putCardByTurn,
  switchTurn,
  fullCardSetup,
};
