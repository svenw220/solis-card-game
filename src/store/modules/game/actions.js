import * as types from './mutation-types';

export const setMovingCard = async ({ commit }, payload) => {
  commit(types.SET_MOVING_CARD, payload);
};

export const putCardByTurn = async ({ commit }, payload) => {
  commit(types.PUT_CARD_BY_TURN, payload);
  commit(types.FULL_CARD_SETUP);
};

export const switchTurn = ({ commit }) => commit(types.SWITCH_TURN);
export const cardSetupPhase = ({ commit }, payload) =>
  commit(types.CARD_SETUP_PHASE, payload);

export default {
  putCardByTurn,
  switchTurn,
  setMovingCard,
  cardSetupPhase,
};
