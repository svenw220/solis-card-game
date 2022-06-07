<template>
  <div class="player-panel is-flex is-flex-direction-column">
    <Avatar
      isOpponent="true"
      playerWalletAddr="0x5478...26A031"
      playerTitle="Opponent"
    />
    <Avatar playerWalletAddr="0x5478...26A031" />
  </div>
</template>

<script>
/* ============
 * Game Index Page
 * ============
 *
 * The game index page.
 */

import Avatar from '@/components/Avatar/Index.vue';

export default {
  /**
   * The name of the page.
   */
  name: 'PlayerPanel',
  /**
   * The components that the page can use.
   */
  components: {
    Avatar,
  },
  props: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.player-panel {
  box-shadow: inset -2px 0px 0px #e6e5e8;
}
</style>
