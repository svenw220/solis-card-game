<template>
  <div class="time-counter">
    <p>
      You have
      <span class="has-text-weight-semibold">{{ remaning }} secs left</span>
    </p>
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
  margin-top: 166px;
  margin-bottom: 161px;
  p {
    position: relative;
    top: -0.25rem;
  }
}
</style>
