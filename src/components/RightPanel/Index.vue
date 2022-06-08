<template>
  <div class="right-panel">
    <div class="game-guide">
      <p>
        If you are new to the game please check the
        <span class="guide-text has-text-weight-semibold">game guide</span>
        below
      </p>
      <b-button class="guide-button has-text-weight-semibold mt-2">
        <img
          class="mt-1 mr-2"
          src="@/assets/images/guide_icon.svg"
          alt="Game Guide"
        />
        <span>Game Guide</span>
      </b-button>
    </div>
    <CardOverview />
    <GameLog />
  </div>
</template>

<script>
/* ============
 * Right Panel Page
 * ============
 *
 * The right panel page.
 */

import CardOverview from '@/components/Card/Index.vue';
import GameLog from '@/components/GameLog/Index.vue';

export default {
  /**
   * The name of the page.
   */
  name: 'RightPanel',
  /**
   * The components that the page can use.
   */

  components: { CardOverview, GameLog },
  props: {},
};
</script>

<style lang="scss" scoped>
.right-panel {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 1.5rem;

  .game-guide {
    p {
      color: #74737d;
      text-align: center;
    }

    .guide-button {
      width: 100%;
    }
  }
}
</style>
