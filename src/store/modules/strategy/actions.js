import * as types from './mutation-types';

export const setStrategyPhase = ({ commit }, payload) => {
  commit(types.SET_STRATEGY_TIME, payload);
};

export default {
  setStrategyPhase,
};
