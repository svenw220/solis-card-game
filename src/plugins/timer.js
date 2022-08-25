import { PUT_CARD_BY_TURN } from '@/store/modules/game/mutation-types';

export const timer = () => (store) => {
  store.subscribe((mutation) => {
    const { type } = mutation;
    if (type === `game/${PUT_CARD_BY_TURN}`) {
      console.log('first');
    }
  });
};

export default {
  timer,
};
