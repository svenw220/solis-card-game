// import { PUT_CARD_BY_TURN } from '@/store/modules/game/mutation-types';
import { engine } from '@/utils/calc';

export const attack = () => (store) => {
  store.subscribe((mutation, state) => {
    const { type } = mutation;
    if (
      // eslint-disable-next-line operator-linebreak
      type === 'strategy/TAP_OPPO_CARD' &&
      state.strategy.info.flat().length === 6
    ) {
      const { battleCards } = state.game;
      const { info } = state.strategy;
      const result = engine(battleCards, info);

      state.game.battleCards = result;
    }
  });
};

export default {
  attack,
};
