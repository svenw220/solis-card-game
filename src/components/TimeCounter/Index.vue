<template>
  <div :class="['time-counter', { me: currentTurn }]">
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
      remaning: 10,
    };
  },
  computed: {
    timeRemaining() {
      return this.currentTurn
        ? `${this.remaning} secs for opponent`
        : `You have ${this.remaning} secs left`;
    },
    currentTurn() {
      return this.$store.getters['game/getTurn'];
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

  &.me {
    background-image: url('../../assets/images/red_remaning.svg');
    p {
      top: 0.25rem;
    }
  }
}
</style>
