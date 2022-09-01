import { TAP_OPPO_CARD } from '@/store/modules/strategy/mutation-types';

export const fullStrategyState = () => (store) => {
  store.subscribe((mutation) => {
    const { type } = mutation;
    console.log('@@@', type, store);
    if (type === `strategy/${TAP_OPPO_CARD}`) {
      console.log(store.strategy);
    }
  });
};

export default {
  fullStrategyState,
};
