<template>
  <section class="game-page columns is-desktop">
    <div class="first-panel column is-2">
      <PlayerPanel />
    </div>
    <div class="column is-8"><Arena /></div>
    <EndowmentModal :modalActive="endowment" />
    <div class="last-panel column is-2">
      <RightPanel />
    </div>
  </section>
</template>

<script>
/* ============
 * Game Index Page
 * ============
 *
 * The game index page.
 */

import PlayerPanel from '@/components/PlayerPanel/Index.vue';
import Arena from '@/components/Arena/Index.vue';
import RightPanel from '@/components/RightPanel/Index.vue';
import EndowmentModal from '@/components/EndowmentModal/Index.vue';

export default {
  /**
   * The name of the page.
   */
  name: 'GamePage',
  /**
   * The components that the page can use.
   */
  components: {
    PlayerPanel,
    Arena,
    RightPanel,
    EndowmentModal,
  },
  props: {},
  data() {
    return {
      endowment: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.game-page {
  height: 100vh;
  overflow-y: hidden;
  &.columns {
    margin: 0;
  }
  .column {
    padding-left: 0;
    padding-right: 0;
  }

  div {
    &:first-child,
    &:last-child {
      box-shadow: inset 2px 0px 0px #e6e5e8;
    }
  }
}
</style>
