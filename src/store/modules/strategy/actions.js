import * as types from './mutation-types';

export const setStrategyPhase = ({ commit }, payload) => {
  commit(types.SET_STRATEGY_TIME, payload);
};

export const setActiveCard = ({ commit }, payload) => {
  commit(types.SET_ACTIVE_CARD, payload);
};

export const tapOppoCards = ({ commit }, payload) => {
  commit(types.TAP_OPPO_CARD, payload);
};

export const clearStrategyCount = ({ commit }) => {
  commit(types.CLEAR_STRATEGY_COUNT);
};

export default {
  setStrategyPhase,
  setActiveCard,
  tapOppoCards,
  clearStrategyCount,
};
