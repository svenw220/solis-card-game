<template>
  <div :class="['time-counter', { 'is-opponent': oppoTurn }]">
    <p class="has-text-weight-semibold">{{ timeRemaining }}</p>
  </div>
</template>

<script>
/* ============
 * Game Index Page
 * ============
 *
 * The game index page.
 */

export default {
  /**
   * The name of the page.
   */
  name: 'TimeCounter',
  /**
   * The components that the page can use.
   */
  components: {},
  props: {},
  data() {
    return {
      turn: 'mine',
      remaning: 10,
      timeCaption: '',
    };
  },
  computed: {
    timeRemaining() {
      return this.turn === 'mine'
        ? `You have ${this.remaning} secs left`
        : `${this.remaning} secs for opponent`;
    },
    oppoTurn() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.turn = this.$store.getters['game/getTurn'];

      return this.turn === 'oppo';
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.time-counter {
  background-image: url('../../assets/images/time_remaning.svg');
  background-repeat: no-repeat;
  background-size: contain;
  width: 175px;
  height: 54px;
  text-align: center;
  line-height: 54px;
  color: #fff;
  p {
    position: relative;
    top: -0.25rem;
  }

  &.is-opponent {
    background-image: url('../../assets/images/red_remaning.svg');
    p {
      top: 0.25rem;
    }
  }
}
</style>
