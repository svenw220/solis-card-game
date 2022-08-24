export const timer = (store) => {
  store.subscribe((mutation) => {
    console.log('@@@', mutation);
    if (mutation.type === 'PUT_CARD_BY_TURN') {
      setTimeout(() => {
        store.commit('SWITCH_TURN');
      }, 5000);
    }
  });
};

export default {
  timer,
};
