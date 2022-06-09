<template>
  <div class="player-panel">
    <Avatar
      isOpponent="true"
      playerWalletAddr="0x5478...26A031"
      playerTitle="Opponent"
    />
    <TimeCounter />
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
import TimeCounter from '@/components/TimeCounter/Index.vue';

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
    TimeCounter,
  },
  props: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.player-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
