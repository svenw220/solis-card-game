<template>
  <section class="avatar">
    <b-image
      :src="require('@assets/images/avatar.svg')"
      alt="Player Avatar"
    ></b-image>
    <p class="player-name">You</p>
    <p class="wallet-address">0x5478...26A031</p>
    <b-image :src="require('@assets/images/action.svg')"></b-image>
  </section>
</template>

<script>
/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */

export default {
  /**
   * The name of the page.
   */
  name: 'Avatar',
  /**
   * The components that the page can use.
   */
  components: {},
  props: {},
};
</script>

<style lang="scss" scoped></style>
