<template>
  <div class="right-panel">
    <div class="game-guide">
      <p>
        If you are new to the game please check the
        <span class="guide-text has-text-weight-semibold">game guide</span>
        below
      </p>
      <div class="guide-button has-text-weight-semibold mt-2">
        <img
          class="mr-2"
          src="@/assets/images/guide_icon.svg"
          alt="Game Guide"
        />
        <p>Game Guide</p>
      </div>
    </div>
    <div class="right-panel-content">
      <CardOverview />
      <GameLog />
    </div>
  </div>
</template>

<script>
/* ============
 * Right Panel Page
 * ============
 *
 * The right panel page.
 */

import CardOverview from '@/components/Overview/Index.vue';
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
  methods: {},
};
</script>

<style lang="scss" scoped>
.right-panel {
  height: 100%;
  padding: 1.5rem;
  .game-guide {
    height: 20%;
    p {
      color: #74737d;
      text-align: center;
    }
    .guide-button {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      border: 1px solid rgba(116, 115, 125, 0.24);
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08);
      border-radius: 8px;
      padding: 10px 50px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  &-content {
    display: flex;
    flex-direction: column;
    height: 80%;
    > div {
      flex: 1;
    }
  }
}
</style>
