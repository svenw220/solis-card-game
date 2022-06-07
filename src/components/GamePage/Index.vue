<template>
  <section class="game-page columns">
    <div class="column is-3">
      <PlayerPanel />
    </div>
    <div class="column is-6"><Deck /></div>
    <div class="column is-3">3</div>
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
import Deck from '@/components/Deck/Index.vue';

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
    Deck,
  },
  props: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.game-page {
  &.columns {
    margin: 0;
  }
  .column {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
