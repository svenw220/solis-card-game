export const timer = () => (store) => {
  store.subscribe((mutation) => {
    if (mutation.type === 'SWITCH_TURN') {
      setTimeout(() => {
        store.commit('SWITCH_TURN');
      }, 5000);
    }
  });
};

export default {
  timer,
};
